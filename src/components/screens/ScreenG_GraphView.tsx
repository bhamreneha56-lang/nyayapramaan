// Screen G - UNIFIED GRAPH
import React, { useState } from 'react';
import { useApp } from '../../state/store';
import { Network, Search, Filter, Play, Download, ChevronRight, Scale, Users, FileText, CheckCircle2, AlertTriangle, ShieldCheck, X } from 'lucide-react';

export const ScreenG_GraphView: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [animating, setAnimating] = useState(false);
  const [selectedNode, setSelectedNode] = useState<any>(null);

  const handleAnimate = () => {
    setAnimating(true);
    setTimeout(()=>setAnimating(false), 3000);
  };

  const nodeDetails = {
    'CASE': { title: 'CC/2025/00142', type: 'Case Node', desc: 'Anita Deshmukh v. BrightHome Interiors Pvt. Ltd.', links: '8 related entities' },
    'ISSUE': { title: 'Refund', type: 'Legal Issue', desc: 'Dispute over non-refund of consideration for defective services.', links: 'Connected to Law CPA 2019' },
    'ORDER': { title: 'Final Order', type: 'Court Order', desc: 'Dated 05 May 2025. Contains 3 operative directions.', links: 'Creates Obligation O1' },
    'LAW': { title: 'CPA 2019', type: 'Statute', desc: 'Consumer Protection Act, 2019. Section 39(1)(d).', links: 'Governs Issue Refund' },
    'OBLIGATION': { title: 'O1', type: 'Obligation', desc: 'Refund ?2,00,000 within 30 days.', links: 'Requires ?2L Evidence' },
    'OBSERVED': { title: '? 1,25,000', type: 'Evidence State', desc: 'Bank record (09 Jun) proves partial payment.', links: 'Contradicts Affidavit' },
    'EXPECTED': { title: '? 2,00,000', type: 'Expected State', desc: 'Calculated deadline 04 Jun 2025.', links: 'Derived from O1' },
    'VERIFICATION': { title: 'Partial Compliance', type: 'Result', desc: 'Shortfall of ?75,000. Payment delayed by 5 days.', links: 'Flags for Human Review' },
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-500 pb-24 relative overflow-hidden">
      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm flex justify-between items-center">
        <div>
          <p className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1"><Network className="w-4 h-4"/> WORKSPACE 7</p>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">UNIFIED CASE GRAPH</h1>
        </div>
        <div className="flex gap-3">
           <button onClick={handleAnimate} className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-2 rounded shadow-sm font-bold flex items-center gap-2 hover:bg-emerald-100 transition-colors"><Play className="w-4 h-4"/> SHOW REASONING PATH</button>
           <button onClick={() => alert("Filter drawer opened.")} className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded shadow-sm font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors"><Filter className="w-4 h-4"/> FILTERS</button>
           <button onClick={() => alert("Exporting JSON and PNG...")} className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded shadow-sm font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors"><Download className="w-4 h-4"/> EXPORT</button>
        </div>
      </div>

      <div className="flex gap-6 relative">
         <div className={`bg-slate-50/50 backdrop-blur-sm rounded-xl h-[650px] relative border border-slate-200 overflow-hidden shadow-inner flex items-center justify-center transition-all duration-300 ${selectedNode ? 'w-2/3' : 'w-full'}`}>
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.5 }}></div>
            
            <div className={`w-full h-full relative transition-all duration-1000 ${animating ? 'scale-90' : 'scale-100'}`}>
               
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                 <path d="M 50% 100px C 50% 150px, 25% 150px, 25% 200px" fill="transparent" stroke="#94a3b8" strokeWidth="2" strokeDasharray={animating ? "5,5" : ""} className={animating ? "animate-pulse" : ""}/>
                 <path d="M 50% 100px C 50% 150px, 75% 150px, 75% 200px" fill="transparent" stroke="#94a3b8" strokeWidth="2" strokeDasharray={animating ? "5,5" : ""} className={animating ? "animate-pulse" : ""}/>
                 
                 <path d="M 25% 240px C 25% 280px, 25% 300px, 25% 340px" fill="transparent" stroke="#94a3b8" strokeWidth="2" />
                 <path d="M 75% 240px C 75% 280px, 75% 300px, 75% 340px" fill="transparent" stroke="#94a3b8" strokeWidth="2" />
                 
                 <path d="M 75% 380px C 75% 420px, 60% 420px, 60% 460px" fill="transparent" stroke="#94a3b8" strokeWidth="2" />
                 <path d="M 25% 380px C 25% 420px, 40% 420px, 40% 460px" fill="transparent" stroke="#94a3b8" strokeWidth="2" />
                 
                 <path d="M 40% 500px C 40% 530px, 50% 530px, 50% 560px" fill="transparent" stroke="#94a3b8" strokeWidth="2" />
                 <path d="M 60% 500px C 60% 530px, 50% 530px, 50% 560px" fill="transparent" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" stroke="#ef4444"/>
               </svg>

               <div onClick={() => setSelectedNode('CASE')} className={`absolute top-[80px] left-1/2 -translate-x-1/2 bg-white border-2 ${selectedNode === 'CASE' ? 'border-amber-500 shadow-amber-500/30 shadow-lg' : 'border-slate-900 shadow-md'} rounded-lg z-10 px-6 py-3 flex items-center gap-3 transition-all cursor-pointer hover:scale-105`}>
                 <div className="bg-slate-900 p-2 rounded-md"><Users className="w-5 h-5 text-white"/></div>
                 <div>
                   <p className="text-[10px] font-bold text-slate-500 uppercase">CASE NODE</p>
                   <p className="font-bold text-slate-900">CC/2025/00142</p>
                 </div>
               </div>

               <div onClick={() => setSelectedNode('ISSUE')} className={`absolute top-[200px] left-[25%] -translate-x-1/2 bg-white border ${selectedNode === 'ISSUE' ? 'border-amber-500 shadow-amber-500/30 shadow-lg' : 'border-slate-300 shadow-sm'} rounded-lg z-10 p-3 flex flex-col items-center w-32 hover:scale-105 transition-all cursor-pointer`}>
                 <Scale className="w-6 h-6 text-amber-500 mb-2"/>
                 <p className="font-bold text-slate-900 text-sm text-center">ISSUE: Refund</p>
               </div>

               <div onClick={() => setSelectedNode('ORDER')} className={`absolute top-[200px] left-[75%] -translate-x-1/2 bg-white border ${selectedNode === 'ORDER' ? 'border-amber-500 shadow-amber-500/30 shadow-lg' : 'border-slate-300 shadow-sm'} rounded-lg z-10 p-3 flex flex-col items-center w-32 hover:scale-105 transition-all cursor-pointer`}>
                 <FileText className="w-6 h-6 text-blue-500 mb-2"/>
                 <p className="font-bold text-slate-900 text-sm text-center">ORDER: 05 May</p>
               </div>

               <div onClick={() => setSelectedNode('LAW')} className={`absolute top-[340px] left-[25%] -translate-x-1/2 bg-white border ${selectedNode === 'LAW' ? 'border-amber-500 shadow-amber-500/30 shadow-lg' : 'border-slate-300 shadow-sm'} rounded-lg z-10 p-3 flex flex-col items-center w-32 hover:scale-105 transition-all cursor-pointer`}>
                 <ShieldCheck className="w-6 h-6 text-emerald-500 mb-2"/>
                 <p className="font-bold text-slate-900 text-sm text-center">LAW: CPA 2019</p>
               </div>

               <div onClick={() => setSelectedNode('OBLIGATION')} className={`absolute top-[340px] left-[75%] -translate-x-1/2 bg-white border-2 ${selectedNode === 'OBLIGATION' ? 'border-amber-500 shadow-amber-500/30 shadow-lg' : 'border-slate-900 shadow-sm'} rounded-lg z-10 p-3 flex flex-col items-center w-32 hover:scale-105 transition-all cursor-pointer`}>
                 <CheckCircle2 className="w-6 h-6 text-slate-900 mb-2"/>
                 <p className="font-bold text-slate-900 text-sm text-center">OBLIGATION: O1</p>
               </div>

               <div onClick={() => setSelectedNode('OBSERVED')} className={`absolute top-[460px] left-[40%] -translate-x-1/2 bg-white border-l-4 ${selectedNode === 'OBSERVED' ? 'border-amber-500 shadow-amber-500/30 shadow-lg' : 'border-slate-400 shadow-sm'} rounded-lg z-10 p-3 w-40 hover:scale-105 transition-all cursor-pointer`}>
                 <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">EVIDENCE / OBSERVED</p>
                 <p className="font-bold text-slate-900">? 1,25,000</p>
                 <p className="text-xs text-slate-500 mt-1 truncate">Bank (09 Jun)</p>
               </div>

               <div onClick={() => setSelectedNode('EXPECTED')} className={`absolute top-[460px] left-[60%] -translate-x-1/2 bg-white border-l-4 ${selectedNode === 'EXPECTED' ? 'border-amber-500 shadow-amber-500/30 shadow-lg' : 'border-amber-500 shadow-sm'} rounded-lg z-10 p-3 w-40 hover:scale-105 transition-all cursor-pointer`}>
                 <p className="text-[10px] font-bold text-amber-700 uppercase mb-1">EXPECTED STATE</p>
                 <p className="font-bold text-slate-900">? 2,00,000</p>
                 <p className="text-xs text-red-600 font-bold mt-1">Due: 04 Jun</p>
               </div>

               <div onClick={() => setSelectedNode('VERIFICATION')} className={`absolute top-[560px] left-1/2 -translate-x-1/2 bg-white border-2 ${selectedNode === 'VERIFICATION' ? 'border-amber-500 shadow-amber-500/30 shadow-xl scale-110' : 'border-amber-500 shadow-md scale-100'} rounded-xl z-10 px-6 py-4 flex flex-col items-center gap-1 transition-all cursor-pointer hover:scale-110`}>
                 <AlertTriangle className="w-8 h-8 text-amber-500 mb-1"/>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">VERIFICATION RESULT</p>
                 <p className="font-black text-amber-600 text-xl">PARTIAL COMPLIANCE</p>
               </div>

            </div>
         </div>

         {/* SLIDE OUT DRAWER */}
         {selectedNode && (
            <div className="w-1/3 bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl shadow-lg p-6 animate-in slide-in-from-right-8 fade-in">
               <div className="flex justify-between items-start mb-6 border-b border-slate-200 pb-4">
                 <div>
                   <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">{nodeDetails[selectedNode].type}</p>
                   <h2 className="text-2xl font-bold text-slate-900">{nodeDetails[selectedNode].title}</h2>
                 </div>
                 <button onClick={() => setSelectedNode(null)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><X className="w-5 h-5 text-slate-500"/></button>
               </div>

               <div className="space-y-6">
                 <div>
                   <h3 className="text-xs font-bold text-slate-500 uppercase mb-2">Description</h3>
                   <p className="text-sm text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200 leading-relaxed">{nodeDetails[selectedNode].desc}</p>
                 </div>
                 
                 <div>
                   <h3 className="text-xs font-bold text-slate-500 uppercase mb-2">Relationships</h3>
                   <div className="bg-amber-50 text-amber-900 text-sm p-4 rounded-lg border border-amber-200 flex items-center gap-2">
                     <Network className="w-4 h-4 text-amber-600"/>
                     {nodeDetails[selectedNode].links}
                   </div>
                 </div>

                 <div className="pt-4 border-t border-slate-200">
                    <button onClick={() => alert("Opening detailed view")} className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors shadow-md">VIEW FULL DETAILS</button>
                 </div>
               </div>
            </div>
         )}
      </div>
      
      <div className="fixed bottom-0 left-64 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-300 p-4 flex justify-between z-50">
         <div className="text-sm font-bold text-slate-600 flex items-center gap-2"><Network className="w-4 h-4 text-blue-500"/> Nodes: 8 | Edges: 7</div>
         <button onClick={() => setCurrentScreen('H')} className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-900 font-black text-sm hover:bg-amber-400 hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-lg">CONTINUE TO TIMELINE <ChevronRight className="w-4 h-4"/></button>
      </div>
    </div>
  );
};
