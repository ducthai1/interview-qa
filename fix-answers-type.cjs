const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all TS files
const files = execSync('find src/i18n/questions -name "*.ts"').toString().split('\n').filter(Boolean);
let changedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  // Replace `answer: <number>,` with `answer: '<number>',`
  const newContent = content.replace(/answer:\s*(\d+)\s*,/g, "answer: '$1',");
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf-8');
    changedCount++;
    console.log('Fixed', file);
  }
}
console.log('Total files fixed:', changedCount);
