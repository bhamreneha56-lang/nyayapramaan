const fs = require('fs');
const path = require('path');

const screensDir = path.join('src', 'components', 'screens');

const screenA = `// Screen A - USER & WORKFLOW MODE
import React from 'react';
import { useApp } from '../../state/store';
import { UserCheck, Briefcase, ShieldAlert, ArrowRight, CheckCircle2, Search, Settings } from 'lucide-react';
import { InnovationBadge } from '../InnovationBadge';

export const ScreenA_ModeSelect: React.FC = () => {
  const { setMode, setCurrentScreen } = useApp();
  const handleSelectMode = (selected: 'citizen' | 'lawyer' | 'compliance' | 'researcher' | 'admin') => {
    if(selected === 'researcher' || selected === 'admin') return;
    setMode(selected as any);
    setCurrentScreen('B');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">USER & WORKFLOW MODE</h1>
        <p className="text-sm text-slate-700 mt-2">NyayaTrace adapts its cognitive density, reasoning views, and action workflows to your role and procedural context.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">D. Current Workflow Context</h2>
        <div className="grid grid-cols-3 gap-4">
          <div><span className="text-xs text-slate-500 block">CASE TYPE</span><span className="text-sm font-bold text-slate-900">Consumer Dispute</span></div>
          <div><span className="text-xs text-slate-500 block">CURRENT STAGE</span><span className="text-sm font-bold text-amber-600">Post-Order Compliance</span></div>
          <div><span className="text-xs text-slate-500 block">CURRENT WORKSPACE</span><span className="text-sm font-bold text-blue-600">Verification</span></div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">A. Role Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Citizen */}
          <div onClick={() => handleSelectMode('citizen')} className="bg-white border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-amber-400 hover:shadow-md transition-all">
            <h3 className="font-bold text-slate-900 flex items-center gap-2"><UserCheck className="w-4 h-4 text-sky-500"/> Citizen</h3>
            <p className="text-xs text-slate-700 mt-1">Plain language, step-by-step guidance.</p>
          </div>
          {/* Lawyer */}
          <div onClick={() => handleSelectMode('lawyer')} className="bg-white border border-amber-400 rounded-xl p-4 cursor-pointer shadow-md bg-amber-50/30">
            <h3 className="font-bold text-slate-900 flex items-center gap-2"><Briefcase className="w-4 h-4 text-amber-500"/> Lawyer</h3>
            <p className="text-xs text-slate-700 mt-1">Legal terminology, forensic analysis, precedent linking.</p>
          </div>
          {/* Compliance Reviewer */}
          <div onClick={() => handleSelectMode('compliance')} className="bg-white border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-emerald-400 hover:shadow-md transition-all">
            <h3 className="font-bold text-slate-900 flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-emerald-500"/> Compliance Reviewer</h3>
            <p className="text-xs text-slate-700 mt-1">Compliance-focused, obligation tracking, audit logging.</p>
          </div>
          {/* Researcher */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 opacity-70 cursor-not-allowed">
            <h3 className="font-bold text-slate-900 flex items-center gap-2"><Search className="w-4 h-4 text-indigo-500"/> Researcher</h3>
            <p className="text-xs text-slate-700 mt-1">Law-focused exploration and temporal analytics.</p>
          </div>
          {/* Admin */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 opacity-70 cursor-not-allowed">
            <h3 className="font-bold text-slate-900 flex items-center gap-2"><Settings className="w-4 h-4 text-slate-500"/> Admin</h3>
            <p className="text-xs text-slate-700 mt-1">Data/source-focused, configuration and RBAC.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">B. Procedure Selection</h2>
          <select className="w-full text-sm border-slate-300 rounded-md p-2 bg-slate-50 text-slate-900 font-medium outline-none">
            <option>Consumer</option>
            <option>Employment</option>
            <option>Tenancy</option>
            <option>Contract</option>
            <option>Other</option>
          </select>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">C. Forum Selection</h2>
          <select className="w-full text-sm border-slate-300 rounded-md p-2 bg-slate-50 text-slate-900 font-medium outline-none">
            <option>District Consumer Commission</option>
            <option>State Consumer Commission</option>
            <option>National Consumer Commission</option>
            <option>Civil Court</option>
            <option>Labour Forum</option>
          </select>
        </div>
      </div>

    </div>
  );
};
`;

fs.writeFileSync(path.join(screensDir, 'ScreenA_ModeSelect.tsx'), screenA, 'utf8');

const screenB = `// Screen B - Case Creation
import React from 'react';
import { useApp } from '../../state/store';
import { FileText, Save, Play, CheckCircle } from 'lucide-react';

export const ScreenB_CaseCreate: React.FC = () => {
  const { setCurrentScreen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide">CASE REGISTRATION</h1>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Main Form */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3 mb-4">A. Case Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-xs text-slate-700 block mb-1">Case Number</label><input type="text" value="CC/2025/00142" readOnly className="w-full text-sm border border-slate-200 rounded p-2 bg-slate-50 text-slate-900 font-medium"/></div>
              <div><label className="text-xs text-slate-700 block mb-1">Filing Number</label><input type="text" value="FIL/2025/08891" readOnly className="w-full text-sm border border-slate-200 rounded p-2 bg-slate-50 text-slate-900"/></div>
              <div className="col-span-2"><label className="text-xs text-slate-700 block mb-1">Case Title</label><input type="text" value="Anita Deshmukh v. BrightHome Interiors Pvt. Ltd." readOnly className="w-full text-sm border border-slate-200 rounded p-2 bg-slate-50 text-slate-900 font-bold"/></div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3 mb-4">B. Filing Type & Forum</h2>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-xs text-slate-700 block mb-1">Filing Type</label>
                <select className="w-full text-sm border border-slate-200 rounded p-2 bg-white text-slate-900"><option>Consumer Complaint</option><option>First Appeal</option><option>Execution Application</option></select>
              </div>
              <div><label className="text-xs text-slate-700 block mb-1">Forum / Commission</label>
                <select className="w-full text-sm border border-slate-200 rounded p-2 bg-white text-slate-900"><option>District Consumer Commission</option></select>
              </div>
              <div><label className="text-xs text-slate-700 block mb-1">State</label><input type="text" value="Maharashtra" readOnly className="w-full text-sm border border-slate-200 rounded p-2 bg-slate-50 text-slate-900"/></div>
              <div><label className="text-xs text-slate-700 block mb-1">District</label><input type="text" value="Pune" readOnly className="w-full text-sm border border-slate-200 rounded p-2 bg-slate-50 text-slate-900"/></div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3 mb-4">C. Parties</h2>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-xs text-slate-700 block mb-1">Complainant / Applicant</label><input type="text" value="Anita Deshmukh" readOnly className="w-full text-sm border border-slate-200 rounded p-2 bg-slate-50 text-slate-900"/></div>
              <div><label className="text-xs text-slate-700 block mb-1">Complainant Advocate</label><input type="text" value="Adv. Ramesh P." readOnly className="w-full text-sm border border-slate-200 rounded p-2 bg-slate-50 text-slate-900"/></div>
              <div><label className="text-xs text-slate-700 block mb-1">Opposite Party / Respondent</label><input type="text" value="BrightHome Interiors Pvt. Ltd." readOnly className="w-full text-sm border border-slate-200 rounded p-2 bg-slate-50 text-slate-900"/></div>
              <div><label className="text-xs text-slate-700 block mb-1">Respondent Advocate</label><input type="text" value="Adv. S. Kumar" readOnly className="w-full text-sm border border-slate-200 rounded p-2 bg-slate-50 text-slate-900"/></div>
            </div>
          </div>
        </div>

        {/* Right Column - Status & Actions */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-6 shadow-md">
            <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-700 pb-3 mb-4">E. Case Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Case No.</span><span className="font-bold">CC/2025/00142</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Forum</span><span className="text-right">Dist. Commission</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Status</span><span className="text-emerald-400 font-bold">Post-Order</span></div>
              <div className="flex justify-between border-t border-slate-700 pt-3 mt-3"><span className="text-slate-400">Next Action</span><span className="text-amber-400 font-bold">Compliance Review</span></div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3 mb-4">D. Procedural Stage</h2>
            <select className="w-full text-sm border border-slate-300 rounded p-2 bg-white text-slate-900 font-bold mb-4">
              <option>Draft</option>
              <option>Filed</option>
              <option>Pending</option>
              <option>Final Order</option>
              <option selected>Post-Order Compliance</option>
            </select>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3 mb-4">F. Actions</h2>
            <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200 text-sm font-bold transition-colors">
              <Save className="w-4 h-4"/> SAVE DRAFT
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200 text-sm font-bold transition-colors">
              <CheckCircle className="w-4 h-4"/> VALIDATE
            </button>
            <button onClick={() => setCurrentScreen('C')} className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-md text-sm font-bold transition-colors">
              <Play className="w-4 h-4"/> CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
`;

fs.writeFileSync(path.join(screensDir, 'ScreenB_CaseCreate.tsx'), screenB, 'utf8');

console.log('Created Screen A and B.');
