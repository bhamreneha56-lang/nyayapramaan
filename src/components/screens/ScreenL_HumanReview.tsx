// Screen L - HUMAN REVIEW
import React, { useState } from 'react';
import { useApp } from '../../state/store';
import { Users, FileText, CheckCircle, XCircle, AlertTriangle, ChevronRight, ExternalLink } from 'lucide-react';

export const ScreenL_HumanReview: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [decided, setDecided] = useState(false);

  const handleDecide = () => {
    setDecided(true);
    alert("Review decision saved to audit log. Status updated.");
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-500 pb-24">
      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm flex justify-between items-start">
        <div>
          <p className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1"><Users className="w-4 h-4"/> WORKSPACE 12</p>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide mb-2">HUMAN LEGAL / COMPLIANCE REVIEW</h1>
          <p className="text-sm text-slate-600">Review ID: REV-2026-0007 | Case: CC/2025/00142 | Status: {decided ? 'REVIEWED' : 'PENDING'}</p>
        </div>
      </div>

      <div className="bg-slate-900/90 text-white rounded-xl overflow-hidden border border-slate-800 shadow-xl flex">
        {/* LEFT: SYSTEM FINDING */}
        <div className="w-1/3 p-6 bg-slate-800/50 border-r border-slate-700">
           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">System Finding</h3>
           <div className="mb-4">
             <p className="text-amber-500 font-black text-2xl mb-1">PARTIAL COMPLIANCE</p>
             <p className="text-sm text-slate-300">?75,000 shortfall & 5 days late.</p>
           </div>
           <div className="bg-red-900/30 border border-red-800/50 rounded p-3 text-sm">
             <p className="font-bold text-red-400 flex items-center gap-2 mb-1"><AlertTriangle className="w-4 h-4"/> Contradiction Detected</p>
             <p className="text-slate-300">Affidavit claims full payment, but Bank Record shows ?1.25L.</p>
           </div>
        </div>

        {/* CENTER: EVIDENCE */}
        <div className="w-1/3 p-6 border-r border-slate-700">
           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">Evidence / Source</h3>
           <div className="space-y-3">
             <button className="w-full bg-slate-800 hover:bg-slate-700 p-3 rounded border border-slate-600 flex justify-between items-center text-sm transition-colors text-left">
               <div>
                 <p className="font-bold text-white flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-400"/> Bank Record</p>
                 <p className="text-xs text-slate-400 mt-1">Shows ?1.25L transfer</p>
               </div>
               <ExternalLink className="w-4 h-4 text-slate-400"/>
             </button>
             <button className="w-full bg-slate-800 hover:bg-slate-700 p-3 rounded border border-slate-600 flex justify-between items-center text-sm transition-colors text-left">
               <div>
                 <p className="font-bold text-white flex items-center gap-2"><FileText className="w-4 h-4 text-red-400"/> Affidavit</p>
                 <p className="text-xs text-slate-400 mt-1">Claims ?2.0L payment</p>
               </div>
               <ExternalLink className="w-4 h-4 text-slate-400"/>
             </button>
           </div>
        </div>

        {/* RIGHT: DECISION */}
        <div className="w-1/3 p-6 bg-slate-800/50">
           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">Reviewer Decision</h3>
           {!decided ? (
             <div className="space-y-3">
               <button onClick={handleDecide} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 transition-colors"><CheckCircle className="w-5 h-5"/> Accept System Finding</button>
               <button onClick={() => alert("Request evidence modal opened.")} className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-lg border border-slate-600 transition-colors">Request Missing Evidence</button>
               <button onClick={() => alert("Reject modal opened.")} className="w-full bg-slate-700 hover:bg-slate-600 text-red-400 font-bold py-3 rounded-lg border border-slate-600 transition-colors flex justify-center items-center gap-2"><XCircle className="w-5 h-5"/> Reject Finding</button>
             </div>
           ) : (
             <div className="bg-emerald-900/40 border border-emerald-500/50 p-4 rounded-lg text-center">
               <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2"/>
               <p className="font-bold text-emerald-400 text-lg">Finding Accepted</p>
               <p className="text-sm text-emerald-200/70 mt-1">Saved to Audit Log</p>
               <p className="text-xs text-slate-400 mt-4">Reviewer: Current User</p>
             </div>
           )}
        </div>
      </div>
      
      <div className="fixed bottom-0 left-64 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-300 p-4 flex justify-end z-50">
         <button onClick={() => setCurrentScreen('M')} className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-900 font-black text-sm hover:bg-amber-400 hover:-translate-y-0.5 transition-all flex items-center gap-2">CONTINUE TO GENERATE REPORT <ChevronRight className="w-4 h-4"/></button>
      </div>
    </div>
  );
};
