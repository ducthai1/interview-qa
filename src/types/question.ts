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

/* User progress stored in localStorage */
export interface UserProgress {
  answered: Record<string, { correct: boolean; timestamp: number; attempts: number }>
  bookmarked: string[]
}
