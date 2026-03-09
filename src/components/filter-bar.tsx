import { useState } from 'react'
import { Search, X, ChevronDown, ChevronUp } from 'lucide-react'
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
      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
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

const VISIBLE_TOPICS = 8

export function FilterBar(props: FilterBarProps) {
  const { t } = useTranslation()
  const [showAllTopics, setShowAllTopics] = useState(false)
  const [filtersExpanded, setFiltersExpanded] = useState(false)
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

  const visibleTopics = showAllTopics ? topics : topics.slice(0, VISIBLE_TOPICS)
  const hiddenCount = topics.length - VISIBLE_TOPICS

  /* Count active filters for the toggle button */
  const activeCount = props.selectedTopics.length + props.selectedDifficulties.length + props.selectedTypes.length

  return (
    <div className="space-y-3">
      {/* Search + filter toggle row */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-secondary)]" />
          <input
            type="text"
            value={props.search}
            onChange={(e) => props.onSearchChange(e.target.value)}
            placeholder={t('filter.searchPlaceholder')}
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] py-2 pl-10 pr-4 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>
        <button
          onClick={() => setFiltersExpanded(!filtersExpanded)}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
            filtersExpanded || activeCount > 0
              ? 'border-[var(--color-primary)] bg-[var(--color-primary-bg)] text-[var(--color-primary)]'
              : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]'
          }`}
        >
          {t('filter.filters')}
          {activeCount > 0 && (
            <span className="flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[var(--color-primary)] px-1 text-[10px] font-bold text-white">
              {activeCount}
            </span>
          )}
          {filtersExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* Collapsible filter panels */}
      {filtersExpanded && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-3 space-y-3">
          {/* Topic filters */}
          <div>
            <p className="mb-1.5 text-xs font-medium text-[var(--color-text-secondary)]">{t('filter.topics')}</p>
            <div className="flex flex-wrap gap-1.5">
              {visibleTopics.map((tp) => (
                <ToggleChip
                  key={tp.id}
                  label={tp.label}
                  active={props.selectedTopics.includes(tp.id)}
                  onClick={() => props.onTopicsChange(toggleItem(props.selectedTopics, tp.id))}
                />
              ))}
              {!showAllTopics && hiddenCount > 0 && (
                <button
                  onClick={() => setShowAllTopics(true)}
                  className="rounded-full px-2.5 py-1 text-xs font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary-bg)]"
                >
                  +{hiddenCount} {t('filter.more')}
                </button>
              )}
              {showAllTopics && hiddenCount > 0 && (
                <button
                  onClick={() => setShowAllTopics(false)}
                  className="rounded-full px-2.5 py-1 text-xs font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
                >
                  {t('filter.showLess')}
                </button>
              )}
            </div>
          </div>

          {/* Difficulty + Type — each in its own bordered section */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-2.5">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">{t('filter.difficulty')}</p>
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
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-2.5">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">{t('filter.questionType')}</p>
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
      )}

      {/* Show active filters as chips when collapsed */}
      {!filtersExpanded && hasFilters && (
        <div className="flex flex-wrap items-center gap-1.5">
          {props.selectedTopics.map((id) => {
            const tp = topics.find((t) => t.id === id)
            return tp ? (
              <span key={id} className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary-bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary)]">
                {tp.label}
                <button onClick={() => props.onTopicsChange(toggleItem(props.selectedTopics, id))} className="hover:text-[var(--color-error)]">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ) : null
          })}
          {props.selectedDifficulties.map((d) => (
            <span key={d} className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary-bg)] px-2.5 py-0.5 text-xs font-medium capitalize text-[var(--color-primary)]">
              {d}
              <button onClick={() => props.onDifficultiesChange(toggleItem(props.selectedDifficulties, d))} className="hover:text-[var(--color-error)]">
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          <button
            onClick={props.onClearAll}
            className="text-xs text-[var(--color-error)] hover:underline"
          >
            {t('common.clearFilters')}
          </button>
        </div>
      )}
    </div>
  )
}
