// Screen J - EXPECTED VS OBSERVED
import React, { useState, useEffect } from 'react';
import { useApp } from '../../state/store';
import { GitCompare, FileText, CheckCircle2, XCircle, AlertTriangle, ChevronRight } from 'lucide-react';

export const ScreenJ_ExpectedVsObserved: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [activeTab, setActiveTab] = useState('O1: Refund');
  const [obligations, setObligations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/cases/case_1/obligations')
      .then(res => res.json())
      .then(data => {
        setObligations(data);
        if(data.length > 0) setActiveTab(`O${data[0].id.replace('o','')}: ${data[0].description}`);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">COMPLIANCE ANALYSIS WORKSPACE</h1>
          <p className="text-sm text-slate-600 mt-2">Determine Expected State, match Evidence, build Observed State, and identify Differences.</p>
        </div>
        <button onClick={() => setCurrentScreen('K')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-amber-500/30">CONTINUE <ChevronRight className="w-4 h-4"/></button>
      </div>

      {/* Tabs */}
            {loading ? (
        <div className='p-4 text-slate-500 animate-pulse font-bold'>Loading Legal Data from Database...</div>
      ) : (
        <div className="flex border-b border-slate-200 gap-6 text-sm font-bold">
          {obligations.map(ob => `O${ob.id.replace('o','')}: ${ob.description}`).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-3 ${activeTab === tab ? 'border-b-2 border-amber-500 text-amber-600' : 'text-slate-500 hover:text-slate-800'}`}>{tab}</button>
          ))}
        </div>
      )}

      {activeTab !== 'O1: Refund' && !loading && <div className="p-10 text-center text-slate-500 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">The compliance analysis for {activeTab} is currently being calculated...</div>}
      <div className={`grid grid-cols-2 gap-6 ${activeTab !== 'O1: Refund' ? 'hidden' : ''}`}>
        {/* Left Side: Expected & Evidence */}
        <div className="space-y-6">
          
          <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-amber-300 animate-in slide-in-from-bottom-4 fade-in">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2 flex items-center gap-2"><GitCompare className="w-4 h-4 text-blue-500"/> Expected State</h3>
            <div className="bg-white/60 backdrop-blur-sm p-4 border border-slate-200 rounded-lg space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Requirement</span><span className="font-bold text-slate-900">Refund</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Expected Amount</span><span className="font-bold text-slate-900">?2,00,000</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Deadline</span><span className="font-bold text-red-600">04-Jun-2025</span></div>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-amber-300 animate-in slide-in-from-bottom-4 fade-in">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2 flex items-center gap-2"><FileText className="w-4 h-4 text-slate-500"/> Available Evidence</h3>
            <div className="space-y-3 text-sm">
              <div onClick={() => alert("Selection registered / View updated (Simulated)")} className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg flex justify-between items-center group cursor-pointer hover:border-emerald-300">
                 <div>
                   <p className="font-bold text-emerald-900 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Bank_Statement_June.pdf</p>
                   <p className="text-xs text-emerald-700 mt-1">Establishes: ?1,25,000 paid on 09-Jun-2025</p>
                 </div>
                 <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">MATCH: HIGH</span>
              </div>
              <div onClick={() => alert("Selection registered / View updated (Simulated)")} className="bg-amber-50 border border-amber-200 p-3 rounded-lg flex justify-between items-center group cursor-pointer hover:border-amber-300">
                 <div>
                   <p className="font-bold text-amber-900 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Affidavit_Deshmukh.pdf</p>
                   <p className="text-xs text-amber-700 mt-1">Claims: Full ?2,00,000 paid</p>
                 </div>
                 <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded">MATCH: LOW (Self-serving)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Observed & Engine */}
        <div className="space-y-6">

          <div className="bg-slate-900/90 backdrop-blur-md text-white border border-slate-800 rounded-xl p-5 shadow-md">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2 flex items-center gap-2"><GitCompare className="w-4 h-4"/> Observed State</h3>
            <div className="bg-slate-800 p-4 border border-slate-700 rounded-lg space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Verified Action</span><span className="font-bold text-emerald-400">Partial Refund</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Verified Amount</span><span className="font-bold text-white">?1,25,000</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Date of Action</span><span className="font-bold text-amber-400">09-Jun-2025</span></div>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-md border border-red-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Difference Engine Results</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 font-bold">Amount Shortfall:</span>
                <span className="text-lg font-black text-red-600">?75,000</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{width: '62.5%'}}></div>
              </div>
              <p className="text-xs font-bold text-slate-500 text-right">37.5% GAP</p>

              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <span className="text-sm text-slate-600 font-bold">Timing Difference:</span>
                <span className="text-sm font-bold text-amber-600">5 Days LATE</span>
              </div>

              <div className="p-3 bg-red-50 border border-red-100 rounded-lg mt-4">
                <p className="text-xs font-bold text-red-800 flex items-center gap-1 mb-1"><XCircle className="w-3 h-3"/> Missing Evidence</p>
                <ul className="text-xs text-red-700 list-disc pl-4 space-y-1">
                  <li>Payment proof for remaining ?75,000</li>
                  <li>Evidence supporting payment before 04-Jun deadline</li>
                </ul>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg mt-2">
                <p className="text-xs font-bold text-amber-800 flex items-center gap-1 mb-1"><AlertTriangle className="w-3 h-3"/> Contradictions Detected</p>
                <p className="text-xs text-amber-700">Affidavit claims ?2,00,000 paid; Bank Statement shows only ?1,25,000.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
