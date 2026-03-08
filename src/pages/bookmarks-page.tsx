import { useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Bookmark, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, BookmarkX } from 'lucide-react'
import { useQuestionTranslation } from '../hooks/use-question-translation'
import type { Question, UserProgress } from '../types'

interface BookmarksPageProps {
  questions: Question[]
  progress: UserProgress
  onBookmark: (questionId: string) => void
}

const PAGE_SIZE = 15

export function BookmarksPage({ questions, progress, onBookmark }: BookmarksPageProps) {
  const { t } = useTranslation()
  const { tq } = useQuestionTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10))

  // Stable sort by ID so order doesn't change on reload
  const bookmarkedQuestions = useMemo(() => {
    const ids = [...progress.bookmarked].sort()
    return ids
      .map((id) => questions.find((q) => q.id === id))
      .filter((q): q is Question => q != null)
  }, [progress.bookmarked, questions])

  const totalPages = Math.max(1, Math.ceil(bookmarkedQuestions.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const startIdx = (safePage - 1) * PAGE_SIZE
  const paginated = bookmarkedQuestions.slice(startIdx, startIdx + PAGE_SIZE)

  const goToPage = (p: number) => {
    const target = Math.max(1, Math.min(p, totalPages))
    setSearchParams({ page: String(target) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (bookmarkedQuestions.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <Bookmark className="mx-auto mb-4 h-16 w-16 text-[var(--color-text-secondary)] opacity-30" />
        <h1 className="mb-2 text-2xl font-bold text-[var(--color-text)]">{t('stats.bookmarked')}</h1>
        <p className="text-[var(--color-text-secondary)]">{t('bookmarks.empty')}</p>
        <Link
          to="/practice"
          className="mt-4 inline-block text-sm font-medium text-[var(--color-primary)] hover:underline"
        >
          {t('bookmarks.goToPractice')}
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <Bookmark className="h-6 w-6 text-[var(--color-primary)]" />
        <h1 className="text-2xl font-bold text-[var(--color-text)]">{t('stats.bookmarked')}</h1>
        <span className="rounded-full bg-[var(--color-primary-bg)] px-2.5 py-0.5 text-sm font-medium text-[var(--color-primary)]">
          {bookmarkedQuestions.length}
        </span>
      </div>

      <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
        {t('bookmarks.showing', {
          start: startIdx + 1,
          end: Math.min(startIdx + PAGE_SIZE, bookmarkedQuestions.length),
          total: bookmarkedQuestions.length,
        })}
      </p>

      {/* Question list */}
      <div className="space-y-2">
        {paginated.map((q) => {
          const translated = tq(q)
          const answered = progress.answered[q.id]
          return (
            <div
              key={q.id}
              className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 transition-colors hover:border-[var(--color-primary)]"
            >
              <Link
                to={`/practice?topic=${q.topic}`}
                className="min-w-0 flex-1 no-underline"
              >
                <span className="line-clamp-1 text-sm text-[var(--color-text)]">{translated.question}</span>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                  <span className={`rounded-full px-2 py-0.5 font-medium bg-[var(--color-${q.difficulty}-bg)] text-[var(--color-${q.difficulty})]`}>
                    {t(`filter.${q.difficulty}`)}
                  </span>
                  <span>{q.topic}</span>
                  {answered && (
                    <span className={answered.correct ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}>
                      {answered.correct ? t('common.correct') : t('mock.wrong')}
                    </span>
                  )}
                </div>
              </Link>
              <button
                onClick={() => onBookmark(q.id)}
                className="shrink-0 rounded-lg p-1.5 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-error-bg)] hover:text-[var(--color-error)]"
                title={t('question.removeBookmark')}
              >
                <BookmarkX className="h-4 w-4" />
              </button>
            </div>
          )
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-6 flex items-center justify-center gap-1" aria-label="Pagination">
          <button onClick={() => goToPage(1)} disabled={safePage === 1}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30 disabled:pointer-events-none"
            aria-label={t('pagination.first')}>
            <ChevronsLeft className="h-4 w-4" />
          </button>
          <button onClick={() => goToPage(safePage - 1)} disabled={safePage === 1}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30 disabled:pointer-events-none"
            aria-label={t('pagination.previous')}>
            <ChevronLeft className="h-4 w-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 1)
            .reduce<(number | '...')[]>((acc, p, idx, arr) => {
              if (idx > 0 && p - (arr[idx - 1]) > 1) acc.push('...')
              acc.push(p)
              return acc
            }, [])
            .map((p, idx) =>
              p === '...' ? (
                <span key={`e-${idx}`} className="flex h-9 w-9 items-center justify-center text-sm text-[var(--color-text-secondary)]">…</span>
              ) : (
                <button key={p} onClick={() => goToPage(p)}
                  className={`flex h-9 min-w-[36px] items-center justify-center rounded-lg px-2 text-sm font-medium transition-colors ${
                    p === safePage ? 'bg-[var(--color-primary)] text-white shadow-sm' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]'
                  }`}
                  aria-current={p === safePage ? 'page' : undefined}>
                  {p}
                </button>
              ),
            )}

          <button onClick={() => goToPage(safePage + 1)} disabled={safePage === totalPages}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30 disabled:pointer-events-none"
            aria-label={t('pagination.next')}>
            <ChevronRight className="h-4 w-4" />
          </button>
          <button onClick={() => goToPage(totalPages)} disabled={safePage === totalPages}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30 disabled:pointer-events-none"
            aria-label={t('pagination.last')}>
            <ChevronsRight className="h-4 w-4" />
          </button>
        </nav>
      )}
    </div>
  )
}
