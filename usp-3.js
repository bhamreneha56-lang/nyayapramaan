const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

// UPDATE SCREEN C
let screenC = fs.readFileSync(path.join(screensDir, 'ScreenC_UploadDocs.tsx'), 'utf8');
screenC = screenC.replace("import { UploadCloud, FileText, CheckCircle, Clock, Search, ChevronRight } from 'lucide-react';", "import { UploadCloud, FileText, CheckCircle, Clock, Search, ChevronRight, History, ShieldCheck } from 'lucide-react';");

screenC = screenC.replace(
  /const \[activeTab, setActiveTab\] = useState\('Required'\);/,
  "const [activeTab, setActiveTab] = useState('Required');\n  const [showProvenance, setShowProvenance] = useState(false);"
);

const provenanceHtml = `
      {showProvenance && (
        <div className="bg-white border-2 border-slate-800 rounded-xl p-8 shadow-xl mb-6 relative">
          <button onClick={() => setShowProvenance(false)} className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 font-bold">?</button>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 w-full mb-6 flex justify-between items-center">
            <span className="font-bold text-blue-900 text-sm uppercase tracking-wider flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> NYAYATRACE DIFFERENTIATOR</span>
            <span className="text-xs text-blue-700">Evidence Chain of Custody / Processing History</span>
          </div>
          
          <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><History className="w-5 h-5"/> Provenance Record: BANK_STATEMENT.PDF</h2>
          <p className="text-sm text-slate-600 mb-6 italic">This records the provenance and processing history of the evidence in NYAYATRACE.</p>
          
          <div className="space-y-4 text-sm font-medium text-slate-700">
             <div className="flex justify-between p-3 bg-slate-50 border border-slate-200 rounded"><span className="text-slate-500 font-bold">Uploaded</span><span>04 Oct 2026 10:21</span></div>
             <div className="flex justify-between p-3 bg-slate-50 border border-slate-200 rounded"><span className="text-slate-500 font-bold">OCR / Extraction</span><span>04 Oct 2026 10:22</span></div>
             <div className="flex justify-between p-3 bg-slate-50 border border-slate-200 rounded"><span className="text-slate-500 font-bold">Transaction Extracted (?1,25,000)</span><span>04 Oct 2026 10:23</span></div>
             <div className="flex justify-between p-3 bg-slate-50 border border-slate-200 rounded"><span className="text-slate-500 font-bold">Matched to O1</span><span>04 Oct 2026 10:23</span></div>
             <div className="flex justify-between p-3 bg-slate-50 border border-slate-200 rounded"><span className="text-slate-500 font-bold">Used in Verification</span><span>04 Oct 2026 10:24</span></div>
             <div className="flex justify-between p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-800"><span className="font-bold">Reviewer Viewed</span><span>Current Session</span></div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-400 font-mono">
            HASH: 8f4e3b2a9c1d5e6f7a8b9c0d1e2f3a4b | UPLOADER: ADM-REQ-002
          </div>
        </div>
      )}
`;

screenC = screenC.replace(
  /<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">/,
  provenanceHtml + '\n      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">'
);

screenC = screenC.replace(
  /<td className="p-4 flex gap-2"><button onClick={\(\) => alert\("Opening document viewer..."\)} className="text-blue-600 text-xs font-bold hover:underline">VIEW<\/button>/,
  '<td className="p-4 flex gap-2"><button onClick={() => setShowProvenance(true)} className="text-purple-600 text-xs font-bold hover:underline">PROVENANCE</button> <button onClick={() => alert("Opening document viewer...")} className="text-blue-600 text-xs font-bold hover:underline">VIEW</button>'
);

fs.writeFileSync(path.join(screensDir, 'ScreenC_UploadDocs.tsx'), screenC, 'utf8');


// UPDATE SCREEN L
let screenL = fs.readFileSync(path.join(screensDir, 'ScreenL_HumanReview.tsx'), 'utf8');

// replace Review Queue with Attention Queue
screenL = screenL.replace('Review Queue', 'REVIEW ATTENTION QUEUE');
screenL = screenL.replace(
  /<p className="font-bold text-slate-900 text-sm mb-1">O1: Refund Partial<\/p>\s*<p className="text-xs text-slate-500">Missing ?75,000 \+ Timing Gap<\/p>\s*<span className="mt-2 inline-block text-\[10px\] bg-red-100 text-red-800 px-2 py-0\.5 rounded font-bold">High Priority<\/span>/,
  '<p className="font-bold text-slate-900 text-sm mb-1">?75,000 Evidence Gap</p>\n               <p className="text-xs text-slate-500">Missing proof of remaining refund</p>\n               <span className="mt-2 inline-block text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded font-bold">HIGH ATTENTION</span>'
);

screenL = screenL.replace(
  /<p className="font-bold text-slate-900 text-sm mb-1">Affidavit vs Bank Record<\/p>\s*<p className="text-xs text-slate-500">Evidentiary Contradiction<\/p>\s*<span className="mt-2 inline-block text-\[10px\] bg-amber-100 text-amber-800 px-2 py-0\.5 rounded font-bold">Contradiction<\/span>/,
  '<p className="font-bold text-slate-900 text-sm mb-1">Amount Contradiction</p>\n               <p className="text-xs text-slate-500">Affidavit (2L) vs Bank (1.25L)</p>\n               <span className="mt-2 inline-block text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded font-bold">HIGH ATTENTION</span>'
);

// add Procedural Action Readiness below Reviewer Decision
const procReadinessHtml = `
             <div className="border-t border-slate-200 mt-8 pt-8">
               <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-6">Procedural Action Readiness</h3>
               
               <div className="space-y-4">
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-emerald-100">
                    <span className="font-bold text-emerald-900">EVIDENCE REQUEST</span>
                    <span className="bg-emerald-200 text-emerald-800 font-bold px-3 py-1 rounded text-xs">READY ?</span>
                  </div>
                  
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-emerald-100">
                    <span className="font-bold text-emerald-900">REPORT GENERATION</span>
                    <span className="bg-emerald-200 text-emerald-800 font-bold px-3 py-1 rounded text-xs">READY ?</span>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg cursor-pointer hover:bg-amber-100 group relative">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-amber-900">EXECUTION PREPARATION</span>
                      <span className="bg-amber-200 text-amber-800 font-bold px-3 py-1 rounded text-xs">REQUIRES HUMAN REVIEW ?</span>
                    </div>
                    
                    {/* Expandable Checklist */}
                    <div className="mt-4 pt-4 border-t border-amber-200 hidden group-hover:block">
                       <p className="text-xs font-bold text-amber-900 mb-2 uppercase">Preparation Checklist</p>
                       <ul className="text-sm font-medium text-amber-800 space-y-1">
                         <li className="flex justify-between"><span>Underlying Order</span><span>?</span></li>
                         <li className="flex justify-between"><span>Compliance Analysis</span><span>?</span></li>
                         <li className="flex justify-between"><span>Procedural History</span><span>?</span></li>
                         <li className="flex justify-between text-red-700"><span>Supporting Documents</span><span>? (Missing)</span></li>
                         <li className="flex justify-between text-slate-500"><span>Human Approval</span><span>? (Pending)</span></li>
                       </ul>
                    </div>
                  </div>
               </div>
             </div>
`;

screenL = screenL.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\);\s*};\s*$/,
  procReadinessHtml + '\n           </div>\n        </div>\n      </div>\n    </div>\n  );\n};\n'
);

fs.writeFileSync(path.join(screensDir, 'ScreenL_HumanReview.tsx'), screenL, 'utf8');

console.log('Updated Screen C and L.');
