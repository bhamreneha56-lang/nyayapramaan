// Screen D - CASE UNDERSTANDING
import React, { useState } from 'react';
import { useApp } from '../../state/store';
import { BrainCircuit, CheckCircle2, ShieldCheck, Search, Filter, Layers, Users, MapPin, AlertTriangle, FileText, ChevronRight, Activity, Calendar, IndianRupee, GitMerge, FileCheck } from 'lucide-react';

export const ScreenD_CaseUnderstanding: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [activeTab, setActiveTab] = useState('OVERVIEW');
  const [analyzing, setAnalyzing] = useState(false);
  const [runHistory, setRunHistory] = useState(['Run #1 (03 Oct 2026)', 'Run #2 (04 Oct 2026)']);

  const handleReRun = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setRunHistory([...runHistory, `Run #${runHistory.length + 1} (Current)`]);
      alert("Analysis completed. 2 new claims added.");
    }, 2000);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-500 pb-24">
      {/* HEADER */}
      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm flex justify-between items-start">
        <div>
          <p className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1"><BrainCircuit className="w-4 h-4"/> WORKSPACE 4</p>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide mb-2">CASE INTELLIGENCE / RECORD UNDERSTANDING</h1>
          <p className="text-sm text-slate-600">Case: Anita Deshmukh v. BrightHome Interiors | CC/2025/00142</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => alert("Opening uncertainties review...")} className="bg-red-50 text-red-700 border border-red-200 font-bold px-4 py-2 rounded shadow-sm hover:bg-red-100 transition-colors text-sm flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Review Uncertain Items (2)</button>
          <button onClick={handleReRun} disabled={analyzing} className="bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded shadow-sm hover:bg-amber-400 transition-colors text-sm flex items-center gap-2">
            {analyzing ? 'ANALYZING...' : 'RE-RUN ANALYSIS'}
          </button>
        </div>
      </div>

      {/* ANALYSIS STATUS BANNER */}
      <div className="bg-slate-900/90 backdrop-blur-md text-white border border-slate-700 rounded-xl p-4 shadow-md flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
           <span className="font-bold text-amber-400">CASE INTELLIGENCE STATUS:</span>
           <span className="bg-slate-800 px-3 py-1 rounded text-slate-300">Documents: 8</span>
           <span className="bg-emerald-900/50 text-emerald-400 border border-emerald-800 px-3 py-1 rounded">Processed: 8</span>
        </div>
        <div className="flex gap-4 text-xs font-bold text-slate-400">
           <span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 className="w-4 h-4"/> Parties</span>
           <span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 className="w-4 h-4"/> Dates</span>
           <span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 className="w-4 h-4"/> Amounts</span>
           <span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 className="w-4 h-4"/> Facts</span>
           <span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 className="w-4 h-4"/> Claims</span>
           <span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 className="w-4 h-4"/> Issues</span>
           <span className="flex items-center gap-1 text-amber-400"><AlertTriangle className="w-4 h-4"/> Needs Review: 2</span>
        </div>
      </div>

      <div className="flex gap-6">
        
        {/* LEFT FILTERS */}
        <div className="w-1/5 space-y-4">
          <div className="bg-white/85 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-sm">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Filters</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" defaultChecked className="accent-amber-500"/> High Confidence</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" defaultChecked className="accent-amber-500"/> Medium Confidence</label>
              <label className="flex items-center gap-2 cursor-pointer text-red-600 font-bold"><input type="checkbox" defaultChecked className="accent-amber-500"/> Low / Review Required</label>
            </div>
          </div>
          
          <div className="bg-white/85 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-sm">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Run History</h3>
            <div className="space-y-2 text-xs text-slate-600 font-mono">
              {runHistory.map((run, i) => (
                <div key={i} className="p-2 bg-slate-50 border border-slate-200 rounded cursor-pointer hover:bg-slate-100">{run}</div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN AREA */}
        <div className="w-4/5 space-y-6">
          {/* TABS */}
          <div className="flex overflow-x-auto border-b border-slate-300 gap-2 pb-2">
             {['OVERVIEW', 'PARTIES', 'FACTS', 'CLAIMS', 'DATES', 'AMOUNTS', 'LEGAL ISSUES', 'ORDERS', 'EVIDENCE', 'UNCERTAINTIES'].map(tab => (
               <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-colors ${activeTab === tab ? 'bg-amber-500 text-slate-900' : 'bg-slate-200/50 text-slate-600 hover:bg-slate-200'}`}>
                 {tab}
               </button>
             ))}
          </div>

          <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm min-h-[500px]">
            {activeTab === 'OVERVIEW' && (
              <div className="animate-in fade-in">
                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <Users className="w-6 h-6 text-blue-500 mx-auto mb-2"/>
                    <p className="text-2xl font-black text-slate-900">2</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Parties</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <FileText className="w-6 h-6 text-amber-500 mx-auto mb-2"/>
                    <p className="text-2xl font-black text-slate-900">14</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Facts</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <Activity className="w-6 h-6 text-red-500 mx-auto mb-2"/>
                    <p className="text-2xl font-black text-slate-900">4</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Claims</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-500 mx-auto mb-2"/>
                    <p className="text-2xl font-black text-slate-900">3</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Potential Issues</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <Calendar className="w-6 h-6 text-purple-500 mx-auto mb-2"/>
                    <p className="text-2xl font-black text-slate-900">9</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Dates</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <IndianRupee className="w-6 h-6 text-teal-500 mx-auto mb-2"/>
                    <p className="text-2xl font-black text-slate-900">6</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Amounts</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <FileCheck className="w-6 h-6 text-slate-700 mx-auto mb-2"/>
                    <p className="text-2xl font-black text-slate-900">1</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Orders</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center cursor-pointer hover:bg-red-100">
                    <AlertTriangle className="w-6 h-6 text-red-600 mx-auto mb-2"/>
                    <p className="text-2xl font-black text-red-700">3</p>
                    <p className="text-[10px] font-bold text-red-600 uppercase">Uncertainties</p>
                  </div>
                </div>

                <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4 border-b border-blue-200 pb-2">AI-Assisted Summary</h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    The dispute involves a claim for a refund of ?2,00,000 paid for interior services that the Complainant alleges were defective. The District Consumer Commission passed a Final Order on <button className="text-blue-600 font-bold hover:underline">05 May 2025</button> directing the Respondent to refund the amount within 30 days, failing which 9% interest applies. Bank records show a partial payment of ?1,25,000 on <button className="text-blue-600 font-bold hover:underline">09 Jun 2025</button>, while an affidavit from the Respondent claims full payment was made, creating a factual contradiction.
                  </p>
                  <div className="bg-white p-3 rounded border border-slate-200 text-xs">
                    <span className="font-bold text-slate-500 uppercase mr-2">Sources Used:</span>
                    <button className="text-blue-600 hover:underline mr-3">Order.pdf (Pages 1-8)</button>
                    <button className="text-blue-600 hover:underline mr-3">Complaint.pdf (Pages 1-4)</button>
                    <button className="text-blue-600 hover:underline">Bank_Record.pdf (Pages 1-2)</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'FACTS' && (
              <div className="animate-in fade-in space-y-4">
                <div className="bg-amber-50 border border-amber-200 p-3 rounded flex justify-between items-center text-sm">
                  <span className="text-amber-800 font-bold">RECORD-BASED FACTS</span>
                  <span className="text-amber-700 text-xs">AI Extraction Confidence: High (94%)</span>
                </div>
                
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 border-b border-slate-200 text-slate-600 text-[10px] uppercase font-bold">
                      <tr><th className="p-3">Fact</th><th className="p-3">Type</th><th className="p-3">Source</th><th className="p-3">Confidence</th><th className="p-3">Actions</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-medium text-slate-900">Consumer paid ?5,00,000 initial consideration.</td>
                        <td className="p-3 text-xs"><span className="bg-slate-100 px-2 py-1 rounded">Financial</span></td>
                        <td className="p-3"><button className="text-blue-600 font-bold text-xs hover:underline">Invoice.pdf (Pg 2)</button></td>
                        <td className="p-3 text-xs text-emerald-600 font-bold">96%</td>
                        <td className="p-3"><button className="text-slate-500 text-xs font-bold hover:text-slate-900">EDIT</button></td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-medium text-slate-900">Bank record shows ?1,25,000 transferred on 09 Jun.</td>
                        <td className="p-3 text-xs"><span className="bg-slate-100 px-2 py-1 rounded">Payment</span></td>
                        <td className="p-3"><button className="text-blue-600 font-bold text-xs hover:underline">Bank_Record.pdf (Pg 1)</button></td>
                        <td className="p-3 text-xs text-emerald-600 font-bold">99%</td>
                        <td className="p-3"><button className="text-slate-500 text-xs font-bold hover:text-slate-900">EDIT</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'CLAIMS' && (
              <div className="animate-in fade-in space-y-4">
                <div className="bg-red-50 border border-red-200 p-3 rounded flex justify-between items-center text-sm">
                  <span className="text-red-800 font-bold">ASSERTED CLAIMS (Unverified)</span>
                  <span className="text-red-700 text-xs">Requires Source Corroboration</span>
                </div>
                
                <div className="border border-slate-200 rounded-lg bg-white p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900 text-base">"Full ?2,00,000 payment was made."</h4>
                    <span className="bg-red-100 text-red-800 text-[10px] px-2 py-1 rounded font-bold uppercase">UNCORROBORATED / REVIEW</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mt-4 border-t border-slate-100 pt-4">
                    <div><span className="block text-[10px] text-slate-500 font-bold uppercase">Claimed By</span><span className="font-medium">Respondent</span></div>
                    <div><span className="block text-[10px] text-slate-500 font-bold uppercase">Source</span><button className="text-blue-600 font-bold text-xs hover:underline">Affidavit.pdf (Pg 3)</button></div>
                    <div><span className="block text-[10px] text-slate-500 font-bold uppercase">Supporting Evidence</span><span className="italic text-slate-400">None identified</span></div>
                    <div><span className="block text-[10px] text-red-600 font-bold uppercase">Contradicting Evidence</span><button className="text-blue-600 font-bold text-xs hover:underline">Bank_Record.pdf (?1.25L)</button></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'DATES' && (
              <div className="animate-in fade-in">
                 <table className="w-full text-left text-sm border border-slate-200 rounded-lg overflow-hidden bg-white">
                    <thead className="bg-slate-100 border-b border-slate-200 text-slate-600 text-[10px] uppercase font-bold">
                      <tr><th className="p-3">Normalized Date</th><th className="p-3">Original Text</th><th className="p-3">Event</th><th className="p-3">Source</th><th className="p-3">Status</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">05 May 2025</td>
                        <td className="p-3 text-xs text-slate-500">"05/05/2025"</td>
                        <td className="p-3">Final Order</td>
                        <td className="p-3"><button className="text-blue-600 hover:underline">Order.pdf</button></td>
                        <td className="p-3 text-emerald-600 font-bold text-xs">? Verified</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-3 font-bold text-slate-900">08 Jun 2025</td>
                        <td className="p-3 text-xs text-slate-500">"8th June"</td>
                        <td className="p-3">Payment Claim</td>
                        <td className="p-3"><button className="text-blue-600 hover:underline">Affidavit.pdf</button></td>
                        <td className="p-3 text-red-600 font-bold text-xs">? Contradiction</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-3 font-bold text-slate-900">09 Jun 2025</td>
                        <td className="p-3 text-xs text-slate-500">"09-Jun-25"</td>
                        <td className="p-3">Bank Transfer</td>
                        <td className="p-3"><button className="text-blue-600 hover:underline">Bank_Record.pdf</button></td>
                        <td className="p-3 text-red-600 font-bold text-xs">? Contradiction</td>
                      </tr>
                    </tbody>
                 </table>
              </div>
            )}

            {activeTab === 'LEGAL ISSUES' && (
              <div className="animate-in fade-in space-y-4">
                 <div className="bg-white border border-amber-300 rounded-xl p-5 shadow-sm">
                   <div className="flex justify-between items-start mb-2">
                     <h4 className="font-bold text-slate-900 text-lg">Potential Legal Issue: Refund Obligation</h4>
                     <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-1 rounded font-bold uppercase">AI SUGGESTION (72% Conf)</span>
                   </div>
                   <p className="text-sm text-slate-600 mb-4">The core dispute involves whether the respondent fulfilled the refund ordered by the commission.</p>
                   <div className="flex gap-4">
                     <button onClick={() => alert("Issue added to Matrix.")} className="bg-amber-500 text-slate-900 px-4 py-2 rounded text-xs font-bold hover:bg-amber-400">ADD TO ISSUE MATRIX</button>
                     <button onClick={() => setCurrentScreen('F')} className="bg-slate-100 text-slate-700 border border-slate-300 px-4 py-2 rounded text-xs font-bold hover:bg-slate-200">RESEARCH ISSUE</button>
                     <button onClick={() => alert("Suggestion dismissed.")} className="bg-white text-red-600 border border-red-200 px-4 py-2 rounded text-xs font-bold hover:bg-red-50">DISMISS</button>
                   </div>
                 </div>
              </div>
            )}
            
            {activeTab === 'PARTIES' && (
              <div className="animate-in fade-in p-10 text-center text-slate-500">
                <p>Party extraction views are generated dynamically. (Demo view simplified)</p>
              </div>
            )}
            
             {activeTab === 'AMOUNTS' && (
              <div className="animate-in fade-in p-10 text-center text-slate-500">
                <p>Amount Register parsed successfully. (Demo view simplified)</p>
              </div>
            )}
            
             {activeTab === 'ORDERS' && (
              <div className="animate-in fade-in space-y-4 text-center py-10">
                <FileCheck className="w-12 h-12 text-slate-300 mx-auto mb-4"/>
                <p className="font-bold text-slate-900">1 Court Order Detected</p>
                <p className="text-sm text-slate-500 mb-6">Final Order (05 May 2025)</p>
                <button onClick={() => setCurrentScreen('I')} className="bg-amber-500 text-slate-900 px-6 py-2 rounded font-bold hover:bg-amber-400">OPEN ORDER COMPILER</button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-64 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-300 p-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] flex justify-between items-center z-50">
         <div className="flex items-center gap-4 text-sm font-bold text-slate-700">
            <span className="flex items-center gap-1"><GitMerge className="w-4 h-4 text-purple-500"/> Entity Resolution: Complete</span>
         </div>
         <div className="flex gap-4">
            <button onClick={() => alert("Trace opened.")} className="px-6 py-2.5 rounded-lg border-2 border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors">VIEW EXTRACTION TRACE</button>
            <button onClick={() => setCurrentScreen('E')} className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-900 font-black text-sm hover:bg-amber-400 hover:-translate-y-0.5 transition-all shadow-lg flex items-center gap-2">CONTINUE TO ISSUE MATRIX <ChevronRight className="w-4 h-4"/></button>
         </div>
      </div>
    </div>
  );
};
