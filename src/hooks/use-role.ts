import { useState, useCallback } from 'react'
import type { Role } from '../types'

const ROLE_KEY = 'interview-hub-role'

/* Load saved role from localStorage */
function loadRole(): Role | null {
  try {
    const saved = localStorage.getItem(ROLE_KEY)
    if (saved === 'frontend' || saved === 'ba' || saved === 'brse') return saved
  } catch { /* ignore */ }
  return null
}

/* Save role to localStorage */
function saveRole(role: Role): void {
  try {
    localStorage.setItem(ROLE_KEY, role)
  } catch { /* ignore */ }
}

/* Hook to manage current role selection */
export function useRole() {
  const [role, setRoleState] = useState<Role | null>(loadRole)

  const setRole = useCallback((r: Role) => {
    saveRole(r)
    setRoleState(r)
  }, [])

  const clearRole = useCallback(() => {
    localStorage.removeItem(ROLE_KEY)
    setRoleState(null)
  }, [])

  return { role, setRole, clearRole }
}
