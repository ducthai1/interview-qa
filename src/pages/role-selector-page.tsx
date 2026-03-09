import { useTranslation } from 'react-i18next'
import type { Role } from '../types'

interface RoleSelectorPageProps {
  onSelectRole: (role: Role) => void
}

const roles: { id: Role; icon: string; gradient: string }[] = [
  { id: 'frontend', icon: '💻', gradient: 'from-indigo-500 to-purple-600' },
  { id: 'ba', icon: '📊', gradient: 'from-emerald-500 to-teal-600' },
  { id: 'brse', icon: '🌏', gradient: 'from-rose-500 to-orange-600' },
]

export function RoleSelectorPage({ onSelectRole }: RoleSelectorPageProps) {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-4">
      <div className="w-full max-w-3xl text-center">
        <h1 className="mb-2 text-4xl font-bold text-[var(--color-text)]">{t('roleSelect.title')}</h1>
        <p className="mb-12 text-lg text-[var(--color-text-secondary)]">{t('roleSelect.subtitle')}</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => onSelectRole(role.id)}
              className="group relative overflow-hidden rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 text-left transition-all hover:border-[var(--color-primary)] hover:shadow-lg"
            >
              {/* Gradient accent bar */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${role.gradient}`} />

              <div className="mb-4 text-4xl">{role.icon}</div>
              <h2 className="mb-1 text-lg font-bold text-[var(--color-text)]">
                {t(`roleSelect.${role.id}`)}
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {t(`roleSelect.${role.id}Desc`)}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-[var(--color-primary)] transition-transform group-hover:translate-x-1">
                {t('roleSelect.start')} →
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
