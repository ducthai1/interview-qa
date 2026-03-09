import { useState, useMemo, useEffect, useCallback } from 'react'
import { Play, RotateCcw, Timer, CheckCircle2, XCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../components/question-card'
import { ShareButton } from '../components/share-button'
import { NextStepsSection } from '../components/next-steps-section'
import { pickWithDifficultyMix } from '../utils/question-filters'
import { useTimer } from '../hooks/use-timer'
import { useKeyboardShortcuts } from '../hooks/use-keyboard-shortcuts'
import type { Question, Difficulty, UserProgress } from '../types'

interface MockInterviewPageProps {
  questions: Question[]
  progress: UserProgress
  onAnswer: (questionId: string, correct: boolean) => void
  onBookmark: (questionId: string) => void
  onRetry: (questionId: string) => void
}

const QUESTION_COUNT = 20
const TIME_LIMIT = 30 * 60 // 30 minutes

export function MockInterviewPage({ questions, progress, onAnswer, onBookmark, onRetry }: MockInterviewPageProps) {
  const { t } = useTranslation()
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [mockQuestions, setMockQuestions] = useState<Question[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedLevel, setSelectedLevel] = useState<Difficulty>('junior')
  const timer = useTimer(TIME_LIMIT)

  const LEVELS: Difficulty[] = ['junior', 'mid', 'senior', 'lead']

  const startInterview = () => {
    const picked = pickWithDifficultyMix(questions, QUESTION_COUNT, selectedLevel)
    setMockQuestions(picked)
    setCurrentIdx(0)
    setStarted(true)
    setFinished(false)
    timer.reset(TIME_LIMIT)
    timer.start()
  }

  const handleAnswer = (questionId: string, correct: boolean) => {
    onAnswer(questionId, correct)
    // No auto-advance — user reads explanation then clicks Next
  }

  const [showWrongReview, setShowWrongReview] = useState(false)

  const results = useMemo(() => {
    if (!finished) return null
    const answered = mockQuestions.filter((q) => progress.answered[q.id])
    const correct = answered.filter((q) => progress.answered[q.id]?.correct)
    return { total: mockQuestions.length, answered: answered.length, correct: correct.length }
  }, [finished, mockQuestions, progress])

  const wrongQuestions = useMemo(
    () => finished ? mockQuestions.filter((q) => progress.answered[q.id] && !progress.answered[q.id]?.correct) : [],
    [finished, mockQuestions, progress],
  )

  // Time's up
  useEffect(() => {
    if (timer.seconds === 0 && started && !finished) {
      setFinished(true)
    }
  }, [timer.seconds, started, finished])

  const goNext = useCallback(() => {
    if (currentIdx < mockQuestions.length - 1) setCurrentIdx((i) => i + 1)
    else { setFinished(true); timer.pause() }
  }, [currentIdx, mockQuestions.length, timer])

  const goPrev = useCallback(() => {
    setCurrentIdx((i) => Math.max(0, i - 1))
  }, [])

  const handleBookmarkCurrent = useCallback(() => {
    if (mockQuestions[currentIdx]) onBookmark(mockQuestions[currentIdx].id)
  }, [currentIdx, mockQuestions, onBookmark])

  useKeyboardShortcuts({
    onNext: started && !finished ? goNext : undefined,
    onPrevious: started && !finished ? goPrev : undefined,
    onBookmark: started && !finished ? handleBookmarkCurrent : undefined,
  })

  // Not started yet
  if (!started) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <Timer className="mx-auto mb-4 h-16 w-16 text-[var(--color-primary)]" />
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text)]">{t('mock.title')}</h1>
        <p className="mb-8 text-[var(--color-text-secondary)]">
          {t('mock.description', { count: QUESTION_COUNT, minutes: TIME_LIMIT / 60 })}
        </p>

        {/* Difficulty selector */}
        <div className="mx-auto mb-8 max-w-sm">
          <p className="mb-2 text-sm font-medium text-[var(--color-text)]">{t('mock.selectLevel')}</p>
          <div className="grid grid-cols-4 gap-2">
            {LEVELS.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`rounded-lg border px-3 py-2 text-sm font-medium capitalize transition-colors ${
                  selectedLevel === lvl
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                    : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]'
                }`}
              >
                {t(`filter.${lvl}`)}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-[var(--color-text-secondary)]">{t('mock.selectLevelHint')}</p>
        </div>

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

    // Build per-topic breakdown from mockQuestions
    const topicBreakdown = Array.from(
      mockQuestions.reduce((acc, q) => {
        const entry = acc.get(q.topic) ?? { topic: q.topic, correct: 0, total: 0 }
        entry.total += 1
        if (progress.answered[q.id]?.correct) entry.correct += 1
        acc.set(q.topic, entry)
        return acc
      }, new Map<string, { topic: string; correct: number; total: number }>()),
    ).map(([, v]) => v)

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
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={startInterview}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            <RotateCcw className="h-4 w-4" /> {t('common.tryAgain')}
          </button>
          <ShareButton
            cardProps={{
              accuracy: pct,
              totalAnswered: results.answered,
              correctCount: results.correct,
              topicBreakdown,
              mode: 'mock',
              date: new Date().toLocaleDateString(),
            }}
          />
        </div>
        {/* Review wrong answers */}
        {wrongQuestions.length > 0 && (
          <div className="mx-auto mt-8 max-w-4xl text-left">
            <button
              onClick={() => setShowWrongReview(!showWrongReview)}
              className="mb-4 inline-flex items-center gap-2 rounded-lg border border-[var(--color-error)] px-4 py-2 text-sm font-medium text-[var(--color-error)] transition-colors hover:bg-[var(--color-error-bg)]"
            >
              <XCircle className="h-4 w-4" />
              {t('session.reviewWrong')} ({t('session.wrongAnswers', { count: wrongQuestions.length })})
            </button>
            {showWrongReview && (
              <div className="space-y-4">
                {wrongQuestions.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    progress={progress}
                    onAnswer={onAnswer}
                    onBookmark={onBookmark}
                    onRetry={onRetry}
                    hideRetry
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <NextStepsSection questions={questions} progress={progress} />
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
        <span className={`rounded-lg px-3 py-1 text-sm font-mono font-bold ${timer.seconds < 60 ? 'bg-[var(--color-error-bg)] text-[var(--color-error)]' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text)]'}`}>
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
          onRetry={onRetry}
          hideRetry
        />
      )}

      {/* Navigation */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={goPrev}
          disabled={currentIdx === 0}
          className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm disabled:opacity-30"
        >
          {t('common.previous')}
        </button>
        <button
          onClick={goNext}
          className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white"
        >
          {currentIdx === mockQuestions.length - 1 ? t('common.finish') : t('common.next')}
        </button>
      </div>
      <p className="mt-2 text-center text-xs text-[var(--color-text-secondary)]">{t('keyboard.hint')}</p>
    </div>
  )
}
