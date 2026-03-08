import type { Question, UserProgress } from '../types'
import { getDueQuestions } from './spaced-repetition'
import { getWeakTopics } from './analytics'
import { learningPaths } from '../data/learning-paths'

/**
 * Return up to `limit` recommended questions ordered by priority:
 * 1. Due for spaced-repetition review
 * 2. From weak topics (lowest accuracy)
 * 3. From current learning path step
 * 4. Unanswered questions
 * 5. Random fallback
 */
export function getRecommendedQuestions(
  questions: Question[],
  progress: UserProgress,
  limit = 3,
): Question[] {
  const seen = new Set<string>()
  const result: Question[] = []

  const pick = (q: Question) => {
    if (seen.has(q.id) || result.length >= limit) return
    seen.add(q.id)
    result.push(q)
  }

  // 1. Due for review
  const due = getDueQuestions(progress, questions)
  due.forEach(pick)

  if (result.length >= limit) return result

  // 2. From weak topics
  const weakTopics = getWeakTopics(progress.answered, questions, 3).map((t) => t.topicId)
  const weakQuestions = questions.filter((q) => weakTopics.includes(q.topic))
  weakQuestions.forEach(pick)

  if (result.length >= limit) return result

  // 3. From current learning path step
  const pathProgress = progress.pathProgress ?? {}
  for (const path of learningPaths) {
    const stepIdx = pathProgress[path.id] ?? 0
    const currentStep = path.steps[stepIdx]
    if (!currentStep) continue
    const pathQs = questions.filter((q) => q.topic === currentStep.topic)
    pathQs.forEach(pick)
    if (result.length >= limit) break
  }

  if (result.length >= limit) return result

  // 4. Unanswered questions
  const unanswered = questions.filter((q) => !progress.answered[q.id])
  unanswered.forEach(pick)

  if (result.length >= limit) return result

  // 5. Random fallback
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
  shuffled.forEach(pick)

  return result
}
