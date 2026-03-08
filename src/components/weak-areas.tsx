import { Link } from 'react-router-dom'
import type { TopicAccuracy } from '../utils/analytics'

interface Props {
  weakTopics: TopicAccuracy[]
  labels: {
    practiceNow: string
    needsWork: string
    improving: string
    noData: string
  }
}

function AccuracyBadge({ accuracy, needsWork, improving }: { accuracy: number; needsWork: string; improving: string }) {
  if (accuracy < 50) {
    return (
      <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-400">
        {needsWork}
      </span>
    )
  }
  if (accuracy < 70) {
    return (
      <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-400">
        {improving}
      </span>
    )
  }
  return null
}

export function WeakAreas({ weakTopics, labels }: Props) {
  if (weakTopics.length === 0) {
    return (
      <p className="text-sm text-[var(--color-text-secondary)]">{labels.noData}</p>
    )
  }

  return (
    <div className="space-y-3">
      {weakTopics.map((topic) => (
        <div
          key={topic.topicId}
          className="flex items-center justify-between gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4"
        >
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="truncate text-sm font-medium text-[var(--color-text)]">
                {topic.topic}
              </span>
              <AccuracyBadge
                accuracy={topic.accuracy}
                needsWork={labels.needsWork}
                improving={labels.improving}
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${topic.accuracy}%`,
                    backgroundColor: topic.accuracy < 50 ? 'var(--color-error)' : topic.accuracy < 70 ? '#f97316' : 'var(--color-success)',
                  }}
                />
              </div>
              <span className="shrink-0 text-xs text-[var(--color-text-secondary)]">
                {topic.accuracy}% ({topic.correct}/{topic.total})
              </span>
            </div>
          </div>
          <Link
            to={`/practice?topic=${topic.topicId}`}
            className="shrink-0 rounded-lg bg-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-80"
          >
            {labels.practiceNow}
          </Link>
        </div>
      ))}
    </div>
  )
}
