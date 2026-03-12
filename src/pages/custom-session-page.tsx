import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Settings2, Play, CheckCircle2, XCircle, Clock, ChevronDown } from 'lucide-react'
import { QuestionCard } from '../components/question-card'
import { NextStepsSection } from '../components/next-steps-section'
import { getTopicsByRole } from '../data'
import type { Question, Topic, UserProgress, Role } from '../types'

interface CustomSessionPageProps {
  questions: Question[]
  progress: UserProgress
  onAnswer: (questionId: string, correct: boolean) => void
  onBookmark: (questionId: string) => void
  onRetry: (questionId: string) => void
  role: Role
}

const COUNT_OPTIONS = [5, 10, 15, 20, 30]
const TIME_OPTIONS = [0, 5, 10, 15, 20, 30, 45, 60] // 0 = no limit

type SessionState = 'setup' | 'active' | 'complete'

export function CustomSessionPage({ questions, progress, onAnswer, onBookmark, onRetry, role }: CustomSessionPageProps) {
  const { t } = useTranslation()

  // Setup state
  const [count, setCount] = useState(10)
  const [timeLimit, setTimeLimit] = useState(0)
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([])
  const [showTopicPicker, setShowTopicPicker] = useState(false)
  
  const topics = useMemo(() => getTopicsByRole(role), [role])

  // Session state
  const [state, setState] = useState<SessionState>('setup')
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [correctIds, setCorrectIds] = useState<string[]>([])
  const [wrongIds, setWrongIds] = useState<string[]>([])
  const [showWrongReview, setShowWrongReview] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => clearTimer, [clearTimer])

  // Timer countdown
  useEffect(() => {
    if (state !== 'active' || timeLimit === 0) return
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearTimer()
          setState('complete')
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return clearTimer
  }, [state, timeLimit, clearTimer])

  // Pick random questions based on settings
  function startSession() {
    const pool = selectedTopics.length > 0
      ? questions.filter((q) => selectedTopics.includes(q.topic))
      : questions

    // Shuffle and pick
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    const picked = shuffled.slice(0, Math.min(count, shuffled.length))

    setSessionQuestions(picked)
    setCurrentIdx(0)
    setCorrectIds([])
    setWrongIds([])
    setShowWrongReview(false)
    setSecondsLeft(timeLimit * 60)
    setState('active')
  }

  function handleAnswer(questionId: string, correct: boolean) {
    onAnswer(questionId, correct)
    if (correct) setCorrectIds((prev) => [...prev, questionId])
    else setWrongIds((prev) => [...prev, questionId])
  }

  function nextQuestion() {
    if (currentIdx + 1 >= sessionQuestions.length) {
      clearTimer()
      setState('complete')
    } else {
      setCurrentIdx((prev) => prev + 1)
    }
  }

  function resetSession() {
    clearTimer()
    setState('setup')
    setShowWrongReview(false)
  }

  function toggleTopic(topicId: Topic) {
    setSelectedTopics((prev) =>
      prev.includes(topicId) ? prev.filter((t) => t !== topicId) : [...prev, topicId],
    )
  }

  const wrongQuestions = useMemo(
    () => sessionQuestions.filter((q) => wrongIds.includes(q.id)),
    [sessionQuestions, wrongIds],
  )

  const mins = Math.floor(secondsLeft / 60)
  const secs = secondsLeft % 60
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

  // ─── Setup Screen ──────────────────────────────────────────
  if (state === 'setup') {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="mb-8 text-center">
          <Settings2 className="mx-auto mb-3 h-12 w-12 text-[var(--color-primary)] opacity-60" />
          <h1 className="mb-2 text-2xl font-bold text-[var(--color-text)]">{t('session.title')}</h1>
          <p className="text-sm text-[var(--color-text-secondary)]">{t('session.subtitle')}</p>
        </div>

        <div className="space-y-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          {/* Question count */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
              {t('session.questionCount')}
            </label>
            <div className="flex flex-wrap gap-2">
              {COUNT_OPTIONS.map((n) => (
                <button
                  key={n}
                  onClick={() => setCount(n)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    count === n
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-[var(--color-bg-secondary)] text-[var(--color-text)] hover:bg-[var(--color-border)]'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Time limit */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
              {t('session.timeLimit')}
            </label>
            <div className="flex flex-wrap gap-2">
              {TIME_OPTIONS.map((m) => (
                <button
                  key={m}
                  onClick={() => setTimeLimit(m)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    timeLimit === m
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-[var(--color-bg-secondary)] text-[var(--color-text)] hover:bg-[var(--color-border)]'
                  }`}
                >
                  {m === 0 ? t('session.noTimeLimit') : t('session.minutesSuffix', { count: m })}
                </button>
              ))}
            </div>
          </div>

          {/* Topic picker */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
              {t('session.selectTopics')}
            </label>
            <button
              onClick={() => setShowTopicPicker(!showTopicPicker)}
              className="flex w-full items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-2 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]"
            >
              <span>
                {selectedTopics.length === 0
                  ? t('session.allTopics')
                  : `${selectedTopics.length} ${t('filter.topics').toLowerCase()}`}
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showTopicPicker ? 'rotate-180' : ''}`} />
            </button>
            {showTopicPicker && (
              <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => toggleTopic(topic.id)}
                    className={`rounded-lg px-2.5 py-1.5 text-left text-xs font-medium transition-colors ${
                      selectedTopics.includes(topic.id)
                        ? 'text-white'
                        : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
                    }`}
                    style={selectedTopics.includes(topic.id) ? { backgroundColor: topic.color } : undefined}
                  >
                    {topic.icon} {t(`topics.${topic.id}.label`, { defaultValue: topic.label })}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Start button */}
          <button
            onClick={startSession}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Play className="h-5 w-5" />
            {t('session.startSession')}
          </button>
        </div>
      </div>
    )
  }

  // ─── Complete Screen ──────────────────────────────────────
  if (state === 'complete') {
    const answeredCount = correctIds.length + wrongIds.length
    const accuracy = answeredCount > 0 ? Math.round((correctIds.length / answeredCount) * 100) : 0

    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8 text-center">
          <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-[var(--color-success)]" />
          <h1 className="mb-2 text-2xl font-bold text-[var(--color-text)]">
            {secondsLeft === 0 && timeLimit > 0 ? t('session.timeUp') : t('session.sessionComplete')}
          </h1>
        </div>

        {/* Score summary */}
        <div className="mb-8 flex justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-success)]">{correctIds.length}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">{t('common.correct')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-error)]">{wrongIds.length}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">{t('mock.wrong')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-primary)]">{accuracy}%</div>
            <div className="text-sm text-[var(--color-text-secondary)]">{t('common.accuracy')}</div>
          </div>
        </div>

        {/* Review wrong answers */}
        {wrongQuestions.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => setShowWrongReview(!showWrongReview)}
              className="mb-4 flex items-center gap-2 rounded-lg border border-[var(--color-error)] px-4 py-2 text-sm font-medium text-[var(--color-error)] transition-colors hover:bg-[var(--color-error-bg)]"
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
        {wrongQuestions.length === 0 && (
          <p className="mb-6 text-center text-sm text-[var(--color-success)]">{t('session.noWrong')}</p>
        )}

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button
            onClick={resetSession}
            className="rounded-lg bg-[var(--color-primary)] px-6 py-2 font-medium text-white transition-opacity hover:opacity-90"
          >
            {t('session.backToSetup')}
          </button>
          <Link
            to="/stats"
            className="rounded-lg border border-[var(--color-border)] px-6 py-2 text-sm font-medium text-[var(--color-text)] no-underline transition-colors hover:border-[var(--color-primary)]"
          >
            {t('nav.stats')}
          </Link>
        </div>

        <NextStepsSection questions={questions} progress={progress} role={role} />
      </div>
    )
  }

  // ─── Active Session ──────────────────────────────────────
  const currentQuestion = sessionQuestions[currentIdx]
  const total = sessionQuestions.length
  const answered = currentIdx < total && (correctIds.includes(currentQuestion.id) || wrongIds.includes(currentQuestion.id))

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Progress bar + timer */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm text-[var(--color-text-secondary)]">
          <span>{t('session.sessionProgress', { current: currentIdx + 1, total })}</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[var(--color-success)]">
              <CheckCircle2 className="h-4 w-4" /> {correctIds.length}
            </span>
            <span className="flex items-center gap-1 text-[var(--color-error)]">
              <XCircle className="h-4 w-4" /> {wrongIds.length}
            </span>
            {timeLimit > 0 && (
              <span className="flex items-center gap-1 font-mono font-bold text-[var(--color-text)]">
                <Clock className="h-4 w-4" /> {timeStr}
              </span>
            )}
          </div>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
          <div
            className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-300"
            style={{ width: `${(currentIdx / total) * 100}%` }}
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
        hideRetry
      />

      {/* Next button — show after answering */}
      {answered && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={nextQuestion}
            className="rounded-lg bg-[var(--color-primary)] px-6 py-2 font-medium text-white transition-opacity hover:opacity-90"
          >
            {currentIdx + 1 >= total ? t('common.finish') : t('common.next')}
          </button>
        </div>
      )}
    </div>
  )
}
