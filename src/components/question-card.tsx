import { useState } from 'react'
import { Bookmark, BookmarkCheck, CheckCircle2, XCircle, RotateCcw } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Question, UserProgress } from '../types'
import { useQuestionTranslation } from '../hooks/use-question-translation'
import { CodeBlock } from './code-block'
import { CodeOutputInteraction } from './question-type-code-output'
import { DebugInteraction } from './question-type-debug'
import { CodeWriteInteraction } from './question-type-code-write'
import { SystemDesignInteraction } from './question-type-system-design'
import { AIFeedbackButton } from './ai-feedback-button'
import { AISettingsModal } from './ai-settings-modal'

interface QuestionCardProps {
  question: Question
  progress: UserProgress
  onAnswer: (questionId: string, correct: boolean) => void
  onBookmark: (questionId: string) => void
  onRetry: (questionId: string) => void
}

const difficultyColors: Record<string, string> = {
  junior: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  mid: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  senior: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  lead: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

export function QuestionCard({ question: rawQuestion, progress, onAnswer, onBookmark, onRetry }: QuestionCardProps) {
  const { t } = useTranslation()
  const { tq } = useQuestionTranslation()
  const question = tq(rawQuestion)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [tfAnswer, setTfAnswer] = useState<boolean | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [pendingSelfRate, setPendingSelfRate] = useState(false)
  const [userAnswerForAI, setUserAnswerForAI] = useState('')
  const [aiSettingsOpen, setAiSettingsOpen] = useState(false)

  const answered = progress.answered[question.id]
  const isBookmarked = progress.bookmarked.includes(question.id)
  const isRevealed = showAnswer || !!answered
  const isSelfRateType = question.type === 'debug' || question.type === 'code-write' || question.type === 'system-design'

  const typeLabels: Record<string, string> = {
    mcq: t('question.multipleChoice'),
    'code-output': t('question.codeOutput'),
    'true-false': t('question.trueFalse'),
    debug: t('question.debug'),
    'code-write': t('question.codeWrite'),
    'system-design': t('question.systemDesign'),
  }

  const handleMcqSelect = (idx: number) => {
    if (isRevealed) return
    setSelectedOption(idx)
    onAnswer(question.id, idx === question.answer)
    setShowAnswer(true)
  }

  const handleTfSelect = (val: boolean) => {
    if (isRevealed) return
    setTfAnswer(val)
    onAnswer(question.id, val === question.answer)
    setShowAnswer(true)
  }

  const handleReveal = () => {
    if (!answered && !isSelfRateType) onAnswer(question.id, true)
    if (!answered && isSelfRateType) setPendingSelfRate(true)
    setShowAnswer(true)
  }

  const handleSelfRate = (correct: boolean) => {
    setPendingSelfRate(false)
    onAnswer(question.id, correct)
  }

  const handleRetry = () => {
    onRetry(question.id)
    setSelectedOption(null)
    setTfAnswer(null)
    setShowAnswer(false)
    setPendingSelfRate(false)
    setUserAnswerForAI('')
  }

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
      {/* Header badges */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${difficultyColors[question.difficulty]}`}>
          {question.difficulty}
        </span>
        <span className="rounded-md bg-[var(--color-bg-secondary)] px-2 py-0.5 text-xs font-medium text-[var(--color-text-secondary)]">
          {typeLabels[question.type]}
        </span>
        <div className="flex flex-wrap gap-1">
          {question.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs text-[var(--color-text-secondary)]">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onBookmark(question.id)}
          className="ml-auto text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
          aria-label={isBookmarked ? t('question.removeBookmark') : t('question.addBookmark')}
        >
          {isBookmarked ? <BookmarkCheck className="h-4 w-4 text-[var(--color-primary)]" /> : <Bookmark className="h-4 w-4" />}
        </button>
      </div>

      {/* Question text */}
      <h3 className="mb-3 text-base font-medium text-[var(--color-text)]">{question.question}</h3>

      {/* Code snippet (shown for code-output, debug, and any question with code) */}
      {question.code && <CodeBlock code={question.code} />}

      {/* MCQ options */}
      {question.type === 'mcq' && question.options && (
        <McqOptions options={question.options} correctIdx={question.answer as number} selectedOption={selectedOption} isRevealed={isRevealed} onSelect={handleMcqSelect} />
      )}

      {/* True/False options */}
      {question.type === 'true-false' && (
        <TrueFalseOptions correctAnswer={question.answer as boolean} userAnswer={tfAnswer} isRevealed={isRevealed} onSelect={handleTfSelect} />
      )}

      {/* Code Output — interactive input */}
      {question.type === 'code-output' && !isRevealed && (
        <CodeOutputInteraction
          correctAnswer={String(question.answer)}
          revealed={isRevealed}
          onSubmit={(correct) => { onAnswer(question.id, correct); setShowAnswer(true) }}
          onReveal={handleReveal}
        />
      )}

      {/* Debug — editable code */}
      {question.type === 'debug' && !isRevealed && (
        <DebugInteraction
          originalCode={question.code || ''}
          revealed={isRevealed}
          onSubmit={(code) => { if (code !== undefined) setUserAnswerForAI(code); setPendingSelfRate(true); setShowAnswer(true) }}
          onReveal={handleReveal}
        />
      )}

      {/* Code Write — write code from scratch */}
      {question.type === 'code-write' && !isRevealed && (
        <CodeWriteInteraction
          revealed={isRevealed}
          onSubmit={(code) => { if (code !== undefined) setUserAnswerForAI(code); setPendingSelfRate(true); setShowAnswer(true) }}
          onReveal={handleReveal}
        />
      )}

      {/* System Design — open-ended text */}
      {question.type === 'system-design' && !isRevealed && (
        <SystemDesignInteraction
          revealed={isRevealed}
          onSubmit={(text) => { if (text !== undefined) setUserAnswerForAI(text); setPendingSelfRate(true); setShowAnswer(true) }}
          onReveal={handleReveal}
        />
      )}

      {/* Answer & Explanation */}
      {isRevealed && (
        <div className="mt-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4">
          {/* Result banner — correct/incorrect indicator */}
          {answered && (
            <div className={`mb-3 flex items-center gap-2 rounded-lg border p-2.5 ${
              answered.correct
                ? 'border-[var(--color-success)] bg-green-50 dark:bg-green-900/20'
                : 'border-[var(--color-error)] bg-red-50 dark:bg-red-900/20'
            }`}>
              {answered.correct
                ? <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-success)]" />
                : <XCircle className="h-4 w-4 shrink-0 text-[var(--color-error)]" />
              }
              <span className={`text-sm font-medium ${
                answered.correct ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'
              }`}>
                {answered.correct ? t('question.resultCorrect') : t('question.resultIncorrect')}
              </span>
            </div>
          )}
          {/* Solution code — corrected/model code shown for questions with code snippets */}
          {question.solutionCode && (
            <div className="mb-3">
              <span className="mb-1 block text-xs font-medium text-[var(--color-success)]">{t('question.solutionCode')}:</span>
              <CodeBlock code={question.solutionCode} />
            </div>
          )}
          {/* Text answer for non-MCQ/non-true-false (only when no solutionCode, to avoid redundancy) */}
          {(question.type !== 'mcq' && question.type !== 'true-false') && !question.solutionCode && (
            <div className="mb-3">
              <span className="mb-1 block text-xs font-medium text-[var(--color-text-secondary)]">{t('common.answer')}:</span>
              {isCodeAnswer(question.type) ? (
                <CodeBlock code={String(question.answer)} />
              ) : (
                <p className="text-sm font-semibold text-[var(--color-text)]">{String(question.answer)}</p>
              )}
            </div>
          )}
          <p className="text-sm leading-relaxed text-[var(--color-text)]">{question.explanation}</p>
          {question.references && question.references.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {question.references.map((ref, i) => (
                <a key={i} href={ref} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-primary)] hover:underline">
                  {t('common.reference')} {i + 1}
                </a>
              ))}
            </div>
          )}
          {/* AI Feedback — shown for code-write, debug, system-design after submission */}
          {isSelfRateType && isRevealed && (
            <AIFeedbackButton
              question={rawQuestion}
              userAnswer={userAnswerForAI}
              visible={true}
              onOpenSettings={() => setAiSettingsOpen(true)}
            />
          )}

          {/* Self-rate prompt for open-ended types (debug, code-write, system-design) */}
          {pendingSelfRate && !answered && (
            <div className="mt-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
              <p className="mb-2 text-sm font-medium text-[var(--color-text)]">{t('question.selfRatePrompt')}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleSelfRate(true)}
                  className="flex items-center gap-1.5 rounded-lg border border-[var(--color-success)] px-3 py-1.5 text-sm font-medium text-[var(--color-success)] transition-colors hover:bg-green-50 dark:hover:bg-green-900/20"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {t('question.selfRateCorrect')}
                </button>
                <button
                  onClick={() => handleSelfRate(false)}
                  className="flex items-center gap-1.5 rounded-lg border border-[var(--color-error)] px-3 py-1.5 text-sm font-medium text-[var(--color-error)] transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <XCircle className="h-3.5 w-3.5" />
                  {t('question.selfRateIncorrect')}
                </button>
              </div>
            </div>
          )}
          <div className="mt-3 flex items-center justify-between border-t border-[var(--color-border)] pt-3">
            {answered && (
              <span className="text-xs text-[var(--color-text-secondary)]">
                {t('question.attemptCount', { count: answered.attempts || 1 })}
              </span>
            )}
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-primary)] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:opacity-90"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {t('question.retry')}
            </button>
          </div>
        </div>
      )}

      <AISettingsModal open={aiSettingsOpen} onClose={() => setAiSettingsOpen(false)} />
    </div>
  )
}

/* Check if the answer field contains code (should render as CodeBlock) */
function isCodeAnswer(type: string): boolean {
  return type === 'code-write' || type === 'debug' || type === 'code-output'
}

/* MCQ options sub-component */
function McqOptions({ options, correctIdx, selectedOption, isRevealed, onSelect }: {
  options: string[]; correctIdx: number; selectedOption: number | null; isRevealed: boolean; onSelect: (idx: number) => void
}) {
  return (
    <div className="mt-3 flex flex-col gap-2">
      {options.map((opt, idx) => {
        let cls = 'border-[var(--color-border)] hover:border-[var(--color-primary)]'
        if (isRevealed) {
          if (idx === correctIdx) cls = 'border-[var(--color-success)] bg-green-50 dark:bg-green-900/20'
          else if (selectedOption === idx) cls = 'border-[var(--color-error)] bg-red-50 dark:bg-red-900/20'
        } else if (selectedOption === idx) {
          cls = 'border-[var(--color-primary)] bg-indigo-50 dark:bg-indigo-900/20'
        }
        return (
          <button key={idx} onClick={() => onSelect(idx)} disabled={isRevealed}
            className={`flex items-center gap-3 rounded-lg border p-3 text-left text-sm transition-colors ${cls}`}>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-medium">
              {String.fromCharCode(65 + idx)}
            </span>
            <span className="text-[var(--color-text)]">{opt}</span>
            {isRevealed && idx === correctIdx && <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-[var(--color-success)]" />}
            {isRevealed && selectedOption === idx && idx !== correctIdx && <XCircle className="ml-auto h-4 w-4 shrink-0 text-[var(--color-error)]" />}
          </button>
        )
      })}
    </div>
  )
}

/* True/False sub-component */
function TrueFalseOptions({ correctAnswer, userAnswer, isRevealed, onSelect }: {
  correctAnswer: boolean; userAnswer: boolean | null; isRevealed: boolean; onSelect: (val: boolean) => void
}) {
  return (
    <div className="mt-3 flex gap-3">
      {[true, false].map((val) => {
        let cls = 'border-[var(--color-border)] hover:border-[var(--color-primary)]'
        if (isRevealed) {
          if (val === correctAnswer) cls = 'border-[var(--color-success)] bg-green-50 dark:bg-green-900/20'
          else if (userAnswer === val) cls = 'border-[var(--color-error)] bg-red-50 dark:bg-red-900/20'
        }
        return (
          <button key={String(val)} onClick={() => onSelect(val)} disabled={isRevealed}
            className={`flex-1 rounded-lg border p-3 text-sm font-medium transition-colors ${cls}`}>
            {val ? 'True' : 'False'}
          </button>
        )
      })}
    </div>
  )
}
