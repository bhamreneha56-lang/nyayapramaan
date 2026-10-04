const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

const screenC = `// Screen C - CASE DOCUMENT MANAGEMENT
import React from 'react';
import { useApp } from '../../state/store';
import { UploadCloud, FileText, CheckCircle, Clock, Search, ChevronRight } from 'lucide-react';

export const ScreenC_UploadDocs: React.FC = () => {
  const { setCurrentScreen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">CASE DOCUMENT MANAGEMENT</h1>
        <button onClick={() => setCurrentScreen('D')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400">CONTINUE <ChevronRight className="w-4 h-4"/></button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-6 text-sm font-bold">
        <button className="pb-3 border-b-2 border-amber-500 text-amber-600">Required Documents</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">Pleadings</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">Orders</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">Evidence</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">Other</button>
      </div>

      {/* Pipeline tracker */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex justify-between text-xs font-medium text-slate-500 items-center">
        <span className="font-bold text-slate-700">UPLOAD PIPELINE:</span>
        <span className="text-emerald-600 flex gap-1"><CheckCircle className="w-4 h-4"/> UPLOAD</span> ?
        <span className="text-emerald-600 flex gap-1"><CheckCircle className="w-4 h-4"/> TEXT EXTRACTION</span> ?
        <span className="text-emerald-600 flex gap-1"><CheckCircle className="w-4 h-4"/> OCR</span> ?
        <span className="text-emerald-600 flex gap-1"><CheckCircle className="w-4 h-4"/> CLASSIFICATION</span> ?
        <span className="text-emerald-600 flex gap-1"><CheckCircle className="w-4 h-4"/> INDEXING</span> ?
        <span className="text-emerald-600 flex gap-1 font-bold"><CheckCircle className="w-4 h-4"/> READY</span>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase">
            <tr><th className="p-4">Filename</th><th className="p-4">Document Type</th><th className="p-4">Date</th><th className="p-4">Version</th><th className="p-4">OCR Status</th><th className="p-4">Actions</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2"><FileText className="w-4 h-4 text-slate-400"/> Order_05May2025.pdf</td>
              <td className="p-4"><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-bold">Final Order</span></td>
              <td className="p-4 text-slate-600">05-May-2025</td><td className="p-4 text-slate-600">v1.0</td>
              <td className="p-4 text-emerald-600 text-xs font-bold">? 100%</td>
              <td className="p-4 flex gap-2"><button className="text-blue-600 text-xs font-bold hover:underline">VIEW</button> <button className="text-slate-500 text-xs font-bold hover:underline">EXTRACT</button></td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2"><FileText className="w-4 h-4 text-slate-400"/> Bank_Statement_June.pdf</td>
              <td className="p-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-bold">Bank Record</span></td>
              <td className="p-4 text-slate-600">09-Jun-2025</td><td className="p-4 text-slate-600">v1.0</td>
              <td className="p-4 text-emerald-600 text-xs font-bold">? 98%</td>
              <td className="p-4 flex gap-2"><button className="text-blue-600 text-xs font-bold hover:underline">VIEW</button> <button className="text-slate-500 text-xs font-bold hover:underline">EXTRACT</button></td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2"><FileText className="w-4 h-4 text-slate-400"/> Affidavit_Deshmukh.pdf</td>
              <td className="p-4"><span className="px-2 py-1 bg-slate-100 text-slate-800 rounded text-xs font-bold">Affidavit</span></td>
              <td className="p-4 text-slate-600">08-Jun-2025</td><td className="p-4 text-slate-600">v1.0</td>
              <td className="p-4 text-emerald-600 text-xs font-bold">? 95%</td>
              <td className="p-4 flex gap-2"><button className="text-blue-600 text-xs font-bold hover:underline">VIEW</button> <button className="text-slate-500 text-xs font-bold hover:underline">EXTRACT</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-slate-500 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
        <UploadCloud className="w-10 h-10 text-amber-400 mb-3" />
        <h3 className="text-slate-900 font-bold mb-1">Upload New Document</h3>
        <p className="text-xs">Drag and drop or click to browse files (PDF, DOCX, JPG, MSG)</p>
      </div>
    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenC_UploadDocs.tsx'), screenC, 'utf8');

const screenD = `// Screen D - CASE UNDERSTANDING
import React from 'react';
import { useApp } from '../../state/store';
import { FileSearch, GitMerge, Shield, ChevronRight } from 'lucide-react';

export const ScreenD_CaseUnderstanding: React.FC = () => {
  const { setCurrentScreen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">CASE INTELLIGENCE WORKSPACE</h1>
          <p className="text-sm text-slate-600 mt-2">AI-extracted facts, claims, entities, and provenance analysis.</p>
        </div>
        <button onClick={() => setCurrentScreen('E')} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400">CONTINUE <ChevronRight className="w-4 h-4"/></button>
      </div>

      <div className="flex border-b border-slate-200 gap-6 text-sm font-bold">
        <button className="pb-3 text-slate-500 hover:text-slate-800">Overview</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">Parties</button>
        <button className="pb-3 border-b-2 border-amber-500 text-amber-600">Extracted Facts</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">Claims</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">Entities</button>
        <button className="pb-3 text-slate-500 hover:text-slate-800">Issues</button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase mb-4 flex justify-between">
              Extracted Facts 
              <button className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded flex items-center gap-1"><Shield className="w-3 h-3"/> PII SHIELD ACTIVE</button>
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <p className="text-sm text-slate-900 font-medium mb-2">?2,00,000 refund ordered by District Consumer Commission.</p>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex gap-3">
                    <span className="text-slate-500">SOURCE: <button className="font-bold text-blue-600 hover:underline">Order.pdf (Page 4)</button></span>
                    <span className="text-emerald-600 font-bold">CONFIDENCE: 98%</span>
                  </div>
                  <button className="text-amber-600 font-bold hover:underline">VIEW PROVENANCE</button>
                </div>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <p className="text-sm text-slate-900 font-medium mb-2">Complainant paid ?1,25,000 on 09-Jun-2025.</p>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex gap-3">
                    <span className="text-slate-500">SOURCE: <button className="font-bold text-blue-600 hover:underline">Bank_Statement_June.pdf (Page 1)</button></span>
                    <span className="text-emerald-600 font-bold">CONFIDENCE: 96%</span>
                  </div>
                  <button className="text-amber-600 font-bold hover:underline">VIEW PROVENANCE</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase mb-4">Claims Analysis</h3>
            <div className="p-3 border border-red-200 bg-red-50 rounded-lg">
              <p className="text-sm text-slate-900 font-medium mb-2">"Full payment of ?2,00,000 made as per order."</p>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">SOURCE: <button className="font-bold text-blue-600 hover:underline">Affidavit_Deshmukh.pdf</button></span>
                <span className="text-red-600 font-bold">CORROBORATION: NOT ESTABLISHED</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase mb-4">Entity Resolution</h3>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-800 text-sm">A. Deshmukh</span>
                <GitMerge className="w-4 h-4 text-amber-500" />
                <span className="font-bold text-slate-800 text-sm">Anita Deshmukh</span>
              </div>
              <p className="text-xs text-emerald-600 font-bold mb-3 text-center">MATCHED ENTITY</p>
              <div className="flex justify-center gap-2">
                <button className="px-3 py-1 bg-slate-200 text-slate-800 text-xs font-bold rounded hover:bg-slate-300">MERGE</button>
                <button className="px-3 py-1 bg-white border border-slate-300 text-slate-600 text-xs font-bold rounded hover:bg-slate-50">REJECT</button>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase mb-4">Document Classification</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-600">Order_05May2025.pdf</span>
                <span className="font-bold text-emerald-600">Final Order (99%)</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-600">Bank_Statement.pdf</span>
                <span className="font-bold text-emerald-600">Bank Record (97%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Affidavit.pdf</span>
                <span className="font-bold text-emerald-600">Affidavit (95%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
`;
fs.writeFileSync(path.join(screensDir, 'ScreenD_CaseUnderstanding.tsx'), screenD, 'utf8');

console.log('Created Screen C and D.');
