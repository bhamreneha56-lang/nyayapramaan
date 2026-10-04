const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

const screenI = `// Screen I - ORDER COMPILER
import React, { useState } from 'react';
import { useApp } from '../../state/store';
import { FileText, Cpu, CheckCircle2, ChevronRight, Edit3, AlertTriangle, Layers, GitBranch, ShieldCheck } from 'lucide-react';

export const ScreenI_OrderCompiler: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [activeTab, setActiveTab] = useState('Obligations');
  const [showOrderChange, setShowOrderChange] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20 flex flex-col h-[90vh]">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 shrink-0">
        <div>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">ORDER INTELLIGENCE COMPILER</h1>
          <p className="text-base text-slate-600 mt-2">Extract operative directions, calculate deadlines, map dependencies, and compile structured obligations.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowOrderChange(true)} className="flex items-center gap-2 px-3 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 text-sm"><GitBranch className="w-4 h-4"/> COMPARE ORDERS</button>
          <button onClick={() => setCurrentScreen('J')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400">CONTINUE <ChevronRight className="w-4 h-4"/></button>
        </div>
      </div>

      <div className="flex border-b border-slate-200 gap-6 text-base font-bold">
        {['Obligations', 'Clause Coverage Map', 'Dependency Map'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={\`pb-3 \${activeTab === tab ? 'border-b-2 border-amber-500 text-amber-600' : 'text-slate-500 hover:text-slate-800'}\`}>{tab}</button>
        ))}
      </div>

      {showOrderChange && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 shadow-md mb-6 relative">
          <button onClick={() => setShowOrderChange(false)} className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 font-bold">?</button>
          <h2 className="text-lg font-bold text-red-700 uppercase tracking-wider mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> ORDER CHANGE DETECTED</h2>
          <div className="grid grid-cols-3 gap-6 mb-6 text-sm">
            <div className="bg-white p-4 rounded border border-slate-200"><p className="text-slate-500 font-bold mb-1">Original Order</p><p className="text-lg font-black text-slate-900">?2,00,000</p></div>
            <div className="bg-white p-4 rounded border border-amber-300"><p className="text-slate-500 font-bold mb-1">Subsequent Order</p><p className="text-lg font-black text-amber-700">?1,50,000</p></div>
            <div className="bg-slate-900 text-white p-4 rounded border border-slate-800">
               <p className="text-slate-400 font-bold mb-2">IMPACT ANALYSIS</p>
               <ul className="space-y-1">
                 <li className="flex justify-between"><span>O1 Amount</span><span className="text-amber-400">CHANGED</span></li>
                 <li className="flex justify-between"><span>Expected State</span><span className="text-amber-400">UPDATED</span></li>
                 <li className="flex justify-between"><span>Verification</span><span className="text-red-400">REQUIRES RE-RUN</span></li>
                 <li className="flex justify-between"><span>Report</span><span className="text-red-400">OUTDATED</span></li>
               </ul>
            </div>
          </div>
          <div className="flex gap-4">
             <button onClick={() => { alert('Recalculating downstream state based on new order...'); setShowOrderChange(false); }} className="bg-red-600 text-white font-bold px-6 py-2 rounded hover:bg-red-700">ACCEPT NEW ORDER & RECALCULATE</button>
             <button onClick={() => setShowOrderChange(false)} className="bg-white text-slate-800 border border-slate-300 font-bold px-6 py-2 rounded hover:bg-slate-100">KEEP PREVIOUS</button>
          </div>
        </div>
      )}

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Left Side - Document */}
        <div className="w-1/2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div className="bg-slate-50 border-b border-slate-200 p-3 flex justify-between items-center shrink-0">
             <span className="text-sm font-bold text-slate-700 flex items-center gap-2"><FileText className="w-4 h-4"/> Order_05May2025.pdf</span>
             <span className="text-sm text-slate-500">Page 4 / 6</span>
          </div>
          <div className="flex-1 p-8 overflow-y-auto bg-slate-100 relative">
             <div className="bg-white p-8 shadow-sm border border-slate-200 min-h-[600px] text-base leading-relaxed text-slate-800 font-serif">
                <p className="mb-4 text-center font-bold">IN THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION</p>
                <p className="mb-4">...having perused the documents on record and heard the arguments of both parties, this Commission comes to the conclusion that there has been a clear deficiency in service by the Opposite Party.</p>
                <p className="mb-4">The complaint is allowed with the following directions:</p>
                
                <div className={\`p-2 mb-4 cursor-pointer relative group \${activeTab === 'Clause Coverage Map' ? 'bg-amber-100 border-l-4 border-amber-500' : ''}\`}>
                  <p className="font-bold">1. The Opposite Party is directed to refund the amount of Rs. 2,00,000/- (Rupees Two Lakhs only) to the Complainant.</p>
                  <span className="absolute -right-2 -top-2 bg-slate-900 text-white text-xs px-2 py-1 rounded hidden group-hover:block z-10">Extracting Obligation 1...</span>
                </div>
                
                <div className={\`p-2 mb-4 cursor-pointer relative group \${activeTab === 'Clause Coverage Map' ? 'bg-amber-50 border-l-4 border-amber-400' : ''}\`}>
                  <p>2. The said amount shall be paid within a period of 30 days from the date of receipt of this order, failing which it shall carry an interest @ 9% p.a. from the date of default till actual realization.</p>
                  <span className="absolute -right-2 -top-2 bg-slate-900 text-white text-xs px-2 py-1 rounded hidden group-hover:block z-10">Extracting Conditions/Deadline...</span>
                </div>

                <div className={\`p-2 mb-4 cursor-pointer relative group \${activeTab === 'Clause Coverage Map' ? 'bg-red-50 border-l-4 border-red-400' : ''}\`}>
                  <p>3. The Opposite Party shall also pay Rs. 5,000/- towards the cost of litigation.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side - Intelligence Workspace */}
        <div className="w-1/2 space-y-6 overflow-y-auto pr-2">
           
           {activeTab === 'Obligations' && (
             <>
               <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-5 shadow-md">
                 <h2 className="text-base font-bold text-amber-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">Order Metadata</h2>
                 <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="text-slate-400 block text-sm">Order Date</span><span className="font-bold">05-May-2025</span></div>
                    <div><span className="text-slate-400 block text-sm">Order Type</span><span className="font-bold">Final Order</span></div>
                    <div><span className="text-slate-400 block text-sm">Court/Authority</span><span className="font-bold">District Commission, Pune</span></div>
                 </div>
               </div>

               <div>
                 <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2 flex items-center justify-between">
                    Extracted Obligations
                 </h2>
                 <div className="space-y-4">
                    {/* O1 */}
                    <div className="bg-white border border-amber-300 rounded-xl shadow-sm overflow-hidden">
                      <div className="bg-amber-50 px-4 py-3 border-b border-amber-200 flex justify-between items-center">
                        <span className="font-bold text-amber-900 text-base">O1: Refund</span>
                        <button className="text-sm text-amber-700 hover:text-amber-900 font-bold">EDIT</button>
                      </div>
                      <div className="p-4 grid grid-cols-2 gap-4 text-base">
                        <div><span className="text-slate-500 block text-xs uppercase font-bold">Amount</span><span className="text-slate-900 font-black">?2,00,000</span></div>
                        <div><span className="text-slate-500 block text-xs uppercase font-bold">Deadline</span><span className="text-slate-900 font-bold">30 Days (04-Jun-2025)</span></div>
                      </div>
                    </div>
                    {/* O2 */}
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
                        <span className="font-bold text-slate-800 text-base">O3: Litigation Costs</span>
                        <button className="text-sm text-slate-500 font-bold">EDIT</button>
                      </div>
                      <div className="p-4 grid grid-cols-2 gap-4 text-base">
                        <div><span className="text-slate-500 block text-xs uppercase font-bold">Amount</span><span className="text-slate-900 font-black">?5,000</span></div>
                      </div>
                    </div>
                 </div>
               </div>
             </>
           )}

           {activeTab === 'Clause Coverage Map' && (
             <div className="space-y-4">
               <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex justify-between items-center">
                  <span className="font-bold text-blue-900 text-sm uppercase tracking-wider flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> NYAYATRACE DIFFERENTIATOR</span>
                  <span className="text-xs text-blue-700">Clause-by-Clause Tracking</span>
               </div>
               
               {/* Clause 1 */}
               <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="font-bold text-slate-900 text-lg">Clause 1</h3>
                   <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded text-xs">OBLIGATION O1</span>
                 </div>
                 <p className="text-sm text-slate-700 italic mb-4">"Respondent shall refund ?2,00,000..."</p>
                 <div className="flex gap-4 text-sm">
                   <span className="flex items-center gap-1 text-emerald-600 font-bold"><CheckCircle2 className="w-4 h-4"/> EXTRACTED</span>
                   <span className="flex items-center gap-1 text-emerald-600 font-bold"><CheckCircle2 className="w-4 h-4"/> EVIDENCE LINKED</span>
                   <span className="flex items-center gap-1 text-amber-600 font-bold"><AlertTriangle className="w-4 h-4"/> PARTIAL (GAP)</span>
                 </div>
               </div>

               {/* Clause 2 */}
               <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="font-bold text-slate-900 text-lg">Clause 2</h3>
                   <span className="bg-amber-100 text-amber-800 font-bold px-2 py-1 rounded text-xs">CONDITIONAL O2</span>
                 </div>
                 <p className="text-sm text-slate-700 italic mb-4">"The said amount shall be paid within a period of 30 days... failing which 9% p.a."</p>
                 <div className="flex gap-4 text-sm">
                   <span className="flex items-center gap-1 text-emerald-600 font-bold"><CheckCircle2 className="w-4 h-4"/> EXTRACTED</span>
                   <span className="flex items-center gap-1 text-amber-600 font-bold"><AlertTriangle className="w-4 h-4"/> DELAY DETECTED</span>
                 </div>
               </div>

               {/* Clause 3 */}
               <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="font-bold text-slate-900 text-lg">Clause 3</h3>
                   <span className="bg-red-100 text-red-800 font-bold px-2 py-1 rounded text-xs">OBLIGATION O3</span>
                 </div>
                 <p className="text-sm text-slate-700 italic mb-4">"Pay Rs. 5,000/- towards litigation costs."</p>
                 <div className="flex gap-4 text-sm">
                   <span className="flex items-center gap-1 text-emerald-600 font-bold"><CheckCircle2 className="w-4 h-4"/> EXTRACTED</span>
                   <span className="flex items-center gap-1 text-red-600 font-bold"><AlertTriangle className="w-4 h-4"/> EVIDENCE MISSING</span>
                 </div>
               </div>
             </div>
           )}

           {activeTab === 'Dependency Map' && (
             <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm min-h-[500px] flex flex-col items-center">
               <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 w-full mb-8 flex justify-between items-center">
                  <span className="font-bold text-blue-900 text-sm uppercase tracking-wider flex items-center gap-2"><Layers className="w-4 h-4"/> NYAYATRACE DIFFERENTIATOR</span>
                  <span className="text-xs text-blue-700">Obligation Executable Structure</span>
               </div>
               
               {/* Node O1 */}
               <div className="border-2 border-amber-500 rounded-xl p-4 bg-amber-50 w-64 text-center shadow-lg">
                 <h4 className="font-black text-amber-900 text-lg mb-1">OBLIGATION O1</h4>
                 <p className="text-base text-amber-800 font-bold">Refund ?2,00,000</p>
                 <p className="text-sm text-amber-700 mt-1">Deadline: 04-Jun</p>
               </div>
               
               <div className="h-10 border-l-2 border-dashed border-slate-400"></div>
               <div className="bg-slate-100 border border-slate-300 px-4 py-1 rounded-full text-sm font-bold text-slate-600">
                 Condition: Payment Delayed?
               </div>
               <div className="h-10 border-l-2 border-dashed border-slate-400 relative">
                 <span className="absolute top-2 left-2 text-xs font-bold text-red-600">YES (5 Days Late)</span>
               </div>
               
               {/* Node O2 */}
               <div className="border-2 border-red-400 rounded-xl p-4 bg-red-50 w-64 text-center shadow-lg">
                 <h4 className="font-black text-red-900 text-lg mb-1">CONDITIONAL O2</h4>
                 <p className="text-base text-red-800 font-bold">Interest 9% p.a.</p>
                 <p className="text-sm text-red-700 mt-1">ACTIVATED</p>
               </div>

             </div>
           )}
        </div>
      </div>
    </div>
  );
};
`;

fs.writeFileSync(path.join(screensDir, 'ScreenI_OrderCompiler.tsx'), screenI, 'utf8');

console.log('Updated Screen I Order Compiler with all new USP features.');
