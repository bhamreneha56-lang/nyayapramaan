// Screen K - VERIFICATION DASHBOARD
import React, { useState } from 'react';
import { useApp } from '../../state/store';
import { ShieldAlert, CheckCircle, AlertTriangle, FileText, Activity, ChevronRight, Play } from 'lucide-react';

export const ScreenK_Verification: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [running, setRunning] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleRun = () => {
    setRunning(true);
    setTimeout(() => { setRunning(false); setVerified(true); }, 2500);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-500 pb-24">
      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm flex justify-between items-start">
        <div>
          <p className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1"><ShieldAlert className="w-4 h-4"/> WORKSPACE 11</p>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide mb-2">VERIFICATION DASHBOARD</h1>
          <p className="text-sm text-slate-600">As-of: 25 June 2025 | System: Deterministic</p>
        </div>
        <button onClick={handleRun} disabled={running} className="bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-amber-400 shadow-lg">
          {running ? 'RUNNING VERIFICATION...' : 'RUN VERIFICATION'}
        </button>
      </div>

      {running && (
        <div className="bg-slate-900/90 text-white rounded-xl p-10 text-center font-mono border border-slate-700">
           <Activity className="w-8 h-8 text-amber-500 mx-auto mb-4 animate-spin"/>
           <p className="mb-2">1. Resolving obligation expected state...</p>
           <p className="mb-2">2. Loading evidence authority...</p>
           <p className="mb-2">3. Comparing states and detecting gaps...</p>
           <p className="text-amber-400">4. Calculating difference engine...</p>
        </div>
      )}

      {verified && !running && (
        <div className="space-y-6 animate-in fade-in">
           <div className="grid grid-cols-3 gap-6">
             <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm text-center">
               <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">EXPECTED</h3>
               <p className="text-3xl font-black text-slate-900 mb-1">?2,00,000</p>
               <p className="text-sm text-red-600 font-bold">by 04 Jun 2025</p>
             </div>
             <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm text-center">
               <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">OBSERVED</h3>
               <p className="text-3xl font-black text-slate-900 mb-1">?1,25,000</p>
               <p className="text-sm text-slate-600 font-bold">on 09 Jun 2025</p>
             </div>
             <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm text-center flex flex-col justify-center">
               <h3 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">STATUS</h3>
               <p className="text-3xl font-black text-amber-600 mb-2">PARTIAL</p>
               <span className="bg-amber-200 text-amber-900 text-[10px] px-2 py-1 rounded font-bold uppercase mx-auto">HUMAN REVIEW REQUIRED</span>
             </div>
           </div>

           <div className="flex gap-6">
             <div className="w-2/3 bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-2">
                  <h3 className="font-bold text-slate-900">Why? (Rule Trace)</h3>
                  <button onClick={() => alert("Viewing Impact Graph")} className="text-xs text-blue-600 font-bold hover:underline">View Impact Graph</button>
                </div>
                <div className="space-y-3 text-sm text-slate-700">
                   <div className="flex justify-between p-3 bg-slate-50 rounded border border-slate-200">
                     <span className="font-bold text-slate-900">Difference:</span>
                     <span className="text-red-600 font-bold">?75,000 shortfall</span>
                   </div>
                   <div className="flex justify-between p-3 bg-slate-50 rounded border border-slate-200">
                     <span className="font-bold text-slate-900">Timing:</span>
                     <span className="text-red-600 font-bold">5 days late</span>
                   </div>
                   <div className="flex justify-between p-3 bg-amber-50 rounded border border-amber-200">
                     <span className="font-bold text-amber-900 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Evidence Excluded:</span>
                     <span className="text-amber-800">Affidavit (insufficient independent authority for payment claim)</span>
                   </div>
                </div>
             </div>
             
             <div className="w-1/3 bg-slate-900/90 text-white rounded-xl p-6 shadow-lg border border-slate-800">
               <h3 className="font-bold text-amber-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">Sufficiency</h3>
               <div className="text-center mb-6">
                 <p className="text-4xl font-black text-white mb-1">46 <span className="text-lg text-slate-400">/ 100</span></p>
                 <p className="text-xs text-slate-400">Not a probability of legal outcome.</p>
               </div>
               <div className="space-y-2 text-sm">
                 <div className="flex justify-between"><span>Coverage</span><span className="font-bold text-red-400">25</span></div>
                 <div className="flex justify-between"><span>Authority</span><span className="font-bold text-amber-400">12</span></div>
                 <div className="flex justify-between"><span>Temporal</span><span className="font-bold text-red-400">5</span></div>
                 <div className="flex justify-between"><span>Agreement</span><span className="font-bold text-red-400">4</span></div>
               </div>
             </div>
           </div>
        </div>
      )}

      <div className="fixed bottom-0 left-64 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-300 p-4 flex justify-between z-50">
         <div className="text-sm font-bold text-slate-600 flex items-center gap-2">Ready for Human Conclusion? <span className="text-red-600">NO (Open Contradictions)</span></div>
         <button onClick={() => setCurrentScreen('L')} className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-900 font-black text-sm hover:bg-amber-400 hover:-translate-y-0.5 transition-all flex items-center gap-2">CONTINUE TO HUMAN REVIEW <ChevronRight className="w-4 h-4"/></button>
      </div>
    </div>
  );
};
