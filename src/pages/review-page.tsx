import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CheckCircle2, XCircle, BookOpen } from 'lucide-react'
import { QuestionCard } from '../components/question-card'
import { useSpacedRepetition } from '../hooks/use-spaced-repetition'
import type { Question, UserProgress } from '../types'

interface ReviewPageProps {
  questions: Question[]
  progress: UserProgress
  onAnswer: (questionId: string, correct: boolean) => void
  onBookmark: (questionId: string) => void
  onRetry: (questionId: string) => void
}

export function ReviewPage({ questions, progress, onAnswer, onBookmark, onRetry }: ReviewPageProps) {
  const { t } = useTranslation()
  const { dueQuestions, stats } = useSpacedRepetition(progress, questions)

  const [sessionActive, setSessionActive] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [correctIds, setCorrectIds] = useState<string[]>([])

  /* Snapshot the due list at session start so it doesn't shift mid-session */
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([])

  function startSession() {
    setSessionQuestions([...dueQuestions])
    setCurrentIdx(0)
    setCorrectIds([])
    setSessionActive(true)
  }

  function handleAnswer(questionId: string, correct: boolean) {
    onAnswer(questionId, correct)
    if (correct) setCorrectIds((prev) => [...prev, questionId])

    // Auto-advance after short delay to let the card show its result
    setTimeout(() => {
      setCurrentIdx((prev) => prev + 1)
    }, 1200)
  }

  const sessionDone = sessionActive && currentIdx >= sessionQuestions.length

  /* ── Empty state (no due questions) ───────────────────────────────── */
  if (!sessionActive && dueQuestions.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="mb-8 text-center">
          <BookOpen className="mx-auto mb-4 h-16 w-16 text-[var(--color-primary)] opacity-40" />
          <h1 className="mb-2 text-2xl font-bold text-[var(--color-text)]">{t('review.title')}</h1>
          <p className="text-lg text-[var(--color-text-secondary)]">{t('review.noDue')}</p>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{t('review.noDueHint')}</p>
        </div>

        {/* Box stats even with 0 due */}
        {stats.totalInSystem > 0 && <BoxStats stats={stats} t={t} />}
      </div>
    )
  }

  /* ── Session complete ─────────────────────────────────────────────── */
  if (sessionDone) {
    const incorrect = sessionQuestions.length - correctIds.length
    return (
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="mb-8 text-center">
          <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-500" />
          <h1 className="mb-2 text-2xl font-bold text-[var(--color-text)]">{t('review.complete')}</h1>
          <p className="text-[var(--color-text-secondary)]">
            {t('review.summary', { correct: correctIds.length, incorrect })}
          </p>
        </div>

        <div className="mb-6 flex justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500">{correctIds.length}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">{t('common.correct')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">{incorrect}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">{t('mock.wrong')}</div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setSessionActive(false)}
            className="rounded-lg bg-[var(--color-primary)] px-6 py-2 font-medium text-white transition-colors hover:opacity-90"
          >
            {t('common.done')}
          </button>
        </div>

        <div className="mt-10">
          <BoxStats stats={stats} t={t} />
        </div>
      </div>
    )
  }

  /* ── Lobby (before starting) ──────────────────────────────────────── */
  if (!sessionActive) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-2 text-2xl font-bold text-[var(--color-text)]">{t('review.title')}</h1>
        <p className="mb-6 text-[var(--color-text-secondary)]">
          {t('review.dueCount', { count: dueQuestions.length })}
        </p>

        <button
          onClick={startSession}
          className="mb-10 rounded-lg bg-[var(--color-primary)] px-6 py-2.5 font-semibold text-white transition-colors hover:opacity-90"
        >
          {t('review.startReview')}
        </button>

        <BoxStats stats={stats} t={t} />
      </div>
    )
  }

  /* ── Active session ───────────────────────────────────────────────── */
  const currentQuestion = sessionQuestions[currentIdx]
  const total = sessionQuestions.length

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm text-[var(--color-text-secondary)]">
          <span>{t('review.progress', { current: currentIdx, total })}</span>
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-green-600">
              <CheckCircle2 className="h-4 w-4" /> {correctIds.length}
            </span>
            <span className="flex items-center gap-1 text-red-500">
              <XCircle className="h-4 w-4" /> {currentIdx - correctIds.length}
            </span>
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
          <div
            className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-300"
            style={{ width: `${total > 0 ? (currentIdx / total) * 100 : 0}%` }}
          />
        </div>
      </div>

      <QuestionCard
        key={currentQuestion.id}
        question={currentQuestion}
        progress={progress}
        onAnswer={handleAnswer}
        onBookmark={onBookmark}
        onRetry={onRetry}
      />
    </div>
  )
}

/* ── Box statistics component ─────────────────────────────────────────── */
function BoxStats({ stats, t }: { stats: ReturnType<typeof import('../utils/spaced-repetition').getReviewStats>; t: (key: string, opts?: Record<string, unknown>) => string }) {
  const boxColors = [
    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  ]

  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
        {t('review.title')}
      </h2>
      <div className="grid grid-cols-5 gap-2">
        {stats.byBox.map((count, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-3 text-center ${boxColors[idx]}`}
          >
            <div className="text-xs font-medium opacity-80">{t('review.boxLabel', { box: idx + 1 })}</div>
            <div className="mt-1 text-xl font-bold">{count}</div>
            <div className="text-xs opacity-70">{t('review.boxStats', { count })}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
