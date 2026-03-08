import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Sparkles } from 'lucide-react'
import { FilterBar } from '../components/filter-bar'
import { QuestionCard } from '../components/question-card'
import { filterQuestions } from '../utils/question-filters'
import { getRecommendedQuestions } from '../utils/smart-question-picker'
import { useQuestionTranslation } from '../hooks/use-question-translation'
import type { Question, Topic, Difficulty, QuestionType, UserProgress } from '../types'

interface PracticePageProps {
  questions: Question[]
  progress: UserProgress
  onAnswer: (questionId: string, correct: boolean) => void
  onBookmark: (questionId: string) => void
  onRetry: (questionId: string) => void
}

const PAGE_SIZE = 10

export function PracticePage({ questions, progress, onAnswer, onBookmark, onRetry }: PracticePageProps) {
  const { t } = useTranslation()
  const { tq } = useQuestionTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const initialTopic = searchParams.get('topic') as Topic | null
  const initialDifficulty = searchParams.get('difficulty') as Difficulty | null
  const initialType = searchParams.get('type') as QuestionType | null

  const [selectedTopics, setSelectedTopics] = useState<Topic[]>(initialTopic ? [initialTopic] : [])
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>(initialDifficulty ? [initialDifficulty] : [])
  const [selectedTypes, setSelectedTypes] = useState<QuestionType[]>(initialType ? [initialType] : [])
  const [search, setSearch] = useState('')

  // Persist page in URL so reload keeps the same page
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10))
  const setPage = (p: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (p <= 1) next.delete('page')
      else next.set('page', String(p))
      return next
    })
  }

  const filtered = useMemo(
    () => filterQuestions(questions, { topics: selectedTopics, difficulties: selectedDifficulties, types: selectedTypes, search }),
    [questions, selectedTopics, selectedDifficulties, selectedTypes, search],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const startIdx = (safePage - 1) * PAGE_SIZE
  const paginated = filtered.slice(startIdx, startIdx + PAGE_SIZE)

  const goToPage = (p: number) => {
    const target = Math.max(1, Math.min(p, totalPages))
    setPage(target)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const clearAll = () => {
    setSelectedTopics([])
    setSelectedDifficulties([])
    setSelectedTypes([])
    setSearch('')
    setPage(1)
  }

  /* Build visible page numbers: always show first, last, and a window around current */
  function getPageNumbers(): (number | '...')[] {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    const pages: (number | '...')[] = [1]
    const windowStart = Math.max(2, safePage - 1)
    const windowEnd = Math.min(totalPages - 1, safePage + 1)

    if (windowStart > 2) pages.push('...')
    for (let i = windowStart; i <= windowEnd; i++) pages.push(i)
    if (windowEnd < totalPages - 1) pages.push('...')
    pages.push(totalPages)
    return pages
  }

  const recommended = useMemo(
    () => getRecommendedQuestions(questions, progress, 3),
    [questions, progress],
  )

  const hasProgress = Object.keys(progress.answered).length > 0

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-[var(--color-text)]">{t('practice.title')}</h1>

      {/* Recommended section */}
      {hasProgress && recommended.length > 0 && (
        <div className="mb-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--color-primary)]" />
            <span className="text-sm font-semibold text-[var(--color-text)]">{t('practice.recommended')}</span>
            <span className="text-xs text-[var(--color-text-secondary)]">— {t('practice.recommendedHint')}</span>
          </div>
          <div className="space-y-3">
            {recommended.map((q) => {
              const translated = tq(q)
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setSelectedTopics([q.topic])
                    setPage(1)
                    // Scroll to question list after filter applies
                    setTimeout(() => {
                      document.getElementById(`q-${q.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }, 100)
                  }}
                  className="flex w-full items-start justify-between gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-2.5 text-left text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]"
                >
                  <span className="line-clamp-2 flex-1">{translated.question}</span>
                  <span className="shrink-0 rounded px-1.5 py-0.5 text-xs font-medium capitalize text-[var(--color-primary)] ring-1 ring-inset ring-[var(--color-primary)]/30">
                    {t(`filter.${q.difficulty}`)}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      <FilterBar
        selectedTopics={selectedTopics}
        selectedDifficulties={selectedDifficulties}
        selectedTypes={selectedTypes}
        search={search}
        onTopicsChange={(t) => { setSelectedTopics(t); setPage(1) }}
        onDifficultiesChange={(d) => { setSelectedDifficulties(d); setPage(1) }}
        onTypesChange={(t) => { setSelectedTypes(t); setPage(1) }}
        onSearchChange={(s) => { setSearch(s); setPage(1) }}
        onClearAll={clearAll}
      />

      <p className="my-4 text-sm text-[var(--color-text-secondary)]">
        {t('practice.showing', { shown: filtered.length > 0 ? `${startIdx + 1}–${Math.min(startIdx + PAGE_SIZE, filtered.length)}` : '0', total: filtered.length })}
      </p>

      <div className="space-y-4">
        {paginated.map((q) => (
          <div key={q.id} id={`q-${q.id}`}>
            <QuestionCard question={q} progress={progress} onAnswer={onAnswer} onBookmark={onBookmark} onRetry={onRetry} />
          </div>
        ))}
      </div>

      {/* ─── Pagination Controls ────────────────────────── */}
      {totalPages > 1 && (
        <nav className="mt-8 flex items-center justify-center gap-1" aria-label="Pagination">
          {/* First page */}
          <button
            onClick={() => goToPage(1)}
            disabled={safePage === 1}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30 disabled:pointer-events-none"
            aria-label={t('pagination.first')}
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>

          {/* Previous page */}
          <button
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30 disabled:pointer-events-none"
            aria-label={t('pagination.previous')}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Page numbers */}
          {getPageNumbers().map((p, idx) =>
            p === '...' ? (
              <span key={`ellipsis-${idx}`} className="flex h-9 w-9 items-center justify-center text-sm text-[var(--color-text-secondary)]">
                …
              </span>
            ) : (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`flex h-9 min-w-[36px] items-center justify-center rounded-lg px-2 text-sm font-medium transition-colors ${p === safePage
                    ? 'bg-[var(--color-primary)] text-white shadow-sm'
                    : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]'
                  }`}
                aria-current={p === safePage ? 'page' : undefined}
              >
                {p}
              </button>
            ),
          )}

          {/* Next page */}
          <button
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30 disabled:pointer-events-none"
            aria-label={t('pagination.next')}
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Last page */}
          <button
            onClick={() => goToPage(totalPages)}
            disabled={safePage === totalPages}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30 disabled:pointer-events-none"
            aria-label={t('pagination.last')}
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </nav>
      )}

      {filtered.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-lg text-[var(--color-text-secondary)]">{t('common.noResults')}</p>
          <button onClick={clearAll} className="mt-2 text-sm text-[var(--color-primary)] hover:underline">
            {t('common.clearFilters')}
          </button>
        </div>
      )}
    </div>
  )
}
