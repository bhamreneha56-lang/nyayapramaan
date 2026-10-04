const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

const screenK = `// Screen K - VERIFICATION DASHBOARD
import React, { useState } from 'react';
import { useApp } from '../../state/store';
import { Play, ShieldCheck, AlertTriangle, CheckCircle, Clock, Info, ChevronRight, GitMerge, RotateCcw } from 'lucide-react';

export const ScreenK_Verification: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [activeTab, setActiveTab] = useState('Verification View');
  const [replayDate, setReplayDate] = useState('25 Jun');

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      
      {/* Top Hero Section */}
      <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between items-start gap-4">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="z-10 w-full flex justify-between items-start">
           <div>
              <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-1 flex items-center gap-2">CASE: CC/2025/00142 <span className="bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">Post-Order Compliance</span></p>
              <h1 className="text-4xl font-serif font-black tracking-wide">VERIFICATION DASHBOARD</h1>
           </div>
           <div className="flex gap-3 z-10">
              <button onClick={() => setActiveTab('Compliance Replay')} className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 border border-slate-600 text-sm"><RotateCcw className="w-4 h-4"/> COMPLIANCE REPLAY</button>
              <button onClick={() => setCurrentScreen('L')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400">CONTINUE <ChevronRight className="w-4 h-4"/></button>
           </div>
        </div>
        
        <div className="z-10 w-full flex items-end justify-between mt-4 border-t border-slate-700 pt-6">
           <div>
             <h2 className="text-slate-400 text-sm font-bold uppercase mb-2">Verification Procedure</h2>
             <button onClick={() => alert('Running 14-step verification procedure...')} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow flex items-center gap-2 transition-colors">
               <Play className="w-4 h-4 fill-current"/> RUN VERIFICATION
             </button>
           </div>
           <div className="text-right">
             <p className="text-slate-400 text-sm font-bold uppercase mb-1">NYAYATRACE STATUS</p>
             <p className="text-red-400 font-black text-2xl flex items-center gap-2 justify-end">HUMAN REVIEW REQUIRED <AlertTriangle className="w-6 h-6"/></p>
           </div>
        </div>
      </div>

      {activeTab === 'Compliance Replay' ? (
        <div className="bg-white border-2 border-blue-200 rounded-xl p-8 shadow-lg min-h-[500px]">
           <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 w-full mb-8 flex justify-between items-center">
              <span className="font-bold text-blue-900 text-base uppercase tracking-wider flex items-center gap-2"><ShieldCheck className="w-5 h-5"/> NYAYATRACE DIFFERENTIATOR</span>
              <span className="text-sm text-blue-700 font-bold">Compliance Replay / Evolution Timeline</span>
           </div>
           
           <div className="mb-10 px-8">
             <input type="range" min="1" max="4" 
                value={replayDate === '05 Jun' ? 1 : replayDate === '09 Jun' ? 2 : replayDate === '20 Jun' ? 3 : 4} 
                onChange={(e) => {
                  const val = e.target.value;
                  setReplayDate(val === '1' ? '05 Jun' : val === '2' ? '09 Jun' : val === '3' ? '20 Jun' : '25 Jun');
                }}
                className="w-full cursor-pointer accent-blue-600"
             />
             <div className="flex justify-between text-sm font-bold text-slate-500 mt-4 px-2">
                <span className={replayDate === '05 Jun' ? 'text-blue-600' : ''}>05 Jun</span>
                <span className={replayDate === '09 Jun' ? 'text-blue-600' : ''}>09 Jun</span>
                <span className={replayDate === '20 Jun' ? 'text-blue-600' : ''}>20 Jun</span>
                <span className={replayDate === '25 Jun' ? 'text-blue-600' : ''}>25 Jun</span>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-8">
             <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
               <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Available Evidence on {replayDate}</h3>
               {replayDate === '05 Jun' && <p className="text-slate-500 font-bold italic">No evidence uploaded yet. Order registered.</p>}
               {['09 Jun', '20 Jun', '25 Jun'].includes(replayDate) && (
                 <div className="p-3 bg-white border border-emerald-200 rounded-lg shadow-sm mb-3">
                   <p className="font-bold text-emerald-900 text-sm">Bank Statement</p>
                   <p className="text-sm text-slate-600 mt-1">?1,25,000</p>
                 </div>
               )}
               {['20 Jun', '25 Jun'].includes(replayDate) && (
                 <div className="p-3 bg-white border border-amber-200 rounded-lg shadow-sm">
                   <p className="font-bold text-amber-900 text-sm">Affidavit (Deshmukh)</p>
                   <p className="text-sm text-slate-600 mt-1">Claims ?2,00,000 paid</p>
                 </div>
               )}
             </div>
             <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-white">
               <h3 className="text-lg font-bold text-amber-400 mb-4 border-b border-slate-700 pb-2">Compliance Status</h3>
               {replayDate === '05 Jun' && <div><p className="text-3xl font-black text-slate-400">NOT MET</p><p className="text-sm mt-2 text-slate-300">Awaiting evidence for O1 Refund.</p></div>}
               {replayDate === '09 Jun' && <div><p className="text-3xl font-black text-amber-400">PARTIAL</p><p className="text-sm mt-2 text-amber-200">Verified ?1,25,000. Missing ?75,000.</p></div>}
               {['20 Jun', '25 Jun'].includes(replayDate) && <div><p className="text-3xl font-black text-amber-400">PARTIAL <span className="text-sm bg-red-600 px-2 py-1 rounded text-white ml-2">CONTRADICTION DETECTED</span></p><p className="text-sm mt-2 text-red-300">Amount contradiction between Bank & Affidavit.</p></div>}
               {replayDate === '25 Jun' && <div className="mt-4 pt-4 border-t border-slate-700"><p className="text-lg font-bold text-red-400 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> HUMAN REVIEW REQUIRED</p></div>}
             </div>
           </div>
           
           <div className="text-center mt-8">
             <button onClick={() => setActiveTab('Verification View')} className="text-blue-600 font-bold hover:underline">Close Replay</button>
           </div>
        </div>
      ) : (

      <div className="grid grid-cols-3 gap-6">
        {/* Main Screen */}
        <div className="col-span-2 space-y-6">
           <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm text-center py-10 relative">
              <button onClick={() => alert('Opening Why Not Verified popup...\n\n1. Expected: ?2,00,000\n2. Verified: ?1,25,000\n3. Diff: ?75,000\n4. Late: 5 Days\n5. Contradiction: Amount mismatch')} className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded text-sm flex items-center gap-2 border border-slate-300"><Info className="w-4 h-4"/> Why Not Verified?</button>
              
              <div className="flex items-center justify-center gap-8 mt-4">
                 <div className="text-right">
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">EXPECTED</p>
                    <p className="text-4xl font-black text-slate-900">?2,00,000</p>
                    <p className="text-base font-bold text-slate-500 mt-1">by 04-Jun-2025</p>
                 </div>
                 
                 <div className="flex flex-col items-center px-6">
                    <span className="text-sm font-bold text-slate-400 mb-2">VS</span>
                    <div className="h-20 w-px bg-slate-300"></div>
                 </div>

                 <div className="text-left">
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">OBSERVED</p>
                    <p className="text-4xl font-black text-slate-900">?1,25,000</p>
                    <p className="text-base font-bold text-slate-500 mt-1">on 09-Jun-2025</p>
                 </div>
              </div>
              <div className="mt-10 inline-block bg-amber-100 border border-amber-300 text-amber-800 font-black text-2xl tracking-widest px-8 py-3 rounded-xl shadow-inner">
                 PARTIAL COMPLIANCE
              </div>
           </div>

           <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
             <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 w-full mb-4 flex justify-between items-center">
                <span className="font-bold text-blue-900 text-xs uppercase tracking-wider flex items-center gap-2"><GitMerge className="w-4 h-4"/> NYAYATRACE DIFFERENTIATOR</span>
                <span className="text-xs text-blue-700 font-bold">Contradiction Impact Propagation</span>
             </div>
             <div className="flex items-center gap-4 overflow-x-auto p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="bg-red-100 border border-red-300 text-red-800 p-3 rounded font-bold text-sm shrink-0">CONTRADICTION<br/><span className="text-xs font-normal">Amount Mismatch</span></div>
                <div className="text-slate-400 font-black">?</div>
                <div className="bg-white border border-slate-300 text-slate-800 p-3 rounded font-bold text-sm shrink-0 text-center">OBLIGATION O1<br/><span className="text-xs font-normal text-slate-500">Refund</span></div>
                <div className="text-slate-400 font-black">?</div>
                <div className="bg-white border border-slate-300 text-slate-800 p-3 rounded font-bold text-sm shrink-0 text-center">OBSERVED STATE<br/><span className="text-xs font-normal text-slate-500">Locked to Bank</span></div>
                <div className="text-slate-400 font-black">?</div>
                <div className="bg-white border border-slate-300 text-slate-800 p-3 rounded font-bold text-sm shrink-0 text-center">VERIFICATION<br/><span className="text-xs font-normal text-amber-600">Partial</span></div>
                <div className="text-slate-400 font-black">?</div>
                <div className="bg-red-600 text-white p-3 rounded font-bold text-sm shrink-0 text-center">HUMAN REVIEW<br/><span className="text-xs font-normal">Required</span></div>
             </div>
           </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
           
           <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
             <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Verification Readiness</h3>
             <div className="space-y-2 text-sm font-bold text-slate-700">
                <div className="flex justify-between items-center"><span className="text-slate-600">Order understood</span><span className="text-emerald-600">?</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-600">Obligation extracted</span><span className="text-emerald-600">?</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-600">Deadline resolved</span><span className="text-emerald-600">?</span></div>
                <div className="flex justify-between items-center border-t border-slate-100 pt-2"><span className="text-slate-600">Evidence coverage</span><span className="text-amber-500">?</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-600">Evidence authority</span><span className="text-emerald-600">?</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-600">Temporal consistency</span><span className="text-amber-500">?</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-600">Cross-document match</span><span className="text-amber-500">?</span></div>
             </div>
             
             <div className="mt-6 pt-4 border-t-2 border-slate-200 text-center">
               <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-widest">READY FOR CONCLUSION?</p>
               <p className="text-2xl font-black text-red-600">NO</p>
               <p className="text-xs text-red-500 mt-2 font-bold">Reason: Unresolved evidence & contradictions.</p>
             </div>
           </div>

        </div>
      </div>
      )}
    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenK_Verification.tsx'), screenK, 'utf8');

console.log('Updated Screen K with USPs.');
