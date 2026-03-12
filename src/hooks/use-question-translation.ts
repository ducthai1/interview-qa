import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { loadQuestionTranslations, caches } from '../i18n/questions'
import type { QuestionTranslationMap } from '../i18n/questions/types'
import type { Question } from '../types'

/**
 * Returns a function that resolves translated question content.
 * Falls back to original English/Japanese when no translation exists.
 */
export function useQuestionTranslation() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language.split('-')[0]
  // Use indexed access with type cast to avoid 'caches' global collision
  const initialMap = (caches as Record<string, QuestionTranslationMap>)[currentLang] || {}
  const [map, setMap] = useState<QuestionTranslationMap>(initialMap)

  useEffect(() => {
    let mounted = true
    loadQuestionTranslations(currentLang).then((m) => {
      if (mounted) {
        setMap(m)
      }
    })
    return () => {
      mounted = false
    }
  }, [currentLang])

  /** Get translated question text fields, falling back to originals */
  function tq(question: Question) {
    const tr = map[question.id]
    if (!tr) return question

    return {
      ...question,
      question: tr.question || question.question,
      explanation: tr.explanation || question.explanation,
      options: tr.options && tr.options.length > 0 ? tr.options : question.options,
    }
  }

  return { tq }
}
