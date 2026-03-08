import { useRef, useState } from 'react'
import { Share2, Download, Copy, Check, Loader2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ShareResultCard } from './share-result-card'
import { captureCard, copyToClipboard, downloadImage, canShare, shareNative } from '../utils/share-utils'
import type { ShareCardProps } from './share-result-card'

interface ShareButtonProps {
  cardProps: ShareCardProps
}

type ShareAction = 'copy' | 'download' | 'share'

export function ShareButton({ cardProps }: ShareButtonProps) {
  const { t } = useTranslation()
  const cardRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState<ShareAction | null>(null)
  const [copied, setCopied] = useState(false)

  const handleAction = async (action: ShareAction) => {
    if (!cardRef.current || loading) return
    setOpen(false)
    setLoading(action)

    try {
      const blob = await captureCard(cardRef.current)
      const filename = `fe-interview-result-${Date.now()}.png`

      if (action === 'copy') {
        const ok = await copyToClipboard(blob)
        if (ok) {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } else {
          // Fallback to download if clipboard API is unavailable
          downloadImage(blob, filename)
        }
      } else if (action === 'download') {
        downloadImage(blob, filename)
      } else if (action === 'share') {
        await shareNative(blob, 'FE Interview Result')
      }
    } catch (err) {
      // Silently fail — user will see button return to normal state
      console.error('[ShareButton] capture error:', err)
    } finally {
      setLoading(null)
    }
  }

  const isLoading = loading !== null

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Hidden card rendered off-screen for html2canvas capture */}
      <div
        aria-hidden="true"
        style={{ position: 'fixed', left: '-9999px', top: 0, pointerEvents: 'none', zIndex: -1 }}
      >
        <ShareResultCard ref={cardRef} {...cardProps} />
      </div>

      {/* Trigger button */}
      <button
        onClick={() => !isLoading && setOpen((o) => !o)}
        disabled={isLoading}
        className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-50"
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Share2 className="h-4 w-4" />
        )}
        {copied ? t('share.copied') : isLoading ? t('share.downloading') : t('share.button')}
      </button>

      {/* Dropdown menu */}
      {open && !isLoading && (
        <>
          {/* Backdrop to close on outside click */}
          <div
            style={{ position: 'fixed', inset: 0, zIndex: 40 }}
            onClick={() => setOpen(false)}
          />
          <div
            className="absolute right-0 z-50 mt-1 w-48 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-lg"
          >
            <button
              onClick={() => handleAction('copy')}
              className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]"
            >
              {copied ? <Check className="h-4 w-4 text-[var(--color-success)]" /> : <Copy className="h-4 w-4" />}
              {t('share.copy')}
            </button>
            <button
              onClick={() => handleAction('download')}
              className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]"
            >
              <Download className="h-4 w-4" />
              {t('share.download')}
            </button>
            {canShare() && (
              <button
                onClick={() => handleAction('share')}
                className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]"
              >
                <Share2 className="h-4 w-4" />
                {t('share.share')}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
