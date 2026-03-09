import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Download, Upload, Check, AlertCircle } from 'lucide-react'
import { loadProgress, saveProgress } from '../utils/local-storage'
import type { UserProgress } from '../types'

/** Validate imported data has minimum required shape */
function isValidProgress(data: unknown): data is UserProgress {
  if (typeof data !== 'object' || data === null) return false
  const obj = data as Record<string, unknown>
  return typeof obj.answered === 'object' && Array.isArray(obj.bookmarked)
}

export function ExportImportProgress() {
  const { t } = useTranslation()
  const fileRef = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleExport() {
    const progress = loadProgress()
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `fe-interview-progress-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string)
        if (!isValidProgress(data)) {
          setStatus('error')
          return
        }
        if (!window.confirm(t('backup.confirmImport'))) return
        saveProgress(data)
        setStatus('success')
        setTimeout(() => window.location.reload(), 1000)
      } catch {
        setStatus('error')
      }
    }
    reader.readAsText(file)
    // Reset input so same file can be re-selected
    e.target.value = ''
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Export */}
      <button
        onClick={handleExport}
        className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]"
      >
        <Download className="h-4 w-4" />
        {t('backup.export')}
      </button>

      {/* Import */}
      <button
        onClick={() => fileRef.current?.click()}
        className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]"
      >
        <Upload className="h-4 w-4" />
        {t('backup.import')}
      </button>
      <input ref={fileRef} type="file" accept=".json" className="hidden" onChange={handleImport} />

      {/* Status feedback */}
      {status === 'success' && (
        <span className="inline-flex items-center gap-1 text-xs text-[var(--color-success)]">
          <Check className="h-3.5 w-3.5" /> {t('backup.importSuccess')}
        </span>
      )}
      {status === 'error' && (
        <span className="inline-flex items-center gap-1 text-xs text-[var(--color-error)]">
          <AlertCircle className="h-3.5 w-3.5" /> {t('backup.importError')}
        </span>
      )}
    </div>
  )
}
