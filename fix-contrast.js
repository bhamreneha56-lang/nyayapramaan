const fs = require('fs');

let layout = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// Fix NYAYAPRAMAN gradient
layout = layout.replace(
  'bg-gradient-to-r from-white via-amber-100 to-amber-400 bg-clip-text text-transparent',
  'text-slate-900'
);

// Fix PRO badge
layout = layout.replace(
  'bg-amber-500/15 text-amber-400 border border-amber-200',
  'bg-amber-200 text-amber-900 border border-amber-400 shadow-sm'
);

// Fix Scale icon box
layout = layout.replace(
  'bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-300 flex items-center justify-center text-amber-400',
  'bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600'
);

// Also let's check the Ask NyayaPraman button if it's too light
layout = layout.replace(
  'bg-gradient-to-r from-amber-500/20 to-amber-600/30 hover:from-amber-500/30 hover:to-amber-600/40 text-amber-300 border border-amber-300',
  'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 shadow-sm'
);
layout = layout.replace(
  '<Sparkles className="w-3.5 h-3.5 text-amber-400" />',
  '<Sparkles className="w-3.5 h-3.5 text-amber-700" />'
);

// Fix "Review Mode" shield icon
layout = layout.replace(
  'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white',
  'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-sm'
);
layout = layout.replace(
  '<ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />',
  '<ShieldAlert className="w-3.5 h-3.5 text-emerald-600" />'
);

fs.writeFileSync('src/components/Layout.tsx', layout, 'utf8');
console.log("Contrast fixes applied.");
