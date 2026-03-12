import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { TopicInfo } from '../types'

interface TopicCardProps {
  topic: TopicInfo
  questionCount: number
  answeredCount: number
  correctCount: number
}

export function TopicCard({ topic, questionCount, answeredCount, correctCount }: TopicCardProps) {
  const { t } = useTranslation()
  const progressPercent = questionCount > 0 ? Math.round((answeredCount / questionCount) * 100) : 0

  return (
    <Link
      to={`/practice?topic=${topic.id}`}
      className="group block rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 no-underline transition-all hover:border-[var(--color-primary)] hover:shadow-lg"
    >
      <div className="mb-3 flex items-center gap-3">
        <div
          className="flex h-10 min-w-[40px] shrink-0 items-center justify-center rounded-lg px-1.5 text-[11px] font-bold text-white"
          style={{ backgroundColor: topic.color }}
        >
          {topic.icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
            {t(`topics.${topic.id}.label`, { defaultValue: topic.label })}
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            {questionCount} {t('common.questions')}
          </p>
        </div>
      </div>

      <p className="mb-3 text-xs text-[var(--color-text-secondary)]">
        {t(`topics.${topic.id}.desc`, { defaultValue: topic.description })}
      </p>

      {/* Progress bar */}
      <div className="mb-1 h-1.5 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
        <div
          className="h-full rounded-full bg-[var(--color-primary)] transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-[var(--color-text-secondary)]">
        <span>{answeredCount}/{questionCount} {t('common.done')}</span>
        {answeredCount > 0 && (
          <span className="text-[var(--color-success)]">
            {Math.round((correctCount / answeredCount) * 100)}% {t('common.correct')}
          </span>
        )}
      </div>
    </Link>
  )
}
