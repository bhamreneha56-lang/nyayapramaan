const fs = require('fs');
const path = require('path');
const dir = 'src/components/screens';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Animate inputs
  content = content.replace(/className="w-full text-sm border border-slate-200 rounded p-2 bg-slate-50 text-slate-900/g, 'className="w-full text-sm border border-slate-300 rounded-lg p-2.5 bg-white/70 text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-sm hover:shadow-md');
  
  // Animate selects
  content = content.replace(/className="w-full text-sm border-slate-300 rounded-md p-2 bg-slate-50 text-slate-900 font-medium outline-none"/g, 'className="w-full text-sm border border-slate-300 rounded-lg p-2.5 bg-white/70 text-slate-900 font-medium outline-none transition-all duration-300 focus:ring-2 focus:ring-amber-500 shadow-sm hover:shadow-md cursor-pointer"');
  
  // Animate buttons (general blue/amber)
  content = content.replace(/hover:bg-amber-400/g, 'hover:bg-amber-400 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-amber-500/30');
  content = content.replace(/hover:bg-blue-500/g, 'hover:bg-blue-500 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-blue-500/30');

  // Add subtle stagger animations to cards
  content = content.replace(/className="bg-white\/85 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm"/g, 'className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-amber-300 animate-in slide-in-from-bottom-4 fade-in"');
  
  fs.writeFileSync(path.join(dir, file), content, 'utf8');
}

console.log("Added animations and field polishes.");
