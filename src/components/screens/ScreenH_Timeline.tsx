// Screen H - CASE TIMELINE
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
        <button onClick={() => setCurrentScreen('I')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-amber-500/30">CONTINUE <ChevronRight className="w-4 h-4"/></button>
      </div>

      <div className="flex gap-4 mb-6 text-sm font-medium border-b border-slate-200 pb-4 overflow-x-auto">
        <span className="font-bold text-slate-900 flex items-center gap-1"><Filter className="w-4 h-4"/> Filters:</span>
        <label className="flex items-center gap-1"><input onChange={(e) => console.log("State changed")} type="checkbox" defaultChecked/> All</label>
        <label className="flex items-center gap-1"><input onChange={(e) => console.log("State changed")} type="checkbox" defaultChecked/> Procedural</label>
        <label className="flex items-center gap-1"><input onChange={(e) => console.log("State changed")} type="checkbox" defaultChecked/> Hearings</label>
        <label className="flex items-center gap-1"><input onChange={(e) => console.log("State changed")} type="checkbox" defaultChecked/> Orders</label>
        <label className="flex items-center gap-1"><input onChange={(e) => console.log("State changed")} type="checkbox" defaultChecked/> Evidence</label>
        <label className="flex items-center gap-1"><input onChange={(e) => console.log("State changed")} type="checkbox" defaultChecked/> Deadlines</label>
      </div>

      <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:ml-[39px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        
        {/* Item 1 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <FileText className="w-3 h-3" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white/85 backdrop-blur-md shadow-sm">
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
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white/85 backdrop-blur-md shadow-sm">
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
