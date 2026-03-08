import fs from 'fs';
import path from 'path';

const dataDir = './src/data';
const i18nDir = './src/i18n/questions/vi';

// Helper to extract IDs from a file using basic regex
function extractIds(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(/id:\s*'([^']+)'/g)];
  return matches.map(m => m[1]);
}

function extractI18nIds(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Look for keys like 'q-123': {
  const matches = [...content.matchAll(/'([^']+)'\s*:/g)];
  return matches.map(m => m[1]);
}

const dataFiles = fs.readdirSync(dataDir).filter(f => f.startsWith('questions-') && f.endsWith('.ts'));
const i18nFiles = fs.readdirSync(i18nDir).filter(f => f.endsWith('.ts'));

let allDataIds = [];
dataFiles.forEach(file => {
  allDataIds.push(...extractIds(path.join(dataDir, file)));
});

let allI18nIds = [];
i18nFiles.forEach(file => {
  allI18nIds.push(...extractI18nIds(path.join(i18nDir, file)));
});

const missingIds = allDataIds.filter(id => !allI18nIds.includes(id));
const i18nSet = new Set(allI18nIds);
const reallyMissing = allDataIds.filter(id => !i18nSet.has(id));

console.log(`Total questions: ${allDataIds.length}`);
console.log(`Total translations: ${i18nSet.size}`);
console.log(`Missing translations: ${reallyMissing.length}`);

// Group missing by file
if (reallyMissing.length > 0) {
  const missingByFile = {};
  dataFiles.forEach(file => {
    const ids = extractIds(path.join(dataDir, file));
    const missing = ids.filter(id => !i18nSet.has(id));
    if (missing.length > 0) {
      missingByFile[file] = missing;
    }
  });
  console.log('Missing by file:', Object.keys(missingByFile).map(k => `${k}: ${missingByFile[k].length}`));
}
