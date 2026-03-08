import { useState, useCallback, useEffect, useRef } from 'react'
import {
  loadProgress,
  recordAnswer as localRecordAnswer,
  toggleBookmark as localToggleBookmark,
  resetProgress as localResetProgress,
  retryQuestion as localRetryQuestion,
  saveProgress,
  updateReview,
  trackDailyActivity,
  saveChallengeResult,
  updateStreak,
} from '../utils/local-storage'
import { progressApi } from '../utils/progress-api'
import type { UserProgress } from '../types'

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress)
  const [syncing, setSyncing] = useState(false)
  const [syncError, setSyncError] = useState<string | null>(null)
  const initialSyncDone = useRef(false)

  /* ──────────────────────────────────────────
   * On mount: fetch progress from MongoDB and
   * merge with localStorage (newest wins).
   * ────────────────────────────────────────── */
  useEffect(() => {
    if (initialSyncDone.current) return
    initialSyncDone.current = true

    async function syncFromServer() {
      try {
        setSyncing(true)
        const remote = await progressApi.load()
        const local = loadProgress()

        // Merge: for each question, keep whichever has the latest timestamp
        const merged: UserProgress = {
          answered: { ...local.answered },
          bookmarked: Array.from(
            new Set([...local.bookmarked, ...remote.bookmarked])
          ),
        }

        // Merge answered — keep newer timestamp
        for (const [qId, entry] of Object.entries(remote.answered)) {
          const localEntry = merged.answered[qId]
          if (!localEntry || entry.timestamp > localEntry.timestamp) {
            merged.answered[qId] = entry
          }
        }

        // Save merged state both locally and remotely
        saveProgress(merged)
        setProgress({ ...merged })

        // Push merged state back to server (in case local had newer data)
        await progressApi.save(merged)

        setSyncError(null)
      } catch (err) {
        console.warn('MongoDB sync failed, using localStorage:', err)
        setSyncError('Không thể kết nối server. Dùng dữ liệu local.')
      } finally {
        setSyncing(false)
      }
    }

    syncFromServer()
  }, [])

  /* ──────────────────────────────────────────
   * Answer: save to localStorage immediately,
   * then sync to MongoDB in background.
   * ────────────────────────────────────────── */
  const answer = useCallback((questionId: string, correct: boolean, timeSpent?: number) => {
    // Local first (instant feedback) — record answer, then update review + daily activity
    localRecordAnswer(questionId, correct, timeSpent)
    trackDailyActivity()
    updateStreak()
    const withReview = updateReview(questionId, correct)
    setProgress({ ...withReview })

    // MongoDB sync (fire-and-forget)
    progressApi.recordAnswer(questionId, correct).catch((err) => {
      console.warn('Failed to sync answer to MongoDB:', err)
    })
  }, [])

  /* ──────────────────────────────────────────
   * Bookmark: same local-first pattern.
   * ────────────────────────────────────────── */
  const bookmark = useCallback((questionId: string) => {
    const updated = localToggleBookmark(questionId)
    setProgress({ ...updated })

    progressApi.toggleBookmark(questionId).catch((err) => {
      console.warn('Failed to sync bookmark to MongoDB:', err)
    })
  }, [])

  /* ──────────────────────────────────────────
   * Reset: clear both localStorage and MongoDB.
   * ────────────────────────────────────────── */
  const reset = useCallback(() => {
    const updated = localResetProgress()
    setProgress({ ...updated })

    progressApi.reset().catch((err) => {
      console.warn('Failed to reset progress on MongoDB:', err)
    })
  }, [])

  /* ──────────────────────────────────────────
   * Retry: remove answer locally and sync.
   * ────────────────────────────────────────── */
  const retry = useCallback((questionId: string) => {
    const updated = localRetryQuestion(questionId)
    setProgress({ ...updated })

    progressApi.retry(questionId).catch((err) => {
      console.warn('Failed to sync retry to MongoDB:', err)
    })
  }, [])

  /* ──────────────────────────────────────────
   * Save challenge result to localStorage.
   * ────────────────────────────────────────── */
  const saveChallenge = useCallback(
    (presetId: string, result: { score: number; accuracy: number; date: number }) => {
      const updated = saveChallengeResult(presetId, result)
      setProgress({ ...updated })
    },
    [],
  )

  return { progress, answer, bookmark, reset, retry, saveChallenge, syncing, syncError }
}
