const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

const screenE = `// Screen E - LAWYER ISSUE MATRIX
import React from 'react';
import { useApp } from '../../state/store';
import { FileSpreadsheet, Plus, AlertTriangle, CheckCircle, ChevronRight, Link2 } from 'lucide-react';

export const ScreenE_IssueMatrix: React.FC = () => {
  const { setCurrentScreen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">LEGAL ISSUE MATRIX</h1>
          <p className="text-sm text-slate-600 mt-2">Correlate facts, laws, evidence, and precedents to identify legal gaps.</p>
        </div>
        <button onClick={() => setCurrentScreen('F')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400">CONTINUE <ChevronRight className="w-4 h-4"/></button>
      </div>

      <div className="flex justify-between items-center">
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-200 text-sm">
          <Plus className="w-4 h-4"/> ADD ISSUE
        </button>
        <button className="text-sm text-blue-600 font-bold hover:underline">EXPORT CSV / MARKDOWN</button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase">
            <tr>
              <th className="p-4 w-1/6">LEGAL ISSUE</th>
              <th className="p-4 w-1/6">FACTS</th>
              <th className="p-4 w-1/6">LAW</th>
              <th className="p-4 w-1/6">EVIDENCE</th>
              <th className="p-4 w-1/6">PRECEDENT</th>
              <th className="p-4 w-1/6 text-red-600">GAP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="align-top hover:bg-slate-50 transition-colors">
              <td className="p-4 font-bold text-slate-900">1. Refund of Amount</td>
              <td className="p-4 text-slate-700 text-xs space-y-2">
                <div className="p-2 bg-white border border-slate-200 rounded">?2,00,000 ordered refund</div>
              </td>
              <td className="p-4 text-slate-700 text-xs space-y-2">
                <div className="p-2 bg-white border border-slate-200 rounded flex justify-between group cursor-pointer hover:border-amber-400">
                  <span>Consumer Protection Act</span>
                  <Link2 className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100" />
                </div>
              </td>
              <td className="p-4 text-slate-700 text-xs space-y-2">
                <div className="p-2 bg-white border border-emerald-200 rounded flex gap-2">
                  <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0"/>
                  <span>?1,25,000 bank record</span>
                </div>
              </td>
              <td className="p-4 text-slate-700 text-xs space-y-2">
                <div className="p-2 bg-white border border-slate-200 rounded text-blue-600 font-medium cursor-pointer hover:underline">
                  3 related judgments
                </div>
              </td>
              <td className="p-4">
                <div className="p-2 bg-red-50 border border-red-200 rounded text-red-700 text-xs font-bold flex items-start gap-1">
                  <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0"/>
                  ?75,000 evidence gap
                </div>
              </td>
            </tr>
            <tr className="align-top hover:bg-slate-50 transition-colors">
              <td className="p-4 font-bold text-slate-900">2. Interest on Delay</td>
              <td className="p-4 text-slate-700 text-xs"><div className="p-2 bg-white border border-slate-200 rounded">9% interest ordered</div></td>
              <td className="p-4 text-slate-700 text-xs"><div className="p-2 bg-white border border-slate-200 rounded text-slate-400 italic">Not Linked</div></td>
              <td className="p-4 text-slate-700 text-xs"><div className="p-2 bg-white border border-slate-200 rounded text-slate-400 italic">No evidence provided</div></td>
              <td className="p-4 text-slate-700 text-xs"><div className="p-2 bg-white border border-slate-200 rounded text-slate-400 italic">Not Linked</div></td>
              <td className="p-4">
                <div className="p-2 bg-amber-50 border border-amber-200 rounded text-amber-700 text-xs font-bold">Unresolved Question</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md">
        <h3 className="text-sm font-bold text-amber-400 uppercase mb-4 flex items-center gap-2">CITATION AUDIT <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-[10px]">AI VERIFIED</span></h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="p-3 bg-slate-800 border border-slate-700 rounded-lg">
            <p className="font-medium mb-2">Claim: "Respondent failed to pay remaining ?75,000"</p>
            <p className="text-emerald-400 font-bold text-xs flex items-center gap-1"><CheckCircle className="w-3 h-3"/> SUPPORTED</p>
          </div>
          <div className="p-3 bg-slate-800 border border-slate-700 rounded-lg">
            <p className="font-medium mb-2">Claim: "Interest should be calculated from April 1st"</p>
            <p className="text-red-400 font-bold text-xs flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> UNSUPPORTED</p>
          </div>
          <div className="p-3 bg-slate-800 border border-slate-700 rounded-lg border-amber-500/50">
            <p className="font-medium mb-2">Claim: "Affidavit serves as proof of payment"</p>
            <p className="text-amber-400 font-bold text-xs flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> NEEDS REVIEW</p>
          </div>
        </div>
      </div>
    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenE_IssueMatrix.tsx'), screenE, 'utf8');

const screenF = `// Screen F - LEGAL RAG & TEMPORAL
import React from 'react';
import { useApp } from '../../state/store';
import { Search, Clock, BookOpen, ChevronRight, ShieldCheck, Settings } from 'lucide-react';

export const ScreenF_RAGSearch: React.FC = () => {
  const { setCurrentScreen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">LEGAL RESEARCH WORKSPACE</h1>
          <p className="text-sm text-slate-600 mt-2">Search Acts, Judgments, Procedures, and resolve applicable law using Temporal constraints.</p>
        </div>
        <button onClick={() => setCurrentScreen('G')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400">CONTINUE <ChevronRight className="w-4 h-4"/></button>
      </div>

      <div className="flex border-b border-slate-200 gap-6 text-sm font-bold">
        <button className="pb-3 border-b-2 border-amber-500 text-amber-600">Legal Search</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">Temporal Resolver</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">Judgment Explorer</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">Citation Auditor</button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex gap-2 mb-4">
              <input type="text" placeholder="Search Acts, Sections, Judgments..." className="flex-1 border border-slate-300 p-3 rounded-lg text-sm bg-slate-50 outline-none focus:border-amber-400"/>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-slate-800"><Search className="w-4 h-4"/> SEARCH</button>
            </div>
            <div className="flex gap-3 text-xs font-bold text-slate-600 mb-6">
              <span className="text-slate-900">Modes:</span>
              <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="mode" defaultChecked/> Semantic</label>
              <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="mode"/> Lexical</label>
              <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="mode"/> Hybrid</label>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Results</h3>
              
              {/* Result Card */}
              <div className="p-4 border border-slate-200 rounded-lg hover:border-amber-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-blue-700 text-base">Consumer Protection Act, 2019 (Section 39)</h4>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase"><ShieldCheck className="w-3 h-3"/> Trust Badge</span>
                </div>
                <p className="text-xs text-slate-500 mb-3 flex gap-3">
                  <span><span className="font-bold">Date:</span> 2019</span>
                  <span><span className="font-bold">Source:</span> Official Gazette</span>
                </p>
                <p className="text-sm text-slate-800 bg-slate-50 p-3 rounded border border-slate-100 mb-2">
                  "Where the District Commission is satisfied that the goods complained against suffer from any of the defects specified... it shall issue an order to the opposite party directing him to do one or more of the following... (a) to remove the defect... (b) to replace the goods... (c) to return to the complainant the price..."
                </p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">Issue: Refund Jurisdiction</span>
                  <button className="text-xs text-blue-600 font-bold hover:underline">Why Retrieved?</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-6 shadow-md">
            <h3 className="text-sm font-bold text-amber-400 uppercase mb-4 flex items-center gap-2"><Clock className="w-4 h-4"/> Temporal Resolver</h3>
            <div className="space-y-4">
              <div><label className="text-xs text-slate-400 block mb-1">Event Date</label><input type="date" className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm focus:border-amber-500 outline-none text-white" defaultValue="2025-05-05"/></div>
              <div><label className="text-xs text-slate-400 block mb-1">Jurisdiction</label><input type="text" className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-white" value="National" readOnly/></div>
              <div><label className="text-xs text-slate-400 block mb-1">Legal Topic</label><input type="text" className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-white" value="Consumer Protection Interest Rates" readOnly/></div>
              <button className="w-full bg-amber-500 text-slate-900 font-bold text-sm py-2 rounded mt-2 hover:bg-amber-400">RESOLVE LAW IN FORCE</button>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-400">Applicable Version:</p>
              <p className="text-sm font-bold text-emerald-400 mt-1">CPA 2019 (as amended 2021)</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase mb-4 flex items-center gap-2"><Settings className="w-4 h-4 text-slate-500"/> Filters</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked/> Acts & Sections</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked/> Judgments</label>
              <label className="flex items-center gap-2"><input type="checkbox"/> Rules & Regulations</label>
              <label className="flex items-center gap-2"><input type="checkbox"/> Notifications</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenF_RAGSearch.tsx'), screenF, 'utf8');

console.log('Created Screen E and F.');
