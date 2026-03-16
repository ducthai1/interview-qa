import { useState } from 'react'
import { Lightbulb, Eye, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface SystemDesignInteractionProps {
  revealed: boolean
  onSubmit: (userAnswer?: string) => void
  onReveal: () => void
}

/* Interactive textarea for "System Design" questions — user writes their design approach, then compares with model answer */
export function SystemDesignInteraction({ revealed, onSubmit, onReveal }: SystemDesignInteractionProps) {
  const { t } = useTranslation()
  const [userAnswer, setUserAnswer] = useState('')
  const handleSubmit = () => {
    onSubmit(userAnswer)
  }

  if (revealed) {
    return (
      <div className="mt-3">
        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)]">
          <Lightbulb className="h-3.5 w-3.5" /> {t('common.yourApproach')}:
        </div>
        <div className="rounded-lg border border-[var(--color-primary-bg)] bg-[var(--color-bg-secondary)] p-3 text-sm text-[var(--color-text)]">
          {userAnswer || t('common.empty')}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-3">
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-secondary)]">
        <Lightbulb className="h-3.5 w-3.5" /> {t('systemDesignInteraction.label')}
      </label>
      <textarea
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder={t('systemDesignInteraction.placeholder')}
        className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:outline-none"
        rows={6}
      />
      <div className="mt-2 flex items-center gap-3">
        <button
          onClick={handleSubmit}
          disabled={!userAnswer.trim()}
          className="flex items-center gap-1.5 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:opacity-40"
        >
          <Send className="h-3.5 w-3.5" /> {t('systemDesignInteraction.submitCompare')}
        </button>
        <button
          onClick={onReveal}
          className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:underline"
        >
          <Eye className="h-3.5 w-3.5" /> {t('systemDesignInteraction.showModelAnswer')}
        </button>
      </div>
    </div>
  )
}
