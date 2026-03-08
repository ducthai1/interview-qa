import { useState, useEffect, useRef, useCallback } from 'react'
import { Zap, Target, Flame, Trophy, RotateCcw, ChevronLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../components/question-card'
import { ShareButton } from '../components/share-button'
import { NextStepsSection } from '../components/next-steps-section'
import { pickWithDifficultyMix } from '../utils/question-filters'
import { CHALLENGE_PRESETS, calculateScore, isNewBest } from '../utils/challenge-scoring'
import type { ChallengePreset } from '../utils/challenge-scoring'
import type { Question, Difficulty, UserProgress, ChallengeBest } from '../types'

interface ChallengePageProps {
  questions: Question[]
  progress: UserProgress
  onAnswer: (questionId: string, correct: boolean) => void
  onBookmark: (questionId: string) => void
  onRetry: (questionId: string) => void
  onSaveChallenge: (presetId: string, result: ChallengeBest) => void
}

type PageState = 'select' | 'in-progress' | 'results'

interface ChallengeSession {
  preset: ChallengePreset
  questions: Question[]
  answers: Record<string, boolean> // questionId → correct
  startTime: number
  endTime: number | null
  totalSeconds: number
}

const PRESET_ICONS = {
  Zap: Zap,
  Target: Target,
  Flame: Flame,
}

/* Timer bar with urgency colors */
function TimerBar({ seconds, totalSeconds }: { seconds: number; totalSeconds: number }) {
  const { t } = useTranslation()
  const ratio = totalSeconds > 0 ? seconds / totalSeconds : 0
  const pct = Math.round(ratio * 100)

  const barColor =
    ratio < 0.1
      ? 'bg-red-500'
      : ratio < 0.25
        ? 'bg-yellow-400'
        : 'bg-[var(--color-success)]'

  const textColor =
    ratio < 0.1
      ? 'text-red-600 animate-pulse'
      : ratio < 0.25
        ? 'text-yellow-600'
        : 'text-[var(--color-text)]'

  const mm = Math.floor(seconds / 60).toString().padStart(2, '0')
  const ss = (seconds % 60).toString().padStart(2, '0')
  const formatted = `${mm}:${ss}`

  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-secondary)]">{t('challenge.timeLeft')}</span>
        <span className={`font-mono text-sm font-bold ${textColor}`}>{formatted}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export function ChallengePage({
  questions,
  progress,
  onAnswer,
  onBookmark,
  onRetry,
  onSaveChallenge,
}: ChallengePageProps) {
  const { t } = useTranslation()
  const LEVELS: Difficulty[] = ['junior', 'mid', 'senior', 'lead']
  const [state, setState] = useState<PageState>('select')
  const [session, setSession] = useState<ChallengeSession | null>(null)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [newBest, setNewBest] = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const [savedResult, setSavedResult] = useState<ChallengeBest | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<Difficulty>('junior')

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const timerRef = useRef(0)
  const sessionRef = useRef<ChallengeSession | null>(null)

  // Keep sessionRef in sync
  useEffect(() => {
    sessionRef.current = session
  }, [session])

  const finishChallenge = useCallback((forced?: boolean) => {
    if (!sessionRef.current) return
    const sess = sessionRef.current

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    const endTime = Date.now()
    const timeUsedMs = endTime - sess.startTime
    const totalTimeMs = sess.totalSeconds * 1000

    const correct = Object.values(sess.answers).filter(Boolean).length
    const total = forced ? sess.questions.length : Object.keys(sess.answers).length
    const answeredTotal = Math.max(Object.keys(sess.answers).length, 1)

    const score = calculateScore(correct, answeredTotal, timeUsedMs, totalTimeMs)
    const accuracy = answeredTotal > 0 ? correct / answeredTotal : 0
    const result: ChallengeBest = { score, accuracy, date: endTime }

    const currentBest = sess.preset ? progress.challengeBests?.[sess.preset.id] : undefined
    const gotNewBest = isNewBest(score, currentBest)

    setSavedResult(result)
    setFinalScore(score)
    setNewBest(gotNewBest)
    setSession((prev) => prev ? { ...prev, endTime, answers: sess.answers } : null)
    setState('results')

    onSaveChallenge(sess.preset.id, result)
    void total // suppress lint
  }, [progress, onSaveChallenge])

  // Start countdown interval when in-progress
  useEffect(() => {
    if (state !== 'in-progress' || !session) return

    timerRef.current = session.totalSeconds
    setTimerSeconds(session.totalSeconds)

    intervalRef.current = setInterval(() => {
      timerRef.current -= 1
      setTimerSeconds(timerRef.current)

      if (timerRef.current <= 0) {
        clearInterval(intervalRef.current!)
        intervalRef.current = null
        finishChallenge(true)
      }
    }, 1000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  function startChallenge(preset: ChallengePreset) {
    const picked = pickWithDifficultyMix(questions, preset.questions, selectedLevel)
    const totalSeconds = preset.timeMinutes * 60

    const newSession: ChallengeSession = {
      preset,
      questions: picked,
      answers: {},
      startTime: Date.now(),
      endTime: null,
      totalSeconds,
    }
    sessionRef.current = newSession
    setSession(newSession)
    setCurrentIdx(0)
    setState('in-progress')
  }

  function handleAnswer(questionId: string, correct: boolean) {
    onAnswer(questionId, correct)
    setSession((prev) => {
      if (!prev) return prev
      const updated = { ...prev, answers: { ...prev.answers, [questionId]: correct } }
      sessionRef.current = updated
      return updated
    })
    // Auto-advance after brief delay
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setCurrentIdx((idx) => {
        const nextIdx = idx + 1
        if (nextIdx >= (sessionRef.current?.questions.length ?? 0)) {
          finishChallenge(false)
        }
        return nextIdx
      })
    }, 1200)
  }

  function handleRetry(preset?: ChallengePreset) {
    if (preset) {
      startChallenge(preset)
    } else if (session) {
      startChallenge(session.preset)
    }
  }

  // ── State: SELECT ──────────────────────────────────────────────────────
  if (state === 'select') {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-10 text-center">
          <Trophy className="mx-auto mb-3 h-12 w-12 text-[var(--color-primary)]" />
          <h1 className="mb-2 text-3xl font-bold text-[var(--color-text)]">{t('challenge.title')}</h1>
          <p className="text-[var(--color-text-secondary)]">{t('challenge.subtitle')}</p>
        </div>

        {/* Difficulty selector */}
        <div className="mx-auto mb-8 max-w-md">
          <p className="mb-2 text-center text-sm font-medium text-[var(--color-text)]">{t('challenge.selectLevel')}</p>
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
          <p className="mt-2 text-center text-xs text-[var(--color-text-secondary)]">{t('challenge.selectLevelHint')}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {CHALLENGE_PRESETS.map((preset) => {
            const Icon = PRESET_ICONS[preset.icon]
            const best = progress.challengeBests?.[preset.id]
            return (
              <div
                key={preset.id}
                className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon className="mb-3 h-8 w-8 text-[var(--color-primary)]" />
                <h2 className="mb-1 text-xl font-bold text-[var(--color-text)]">{t(preset.labelKey)}</h2>
                <p className="mb-1 text-sm text-[var(--color-text-secondary)]">
                  {t('challenge.questions', { count: preset.questions })}
                </p>
                <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
                  {t('challenge.minutes', { count: preset.timeMinutes })}
                </p>
                <p className="mb-5 text-xs font-medium text-[var(--color-primary)]">
                  {best
                    ? t('challenge.bestScore', { score: best.score })
                    : t('challenge.noBest')}
                </p>
                <button
                  onClick={() => startChallenge(preset)}
                  className="mt-auto w-full rounded-lg bg-[var(--color-primary)] py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
                >
                  {t('challenge.start')}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // ── State: RESULTS ─────────────────────────────────────────────────────
  if (state === 'results' && session && savedResult) {
    const correct = Object.values(session.answers).filter(Boolean).length
    const answered = Object.keys(session.answers).length
    const timeUsedMs = session.endTime ? session.endTime - session.startTime : session.totalSeconds * 1000
    const timeUsedSec = Math.round(timeUsedMs / 1000)
    const mm = Math.floor(timeUsedSec / 60).toString().padStart(2, '0')
    const ss = (timeUsedSec % 60).toString().padStart(2, '0')
    const timeUsedFormatted = `${mm}:${ss}`
    const accuracyPct = answered > 0 ? Math.round((correct / answered) * 100) : 0

    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        {newBest && (
          <div className="mb-6 rounded-xl bg-yellow-50 px-6 py-3 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400">
            <Trophy className="mx-auto mb-1 h-6 w-6" />
            <span className="font-bold">{t('challenge.newBest')}</span>
          </div>
        )}

        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
            {t('challenge.score')}
          </p>
          <p className="text-6xl font-black text-[var(--color-primary)]">{finalScore}</p>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
            <p className="text-2xl font-bold text-[var(--color-text)]">{accuracyPct}%</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{t('common.accuracy')}</p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
            <p className="text-2xl font-bold text-[var(--color-text)]">{timeUsedFormatted}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{t('challenge.timeUsed')}</p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
            <p className="text-2xl font-bold text-[var(--color-text)]">
              {correct}/{answered}
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">{t('common.correct')}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => handleRetry(session.preset)}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            <RotateCcw className="h-4 w-4" />
            {t('challenge.tryAgain')}
          </button>
          <ShareButton
            cardProps={{
              score: finalScore,
              accuracy: accuracyPct,
              totalAnswered: answered,
              correctCount: correct,
              topicBreakdown: session.questions.reduce<{ topic: string; correct: number; total: number }[]>((acc, q) => {
                const existing = acc.find((e) => e.topic === q.topic)
                const isCorrect = session.answers[q.id] === true
                if (existing) {
                  existing.total += 1
                  if (isCorrect) existing.correct += 1
                } else {
                  acc.push({ topic: q.topic, correct: isCorrect ? 1 : 0, total: 1 })
                }
                return acc
              }, []),
              mode: 'challenge',
              date: new Date().toLocaleDateString(),
            }}
          />
          <button
            onClick={() => setState('select')}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-6 py-2.5 font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-border)]"
          >
            <ChevronLeft className="h-4 w-4" />
            {t('challenge.backToMenu')}
          </button>
        </div>
        <NextStepsSection questions={questions} progress={progress} />
      </div>
    )
  }

  // ── State: IN PROGRESS ─────────────────────────────────────────────────
  if (state === 'in-progress' && session) {
    const current = session.questions[currentIdx]
    const totalQ = session.questions.length
    const progressPct = ((currentIdx) / totalQ) * 100

    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Timer bar */}
        <TimerBar seconds={timerSeconds} totalSeconds={session.totalSeconds} />

        {/* Progress */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-[var(--color-text)]">
            {t('challenge.questionOf', { current: Math.min(currentIdx + 1, totalQ), total: totalQ })}
          </span>
          <button
            onClick={() => finishChallenge(false)}
            className="text-xs text-[var(--color-text-secondary)] underline hover:text-[var(--color-text)]"
          >
            {t('challenge.finishEarly')}
          </button>
        </div>
        <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
          <div
            className="h-full rounded-full bg-[var(--color-primary)] transition-all"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {current && currentIdx < totalQ && (
          <QuestionCard
            key={current.id}
            question={current}
            progress={progress}
            onAnswer={handleAnswer}
            onBookmark={onBookmark}
            onRetry={onRetry}
          />
        )}
      </div>
    )
  }

  return null
}
