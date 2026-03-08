import { Search, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Topic, Difficulty, QuestionType } from '../types'
import { topics } from '../data/topics'

interface FilterBarProps {
  selectedTopics: Topic[]
  selectedDifficulties: Difficulty[]
  selectedTypes: QuestionType[]
  search: string
  onTopicsChange: (topics: Topic[]) => void
  onDifficultiesChange: (difficulties: Difficulty[]) => void
  onTypesChange: (types: QuestionType[]) => void
  onSearchChange: (search: string) => void
  onClearAll: () => void
}

function ToggleChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
        active
          ? 'bg-[var(--color-primary)] text-white'
          : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
      }`}
    >
      {label}
    </button>
  )
}

function toggleItem<T>(arr: T[], item: T): T[] {
  return arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]
}

export function FilterBar(props: FilterBarProps) {
  const { t } = useTranslation()
  const hasFilters = props.selectedTopics.length > 0 || props.selectedDifficulties.length > 0 || props.selectedTypes.length > 0 || props.search

  const difficulties: { id: Difficulty; label: string }[] = [
    { id: 'junior', label: t('filter.junior') },
    { id: 'mid', label: t('filter.mid') },
    { id: 'senior', label: t('filter.senior') },
    { id: 'lead', label: t('filter.lead') },
  ]

  const questionTypes: { id: QuestionType; label: string }[] = [
    { id: 'mcq', label: t('filter.mcq') },
    { id: 'code-output', label: t('filter.codeOutput') },
    { id: 'true-false', label: t('filter.trueFalse') },
    { id: 'debug', label: t('filter.debug') },
    { id: 'code-write', label: t('filter.codeWrite') },
    { id: 'system-design', label: t('filter.systemDesign') },
  ]

  return (
    <div className="space-y-3">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-secondary)]" />
        <input
          type="text"
          value={props.search}
          onChange={(e) => props.onSearchChange(e.target.value)}
          placeholder={t('filter.searchPlaceholder')}
          className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] py-2 pl-10 pr-4 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:outline-none"
        />
      </div>

      {/* Topic filters */}
      <div>
        <p className="mb-1.5 text-xs font-medium text-[var(--color-text-secondary)]">{t('filter.topics')}</p>
        <div className="flex flex-wrap gap-1.5">
          {topics.map((t) => (
            <ToggleChip
              key={t.id}
              label={t.label}
              active={props.selectedTopics.includes(t.id)}
              onClick={() => props.onTopicsChange(toggleItem(props.selectedTopics, t.id))}
            />
          ))}
        </div>
      </div>

      {/* Difficulty filters */}
      <div>
        <p className="mb-1.5 text-xs font-medium text-[var(--color-text-secondary)]">{t('filter.difficulty')}</p>
        <div className="flex flex-wrap gap-1.5">
          {difficulties.map((d) => (
            <ToggleChip
              key={d.id}
              label={d.label}
              active={props.selectedDifficulties.includes(d.id)}
              onClick={() => props.onDifficultiesChange(toggleItem(props.selectedDifficulties, d.id))}
            />
          ))}
        </div>
      </div>

      {/* Type filters */}
      <div>
        <p className="mb-1.5 text-xs font-medium text-[var(--color-text-secondary)]">{t('filter.questionType')}</p>
        <div className="flex flex-wrap gap-1.5">
          {questionTypes.map((qt) => (
            <ToggleChip
              key={qt.id}
              label={qt.label}
              active={props.selectedTypes.includes(qt.id)}
              onClick={() => props.onTypesChange(toggleItem(props.selectedTypes, qt.id))}
            />
          ))}
        </div>
      </div>

      {/* Clear all */}
      {hasFilters && (
        <button
          onClick={props.onClearAll}
          className="flex items-center gap-1 text-xs text-[var(--color-error)] hover:underline"
        >
          <X className="h-3 w-3" /> {t('common.clearFilters')}
        </button>
      )}
    </div>
  )
}
