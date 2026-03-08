import type { UserProgress } from '../types'

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
export function recordAnswer(questionId: string, correct: boolean): UserProgress {
  const progress = loadProgress()
  const existing = progress.answered[questionId]
  const attempts = existing ? existing.attempts + 1 : 1
  progress.answered[questionId] = { correct, timestamp: Date.now(), attempts }
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
