import fs from 'fs'
import path from 'path'
import translate from 'translate-google'

// Workaround for import meta glob (we just import directly for the 4 targeted files)
import { apiTestingPracticalQuestions } from './src/data/questions-api-testing-practical.js'
import { architecturePracticalQuestions } from './src/data/questions-architecture-practical.js'
import { frontendPracticalQuestions } from './src/data/questions-frontend-practical.js'
import { reactPracticalQuestions } from './src/data/questions-react-practical.js'

const filesToFix = [
  { moduleName: 'apiTestingPracticalQuestions', data: apiTestingPracticalQuestions, outName: 'api-testing-practical.ts' },
  { moduleName: 'architecturePracticalQuestions', data: architecturePracticalQuestions, outName: 'architecture-practical.ts' },
  { moduleName: 'frontendPracticalQuestions', data: frontendPracticalQuestions, outName: 'frontend-practical.ts' },
  { moduleName: 'reactPracticalQuestions', data: reactPracticalQuestions, outName: 'react-practical.ts' }
]

const delay = (ms) => new Promise(res => setTimeout(res, ms))

async function run() {
  for (const fileObj of filesToFix) {
    console.log(`Translating ${fileObj.outName}... (${fileObj.data.length} questions)`)
    
    let outContent = `import type { QuestionTranslationMap } from '../types'\n\nexport const ${fileObj.moduleName.replace('Questions', 'Vi')}: QuestionTranslationMap = {\n`

    for (let i = 0; i < fileObj.data.length; i++) {
      const q = fileObj.data[i]
      console.log(`  Progress: ${i + 1}/${fileObj.data.length} (${q.id})`)
      
      try {
        const tQ = await translate(q.question, { to: 'vi' })
        
        let tAns = ''
        if (typeof q.answer === 'string') {
          tAns = await translate(q.answer, { to: 'vi' })
        } else {
          tAns = typeof q.answer === 'boolean' ? (q.answer ? "Đúng" : "Sai") : String(q.answer)
        }
        
        const tExp = await translate(q.explanation, { to: 'vi' })

        // Escape quotes
        const safeQ = tQ.replace(/'/g, "\\'").replace(/\n/g, '\\n')
        const safeA = tAns.replace(/'/g, "\\'").replace(/\n/g, '\\n')
        const safeE = tExp.replace(/'/g, "\\'").replace(/\n/g, '\\n')

        outContent += `
  '${q.id}': {
    question: '${safeQ}',
    answer: '${safeA}',
    explanation: '${safeE}',
  },`
        
        // Sleep to avoid rate limits
        await delay(500)

      } catch (err) {
        console.error(`  [!] Error translating ${q.id}:`, err.message)
        // Fallback to English if translation fails (to prevent breaking)
        const safeQ = q.question.replace(/'/g, "\\'").replace(/\n/g, '\\n')
        const safeA = (typeof q.answer === 'string' ? q.answer : String(q.answer)).replace(/'/g, "\\'").replace(/\n/g, '\\n')
        const safeE = q.explanation.replace(/'/g, "\\'").replace(/\n/g, '\\n')
        outContent += `
  '${q.id}': {
    question: '${safeQ}',
    answer: '${safeA}',
    explanation: '${safeE}',
  },`
      }
    }

    outContent += `\n}\n`
    fs.writeFileSync(path.join('./src/i18n/questions/vi', fileObj.outName), outContent)
    console.log(`✅ Completed ${fileObj.outName}`)
  }
}

run().catch(console.error)
