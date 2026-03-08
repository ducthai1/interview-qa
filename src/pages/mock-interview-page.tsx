import { useState, useMemo } from 'react'
import { Play, RotateCcw, Timer, CheckCircle2, XCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../components/question-card'
import { pickRandomQuestions } from '../utils/question-filters'
import { useTimer } from '../hooks/use-timer'
import type { Question, UserProgress } from '../types'

interface MockInterviewPageProps {
  questions: Question[]
  progress: UserProgress
  onAnswer: (questionId: string, correct: boolean) => void
  onBookmark: (questionId: string) => void
}

const QUESTION_COUNT = 20
const TIME_LIMIT = 30 * 60 // 30 minutes

export function MockInterviewPage({ questions, progress, onAnswer, onBookmark }: MockInterviewPageProps) {
  const { t } = useTranslation()
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [mockQuestions, setMockQuestions] = useState<Question[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const timer = useTimer(TIME_LIMIT)

  const startInterview = () => {
    const picked = pickRandomQuestions(questions, QUESTION_COUNT)
    setMockQuestions(picked)
    setCurrentIdx(0)
    setStarted(true)
    setFinished(false)
    timer.reset(TIME_LIMIT)
    timer.start()
  }

  const handleAnswer = (questionId: string, correct: boolean) => {
    onAnswer(questionId, correct)
    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentIdx < mockQuestions.length - 1) {
        setCurrentIdx((i) => i + 1)
      } else {
        setFinished(true)
        timer.pause()
      }
    }, 1500)
  }

  const results = useMemo(() => {
    if (!finished) return null
    const answered = mockQuestions.filter((q) => progress.answered[q.id])
    const correct = answered.filter((q) => progress.answered[q.id]?.correct)
    return { total: mockQuestions.length, answered: answered.length, correct: correct.length }
  }, [finished, mockQuestions, progress])

  // Time's up
  if (timer.seconds === 0 && started && !finished) {
    setFinished(true)
  }

  // Not started yet
  if (!started) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <Timer className="mx-auto mb-4 h-16 w-16 text-[var(--color-primary)]" />
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text)]">{t('mock.title')}</h1>
        <p className="mb-6 text-[var(--color-text-secondary)]">
          {t('mock.description', { count: QUESTION_COUNT, minutes: TIME_LIMIT / 60 })}
        </p>
        <button
          onClick={startInterview}
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          <Play className="h-5 w-5" /> {t('mock.start')}
        </button>
      </div>
    )
  }

  // Finished - show results
  if (finished && results) {
    const pct = results.answered > 0 ? Math.round((results.correct / results.answered) * 100) : 0
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="mb-6 text-3xl font-bold text-[var(--color-text)]">{t('mock.complete')}</h1>
        <div className="mb-8 grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
            <p className="text-3xl font-bold text-[var(--color-text)]">{results.answered}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{t('common.answered')}</p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
            <div className="flex items-center justify-center gap-1">
              <CheckCircle2 className="h-5 w-5 text-[var(--color-success)]" />
              <p className="text-3xl font-bold text-[var(--color-success)]">{results.correct}</p>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)]">{t('common.correct')}</p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
            <div className="flex items-center justify-center gap-1">
              <XCircle className="h-5 w-5 text-[var(--color-error)]" />
              <p className="text-3xl font-bold text-[var(--color-error)]">{results.answered - results.correct}</p>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)]">{t('mock.wrong')}</p>
          </div>
        </div>
        <p className="mb-6 text-lg text-[var(--color-text)]">
          {t('common.accuracy')}: <span className="font-bold text-[var(--color-primary)]">{pct}%</span>
        </p>
        <button
          onClick={startInterview}
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          <RotateCcw className="h-4 w-4" /> {t('common.tryAgain')}
        </button>
      </div>
    )
  }

  // In progress
  const current = mockQuestions[currentIdx]
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Progress bar & timer */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-medium text-[var(--color-text)]">
          {t('mock.questionProgress', { current: currentIdx + 1, total: mockQuestions.length })}
        </span>
        <span className={`rounded-lg px-3 py-1 text-sm font-mono font-bold ${timer.seconds < 60 ? 'bg-red-100 text-red-600' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text)]'}`}>
          {timer.formatted}
        </span>
      </div>
      <div className="mb-6 h-2 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
        <div
          className="h-full rounded-full bg-[var(--color-primary)] transition-all"
          style={{ width: `${((currentIdx + 1) / mockQuestions.length) * 100}%` }}
        />
      </div>

      {current && (
        <QuestionCard
          key={current.id}
          question={current}
          progress={progress}
          onAnswer={handleAnswer}
          onBookmark={onBookmark}
        />
      )}

      {/* Navigation */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
          disabled={currentIdx === 0}
          className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm disabled:opacity-30"
        >
          {t('common.previous')}
        </button>
        <button
          onClick={() => {
            if (currentIdx < mockQuestions.length - 1) setCurrentIdx((i) => i + 1)
            else { setFinished(true); timer.pause() }
          }}
          className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white"
        >
          {currentIdx === mockQuestions.length - 1 ? t('common.finish') : t('common.next')}
        </button>
      </div>
    </div>
  )
}
