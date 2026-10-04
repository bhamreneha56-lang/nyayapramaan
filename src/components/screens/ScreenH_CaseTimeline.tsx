// Screen H - CASE TIMELINE
import React from 'react';
import { useApp } from '../../state/store';
import { Clock, ChevronRight, CheckCircle, FileText, AlertTriangle } from 'lucide-react';

export const ScreenH_CaseTimeline: React.FC = () => {
  const { setCurrentScreen } = useApp();

  const events = [
    { date: '04 Mar 2025', title: 'Cause of Action', type: 'Procedural', source: 'Complaint.pdf', status: '?' },
    { date: '05 May 2025', title: 'Final Order', type: 'Order', source: 'Order.pdf', status: '?' },
    { date: '04 Jun 2025', title: 'Compliance Deadline', type: 'Deadline', source: 'Calculated', status: '? 5 days late' },
    { date: '08 Jun 2025', title: 'Affidavit Claim (Payment)', type: 'Claim', source: 'Affidavit.pdf', status: '? Contradiction' },
    { date: '09 Jun 2025', title: 'Bank Payment (?1.25L)', type: 'Evidence', source: 'Bank_Record.pdf', status: '?' }
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-500 pb-24">
      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm">
        <p className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1"><Clock className="w-4 h-4"/> WORKSPACE 8</p>
        <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide mb-2">CASE TIMELINE</h1>
      </div>

      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-8 shadow-sm">
         <div className="relative border-l-2 border-amber-200 ml-4 space-y-8">
           {events.map((ev, i) => (
             <div key={i} className="pl-6 relative">
               <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ${ev.type === 'Deadline' ? 'bg-red-500' : 'bg-amber-500'} border-4 border-white`}></div>
               <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 shadow-sm hover:border-amber-300 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-xs font-bold text-slate-500">{ev.date}</span>
                      <h3 className="font-bold text-slate-900 text-lg">{ev.title}</h3>
                    </div>
                    <span className="text-xs font-bold bg-slate-200 text-slate-700 px-2 py-1 rounded">{ev.type}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-4 pt-4 border-t border-slate-100">
                    <button className="text-blue-600 font-bold hover:underline flex items-center gap-1"><FileText className="w-4 h-4"/> {ev.source}</button>
                    <span className={`font-bold ${ev.status.includes('?') ? 'text-red-600' : 'text-emerald-600'}`}>{ev.status}</span>
                  </div>
               </div>
             </div>
           ))}
         </div>
      </div>
      
      <div className="fixed bottom-0 left-64 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-300 p-4 flex justify-end z-50">
         <button onClick={() => setCurrentScreen('I')} className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-900 font-black text-sm hover:bg-amber-400 hover:-translate-y-0.5 transition-all flex items-center gap-2">CONTINUE TO ORDER COMPILER <ChevronRight className="w-4 h-4"/></button>
      </div>
    </div>
  );
};
