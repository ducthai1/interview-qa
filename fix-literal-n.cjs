const fs = require('fs');
const path = require('path');

function revert(text) {
  // We need to replace `question:\n      '` (where \n is literal \ and n)
  // with a physical newline!
  return text.replace(/([a-z]+):\\n(\s*)'/g, "$1:\n$2'");
}

function walk(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const f of files) {
    const full = path.join(dirPath, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.ts')) {
      const orig = fs.readFileSync(full, 'utf-8');
      const fixed = revert(orig);
      if (orig !== fixed) {
        fs.writeFileSync(full, fixed, 'utf-8');
        console.log('Fixed literal \\n in', full);
      }
    }
  }
}

walk('src/i18n/questions');
console.log('Fix done!');
