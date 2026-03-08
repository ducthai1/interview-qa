/* Per-question translation entry — only text fields that need translation */
export interface QuestionTranslation {
  question: string
  explanation: string
  options?: string[]
  /** Translated string answer for code-output/code-write types (code stays in English) */
  answer?: string
}

/* Map of question ID → translated content */
export type QuestionTranslationMap = Record<string, QuestionTranslation>
