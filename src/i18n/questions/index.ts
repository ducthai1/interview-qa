import type { QuestionTranslationMap } from './types'

/* Lazy-load all Vietnamese question translation files */
const viModules = import.meta.glob('./vi/*.ts', { eager: false }) as Record<
  string,
  () => Promise<Record<string, QuestionTranslationMap>>
>

let viCache: QuestionTranslationMap | null = null

/** Load all Vietnamese question translations into a single map */
export async function loadQuestionTranslations(): Promise<QuestionTranslationMap> {
  if (viCache) return viCache

  const map: QuestionTranslationMap = {}
  const loaded = await Promise.all(Object.values(viModules).map((load) => load()))
  for (const mod of loaded) {
    for (const exported of Object.values(mod)) {
      if (typeof exported === 'object' && exported !== null && !Array.isArray(exported)) {
        Object.assign(map, exported)
      }
    }
  }
  viCache = map
  return map
}
