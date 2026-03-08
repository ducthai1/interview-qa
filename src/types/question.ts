export type QuestionType = 'mcq' | 'code-output' | 'debug' | 'code-write' | 'system-design' | 'true-false'

export type Difficulty = 'junior' | 'mid' | 'senior' | 'lead'

export type Topic =
  | 'html'
  | 'css'
  | 'browser-dom'
  | 'coding-challenges'
  | 'api-networking'
  | 'javascript-core'
  | 'typescript'
  | 'react-fundamentals'
  | 'react-hooks'
  | 'react-advanced'
  | 'state-management'
  | 'nextjs-frameworks'
  | 'css-styling'
  | 'testing'
  | 'build-tools'
  | 'performance'
  | 'system-design-fe'
  | 'ai-frontend'
  | 'accessibility'
  | 'security'

export interface Question {
  id: string
  topic: Topic
  difficulty: Difficulty
  type: QuestionType
  question: string
  code?: string
  options?: string[]
  answer: number | string | boolean
  solutionCode?: string
  explanation: string
  references?: string[]
  tags: string[]
  year: number
}

/* Topic metadata for display */
export interface TopicInfo {
  id: Topic
  label: string
  icon: string
  description: string
  color: string
}

/* Spaced repetition data per question */
export interface ReviewEntry {
  box: number          // Leitner box 1-5
  nextReviewAt: number // timestamp when due for review
}

/* Challenge personal best record */
export interface ChallengeBest {
  score: number
  accuracy: number
  date: number
}

/* User progress stored in localStorage */
export interface UserProgress {
  answered: Record<string, { correct: boolean; timestamp: number; attempts: number }>
  bookmarked: string[]
  /* Spaced repetition state per question */
  reviews?: Record<string, ReviewEntry>
  /* Learning path progress: pathId → last completed step index */
  pathProgress?: Record<string, number>
  /* Challenge personal bests per preset */
  challengeBests?: Record<string, ChallengeBest>
  /* Daily activity log: 'YYYY-MM-DD' → count of answers */
  dailyActivity?: Record<string, number>
}

/* AI provider configuration (stored in localStorage separately) */
export interface AIConfig {
  provider: 'gemini' | 'openai' | 'anthropic' | 'none'
  apiKey: string
  dailyUsage: number
  dailyLimit: number
  lastResetDate: string
}

/* Learning path definition */
export interface LearningPath {
  id: string
  label: string
  labelVi: string
  description: string
  descriptionVi: string
  icon: string
  color: string
  steps: LearningPathStep[]
}

export interface LearningPathStep {
  topic: Topic
  requiredCompletion: number // 0-1, fraction of topic questions to complete before next unlocks
}
