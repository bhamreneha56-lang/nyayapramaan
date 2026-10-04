const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

let screenF = fs.readFileSync(path.join(screensDir, 'ScreenF_RAGSearch.tsx'), 'utf8');

const sourceDriftHtml = `
      <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 shadow-md mb-6 relative">
        <button onClick={(e) => e.currentTarget.parentElement.style.display = 'none'} className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 font-bold">?</button>
        <div className="flex gap-4">
          <div className="bg-amber-100 p-3 rounded-lg shrink-0 h-fit">
            <ShieldCheck className="w-8 h-8 text-amber-600"/>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-2">SOURCE UPDATE DETECTED <span className="bg-amber-200 text-amber-800 text-[10px] px-2 py-0.5 rounded font-bold">NYAYATRACE DIFFERENTIATOR</span></h2>
            <p className="text-sm text-amber-800 mb-4 font-bold">The underlying legal source changed after this analysis was generated. Human verification recommended.</p>
            
            <div className="grid grid-cols-2 gap-6 mb-4 text-sm bg-white p-4 rounded-lg border border-amber-200">
               <div>
                  <p className="text-slate-500 font-bold text-xs uppercase mb-1">Source</p>
                  <p className="font-bold text-slate-900">Consumer Protection Act</p>
               </div>
               <div>
                  <p className="text-slate-500 font-bold text-xs uppercase mb-1">Potentially Affected</p>
                  <p className="font-bold text-slate-900">2 research results, 1 Issue Matrix row</p>
               </div>
               <div>
                  <p className="text-slate-500 font-bold text-xs uppercase mb-1">Previous Snapshot</p>
                  <p className="font-bold text-slate-900">2025-01-15</p>
               </div>
               <div>
                  <p className="text-slate-500 font-bold text-xs uppercase mb-1">New Snapshot</p>
                  <p className="font-bold text-emerald-600">2026-09-10</p>
               </div>
            </div>
            
            <div className="flex gap-3">
               <button onClick={() => alert("Comparing snapshots...")} className="bg-white border border-amber-300 text-amber-800 font-bold px-4 py-2 rounded text-sm hover:bg-amber-100">COMPARE VERSIONS</button>
               <button onClick={() => alert("Re-running RAG and Matrix dependency tree...")} className="bg-amber-600 text-white font-bold px-4 py-2 rounded text-sm hover:bg-amber-700">RE-RUN ANALYSIS</button>
               <button onClick={(e) => e.currentTarget.parentElement.parentElement.parentElement.style.display = 'none'} className="bg-white border border-slate-300 text-slate-600 font-bold px-4 py-2 rounded text-sm hover:bg-slate-50">MARK REVIEWED</button>
            </div>
          </div>
        </div>
      </div>
`;

screenF = screenF.replace(
  /<div className="flex border-b border-slate-200 gap-6 text-sm font-bold">([\s\S]*?)<\/div>/,
  '<div className="flex border-b border-slate-200 gap-6 text-sm font-bold">\n        {[' + "'Legal Search', 'Temporal Resolver', 'Judgment Explorer', 'Citation Auditor'].map(tab => (\n          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-3 ${activeTab === tab ? 'border-b-2 border-amber-500 text-amber-600' : 'text-slate-500 hover:text-slate-800'}`}>{tab}</button>\n        ))\n      }\n      </div>\n" + sourceDriftHtml
);

fs.writeFileSync(path.join(screensDir, 'ScreenF_RAGSearch.tsx'), screenF, 'utf8');

console.log('Updated Screen F with Source Drift Alert.');
