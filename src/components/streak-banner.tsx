import { Flame } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { UserProgress } from '../types'

const DEFAULT_DAILY_GOAL = 10

interface StreakBannerProps {
  progress: UserProgress
}

export function StreakBanner({ progress }: StreakBannerProps) {
  const { t } = useTranslation()

  const streak = progress.streak ?? { current: 0, longest: 0, lastActiveDate: '' }
  const goal = progress.dailyGoal ?? DEFAULT_DAILY_GOAL
  const today = new Date().toISOString().slice(0, 10)
  const done = progress.dailyActivity?.[today] ?? 0
  const percent = Math.min(100, Math.round((done / goal) * 100))
  const goalReached = done >= goal

  return (
    <div className="mb-6 flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3">
      {/* Flame + streak */}
      <div className="flex items-center gap-1.5 shrink-0">
        <Flame
          className={streak.current > 0 ? 'text-orange-500' : 'text-[var(--color-text-secondary)]'}
          size={20}
        />
        <span className="font-semibold text-[var(--color-text)]">
          {t('streak.current', { count: streak.current })}
        </span>
      </div>

      <div className="h-4 w-px bg-[var(--color-border)] shrink-0" />

      {/* Daily goal progress */}
      <div className="flex flex-1 flex-col gap-1 min-w-0">
        <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
          <span>
            {goalReached
              ? t('streak.goalReached')
              : t('streak.dailyGoal', { done, goal })}
          </span>
          {streak.longest > 0 && (
            <span>{t('streak.longest', { count: streak.longest })}</span>
          )}
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${percent}%`,
              backgroundColor: goalReached ? 'var(--color-success)' : 'var(--color-primary)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
