import type { AIConfig } from '../types/question'

const STORAGE_KEY = 'fe-interview-ai-config'

function today(): string {
  return new Date().toISOString().slice(0, 10)
}

export function getDefaultConfig(): AIConfig {
  return {
    provider: 'none',
    apiKey: '',
    dailyUsage: 0,
    dailyLimit: 1500, // Gemini free tier default
    lastResetDate: today(),
  }
}

export function loadAIConfig(): AIConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return getDefaultConfig()
    const parsed = JSON.parse(raw) as AIConfig
    return parsed
  } catch {
    return getDefaultConfig()
  }
}

export function saveAIConfig(config: AIConfig): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
}

export function canUseAI(config: AIConfig): boolean {
  if (config.provider === 'none' || !config.apiKey) return false
  const cfg = resetUsageIfNeeded(config)
  return cfg.dailyUsage < cfg.dailyLimit
}

/** Returns config with reset usage if day changed — also persists if reset happened */
export function resetUsageIfNeeded(config: AIConfig): AIConfig {
  if (config.lastResetDate !== today()) {
    const reset: AIConfig = { ...config, dailyUsage: 0, lastResetDate: today() }
    saveAIConfig(reset)
    return reset
  }
  return config
}

export function incrementUsage(config: AIConfig): AIConfig {
  const cfg = resetUsageIfNeeded(config)
  const updated: AIConfig = { ...cfg, dailyUsage: cfg.dailyUsage + 1 }
  saveAIConfig(updated)
  return updated
}
