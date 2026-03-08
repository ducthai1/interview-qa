import type { ReviewEntry, UserProgress, Question } from '../types'

/* Leitner box intervals in milliseconds */
export const BOX_INTERVALS: Record<number, number> = {
  1: 1 * 24 * 60 * 60 * 1000,   // 1 day
  2: 3 * 24 * 60 * 60 * 1000,   // 3 days
  3: 7 * 24 * 60 * 60 * 1000,   // 7 days
  4: 14 * 24 * 60 * 60 * 1000,  // 14 days
  5: 30 * 24 * 60 * 60 * 1000,  // 30 days
}

/**
 * Calculate new ReviewEntry after answering.
 * Correct: promote box (max 5). Incorrect: reset to box 1.
 */
export function getNextReview(currentBox: number, correct: boolean): ReviewEntry {
  const newBox = correct ? Math.min(currentBox + 1, 5) : 1
  const interval = BOX_INTERVALS[newBox]
  return {
    box: newBox,
    nextReviewAt: Date.now() + interval,
  }
}

/**
 * Return questions that are due for review, sorted by urgency (most overdue first).
 * A question is due when nextReviewAt <= now.
 */
export function getDueQuestions(progress: UserProgress, questions: Question[]): Question[] {
  const reviews = progress.reviews ?? {}
  const now = Date.now()

  const dueIds = Object.entries(reviews)
    .filter(([, entry]) => entry.nextReviewAt <= now)
    .sort(([, a], [, b]) => a.nextReviewAt - b.nextReviewAt) // most overdue first
    .map(([id]) => id)

  const questionMap = new Map(questions.map((q) => [q.id, q]))
  return dueIds.map((id) => questionMap.get(id)).filter((q): q is Question => q !== undefined)
}

export interface ReviewStats {
  totalInSystem: number
  dueNow: number
  byBox: number[] // index 0 = box 1, index 4 = box 5
}

/**
 * Compute summary stats for the review system.
 */
export function getReviewStats(progress: UserProgress): ReviewStats {
  const reviews = progress.reviews ?? {}
  const now = Date.now()
  const byBox = [0, 0, 0, 0, 0]
  let dueNow = 0

  for (const entry of Object.values(reviews)) {
    const boxIdx = Math.max(0, Math.min(4, entry.box - 1))
    byBox[boxIdx]++
    if (entry.nextReviewAt <= now) dueNow++
  }

  return {
    totalInSystem: Object.keys(reviews).length,
    dueNow,
    byBox,
  }
}
