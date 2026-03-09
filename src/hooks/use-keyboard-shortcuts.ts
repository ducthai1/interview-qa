import { useEffect } from 'react'

interface KeyboardShortcutHandlers {
  onNext?: () => void
  onPrevious?: () => void
  onBookmark?: () => void
  onShowAnswer?: () => void
  onSelectOption?: (idx: number) => void
}

/**
 * Keyboard shortcuts for question navigation and interaction.
 * ArrowRight/ArrowLeft = next/prev, B = bookmark, Space = show answer, 1-4 = select MCQ option.
 * Shortcuts are disabled when user is typing in an input/textarea.
 */
export function useKeyboardShortcuts(handlers: KeyboardShortcutHandlers) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Skip if user is typing in an input or textarea
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target as HTMLElement).isContentEditable) return

      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault()
          handlers.onNext?.()
          break
        case 'ArrowLeft':
          e.preventDefault()
          handlers.onPrevious?.()
          break
        case 'b':
        case 'B':
          e.preventDefault()
          handlers.onBookmark?.()
          break
        case ' ':
          e.preventDefault()
          handlers.onShowAnswer?.()
          break
        case '1':
        case '2':
        case '3':
        case '4':
          e.preventDefault()
          handlers.onSelectOption?.(parseInt(e.key) - 1)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlers])
}
