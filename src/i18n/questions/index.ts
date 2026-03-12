import type { QuestionTranslationMap } from './types'

const langModules: Record<string, Record<string, () => Promise<Record<string, QuestionTranslationMap>>>> = {
  vi: import.meta.glob('./vi/*.ts', { eager: false }) as any,
  en: import.meta.glob('./en/*.ts', { eager: false }) as any,
  jp: import.meta.glob('./jp/*.ts', { eager: false }) as any,
  ja: import.meta.glob('./jp/*.ts', { eager: false }) as any,
}

export const caches: Record<string, QuestionTranslationMap> = {}

/** Load question translations for a specific language into a single map */
export async function loadQuestionTranslations(lang: string): Promise<QuestionTranslationMap> {
  const normLang = lang.split('-')[0]
  if (caches[normLang]) return caches[normLang]

  const modules = langModules[normLang]
  if (!modules) return {}

  const map: QuestionTranslationMap = {}
  const loaded = await Promise.all(Object.values(modules).map((load) => load()))
  
  for (const mod of loaded) {
    for (const exported of Object.values(mod)) {
      if (typeof exported === 'object' && exported !== null && !Array.isArray(exported)) {
        Object.assign(map, exported)
      }
    }
  }

  caches[lang] = map
  return map
}
