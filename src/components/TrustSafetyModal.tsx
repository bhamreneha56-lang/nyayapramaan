// Trust & Safety Modal Component

import React from 'react';
import { useApp } from '../state/store';
import { ShieldCheck, X, Check, AlertTriangle, Scale, Lock, BookOpen } from 'lucide-react';
import { FORBIDDEN_WORDS, ALLOWED_STATUSES } from '../engines/safetyGuard';

export const TrustSafetyModal: React.FC = () => {
  const { isTrustSafetyOpen, setIsTrustSafetyOpen } = useApp();

  if (!isTrustSafetyOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={() => setIsTrustSafetyOpen(false)}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-[#0c1222] border border-amber-200 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-200 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 tracking-wide">
                NyayaPraman Trust & Safety Framework
              </h2>
              <p className="text-xs text-slate-900">
                Ethical boundary enforcement, algorithmic accountability & human primacy
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsTrustSafetyOpen(false)}
            className="p-2 rounded-lg text-slate-900 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-sm">
          {/* Core Mandate Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 to-transparent border border-amber-200 flex items-start gap-3">
            <Scale className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-semibold text-amber-200">Fundamental Platform Principle</h3>
              <p className="text-xs text-black leading-relaxed">
                NyayaPraman is an <strong>evidential compiler and difference engine</strong>, not a judge or legal adjudicator. It transforms judicial text into verifiable obligations and computes observable mathematical differences. <strong>A qualified human professional always makes the final legal determination.</strong>
              </p>
            </div>
          </div>

          {/* AI vs Human Responsibility Matrix */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" /> Division of Responsibility: AI vs Human Professional
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#121a30] border border-slate-200 space-y-2.5">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                  What NyayaPraman (AI) Computes
                </span>
                <ul className="text-xs text-black space-y-1.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    Extracts obligations, deadlines, and consideration sums
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    Calculates mathematical differences (e.g. ₹75,000 shortfall, 5 days late)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    Detects cross-document contradictions & missing documents
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    Performs temporal statute applicability lookups (BNS vs IPC)
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#121a30] border border-amber-200 space-y-2.5">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  What Only the Human Adjudicator Decides
                </span>
                <ul className="text-xs text-black space-y-1.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    Whether non-payment constitutes willful disobedience
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    Assessment of witness veracity and affidavit credibility
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    Condonation of delay or equitable deadline extensions
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    Final case outcome and judicial enforcement decree
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hard Guardrails & Forbidden Words */}
          <div className="p-4 rounded-xl bg-[#121a30] border border-slate-200 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> Hard Safety Guard: Forbidden Conclusory Terms
            </h4>
            <p className="text-xs text-black">
              Our runtime engine scans all dynamic outputs to ensure the platform never outputs premature verdicts:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {FORBIDDEN_WORDS.map((word) => (
                <span
                  key={word}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-rose-500/10 text-rose-300 border border-rose-500/25 line-through decoration-rose-400/60"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Permitted Status Taxonomy */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Strict Evidentiary Status Taxonomy
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              {ALLOWED_STATUSES.map((st) => (
                <div
                  key={st}
                  className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-semibold text-black">{st}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-white flex justify-between items-center text-xs text-slate-900">
          <span>AI-assisted analysis. Final legal determination rests with a human professional.</span>
          <button
            onClick={() => setIsTrustSafetyOpen(false)}
            className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg border border-amber-300 transition-colors font-semibold"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
