import fs from 'fs'
import path from 'path'
import translate from 'google-translate-api-x'

import { japaneseCultureQuestions } from './src/data/brse/questions-japanese-culture.js'
import { japaneseBusinessCommQuestions } from './src/data/brse/questions-japanese-business-comm.js'
import { technicalTranslationQuestions } from './src/data/brse/questions-technical-translation.js'
import { requirementsSpecQuestions } from './src/data/brse/questions-requirements-spec.js'
import { projectManagementQuestions } from './src/data/brse/questions-project-management.js'
import { teamManagementQuestions } from './src/data/brse/questions-team-management.js'
import { customerManagementQuestions } from './src/data/brse/questions-customer-management.js'
import { estimationQuestions } from './src/data/brse/questions-estimation.js'
import { riskManagementQuestions } from './src/data/brse/questions-risk-management.js'
import { qualityTestingQuestions } from './src/data/brse/questions-quality-testing.js'
import { offshoreProcessQuestions } from './src/data/brse/questions-offshore-process.js'
import { itKnowledgeQuestions } from './src/data/brse/questions-it-knowledge.js'

import type { Question } from './src/types'

const brseQuestions: Question[] = [
  ...japaneseCultureQuestions,
  ...japaneseBusinessCommQuestions,
  ...technicalTranslationQuestions,
  ...requirementsSpecQuestions,
  ...projectManagementQuestions,
  ...teamManagementQuestions,
  ...customerManagementQuestions,
  ...estimationQuestions,
  ...riskManagementQuestions,
  ...qualityTestingQuestions,
  ...offshoreProcessQuestions,
  ...itKnowledgeQuestions,
]

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

function escapeStr(s: string): string {
  if (!s) return ''
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')
}

async function translateBatch(texts: string[], targetLang: string, retries = 3): Promise<string[]> {
  if (texts.length === 0) return []
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      // google-translate-api-x natively supports arrays
      const res = await translate(texts, { to: targetLang })
      if (Array.isArray(res)) {
        return res.map(r => r.text)
      } else {
        return [res.text]
      }
    } catch (err: any) {
      console.log(`    [Attempt ${attempt+1}] batch error:`, err.message)
      await delay((attempt + 1) * 3000)
    }
  }
  // fallback to original if completely failed
  return texts
}

async function runLang(targetLang: string, outPath: string) {
  let outContent = `import type { QuestionTranslationMap } from '../types'\n\nexport const brse${targetLang.charAt(0).toUpperCase() + targetLang.slice(1)}: QuestionTranslationMap = {\n`

  const BATCH_SIZE = 10 // process 10 questions at a time
  for (let i = 0; i < brseQuestions.length; i += BATCH_SIZE) {
    const batch = brseQuestions.slice(i, i + BATCH_SIZE)
    console.log(`[${targetLang}] Translating batch ${Math.floor(i/BATCH_SIZE) + 1}/${Math.ceil(brseQuestions.length/BATCH_SIZE)} (Q: ${batch.map(q=>q.id).join(', ')})`)
    
    const stringsToTranslate: string[] = []
    
    for (const q of batch) {
      stringsToTranslate.push(q.question)
      stringsToTranslate.push(q.explanation)
      if (typeof q.answer === 'string') {
         stringsToTranslate.push(q.answer)
      } else {
         stringsToTranslate.push('')
      }
      
      if (q.options) {
         for (const opt of q.options) {
            stringsToTranslate.push(opt)
         }
      }
    }
    
    const translatedStrings = await translateBatch(stringsToTranslate, targetLang)
    
    let stringIdx = 0
    for (const q of batch) {
      const tQ = translatedStrings[stringIdx++] || q.question
      const tExp = translatedStrings[stringIdx++] || q.explanation
      
      let tAnsStr = ''
      if (typeof q.answer === 'string') {
        const tAns = translatedStrings[stringIdx++] || q.answer
        if (tAns) {
          tAnsStr = `\n    answer: \`${escapeStr(tAns)}\`,`
        }
      } else {
        stringIdx++ // consume the empty string placeholder
      }
      
      let tOptionsStr = ''
      if (q.options) {
        const tOpts = []
        for (let o = 0; o < q.options.length; o++) {
          tOpts.push(translatedStrings[stringIdx++] || q.options[o])
        }
        tOptionsStr = `\n    options: [\n      ${tOpts.map(o => `\`${escapeStr(o)}\``).join(',\n      ')}\n    ],`
      }
      
      outContent += `  '${q.id}': {\n    question: \`${escapeStr(tQ)}\`,${tOptionsStr}${tAnsStr}\n    explanation: \`${escapeStr(tExp)}\`,\n  },\n`
    }
    
    fs.writeFileSync(outPath, outContent + `}\n`)
    await delay(1000)
  }
  console.log(`✅ Completed ${targetLang}`)
}

async function run() {
  const dirPathEn = path.dirname('./src/i18n/questions/en/brse.ts')
  if (!fs.existsSync(dirPathEn)) fs.mkdirSync(dirPathEn, { recursive: true })
  
  const dirPathVi = path.dirname('./src/i18n/questions/vi/brse.ts')
  if (!fs.existsSync(dirPathVi)) fs.mkdirSync(dirPathVi, { recursive: true })

  await runLang('en', './src/i18n/questions/en/brse.ts')
  await runLang('vi', './src/i18n/questions/vi/brse.ts')
}

run().catch(console.error)
