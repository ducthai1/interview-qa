import fs from 'fs'
import path from 'path'

const BA_DIR = './src/data/ba'
const BRSE_DIR = './src/data/brse'
const I18N_DIR = './src/i18n/questions'

function getIds(dir) {
  const files = fs.readdirSync(dir).filter(f => f.startsWith('questions-') && f.endsWith('.ts'))
  const idSet = new Set()
  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8')
    const matches = content.matchAll(/id:\s*'([^']*)'/g)
    for (const match of matches) {
      idSet.add(match[1])
    }
  }
  return Array.from(idSet)
}

const baIds = getIds(BA_DIR)
const brseIds = getIds(BRSE_DIR)

const langs = ['en', 'jp', 'vi']
const roles = [
  { name: 'ba', ids: baIds },
  { name: 'brse', ids: brseIds }
]

console.log('--- Missing Translations Report ---')

for (const lang of langs) {
  const langDir = lang === 'jp' ? 'jp' : lang
  for (const role of roles) {
    const filePath = path.join(I18N_DIR, langDir, `${role.name}.ts`)
    let existingIds = new Set()
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8')
      const matches = content.matchAll(/'([^']*)':\s*{/g)
      for (const match of matches) {
        existingIds.add(match[1])
      }
    }
    
    const missing = role.ids.filter(id => !existingIds.has(id))
    if (missing.length > 0) {
      console.log(`[${lang.toUpperCase()}] ${role.name}: ${missing.length} missing (${missing.slice(0, 5).join(', ')}...)`)
    } else {
      console.log(`[${lang.toUpperCase()}] ${role.name}: 0 missing (100% covered)`)
    }
  }
}
