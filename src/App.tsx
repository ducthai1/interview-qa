import { useEffect, useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from './components/header'
import { useTheme } from './hooks/use-theme'
import { useProgress } from './hooks/use-progress'
import { useSpacedRepetition } from './hooks/use-spaced-repetition'
import { getAllQuestions } from './data'
import type { Question } from './types'
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

function PageSpinner() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-primary)] border-t-transparent" />
    </div>
  )
}

export default function App() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const { progress, answer, bookmark, reset, retry, saveChallenge } = useProgress()
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)

  const { dueCount } = useSpacedRepetition(progress, questions)

  useEffect(() => {
    getAllQuestions().then((qs) => {
      setQuestions(qs)
      setLoading(false)
    })
  }, [])

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
        <Header theme={theme} onToggleTheme={toggleTheme} reviewDueCount={dueCount} />
        <Suspense fallback={<PageSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage questions={questions} progress={progress} />} />
            <Route path="/practice" element={<PracticePage questions={questions} progress={progress} onAnswer={answer} onBookmark={bookmark} onRetry={retry} />} />
            <Route path="/review" element={<ReviewPage questions={questions} progress={progress} onAnswer={answer} onBookmark={bookmark} onRetry={retry} />} />
            <Route path="/mock-interview" element={<MockInterviewPage questions={questions} progress={progress} onAnswer={answer} onBookmark={bookmark} onRetry={retry} />} />
            <Route path="/stats" element={<StatsPage questions={questions} progress={progress} onReset={reset} />} />
            <Route path="/challenge" element={<ChallengePage questions={questions} progress={progress} onAnswer={answer} onBookmark={bookmark} onRetry={retry} onSaveChallenge={saveChallenge} />} />
            <Route path="/bookmarks" element={<BookmarksPage questions={questions} progress={progress} onBookmark={bookmark} />} />
            <Route path="/custom-session" element={<CustomSessionPage questions={questions} progress={progress} onAnswer={answer} onBookmark={bookmark} onRetry={retry} />} />
            <Route path="/learning-path" element={<LearningPathPage questions={questions} progress={progress} />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}
