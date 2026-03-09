/* Central data index - loads questions by role */
import type { Question, Role, TopicInfo } from '../types'
import { topics as frontendTopics } from './topics'
import { baTopics } from './ba/topics'
import { brseTopics } from './brse/topics'

/* Cache per role to avoid re-loading */
const cache: Partial<Record<Role, Question[]>> = {}
const loadingPromises: Partial<Record<Role, Promise<Question[]>>> = {}

/* Dynamically import question modules matching a glob pattern */
async function loadGlob(modules: Record<string, () => Promise<Record<string, Question[]>>>): Promise<Question[]> {
  const questions: Question[] = []
  const loaded = await Promise.all(Object.values(modules).map((load) => load()))
  for (const mod of loaded) {
    for (const exported of Object.values(mod)) {
      if (Array.isArray(exported)) questions.push(...exported)
    }
  }
  return questions
}

/* Load questions for a specific role */
export async function getQuestionsByRole(role: Role): Promise<Question[]> {
  if (cache[role]) return cache[role]!
  if (loadingPromises[role]) return loadingPromises[role]!

  let promise: Promise<Question[]>

  switch (role) {
    case 'frontend':
      promise = loadGlob(
        import.meta.glob('./questions-*.ts', { eager: false }) as Record<string, () => Promise<Record<string, Question[]>>>
      )
      break
    case 'ba':
      promise = loadGlob(
        import.meta.glob('./ba/questions-*.ts', { eager: false }) as Record<string, () => Promise<Record<string, Question[]>>>
      )
      break
    case 'brse':
      promise = loadGlob(
        import.meta.glob('./brse/questions-*.ts', { eager: false }) as Record<string, () => Promise<Record<string, Question[]>>>
      )
      break
  }

  loadingPromises[role] = promise.then((qs) => {
    cache[role] = qs
    delete loadingPromises[role]
    return qs
  })

  return loadingPromises[role]!
}

/* Backwards compatibility — loads frontend questions */
export async function getAllQuestions(): Promise<Question[]> {
  return getQuestionsByRole('frontend')
}

/* Get topics for a specific role */
export function getTopicsByRole(role: Role): TopicInfo[] {
  switch (role) {
    case 'frontend': return frontendTopics
    case 'ba': return baTopics
    case 'brse': return brseTopics
  }
}
