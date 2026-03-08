import fs from 'fs';
import path from 'path';

const dataDir = './src/data';

function analyzeFile(file) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const ids = [...content.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);
  const topics = [...content.matchAll(/topic:\s*'([^']+)'/g)].map(m => m[1]);
  const topicSet = new Set(topics);
  console.log(`${file}: ${ids.length} questions. Topics: ${[...topicSet].join(', ')}`);
}

['questions-api-testing-practical.ts', 'questions-architecture-practical.ts', 'questions-frontend-practical.ts', 'questions-react-practical.ts'].forEach(analyzeFile);
