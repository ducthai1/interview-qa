import { useEffect, useState, useCallback, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from './components/header'
import { AchievementToast } from './components/achievement-toast'
import { RoleSelectorPage } from './pages/role-selector-page'
import { useTheme } from './hooks/use-theme'
import { useRole } from './hooks/use-role'
import { useProgress } from './hooks/use-progress'
import { useSpacedRepetition } from './hooks/use-spaced-repetition'
import { checkNewAchievements } from './utils/achievements'
import { getQuestionsByRole } from './data'
import type { Question, Role } from './types'
import './index.css'

/* Lazy-load pages to reduce initial bundle size */
const HomePage = lazy(() => import('./pages/home-page').then((m) => ({ default: m.HomePage })))
const PracticePage = lazy(() => import('./pages/practice-page').then((m) => ({ default: m.PracticePage })))
const ReviewPage = lazy(() => import('./pages/review-page').then((m) => ({ default: m.ReviewPage })))
const MockInterviewPage = lazy(() => import('./pages/mock-interview-page').then((m) => ({ default: m.MockInterviewPage })))
const StatsPage = lazy(() => import('./pages/stats-page').then((m) => ({ default: m.StatsPage })))
const ChallengePage = lazy(() => import('./pages/challenge-page').then((m) => ({ default: m.ChallengePage })))
const BookmarksPage = lazy(() => import('./pages/bookmarks-page').then((m) => ({ default: m.BookmarksPage })))
const CustomSessionPage = lazy(() => import('./pages/custom-session-page').then((m) => ({ default: m.CustomSessionPage })))
const LearningPathPage = lazy(() => import('./pages/learning-path-page').then((m) => ({ default: m.LearningPathPage })))
const FlashcardPage = lazy(() => import('./pages/flashcard-page').then((m) => ({ default: m.FlashcardPage })))
const AchievementsPage = lazy(() => import('./pages/achievements-page').then((m) => ({ default: m.AchievementsPage })))

function PageSpinner() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-primary)] border-t-transparent" />
    </div>
  )
}

export default function App() {
  const { i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const { role, setRole, clearRole } = useRole()

  /* When BrSE is selected, auto-switch to Japanese */
  const handleSelectRole = useCallback((r: Role) => {
    setRole(r)
    if (r === 'brse' && i18n.language !== 'jp') {
      i18n.changeLanguage('jp')
      localStorage.setItem('fe-interview-lang', 'jp')
    }
  }, [setRole, i18n])

  /* Show role selector when no role is chosen */
  if (!role) {
    return <RoleSelectorPage onSelectRole={handleSelectRole} />
  }

  return <MainApp role={role} theme={theme} toggleTheme={toggleTheme} clearRole={clearRole} />
}

/* Separated to only call useProgress after role is confirmed */
function MainApp({ role, theme, toggleTheme, clearRole }: {
  role: Role
  theme: 'light' | 'dark'
  toggleTheme: () => void
  clearRole: () => void
}) {
  const { t } = useTranslation()
  const { progress, answer, bookmark, reset, retry, saveChallenge, saveNote, unlockAchievements } = useProgress(role)
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [newAchievements, setNewAchievements] = useState<string[]>([])

  const { dueCount } = useSpacedRepetition(progress, questions)

  /* Load questions for the current role */
  useEffect(() => {
    setLoading(true)
    getQuestionsByRole(role).then((qs) => {
      setQuestions(qs)
      setLoading(false)
    })
  }, [role])

  /* Check for new achievements whenever progress changes */
  useEffect(() => {
    if (questions.length === 0) return
    const newly = checkNewAchievements(progress, questions.length)
    if (newly.length > 0) {
      unlockAchievements(newly)
      setNewAchievements(newly)
    }
  }, [progress, questions.length, unlockAchievements])

  const dismissAchievements = useCallback(() => setNewAchievements([]), [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-primary)] border-t-transparent" />
          <p className="text-sm text-[var(--color-text-secondary)]">{t('common.loading')}</p>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-bg)]">
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          reviewDueCount={dueCount}
          questions={questions}
          role={role}
          onSwitchRole={clearRole}
        />
        <Suspense fallback={<PageSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage questions={questions} progress={progress} />} />
            <Route path="/practice" element={<PracticePage questions={questions} progress={progress} onAnswer={answer} onBookmark={bookmark} onRetry={retry} onSaveNote={saveNote} />} />
            <Route path="/review" element={<ReviewPage questions={questions} progress={progress} onAnswer={answer} onBookmark={bookmark} onRetry={retry} />} />
            <Route path="/mock-interview" element={<MockInterviewPage questions={questions} progress={progress} onAnswer={answer} onBookmark={bookmark} onRetry={retry} />} />
            <Route path="/stats" element={<StatsPage questions={questions} progress={progress} onReset={reset} />} />
            <Route path="/challenge" element={<ChallengePage questions={questions} progress={progress} onAnswer={answer} onBookmark={bookmark} onRetry={retry} onSaveChallenge={saveChallenge} />} />
            <Route path="/bookmarks" element={<BookmarksPage questions={questions} progress={progress} onBookmark={bookmark} />} />
            <Route path="/custom-session" element={<CustomSessionPage questions={questions} progress={progress} onAnswer={answer} onBookmark={bookmark} onRetry={retry} />} />
            <Route path="/learning-path" element={<LearningPathPage questions={questions} progress={progress} />} />
            <Route path="/flashcards" element={<FlashcardPage questions={questions} progress={progress} onAnswer={answer} onBookmark={bookmark} />} />
            <Route path="/achievements" element={<AchievementsPage progress={progress} totalQuestions={questions.length} />} />
          </Routes>
        </Suspense>

        {/* Achievement unlock toast */}
        {newAchievements.length > 0 && (
          <AchievementToast achievementIds={newAchievements} onDismiss={dismissAchievements} />
        )}
      </div>
    </BrowserRouter>
  )
}
