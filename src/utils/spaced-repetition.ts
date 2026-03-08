import type { ReviewEntry, UserProgress, Question, Difficulty, QuestionType } from '../types'

/* Leitner box intervals in milliseconds */
export const BOX_INTERVALS: Record<number, number> = {
  1: 1 * 24 * 60 * 60 * 1000,   // 1 day
  2: 3 * 24 * 60 * 60 * 1000,   // 3 days
  3: 7 * 24 * 60 * 60 * 1000,   // 7 days
  4: 14 * 24 * 60 * 60 * 1000,  // 14 days
  5: 30 * 24 * 60 * 60 * 1000,  // 30 days
}

/* Track consecutive correct answers per question for senior/lead promotion */
const consecutiveCorrect: Record<string, number> = {}

/**
 * Calculate new ReviewEntry after answering.
 * Correct: promote box (max 5). Incorrect: reset to box 1.
 * difficulty/questionType adjust intervals and promotion thresholds.
 */
export function getNextReview(
  currentBox: number,
  correct: boolean,
  difficulty?: Difficulty,
  questionType?: QuestionType,
  questionId?: string,
): ReviewEntry {
  const isSeniorOrLead = difficulty === 'senior' || difficulty === 'lead'
  const isJunior = difficulty === 'junior'
  const isHardType = questionType === 'code-write' || questionType === 'system-design'

  // Senior/Lead: need 2 consecutive correct to promote
  let promote = correct
  if (correct && isSeniorOrLead) {
    const key = questionId ?? `box-${currentBox}`
    consecutiveCorrect[key] = (consecutiveCorrect[key] ?? 0) + 1
    promote = consecutiveCorrect[key] >= 2
    if (promote) consecutiveCorrect[key] = 0
  } else if (!correct) {
    const key = questionId ?? `box-${currentBox}`
    consecutiveCorrect[key] = 0
  }

  // Junior: skip a box on correct (faster)
  const boxIncrement = correct && isJunior ? 2 : 1
  const newBox = promote ? Math.min(currentBox + boxIncrement, 5) : correct ? currentBox : 1

  let interval = BOX_INTERVALS[newBox] ?? BOX_INTERVALS[5]
  // Hard question types: 1.5x longer intervals
  if (isHardType) interval = Math.round(interval * 1.5)

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
