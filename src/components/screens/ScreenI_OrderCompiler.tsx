// Screen I - ORDER COMPILER
import React, { useState } from 'react';
import { useApp } from '../../state/store';
import { FileText, GitBranch, Search, Edit3, Target, ChevronRight, Activity } from 'lucide-react';

export const ScreenI_OrderCompiler: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [analyzing, setAnalyzing] = useState(false);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-500 pb-24">
      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm flex justify-between items-start">
        <div>
          <p className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1"><GitBranch className="w-4 h-4"/> WORKSPACE 9</p>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide mb-2">ORDER INTELLIGENCE</h1>
          <p className="text-sm text-slate-600">Case: CC/2025/00142 | Order: Final Order (05 May 2025)</p>
        </div>
        <button onClick={() => { setAnalyzing(true); setTimeout(()=>setAnalyzing(false),1500) }} className="bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded flex items-center gap-2 hover:bg-amber-400">
          {analyzing ? 'ANALYZING...' : 'ANALYZE ORDER'}
        </button>
      </div>

      <div className="flex gap-6">
        <div className="w-1/2 bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm min-h-[500px]">
           <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Original Document Viewer</h3>
           <div className="bg-slate-50 border border-slate-200 p-6 rounded text-sm text-slate-800 leading-relaxed font-serif shadow-inner">
             <p className="font-bold text-center mb-6 text-lg">BEFORE THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION</p>
             <p className="mb-4">...having heard both parties and perused the records, we find merit in the complaint.</p>
             <p className="mb-4">1. The opposite party is directed to <span className="bg-amber-200/50 font-bold px-1 rounded border-b-2 border-amber-500">refund the sum of ?2,00,000</span> to the complainant within <span className="bg-amber-200/50 font-bold px-1 rounded border-b-2 border-amber-500">30 days</span> from the date of this order.</p>
             <p className="mb-4">2. Failing which, the amount shall carry <span className="bg-purple-200/50 font-bold px-1 rounded border-b-2 border-purple-500">interest @ 9% p.a.</span> till actual payment.</p>
             <p>3. The opposite party shall also pay <span className="bg-blue-200/50 font-bold px-1 rounded border-b-2 border-blue-500">?5,000 towards litigation costs</span>.</p>
           </div>
        </div>
        
        <div className="w-1/2 space-y-6">
           <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 shadow-sm">
             <div className="flex justify-between items-center mb-3">
               <h3 className="font-bold text-emerald-900">O1: Refund Obligation</h3>
               <span className="bg-emerald-200 text-emerald-800 text-[10px] px-2 py-1 rounded font-bold uppercase">98% CONFIDENCE</span>
             </div>
             <div className="grid grid-cols-2 gap-4 text-sm bg-white p-4 rounded border border-emerald-100">
               <div><span className="block text-[10px] font-bold text-slate-500 uppercase">Responsible</span><span className="font-medium text-slate-900">Respondent</span></div>
               <div><span className="block text-[10px] font-bold text-slate-500 uppercase">Action</span><span className="font-medium text-slate-900">Refund</span></div>
               <div><span className="block text-[10px] font-bold text-slate-500 uppercase">Amount</span><span className="font-bold text-amber-600">?2,00,000</span></div>
               <div><span className="block text-[10px] font-bold text-slate-500 uppercase">Deadline</span><span className="font-bold text-red-600">04 Jun 2025 (30 days)</span></div>
             </div>
             <div className="mt-3 flex justify-end gap-2">
               <button onClick={() => alert("Edit obligation")} className="text-xs text-slate-500 font-bold hover:text-slate-900 flex items-center gap-1"><Edit3 className="w-3 h-3"/> EDIT</button>
             </div>
           </div>

           <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm">
             <div className="flex justify-between items-center mb-3">
               <h3 className="font-bold text-blue-900 flex items-center gap-2"><GitBranch className="w-4 h-4"/> O2: Conditional Interest</h3>
               <span className="bg-blue-200 text-blue-800 text-[10px] px-2 py-1 rounded font-bold uppercase">DEPENDENCY</span>
             </div>
             <div className="bg-white p-3 rounded border border-blue-100 text-sm">
               <p className="font-bold text-slate-700">IF O1 is delayed past 04 Jun 2025:</p>
               <p className="text-blue-700 font-bold mt-1">Apply 9% p.a. interest on unpaid principal.</p>
             </div>
           </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-64 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-300 p-4 flex justify-between z-50">
         <div className="text-sm font-bold text-slate-600 flex items-center gap-2"><Target className="w-4 h-4 text-emerald-500"/> Order Clause Coverage: 100% Extracted</div>
         <button onClick={() => setCurrentScreen('J')} className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-900 font-black text-sm hover:bg-amber-400 hover:-translate-y-0.5 transition-all flex items-center gap-2">CONTINUE TO EXPECTED VS OBSERVED <ChevronRight className="w-4 h-4"/></button>
      </div>
    </div>
  );
};
