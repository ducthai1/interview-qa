import { useState } from 'react'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Question, UserProgress, Topic, Difficulty } from '../types'

interface Props {
  questions: Question[]
  progress: UserProgress
  currentTopic?: Topic
}

const DIFFICULTY_ORDER: Difficulty[] = ['junior', 'mid', 'senior', 'lead']

interface Suggestion {
  type: 'tryHarder' | 'reviewEasier'
  level: Difficulty
  nextLevel: Difficulty
}

const MIN_ANSWERED = 5 // require at least 5 answers before suggesting

function computeSuggestion(
  questions: Question[],
  progress: UserProgress,
  currentTopic?: Topic,
): Suggestion | null {
  const answered = progress.answered ?? {}

  for (const difficulty of DIFFICULTY_ORDER) {
    const pool = questions.filter(
      (q) =>
        q.difficulty === difficulty &&
        (currentTopic == null || q.topic === currentTopic),
    )
    const attempted = pool.filter((q) => answered[q.id] != null)
    if (attempted.length < MIN_ANSWERED) continue

    const correct = attempted.filter((q) => answered[q.id].correct).length
    const accuracy = correct / attempted.length

    if (accuracy >= 0.8) {
      const nextIdx = DIFFICULTY_ORDER.indexOf(difficulty) + 1
      if (nextIdx < DIFFICULTY_ORDER.length) {
        return { type: 'tryHarder', level: difficulty, nextLevel: DIFFICULTY_ORDER[nextIdx] }
      }
    } else if (accuracy < 0.4) {
      const prevIdx = DIFFICULTY_ORDER.indexOf(difficulty) - 1
      if (prevIdx >= 0) {
        return { type: 'reviewEasier', level: difficulty, nextLevel: DIFFICULTY_ORDER[prevIdx] }
      }
    }
  }

  return null
}

export function DifficultySuggestion({ questions, progress, currentTopic }: Props) {
  const { t } = useTranslation()
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  const suggestion = computeSuggestion(questions, progress, currentTopic)
  if (suggestion == null) return null

  const messageKey =
    suggestion.type === 'tryHarder' ? 'difficulty.tryHarder' : 'difficulty.reviewEasier'

  const message = t(messageKey, {
    level: suggestion.level,
    nextLevel: suggestion.nextLevel,
    prevLevel: suggestion.nextLevel,
  })

  const isPositive = suggestion.type === 'tryHarder'

  return (
    <div
      className={`flex items-start justify-between gap-3 rounded-xl border px-4 py-3 text-sm ${
        isPositive
          ? 'border-[var(--color-success-border)] bg-[var(--color-success-bg)] text-[var(--color-success)]'
          : 'border-[var(--color-warning-border)] bg-[var(--color-warning-bg)] text-[var(--color-warning)]'
      }`}
    >
      <div className="min-w-0 flex-1">
        <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide opacity-70">
          {t('difficulty.suggestion')}
        </p>
        <p className="leading-snug">{message}</p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label={t('difficulty.dismiss')}
        className="shrink-0 rounded p-0.5 opacity-60 transition-opacity hover:opacity-100"
      >
        <X size={15} />
      </button>
    </div>
  )
}
