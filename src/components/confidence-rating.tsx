import { useTranslation } from 'react-i18next'
import type { ConfidenceLevel } from '../types'

interface ConfidenceRatingProps {
  onSelect: (level: ConfidenceLevel) => void
}

const levels: { key: ConfidenceLevel; icon: string; colorClass: string }[] = [
  { key: 'sure', icon: '💪', colorClass: 'border-[var(--color-success)] text-[var(--color-success)] hover:bg-[var(--color-success-bg)]' },
  { key: 'maybe', icon: '🤔', colorClass: 'border-[var(--color-warning)] text-[var(--color-warning)] hover:bg-[var(--color-warning-bg)]' },
  { key: 'guessing', icon: '🎲', colorClass: 'border-[var(--color-error)] text-[var(--color-error)] hover:bg-[var(--color-error-bg)]' },
]

/* Pre-answer confidence selector — "How confident are you?" */
export function ConfidenceRating({ onSelect }: ConfidenceRatingProps) {
  const { t } = useTranslation()

  return (
    <div className="mb-3 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-3">
      <p className="mb-2 text-xs font-medium text-[var(--color-text-secondary)]">{t('confidence.prompt')}</p>
      <div className="flex gap-2">
        {levels.map(({ key, icon, colorClass }) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${colorClass}`}
          >
            <span>{icon}</span>
            {t(`confidence.${key}`)}
          </button>
        ))}
      </div>
    </div>
  )
}
