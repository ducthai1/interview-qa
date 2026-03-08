import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Eye, EyeOff, Loader2, CheckCircle2, AlertCircle, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { AIConfig } from '../types/question'
import { loadAIConfig, saveAIConfig, getDefaultConfig, resetUsageIfNeeded } from '../utils/ai-config'
import { testAIConnection } from '../utils/ai-feedback'

interface AISettingsModalProps {
  open: boolean
  onClose: () => void
}

export function AISettingsModal({ open, onClose }: AISettingsModalProps) {
  const { t, i18n } = useTranslation()
  const [config, setConfig] = useState<AIConfig>(getDefaultConfig)
  const [showKey, setShowKey] = useState(false)
  const [testing, setTesting] = useState(false)
  const [testStatus, setTestStatus] = useState<'idle' | 'success' | 'fail'>('idle')
  const [testError, setTestError] = useState('')

  // Load fresh config when modal opens
  useEffect(() => {
    if (open) {
      const loaded = resetUsageIfNeeded(loadAIConfig())
      setConfig(loaded)
      setTestStatus('idle')
      setTestError('')
    }
  }, [open])

  if (!open) return null

  const handleSave = () => {
    saveAIConfig(config)
    onClose()
  }

  const handleTest = async () => {
    setTesting(true)
    setTestStatus('idle')
    setTestError('')
    try {
      await testAIConnection(config)
      setTestStatus('success')
    } catch (err) {
      setTestStatus('fail')
      setTestError(String(err instanceof Error ? err.message : err))
    } finally {
      setTesting(false)
    }
  }

  const canTest = config.provider !== 'none' && config.apiKey.trim().length > 0

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal — centered with max-height and scroll */}
      <div className="relative z-10 w-full max-w-md rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-[var(--color-primary)]" />
            <h2 className="text-base font-semibold text-[var(--color-text)]">
              {t('ai.settings')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Provider */}
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
            {t('ai.provider')}
          </label>
          <select
            value={config.provider}
            onChange={(e) => {
              const provider = e.target.value as AIConfig['provider']
              const dailyLimit = provider === 'groq' ? 14400 : provider === 'gemini' ? 1500 : provider === 'none' ? 20 : 50
              setConfig((c) => ({
                ...c,
                provider,
                apiKey: '',
                dailyLimit,
              }))
              setTestStatus('idle')
            }}
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none"
          >
            <option value="none">{t('ai.none')}</option>
            <option value="groq">Groq (Llama 3.3 70B) — FREE</option>
            <option value="gemini">Gemini (Google) — FREE</option>
            <option value="openai">OpenAI (GPT-4o mini)</option>
            <option value="anthropic">Anthropic (Claude)</option>
          </select>
          {config.provider === 'groq' && (
            <p className="mt-1.5 text-xs text-[var(--color-success)]">
              {i18n.language === 'vi'
                ? 'Groq hoàn toàn miễn phí! 14,400 requests/ngày. Lấy key tại console.groq.com'
                : 'Groq is completely free! 14,400 requests/day. Get key at console.groq.com'}
            </p>
          )}
          {config.provider === 'gemini' && (
            <p className="mt-1.5 text-xs text-[var(--color-success)]">
              {i18n.language === 'vi'
                ? 'Gemini API hoàn toàn miễn phí! Lấy key tại aistudio.google.com'
                : 'Gemini API is completely free! Get your key at aistudio.google.com'}
            </p>
          )}
          {config.provider === 'openai' && (
            <p className="mt-1.5 text-xs text-amber-500">
              {i18n.language === 'vi'
                ? 'OpenAI yêu cầu tài khoản trả phí.'
                : 'OpenAI requires a paid account.'}
            </p>
          )}
          {config.provider === 'anthropic' && (
            <p className="mt-1.5 text-xs text-amber-500">
              {i18n.language === 'vi'
                ? 'Anthropic yêu cầu backend proxy và tài khoản trả phí.'
                : 'Anthropic requires a backend proxy and paid account.'}
            </p>
          )}
        </div>

        {/* API Key */}
        {config.provider !== 'none' && (
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
              {t('ai.apiKey')}
            </label>
            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={config.apiKey}
                onChange={(e) => {
                  setConfig((c) => ({ ...c, apiKey: e.target.value }))
                  setTestStatus('idle')
                }}
                placeholder={`${config.provider === 'groq' ? 'gsk_...' : config.provider === 'gemini' ? 'AIza...' : config.provider === 'openai' ? 'sk-...' : 'sk-ant-...'}`}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] py-2 pl-3 pr-10 font-mono text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowKey((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                aria-label={showKey ? 'Hide key' : 'Show key'}
              >
                {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <p className="mt-1.5 flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
              <AlertCircle className="h-3.5 w-3.5 shrink-0 text-amber-500" />
              {t('ai.apiKeyHint')}
            </p>
            {config.provider === 'groq' && (
              <a
                href="https://console.groq.com/keys"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-xs font-medium text-[var(--color-primary)] hover:underline"
              >
                {i18n.language === 'vi' ? '→ Lấy API key miễn phí tại Groq Console' : '→ Get free API key at Groq Console'}
              </a>
            )}
            {config.provider === 'gemini' && (
              <a
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-xs font-medium text-[var(--color-primary)] hover:underline"
              >
                {i18n.language === 'vi' ? '→ Lấy API key miễn phí tại Google AI Studio' : '→ Get free API key at Google AI Studio'}
              </a>
            )}
          </div>
        )}

        {/* Usage Display */}
        {config.provider !== 'none' && (
          <div className="mb-5 rounded-lg bg-[var(--color-bg-secondary)] px-3 py-2.5 text-sm text-[var(--color-text-secondary)]">
            <div className="flex items-center justify-between">
              <span>{t('ai.usage', { used: config.dailyUsage, limit: config.dailyLimit })}</span>
              <span className="text-xs opacity-60">
                {config.provider === 'gemini' ? 'Free tier' : 'Paid API'}
              </span>
            </div>
            {/* Usage progress bar */}
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
              <div
                className={`h-full rounded-full transition-all ${
                  config.dailyUsage / config.dailyLimit > 0.8
                    ? 'bg-[var(--color-error)]'
                    : 'bg-[var(--color-primary)]'
                }`}
                style={{ width: `${Math.min(100, (config.dailyUsage / config.dailyLimit) * 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Test connection result */}
        {testStatus === 'success' && (
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-[var(--color-success)] bg-green-50 px-3 py-2 text-sm text-[var(--color-success)] dark:bg-green-900/20">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            {t('ai.testSuccess')}
          </div>
        )}
        {testStatus === 'fail' && (
          <div className="mb-4 flex items-start gap-2 rounded-lg border border-[var(--color-error)] bg-red-50 px-3 py-2 text-sm text-[var(--color-error)] dark:bg-red-900/20">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{t('ai.testFailed', { error: testError })}</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Test Connection */}
          {config.provider !== 'none' && (
            <button
              onClick={handleTest}
              disabled={!canTest || testing}
              className="flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-40"
            >
              {testing ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
              {t('ai.testConnection')}
            </button>
          )}

          <div className="ml-auto flex gap-2">
            <button
              onClick={onClose}
              className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              {i18n.language === 'vi' ? 'Hủy' : 'Cancel'}
            </button>
            <button
              onClick={handleSave}
              className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
            >
              {t('ai.save')}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
