const fs = require('fs');

let layout = fs.readFileSync('src/components/Layout.tsx', 'utf8');

layout = layout.replace('PIPELINE STEPPER', 'LEGAL CASE WORKSPACE');

const trackerHtml = `
      {/* Procedural Tracker */}
      <div className="bg-white border-b border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 flex items-center gap-4 overflow-x-auto whitespace-nowrap">
        <span className="text-slate-900 font-bold uppercase tracking-wider text-[10px]">Case Lifecycle:</span>
        <span className="flex items-center gap-1 text-emerald-700"><CheckCircle className="w-3 h-3"/> Filing</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-emerald-700"><CheckCircle className="w-3 h-3"/> Scrutiny</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-emerald-700"><CheckCircle className="w-3 h-3"/> Proceedings</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-emerald-700"><CheckCircle className="w-3 h-3"/> Final Order</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-amber-600 font-bold"><Clock className="w-3 h-3"/> Post-Order</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-blue-600 font-bold"><Search className="w-3 h-3"/> Compliance</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3 h-3"/> Review</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3 h-3"/> Execution</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3 h-3"/> Closure</span>
      </div>
`;

layout = layout.replace(/(<\/header>)/, '$1\n' + trackerHtml);

const caseStatusHtml = `
          {/* Current Case Header */}
          <div className="p-3 bg-slate-100 border-b border-slate-200 flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Current Case</span>
            <span className="text-xs font-bold text-slate-900 leading-tight">CC/2025/00142</span>
            <span className="text-xs text-slate-700 truncate">Anita Deshmukh v. BrightHome Interiors</span>
            <span className="text-[10px] text-slate-600 truncate">District Consumer Commission</span>
            <div className="mt-1 flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 border border-blue-200 rounded text-[9px] font-bold uppercase">Post-Order Compliance</span>
              <span className="px-1.5 py-0.5 bg-red-100 text-red-800 border border-red-200 rounded text-[9px] font-bold uppercase">Human Review Required</span>
            </div>
          </div>
`;

layout = layout.replace(/(<aside[^>]*>)/, '$1\n' + caseStatusHtml);

fs.writeFileSync('src/components/Layout.tsx', layout, 'utf8');
