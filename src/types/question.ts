export type Role = 'frontend' | 'ba' | 'brse'

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
  | 'real-world'
  /* BA topics */
  | 'requirements-engineering'
  | 'user-story-use-case'
  | 'business-process-bpmn'
  | 'stakeholder-management'
  | 'agile-scrum'
  | 'data-analysis-sql'
  | 'wireframe-prototype'
  | 'documentation'
  | 'domain-knowledge'
  | 'communication-negotiation'
  | 'uat-quality'
  | 'system-integration'
  /* BrSE topics */
  | 'japanese-business-comm'
  | 'technical-translation'
  | 'offshore-process'
  | 'requirements-spec'
  | 'brse-project-management'
  | 'quality-management'
  | 'japanese-culture'
  | 'estimation-planning'
  | 'client-reporting'
  | 'team-management'
  | 'brse-system-architecture'
  | 'risk-management'

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
  /* Per-option explanations for MCQ: why each wrong option is wrong */
  optionExplanations?: string[]
  /* Hints shown before revealing full answer (progressive disclosure) */
  hints?: string[]
  /* IDs of related questions covering similar concepts */
  relatedIds?: string[]
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

/* Individual attempt record for full history */
export interface AttemptRecord {
  correct: boolean
  timestamp: number
  timeSpent: number // milliseconds spent on the question
}

/* Confidence level before answering */
export type ConfidenceLevel = 'sure' | 'maybe' | 'guessing'

/* User progress stored in localStorage */
export interface UserProgress {
  answered: Record<string, { correct: boolean; timestamp: number; attempts: number; timeSpent?: number; confidence?: ConfidenceLevel }>
  bookmarked: string[]
  /* Spaced repetition state per question */
  reviews?: Record<string, ReviewEntry>
  /* Learning path progress: pathId → last completed step index */
  pathProgress?: Record<string, number>
  /* Challenge personal bests per preset */
  challengeBests?: Record<string, ChallengeBest>
  /* Daily activity log: 'YYYY-MM-DD' → count of answers */
  dailyActivity?: Record<string, number>
  /* Full attempt history per question */
  attemptHistory?: Record<string, AttemptRecord[]>
  /* Streak tracking */
  streak?: { current: number; longest: number; lastActiveDate: string }
  /* Daily goal target */
  dailyGoal?: number
  /* Flagged questions (quality issues reported by user) */
  flaggedQuestions?: string[]
  /* Personal notes per question */
  notes?: Record<string, string>
  /* Unlocked achievement IDs with timestamp */
  achievements?: Record<string, number>
}

/* AI provider configuration (stored in localStorage separately) */
export interface AIConfig {
  provider: 'groq' | 'gemini' | 'openai' | 'anthropic' | 'none'
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

/* Achievement definition */
export interface AchievementDef {
  id: string
  icon: string
  labelKey: string       // i18n key for name
  descriptionKey: string // i18n key for description
  check: (progress: UserProgress, totalQuestions: number) => boolean
}
