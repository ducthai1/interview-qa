/* Per-question translation entry — only text fields that need translation */
export interface QuestionTranslation {
  question: string
  explanation: string
  options?: string[]
  /** Translated answer (string for text answers, number for MCQ indices, boolean for T/F) */
  answer?: string | number | boolean
}

/* Map of question ID → translated content */
export type QuestionTranslationMap = Record<string, QuestionTranslation>
