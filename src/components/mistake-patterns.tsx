import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AlertTriangle } from 'lucide-react'
import type { Question, UserProgress } from '../types'

interface MistakePatternsProps {
  questions: Question[]
  progress: UserProgress
}

interface TagStat {
  tag: string
  wrong: number
  total: number
  rate: number
}

/** Analyze mistake patterns by question tags */
function getTagMistakes(questions: Question[], progress: UserProgress): TagStat[] {
  const tagMap = new Map<string, { wrong: number; total: number }>()

  for (const q of questions) {
    const ans = progress.answered[q.id]
    if (!ans) continue
    for (const tag of q.tags) {
      const entry = tagMap.get(tag) ?? { wrong: 0, total: 0 }
      entry.total++
      if (!ans.correct) entry.wrong++
      tagMap.set(tag, entry)
    }
  }

  return Array.from(tagMap.entries())
    .map(([tag, { wrong, total }]) => ({ tag, wrong, total, rate: total > 0 ? wrong / total : 0 }))
    .filter((s) => s.total >= 3 && s.wrong >= 2) // min threshold for meaningful pattern
    .sort((a, b) => b.rate - a.rate || b.wrong - a.wrong)
    .slice(0, 8)
}

export function MistakePatterns({ questions, progress }: MistakePatternsProps) {
  const { t } = useTranslation()
  const patterns = useMemo(() => getTagMistakes(questions, progress), [questions, progress])

  if (patterns.length === 0) {
    return (
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
        <h2 className="mb-2 text-sm font-semibold text-[var(--color-text)]">{t('patterns.title')}</h2>
        <p className="text-xs text-[var(--color-text-secondary)]">{t('patterns.noData')}</p>
      </div>
    )
  }

  const maxWrong = Math.max(...patterns.map((p) => p.wrong))

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
      <div className="mb-3 flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-[var(--color-warning)]" />
        <h2 className="text-sm font-semibold text-[var(--color-text)]">{t('patterns.title')}</h2>
      </div>
      <p className="mb-3 text-xs text-[var(--color-text-secondary)]">{t('patterns.subtitle')}</p>

      <div className="space-y-2">
        {patterns.map((p) => (
          <div key={p.tag} className="flex items-center gap-3">
            <span className="w-28 shrink-0 truncate text-xs font-medium text-[var(--color-text)]">
              {p.tag}
            </span>
            <div className="flex-1">
              <div className="h-2 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                <div
                  className="h-full rounded-full bg-[var(--color-error)] transition-all"
                  style={{ width: `${maxWrong > 0 ? (p.wrong / maxWrong) * 100 : 0}%` }}
                />
              </div>
            </div>
            <span className="shrink-0 text-[10px] text-[var(--color-text-secondary)]">
              {t('patterns.wrongRate', { wrong: p.wrong, total: p.total })}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
