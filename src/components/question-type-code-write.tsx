import { useState } from 'react'
import { Code2, Eye, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface CodeWriteInteractionProps {
  revealed: boolean
  onSubmit: () => void
  onReveal: () => void
}

/* Interactive editor for "Code Write" questions — user writes code from scratch, then compares with model answer */
export function CodeWriteInteraction({ revealed, onSubmit, onReveal }: CodeWriteInteractionProps) {
  const { t } = useTranslation()
  const [userCode, setUserCode] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    onSubmit()
  }

  if (revealed && !submitted) return null

  if (submitted) {
    return (
      <div className="mt-3">
        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-secondary)]">
          <Code2 className="h-3.5 w-3.5" /> {t('common.yourSolution')}:
        </div>
        <pre className="overflow-x-auto rounded-lg bg-[#1e293b] p-4 text-sm leading-relaxed text-[#e2e8f0] dark:bg-[#0f172a]">
          <code>{userCode || t('common.empty')}</code>
        </pre>
      </div>
    )
  }

  return (
    <div className="mt-3">
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-secondary)]">
        <Code2 className="h-3.5 w-3.5" /> {t('codeWriteInteraction.label')}
      </label>
      <textarea
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        spellCheck={false}
        placeholder={t('codeWriteInteraction.placeholder')}
        className="w-full rounded-lg border border-[var(--color-border)] bg-[#1e293b] p-4 font-mono text-sm leading-relaxed text-[#e2e8f0] placeholder:text-[#64748b] focus:border-[var(--color-primary)] focus:outline-none dark:bg-[#0f172a]"
        rows={10}
      />
      <div className="mt-2 flex items-center gap-3">
        <button
          onClick={handleSubmit}
          disabled={!userCode.trim()}
          className="flex items-center gap-1.5 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:opacity-40"
        >
          <Send className="h-3.5 w-3.5" /> {t('codeWriteInteraction.submitCompare')}
        </button>
        <button
          onClick={onReveal}
          className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:underline"
        >
          <Eye className="h-3.5 w-3.5" /> {t('codeWriteInteraction.showModelAnswer')}
        </button>
      </div>
    </div>
  )
}
