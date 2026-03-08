import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, BookOpen, RotateCcw, Map } from 'lucide-react'
import type { Question, UserProgress } from '../types'
import { getWeakTopics } from '../utils/analytics'
import { getDueQuestions } from '../utils/spaced-repetition'
import { learningPaths } from '../data/learning-paths'

interface NextStepsSectionProps {
  questions: Question[]
  progress: UserProgress
}

export function NextStepsSection({ questions, progress }: NextStepsSectionProps) {
  const { t } = useTranslation()

  const weakTopics = getWeakTopics(progress.answered, questions, 2)
  const dueCount = getDueQuestions(progress, questions).length

  // Find active learning path (one with in-progress steps)
  const activePath = learningPaths.find((path) => {
    const stepIdx = progress.pathProgress?.[path.id] ?? 0
    return stepIdx > 0 && stepIdx < path.steps.length
  }) ?? learningPaths[0]

  const hasData = Object.keys(progress.answered).length > 0

  if (!hasData) return null

  return (
    <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
      <h2 className="mb-4 text-base font-semibold text-[var(--color-text)]">
        {t('nextSteps.title')}
      </h2>

      <div className="flex flex-col gap-2">
        {/* Weak topics */}
        {weakTopics.length > 0 && (
          <Link
            to={`/practice?topic=${weakTopics[0].topicId}`}
            className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              {t('nextSteps.weakTopics')}
              <span className="text-xs text-[var(--color-text-secondary)]">
                ({weakTopics.map((wt) => wt.topic).join(', ')})
              </span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        )}

        {/* Due for review */}
        {dueCount > 0 && (
          <Link
            to="/review"
            className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            <span className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              {t('nextSteps.reviewDue', { count: dueCount })}
            </span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        )}

        {/* Continue learning path */}
        {activePath && (
          <Link
            to="/learning-path"
            className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            <span className="flex items-center gap-2">
              <Map className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              {t('nextSteps.continuePath')}
            </span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        )}

        {/* Practice more */}
        <Link
          to="/practice"
          className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          <span className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
            {t('nextSteps.practiceMore')}
          </span>
          <ArrowRight className="h-4 w-4 shrink-0" />
        </Link>
      </div>
    </div>
  )
}
