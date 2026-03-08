import { useMemo } from 'react'
import { getDueQuestions, getReviewStats } from '../utils/spaced-repetition'
import type { UserProgress, Question } from '../types'

export function useSpacedRepetition(progress: UserProgress, questions: Question[]) {
  const dueQuestions = useMemo(
    () => getDueQuestions(progress, questions),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [progress.reviews, questions],
  )

  const stats = useMemo(
    () => getReviewStats(progress),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [progress.reviews],
  )

  return {
    dueQuestions,
    dueCount: dueQuestions.length,
    stats,
  }
}
