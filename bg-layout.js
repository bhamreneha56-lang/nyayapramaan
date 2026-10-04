const fs = require('fs');

let layout = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// 1. Root container background
layout = layout.replace(
  '<div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">',
  '<div className="min-h-screen text-slate-900 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200" style={{ backgroundImage: "url(\'/bg-gavel.png\')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>'
);

// 2. Header transparency
layout = layout.replace(
  'header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md',
  'header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md'
);

// 3. Tracker transparency
layout = layout.replace(
  '<div className="bg-white border-b border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 flex items-center gap-4 overflow-x-auto whitespace-nowrap">',
  '<div className="bg-white/70 backdrop-blur-sm border-b border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 flex items-center gap-4 overflow-x-auto whitespace-nowrap">'
);

// 4. Sidebar transparency
layout = layout.replace(
  '<aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 hidden md:flex">',
  '<aside className="w-64 bg-white/70 backdrop-blur-md border-r border-slate-200 flex flex-col shrink-0 hidden md:flex">'
);
layout = layout.replace(
  '<div className="p-3 bg-slate-100 border-b border-slate-200 flex flex-col gap-1">',
  '<div className="p-3 bg-white/50 border-b border-slate-200 flex flex-col gap-1">'
);

// 5. Main Content Area transparency
layout = layout.replace(
  '<main className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">',
  '<main className="flex-1 overflow-y-auto p-4 md:p-8 bg-transparent">'
);

// 6. Footer transparency
layout = layout.replace(
  '<footer className="bg-white border-t border-slate-200 py-2.5 px-4 text-center text-xs text-slate-900 flex flex-wrap items-center justify-between gap-2 z-30">',
  '<footer className="bg-white/70 backdrop-blur-sm border-t border-slate-200 py-2.5 px-4 text-center text-xs text-slate-900 flex flex-wrap items-center justify-between gap-2 z-30">'
);

fs.writeFileSync('src/components/Layout.tsx', layout, 'utf8');
