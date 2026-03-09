import { useState, useMemo, useCallback } from 'react'
import { RotateCcw, ChevronRight, ChevronLeft, Eye, Shuffle, CheckCircle2, XCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useQuestionTranslation } from '../hooks/use-question-translation'
import { useKeyboardShortcuts } from '../hooks/use-keyboard-shortcuts'
import { CodeBlock } from '../components/code-block'
import type { Question, UserProgress, Topic } from '../types'
import { topics } from '../data/topics'

interface FlashcardPageProps {
  questions: Question[]
  progress: UserProgress
  onAnswer: (questionId: string, correct: boolean) => void
  onBookmark: (questionId: string) => void
}

export function FlashcardPage({ questions, progress, onAnswer, onBookmark }: FlashcardPageProps) {
  const { t } = useTranslation()
  const { tq } = useQuestionTranslation()
  const [started, setStarted] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<Topic | 'all'>('all')
  const [flipped, setFlipped] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [sessionStats, setSessionStats] = useState({ correct: 0, wrong: 0 })

  /* Filter and shuffle questions for the session */
  const deck = useMemo(() => {
    const filtered = selectedTopic === 'all' ? questions : questions.filter((q) => q.topic === selectedTopic)
    return [...filtered].sort(() => Math.random() - 0.5)
  }, [questions, selectedTopic, started]) // eslint-disable-line react-hooks/exhaustive-deps

  const current = deck[currentIdx]
  const translated = current ? tq(current) : null
  const isAnswered = current ? !!progress.answered[current.id] : false

  const goNext = useCallback(() => {
    if (currentIdx < deck.length - 1) {
      setCurrentIdx((i) => i + 1)
      setFlipped(false)
    }
  }, [currentIdx, deck.length])

  const goPrev = useCallback(() => {
    if (currentIdx > 0) {
      setCurrentIdx((i) => i - 1)
      setFlipped(false)
    }
  }, [currentIdx])

  const handleFlip = useCallback(() => setFlipped((f) => !f), [])

  const handleRate = (correct: boolean) => {
    if (!current) return
    onAnswer(current.id, correct)
    setSessionStats((s) => ({
      correct: s.correct + (correct ? 1 : 0),
      wrong: s.wrong + (correct ? 0 : 1),
    }))
    // Auto-advance after rating
    setTimeout(goNext, 300)
  }

  useKeyboardShortcuts({
    onNext: goNext,
    onPrevious: goPrev,
    onShowAnswer: handleFlip,
    onBookmark: current ? () => onBookmark(current.id) : undefined,
  })

  /* ─── Setup screen ─────────────────────────────────────────── */
  if (!started) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <Shuffle className="mx-auto mb-4 h-16 w-16 text-[var(--color-primary)]" />
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text)]">{t('flashcard.title')}</h1>
        <p className="mb-8 text-[var(--color-text-secondary)]">{t('flashcard.description')}</p>

        <div className="mx-auto mb-8 max-w-sm">
          <p className="mb-2 text-sm font-medium text-[var(--color-text)]">{t('flashcard.selectTopic')}</p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTopic('all')}
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedTopic === 'all'
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                  : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]'
              }`}
            >
              {t('session.allTopics')}
            </button>
            {topics.map((tp) => (
              <button
                key={tp.id}
                onClick={() => setSelectedTopic(tp.id)}
                className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                  selectedTopic === tp.id
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                    : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]'
                }`}
              >
                {tp.icon} {tp.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setStarted(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          <Shuffle className="h-5 w-5" /> {t('flashcard.start')}
        </button>
      </div>
    )
  }

  /* ─── Deck exhausted ───────────────────────────────────────── */
  if (!current || currentIdx >= deck.length) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold text-[var(--color-text)]">{t('flashcard.complete')}</h1>
        <div className="mb-6 flex justify-center gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-[var(--color-success)]">{sessionStats.correct}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{t('common.correct')}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[var(--color-error)]">{sessionStats.wrong}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{t('mock.wrong')}</p>
          </div>
        </div>
        <button
          onClick={() => { setStarted(false); setCurrentIdx(0); setFlipped(false); setSessionStats({ correct: 0, wrong: 0 }) }}
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-2.5 font-medium text-white"
        >
          <RotateCcw className="h-4 w-4" /> {t('common.tryAgain')}
        </button>
      </div>
    )
  }

  /* ─── Flashcard view ───────────────────────────────────────── */
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      {/* Progress */}
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="font-medium text-[var(--color-text)]">
          {currentIdx + 1} / {deck.length}
        </span>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-[var(--color-success)]">✓ {sessionStats.correct}</span>
          <span className="text-[var(--color-error)]">✗ {sessionStats.wrong}</span>
        </div>
      </div>
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
        <div
          className="h-full rounded-full bg-[var(--color-primary)] transition-all"
          style={{ width: `${((currentIdx + 1) / deck.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div
        onClick={handleFlip}
        className="relative cursor-pointer select-none rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 shadow-sm transition-all hover:border-[var(--color-primary)] min-h-[300px] flex flex-col justify-center"
      >
        {!flipped ? (
          /* Front — Question */
          <div className="text-center">
            <div className="mb-4 flex justify-center gap-2">
              <span className="rounded-md bg-[var(--color-bg-secondary)] px-2 py-0.5 text-xs font-medium capitalize text-[var(--color-text-secondary)]">
                {translated!.difficulty}
              </span>
              <span className="rounded-md bg-[var(--color-bg-secondary)] px-2 py-0.5 text-xs font-medium text-[var(--color-text-secondary)]">
                {translated!.topic}
              </span>
            </div>
            <h2 className="mb-4 text-lg font-semibold text-[var(--color-text)]">{translated!.question}</h2>
            {translated!.code && <CodeBlock code={translated!.code} />}
            <p className="mt-6 text-xs text-[var(--color-text-secondary)]">
              <Eye className="mr-1 inline h-3 w-3" />
              {t('flashcard.tapToFlip')}
            </p>
          </div>
        ) : (
          /* Back — Answer */
          <div>
            {translated!.solutionCode && <CodeBlock code={translated!.solutionCode} />}
            {!translated!.solutionCode && (
              <div className="mb-3 rounded-lg bg-[var(--color-primary-bg)] p-3">
                <p className="text-sm font-semibold text-[var(--color-primary)]">{String(translated!.answer)}</p>
              </div>
            )}
            <p className="text-sm leading-relaxed text-[var(--color-text)]">{translated!.explanation}</p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={currentIdx === 0}
          className="flex items-center gap-1 rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-secondary)] disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" /> {t('common.previous')}
        </button>

        {flipped && !isAnswered && (
          <div className="flex gap-2">
            <button
              onClick={() => handleRate(false)}
              className="flex items-center gap-1.5 rounded-lg border border-[var(--color-error)] px-4 py-2 text-sm font-medium text-[var(--color-error)] transition-colors hover:bg-[var(--color-error-bg)]"
            >
              <XCircle className="h-4 w-4" /> {t('flashcard.didntKnow')}
            </button>
            <button
              onClick={() => handleRate(true)}
              className="flex items-center gap-1.5 rounded-lg border border-[var(--color-success)] px-4 py-2 text-sm font-medium text-[var(--color-success)] transition-colors hover:bg-[var(--color-success-bg)]"
            >
              <CheckCircle2 className="h-4 w-4" /> {t('flashcard.knewIt')}
            </button>
          </div>
        )}

        <button
          onClick={goNext}
          disabled={currentIdx >= deck.length - 1}
          className="flex items-center gap-1 rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-secondary)] disabled:opacity-30"
        >
          {t('common.next')} <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Keyboard hints */}
      <p className="mt-4 text-center text-xs text-[var(--color-text-secondary)]">
        {t('flashcard.keyboardHint')}
      </p>
    </div>
  )
}
