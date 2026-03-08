import fs from 'fs';
import path from 'path';

const dataFile = './src/data/questions-react-practical.ts';
const content = fs.readFileSync(dataFile, 'utf8');

// VERY simple extraction logic just to see the shape
const ids = [...content.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);
console.log(`Found ${ids.length} questions in react-practical.ts`);
