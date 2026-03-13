const fs = require('fs');

function fixSyntax(text) {
  // Fix double backslashes before quotes
  let fixed = text.replace(/\\\\'/g, "\\'");
  
  // Fix literal newlines in single quoted strings
  let result = '';
  let inString = false;
  for (let i = 0; i < fixed.length; i++) {
    const char = fixed[i];
    if (!inString) {
      if (char === "'" && (fixed.slice(Math.max(0, i-15), i).match(/(question|explanation|answer):\s*$/) || fixed.slice(Math.max(0, i-10), i).match(/(\[|,)\s*$/))) {
        inString = true;
      }
      result += char;
    } else {
      if (char === "'") {
        if (fixed[i-1] === '\\') {
          result += char;
        } else {
          const next = fixed.slice(i+1, i+15).trim();
          if (next.startsWith(',') || next.startsWith('}') || next.startsWith(']') || next === '') {
            inString = false;
            result += char;
          } else {
            result += "\\'"; // escape unescaped quotes!
          }
        }
      } else if (char === '\n') {
        result += '\\n';
      } else if (char === '\r') {
        // ignore
      } else {
        result += char;
      }
    }
  }
  return result;
}

const dir = 'src/i18n/questions';
const glob = require('fs').readdirSync;
const path = require('path');
function walk(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const f of files) {
    const full = path.join(dirPath, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.ts')) {
      const orig = fs.readFileSync(full, 'utf-8');
      const fixed = fixSyntax(orig);
      if (orig !== fixed) {
        fs.writeFileSync(full, fixed, 'utf-8');
        console.log('Fixed', full);
      }
    }
  }
}

walk(dir);
console.log('Syntax fix completed!');
