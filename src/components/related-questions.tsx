import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Question, UserProgress } from '../types'

interface Props {
  currentQuestion: Question
  allQuestions: Question[]
  progress: UserProgress
}

const DIFFICULTY_COLOR: Record<string, string> = {
  junior: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
  mid: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
  senior: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400',
  lead: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
}

function findRelated(current: Question, all: Question[], progress: UserProgress): Question[] {
  const answered = new Set(Object.keys(progress.answered ?? {}))
  const currentTags = new Set(current.tags)

  return all
    .filter((q) => {
      if (q.id === current.id) return false
      if (answered.has(q.id)) return false
      if (q.topic !== current.topic) return false
      // require at least one overlapping tag
      return q.tags.some((tag) => currentTags.has(tag))
    })
    .sort((a, b) => {
      // rank by number of overlapping tags (descending)
      const overlapA = a.tags.filter((t) => currentTags.has(t)).length
      const overlapB = b.tags.filter((t) => currentTags.has(t)).length
      return overlapB - overlapA
    })
    .slice(0, 3)
}

export function RelatedQuestions({ currentQuestion, allQuestions, progress }: Props) {
  const { t } = useTranslation()
  const related = findRelated(currentQuestion, allQuestions, progress)

  if (related.length === 0) return null

  return (
    <section className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
      <h3 className="mb-1 text-sm font-semibold text-[var(--color-text)]">
        {t('related.title')}
      </h3>
      <p className="mb-3 text-xs text-[var(--color-text-secondary)]">
        {t('related.hint')}
      </p>
      <ul className="space-y-2">
        {related.map((q) => (
          <li key={q.id}>
            <Link
              to={`/practice?id=${q.id}`}
              className="flex items-center justify-between gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-2 no-underline transition-colors hover:border-[var(--color-primary)]"
            >
              <span className="min-w-0 flex-1 truncate text-sm text-[var(--color-text)]">
                {q.question}
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold capitalize ${DIFFICULTY_COLOR[q.difficulty] ?? ''}`}
              >
                {q.difficulty}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
