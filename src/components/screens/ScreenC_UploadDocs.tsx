// Screen C - UPLOAD CASE DOCS
import React, { useState } from 'react';
import { useApp } from '../../state/store';
import { UploadCloud, FileText, CheckCircle, Clock, Search, ChevronRight, History, ShieldCheck, AlertTriangle, File, Plus, Target, LayoutGrid } from 'lucide-react';

export const ScreenC_UploadDocs: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [activeTab, setActiveTab] = useState('ALL');
  const [showProvenance, setShowProvenance] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [documents, setDocuments] = useState([
    { id: '1', name: 'Order_05May2025.pdf', type: 'Order', date: '05 May', uploader: 'User', pages: 8, authority: '1.0', ocr: 'No', status: 'Ready', linked: 'O1/O2/O3', required: true },
    { id: '2', name: 'Bank_Statement_June.pdf', type: 'Evidence', date: '09 Jun', uploader: 'Respondent', pages: 2, authority: '1.0', ocr: 'Yes', status: 'Ready', linked: 'O1', required: true },
    { id: '3', name: 'Affidavit_Deshmukh.pdf', type: 'Affidavit', date: '20 Jun', uploader: 'Respondent', pages: 4, authority: '0.4', ocr: 'Yes', status: 'Review', linked: 'O1', required: false },
    { id: '4', name: 'Complaint.pdf', type: 'Petition', date: '04 Mar', uploader: 'User', pages: 12, authority: '1.0', ocr: 'No', status: 'Ready', linked: 'Case', required: true },
    { id: '5', name: 'Receipt_Service.pdf', type: 'Evidence', date: '10 Mar', uploader: 'User', pages: 1, authority: '0.8', ocr: 'Yes', status: 'Ready', linked: 'Payment', required: false }
  ]);

  const handleSimulateUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      alert("Documents processed successfully.");
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-500 pb-24">
      {/* HEADER */}
      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm flex justify-between items-start">
        <div>
          <p className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1"><UploadCloud className="w-4 h-4"/> WORKSPACE 3</p>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide mb-2">CASE DOCUMENT MANAGEMENT</h1>
          <p className="text-sm text-slate-600">Case: Anita Deshmukh v. BrightHome Interiors Pvt. Ltd. | CC/2025/00142 | Post-Order Compliance</p>
        </div>
        <div className="flex gap-2">
           <span className="bg-slate-200 text-slate-700 text-xs px-3 py-1.5 rounded font-bold flex items-center gap-1"><ShieldCheck className="w-4 h-4"/> PII SHIELD</span>
           <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded font-bold flex items-center gap-1"><LayoutGrid className="w-4 h-4"/> DEMO MODE</span>
        </div>
      </div>

      {/* SUMMARY BAR */}
      <div className="grid grid-cols-6 gap-4">
         <div className="bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-xl shadow-md border border-slate-700 cursor-pointer hover:-translate-y-0.5 transition-all">
            <p className="text-xs text-slate-400 font-bold uppercase">Total</p>
            <p className="text-2xl font-black">{documents.length}</p>
         </div>
         <div className="bg-emerald-50/90 backdrop-blur-md text-emerald-900 p-4 rounded-xl shadow-sm border border-emerald-200 cursor-pointer hover:-translate-y-0.5 transition-all">
            <p className="text-xs text-emerald-700 font-bold uppercase">Processed</p>
            <p className="text-2xl font-black">4</p>
         </div>
         <div className="bg-blue-50/90 backdrop-blur-md text-blue-900 p-4 rounded-xl shadow-sm border border-blue-200 cursor-pointer hover:-translate-y-0.5 transition-all">
            <p className="text-xs text-blue-700 font-bold uppercase">Processing</p>
            <p className="text-2xl font-black">{uploading ? '1' : '0'}</p>
         </div>
         <div className="bg-amber-50/90 backdrop-blur-md text-amber-900 p-4 rounded-xl shadow-sm border border-amber-200 cursor-pointer hover:-translate-y-0.5 transition-all">
            <p className="text-xs text-amber-700 font-bold uppercase">Needs Review</p>
            <p className="text-2xl font-black">1</p>
         </div>
         <div className="bg-slate-50/90 backdrop-blur-md text-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:-translate-y-0.5 transition-all">
            <p className="text-xs text-slate-500 font-bold uppercase">OCR Used</p>
            <p className="text-2xl font-black">3</p>
         </div>
         <div className="bg-red-50/90 backdrop-blur-md text-red-900 p-4 rounded-xl shadow-sm border border-red-200 cursor-pointer hover:-translate-y-0.5 transition-all">
            <p className="text-xs text-red-700 font-bold uppercase">Missing Req.</p>
            <p className="text-2xl font-black">1</p>
         </div>
      </div>

      <div className="flex gap-6">
        
        <div className="w-3/4 space-y-6">
          {/* DRAG & DROP UPLOAD */}
          <div className="bg-white/85 backdrop-blur-md border-2 border-dashed border-slate-300 rounded-xl p-10 text-center hover:border-amber-400 transition-colors bg-slate-50/50">
            <UploadCloud className="w-12 h-12 text-slate-400 mx-auto mb-4"/>
            <h3 className="font-bold text-slate-900 text-lg mb-2">DRAG & DROP DOCUMENTS HERE</h3>
            <p className="text-sm text-slate-500 mb-6">Supported: PDF, DOCX, TXT, PNG, JPG (Max 50MB)</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => alert("File browser opened (Simulated)")} className="bg-white border border-slate-300 text-slate-700 font-bold px-6 py-2 rounded shadow-sm hover:bg-slate-50 transition-all">Browse Files</button>
              <button onClick={handleSimulateUpload} className="bg-amber-500 border border-amber-600 text-slate-900 font-bold px-6 py-2 rounded shadow-sm hover:bg-amber-400 transition-all">Use Sample Case Files (Synthetic)</button>
            </div>
            {uploading && (
               <div className="mt-6 w-full max-w-md mx-auto bg-slate-200 h-2 rounded-full overflow-hidden">
                 <div className="bg-blue-500 h-full animate-pulse w-2/3"></div>
               </div>
            )}
          </div>

          {/* DOCUMENT TABS */}
          <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl overflow-hidden shadow-sm">
             <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50/80">
               {['ALL', 'PLEADINGS', 'ORDERS', 'EVIDENCE', 'FINANCIAL', 'AFFIDAVITS', 'REPORTS', 'OTHER'].map(tab => (
                 <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-3 text-xs font-bold whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-amber-500 text-amber-700 bg-white' : 'text-slate-500 hover:text-slate-800'}`}>
                   {tab}
                 </button>
               ))}
             </div>
             
             {/* PROVENANCE MODAL */}
             {showProvenance && (
              <div className="bg-white border-b-2 border-slate-300 p-8 shadow-inner relative bg-slate-50/90">
                <button onClick={() => setShowProvenance(false)} className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 font-bold">?</button>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 w-full mb-6 flex justify-between items-center">
                  <span className="font-bold text-blue-900 text-sm uppercase tracking-wider flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> NYAYATRACE DIFFERENTIATOR</span>
                  <span className="text-xs text-blue-700">Evidence Chain of Custody</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><History className="w-5 h-5"/> Provenance Record: BANK_STATEMENT.PDF</h2>
                <div className="space-y-2 text-sm font-medium text-slate-700 mt-4">
                   <div className="flex justify-between p-2 bg-white border border-slate-200 rounded"><span className="text-slate-500 font-bold">Uploaded</span><span>04 Oct 2026 10:21</span></div>
                   <div className="flex justify-between p-2 bg-white border border-slate-200 rounded"><span className="text-slate-500 font-bold">OCR / Extraction</span><span>04 Oct 2026 10:22</span></div>
                   <div className="flex justify-between p-2 bg-white border border-slate-200 rounded"><span className="text-slate-500 font-bold">Matched to O1</span><span>04 Oct 2026 10:23</span></div>
                   <div className="flex justify-between p-2 bg-emerald-50 border border-emerald-200 rounded text-emerald-800"><span className="font-bold">Reviewer Viewed</span><span>Current Session</span></div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-400 font-mono">
                  HASH: 8f4e3b2a9c1d5e6f7a8b9c0d1e2f3a4b | UPLOADER: Respondent
                </div>
              </div>
             )}

             <table className="w-full text-left text-sm">
               <thead className="bg-slate-100 border-b border-slate-200 text-slate-600 text-[10px] uppercase font-bold tracking-wider">
                 <tr>
                   <th className="p-3 pl-6">Sr.</th>
                   <th className="p-3">Document</th>
                   <th className="p-3">Type</th>
                   <th className="p-3">Date</th>
                   <th className="p-3">Authority</th>
                   <th className="p-3">Status</th>
                   <th className="p-3">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 {documents.map((doc, idx) => (
                   <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                     <td className="p-3 pl-6 font-mono text-slate-400">0{idx+1}</td>
                     <td className="p-3 font-bold text-slate-900 flex items-center gap-2">
                       <FileText className="w-4 h-4 text-blue-500"/>
                       {doc.name}
                     </td>
                     <td className="p-3 text-xs"><span className="bg-slate-200 px-2 py-0.5 rounded font-bold text-slate-700">{doc.type}</span></td>
                     <td className="p-3 text-xs text-slate-500">{doc.date}</td>
                     <td className="p-3 font-mono text-xs text-slate-600">{doc.authority}</td>
                     <td className="p-3 text-xs">
                       {doc.status === 'Ready' && <span className="text-emerald-600 font-bold flex items-center gap-1"><CheckCircle className="w-3 h-3"/> READY</span>}
                       {doc.status === 'Review' && <span className="text-amber-600 font-bold flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> REVIEW</span>}
                     </td>
                     <td className="p-3 flex gap-3 text-xs font-bold">
                       <button onClick={() => setShowProvenance(true)} className="text-purple-600 hover:underline">PROVENANCE</button>
                       <button onClick={() => alert("Opening Document Viewer")} className="text-blue-600 hover:underline">VIEW</button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-1/4 space-y-6">
           <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm">
             <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Missing / Required</h3>
             <ul className="space-y-3 text-sm font-medium">
               <li className="flex justify-between items-center bg-red-50 border border-red-200 p-2 rounded text-red-900">
                 <span>Remaining Payment Proof</span>
                 <AlertTriangle className="w-4 h-4 text-red-600"/>
               </li>
               <li className="flex justify-between items-center bg-emerald-50 border border-emerald-200 p-2 rounded text-emerald-900">
                 <span>Final Order</span>
                 <CheckCircle className="w-4 h-4 text-emerald-600"/>
               </li>
               <li className="flex justify-between items-center bg-emerald-50 border border-emerald-200 p-2 rounded text-emerald-900">
                 <span>Affidavit</span>
                 <CheckCircle className="w-4 h-4 text-emerald-600"/>
               </li>
             </ul>
             <button onClick={() => alert("Opening Evidence Request Modal")} className="mt-4 w-full text-xs bg-slate-100 text-slate-700 font-bold py-2 border border-slate-300 rounded hover:bg-slate-200 transition-colors">Request Missing Evidence</button>
           </div>
           
           <div className="bg-slate-900/90 backdrop-blur-md text-white border border-slate-800 rounded-xl p-5 shadow-lg">
             <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">Document Readiness</h3>
             <div className="space-y-2 text-sm text-slate-300">
               <div className="flex justify-between"><span>Required</span><span className="font-bold">3</span></div>
               <div className="flex justify-between"><span>Present</span><span className="font-bold text-emerald-400">2</span></div>
               <div className="flex justify-between"><span>Missing</span><span className="font-bold text-red-400">1</span></div>
             </div>
             <div className="mt-4 w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-[66%]"></div>
             </div>
           </div>
        </div>
      </div>

      {/* STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-64 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-300 p-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] flex justify-between items-center z-50">
         <div className="flex items-center gap-4 text-sm font-bold text-slate-700">
            <span>Documents: 5</span>
            <span>Processed: 4</span>
         </div>
         <div className="flex gap-4">
            <button onClick={() => alert("Documents validated.")} className="px-6 py-2.5 rounded-lg border-2 border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors flex items-center gap-2"><CheckCircle className="w-4 h-4"/> VALIDATE DOCS</button>
            <button onClick={() => setCurrentScreen('D')} className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-900 font-black text-sm hover:bg-amber-400 hover:-translate-y-0.5 transition-all shadow-lg flex items-center gap-2">CONTINUE TO INTELLIGENCE <ChevronRight className="w-4 h-4"/></button>
         </div>
      </div>
    </div>
  );
};
