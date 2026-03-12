import fs from 'fs'
import path from 'path'
import translate from 'translate-google'

import { agileScrumQuestions } from './src/data/ba/questions-agile-scrum.js'
import { requirementsEngineeringQuestions } from './src/data/ba/questions-requirements-engineering.js'
import { domainKnowledgeQuestions } from './src/data/ba/questions-domain-knowledge.js'
import { documentationQuestions } from './src/data/ba/questions-documentation.js'
import { userStoryUseCaseQuestions } from './src/data/ba/questions-user-story-use-case.js'
import { businessProcessBpmnQuestions } from './src/data/ba/questions-business-process-bpmn.js'
import { dataAnalysisSqlQuestions } from './src/data/ba/questions-data-analysis-sql.js'
import { wireframePrototypeQuestions } from './src/data/ba/questions-wireframe-prototype.js'
import { stakeholderManagementQuestions } from './src/data/ba/questions-stakeholder-management.js'
import { communicationNegotiationQuestions } from './src/data/ba/questions-communication-negotiation.js'
import { systemIntegrationQuestions } from './src/data/ba/questions-system-integration.js'
import { uatQualityQuestions } from './src/data/ba/questions-uat-quality.js'

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

const baQuestions: Question[] = [
  ...agileScrumQuestions,
  ...requirementsEngineeringQuestions,
  ...domainKnowledgeQuestions,
  ...documentationQuestions,
  ...userStoryUseCaseQuestions,
  ...businessProcessBpmnQuestions,
  ...dataAnalysisSqlQuestions,
  ...wireframePrototypeQuestions,
  ...stakeholderManagementQuestions,
  ...communicationNegotiationQuestions,
  ...systemIntegrationQuestions,
  ...uatQualityQuestions,
]

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

const filesToFix = [
  { moduleName: 'baJp', data: baQuestions, outName: 'ba.ts' },
  { moduleName: 'brseJp', data: brseQuestions, outName: 'brse.ts' },
]

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

async function run() {
  for (const fileObj of filesToFix) {
    if (!fileObj.data || fileObj.data.length === 0) {
      console.log(`Skipping ${fileObj.outName} (no data)`);
      continue;
    }

    console.log(`Translating ${fileObj.outName}... (${fileObj.data.length} questions)`)

    let outContent = `import type { QuestionTranslationMap } from '../types'\n\nexport const ${fileObj.moduleName}: QuestionTranslationMap = {\n`

    const CONCURRENCY_LIMIT = 5;
    let completedCount = 0;
    
    // Process in batches
    for (let i = 0; i < fileObj.data.length; i += CONCURRENCY_LIMIT) {
      const batch = fileObj.data.slice(i, i + CONCURRENCY_LIMIT);
      
      const batchPromises = batch.map(async (q: Question) => {
        try {
          const tQ = await translate(q.question, { to: 'ja' })

          let tAns = ''
          if (typeof q.answer === 'string') {
            tAns = await translate(q.answer, { to: 'ja' })
          } else {
            tAns = typeof q.answer === 'boolean' ? (q.answer ? '真' : '偽') : String(q.answer)
          }

          const tExp = await translate(q.explanation, { to: 'ja' })

          let tOptionsStr = '';
          if (q.options) {
              const tOptions = await Promise.all(q.options.map((opt: string) => translate(opt, { to: 'ja' })));
              tOptionsStr = `\n    options: [\n      ${tOptions.map((o: any) => `'${o.replace(/'/g, "\\'").replace(/\\n/g, '\\\\n')}'`).join(',\n      ')}\n    ],`
          }

          // Escape quotes
          const safeQ = tQ.replace(/'/g, "\\'").replace(/\\n/g, '\\\\n')
          const safeA = tAns.replace(/'/g, "\\'").replace(/\\n/g, '\\\\n')
          const safeE = tExp.replace(/'/g, "\\'").replace(/\\n/g, '\\\\n')

          return `  '${q.id}': {\n    question: '${safeQ}',${tOptionsStr}\n    answer: ${typeof q.answer === 'boolean' || typeof q.answer === 'number' ? q.answer : `'${safeA}'`},\n    explanation: '${safeE}',\n  },\n`
        } catch (err: any) {
          console.error(`  [!] Error translating ${q.id}:`, err.message)
          // Fallback
          const safeQ = q.question.replace(/'/g, "\\'").replace(/\\n/g, '\\\\n')
          const safeA = (typeof q.answer === 'string' ? q.answer : String(q.answer)).replace(/'/g, "\\'").replace(/\\n/g, '\\\\n')
          const safeE = q.explanation.replace(/'/g, "\\'").replace(/\\n/g, '\\\\n')
          
          let safeOptionsStr = '';
          if (q.options) {
              safeOptionsStr = `\n    options: [\n      ${q.options.map(o => `'${o.replace(/'/g, "\\'").replace(/\\n/g, '\\\\n')}'`).join(',\n      ')}\n    ],`
          }

          return `  '${q.id}': {\n    question: '${safeQ}',${safeOptionsStr}\n    answer: ${typeof q.answer === 'boolean' || typeof q.answer === 'number' ? q.answer : `'${safeA}'`},\n    explanation: '${safeE}',\n  },\n`
        }
      });
      
      const results = await Promise.all(batchPromises);
      outContent += results.join('');
      
      completedCount += batch.length;
      console.log(`  Progress: ${completedCount}/${fileObj.data.length}`);
      
      // Delay to respect rate limits even with concurrency
      await delay(500);
    }

    outContent += `}\n`
    fs.writeFileSync(path.join('./src/i18n/questions/jp', fileObj.outName), outContent)
    console.log(`✅ Completed ${fileObj.outName}`)
  }
}

run().catch(console.error)
