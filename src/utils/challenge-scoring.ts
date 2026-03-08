import type { ChallengeBest } from '../types'

export interface ChallengePreset {
  id: string
  labelKey: string
  questions: number
  timeMinutes: number
  icon: 'Zap' | 'Target' | 'Flame'
  difficulties: string[]
}

export const CHALLENGE_PRESETS: ChallengePreset[] = [
  {
    id: 'quick',
    labelKey: 'challenge.quick',
    questions: 5,
    timeMinutes: 10,
    icon: 'Zap',
    difficulties: ['junior', 'mid'],
  },
  {
    id: 'standard',
    labelKey: 'challenge.standard',
    questions: 15,
    timeMinutes: 30,
    icon: 'Target',
    difficulties: ['junior', 'mid', 'senior', 'lead'],
  },
  {
    id: 'hard',
    labelKey: 'challenge.hard',
    questions: 30,
    timeMinutes: 60,
    icon: 'Flame',
    difficulties: ['senior', 'lead'],
  },
]

/**
 * Score = accuracy * speedBonus * 1000
 * speedBonus = 1 + (timeRatio * 0.5), range 1.0–1.5
 * timeRatio  = 1 - (timeUsedMs / totalTimeMs), higher = faster
 */
export function calculateScore(
  correct: number,
  total: number,
  timeUsedMs: number,
  totalTimeMs: number,
): number {
  if (total === 0) return 0
  const accuracy = correct / total
  const timeRatio = Math.max(0, 1 - timeUsedMs / totalTimeMs)
  const speedBonus = 1 + timeRatio * 0.5
  return Math.round(accuracy * speedBonus * 1000)
}

export function isNewBest(score: number, currentBest?: ChallengeBest): boolean {
  if (!currentBest) return score > 0
  return score > currentBest.score
}
