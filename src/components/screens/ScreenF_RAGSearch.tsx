// Screen F - LEGAL RAG & TEMPORAL
import React, { useState } from 'react';
import { useApp } from '../../state/store';
import { Search, Scale, Book, Clock, ChevronRight, CheckCircle2, ShieldCheck, AlertTriangle } from 'lucide-react';

export const ScreenF_RAGSearch: React.FC = () => {
  const { setCurrentScreen, prefillQuery } = useApp();
  const [query, setQuery] = useState(prefillQuery || 'consumer refund after delayed payment');
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setSearched(true); }, 1500);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-500 pb-24">
      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm">
        <p className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1"><Scale className="w-4 h-4"/> WORKSPACE 6</p>
        <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide mb-4">LEGAL RESEARCH & TEMPORAL RESOLVER</h1>
        
        <div className="flex gap-4">
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-lg px-4 py-3 text-lg focus:border-amber-500 outline-none" placeholder="Search acts, sections, judgments..."/>
          <button onClick={handleSearch} className="bg-slate-900 text-white font-bold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors">SEARCH</button>
        </div>
        <div className="flex gap-4 mt-4 text-xs font-bold text-slate-500">
           <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="mode" defaultChecked className="accent-amber-500"/> HYBRID</label>
           <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="mode" className="accent-amber-500"/> SEMANTIC</label>
           <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="mode" className="accent-amber-500"/> LEXICAL</label>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-2/3 space-y-6">
          {loading && (
             <div className="bg-white/85 p-10 text-center rounded-xl border border-slate-200">
               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mx-auto mb-4"></div>
               <p className="text-sm font-bold text-slate-500">Retrieving primary sources...</p>
             </div>
          )}
          {searched && !loading && (
             <div className="space-y-4">
               <div className="bg-white/85 backdrop-blur-md border border-slate-200 p-6 rounded-xl shadow-sm hover:border-amber-300 cursor-pointer">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="font-bold text-lg text-slate-900">Consumer Protection Act, 2019</h3>
                   <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-1 rounded font-bold uppercase flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> PRIMARY SOURCE</span>
                 </div>
                 <p className="text-sm text-slate-700 mb-4">Section 39(1)(d) - Power of District Commission to order refund of consideration along with interest.</p>
                 <div className="flex gap-2">
                   <span className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold text-slate-500">Matches Issue: Refund</span>
                   <button className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-2 py-1 rounded font-bold">LINK TO ISSUE MATRIX</button>
                 </div>
               </div>
             </div>
          )}
        </div>
        
        <div className="w-1/3">
           <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm sticky top-6">
             <h3 className="font-bold text-blue-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2"><Clock className="w-4 h-4"/> Temporal Resolver</h3>
             <label className="block text-xs font-bold text-slate-600 mb-1">EVENT DATE</label>
             <input type="date" defaultValue="2025-03-04" className="w-full bg-white border border-slate-200 rounded p-2 mb-4 text-sm"/>
             <div className="bg-white p-3 rounded border border-blue-100 text-sm text-slate-700">
               <p className="font-bold text-emerald-600 flex items-center gap-1 mb-2"><CheckCircle2 className="w-4 h-4"/> CPA 2019 Applies</p>
               <p className="text-xs">The event date (Mar 2025) falls after the commencement of the 2019 Act. No subsequent repeal detected.</p>
             </div>
           </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-64 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-300 p-4 flex justify-end z-50">
         <button onClick={() => setCurrentScreen('G')} className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-900 font-black text-sm hover:bg-amber-400 hover:-translate-y-0.5 transition-all flex items-center gap-2">CONTINUE TO UNIFIED GRAPH <ChevronRight className="w-4 h-4"/></button>
      </div>
    </div>
  );
};
