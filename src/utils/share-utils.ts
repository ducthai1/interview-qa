import html2canvas from 'html2canvas'

/**
 * Capture an HTML element as a PNG Blob using html2canvas (2x retina scale).
 */
export async function captureCard(element: HTMLElement): Promise<Blob> {
  const canvas = await html2canvas(element, {
    scale: 2,
    backgroundColor: null,
    logging: false,
    useCORS: true,
  })
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob)
      else reject(new Error('Failed to create blob from canvas'))
    }, 'image/png')
  })
}

/**
 * Trigger a browser download for the given Blob.
 */
export function downloadImage(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

/**
 * Copy a PNG Blob to the clipboard via the Clipboard API.
 * Returns true on success, false if API is unsupported or permission denied.
 */
export async function copyToClipboard(blob: Blob): Promise<boolean> {
  try {
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob }),
    ])
    return true
  } catch {
    return false
  }
}

/**
 * Returns true if the Web Share API is available (typically mobile browsers).
 */
export function canShare(): boolean {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function'
}

/**
 * Share a PNG Blob via the native Web Share API (mobile).
 */
export async function shareNative(blob: Blob, title: string): Promise<void> {
  const file = new File([blob], `${title}.png`, { type: 'image/png' })
  await navigator.share({
    title,
    files: [file],
  })
}
