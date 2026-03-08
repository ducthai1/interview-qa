import { useState } from 'react'
import { CheckCircle2, XCircle, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface CodeOutputInteractionProps {
  correctAnswer: string
  revealed: boolean
  onSubmit: (correct: boolean) => void
  onReveal: () => void
}

/* Interactive input for "Code Output" questions — user types their predicted output before seeing the answer */
export function CodeOutputInteraction({ correctAnswer, revealed, onSubmit, onReveal }: CodeOutputInteractionProps) {
  const { t } = useTranslation()
  const [userGuess, setUserGuess] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    if (!userGuess.trim()) return
    const normalizedGuess = userGuess.trim().toLowerCase().replace(/\s+/g, ' ')
    const normalizedAnswer = String(correctAnswer).trim().toLowerCase().replace(/\s+/g, ' ')
    const correct = normalizedGuess === normalizedAnswer
    setIsCorrect(correct)
    setSubmitted(true)
    onSubmit(correct)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  if (revealed && !submitted) {
    return null
  }

  if (submitted) {
    return (
      <div className={`mt-3 flex items-center gap-2 rounded-lg border p-3 ${
        isCorrect
          ? 'border-[var(--color-success)] bg-[var(--color-success-bg)]'
          : 'border-[var(--color-error)] bg-[var(--color-error-bg)]'
      }`}>
        {isCorrect
          ? <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--color-success)]" />
          : <XCircle className="h-5 w-5 shrink-0 text-[var(--color-error)]" />
        }
        <div className="text-sm">
          <span className="font-medium">{isCorrect ? t('codeOutputInteraction.correct') : t('codeOutputInteraction.incorrect')}</span>
          <span className="ml-1 text-[var(--color-text-secondary)]">
            Your answer: <code className="rounded bg-[var(--color-bg)] px-1">{userGuess}</code>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-3">
      <label className="mb-1.5 block text-xs font-medium text-[var(--color-text-secondary)]">
        What will this code output?
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('codeOutputInteraction.placeholder')}
          className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 font-mono text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:outline-none"
        />
        <button
          onClick={handleSubmit}
          disabled={!userGuess.trim()}
          className="flex items-center gap-1.5 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:opacity-40"
        >
          <Send className="h-3.5 w-3.5" /> {t('common.submit')}
        </button>
      </div>
      <button
        onClick={onReveal}
        className="mt-2 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:underline"
      >
        {t('codeOutputInteraction.skip')}
      </button>
    </div>
  )
}
