const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

const screenL = `// Screen L - HUMAN REVIEW
import React from 'react';
import { useApp } from '../../state/store';
import { UserCheck, AlertTriangle, MessageSquare, Edit3, CheckCircle, XCircle, ChevronRight, Filter } from 'lucide-react';

export const ScreenL_HumanReview: React.FC = () => {
  const { setCurrentScreen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">HUMAN LEGAL / COMPLIANCE REVIEW</h1>
          <p className="text-sm text-slate-600 mt-2">Adjudicate AI flags, request missing evidence, resolve contradictions, and finalize compliance status.</p>
        </div>
        <button onClick={() => setCurrentScreen('M')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400">CONTINUE <ChevronRight className="w-4 h-4"/></button>
      </div>

      <div className="flex gap-6">
        {/* Left Side: Review Queue */}
        <div className="w-1/3 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col h-[70vh]">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center shrink-0">
            <h2 className="text-sm font-bold text-slate-900 uppercase">Review Queue</h2>
            <button className="text-slate-500 hover:text-slate-900"><Filter className="w-4 h-4"/></button>
          </div>
          <div className="flex gap-2 p-2 text-[10px] font-bold text-slate-600 bg-slate-50 border-b border-slate-200 overflow-x-auto shrink-0">
             <span className="px-2 py-1 bg-slate-200 rounded cursor-pointer">Pending</span>
             <span className="px-2 py-1 bg-red-100 text-red-700 rounded cursor-pointer">High Priority</span>
             <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded cursor-pointer">Contradiction</span>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-slate-100">
             <div className="p-3 bg-white border border-red-300 rounded-lg shadow-sm border-l-4 border-l-red-500 cursor-pointer">
               <p className="font-bold text-slate-900 text-sm mb-1">O1: Refund Partial</p>
               <p className="text-xs text-slate-500">Missing ?75,000 + Timing Gap</p>
               <span className="mt-2 inline-block text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded font-bold">High Priority</span>
             </div>
             <div className="p-3 bg-white border border-amber-300 rounded-lg shadow-sm border-l-4 border-l-amber-500 cursor-pointer opacity-70">
               <p className="font-bold text-slate-900 text-sm mb-1">Affidavit vs Bank Record</p>
               <p className="text-xs text-slate-500">Evidentiary Contradiction</p>
               <span className="mt-2 inline-block text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">Contradiction</span>
             </div>
          </div>
        </div>

        {/* Right Side: Review Detail & Actions */}
        <div className="w-2/3 space-y-6 overflow-y-auto">
           <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative">
             <span className="absolute top-4 right-4 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Pending Review</span>
             <h2 className="text-xl font-bold text-slate-900 mb-2">Review Flag: O1 Refund Partial</h2>
             <p className="text-sm text-slate-700 mb-6">System verified partial payment of ?1,25,000 via Bank Record. Missing ?75,000. Payment was late by 5 days.</p>

             <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">System Finding</h3>
                  <p className="font-bold text-amber-600 text-lg">PARTIAL</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Available Evidence</h3>
                  <ul className="text-xs font-bold text-slate-700 space-y-1">
                    <li className="text-emerald-700">? Bank Statement</li>
                    <li className="text-amber-600">? Affidavit</li>
                    <li className="text-red-500">? Missing Transfer Receipt</li>
                  </ul>
                </div>
             </div>

             <div className="bg-slate-900 p-4 rounded-lg text-slate-300 text-xs font-mono mb-6">
               <span className="text-amber-400 font-bold block mb-2">RULE TRACE</span>
               Expected: ?2,00,000. Observed: ?1,25,000. Expected > Observed. State = Partial.
             </div>

             <div className="border-t border-slate-200 pt-6 space-y-4">
               <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Reviewer Decision</h3>
               
               <textarea placeholder="Require reason or comment here..." className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm focus:border-blue-400 outline-none h-24"></textarea>
               
               <div className="flex gap-3">
                 <button className="flex-1 bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-500 shadow flex items-center justify-center gap-2 transition-colors">
                   <CheckCircle className="w-4 h-4"/> CONFIRM FINDING
                 </button>
                 <button className="flex-1 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-500 shadow flex items-center justify-center gap-2 transition-colors">
                   <XCircle className="w-4 h-4"/> REJECT FINDING
                 </button>
               </div>
               
               <div className="flex justify-between items-center gap-3 pt-2">
                 <button className="flex-1 bg-white border border-slate-300 text-slate-700 font-bold py-2 rounded-lg hover:bg-slate-50 flex items-center justify-center gap-2 text-sm transition-colors">
                   <AlertTriangle className="w-4 h-4"/> REQUEST EVIDENCE
                 </button>
                 <button className="flex-1 bg-white border border-slate-300 text-slate-700 font-bold py-2 rounded-lg hover:bg-slate-50 flex items-center justify-center gap-2 text-sm transition-colors">
                   <Edit3 className="w-4 h-4"/> MODIFY
                 </button>
               </div>
               
               <p className="text-[10px] text-slate-500 text-center mt-2 italic">Note: Modifying or Rejecting does not overwrite original AI/system finding. An audit log is appended.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenL_HumanReview.tsx'), screenL, 'utf8');

const screenM = `// Screen M - GENERATE REPORT
import React from 'react';
import { useApp } from '../../state/store';
import { FileText, Download, ShieldCheck, FileKey, Layers, Users, BookOpen } from 'lucide-react';

export const ScreenM_GenerateReport: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">LEGAL OUTPUT & REPORTING</h1>
        <p className="text-sm text-slate-600 mt-2">Generate comprehensive, PII-shielded legal outputs with embedded source citations.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Report Type 1 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4"><Layers className="w-5 h-5"/></div>
            <h2 className="font-bold text-slate-900 mb-2">1. Case Summary</h2>
            <p className="text-xs text-slate-600 mb-4">Complete overview of parties, facts, issues, orders, evidence, and analytical gaps.</p>
          </div>
          <button className="w-full bg-slate-100 text-slate-800 font-bold py-2 rounded text-sm hover:bg-slate-200">SELECT</button>
        </div>

        {/* Report Type 2 */}
        <div className="bg-white border border-amber-400 rounded-xl p-6 shadow-md cursor-pointer flex flex-col justify-between relative bg-amber-50/20">
          <span className="absolute top-0 right-0 bg-amber-500 text-slate-900 font-bold text-[10px] px-3 py-1 rounded-bl-lg uppercase">Selected</span>
          <div>
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4"><FileKey className="w-5 h-5"/></div>
            <h2 className="font-bold text-slate-900 mb-2">2. Compliance Review Report</h2>
            <p className="text-xs text-slate-600 mb-4">Detailed trace of obligations, expected state, observed state, evidence matching, and verification results.</p>
          </div>
          <button className="w-full bg-amber-500 text-slate-900 font-bold py-2 rounded text-sm hover:bg-amber-400">CONFIGURE EXPORT</button>
        </div>

        {/* Report Type 3 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4"><BookOpen className="w-5 h-5"/></div>
            <h2 className="font-bold text-slate-900 mb-2">3. Lawyer Research Memo</h2>
            <p className="text-xs text-slate-600 mb-4">In-depth issues matrix, precedents, citation audit, and unresolved legal questions.</p>
          </div>
          <button className="w-full bg-slate-100 text-slate-800 font-bold py-2 rounded text-sm hover:bg-slate-200">SELECT</button>
        </div>

        {/* Report Type 4 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 mb-4"><Users className="w-5 h-5"/></div>
            <h2 className="font-bold text-slate-900 mb-2">4. Human Review Packet</h2>
            <p className="text-xs text-slate-600 mb-4">Flags, rule trace, conflicting evidence, and reviewer actions.</p>
          </div>
          <button className="w-full bg-slate-100 text-slate-800 font-bold py-2 rounded text-sm hover:bg-slate-200">SELECT</button>
        </div>

        {/* Report Type 5 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 mb-4"><Clock className="w-5 h-5"/></div>
            <h2 className="font-bold text-slate-900 mb-2">5. Procedural History Report</h2>
            <p className="text-xs text-slate-600 mb-4">Timeline of filings, scrutiny, hearings, orders, and execution tracking.</p>
          </div>
          <button className="w-full bg-slate-100 text-slate-800 font-bold py-2 rounded text-sm hover:bg-slate-200">SELECT</button>
        </div>
      </div>

      <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-8 shadow-xl mt-8 flex justify-between items-center">
         <div>
            <h3 className="font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Download className="w-5 h-5"/> Export Configuration</h3>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm cursor-pointer"><input type="radio" name="format" defaultChecked/> PDF Document</label>
              <label className="flex items-center gap-2 text-sm cursor-pointer"><input type="radio" name="format"/> DOCX</label>
              <label className="flex items-center gap-2 text-sm cursor-pointer"><input type="radio" name="format"/> Markdown</label>
            </div>
            <p className="text-xs text-slate-400 mt-4 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400"/> Includes Source References, Audit Hash, and PII Shielding
            </p>
         </div>
         <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-8 py-4 rounded-xl shadow-lg flex items-center gap-3 transition-colors text-lg">
            GENERATE REPORT
         </button>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Draft for human review — decision-support output, not legal advice.</p>
      </div>

    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenM_GenerateReport.tsx'), screenM, 'utf8');

console.log('Created Screen L and M.');
