# Phase 6: Share Results

## Context
Users complete mock interviews and challenges but can't share achievements. Generate shareable image cards from results using html2canvas.

## Requirements
- Generate styled card image from mock interview or challenge results
- Card content: score, accuracy, topic breakdown, date, app branding
- Share actions: copy to clipboard, download as PNG
- Minimal dependency: html2canvas (~40KB gzipped)
- Card must look good standalone (social media friendly, 1200x630px or similar)

## Architecture

### Share Flow
```
User finishes mock interview or challenge
  → Results screen shows "Share" button
  → Click triggers card generation:
    1. Render hidden styled card in DOM
    2. html2canvas captures it as canvas
    3. Convert to PNG blob
    4. Offer: copy to clipboard / download
  → Clean up hidden element
```

### Card Design
```
┌─────────────────────────────────┐
│  🏆 FE Interview Hub            │
│                                  │
│  Challenge Results               │
│  ────────────────                │
│                                  │
│    Score: 1250                   │
│    Accuracy: 87%                 │
│    Time: 18:32 / 30:00          │
│                                  │
│  Topic Breakdown:                │
│  React ████████░░ 80%           │
│  JS    ██████████ 100%          │
│  CSS   ██████░░░░ 60%           │
│                                  │
│  March 9, 2026                   │
│  fe-interview-hub.app            │
└─────────────────────────────────┘
```

Dimensions: 600x400px (renders at 2x for retina = 1200x800 actual pixels).

## Key Files to Create/Modify

### New Files
| File | Purpose |
|------|---------|
| `src/components/share-card.tsx` | Styled card component (rendered for capture) |
| `src/components/share-button.tsx` | Share button with copy/download actions |
| `src/utils/share.ts` | html2canvas capture + clipboard/download logic |

### Modified Files
| File | Change |
|------|--------|
| `src/pages/mock-interview-page.tsx` | Add ShareButton to results screen |
| `src/pages/challenge-page.tsx` | Add ShareButton to results screen (Phase 4) |
| `src/i18n/en.ts` | Add share keys |
| `src/i18n/vi.ts` | Add share keys |
| `package.json` | Add html2canvas dependency |

## Implementation Steps

### Step 1: Install html2canvas
```bash
npm install html2canvas
```

### Step 2: Share Utility (`src/utils/share.ts`)
```ts
import html2canvas from 'html2canvas'

export async function captureElement(element: HTMLElement): Promise<Blob> {
  const canvas = await html2canvas(element, {
    scale: 2,               // retina quality
    backgroundColor: null,  // preserve card's own background
    logging: false,
    useCORS: true,
  })
  return new Promise((resolve) => canvas.toBlob(resolve!, 'image/png'))
}

export async function copyImageToClipboard(blob: Blob): Promise<boolean> {
  try {
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob })
    ])
    return true
  } catch {
    return false // clipboard API not supported
  }
}

export function downloadImage(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
```

### Step 3: Share Card Component
- Takes props: `type` (mock-interview | challenge), `score`, `accuracy`, `timeTaken`, `timeLimit`, `topicBreakdown`, `date`
- Self-contained styles (inline or Tailwind) — must render correctly when captured
- Fixed dimensions: 600x400px
- Brand header: app logo + name
- Score + stats section
- Mini topic bars (top 5 topics)
- Footer: date + URL
- Dark card background with light text (looks good on any social media bg)

```tsx
export function ShareCard({ data, ref }: ShareCardProps) {
  return (
    <div ref={ref} className="w-[600px] h-[400px] bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white rounded-2xl">
      {/* Brand */}
      <div className="flex items-center gap-2 mb-6">
        <Code2 className="h-6 w-6 text-blue-400" />
        <span className="font-bold text-lg">FE Interview Hub</span>
      </div>

      {/* Score */}
      <div className="text-5xl font-bold text-blue-400 mb-1">{data.score}</div>
      <div className="text-sm text-slate-400 mb-6">
        {data.accuracy}% accuracy · {data.timeTaken}
      </div>

      {/* Topic bars */}
      {data.topicBreakdown.slice(0, 5).map(topic => (
        <div key={topic.name} className="flex items-center gap-2 mb-2">
          <span className="text-xs w-20 text-slate-300">{topic.name}</span>
          <div className="flex-1 h-2 bg-slate-700 rounded">
            <div className="h-full bg-blue-500 rounded" style={{ width: `${topic.accuracy}%` }} />
          </div>
          <span className="text-xs text-slate-400 w-8">{topic.accuracy}%</span>
        </div>
      ))}

      {/* Footer */}
      <div className="mt-auto pt-4 text-xs text-slate-500">
        {data.date} · fe-interview-hub.app
      </div>
    </div>
  )
}
```

### Step 4: Share Button Component
```tsx
export function ShareButton({ cardData }: { cardData: ShareCardData }) {
  const { t } = useTranslation()
  const [generating, setGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const generate = async (action: 'copy' | 'download') => {
    setGenerating(true)
    // Temporarily render card off-screen
    const blob = await captureElement(cardRef.current!)
    if (action === 'copy') {
      const ok = await copyImageToClipboard(blob)
      setCopied(ok)
      setTimeout(() => setCopied(false), 2000)
    } else {
      downloadImage(blob, `fe-interview-results-${Date.now()}.png`)
    }
    setGenerating(false)
  }

  return (
    <>
      {/* Hidden card for capture */}
      <div className="fixed -left-[9999px] top-0">
        <ShareCard ref={cardRef} data={cardData} />
      </div>

      <div className="flex gap-2">
        <button onClick={() => generate('copy')} disabled={generating}>
          {copied ? t('share.copied') : t('share.copyImage')}
        </button>
        <button onClick={() => generate('download')} disabled={generating}>
          {t('share.download')}
        </button>
      </div>
    </>
  )
}
```

### Step 5: Integrate into Results Screens

**Mock Interview Results** (mock-interview-page.tsx):
- Add ShareButton below "Try Again" button
- Build cardData from existing `results` object

**Challenge Results** (challenge-page.tsx from Phase 4):
- Add ShareButton below results stats
- Build cardData from challenge result

### Step 6: i18n

## i18n Keys Needed

```ts
share: {
  shareResults: 'Share Results',
  copyImage: 'Copy as Image',
  download: 'Download PNG',
  copied: 'Copied!',
  generating: 'Generating...',
  challengeResult: 'Challenge Result',
  mockInterviewResult: 'Mock Interview Result',
}
```

## Browser Compatibility Notes
- `navigator.clipboard.write` with `ClipboardItem`: Chrome 76+, Safari 13.1+, Firefox 127+
- Fallback: if clipboard write fails, auto-trigger download instead
- html2canvas: works in all modern browsers, may have issues with certain CSS (gradients work fine)

## Success Criteria
- [ ] "Share" button appears on mock interview results screen
- [ ] "Share" button appears on challenge results screen (after Phase 4)
- [ ] Copy to clipboard produces a clean PNG image
- [ ] Download produces a properly named PNG file
- [ ] Card is visually appealing at 1200x800px (2x scale)
- [ ] Card shows: score, accuracy, time, topic breakdown, date, branding
- [ ] Works on mobile (download fallback if clipboard unavailable)
- [ ] Loading state shown during generation
- [ ] html2canvas is the only new dependency
- [ ] EN + VI translations complete
