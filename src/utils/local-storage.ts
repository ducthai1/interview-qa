import type { UserProgress, Difficulty, QuestionType } from '../types'
import { getNextReview } from './spaced-repetition'

const STORAGE_KEY = 'fe-interview-hub-progress'
const THEME_KEY = 'fe-interview-hub-theme'

/* Load user progress from localStorage */
export function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch { /* ignore corrupt data */ }
  return { answered: {}, bookmarked: [] }
}

/* Save user progress to localStorage */
export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch { /* storage full or unavailable */ }
}

/* Record an answer for a question */
export function recordAnswer(questionId: string, correct: boolean, timeSpent?: number): UserProgress {
  const progress = loadProgress()
  const existing = progress.answered[questionId]
  const attempts = existing ? existing.attempts + 1 : 1
  const now = Date.now()
  progress.answered[questionId] = { correct, timestamp: now, attempts, ...(timeSpent !== undefined ? { timeSpent } : {}) }

  // Append to attempt history
  const history = progress.attemptHistory ?? {}
  const prevHistory = history[questionId] ?? []
  progress.attemptHistory = {
    ...history,
    [questionId]: [...prevHistory, { correct, timestamp: now, timeSpent: timeSpent ?? 0 }],
  }

  saveProgress(progress)
  return progress
}

/* Remove a question's answer so it can be retried */
export function retryQuestion(questionId: string): UserProgress {
  const progress = loadProgress()
  delete progress.answered[questionId]
  saveProgress(progress)
  return progress
}

/* Toggle bookmark for a question */
export function toggleBookmark(questionId: string): UserProgress {
  const progress = loadProgress()
  const idx = progress.bookmarked.indexOf(questionId)
  if (idx >= 0) {
    progress.bookmarked.splice(idx, 1)
  } else {
    progress.bookmarked.push(questionId)
  }
  saveProgress(progress)
  return progress
}

/* Update spaced repetition review entry for a question */
export function updateReview(
  questionId: string,
  correct: boolean,
  difficulty?: Difficulty,
  questionType?: QuestionType,
): UserProgress {
  const progress = loadProgress()
  const existing = progress.reviews?.[questionId]
  const currentBox = existing?.box ?? 1
  const entry = getNextReview(currentBox, correct, difficulty, questionType)
  progress.reviews = { ...(progress.reviews ?? {}), [questionId]: entry }
  saveProgress(progress)
  return progress
}

/* Update streak based on today's activity */
export function updateStreak(): UserProgress {
  const progress = loadProgress()
  const today = new Date().toISOString().slice(0, 10)
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  const streak = progress.streak ?? { current: 0, longest: 0, lastActiveDate: '' }

  if (streak.lastActiveDate === today) {
    // Already counted today
    return progress
  }

  const newCurrent = streak.lastActiveDate === yesterday ? streak.current + 1 : 1
  progress.streak = {
    current: newCurrent,
    longest: Math.max(streak.longest, newCurrent),
    lastActiveDate: today,
  }
  saveProgress(progress)
  return progress
}

/* Set daily goal */
export function setDailyGoal(goal: number): UserProgress {
  const progress = loadProgress()
  progress.dailyGoal = goal
  saveProgress(progress)
  return progress
}

/* Increment today's answer count in dailyActivity */
export function trackDailyActivity(): UserProgress {
  const progress = loadProgress()
  const today = new Date().toISOString().slice(0, 10) // 'YYYY-MM-DD'
  const existing = progress.dailyActivity ?? {}
  progress.dailyActivity = { ...existing, [today]: (existing[today] ?? 0) + 1 }
  saveProgress(progress)
  return progress
}

/* Save challenge result and update personal best */
export function saveChallengeResult(
  presetId: string,
  result: { score: number; accuracy: number; date: number },
): UserProgress {
  const progress = loadProgress()
  const currentBest = progress.challengeBests?.[presetId]
  if (!currentBest || result.score > currentBest.score) {
    progress.challengeBests = { ...(progress.challengeBests ?? {}), [presetId]: result }
  }
  saveProgress(progress)
  return progress
}

/* Reset all progress */
export function resetProgress(): UserProgress {
  const empty: UserProgress = { answered: {}, bookmarked: [] }
  saveProgress(empty)
  return empty
}

/* Theme management */
export function loadTheme(): 'light' | 'dark' {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'dark' || saved === 'light') return saved
  } catch { /* ignore */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function saveTheme(theme: 'light' | 'dark'): void {
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch { /* ignore */ }
}
