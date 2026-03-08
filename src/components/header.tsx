import { Moon, Sun, Code2, Globe, Settings } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AISettingsModal } from './ai-settings-modal'

interface HeaderProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  reviewDueCount?: number
}

export function Header({ theme, onToggleTheme, reviewDueCount = 0 }: HeaderProps) {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [aiSettingsOpen, setAiSettingsOpen] = useState(false)

  const navLinks = [
    { to: '/', label: t('nav.topics') },
    { to: '/learning-path', label: t('nav.learningPath') },
    { to: '/practice', label: t('nav.practice') },
    { to: '/review', label: t('nav.review'), badge: reviewDueCount > 0 ? reviewDueCount : undefined },
    { to: '/mock-interview', label: t('nav.mockInterview') },
    { to: '/challenge', label: t('nav.challenge') },
    { to: '/stats', label: t('nav.stats') },
  ]

  const toggleLanguage = () => {
    const newLang = i18n.language === 'vi' ? 'en' : 'vi'
    i18n.changeLanguage(newLang)
    localStorage.setItem('fe-interview-lang', newLang)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <Code2 className="h-7 w-7 text-[var(--color-primary)]" />
          <span className="text-lg font-bold text-[var(--color-text)]">
            {t('nav.brand')}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium no-underline transition-colors ${
                location.pathname === link.to
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)]'
              }`}
            >
              {link.label}
              {link.badge !== undefined && (
                <span className="ml-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                  {link.badge > 99 ? '99+' : link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-2 py-2 text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-border)]"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase">{i18n.language === 'vi' ? 'VI' : 'EN'}</span>
          </button>

          <button
            onClick={onToggleTheme}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-2 transition-colors hover:bg-[var(--color-border)]"
            aria-label={t('nav.switchTheme', { mode: theme === 'light' ? 'dark' : 'light' })}
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setAiSettingsOpen(true)}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-2 transition-colors hover:bg-[var(--color-border)]"
            aria-label={t('ai.settings')}
            title={t('ai.settings')}
          >
            <Settings className="h-4 w-4 text-[var(--color-text-secondary)]" />
          </button>
        </div>
      </div>

      <AISettingsModal open={aiSettingsOpen} onClose={() => setAiSettingsOpen(false)} />

      {/* Mobile nav */}
      <nav className="flex gap-1 overflow-x-auto border-t border-[var(--color-border)] px-4 py-2 md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`relative flex shrink-0 items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium no-underline transition-colors ${
              location.pathname === link.to
                ? 'bg-[var(--color-primary)] text-white'
                : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]'
            }`}
          >
            {link.label}
            {link.badge !== undefined && (
              <span className="inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {link.badge > 99 ? '99+' : link.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </header>
  )
}
