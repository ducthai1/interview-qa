import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from './components/header'
import { HomePage } from './pages/home-page'
import { PracticePage } from './pages/practice-page'
import { MockInterviewPage } from './pages/mock-interview-page'
import { StatsPage } from './pages/stats-page'
import { LearningPathPage } from './pages/learning-path-page'
import { ReviewPage } from './pages/review-page'
import { ChallengePage } from './pages/challenge-page'
import { BookmarksPage } from './pages/bookmarks-page'
import { CustomSessionPage } from './pages/custom-session-page'
import { useTheme } from './hooks/use-theme'
import { useProgress } from './hooks/use-progress'
import { useSpacedRepetition } from './hooks/use-spaced-repetition'
import { getAllQuestions } from './data'
import type { Question } from './types'
import './index.css'

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
      </div>
    </BrowserRouter>
  )
}
