import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './en'
import { vi } from './vi'

/* Detect saved language preference or fall back to browser locale */
let savedLang: string | null = null
try { savedLang = localStorage.getItem('fe-interview-lang') } catch { /* ignore */ }
const browserLang = (typeof navigator !== 'undefined' && navigator.language.startsWith('vi')) ? 'vi' : 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: savedLang || browserLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
