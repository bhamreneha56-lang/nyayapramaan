const fs = require('fs');
const path = require('path');

const replacements = {
  'bg-\\[#060913\\]': 'bg-slate-50',
  'bg-\\[#070a14\\]': 'bg-slate-50',
  'bg-\\[#080d1a\\]': 'bg-white',
  'bg-\\[#10172e\\]': 'bg-white',
  'bg-\\[#080d19\\]': 'bg-slate-100',
  'bg-\\[#0c1224\\]': 'bg-white',
  'bg-\\[#0b1020\\]': 'bg-white',
  'bg-\\[#12192e\\]': 'bg-white',
  'bg-\\[#05070f\\]': 'bg-slate-100',
  'bg-\\[#0f172a\\]': 'bg-white',
  'text-slate-100': 'text-slate-900',
  'text-slate-200': 'text-slate-800',
  'text-slate-300': 'text-slate-700',
  'text-slate-400': 'text-slate-600',
  'text-white': 'text-slate-900',
  'border-white/10': 'border-slate-200',
  'border-white/5': 'border-slate-200',
  'bg-white/5': 'bg-slate-100',
  'hover:bg-white/10': 'hover:bg-slate-200',
  'bg-[#060913]': '#f8fafc',
  '#000': '#fff',
  '#fff': '#000',
  '#ffffff': '#000000',
  '#070a14': '#f8fafc',
  'color: #fff': 'color: #000',
  'color: #f8fafc': 'color: #0f172a',
  'bg-slate-950': 'bg-slate-100',
  'text-slate-950': 'text-slate-50'
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
        
        // Skip package-lock.json and package.json just in case
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
processDir(__dirname); // for html and css files

