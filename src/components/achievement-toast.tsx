import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Trophy } from 'lucide-react'
import { ACHIEVEMENTS } from '../utils/achievements'

interface AchievementToastProps {
  achievementIds: string[]
  onDismiss: () => void
}

/* Toast notification for newly unlocked achievements */
export function AchievementToast({ achievementIds, onDismiss }: AchievementToastProps) {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onDismiss, 300)
    }, 4000)
    return () => clearTimeout(timer)
  }, [onDismiss])

  if (achievementIds.length === 0) return null

  const defs = achievementIds.map((id) => ACHIEVEMENTS.find((a) => a.id === id)).filter(Boolean)

  return (
    <div
      className={`fixed bottom-4 right-4 z-[100] flex max-w-sm flex-col gap-2 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      {defs.map((def) => (
        <div
          key={def!.id}
          className="flex items-center gap-3 rounded-xl border border-[var(--color-primary)] bg-[var(--color-bg-card)] p-4 shadow-lg"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-bg)] text-xl">
            {def!.icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <Trophy className="h-3.5 w-3.5 text-[var(--color-primary)]" />
              <span className="text-xs font-bold uppercase text-[var(--color-primary)]">{t('achievements.unlocked')}</span>
            </div>
            <p className="text-sm font-semibold text-[var(--color-text)]">{t(def!.labelKey)}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{t(def!.descriptionKey)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
