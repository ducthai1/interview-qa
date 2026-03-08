import { useState, useEffect, useCallback } from 'react'
import { loadTheme, saveTheme } from '../utils/local-storage'

export function useTheme() {
  const [theme, setThemeState] = useState<'light' | 'dark'>(loadTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      saveTheme(next)
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
