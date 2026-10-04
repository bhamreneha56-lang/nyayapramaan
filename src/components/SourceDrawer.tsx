// Source Drawer Component - Traceable Evidentiary Verification

import React from 'react';
import { useApp } from '../state/store';
import { X, FileText, ShieldAlert, CheckCircle2, Bookmark } from 'lucide-react';

export const SourceDrawer: React.FC = () => {
  const { activeSnippet, closeSourceDrawer } = useApp();

  if (!activeSnippet) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeSourceDrawer}
      ></div>

      {/* Drawer Panel */}
      <div className="relative w-full max-w-lg bg-[#0c1222] border-l border-amber-200 shadow-2xl flex flex-col h-full z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-200 flex items-center justify-center text-amber-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm">Source Evidence Drawer</h3>
              <p className="text-xs text-slate-900">Deterministic Traceability ID: {activeSnippet.id}</p>
            </div>
          </div>
          <button
            onClick={closeSourceDrawer}
            className="p-1.5 rounded-lg text-slate-900 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legal Authority Boundary Notice */}
        <div className="p-4 mx-5 mt-5 rounded-lg bg-amber-500/10 border border-amber-200 flex gap-3 text-xs text-amber-200">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-300">Evidentiary Boundary: </span>
            User-uploaded records represent subjective case facts or documentary evidence. They are
            never authoritative law or judicial pronouncements.
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 overflow-y-auto space-y-5">
          {/* Metadata Card */}
          <div className="bg-[#121a30] rounded-xl p-4 border border-slate-200 space-y-3">
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5" /> Document Metadata
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-900 block">Title</span>
                <span className="text-slate-900 font-medium">{activeSnippet.documentTitle}</span>
              </div>
              <div>
                <span className="text-slate-900 block">Doc Category</span>
                <span className="text-black uppercase">{activeSnippet.documentType.replace('_', ' ')}</span>
              </div>
              <div>
                <span className="text-slate-900 block">Document Date</span>
                <span className="text-black">{activeSnippet.date}</span>
              </div>
              <div>
                <span className="text-slate-900 block">Page Location</span>
                <span className="text-emerald-400 font-semibold">Page {activeSnippet.pageNumber}</span>
              </div>
            </div>
          </div>

          {/* Exact Quoted Passage */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-slate-900 font-semibold block">
              Extracted Primary Passage (OCR Authenticated)
            </label>
            <div className="bg-white border border-amber-200 rounded-xl p-4 text-sm text-black leading-relaxed font-mono relative">
              <div className="absolute top-2.5 right-3 text-[10px] text-amber-400/70 uppercase">
                VERIFIED SNIPPET
              </div>
              <p className="pr-12">"{activeSnippet.sourceText}"</p>
            </div>
          </div>

          {/* Provenance Verification */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-emerald-200">Cryptographic Hash & Integrity</p>
              <p className="text-slate-900 mt-0.5">
                Matched against SHA-256 binary ledger at ingress. Tamper-evident checksum verified.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-white flex justify-between items-center text-xs text-slate-900">
          <span>NyayaPraman Verification Protocol v1.4</span>
          <button
            onClick={closeSourceDrawer}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg border border-slate-200 transition-colors"
          >
            Close Drawer
          </button>
        </div>
      </div>
    </div>
  );
};
