import type { Question, Topic, Difficulty, QuestionType } from '../types'

export interface FilterOptions {
  topics: Topic[]
  difficulties: Difficulty[]
  types: QuestionType[]
  search: string
}

/* Filter questions by multiple criteria */
export function filterQuestions(questions: Question[], filters: FilterOptions): Question[] {
  return questions.filter((q) => {
    if (filters.topics.length > 0 && !filters.topics.includes(q.topic)) return false
    if (filters.difficulties.length > 0 && !filters.difficulties.includes(q.difficulty)) return false
    if (filters.types.length > 0 && !filters.types.includes(q.type)) return false
    if (filters.search) {
      const term = filters.search.toLowerCase()
      const searchable = `${q.question} ${q.tags.join(' ')} ${q.explanation}`.toLowerCase()
      if (!searchable.includes(term)) return false
    }
    return true
  })
}

/* Shuffle array using Fisher-Yates */
export function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/* Pick N random questions for mock interview */
export function pickRandomQuestions(questions: Question[], count: number): Question[] {
  return shuffleArray(questions).slice(0, count)
}

/* Get stats for a set of questions */
export function getQuestionStats(questions: Question[]) {
  const byTopic: Record<string, number> = {}
  const byDifficulty: Record<string, number> = {}
  const byType: Record<string, number> = {}

  for (const q of questions) {
    byTopic[q.topic] = (byTopic[q.topic] || 0) + 1
    byDifficulty[q.difficulty] = (byDifficulty[q.difficulty] || 0) + 1
    byType[q.type] = (byType[q.type] || 0) + 1
  }

  return { total: questions.length, byTopic, byDifficulty, byType }
}
