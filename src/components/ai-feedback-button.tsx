import { useState, useCallback } from 'react'
import { Sparkles, Loader2, ChevronDown, ChevronUp, AlertCircle, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Question } from '../types/question'
import { loadAIConfig, canUseAI } from '../utils/ai-config'
import { getAIFeedback, type AIFeedbackResult } from '../utils/ai-feedback'

interface AIFeedbackButtonProps {
  question: Question
  userAnswer: string
  visible: boolean
  onOpenSettings: () => void
}

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 7
      ? 'bg-[var(--color-success-bg)] text-[var(--color-success)] border-[var(--color-success-border)]'
      : score >= 4
        ? 'bg-[var(--color-warning-bg)] text-[var(--color-warning)] border-[var(--color-warning-border)]'
        : 'bg-[var(--color-error-bg)] text-[var(--color-error)] border-[var(--color-error-border)]'

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold ${color}`}>
      {score}/10
    </span>
  )
}

function FeedbackCard({ result }: { result: AIFeedbackResult }) {
  const { t } = useTranslation()

  return (
    <div className="mt-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
      {/* Score row */}
      <div className="mb-3 flex items-center gap-3">
        <span className="text-sm font-medium text-[var(--color-text-secondary)]">
          {t('ai.score', { score: result.score })}
        </span>
        <ScoreBadge score={result.score} />
      </div>

      {/* Feedback */}
      <p className="mb-3 text-sm leading-relaxed text-[var(--color-text)]">{result.feedback}</p>

      {/* Suggestions */}
      {result.suggestions.length > 0 && (
        <div>
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            {t('ai.suggestions')}
          </p>
          <ul className="space-y-1">
            {result.suggestions.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text)]">
                <span className="mt-0.5 shrink-0 text-amber-500">→</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function AIFeedbackButton({ question, userAnswer, visible, onOpenSettings }: AIFeedbackButtonProps) {
  const { t, i18n } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AIFeedbackResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [collapsed, setCollapsed] = useState(false)

  const config = loadAIConfig()
  const hasKey = config.provider !== 'none' && config.apiKey.trim().length > 0
  const limitReached = hasKey && !canUseAI(config)

  const currentLang = i18n.language

  const handleReview = useCallback(async () => {
    const freshConfig = loadAIConfig()
    setLoading(true)
    setError(null)
    try {
      const { result: res } = await getAIFeedback(question, userAnswer, freshConfig, currentLang)
      setResult(res)
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      setError(msg)
    } finally {
      setLoading(false)
    }
  }, [question, userAnswer, currentLang])

  if (!visible) return null

  // No key configured — subtle prompt
  if (!hasKey) {
    return (
      <div className="mt-3 flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
        <Sparkles className="h-3.5 w-3.5 opacity-50" />
        <span>{t('ai.noKey')}</span>
        <button
          onClick={onOpenSettings}
          className="flex items-center gap-1 text-[var(--color-primary)] hover:underline"
        >
          <Settings className="h-3 w-3" />
          {t('ai.settings')}
        </button>
      </div>
    )
  }

  // Limit reached
  if (limitReached) {
    return (
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-[var(--color-warning-border)] bg-[var(--color-warning-bg)] px-3 py-2 text-xs text-[var(--color-warning)]">
        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
        {t('ai.limitReached', { used: config.dailyUsage, limit: config.dailyLimit })}
      </div>
    )
  }

  return (
    <div className="mt-3">
      {/* Main button — only show when no result yet */}
      {!result && (
        <button
          onClick={handleReview}
          disabled={loading}
          className="flex items-center gap-1.5 rounded-lg border border-[var(--color-primary)] px-3 py-1.5 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary-bg)] disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Sparkles className="h-3.5 w-3.5" />
          )}
          {loading ? t('ai.reviewing') : t('ai.getReview')}
        </button>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="mt-2 flex items-start gap-2 rounded-lg border border-[var(--color-error)] bg-[var(--color-error-bg)] px-3 py-2 text-xs text-[var(--color-error)]">
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>
            {error === 'rate-limited'
              ? t('ai.limitReached', { used: config.dailyUsage, limit: config.dailyLimit })
              : error === 'no-key'
                ? t('ai.noKey')
                : error}
          </span>
        </div>
      )}

      {/* Result card */}
      {result && (
        <div>
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:underline"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t('ai.score', { score: result.score })}
            {collapsed ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronUp className="h-3.5 w-3.5" />}
          </button>
          {!collapsed && <FeedbackCard result={result} />}
        </div>
      )}
    </div>
  )
}
