import fs from 'fs'
import path from 'path'
import translate from 'google-translate-api-x'

// --- HELPER: Delay for rate limits ---
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

// --- HELPER: Translation function with RETRY ---
async function translateField(text: string, to: string, retries = 3) {
  if (!text) return ''
  for (let i = 0; i < retries; i++) {
    try {
      const res = await translate(text, { to })
      return res.text
    } catch (err: any) {
      const errMsg = err?.message || String(err)
      if (errMsg.includes('429') || errMsg.includes('Too Many Requests')) {
        const wait = (i + 1) * 5000
        console.warn(`  [!] Rate limited. Waiting ${wait}ms before retry ${i + 1}/${retries}...`)
        await delay(wait)
      } else {
        console.error(`  [!] Translation failed for: "${text.substring(0, 50)}..." to ${to}. Error: ${errMsg}`)
        if (i === retries - 1) return text // Final fallback
        await delay(2000)
      }
    }
  }
  return text
}

// --- HELPER: Clean for TS strings (No backticks) ---
function clean(str: string) {
  if (typeof str !== 'string') return String(str)
  // Ensure we don't have backticks which we use as a health indicator
  // and which might cause issues in our single-quote / double-quote mixing
  return str.replace(/`/g, "'")
}

// --- CONFIG ---
const BA_DIR = './src/data/ba'
const BRSE_DIR = './src/data/brse'
const OUT_BASE = './src/i18n/questions'

const LANGUAGES = [
  { code: 'vi', label: 'Vietnamese' },
  { code: 'ja', label: 'Japanese', outDir: 'jp' },
  { code: 'en', label: 'English' }
]

const targetLang = process.argv[2] // e.g. 'vi', 'ja', 'en'
const targetRole = process.argv[3] // e.g. 'ba', 'brse'
const customDelay = process.argv[4] ? parseInt(process.argv[4]) : 5000

async function processDirectory(dirPath: string, roleName: string) {
  const files = fs.readdirSync(dirPath).filter(f => f.startsWith('questions-') && f.endsWith('.ts'))
  const allQuestions: any[] = []

  for (const file of files) {
    const content = fs.readFileSync(path.join(dirPath, file), 'utf-8')
    const match = content.match(/\[([\s\S]*)\]/m)
    if (!match) continue

    const itemsContent = match[1]
    
    // Improved block extraction to handle comments between objects
    const entryMatches = itemsContent.matchAll(/\{[\s\S]*?id:\s*['"](.*?)['"][\s\S]*?\}/g)
    
    for (const entryMatch of entryMatches) {
      let block = entryMatch[0].trim()

      const id = (block.match(/id:\s*'([^']*)'/) || [])[1]
      const question = (block.match(/question:\s*['"`]([\s\S]*?)['"`],/) || [])[1]
      const explanation = (block.match(/explanation:\s*['"`]([\s\S]*?)['"`],/) || [])[1]
      
      const optionsMatch = block.match(/options:\s*\[([\s\S]*?)\],/)
      const options = optionsMatch ? optionsMatch[1].split(',').map(s => s.trim().replace(/^['"`]|['"`]$/g, '')) : null
      
      const answerMatch = block.match(/answer:\s*([\s\S]*?),/)
      let answer: any = answerMatch ? answerMatch[1].trim() : ''
      if (answer.startsWith("'") || answer.startsWith('"')) answer = answer.replace(/^['"`]|['"`]$/g, '')
      else if (answer === 'true') answer = true
      else if (answer === 'false') answer = false
      else if (!isNaN(Number(answer))) answer = Number(answer)

      if (id && question) {
        allQuestions.push({ id, question, explanation, options, answer, sourceLang: (roleName === 'ba' ? 'en' : 'ja') })
      }
    }
  }
  return allQuestions
}

async function run() {
  console.log('--- Starting REMASTERED Massive Translation ---')
  
  const baQuestions = await processDirectory(BA_DIR, 'ba')
  const brseQuestions = await processDirectory(BRSE_DIR, 'brse')
  
  console.log(`Loaded ${baQuestions.length} BA and ${brseQuestions.length} BrSE questions.`)

  const roles = [
    { name: 'ba', data: baQuestions },
    { name: 'brse', data: brseQuestions }
  ]

  for (const lang of LANGUAGES) {
    if (targetLang && lang.code !== targetLang) continue

    const targetDir = path.join(OUT_BASE, lang.outDir || lang.code)
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true })

    for (const role of roles) {
      if (targetRole && role.name !== targetRole) continue
      console.log(`\n>>> Role: ${role.name.toUpperCase()} -> ${lang.label}`)
      const outFile = path.join(targetDir, `${role.name}.ts`)
      
      // LOAD EXISTING INTO A MAP
      let existingMap: Record<string, any> = {}
      if (fs.existsSync(outFile)) {
        const existingContent = fs.readFileSync(outFile, 'utf-8')
        const entryRegex = /'([^']*)':\s*{([\s\S]*?)},\n/g
        let match
        while ((match = entryRegex.exec(existingContent)) !== null) {
          const id = match[1]
          const body = match[2].trim()
          
          // HEALTH CHECK: Ensure body contains necessary fields and NO backticks (which break our single-quote format)
          const isHealthy = body.includes('question:') && body.includes('explanation:') && (body.includes('answer:') || body.includes('options:')) && !body.includes('`')
          if (isHealthy) {
            existingMap[id] = body
          } else {
            console.log(`  [!] Flagged unhealthy entry: ${id} (Missing fields or contains backticks). Will re-translate.`)
          }
        }
      }

      console.log(`  Found ${Object.keys(existingMap).length} existing translations in ${outFile}`)

      for (let i = 0; i < role.data.length; i++) {
        const q = role.data[i]
        
        if (existingMap[q.id]) {
          continue
        }

        process.stdout.write(`  [${i+1}/${role.data.length}] Translating ${q.id}... `)
        
        // ... (translation logic remains same)
        let tQ, tExp, tOptionsStr = ''
        const isSameLang = (q.sourceLang === lang.code)
        
        tQ = isSameLang ? q.question : await translateField(q.question, lang.code)
        tExp = isSameLang ? q.explanation : await translateField(q.explanation, lang.code)
        
        let finalAns: any = ''
        if (typeof q.answer === 'string') {
          finalAns = isSameLang ? q.answer : await translateField(q.answer, lang.code)
        } else if (typeof q.answer === 'boolean') {
          if (lang.code === 'vi') finalAns = q.answer ? 'Đúng' : 'Sai'
          else if (lang.code === 'ja') finalAns = q.answer ? '真' : '偽'
          else finalAns = q.answer ? 'True' : 'False'
        } else if (typeof q.answer === 'number') {
          finalAns = q.answer
        }

        if (q.options) {
          const tOptions = isSameLang ? q.options : await Promise.all(q.options.map((opt: string) => translateField(opt, lang.code)))
          tOptionsStr = `\n    options: [\n      ${tOptions.map((o: string) => JSON.stringify(clean(o))).join(',\n      ')}\n    ],`
        }

        // Handle number, boolean, or string answers
        let answerStr = ''
        if (typeof finalAns === 'number' || typeof finalAns === 'boolean') {
          answerStr = `\n    answer: ${finalAns},`
        } else if (finalAns !== undefined && finalAns !== null) {
          answerStr = `\n    answer: ${JSON.stringify(clean(finalAns))},`
        }

        const body = `question: ${JSON.stringify(clean(tQ))},${tOptionsStr}${answerStr}\n    explanation: ${JSON.stringify(clean(tExp))},`
        existingMap[q.id] = body
        
        // --- INCREMENTAL WRITE ---
        let incrementalContent = `import type { QuestionTranslationMap } from '../types'\n\nexport const ${role.name}${lang.code === 'ja' ? 'Jp' : lang.code.charAt(0).toUpperCase() + lang.code.slice(1)}: QuestionTranslationMap = {\n`
        const sortedIds = Object.keys(existingMap).sort()
        for (const id of sortedIds) {
          const rawBody = existingMap[id].trim()
          // Ensure proper indentation for all lines in the component
          const formattedBody = rawBody.split('\n').map((line: string, idx: number) => {
            return (idx === 0 ? '' : '    ') + line.trim()
          }).join('\n')
          
          incrementalContent += `  '${id}': {\n    ${formattedBody}\n  },\n`
        }
        incrementalContent += `}\n`
        fs.writeFileSync(outFile, incrementalContent)

        process.stdout.write(`Done\n`)
        if (!isSameLang) {
          // custom delay + up to 3s jitter
          const jitter = Math.floor(Math.random() * 3000)
          await delay(customDelay + jitter) 
        }
      }
      console.log(`✅ Finalized ${outFile} (${Object.keys(existingMap).length} items)`)
    }
  }
}

run().catch(err => {
  console.error('Fatal Error:', err)
  process.exit(1)
})
