import { useState } from 'react'
import { Bug, Eye, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface DebugInteractionProps {
  originalCode: string
  revealed: boolean
  onSubmit: (userCode?: string) => void
  onReveal: () => void
}

/* Interactive editor for "Debug" questions — user can edit the code to fix the bug, then reveal the answer */
export function DebugInteraction({ originalCode, revealed, onSubmit, onReveal }: DebugInteractionProps) {
  const { t } = useTranslation()
  const [userCode, setUserCode] = useState(originalCode)
  const handleSubmit = () => {
    onSubmit(userCode)
  }

  if (revealed) {
    return (
      <div className="mt-3">
        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)]">
          <Bug className="h-3.5 w-3.5" /> {t('common.yourFix')}:
        </div>
        <pre className="overflow-x-auto rounded-lg bg-[#1e293b] p-4 text-sm leading-relaxed text-[#e2e8f0] dark:bg-[#0f172a] border border-[var(--color-primary-bg)]">
          <code>{userCode}</code>
        </pre>
      </div>
    )
  }

  return (
    <div className="mt-3">
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-secondary)]">
        <Bug className="h-3.5 w-3.5" /> {t('debugInteraction.label')}
      </label>
      <textarea
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        spellCheck={false}
        className="w-full rounded-lg border border-[var(--color-border)] bg-[#1e293b] p-4 font-mono text-sm leading-relaxed text-[#e2e8f0] focus:border-[var(--color-primary)] focus:outline-none dark:bg-[#0f172a]"
        rows={Math.min(userCode.split('\n').length + 2, 20)}
      />
      <div className="mt-2 flex items-center gap-3">
        <button
          onClick={handleSubmit}
          className="flex items-center gap-1.5 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          <Send className="h-3.5 w-3.5" /> {t('debugInteraction.submitFix')}
        </button>
        <button
          onClick={onReveal}
          className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:underline"
        >
          <Eye className="h-3.5 w-3.5" /> {t('debugInteraction.showAnswer')}
        </button>
      </div>
    </div>
  )
}
