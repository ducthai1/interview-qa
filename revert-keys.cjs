const fs = require('fs');
const path = require('path');

function revert(text) {
  // Regex to match the swallowed keys:
  // 'a11y-032\': {\n    question:\n      \'
  return text.replace(/'([a-zA-Z0-9-]+)\\':\s*\{\\n\s*([a-z]+):(\\n\s*|\s*)\\'/g, "'$1': {\n    $2:$3'");
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
        console.log('Reverted keys in', full);
      }
    }
  }
}

walk('src/i18n/questions');
console.log('Revert done!');
