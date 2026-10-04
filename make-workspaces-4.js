const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

const screenG = `// Screen G - UNIFIED GRAPH
import React from 'react';
import { useApp } from '../../state/store';
import { Network, Filter, Download, Maximize, Target, ChevronRight } from 'lucide-react';

export const ScreenG_GraphView: React.FC = () => {
  const { setCurrentScreen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20 flex flex-col h-[85vh]">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 shrink-0">
        <div>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">UNIFIED INTELLIGENCE GRAPH</h1>
          <p className="text-sm text-slate-600 mt-2">Explore relationships across Case, Law, Evidence, and Obligations.</p>
        </div>
        <button onClick={() => setCurrentScreen('H')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400">CONTINUE <ChevronRight className="w-4 h-4"/></button>
      </div>

      <div className="flex-1 border border-slate-200 rounded-xl overflow-hidden bg-slate-50 relative shadow-sm flex flex-col">
        {/* Graph Toolbar */}
        <div className="bg-white border-b border-slate-200 p-3 flex justify-between items-center shrink-0">
          <div className="flex gap-2">
            <input type="text" placeholder="Search nodes..." className="border border-slate-300 p-1.5 rounded text-sm outline-none focus:border-amber-400"/>
            <button className="p-2 border border-slate-300 rounded hover:bg-slate-100"><Filter className="w-4 h-4 text-slate-700"/></button>
            <button className="p-2 border border-slate-300 rounded hover:bg-slate-100"><Target className="w-4 h-4 text-slate-700"/></button>
          </div>
          <div className="flex gap-4 text-xs items-center font-medium">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-500 block"></span> Case Info</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-purple-500 block"></span> Law</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-emerald-500 block"></span> Evidence</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-amber-500 block"></span> Obligation</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500 block border-2 border-dashed border-red-700"></span> Gap Node</span>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-slate-300 rounded hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1"><Download className="w-4 h-4"/> EXPORT PNG</button>
            <button className="p-2 border border-slate-300 rounded hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1"><Maximize className="w-4 h-4"/></button>
          </div>
        </div>

        {/* Mock Canvas Area */}
        <div className="flex-1 relative flex items-center justify-center bg-[#f8fafc]">
           <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
           
           <div className="relative z-10 flex flex-col items-center gap-8 p-10">
              <div className="bg-blue-100 border-2 border-blue-400 p-3 rounded-lg shadow-md font-bold text-blue-900 text-sm">
                Case: Deshmukh v. BrightHome
              </div>
              
              <div className="flex gap-20">
                <div className="flex flex-col items-center gap-8">
                  <div className="w-0.5 h-8 bg-slate-300"></div>
                  <div className="bg-purple-100 border-2 border-purple-400 p-3 rounded-lg shadow-md font-bold text-purple-900 text-sm">
                    Consumer Protection Act
                  </div>
                  <div className="w-0.5 h-8 bg-slate-300"></div>
                  <div className="bg-purple-50 border-2 border-purple-300 p-3 rounded-lg shadow-sm font-medium text-purple-800 text-xs">
                    Section 39
                  </div>
                </div>

                <div className="flex flex-col items-center gap-8">
                  <div className="w-0.5 h-8 bg-slate-300"></div>
                  <div className="bg-amber-100 border-2 border-amber-400 p-3 rounded-lg shadow-md font-bold text-amber-900 text-sm">
                    Court Order: 05-May-2025
                  </div>
                  <div className="flex gap-8">
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-slate-300"></div>
                      <div className="bg-amber-50 border-2 border-amber-400 p-3 rounded-lg shadow-sm font-bold text-amber-800 text-xs text-center">
                        Obligation O1:<br/>?2,00,000 Refund
                      </div>
                      <div className="w-0.5 h-8 bg-slate-300"></div>
                      <div className="bg-emerald-100 border-2 border-emerald-400 p-3 rounded-lg shadow-md font-bold text-emerald-900 text-sm">
                        Verified Evidence:<br/>?1,25,000 (Bank)
                      </div>
                      <div className="w-0.5 h-8 bg-red-400 border-dashed"></div>
                      <div className="bg-red-50 border-2 border-dashed border-red-500 p-3 rounded-lg shadow-md font-bold text-red-700 text-sm animate-pulse">
                        GHOST NODE:<br/>Missing Evidence ?75,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenG_GraphView.tsx'), screenG, 'utf8');

const screenH = `// Screen H - CASE TIMELINE
import React from 'react';
import { useApp } from '../../state/store';
import { Clock, Filter, AlertCircle, CheckCircle2, ChevronRight, FileText } from 'lucide-react';

export const ScreenH_Timeline: React.FC = () => {
  const { setCurrentScreen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">PROCEDURAL HISTORY & TIMELINE</h1>
          <p className="text-sm text-slate-600 mt-2">Unified timeline of procedural steps, hearings, orders, and evidence events.</p>
        </div>
        <button onClick={() => setCurrentScreen('I')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400">CONTINUE <ChevronRight className="w-4 h-4"/></button>
      </div>

      <div className="flex gap-4 mb-6 text-sm font-medium border-b border-slate-200 pb-4 overflow-x-auto">
        <span className="font-bold text-slate-900 flex items-center gap-1"><Filter className="w-4 h-4"/> Filters:</span>
        <label className="flex items-center gap-1"><input type="checkbox" defaultChecked/> All</label>
        <label className="flex items-center gap-1"><input type="checkbox" defaultChecked/> Procedural</label>
        <label className="flex items-center gap-1"><input type="checkbox" defaultChecked/> Hearings</label>
        <label className="flex items-center gap-1"><input type="checkbox" defaultChecked/> Orders</label>
        <label className="flex items-center gap-1"><input type="checkbox" defaultChecked/> Evidence</label>
        <label className="flex items-center gap-1"><input type="checkbox" defaultChecked/> Deadlines</label>
      </div>

      <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:ml-[39px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        
        {/* Item 1 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <FileText className="w-3 h-3" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-slate-900 text-sm">Complaint Filed</span>
              <span className="text-xs font-bold text-slate-500">10-Jan-2025</span>
            </div>
            <p className="text-xs text-slate-600">Initial filing registered.</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-amber-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <FileText className="w-3 h-3" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-amber-300 bg-amber-50 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-slate-900 text-sm">Final Order</span>
              <span className="text-xs font-bold text-slate-500">05-May-2025</span>
            </div>
            <p className="text-xs text-slate-800 font-medium">District Consumer Commission issued order requiring ?2,00,000 refund within 30 days.</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-red-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Clock className="w-3 h-3" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-red-300 bg-red-50 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-red-700 text-sm flex items-center gap-1"><AlertCircle className="w-4 h-4"/> Compliance Deadline</span>
              <span className="text-xs font-bold text-red-700">04-Jun-2025</span>
            </div>
            <p className="text-xs text-red-800 font-medium">30 days from order date. Overdue by 5 days.</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <CheckCircle2 className="w-3 h-3" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-slate-900 text-sm">Evidence: Partial Payment</span>
              <span className="text-xs font-bold text-emerald-600">09-Jun-2025</span>
            </div>
            <p className="text-xs text-slate-600">Bank statement uploaded showing transfer of ?1,25,000.</p>
            <div className="mt-2 p-2 bg-amber-50 text-amber-800 text-xs rounded border border-amber-200 font-bold flex gap-1">
              <AlertCircle className="w-3 h-3 mt-0.5 shrink-0"/> CONTRADICTION EVENT: Payment occurs 5 days after deadline.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenH_Timeline.tsx'), screenH, 'utf8');

const screenI = `// Screen I - ORDER COMPILER
import React from 'react';
import { useApp } from '../../state/store';
import { FileText, Cpu, CheckCircle2, ChevronRight, Edit3, AlertCircle } from 'lucide-react';

export const ScreenI_OrderCompiler: React.FC = () => {
  const { setCurrentScreen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20 flex flex-col h-[85vh]">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 shrink-0">
        <div>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">ORDER INTELLIGENCE COMPILER</h1>
          <p className="text-sm text-slate-600 mt-2">Extract operative directions, calculate deadlines, and compile structured obligations.</p>
        </div>
        <button onClick={() => setCurrentScreen('J')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400">CONTINUE <ChevronRight className="w-4 h-4"/></button>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Left Side - Document */}
        <div className="w-1/2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div className="bg-slate-50 border-b border-slate-200 p-3 flex justify-between items-center shrink-0">
             <span className="text-sm font-bold text-slate-700 flex items-center gap-2"><FileText className="w-4 h-4"/> Order_05May2025.pdf</span>
             <span className="text-xs text-slate-500">Page 4 / 6</span>
          </div>
          <div className="flex-1 p-8 overflow-y-auto bg-slate-100 relative">
             <div className="bg-white p-8 shadow-sm border border-slate-200 min-h-[600px] text-sm leading-relaxed text-slate-800 font-serif">
                <p className="mb-4 text-center font-bold">IN THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION</p>
                <p className="mb-8 text-center font-bold">PUNE, MAHARASHTRA</p>
                <p className="mb-4">...having perused the documents on record and heard the arguments of both parties, this Commission comes to the conclusion that there has been a clear deficiency in service by the Opposite Party.</p>
                <p className="mb-4">The complaint is allowed with the following directions:</p>
                
                <div className="bg-amber-100 p-2 border-l-4 border-amber-500 mb-4 cursor-pointer relative group">
                  <p className="font-bold">1. The Opposite Party is directed to refund the amount of Rs. 2,00,000/- (Rupees Two Lakhs only) to the Complainant.</p>
                  <span className="absolute -right-2 -top-2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded hidden group-hover:block z-10">Extracting Obligation 1...</span>
                </div>
                
                <div className="bg-amber-100/50 p-2 border-l-4 border-amber-400 mb-4 cursor-pointer relative group">
                  <p>2. The said amount shall be paid within a period of 30 days from the date of receipt of this order, failing which it shall carry an interest @ 9% p.a. from the date of default till actual realization.</p>
                  <span className="absolute -right-2 -top-2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded hidden group-hover:block z-10">Extracting Conditions/Deadline...</span>
                </div>

                <p>3. The Opposite Party shall also pay Rs. 5,000/- towards the cost of litigation.</p>
             </div>
          </div>
        </div>

        {/* Right Side - Intelligence Workspace */}
        <div className="w-1/2 space-y-6 overflow-y-auto pr-2">
           <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-5 shadow-md">
             <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">Order Metadata</h2>
             <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-slate-400 block text-xs">Order Date</span><span className="font-bold">05-May-2025</span></div>
                <div><span className="text-slate-400 block text-xs">Order Type</span><span className="font-bold">Final Order</span></div>
                <div><span className="text-slate-400 block text-xs">Court/Authority</span><span className="font-bold">District Commission, Pune</span></div>
                <div><span className="text-slate-400 block text-xs">Subsequent Orders</span><span className="font-bold text-emerald-400 flex gap-1 items-center"><CheckCircle2 className="w-3 h-3"/> None Detected</span></div>
             </div>
           </div>

           <div>
             <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2 flex items-center justify-between">
                Extracted Obligations
                <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-1 rounded flex items-center gap-1"><Cpu className="w-3 h-3"/> AI COMPILED</span>
             </h2>

             <div className="space-y-4">
                {/* Obligation 1 */}
                <div className="bg-white border border-amber-300 rounded-xl shadow-sm overflow-hidden">
                  <div className="bg-amber-50 px-4 py-2 border-b border-amber-200 flex justify-between items-center">
                    <span className="font-bold text-amber-900 text-sm">O1: Refund</span>
                    <button className="text-xs text-amber-700 hover:text-amber-900 flex items-center gap-1 font-bold"><Edit3 className="w-3 h-3"/> EDIT</button>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-3 text-sm">
                    <div><span className="text-slate-500 block text-[10px] uppercase font-bold">Responsible Party</span><span className="text-slate-900 font-medium">Respondent</span></div>
                    <div><span className="text-slate-500 block text-[10px] uppercase font-bold">Amount</span><span className="text-slate-900 font-bold">?2,00,000</span></div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">Base Deadline</span>
                      <span className="text-slate-900 font-medium">30 Days (04-Jun-2025)</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">Expected Outcome</span>
                      <span className="text-slate-900 font-medium">Complete Refund</span>
                    </div>
                    <div className="col-span-2 mt-2 pt-2 border-t border-slate-100">
                      <span className="text-slate-500 block text-[10px] uppercase font-bold mb-1">Conditional Interest</span>
                      <span className="text-slate-800 text-xs bg-slate-50 p-2 rounded block border border-slate-100">IF default beyond 30 days ? THEN 9% p.a. from date of default.</span>
                    </div>
                  </div>
                </div>

                {/* Obligation 2 */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                  <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
                    <span className="font-bold text-slate-800 text-sm">O2: Litigation Costs</span>
                    <button className="text-xs text-slate-500 hover:text-slate-700 flex items-center gap-1 font-bold"><Edit3 className="w-3 h-3"/> EDIT</button>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-3 text-sm">
                    <div><span className="text-slate-500 block text-[10px] uppercase font-bold">Responsible Party</span><span className="text-slate-900 font-medium">Respondent</span></div>
                    <div><span className="text-slate-500 block text-[10px] uppercase font-bold">Amount</span><span className="text-slate-900 font-bold">?5,000</span></div>
                    <div><span className="text-slate-500 block text-[10px] uppercase font-bold">Confidence</span><span className="text-emerald-600 font-bold">High</span></div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenI_OrderCompiler.tsx'), screenI, 'utf8');

console.log('Created Screen G, H, I.');
