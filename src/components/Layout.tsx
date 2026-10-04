// NyayaPraman - Main Application Layout, Header, Pipeline Stepper & Persistent Footer

import React from 'react';
import { useApp, ScreenId } from '../state/store';
import {
  Scale,
  Sparkles,
  ShieldCheck,
  Search,
  ChevronRight,
  FileText,
  Layers,
  Clock,
  Cpu,
  GitCompare,
  CheckCircle,
  UserCheck,
  FileSpreadsheet,
  Grid,
  UploadCloud,
  FolderPlus,
  HelpCircle,
} from 'lucide-react';
import { PERSISTENT_FOOTER_DISCLAIMER } from '../engines/safetyGuard';

interface StepMeta {
  id: ScreenId;
  label: string;
  icon: React.ElementType;
  modes: ('citizen' | 'lawyer' | 'compliance')[];
}

const PIPELINE_STEPS: StepMeta[] = [
  { id: 'A', label: '1. Mode Select', icon: Grid, modes: ['citizen', 'lawyer', 'compliance'] },
  { id: 'B', label: '2. Case Creation', icon: FolderPlus, modes: ['citizen', 'lawyer', 'compliance'] },
  { id: 'C', label: '3. Upload Case Docs', icon: UploadCloud, modes: ['citizen', 'lawyer', 'compliance'] },
  { id: 'D', label: '4. Case Understanding', icon: FileText, modes: ['citizen', 'lawyer', 'compliance'] },
  { id: 'E', label: '5. Lawyer Issue Matrix', icon: FileSpreadsheet, modes: ['lawyer'] },
  { id: 'F', label: '6. Legal RAG & Temporal', icon: Search, modes: ['lawyer'] },
  { id: 'G', label: '7. Unified Graph', icon: Layers, modes: ['lawyer'] },
  { id: 'H', label: '8. Case Timeline', icon: Clock, modes: ['citizen', 'lawyer', 'compliance'] },
  { id: 'I', label: '9. Order Compiler', icon: Cpu, modes: ['lawyer', 'compliance'] },
  { id: 'J', label: '10. Expected vs Observed', icon: GitCompare, modes: ['citizen', 'lawyer', 'compliance'] },
  { id: 'K', label: '11. Verification Dashboard', icon: CheckCircle, modes: ['citizen', 'lawyer', 'compliance'] },
  { id: 'L', label: '12. Human Review', icon: UserCheck, modes: ['compliance', 'lawyer'] },
  { id: 'M', label: '13. Generate Report', icon: FileText, modes: ['citizen', 'lawyer', 'compliance'] },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    mode,
    setMode,
    currentScreen,
    setCurrentScreen,
    currentCase,
    switchCase,
    setIsAskOpen,
    setIsTrustSafetyOpen,
  } = useApp();

  return (
    <div className="min-h-screen text-slate-900 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200" style={{ backgroundImage: "url('/bg-gavel.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      {/* ================= Top App Header ================= */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-amber-200 px-4 lg:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Brand & Emblem */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 shadow-md shadow-amber-500/10">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-black tracking-widest text-base text-slate-900">
                NYAYAPRAMAN
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 border border-amber-400 shadow-sm">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-slate-900 font-serif italic hidden sm:block">
              “Where Law Meets Evidence.”
            </p>
          </div>
        </div>

        {/* Center: Mode Switcher & Case Selector */}
        <div className="hidden md:flex items-center gap-3">
          {/* Mode Selector Tabs */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
            <button
              onClick={() => setMode('citizen')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                mode === 'citizen'
                  ? 'bg-amber-500 text-slate-50 shadow-sm'
                  : 'text-slate-900 hover:text-slate-900'
              }`}
            >
              Citizen Mode
            </button>
            <button
              onClick={() => setMode('lawyer')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                mode === 'lawyer'
                  ? 'bg-amber-500 text-slate-50 shadow-sm'
                  : 'text-slate-900 hover:text-slate-900'
              }`}
            >
              Lawyer Mode
            </button>
            <button
              onClick={() => setMode('compliance')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                mode === 'compliance'
                  ? 'bg-amber-500 text-slate-50 shadow-sm'
                  : 'text-slate-900 hover:text-slate-900'
              }`}
            >
              Compliance Review
            </button>
          </div>

          {/* Switch Case Selector */}
          <select
            value={currentCase.id}
            onChange={(e) => switchCase(e.target.value)}
            className="bg-slate-100 border border-amber-200 rounded-xl px-3 py-1.5 text-xs text-amber-200 font-medium focus:outline-none focus:border-amber-400"
          >
            <option value="case_sharma_0412">Case: Sharma v. QuickElectro (Demo)</option>
            <option value="case_verma_0889">Case: Verma v. NexaHome (Alt)</option>
            <option value="case_gupta_0122">Case: Gupta v. AirFly (Alt)</option>
          </select>
        </div>

        {/* Right Actions: Ask NyayaPraman & Trust/Safety */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsAskOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 shadow-sm text-xs font-bold transition-all shadow-md shadow-amber-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Ask NyayaPraman</span>
          </button>

          <button
            onClick={() => setIsTrustSafetyOpen(true)}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-black hover:text-slate-900 border border-slate-200 transition-colors"
            title="Trust & Safety Framework"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </button>

          <a
            href="index.html"
            className="text-xs text-slate-900 hover:text-amber-300 transition-colors ml-1 hidden lg:block"
          >
            Intro Video
          </a>
        </div>
      </header>

      {/* Procedural Tracker */}
      <div className="bg-white/70 backdrop-blur-sm border-b border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 flex items-center gap-4 overflow-x-auto whitespace-nowrap">
        <span className="text-slate-900 font-bold uppercase tracking-wider text-[10px]">Case Lifecycle:</span>
        <span className="flex items-center gap-1 text-emerald-700"><CheckCircle className="w-3 h-3"/> Filing</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-emerald-700"><CheckCircle className="w-3 h-3"/> Scrutiny</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-emerald-700"><CheckCircle className="w-3 h-3"/> Proceedings</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-emerald-700"><CheckCircle className="w-3 h-3"/> Final Order</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-amber-600 font-bold"><Clock className="w-3 h-3"/> Post-Order</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-blue-600 font-bold"><Search className="w-3 h-3"/> Compliance</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3 h-3"/> Review</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3 h-3"/> Execution</span>
        <span className="text-slate-300">?</span>
        <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3 h-3"/> Closure</span>
      </div>


      {/* ================= App Body ================= */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Stepper Sidebar (Deterministic Pipeline) */}
        <aside className="w-64 bg-white/70 backdrop-blur-md border-r border-slate-200 flex flex-col shrink-0 hidden md:flex">

          {/* Current Case Header */}
          <div className="p-3 bg-white/50 border-b border-slate-200 flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Current Case</span>
            <span className="text-xs font-bold text-slate-900 leading-tight">CC/2025/00142</span>
            <span className="text-xs text-slate-700 truncate">Anita Deshmukh v. BrightHome Interiors</span>
            <span className="text-[10px] text-slate-600 truncate">District Consumer Commission</span>
            <div className="mt-1 flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 border border-blue-200 rounded text-[9px] font-bold uppercase">Post-Order Compliance</span>
              <span className="px-1.5 py-0.5 bg-red-100 text-red-800 border border-red-200 rounded text-[9px] font-bold uppercase">Human Review Required</span>
            </div>
          </div>

          <div className="p-3 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-900 flex items-center justify-between">
            <span>Pipeline Stepper</span>
            <span className="text-amber-400 font-mono">13 Screens</span>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {PIPELINE_STEPS.map((step, idx) => {
              const isActive = currentScreen === step.id;
              const isRelevantToMode = step.modes.includes(mode);
              const StepIcon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentScreen(step.id)}
                  className={`group w-full flex items-center justify-between p-3 rounded-xl text-left text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-900 border border-amber-500 font-bold shadow-md shadow-amber-500/10 backdrop-blur-md transform scale-[1.02]'
                      : isRelevantToMode
                      ? 'text-slate-800 hover:bg-white/50 hover:text-slate-900 hover:scale-[1.01]'
                      : 'text-black hover:bg-slate-100 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <StepIcon
                      className={`w-5 h-5 ${isActive ? 'text-amber-700' : 'text-slate-700 group-hover:text-amber-600 transition-colors'}`}
                    />
                    <span className="truncate">{step.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4 text-amber-700 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Mode Switcher Indicator */}
          <div className="p-3 border-t border-slate-200 bg-slate-50 text-[11px] text-slate-900">
            <div className="flex items-center justify-between">
              <span>Active View:</span>
              <span className="text-amber-400 font-bold uppercase">{mode} Mode</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-transparent animate-in slide-in-from-bottom-2 fade-in duration-500">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>

      {/* ================= Persistent Disclaimer Footer ================= */}
      <footer className="bg-white/70 backdrop-blur-sm border-t border-slate-200 py-2.5 px-4 text-center text-xs text-slate-900 flex flex-wrap items-center justify-between gap-2 z-30">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-medium text-black">{PERSISTENT_FOOTER_DISCLAIMER}</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-black mx-auto sm:mx-0">
          <span>Deterministic Audit v1.4</span>
          <span>Zero Forbidden Words Enforced</span>
        </div>
      </footer>
    </div>
  );
};
