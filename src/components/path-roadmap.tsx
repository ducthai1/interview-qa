import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { StepStatus } from '../hooks/use-learning-path'

interface PathRoadmapProps {
  steps: StepStatus[]
}

export function PathRoadmap({ steps }: PathRoadmapProps) {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const isVi = i18n.language === 'vi'

  function handleStepClick(step: StepStatus) {
    if (!step.unlocked) return
    navigate(`/practice?topic=${step.topic}`)
  }

  return (
    <div className="relative flex flex-col items-center py-4">
      {steps.map((step, idx) => (
        <div key={step.topic} className="flex w-full max-w-md flex-col items-center">
          {/* Connector line above (skip for first) */}
          {idx > 0 && (
            <div
              className={`h-8 w-0.5 ${
                steps[idx - 1].isCompleted
                  ? 'bg-[var(--color-success)]'
                  : 'bg-[var(--color-border)]'
              }`}
            />
          )}

          {/* Step card */}
          <button
            onClick={() => handleStepClick(step)}
            disabled={!step.unlocked}
            className={`group w-full rounded-xl border px-4 py-3 text-left transition-all ${
              step.unlocked
                ? 'cursor-pointer hover:shadow-md'
                : 'cursor-not-allowed opacity-50'
            } ${
              step.isCurrent
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 shadow-sm'
                : step.isCompleted
                ? 'border-[var(--color-success)] bg-[var(--color-success)]/10'
                : 'border-[var(--color-border)] bg-[var(--color-bg-card)]'
            }`}
          >
            <div className="flex items-center gap-3">
              {/* Topic icon badge */}
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                style={{ backgroundColor: step.topicColor }}
              >
                {step.topicIcon}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="truncate text-sm font-semibold text-[var(--color-text)]">
                    {step.topicLabel}
                  </span>
                  {/* Status badge */}
                  {step.isCompleted && (
                    <span className="shrink-0 rounded-full bg-[var(--color-success)] px-2 py-0.5 text-xs font-medium text-white">
                      {isVi ? 'Hoàn thành' : t('path.completed')}
                    </span>
                  )}
                  {step.isCurrent && (
                    <span className="shrink-0 rounded-full bg-[var(--color-primary)] px-2 py-0.5 text-xs font-medium text-white">
                      {isVi ? 'Đang học' : t('path.current')}
                    </span>
                  )}
                  {!step.unlocked && (
                    <span className="shrink-0 text-sm">🔒</span>
                  )}
                </div>

                {/* Progress bar */}
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.round(step.completion * 100)}%`,
                      backgroundColor: step.isCompleted
                        ? 'var(--color-success)'
                        : step.isCurrent
                        ? 'var(--color-primary)'
                        : step.topicColor,
                    }}
                  />
                </div>

                {/* Caption */}
                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                  {!step.unlocked
                    ? t('path.locked', {
                        topic: steps[steps.indexOf(step) - 1]?.topicLabel ?? '',
                      })
                    : step.isCompleted
                    ? t('path.completed')
                    : step.isCurrent
                    ? t('path.unlocked')
                    : `${Math.round(step.completion * 100)}% / ${Math.round(step.requiredCompletion * 100)}% ${isVi ? 'yêu cầu' : 'required'}`}
                </p>
              </div>

              {/* Completion % right side */}
              <span className="shrink-0 text-sm font-semibold text-[var(--color-text-secondary)]">
                {Math.round(step.completion * 100)}%
              </span>
            </div>
          </button>
        </div>
      ))}
    </div>
  )
}
