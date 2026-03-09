import { useState } from 'react'
import { Bookmark, BookmarkCheck, CheckCircle2, XCircle, RotateCcw, Flag, ChevronDown, ChevronUp } from 'lucide-react'
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
import { ConfidenceRating } from './confidence-rating'
import { QuestionNotes } from './question-notes'
import type { ConfidenceLevel } from '../types'

interface QuestionCardProps {
  question: Question
  progress: UserProgress
  onAnswer: (questionId: string, correct: boolean) => void
  onBookmark: (questionId: string) => void
  onRetry: (questionId: string) => void
  onFlag?: (questionId: string) => void
  onSaveNote?: (questionId: string, note: string) => void
  /** Hide retry button in exam modes (mock interview, challenge) */
  hideRetry?: boolean
}

const difficultyColors: Record<string, string> = {
  junior: 'bg-[var(--color-junior-bg)] text-[var(--color-junior)]',
  mid: 'bg-[var(--color-mid-bg)] text-[var(--color-mid)]',
  senior: 'bg-[var(--color-senior-bg)] text-[var(--color-senior)]',
  lead: 'bg-[var(--color-lead-bg)] text-[var(--color-lead)]',
}

/* Hint section sub-component */
function HintSection({ hints, currentHintIdx, onShowNextHint }: {
  hints: string[]; currentHintIdx: number; onShowNextHint: () => void
}) {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)
  const revealed = hints.slice(0, currentHintIdx)
  return (
    <div className="mt-3 rounded-lg border border-[var(--color-warning-border)] bg-[var(--color-warning-bg)] p-3">
      <button
        onClick={() => setCollapsed(c => !c)}
        className="flex w-full items-center justify-between text-xs font-medium text-[var(--color-warning)]"
      >
        <span>{t('question.hintNumber', { number: currentHintIdx })}</span>
        {collapsed ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronUp className="h-3.5 w-3.5" />}
      </button>
      {!collapsed && (
        <ul className="mt-2 flex flex-col gap-1.5">
          {revealed.map((hint, i) => (
            <li key={i} className="text-sm text-[var(--color-warning)]">
              <span className="font-medium">{i + 1}.</span> {hint}
            </li>
          ))}
        </ul>
      )}
      {!collapsed && currentHintIdx < hints.length && (
        <button
          onClick={onShowNextHint}
          className="mt-2 text-xs font-medium text-[var(--color-warning)] hover:opacity-80 underline"
        >
          {t('question.showHint')}
        </button>
      )}
      {!collapsed && currentHintIdx >= hints.length && (
        <p className="mt-2 text-xs italic text-[var(--color-warning)]">{t('question.noMoreHints')}</p>
      )}
    </div>
  )
}

/* Self-rate rubric sub-component (3-level for open-ended types) */
function SelfRateRubric({ onRate }: { onRate: (level: 'nailed' | 'partial' | 'review') => void }) {
  const { t } = useTranslation()
  return (
    <div className="mt-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
      <p className="mb-2 text-sm font-medium text-[var(--color-text)]">{t('question.selfRatePrompt')}</p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onRate('nailed')}
          className="flex items-center gap-1.5 rounded-lg border border-[var(--color-success)] px-3 py-1.5 text-sm font-medium text-[var(--color-success)] transition-colors hover:bg-[var(--color-success-bg)]"
        >
          <CheckCircle2 className="h-3.5 w-3.5" />
          {t('question.selfRateNailed')}
        </button>
        <button
          onClick={() => onRate('partial')}
          className="flex items-center gap-1.5 rounded-lg border border-[var(--color-warning)] px-3 py-1.5 text-sm font-medium text-[var(--color-warning)] transition-colors hover:bg-[var(--color-warning-bg)]"
        >
          <CheckCircle2 className="h-3.5 w-3.5" />
          {t('question.selfRatePartial')}
        </button>
        <button
          onClick={() => onRate('review')}
          className="flex items-center gap-1.5 rounded-lg border border-[var(--color-error)] px-3 py-1.5 text-sm font-medium text-[var(--color-error)] transition-colors hover:bg-[var(--color-error-bg)]"
        >
          <XCircle className="h-3.5 w-3.5" />
          {t('question.selfRateIncorrect')}
        </button>
      </div>
    </div>
  )
}

export function QuestionCard({ question: rawQuestion, progress, onAnswer, onBookmark, onRetry, onFlag, onSaveNote, hideRetry }: QuestionCardProps) {
  const { t } = useTranslation()
  const { tq } = useQuestionTranslation()
  const question = tq(rawQuestion)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [tfAnswer, setTfAnswer] = useState<boolean | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [pendingSelfRate, setPendingSelfRate] = useState(false)
  const [userAnswerForAI, setUserAnswerForAI] = useState('')
  const [aiSettingsOpen, setAiSettingsOpen] = useState(false)
  const [currentHintIdx, setCurrentHintIdx] = useState(0)
  const [confidence, setConfidence] = useState<ConfidenceLevel | null>(null)

  const answered = progress.answered[question.id]
  const isBookmarked = progress.bookmarked.includes(question.id)
  const isFlagged = progress.flaggedQuestions?.includes(question.id) ?? false
  const isRevealed = showAnswer || !!answered
  const isSelfRateType = question.type === 'debug' || question.type === 'code-write' || question.type === 'system-design'

  const hints = question.hints ?? []
  const allHintsShown = currentHintIdx >= hints.length
  const hasHints = hints.length > 0
  const showShowAnswerButton = !hasHints || allHintsShown

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

  const handleSelfRate = (level: 'nailed' | 'partial' | 'review') => {
    setPendingSelfRate(false)
    if (level === 'review') {
      onAnswer(question.id, false)
    } else {
      // both 'nailed' and 'partial' count as correct; caller/SR engine can distinguish via attempts
      onAnswer(question.id, true)
    }
  }

  const handleRetry = () => {
    onRetry(question.id)
    setSelectedOption(null)
    setTfAnswer(null)
    setShowAnswer(false)
    setPendingSelfRate(false)
    setUserAnswerForAI('')
    setCurrentHintIdx(0)
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
        <div className="ml-auto flex items-center gap-1.5">
          {onFlag && (
            <button
              onClick={() => onFlag(question.id)}
              className={`transition-colors ${isFlagged ? 'text-orange-500' : 'text-[var(--color-text-secondary)] hover:text-orange-400'}`}
              aria-label={isFlagged ? t('question.unflagQuestion') : t('question.flagQuestion')}
              title={isFlagged ? t('question.unflagQuestion') : t('question.flagQuestion')}
            >
              <Flag className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => onBookmark(question.id)}
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
            aria-label={isBookmarked ? t('question.removeBookmark') : t('question.addBookmark')}
          >
            {isBookmarked ? <BookmarkCheck className="h-4 w-4 text-[var(--color-primary)]" /> : <Bookmark className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Question text */}
      <h3 className="mb-3 text-base font-medium text-[var(--color-text)]">{question.question}</h3>

      {/* Code snippet */}
      {question.code && <CodeBlock code={question.code} />}

      {/* Confidence rating — shown before answering for MCQ/TF/code-output */}
      {!isRevealed && !answered && !confidence && (question.type === 'mcq' || question.type === 'true-false' || question.type === 'code-output') && (
        <ConfidenceRating onSelect={setConfidence} />
      )}

      {/* MCQ options */}
      {question.type === 'mcq' && question.options && (
        <McqOptions
          options={question.options}
          correctIdx={question.answer as number}
          selectedOption={selectedOption}
          isRevealed={isRevealed}
          onSelect={handleMcqSelect}
          optionExplanations={question.optionExplanations}
        />
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

      {/* Hint section — shown before answer for non-interactive types */}
      {!isRevealed && hasHints && currentHintIdx > 0 && (
        <HintSection hints={hints} currentHintIdx={currentHintIdx} onShowNextHint={() => setCurrentHintIdx(i => i + 1)} />
      )}

      {/* Show Hint / Show Answer button — only for simple reveal types */}
      {!isRevealed && (question.type === 'mcq' || question.type === 'true-false' || question.type === 'code-output') ? null : !isRevealed && (
        <div className="mt-3 flex gap-2">
          {hasHints && !allHintsShown && currentHintIdx === 0 && (
            <button
              onClick={() => setCurrentHintIdx(1)}
              className="rounded-lg border border-[var(--color-warning)] px-4 py-2 text-sm font-medium text-[var(--color-warning)] transition-colors hover:bg-[var(--color-warning-bg)]"
            >
              {t('question.showHint')}
            </button>
          )}
          {showShowAnswerButton && (
            <button
              onClick={handleReveal}
              className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
            >
              {t('common.showAnswer')}
            </button>
          )}
        </div>
      )}

      {/* Answer & Explanation */}
      {isRevealed && (
        <div className="mt-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4">
          {/* Result banner */}
          {answered && (
            <div className={`mb-3 flex items-center gap-2 rounded-lg border p-2.5 ${
              answered.correct
                ? 'border-[var(--color-success)] bg-[var(--color-success-bg)]'
                : 'border-[var(--color-error)] bg-[var(--color-error-bg)]'
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
          {/* Solution code */}
          {question.solutionCode && (
            <div className="mb-3">
              <span className="mb-1 block text-xs font-medium text-[var(--color-success)]">{t('question.solutionCode')}:</span>
              <CodeBlock code={question.solutionCode} />
            </div>
          )}
          {/* Text answer for non-MCQ/non-true-false */}
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
          {/* AI Feedback */}
          {isSelfRateType && isRevealed && (
            <AIFeedbackButton
              question={rawQuestion}
              userAnswer={userAnswerForAI}
              visible={true}
              onOpenSettings={() => setAiSettingsOpen(true)}
            />
          )}

          {/* Self-rate rubric for open-ended types */}
          {pendingSelfRate && !answered && (
            <SelfRateRubric onRate={handleSelfRate} />
          )}

          {!hideRetry && (
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
          )}
        </div>
      )}

      <AISettingsModal open={aiSettingsOpen} onClose={() => setAiSettingsOpen(false)} />

      {/* Personal notes */}
      {onSaveNote && (
        <QuestionNotes
          questionId={question.id}
          initialNote={progress.notes?.[question.id] ?? ''}
          onSave={onSaveNote}
        />
      )}
    </div>
  )
}

/* Check if the answer field contains code */
function isCodeAnswer(type: string): boolean {
  return type === 'code-write' || type === 'debug' || type === 'code-output'
}

/* MCQ options sub-component */
function McqOptions({ options, correctIdx, selectedOption, isRevealed, onSelect, optionExplanations }: {
  options: string[]; correctIdx: number; selectedOption: number | null; isRevealed: boolean
  onSelect: (idx: number) => void; optionExplanations?: string[]
}) {
  const { t } = useTranslation()
  return (
    <div className="mt-3 flex flex-col gap-2">
      {options.map((opt, idx) => {
        let cls = 'border-[var(--color-border)] hover:border-[var(--color-primary)]'
        if (isRevealed) {
          if (idx === correctIdx) cls = 'border-[var(--color-success)] bg-[var(--color-success-bg)]'
          else if (selectedOption === idx) cls = 'border-[var(--color-error)] bg-[var(--color-error-bg)]'
        } else if (selectedOption === idx) {
          cls = 'border-[var(--color-primary)] bg-[var(--color-primary-bg)]'
        }
        const explanation = optionExplanations?.[idx]
        const isWrong = isRevealed && idx !== correctIdx
        return (
          <div key={idx}>
            <button onClick={() => onSelect(idx)} disabled={isRevealed}
              className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition-colors ${cls}`}>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-medium">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="text-[var(--color-text)]">{opt}</span>
              {isRevealed && idx === correctIdx && <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-[var(--color-success)]" />}
              {isRevealed && selectedOption === idx && idx !== correctIdx && <XCircle className="ml-auto h-4 w-4 shrink-0 text-[var(--color-error)]" />}
            </button>
            {isWrong && explanation && (
              <p className="mt-0.5 px-3 text-xs italic text-[var(--color-text-secondary)]">
                <span className="font-medium not-italic">{t('question.optionWrong')}: </span>{explanation}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* True/False sub-component */
function TrueFalseOptions({ correctAnswer, userAnswer, isRevealed, onSelect }: {
  correctAnswer: boolean; userAnswer: boolean | null; isRevealed: boolean; onSelect: (val: boolean) => void
}) {
  const { t } = useTranslation()
  return (
    <div className="mt-3 flex gap-3">
      {[true, false].map((val) => {
        let cls = 'border-[var(--color-border)] hover:border-[var(--color-primary)]'
        if (isRevealed) {
          if (val === correctAnswer) cls = 'border-[var(--color-success)] bg-[var(--color-success-bg)]'
          else if (userAnswer === val) cls = 'border-[var(--color-error)] bg-[var(--color-error-bg)]'
        }
        return (
          <button key={String(val)} onClick={() => onSelect(val)} disabled={isRevealed}
            className={`flex-1 rounded-lg border p-3 text-sm font-medium transition-colors ${cls}`}>
            {val ? t('common.true') : t('common.false')}
          </button>
        )
      })}
    </div>
  )
}
