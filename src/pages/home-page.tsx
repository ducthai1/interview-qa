import { useTranslation } from 'react-i18next'
import { TopicCard } from '../components/topic-card'
import { topics } from '../data/topics'
import type { Question, UserProgress } from '../types'

interface HomePageProps {
  questions: Question[]
  progress: UserProgress
}

export function HomePage({ questions, progress }: HomePageProps) {
  const { t } = useTranslation()
  const totalAnswered = Object.keys(progress.answered).length
  const totalCorrect = Object.values(progress.answered).filter((a) => a.correct).length

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Hero */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text)] md:text-4xl">
          {t('home.title')}
        </h1>
        <p className="mx-auto max-w-xl text-[var(--color-text-secondary)]">
          {t('home.subtitle', { count: questions.length })}
        </p>
      </div>

      {/* Quick stats */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 text-center">
          <p className="text-2xl font-bold text-[var(--color-primary)]">{questions.length}</p>
          <p className="text-xs text-[var(--color-text-secondary)]">{t('home.totalQuestions')}</p>
        </div>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 text-center">
          <p className="text-2xl font-bold text-[var(--color-text)]">{totalAnswered}</p>
          <p className="text-xs text-[var(--color-text-secondary)]">{t('common.answered')}</p>
        </div>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 text-center">
          <p className="text-2xl font-bold text-[var(--color-success)]">
            {totalAnswered > 0 ? `${Math.round((totalCorrect / totalAnswered) * 100)}%` : '0%'}
          </p>
          <p className="text-xs text-[var(--color-text-secondary)]">{t('common.accuracy')}</p>
        </div>
      </div>

      {/* Topic grid */}
      <h2 className="mb-4 text-lg font-semibold text-[var(--color-text)]">{t('home.chooseATopic')}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => {
          const topicQuestions = questions.filter((q) => q.topic === topic.id)
          const answered = topicQuestions.filter((q) => progress.answered[q.id])
          const correct = answered.filter((q) => progress.answered[q.id]?.correct)
          return (
            <TopicCard
              key={topic.id}
              topic={topic}
              questionCount={topicQuestions.length}
              answeredCount={answered.length}
              correctCount={correct.length}
            />
          )
        })}
      </div>
    </div>
  )
}
