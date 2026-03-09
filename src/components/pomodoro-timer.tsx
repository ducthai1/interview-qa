import { useState, useEffect, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Timer, Play, Pause, SkipForward } from 'lucide-react'

const STUDY_MINUTES = 25
const BREAK_MINUTES = 5

type Phase = 'idle' | 'study' | 'break'

export function PomodoroTimer() {
  const { t } = useTranslation()
  const [phase, setPhase] = useState<Phase>('idle')
  const [secondsLeft, setSecondsLeft] = useState(STUDY_MINUTES * 60)
  const [paused, setPaused] = useState(false)
  const [sessionCount, setSessionCount] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    return clearTimer
  }, [clearTimer])

  useEffect(() => {
    if (phase === 'idle' || paused) {
      clearTimer()
      return
    }

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearTimer()
          // Transition to next phase
          if (phase === 'study') {
            setPhase('break')
            return BREAK_MINUTES * 60
          } else {
            setPhase('study')
            setSessionCount((c) => c + 1)
            return STUDY_MINUTES * 60
          }
        }
        return prev - 1
      })
    }, 1000)

    return clearTimer
  }, [phase, paused, clearTimer])

  function start() {
    setPhase('study')
    setSecondsLeft(STUDY_MINUTES * 60)
    setPaused(false)
    setSessionCount(1)
  }

  function togglePause() {
    setPaused((p) => !p)
  }

  function skipBreak() {
    setPhase('study')
    setSecondsLeft(STUDY_MINUTES * 60)
    setPaused(false)
    setSessionCount((c) => c + 1)
  }

  const mins = Math.floor(secondsLeft / 60)
  const secs = secondsLeft % 60
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  const totalSecs = phase === 'study' ? STUDY_MINUTES * 60 : BREAK_MINUTES * 60
  const progressPct = totalSecs > 0 ? ((totalSecs - secondsLeft) / totalSecs) * 100 : 0

  if (phase === 'idle') {
    return (
      <button
        onClick={start}
        className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]"
      >
        <Timer className="h-4 w-4 text-[var(--color-primary)]" />
        {t('pomodoro.start')}
      </button>
    )
  }

  const isStudy = phase === 'study'
  const phaseColor = isStudy ? 'var(--color-primary)' : 'var(--color-success)'

  return (
    <div className="inline-flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2">
      {/* Phase indicator */}
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: phaseColor }} />
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: phaseColor }}>
          {isStudy ? t('pomodoro.study') : t('pomodoro.break')}
        </span>
      </div>

      {/* Timer display */}
      <span className="min-w-[52px] text-center font-mono text-lg font-bold text-[var(--color-text)]">
        {timeStr}
      </span>

      {/* Progress ring */}
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{ width: `${progressPct}%`, backgroundColor: phaseColor }}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={togglePause}
          className="flex h-7 w-7 items-center justify-center rounded-md text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
          title={paused ? t('pomodoro.resume') : t('pomodoro.pause')}
        >
          {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
        </button>
        {phase === 'break' && (
          <button
            onClick={skipBreak}
            className="flex h-7 w-7 items-center justify-center rounded-md text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            title={t('pomodoro.skip')}
          >
            <SkipForward className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Session counter */}
      <span className="text-[10px] text-[var(--color-text-secondary)]">
        {t('pomodoro.sessionCount', { current: sessionCount })}
      </span>
    </div>
  )
}
