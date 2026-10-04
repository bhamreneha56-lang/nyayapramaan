const fs = require('fs');

let layout = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// 1. Sidebar Text Size
layout = layout.replace(/text-xs font-medium transition-all/g, 'text-sm font-semibold transition-all');

// 2. Active Sidebar Item Styling
layout = layout.replace(
  /'bg-amber-500\/15 text-amber-300 border border-amber-300 font-semibold shadow-sm'/g,
  "'bg-amber-500/20 text-amber-900 border border-amber-500 font-bold shadow-md shadow-amber-500/10 backdrop-blur-md transform scale-[1.02]'"
);

// 3. Inactive Sidebar Item Styling
layout = layout.replace(
  /'text-black hover:bg-slate-100 hover:text-slate-900'/g,
  "'text-slate-800 hover:bg-white/50 hover:text-slate-900 hover:scale-[1.01]'"
);

// 4. Update the text-amber-400 of the active icon and chevron to a darker amber for contrast
layout = layout.replace(
  /className=\{`w-4 h-4 \$\{isActive \? 'text-amber-400' : 'text-slate-900'\}`\}/g,
  "className={`w-5 h-5 ${isActive ? 'text-amber-700' : 'text-slate-700 group-hover:text-amber-600 transition-colors'}`}"
);
layout = layout.replace(
  /<ChevronRight className="w-3\.5 h-3\.5 text-amber-400 shrink-0" \/>/g,
  '<ChevronRight className="w-4 h-4 text-amber-700 shrink-0" />'
);

// Add 'group' to the button class
layout = layout.replace(
  /className=\{`w-full flex items-center justify-between p-2\.5/g,
  "className={`group w-full flex items-center justify-between p-3"
);

// 5. Add general page transition
layout = layout.replace(
  /<main className="flex-1 overflow-y-auto p-4 md:p-8 bg-transparent">/,
  '<main className="flex-1 overflow-y-auto p-4 md:p-8 bg-transparent animate-in slide-in-from-bottom-2 fade-in duration-500">'
);

fs.writeFileSync('src/components/Layout.tsx', layout, 'utf8');
