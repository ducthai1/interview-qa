/* Central data index - imports all question sets and exports combined array */
import type { Question } from '../types'

// These will be populated by the data generation agents
let allQuestions: Question[] = []

/* Dynamically import all question modules */
async function loadQuestions(): Promise<Question[]> {
  const modules = import.meta.glob('./questions-*.ts', { eager: false }) as Record<string, () => Promise<Record<string, Question[]>>>
  const questions: Question[] = []
  const loadedModules = await Promise.all(Object.values(modules).map((load) => load()))
  for (const mod of loadedModules) {
    for (const exported of Object.values(mod)) {
      if (Array.isArray(exported)) {
        questions.push(...exported)
      }
    }
  }
  return questions
}

export async function getAllQuestions(): Promise<Question[]> {
  if (allQuestions.length === 0) {
    allQuestions = await loadQuestions()
  }
  return allQuestions
}
