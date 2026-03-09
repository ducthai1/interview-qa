import { useState } from 'react'
import { StickyNote, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface QuestionNotesProps {
  questionId: string
  initialNote: string
  onSave: (questionId: string, note: string) => void
}

/* Collapsible personal notes area for each question */
export function QuestionNotes({ questionId, initialNote, onSave }: QuestionNotesProps) {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(!!initialNote)
  const [note, setNote] = useState(initialNote)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    onSave(questionId, note)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  if (!expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        className="mt-2 flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
      >
        <StickyNote className="h-3.5 w-3.5" />
        {initialNote ? t('notes.edit') : t('notes.add')}
      </button>
    )
  }

  return (
    <div className="mt-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-text)]">
          <StickyNote className="h-3.5 w-3.5 text-[var(--color-primary)]" />
          {t('notes.title')}
        </span>
        <div className="flex items-center gap-2">
          {saved && (
            <span className="flex items-center gap-1 text-xs text-[var(--color-success)]">
              <Check className="h-3 w-3" /> {t('notes.saved')}
            </span>
          )}
          <button
            onClick={handleSave}
            className="rounded px-2 py-1 text-xs font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary-bg)]"
          >
            {t('notes.save')}
          </button>
        </div>
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder={t('notes.placeholder')}
        rows={3}
        className="w-full resize-y rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:outline-none"
      />
    </div>
  )
}
