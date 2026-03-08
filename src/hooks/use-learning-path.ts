import { useMemo, useCallback } from 'react'
import { topics } from '../data/topics'
import { learningPaths } from '../data/learning-paths'
import type { Question, UserProgress, LearningPath } from '../types'

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

function buildTopicCompletionMap(questions: Question[], progress: UserProgress): Record<string, number> {
  const map: Record<string, number> = {}
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
): StepStatus[] {
  const path = learningPaths.find((p) => p.id === pathId)
  if (!path) return []

  const completionMap = buildTopicCompletionMap(questions, progress)
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
): number {
  const steps = getPathProgress(pathId, questions, progress)
  if (!steps.length) return 0
  const sum = steps.reduce((acc, s) => acc + Math.min(s.completion / s.requiredCompletion, 1), 0)
  return Math.round((sum / steps.length) * 100)
}

export function useLearningPath(questions: Question[], progress: UserProgress) {
  const topicCompletionMap = useMemo(
    () => buildTopicCompletionMap(questions, progress),
    [questions, progress],
  )

  const getSteps = useCallback(
    (pathId: string): StepStatus[] => getPathProgress(pathId, questions, progress),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topicCompletionMap],
  )

  const getOverallPercent = useCallback(
    (pathId: string): number => getOverallPathCompletion(pathId, questions, progress),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topicCompletionMap],
  )

  const allPathStatuses: PathStatus[] = useMemo(
    () =>
      learningPaths.map((path) => ({
        path,
        steps: getSteps(path.id),
        overallPercent: getOverallPercent(path.id),
      })),
    [getSteps, getOverallPercent],
  )

  return { topicCompletionMap, getSteps, getOverallPercent, allPathStatuses }
}
