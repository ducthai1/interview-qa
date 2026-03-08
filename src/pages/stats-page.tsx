import { RotateCcw } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { topics } from '../data/topics'
import type { Question, UserProgress } from '../types'

interface StatsPageProps {
  questions: Question[]
  progress: UserProgress
  onReset: () => void
}

export function StatsPage({ questions, progress, onReset }: StatsPageProps) {
  const { t } = useTranslation()
  const totalAnswered = Object.keys(progress.answered).length
  const totalCorrect = Object.values(progress.answered).filter((a) => a.correct).length
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-[var(--color-text)]">{t('stats.title')}</h1>

      {/* Overall stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatBox label={t('home.totalQuestions')} value={questions.length} color="var(--color-primary)" />
        <StatBox label={t('common.answered')} value={totalAnswered} color="var(--color-text)" />
        <StatBox label={t('common.correct')} value={totalCorrect} color="var(--color-success)" />
        <StatBox label={t('common.accuracy')} value={`${accuracy}%`} color="var(--color-primary)" />
      </div>

      {/* Per-topic breakdown */}
      <h2 className="mb-4 text-lg font-semibold text-[var(--color-text)]">{t('stats.byTopic')}</h2>
      <div className="space-y-3">
        {topics.map((topic) => {
          const topicQs = questions.filter((q) => q.topic === topic.id)
          const topicAnswered = topicQs.filter((q) => progress.answered[q.id])
          const topicCorrect = topicAnswered.filter((q) => progress.answered[q.id]?.correct)
          const pct = topicQs.length > 0 ? Math.round((topicAnswered.length / topicQs.length) * 100) : 0

          return (
            <div key={topic.id} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 min-w-[28px] shrink-0 items-center justify-center rounded px-1 text-[10px] font-bold text-white" style={{ backgroundColor: topic.color }}>
                    {topic.icon}
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text)]">{topic.label}</span>
                </div>
                <span className="text-xs text-[var(--color-text-secondary)]">
                  {topicAnswered.length}/{topicQs.length} &middot; {topicCorrect.length} {t('common.correct')}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: topic.color }} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Bookmarks */}
      {progress.bookmarked.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-2 text-lg font-semibold text-[var(--color-text)]">{t('stats.bookmarked')}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">{t('stats.bookmarkedCount', { count: progress.bookmarked.length })}</p>
        </div>
      )}

      {/* Reset */}
      <div className="mt-8 border-t border-[var(--color-border)] pt-6">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-error)] px-4 py-2 text-sm font-medium text-[var(--color-error)] transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          <RotateCcw className="h-4 w-4" /> {t('stats.resetAll')}
        </button>
      </div>
    </div>
  )
}

function StatBox({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 text-center">
      <p className="text-2xl font-bold" style={{ color }}>{value}</p>
      <p className="text-xs text-[var(--color-text-secondary)]">{label}</p>
    </div>
  )
}
