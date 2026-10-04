const fs = require('fs');
const path = require('path');

const replacements = {
  '#f8fafc text-slate-900': 'bg-slate-50 text-slate-900',
  '#f8fafc text-[11px]': 'bg-slate-50 text-[11px]',
  'p-4 md:p-8 #f8fafc': 'p-4 md:p-8 bg-slate-50',
  'bg-[#080d1a]': 'bg-white',
  'bg-[#10172e]': 'bg-slate-100',
  'bg-[#080d19]': 'bg-white',
  'bg-[#05070f]': 'bg-white',
  'bg-[#0c1224]': 'bg-white',
  'bg-[#0b1020]': 'bg-white',
  'bg-[#12192e]': 'bg-white',
  'bg-[#0f172a]': 'bg-white',
  'bg-[#060913]': 'bg-slate-50',
  'text-slate-100': 'text-slate-900',
  'text-slate-200': 'text-slate-800',
  'text-slate-300': 'text-slate-700',
  'text-slate-400': 'text-slate-600',
  'text-white': 'text-slate-900',
  'border-white/10': 'border-slate-200',
  'border-white/5': 'border-slate-200',
  'border-amber-500/20': 'border-amber-200',
  'border-amber-500/25': 'border-amber-200',
  'border-amber-500/30': 'border-amber-200',
  'border-amber-500/40': 'border-amber-300',
  'bg-white/5': 'bg-slate-100',
  'hover:bg-white/10': 'hover:bg-slate-200',
  'bg-[#060913]': 'bg-slate-50',
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
