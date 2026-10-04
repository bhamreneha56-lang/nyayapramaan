const fs = require('fs');
const path = require('path');
const dir = 'src/components/screens';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Replace white backgrounds with semi-transparent ones
  content = content.replace(/bg-white /g, 'bg-white/85 backdrop-blur-md ');
  content = content.replace(/bg-slate-50 /g, 'bg-white/60 backdrop-blur-sm ');
  
  // The dark panels (e.g. bg-slate-900)
  content = content.replace(/bg-slate-900 /g, 'bg-slate-900/90 backdrop-blur-md ');

  fs.writeFileSync(path.join(dir, file), content, 'utf8');
}

console.log("Updated screens for glassmorphism.");
