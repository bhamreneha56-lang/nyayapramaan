// Screen A - USER & WORKFLOW MODE
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

      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
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
          <div onClick={() => handleSelectMode('citizen')} className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-amber-400 hover:shadow-md transition-all">
            <h3 className="font-bold text-slate-900 flex items-center gap-2"><UserCheck className="w-4 h-4 text-sky-500"/> Citizen</h3>
            <p className="text-xs text-slate-700 mt-1">Plain language, step-by-step guidance.</p>
          </div>
          {/* Lawyer */}
          <div onClick={() => handleSelectMode('lawyer')} className="bg-white/85 backdrop-blur-md border border-amber-400 rounded-xl p-4 cursor-pointer shadow-md bg-amber-50/30">
            <h3 className="font-bold text-slate-900 flex items-center gap-2"><Briefcase className="w-4 h-4 text-amber-500"/> Lawyer</h3>
            <p className="text-xs text-slate-700 mt-1">Legal terminology, forensic analysis, precedent linking.</p>
          </div>
          {/* Compliance Reviewer */}
          <div onClick={() => handleSelectMode('compliance')} className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-emerald-400 hover:shadow-md transition-all">
            <h3 className="font-bold text-slate-900 flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-emerald-500"/> Compliance Reviewer</h3>
            <p className="text-xs text-slate-700 mt-1">Compliance-focused, obligation tracking, audit logging.</p>
          </div>
          {/* Researcher */}
          <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-4 opacity-70 cursor-not-allowed">
            <h3 className="font-bold text-slate-900 flex items-center gap-2"><Search className="w-4 h-4 text-indigo-500"/> Researcher</h3>
            <p className="text-xs text-slate-700 mt-1">Law-focused exploration and temporal analytics.</p>
          </div>
          {/* Admin */}
          <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-4 opacity-70 cursor-not-allowed">
            <h3 className="font-bold text-slate-900 flex items-center gap-2"><Settings className="w-4 h-4 text-slate-500"/> Admin</h3>
            <p className="text-xs text-slate-700 mt-1">Data/source-focused, configuration and RBAC.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">B. Procedure Selection</h2>
          <select onChange={(e) => console.log("Dropdown updated")} className="w-full text-sm border-slate-300 rounded-md p-2 bg-white/60 backdrop-blur-sm text-slate-900 font-medium outline-none">
            <option>Consumer</option>
            <option>Employment</option>
            <option>Tenancy</option>
            <option>Contract</option>
            <option>Other</option>
          </select>
        </div>
        <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">C. Forum Selection</h2>
          <select onChange={(e) => console.log("Dropdown updated")} className="w-full text-sm border-slate-300 rounded-md p-2 bg-white/60 backdrop-blur-sm text-slate-900 font-medium outline-none">
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
