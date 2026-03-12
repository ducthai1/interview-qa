import { Trophy } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ACHIEVEMENTS } from '../utils/achievements'
import type { UserProgress } from '../types'

interface AchievementsPageProps {
  progress: UserProgress
  totalQuestions: number
}

export function AchievementsPage({ progress, totalQuestions: _totalQuestions }: AchievementsPageProps) {
  const { t } = useTranslation()
  const unlocked = progress.achievements ?? {}
  const unlockedCount = Object.keys(unlocked).length

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6 flex items-center gap-3">
        <Trophy className="h-8 w-8 text-[var(--color-primary)]" />
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">{t('achievements.title')}</h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {t('achievements.progress', { unlocked: unlockedCount, total: ACHIEVEMENTS.length })}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8 h-3 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
        <div
          className="h-full rounded-full bg-[var(--color-primary)] transition-all"
          style={{ width: `${(unlockedCount / ACHIEVEMENTS.length) * 100}%` }}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {ACHIEVEMENTS.map((def) => {
          const isUnlocked = !!unlocked[def.id]
          const unlockedAt = unlocked[def.id]

          return (
            <div
              key={def.id}
              className={`flex items-start gap-3 rounded-xl border p-4 transition-colors ${
                isUnlocked
                  ? 'border-[var(--color-primary)] bg-[var(--color-bg-card)]'
                  : 'border-[var(--color-border)] bg-[var(--color-bg-secondary)] opacity-50'
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl ${
                  isUnlocked ? 'bg-[var(--color-primary-bg)]' : 'bg-[var(--color-bg)] grayscale'
                }`}
              >
                {isUnlocked ? def.icon : '🔒'}
              </div>
              <div className="min-w-0 flex-1">
                <p className={`text-sm font-semibold ${isUnlocked ? 'text-[var(--color-text)]' : 'text-[var(--color-text-secondary)]'}`}>
                  {t(def.labelKey)}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">{t(def.descriptionKey)}</p>
                {isUnlocked && unlockedAt && (
                  <p className="mt-1 text-xs text-[var(--color-primary)]">
                    {new Date(unlockedAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
