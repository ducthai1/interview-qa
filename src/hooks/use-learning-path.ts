import { useMemo, useCallback } from 'react'
import type { Question, UserProgress, LearningPath, Role } from '../types'
import { getTopicsByRole, getLearningPathsByRole } from '../data'

export interface StepStatus {
  topic: string
  topicLabel: string
  topicIcon: string
  topicColor: string
  completion: number   // 0-1
  unlocked: boolean
  isCurrent: boolean   // first incomplete unlocked step
  isCompleted: boolean // completion >= requiredCompletion
  requiredCompletion: number
}

export interface PathStatus {
  path: LearningPath
  steps: StepStatus[]
  overallPercent: number // 0-100
}

function buildTopicCompletionMap(questions: Question[], progress: UserProgress, role: Role): Record<string, number> {
  const map: Record<string, number> = {}
  const topics = getTopicsByRole(role)
  for (const topic of topics) {
    const topicQs = questions.filter((q) => q.topic === topic.id)
    const correct = topicQs.filter((q) => progress.answered[q.id]?.correct)
    map[topic.id] = topicQs.length ? correct.length / topicQs.length : 0
  }
  return map
}

export function getPathProgress(
  pathId: string,
  questions: Question[],
  progress: UserProgress,
  role: Role,
): StepStatus[] {
  const learningPaths = getLearningPathsByRole(role)
  const path = learningPaths.find((p) => p.id === pathId)
  if (!path) return []

  const completionMap = buildTopicCompletionMap(questions, progress, role)
  const topics = getTopicsByRole(role)
  const topicInfoMap = Object.fromEntries(topics.map((t) => [t.id, t]))

  let currentFound = false
  return path.steps.map((step, idx) => {
    const completion = completionMap[step.topic] ?? 0
    const isCompleted = completion >= step.requiredCompletion

    // First step is always unlocked; subsequent steps unlock when previous is completed
    const unlocked =
      idx === 0 ||
      (completionMap[path.steps[idx - 1].topic] ?? 0) >= path.steps[idx - 1].requiredCompletion

    const isCurrent = unlocked && !isCompleted && !currentFound
    if (isCurrent) currentFound = true

    const info = topicInfoMap[step.topic]
    return {
      topic: step.topic,
      topicLabel: info?.label ?? step.topic,
      topicIcon: info?.icon ?? step.topic,
      topicColor: info?.color ?? '#888',
      completion,
      unlocked,
      isCurrent,
      isCompleted,
      requiredCompletion: step.requiredCompletion,
    }
  })
}

export function getOverallPathCompletion(
  pathId: string,
  questions: Question[],
  progress: UserProgress,
  role: Role,
): number {
  const steps = getPathProgress(pathId, questions, progress, role)
  if (!steps.length) return 0
  const sum = steps.reduce((acc, s) => acc + Math.min(s.completion / s.requiredCompletion, 1), 0)
  return Math.round((sum / steps.length) * 100)
}

/**
 * Estimate days remaining to complete a learning path.
 * Returns null if not enough data (< 2 active days).
 */
export function getEstimatedDays(
  pathId: string,
  progress: UserProgress,
  questions: Question[],
  role: Role,
): number | null {
  const dailyActivity = progress.dailyActivity ?? {}
  const activeDays = Object.values(dailyActivity).filter((c) => c > 0)
  if (activeDays.length < 2) return null

  const avgPerDay = activeDays.reduce((a, b) => a + b, 0) / activeDays.length

  const steps = getPathProgress(pathId, questions, progress, role)
  const completionMap = buildTopicCompletionMap(questions, progress, role)
  let remaining = 0

  for (const step of steps) {
    const topicQs = questions.filter((q) => q.topic === step.topic)
    const needed = Math.ceil(step.requiredCompletion * topicQs.length)
    const correct = Math.round((completionMap[step.topic] ?? 0) * topicQs.length)
    remaining += Math.max(0, needed - correct)
  }

  if (remaining === 0) return 0
  return Math.ceil(remaining / avgPerDay)
}

export function useLearningPath(questions: Question[], progress: UserProgress, role: Role) {
  const topicCompletionMap = useMemo(
    () => buildTopicCompletionMap(questions, progress, role),
    [questions, progress, role],
  )

  const getSteps = useCallback(
    (pathId: string): StepStatus[] => getPathProgress(pathId, questions, progress, role),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topicCompletionMap, role],
  )

  const getOverallPercent = useCallback(
    (pathId: string): number => getOverallPathCompletion(pathId, questions, progress, role),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topicCompletionMap, role],
  )

  const allPathStatuses: PathStatus[] = useMemo(
    () => {
      const learningPaths = getLearningPathsByRole(role)
      return learningPaths.map((path) => ({
        path,
        steps: getSteps(path.id),
        overallPercent: getOverallPercent(path.id),
      }))
    },
    [getSteps, getOverallPercent, role],
  )

  const estimateDays = useCallback(
    (pathId: string): number | null => getEstimatedDays(pathId, progress, questions, role),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topicCompletionMap, role],
  )

  return { topicCompletionMap, getSteps, getOverallPercent, allPathStatuses, estimateDays }
}
