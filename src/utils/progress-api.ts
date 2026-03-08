import type { UserProgress } from '../types'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

// Simple userId — in production, replace with real auth (e.g., JWT sub)
function getUserId(): string {
  let id = localStorage.getItem('fe-interview-hub-user-id')
  if (!id) {
    id = 'user-' + crypto.randomUUID()
    localStorage.setItem('fe-interview-hub-user-id', id)
  }
  return id
}

export const progressApi = {
  /** Fetch full progress from MongoDB */
  async load(signal?: AbortSignal): Promise<UserProgress> {
    const userId = getUserId()
    const res = await fetch(`${API_BASE}/progress/${userId}`, { signal })
    if (!res.ok) throw new Error(`Load failed: ${res.status}`)
    return res.json()
  },

  /** Save full progress to MongoDB */
  async save(progress: UserProgress): Promise<void> {
    const userId = getUserId()
    await fetch(`${API_BASE}/progress/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(progress),
    })
  },

  /** Record a single answer */
  async recordAnswer(questionId: string, correct: boolean): Promise<void> {
    const userId = getUserId()
    await fetch(`${API_BASE}/progress/${userId}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId, correct }),
    })
  },

  /** Toggle a bookmark */
  async toggleBookmark(questionId: string): Promise<void> {
    const userId = getUserId()
    await fetch(`${API_BASE}/progress/${userId}/bookmark`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId }),
    })
  },

  /** Reset progress */
  async reset(): Promise<void> {
    const userId = getUserId()
    await fetch(`${API_BASE}/progress/${userId}`, {
      method: 'DELETE',
    })
  },

  /** Retry a question (remove from answered) */
  async retry(questionId: string): Promise<void> {
    const userId = getUserId()
    await fetch(`${API_BASE}/progress/${userId}/retry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId }),
    })
  },

  /** Get current userId */
  getUserId,
}
