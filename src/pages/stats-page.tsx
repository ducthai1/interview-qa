import { RotateCcw, Bookmark, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import type { Question, UserProgress } from '../types'
import { ShareButton } from '../components/share-button'
import { TopicRadarChart } from '../components/charts/radar-chart'
import { AccuracyTrendChart } from '../components/charts/accuracy-trend-chart'
import { ActivityHeatmap } from '../components/charts/activity-heatmap'
import { WeakAreas } from '../components/weak-areas'
import {
  getTopicAccuracy,
  getDailyTrend,
  getActivityData,
  getWeakTopics,
} from '../utils/analytics'

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

  const hasData = totalAnswered > 0

  const topicAccuracy = useMemo(
    () => getTopicAccuracy(progress.answered, questions),
    [progress.answered, questions],
  )

  const trendData = useMemo(
    () => getDailyTrend(progress.answered, 30),
    [progress.answered],
  )

  const heatCells = useMemo(
    () => getActivityData(progress.answered, progress.dailyActivity, 105),
    [progress.answered, progress.dailyActivity],
  )

  const weakTopics = useMemo(
    () => getWeakTopics(progress.answered, questions, 3),
    [progress.answered, questions],
  )

  // Build topic breakdown for share card from answered questions
  const shareTopicBreakdown = useMemo(() => {
    const map = new Map<string, { topic: string; correct: number; total: number }>()
    for (const q of questions) {
      const ans = progress.answered[q.id]
      if (!ans) continue
      const entry = map.get(q.topic) ?? { topic: q.topic, correct: 0, total: 0 }
      entry.total += 1
      if (ans.correct) entry.correct += 1
      map.set(q.topic, entry)
    }
    return Array.from(map.values()).sort((a, b) => b.total - a.total)
  }, [questions, progress.answered])

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--color-text)]">{t('stats.title')}</h1>
        {totalAnswered > 0 && (
          <ShareButton
            cardProps={{
              accuracy,
              totalAnswered,
              correctCount: totalCorrect,
              topicBreakdown: shareTopicBreakdown,
              mode: 'stats',
              date: new Date().toLocaleDateString(),
            }}
          />
        )}
      </div>

      {/* Overall stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatBox label={t('home.totalQuestions')} value={questions.length} color="var(--color-primary)" />
        <StatBox label={t('common.answered')} value={totalAnswered} color="var(--color-text)" />
        <StatBox label={t('common.correct')} value={totalCorrect} color="var(--color-success)" />
        <StatBox label={t('common.accuracy')} value={`${accuracy}%`} color="var(--color-primary)" />
      </div>

      {/* Weak Areas */}
      {hasData && weakTopics.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-[var(--color-text)]">
            {t('stats.weakAreas')}
          </h2>
          <WeakAreas
            weakTopics={weakTopics}
            labels={{
              practiceNow: t('stats.practiceNow'),
              needsWork: t('stats.needsWork'),
              improving: t('stats.improving'),
              noData: t('stats.noData'),
            }}
          />
        </section>
      )}

      {/* Charts: Radar + Trend */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
          <h2 className="mb-3 text-sm font-semibold text-[var(--color-text)]">
            {t('stats.radarTitle')}
          </h2>
          <TopicRadarChart
            data={topicAccuracy}
            noDataLabel={t('stats.noData')}
            accuracyLabel={t('common.accuracy')}
          />
        </section>

        <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
          <h2 className="mb-3 text-sm font-semibold text-[var(--color-text)]">
            {t('stats.trendTitle')}
          </h2>
          <AccuracyTrendChart
            data={trendData}
            noDataLabel={t('stats.noData')}
            accuracyLabel={t('common.accuracy')}
          />
        </section>
      </div>

      {/* Activity Heatmap */}
      <section className="mb-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
        <h2 className="mb-3 text-sm font-semibold text-[var(--color-text)]">
          {t('stats.heatmapTitle')}
        </h2>
        <ActivityHeatmap
          cells={heatCells}
          answersOnDayLabel={(count, date) =>
            t('stats.answersOnDay', { count, date })
          }
          activeDaysLabel={(count) => t('stats.activeDays', { count })}
        />
      </section>

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
          <div className="mb-3 flex items-center gap-2">
            <Bookmark className="h-5 w-5 text-[var(--color-primary)]" />
            <h2 className="text-lg font-semibold text-[var(--color-text)]">{t('stats.bookmarked')}</h2>
            <span className="rounded-full bg-[var(--color-primary-bg)] px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
              {progress.bookmarked.length}
            </span>
          </div>
          <div className="space-y-2">
            {progress.bookmarked.map((qId) => {
              const q = questions.find((x) => x.id === qId)
              if (!q) return null
              const answered = progress.answered[qId]
              return (
                <Link
                  key={qId}
                  to={`/practice?topic=${q.topic}`}
                  className="flex items-center justify-between gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-2.5 text-sm text-[var(--color-text)] no-underline transition-colors hover:border-[var(--color-primary)]"
                >
                  <div className="min-w-0 flex-1">
                    <span className="line-clamp-1">{q.question}</span>
                    <div className="mt-0.5 flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                      <span className="capitalize">{t(`filter.${q.difficulty}`)}</span>
                      <span>·</span>
                      <span>{q.topic}</span>
                      {answered && (
                        <>
                          <span>·</span>
                          <span className={answered.correct ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}>
                            {answered.correct ? t('common.correct') : t('mock.wrong')}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-[var(--color-text-secondary)]" />
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Reset */}
      <div className="mt-8 border-t border-[var(--color-border)] pt-6">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-error)] px-4 py-2 text-sm font-medium text-[var(--color-error)] transition-colors hover:bg-[var(--color-error-bg)]"
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
