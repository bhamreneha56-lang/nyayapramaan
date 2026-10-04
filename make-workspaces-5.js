const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

const screenJ = `// Screen J - EXPECTED VS OBSERVED
import React from 'react';
import { useApp } from '../../state/store';
import { GitCompare, FileText, CheckCircle2, XCircle, AlertTriangle, ChevronRight } from 'lucide-react';

export const ScreenJ_ExpectedVsObserved: React.FC = () => {
  const { setCurrentScreen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">COMPLIANCE ANALYSIS WORKSPACE</h1>
          <p className="text-sm text-slate-600 mt-2">Determine Expected State, match Evidence, build Observed State, and identify Differences.</p>
        </div>
        <button onClick={() => setCurrentScreen('K')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400">CONTINUE <ChevronRight className="w-4 h-4"/></button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-6 text-sm font-bold">
        <button className="pb-3 border-b-2 border-amber-500 text-amber-600">O1: Refund (?2,00,000)</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">O2: Litigation Costs (?5,000)</button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Side: Expected & Evidence */}
        <div className="space-y-6">
          
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2 flex items-center gap-2"><GitCompare className="w-4 h-4 text-blue-500"/> Expected State</h3>
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Requirement</span><span className="font-bold text-slate-900">Refund</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Expected Amount</span><span className="font-bold text-slate-900">?2,00,000</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Deadline</span><span className="font-bold text-red-600">04-Jun-2025</span></div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2 flex items-center gap-2"><FileText className="w-4 h-4 text-slate-500"/> Available Evidence</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg flex justify-between items-center group cursor-pointer hover:border-emerald-300">
                 <div>
                   <p className="font-bold text-emerald-900 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Bank_Statement_June.pdf</p>
                   <p className="text-xs text-emerald-700 mt-1">Establishes: ?1,25,000 paid on 09-Jun-2025</p>
                 </div>
                 <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">MATCH: HIGH</span>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg flex justify-between items-center group cursor-pointer hover:border-amber-300">
                 <div>
                   <p className="font-bold text-amber-900 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Affidavit_Deshmukh.pdf</p>
                   <p className="text-xs text-amber-700 mt-1">Claims: Full ?2,00,000 paid</p>
                 </div>
                 <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded">MATCH: LOW (Self-serving)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Observed & Engine */}
        <div className="space-y-6">

          <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-5 shadow-md">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2 flex items-center gap-2"><GitCompare className="w-4 h-4"/> Observed State</h3>
            <div className="bg-slate-800 p-4 border border-slate-700 rounded-lg space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Verified Action</span><span className="font-bold text-emerald-400">Partial Refund</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Verified Amount</span><span className="font-bold text-white">?1,25,000</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Date of Action</span><span className="font-bold text-amber-400">09-Jun-2025</span></div>
            </div>
          </div>

          <div className="bg-white border border-red-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Difference Engine Results</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 font-bold">Amount Shortfall:</span>
                <span className="text-lg font-black text-red-600">?75,000</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{width: '62.5%'}}></div>
              </div>
              <p className="text-xs font-bold text-slate-500 text-right">37.5% GAP</p>

              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <span className="text-sm text-slate-600 font-bold">Timing Difference:</span>
                <span className="text-sm font-bold text-amber-600">5 Days LATE</span>
              </div>

              <div className="p-3 bg-red-50 border border-red-100 rounded-lg mt-4">
                <p className="text-xs font-bold text-red-800 flex items-center gap-1 mb-1"><XCircle className="w-3 h-3"/> Missing Evidence</p>
                <ul className="text-xs text-red-700 list-disc pl-4 space-y-1">
                  <li>Payment proof for remaining ?75,000</li>
                  <li>Evidence supporting payment before 04-Jun deadline</li>
                </ul>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg mt-2">
                <p className="text-xs font-bold text-amber-800 flex items-center gap-1 mb-1"><AlertTriangle className="w-3 h-3"/> Contradictions Detected</p>
                <p className="text-xs text-amber-700">Affidavit claims ?2,00,000 paid; Bank Statement shows only ?1,25,000.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenJ_ExpectedVsObserved.tsx'), screenJ, 'utf8');

const screenK = `// Screen K - VERIFICATION DASHBOARD
import React from 'react';
import { useApp } from '../../state/store';
import { Play, ShieldCheck, AlertTriangle, CheckCircle, Clock, Info, ChevronRight } from 'lucide-react';

export const ScreenK_Verification: React.FC = () => {
  const { setCurrentScreen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      
      {/* Top Hero Section */}
      <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between items-start gap-4">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="z-10 w-full flex justify-between items-start">
           <div>
              <p className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-1 flex items-center gap-2">CASE: CC/2025/00142 <span className="bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">Post-Order Compliance</span></p>
              <h1 className="text-3xl font-serif font-black tracking-wide">VERIFICATION DASHBOARD</h1>
           </div>
           <button onClick={() => setCurrentScreen('L')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 z-10">CONTINUE <ChevronRight className="w-4 h-4"/></button>
        </div>
        
        <div className="z-10 w-full flex items-end justify-between mt-4 border-t border-slate-700 pt-6">
           <div>
             <h2 className="text-slate-400 text-sm font-bold uppercase mb-2">Verification Procedure</h2>
             <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow flex items-center gap-2 transition-colors">
               <Play className="w-4 h-4 fill-current"/> RUN VERIFICATION
             </button>
           </div>
           <div className="text-right">
             <p className="text-slate-400 text-sm font-bold uppercase mb-1">NYAYATRACE STATUS</p>
             <p className="text-red-400 font-black text-xl flex items-center gap-2 justify-end">HUMAN REVIEW REQUIRED <AlertTriangle className="w-5 h-5"/></p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        
        {/* Main Screen */}
        <div className="col-span-2 space-y-6">
           <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm text-center py-10">
              <div className="flex items-center justify-center gap-8">
                 <div className="text-right">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">EXPECTED</p>
                    <p className="text-3xl font-black text-slate-900">?2,00,000</p>
                    <p className="text-sm font-bold text-slate-500 mt-1">by 04-Jun-2025</p>
                 </div>
                 
                 <div className="flex flex-col items-center px-4">
                    <span className="text-xs font-bold text-slate-400 mb-2">VS</span>
                    <div className="h-16 w-px bg-slate-300"></div>
                 </div>

                 <div className="text-left">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">OBSERVED</p>
                    <p className="text-3xl font-black text-slate-900">?1,25,000</p>
                    <p className="text-sm font-bold text-slate-500 mt-1">on 09-Jun-2025</p>
                 </div>
              </div>
              <div className="mt-10 inline-block bg-amber-100 border border-amber-300 text-amber-800 font-black text-2xl tracking-widest px-8 py-3 rounded-xl shadow-inner">
                 PARTIAL COMPLIANCE
              </div>
           </div>

           <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
             <div className="flex justify-between items-center mb-4">
               <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Rule Trace / Explainability</h3>
               <button className="text-xs text-blue-600 font-bold hover:underline flex items-center gap-1">WHY? <Info className="w-3 h-3"/></button>
             </div>
             <div className="bg-slate-50 p-4 rounded-lg font-mono text-xs text-slate-700 leading-relaxed border border-slate-200">
                1. Read obligation (O1: Refund ?2,00,000)<br/>
                2. Resolve deadline (04-Jun-2025)<br/>
                3. Build expected state (?2,00,000 required before 04-Jun)<br/>
                4. Load evidence (Bank Statement)<br/>
                5. Match evidence (?1,25,000 on 09-Jun)<br/>
                6. Apply evidence authority (Bank Record = High Authority)<br/>
                7. Build observed state (?1,25,000 paid)<br/>
                8. Compare (Expected > Observed)<br/>
                9. Detect missing evidence (Gap: ?75,000)<br/>
                10. Calculate evidence sufficiency (40/100)<br/>
                <span className="text-amber-600 font-bold mt-2 block">RESULT: PARTIAL. HUMAN REVIEW FLAG CREATED.</span>
             </div>
           </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
           <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
             <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Verification Summary</h3>
             <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-600">Missing Amount:</span><span className="font-bold text-red-600">?75,000</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Timing Issue:</span><span className="font-bold text-amber-600">5 Days Late</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Contradictions:</span><span className="font-bold text-red-600">3 Detected</span></div>
             </div>
           </div>

           <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
             <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Evidence Sufficiency Metric</h3>
             <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full border-8 border-slate-100 border-t-amber-500 border-r-amber-500 flex items-center justify-center">
                  <span className="text-xl font-black text-slate-900">40</span>
                </div>
             </div>
             <div className="space-y-2 text-xs font-bold">
                <div className="flex justify-between text-slate-600"><span>Coverage</span><span>40</span></div>
                <div className="flex justify-between text-slate-600"><span>Authority</span><span>25</span></div>
                <div className="flex justify-between text-slate-600"><span>Temporal</span><span>20</span></div>
                <div className="flex justify-between text-slate-600"><span>Agreement</span><span>15</span></div>
             </div>
             <p className="text-[10px] text-slate-500 mt-4 text-center italic">* This score represents evidentiary quality, NOT probability of non-compliance.</p>
           </div>
        </div>
      </div>

    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenK_Verification.tsx'), screenK, 'utf8');

console.log('Created Screen J and K.');
