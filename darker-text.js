const fs = require('fs');
const path = require('path');

const replacements = {
  'text-slate-500': 'text-slate-800',
  'text-slate-600': 'text-slate-900',
  'text-slate-700': 'text-black',
  'text-slate-800': 'text-black',
  'text-slate-400': 'text-slate-800',
  'text-slate-300': 'text-slate-900',
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        processDir(fullPath);
      }
    } else {
      if (['.tsx', '.ts', '.html', '.css'].some(ext => file.endsWith(ext))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let original = content;
        
        if (file === 'package.json' || file === 'package-lock.json') continue;

        for (const [key, value] of Object.entries(replacements)) {
          // simple global replace
          content = content.split(key).join(value);
        }

        if (content !== original) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log('Updated', fullPath);
        }
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
processDir(__dirname);
