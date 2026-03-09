import { Moon, Sun, Code2, Globe, Settings, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AISettingsModal } from './ai-settings-modal'
import type { Question } from '../types'

interface HeaderProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  reviewDueCount?: number
  questions?: Question[]
}

interface NavItem {
  to: string
  label: string
  badge?: number
}

export function Header({ theme, onToggleTheme, reviewDueCount = 0, questions = [] }: HeaderProps) {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [aiSettingsOpen, setAiSettingsOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)

  /* Primary nav — always visible */
  const primaryLinks: NavItem[] = [
    { to: '/', label: t('nav.topics') },
    { to: '/practice', label: t('nav.practice') },
    { to: '/review', label: t('nav.review'), badge: reviewDueCount > 0 ? reviewDueCount : undefined },
    { to: '/mock-interview', label: t('nav.mockInterview') },
    { to: '/stats', label: t('nav.stats') },
  ]

  /* Secondary nav — inside "More" dropdown */
  const moreLinks: NavItem[] = [
    { to: '/learning-path', label: t('nav.learningPath') },
    { to: '/flashcards', label: t('nav.flashcards') },
    { to: '/challenge', label: t('nav.challenge') },
    { to: '/achievements', label: t('nav.achievements') },
  ]

  /* All links for mobile */
  const allLinks: NavItem[] = [...primaryLinks, ...moreLinks]

  const isMoreActive = moreLinks.some((l) => location.pathname === l.to)

  const toggleLanguage = () => {
    const newLang = i18n.language === 'vi' ? 'en' : 'vi'
    i18n.changeLanguage(newLang)
    localStorage.setItem('fe-interview-lang', newLang)
  }

  /* Close dropdown on outside click */
  useEffect(() => {
    if (!moreOpen) return
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [moreOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2">
        {/* Brand */}
        <Link to="/" className="flex shrink-0 items-center gap-2 no-underline">
          <Code2 className="h-6 w-6 text-[var(--color-primary)]" />
          <span className="hidden text-base font-bold text-[var(--color-text)] sm:inline">
            {t('nav.brand')}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {primaryLinks.map((link) => (
            <NavLink key={link.to} item={link} active={location.pathname === link.to} />
          ))}

          {/* More dropdown */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors ${
                isMoreActive
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)]'
              }`}
            >
              {t('nav.more')}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full z-50 mt-1 min-w-[180px] rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-1 shadow-lg">
                {moreLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMoreOpen(false)}
                    className={`flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium no-underline transition-colors ${
                      location.pathname === link.to
                        ? 'bg-[var(--color-primary-bg)] text-[var(--color-primary)]'
                        : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleLanguage}
            className="rounded-lg px-2 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)]"
            aria-label="Toggle language"
          >
            {i18n.language === 'vi' ? 'VI' : 'EN'}
          </button>
          <button
            onClick={onToggleTheme}
            className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            aria-label={t('nav.switchTheme', { mode: theme === 'light' ? 'dark' : 'light' })}
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setAiSettingsOpen(true)}
            className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            aria-label={t('ai.settings')}
            title={t('ai.settings')}
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AISettingsModal open={aiSettingsOpen} onClose={() => setAiSettingsOpen(false)} />

      {/* Mobile nav — scrollable */}
      <nav className="flex gap-1 overflow-x-auto border-t border-[var(--color-border)] px-3 py-1.5 lg:hidden">
        {allLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`relative flex shrink-0 items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium no-underline transition-colors ${
              location.pathname === link.to
                ? 'bg-[var(--color-primary)] text-white'
                : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]'
            }`}
          >
            {link.label}
            {link.badge !== undefined && (
              <span className="inline-flex h-3.5 min-w-[14px] items-center justify-center rounded-full bg-red-500 px-0.5 text-[9px] font-bold text-white">
                {link.badge > 99 ? '99+' : link.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </header>
  )
}

/* Shared nav link component */
function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      to={item.to}
      className={`relative flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-medium no-underline transition-colors ${
        active
          ? 'bg-[var(--color-primary)] text-white'
          : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)]'
      }`}
    >
      {item.label}
      {item.badge !== undefined && (
        <span className="ml-0.5 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
          {item.badge > 99 ? '99+' : item.badge}
        </span>
      )}
    </Link>
  )
}
