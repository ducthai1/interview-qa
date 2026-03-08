import { Router, type Request, type Response } from 'express'
import { Progress } from '../models/Progress.js'
import { AttemptHistory } from '../models/AttemptHistory.js'
import { GuestUser } from '../models/GuestUser.js'

const router = Router()

/**
 * GET /api/progress/:userId
 * Fetch progress for a user. Returns empty progress if not found.
 */
router.get('/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const doc = await Progress.findOne({ userId })

    if (!doc) {
      return res.json({ answered: {}, bookmarked: [] })
    }

    // Convert Mongoose Map to plain object for JSON response
    const answered: Record<string, { correct: boolean; timestamp: number; attempts: number }> = {}
    doc.answered.forEach((val, key) => {
      answered[key] = { correct: val.correct, timestamp: val.timestamp, attempts: val.attempts }
    })

    return res.json({
      answered,
      bookmarked: doc.bookmarked,
    })
  } catch (err) {
    console.error('GET /api/progress/:userId error:', err)
    return res.status(500).json({ error: 'Failed to load progress' })
  }
})

/**
 * PUT /api/progress/:userId
 * Save/update entire progress for a user (full sync from client).
 */
router.put('/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const { answered, bookmarked } = req.body

    // Convert plain object to Map for Mongoose
    const answeredMap = new Map(Object.entries(answered || {}))

    const doc = await Progress.findOneAndUpdate(
      { userId },
      {
        userId,
        answered: answeredMap,
        bookmarked: bookmarked || [],
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    )

    // Convert Map back to plain object for response
    const answeredObj: Record<string, { correct: boolean; timestamp: number; attempts: number }> = {}
    doc.answered.forEach((val, key) => {
      answeredObj[key] = { correct: val.correct, timestamp: val.timestamp, attempts: val.attempts }
    })

    return res.json({
      answered: answeredObj,
      bookmarked: doc.bookmarked,
    })
  } catch (err) {
    console.error('PUT /api/progress/:userId error:', err)
    return res.status(500).json({ error: 'Failed to save progress' })
  }
})

/**
 * POST /api/progress/:userId/answer
 * Record a single answer. Increments attempts counter and creates AttemptHistory record.
 */
router.post('/:userId/answer', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const { questionId, correct } = req.body

    if (!questionId || correct === undefined) {
      return res.status(400).json({ error: 'questionId and correct are required' })
    }

    // Find existing entry to determine attempt number
    const existing = await Progress.findOne({ userId }, { [`answered.${questionId}`]: 1 })
    const existingEntry = existing?.answered?.get(questionId)
    const attempts = existingEntry ? existingEntry.attempts + 1 : 1

    const update = {
      [`answered.${questionId}`]: {
        correct,
        timestamp: Date.now(),
        attempts,
      },
    }

    await Promise.all([
      // Upsert progress with incremented attempts
      Progress.findOneAndUpdate(
        { userId },
        { $set: update, $setOnInsert: { userId, bookmarked: [] } },
        { upsert: true }
      ),
      // Create attempt history record
      AttemptHistory.create({
        userId,
        questionId,
        attemptNumber: attempts,
        correct,
      }),
      // Upsert guest user lastActiveAt
      GuestUser.findOneAndUpdate(
        { guestId: userId },
        { $set: { lastActiveAt: new Date() }, $setOnInsert: { guestId: userId } },
        { upsert: true }
      ),
    ])

    return res.json({ success: true, attempts })
  } catch (err) {
    console.error('POST /api/progress/:userId/answer error:', err)
    return res.status(500).json({ error: 'Failed to record answer' })
  }
})

/**
 * POST /api/progress/:userId/retry
 * Reset a single question from answered map. Keeps AttemptHistory for analytics.
 */
router.post('/:userId/retry', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const { questionId } = req.body

    if (!questionId) {
      return res.status(400).json({ error: 'questionId is required' })
    }

    await Progress.findOneAndUpdate(
      { userId },
      { $unset: { [`answered.${questionId}`]: '' } }
    )

    return res.json({ success: true })
  } catch (err) {
    console.error('POST /api/progress/:userId/retry error:', err)
    return res.status(500).json({ error: 'Failed to reset question' })
  }
})

/**
 * GET /api/progress/:userId/history/:questionId
 * Get all attempt history for a specific question, sorted by attemptNumber.
 */
router.get('/:userId/history/:questionId', async (req: Request, res: Response) => {
  try {
    const { userId, questionId } = req.params

    const history = await AttemptHistory.find({ userId, questionId })
      .sort({ attemptNumber: 1 })
      .lean()

    return res.json({ history })
  } catch (err) {
    console.error('GET /api/progress/:userId/history/:questionId error:', err)
    return res.status(500).json({ error: 'Failed to fetch attempt history' })
  }
})

/**
 * POST /api/progress/:userId/bookmark
 * Toggle bookmark for a question.
 */
router.post('/:userId/bookmark', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const { questionId } = req.body

    if (!questionId) {
      return res.status(400).json({ error: 'questionId is required' })
    }

    // Find or create doc
    let doc = await Progress.findOne({ userId })
    if (!doc) {
      doc = new Progress({ userId, answered: new Map(), bookmarked: [] })
    }

    // Toggle bookmark
    const idx = doc.bookmarked.indexOf(questionId)
    if (idx >= 0) {
      doc.bookmarked.splice(idx, 1)
    } else {
      doc.bookmarked.push(questionId)
    }
    await doc.save()

    return res.json({ bookmarked: doc.bookmarked })
  } catch (err) {
    console.error('POST /api/progress/:userId/bookmark error:', err)
    return res.status(500).json({ error: 'Failed to toggle bookmark' })
  }
})

/**
 * DELETE /api/progress/:userId
 * Reset all progress for a user.
 */
router.delete('/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    await Progress.findOneAndUpdate(
      { userId },
      { answered: new Map(), bookmarked: [] },
      { upsert: true }
    )
    return res.json({ answered: {}, bookmarked: [] })
  } catch (err) {
    console.error('DELETE /api/progress/:userId error:', err)
    return res.status(500).json({ error: 'Failed to reset progress' })
  }
})

export default router
