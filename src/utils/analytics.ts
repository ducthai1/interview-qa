import type { Question, UserProgress } from '../types'
import { topics } from '../data/topics'

export interface DailyPoint {
  date: string
  accuracy: number
  count: number
}

export interface TopicAccuracy {
  topic: string
  topicId: string
  accuracy: number
  total: number
  correct: number
}

export interface HeatCell {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

function toDateStr(ts: number): string {
  return new Date(ts).toISOString().slice(0, 10)
}

function levelFromCount(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 10) return 3
  return 4
}

/** Group answered entries by date */
export function groupAnswersByDate(
  answered: UserProgress['answered'],
): Map<string, { total: number; correct: number }> {
  const map = new Map<string, { total: number; correct: number }>()
  for (const entry of Object.values(answered)) {
    const date = toDateStr(entry.timestamp)
    const existing = map.get(date) ?? { total: 0, correct: 0 }
    existing.total++
    if (entry.correct) existing.correct++
    map.set(date, existing)
  }
  return map
}

/** Per-topic accuracy for radar chart */
export function getTopicAccuracy(
  answered: UserProgress['answered'],
  questions: Question[],
): TopicAccuracy[] {
  const topicMap = new Map<string, { total: number; correct: number }>()

  for (const q of questions) {
    const entry = answered[q.id]
    if (!entry) continue
    const existing = topicMap.get(q.topic) ?? { total: 0, correct: 0 }
    existing.total++
    if (entry.correct) existing.correct++
    topicMap.set(q.topic, existing)
  }

  return Array.from(topicMap.entries()).map(([topicId, { total, correct }]) => {
    const topicInfo = topics.find((t) => t.id === topicId)
    return {
      topic: topicInfo?.label ?? topicId,
      topicId,
      accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
      total,
      correct,
    }
  })
}

/** Daily accuracy trend for last N days */
export function getDailyTrend(
  answered: UserProgress['answered'],
  days = 30,
): DailyPoint[] {
  const byDate = groupAnswersByDate(answered)
  const result: DailyPoint[] = []
  const now = new Date()

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(now.getDate() - i)
    const dateStr = d.toISOString().slice(0, 10)
    const data = byDate.get(dateStr)
    result.push({
      date: dateStr,
      accuracy: data && data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
      count: data?.total ?? 0,
    })
  }

  return result
}

/** Heatmap grid for last N days */
export function getActivityData(
  answered: UserProgress['answered'],
  dailyActivity: Record<string, number> | undefined,
  days = 105, // 15 weeks × 7
): HeatCell[] {
  const result: HeatCell[] = []
  const now = new Date()

  // Prefer dailyActivity if available, fall back to derived from answered
  const derived = groupAnswersByDate(answered)

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(now.getDate() - i)
    const dateStr = d.toISOString().slice(0, 10)
    let count = 0
    if (dailyActivity && dailyActivity[dateStr] !== undefined) {
      count = dailyActivity[dateStr]
    } else {
      count = derived.get(dateStr)?.total ?? 0
    }
    result.push({ date: dateStr, count, level: levelFromCount(count) })
  }

  return result
}

/** Top N weakest topics sorted by accuracy ascending */
export function getWeakTopics(
  answered: UserProgress['answered'],
  questions: Question[],
  topN = 3,
): TopicAccuracy[] {
  const all = getTopicAccuracy(answered, questions)
  return all.sort((a, b) => a.accuracy - b.accuracy).slice(0, topN)
}
