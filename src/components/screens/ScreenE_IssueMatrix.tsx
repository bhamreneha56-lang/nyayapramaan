// Screen E - LAWYER ISSUE MATRIX
import React, { useState } from 'react';
import { useApp } from '../../state/store';
import { BookOpen, Search, Filter, Plus, ChevronRight, FileText, ChevronDown, CheckCircle, AlertTriangle } from 'lucide-react';

export const ScreenE_IssueMatrix: React.FC = () => {
  const { setCurrentScreen, setPrefillQuery } = useApp();
  const [expanded, setExpanded] = useState(null);

  const issues = [
    { id: 'I-01', title: 'Refund', facts: '?2,00,000 ordered', law: 'Consumer Protection Act', evidence: '?1,25,000 bank record', precedent: '3 related judgments', gap: '?75,000 missing', status: 'PARTIAL', conf: 'User Confirmed' },
    { id: 'I-02', title: 'Deficiency in Service', facts: 'Defective interiors', law: 'Sec 2(11) CPA', evidence: 'Complaint.pdf', precedent: 'None linked', gap: 'Requires review', status: 'REVIEW', conf: 'AI Suggested' },
    { id: 'I-03', title: 'Compensation', facts: 'Not specified', law: 'None', evidence: 'None', precedent: 'None', gap: 'No evidence', status: 'UNRESOLVED', conf: 'AI Suggested' }
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-500 pb-24">
      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm flex justify-between items-start">
        <div>
          <p className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1"><BookOpen className="w-4 h-4"/> WORKSPACE 5</p>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide mb-2">LEGAL ISSUE MATRIX</h1>
          <p className="text-sm text-slate-600">Case: Anita Deshmukh v. BrightHome Interiors | Analysis Status: 3 Issues</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-slate-100 border border-slate-300 text-slate-700 px-4 py-2 rounded text-sm font-bold flex items-center gap-2"><Plus className="w-4 h-4"/> ADD ISSUE</button>
        </div>
      </div>

      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl shadow-sm overflow-hidden">
         <div className="flex justify-between items-center p-4 border-b border-slate-200 bg-slate-50">
            <div className="flex gap-4">
              <button className="text-xs font-bold text-amber-700 border-b-2 border-amber-500 pb-1">ISSUE MATRIX</button>
              <button className="text-xs font-bold text-slate-500 hover:text-slate-900 pb-1">CLAIM COVERAGE</button>
            </div>
            <div className="flex gap-2">
               <input type="text" placeholder="Search issues..." className="border border-slate-300 rounded px-3 py-1 text-xs"/>
               <button className="bg-white border border-slate-300 p-1 rounded"><Filter className="w-4 h-4 text-slate-600"/></button>
            </div>
         </div>
         
         <table className="w-full text-left text-sm">
           <thead className="bg-slate-100 text-[10px] text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
             <tr>
               <th className="p-3 pl-6">ID</th>
               <th className="p-3">Legal Issue</th>
               <th className="p-3">Facts</th>
               <th className="p-3">Law Linked</th>
               <th className="p-3">Gap</th>
               <th className="p-3">Status</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-slate-100">
             {issues.map(iss => (
               <React.Fragment key={iss.id}>
                 <tr onClick={() => setExpanded(expanded === iss.id ? null : iss.id)} className="hover:bg-amber-50/50 cursor-pointer transition-colors">
                   <td className="p-4 pl-6 font-mono text-slate-500 text-xs flex items-center gap-2"><ChevronDown className={`w-4 h-4 transition-transform ${expanded === iss.id ? 'rotate-180' : ''}`}/> {iss.id}</td>
                   <td className="p-4 font-bold text-slate-900">{iss.title} <span className="block text-[9px] text-slate-400 uppercase font-normal">{iss.conf}</span></td>
                   <td className="p-4 text-xs text-slate-600">{iss.facts}</td>
                   <td className="p-4 text-xs text-blue-600 hover:underline">{iss.law}</td>
                   <td className="p-4 text-xs text-red-600 font-bold">{iss.gap}</td>
                   <td className="p-4 text-xs">
                     <span className={`px-2 py-1 rounded font-bold ${iss.status === 'PARTIAL' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>{iss.status}</span>
                   </td>
                 </tr>
                 {expanded === iss.id && (
                   <tr className="bg-slate-50 border-b-2 border-amber-200">
                     <td colSpan={6} className="p-6">
                        <div className="grid grid-cols-3 gap-6">
                          <div>
                            <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Applicable Law</h4>
                            <div className="bg-white p-3 border border-slate-200 rounded text-sm mb-2">{iss.law}</div>
                            <button onClick={() => { setPrefillQuery(iss.title); setCurrentScreen('F'); }} className="text-xs bg-blue-50 text-blue-700 font-bold px-3 py-1.5 rounded border border-blue-200 w-full hover:bg-blue-100">FIND LAW & PRECEDENTS</button>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Evidence Coverage</h4>
                            <div className="bg-white p-3 border border-slate-200 rounded text-sm flex items-center justify-between"><span className="text-slate-700">{iss.evidence}</span> <CheckCircle className="w-4 h-4 text-emerald-500"/></div>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-red-500 uppercase mb-2">Evidence Gap</h4>
                            <div className="bg-red-50 p-3 border border-red-200 rounded text-sm flex items-center justify-between"><span className="text-red-700 font-bold">{iss.gap}</span> <AlertTriangle className="w-4 h-4 text-red-500"/></div>
                          </div>
                        </div>
                     </td>
                   </tr>
                 )}
               </React.Fragment>
             ))}
           </tbody>
         </table>
      </div>
      
      <div className="fixed bottom-0 left-64 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-300 p-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] flex justify-end z-50">
         <button onClick={() => setCurrentScreen('F')} className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-900 font-black text-sm hover:bg-amber-400 hover:-translate-y-0.5 transition-all shadow-lg flex items-center gap-2">CONTINUE TO LEGAL RAG <ChevronRight className="w-4 h-4"/></button>
      </div>
    </div>
  );
};
