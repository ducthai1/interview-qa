import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { loadQuestionTranslations } from '../i18n/questions'
import type { QuestionTranslationMap } from '../i18n/questions/types'
import type { Question } from '../types'

let cachedMap: QuestionTranslationMap = {}
let loaded = false

/**
 * Returns a function that resolves translated question content.
 * Falls back to original English when no translation exists.
 */
export function useQuestionTranslation() {
  const { i18n } = useTranslation()
  const [map, setMap] = useState<QuestionTranslationMap>(cachedMap)
  const isVi = i18n.language === 'vi'

  useEffect(() => {
    if (isVi && !loaded) {
      loadQuestionTranslations().then((m) => {
        cachedMap = m
        loaded = true
        setMap(m)
      })
    }
  }, [isVi])

  /** Get translated question text fields, falling back to originals */
  function tq(question: Question) {
    if (!isVi) return question

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
