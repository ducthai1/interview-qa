import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PathRoadmap } from '../components/path-roadmap'
import { useLearningPath } from '../hooks/use-learning-path'
import { learningPaths } from '../data/learning-paths'
import type { Question, UserProgress } from '../types'

interface LearningPathPageProps {
  questions: Question[]
  progress: UserProgress
}

export function LearningPathPage({ questions, progress }: LearningPathPageProps) {
  const { t, i18n } = useTranslation()
  const isVi = i18n.language === 'vi'
  const { getSteps, getOverallPercent } = useLearningPath(questions, progress)
  const [expandedPathId, setExpandedPathId] = useState<string | null>(null)

  function togglePath(id: string) {
    setExpandedPathId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Hero */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text)] md:text-4xl">
          {t('path.title')}
        </h1>
        <p className="mx-auto max-w-xl text-[var(--color-text-secondary)]">
          {t('path.subtitle')}
        </p>
      </div>

      {/* Path cards grid — max 2 cols to give cards enough width */}
      <div className="grid gap-4 sm:grid-cols-2">
        {learningPaths.map((path) => {
          const percent = getOverallPercent(path.id)
          const steps = getSteps(path.id)
          const isExpanded = expandedPathId === path.id
          const currentStep = steps.find((s) => s.isCurrent)
          const completedCount = steps.filter((s) => s.isCompleted).length

          return (
            <div
              key={path.id}
              className={`col-span-1 ${isExpanded ? 'sm:col-span-2' : ''}`}
            >
              {/* Card */}
              <button
                onClick={() => togglePath(path.id)}
                className="group w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 text-left shadow-sm transition-all hover:shadow-md focus:outline-none"
              >
                {/* Header row */}
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                      style={{ backgroundColor: `${path.color}20` }}
                    >
                      {path.icon}
                    </span>
                    <div>
                      <h2 className="text-base font-bold text-[var(--color-text)]">
                        {isVi ? path.labelVi : path.label}
                      </h2>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        {t('path.steps', { count: path.steps.length })}
                      </p>
                    </div>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: path.color }}
                  >
                    {percent}%
                  </span>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
                  {isVi ? path.descriptionVi : path.description}
                </p>

                {/* Progress bar */}
                <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${percent}%`, backgroundColor: path.color }}
                  />
                </div>

                {/* Footer — 2 rows for clarity */}
                <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                  <span>
                    {completedCount} / {path.steps.length} {isVi ? 'chủ đề hoàn thành' : 'topics done'}
                  </span>
                  <span className="shrink-0 font-medium" style={{ color: path.color }}>
                    {isExpanded ? '▲' : '▼'} {isExpanded
                      ? (isVi ? 'Thu gọn' : 'Collapse')
                      : percent > 0
                      ? t('path.continuePath')
                      : t('path.startPath')}
                  </span>
                </div>
                {currentStep && (
                  <div className="mt-1.5 text-xs">
                    <span className="text-[var(--color-text-secondary)]">{isVi ? 'Đang học' : 'Current'}: </span>
                    <span className="font-medium" style={{ color: path.color }}>
                      {currentStep.topicLabel}
                    </span>
                  </div>
                )}
              </button>

              {/* Inline roadmap (expanded) */}
              {isExpanded && (
                <div className="mt-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2">
                  <PathRoadmap steps={steps} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
