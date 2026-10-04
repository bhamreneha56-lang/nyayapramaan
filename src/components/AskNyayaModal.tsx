// "Ask NyayaPraman" Chatbot with Animated Drawer
import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../state/store';
import { Search, Sparkles, ShieldCheck, FileText, ChevronDown, ChevronUp, CheckCircle2, ArrowRight, X, ExternalLink, Send } from 'lucide-react';
import { runAskEngine, AskQueryResult } from '../engines/askEngine';

const BENCHMARK_QUERY = 'Has the respondent definitely violated the court order to refund ?2,00,000 within 30 days?';

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
  result?: AskQueryResult;
}

export const AskNyayaModal: React.FC = () => {
  const { isAskOpen, setIsAskOpen, currentCase, openSourceDrawer, setCurrentScreen, prefillQuery, setPrefillQuery } = useApp();

  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([{
    role: 'assistant',
    text: 'Hello! I am Praman, your legal AI assistant. How can I help you analyze this case today?'
  }]);
  
  const [animatingStep, setAnimatingStep] = useState(0);
  const [expandedMessage, setExpandedMessage] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAskOpen) {
      scrollToBottom();
    }
  }, [messages, isAskOpen, animatingStep]);

  useEffect(() => {
    if (prefillQuery && isAskOpen) {
      handleExecuteQuery(prefillQuery);
      setPrefillQuery('');
    }
  }, [prefillQuery, isAskOpen]);

  const handleExecuteQuery = (queryText: string) => {
    if (!queryText.trim()) return;
    
    // Add user message
    const newMsgs = [...messages, { role: 'user', text: queryText }];
    setMessages(newMsgs);
    setInputQuery('');
    
    // Simulate slight delay before AI responds
    setTimeout(() => {
       const res = runAskEngine(queryText);
       setMessages([...newMsgs, { role: 'assistant', text: res.finalAnswerText, result: res }]);
       setExpandedMessage(newMsgs.length); // Expand the new assistant message's stepper
       
       setAnimatingStep(0);
       // Simulate animated step-by-step reasoning traversal
       res.steps.forEach((_, idx) => {
         setTimeout(() => {
           setAnimatingStep(idx + 1);
         }, (idx + 1) * 400);
       });
    }, 500);
  };

  if (!isAskOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity"
        onClick={() => setIsAskOpen(false)}
      ></div>

      {/* Slide-out Chat Drawer */}
      <div className="relative bg-white/95 backdrop-blur-xl border-l border-slate-200 w-full max-w-md h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        
        {/* Top Header */}
        <div className="p-4 border-b border-slate-200 bg-white/50 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-amber-500 overflow-hidden shadow-sm">
              <img src="/lawyer-avatar.png" alt="Praman" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">Praman AI</h2>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Online</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsAskOpen(false)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Chat Body */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-6 bg-slate-50/50">
          
          {messages.map((msg, index) => (
             <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full border border-amber-300 overflow-hidden shadow-sm shrink-0 mt-1">
                    <img src="/lawyer-avatar.png" alt="Praman" className="w-full h-full object-cover" />
                  </div>
                )}
                
                <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-amber-500 text-white rounded-2xl rounded-tr-sm shadow-md p-3' : 'bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-tl-sm shadow-sm p-4'}`}>
                   
                   {/* Normal Text */}
                   <div className="text-sm leading-relaxed whitespace-pre-line font-medium">
                     {msg.text}
                   </div>

                   {/* Complex Assistant Result UI */}
                   {msg.result && (
                     <div className="mt-4 space-y-4">
                        
                        {/* Reframing Notice */}
                        {msg.result.isSafeReframing && (
                          <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 flex items-start gap-2">
                            <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[10px] font-bold text-blue-900 block uppercase">Query Reframed</span>
                              <p className="text-[10px] text-blue-800 leading-snug">
                                Predictive queries are restricted. Reframed to analyze objective evidentiary gaps.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Collapsible Reasoning Stepper */}
                        <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                          <button
                            onClick={() => setExpandedMessage(expandedMessage === index ? null : index)}
                            className="w-full p-2.5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors border-b border-slate-200 bg-slate-50/50"
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 border border-amber-300 flex items-center justify-center text-[10px] font-bold">
                                {msg.result.steps.length}
                              </span>
                              <span className="font-bold text-slate-700 text-[11px] uppercase tracking-wider">
                                Algorithmic Trace
                              </span>
                            </div>
                            {expandedMessage === index ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                          </button>

                          {expandedMessage === index && (
                            <div className="p-2 space-y-1.5 bg-slate-50">
                              {msg.result.steps.map((st, idx) => {
                                const isVisible = index === messages.length - 1 ? (idx < animatingStep) : true;
                                return (
                                  <div
                                    key={st.stepNumber}
                                    className={`p-2 rounded border transition-all duration-300 ${
                                      isVisible
                                        ? 'bg-white border-amber-200 opacity-100 shadow-sm'
                                        : 'bg-transparent border-transparent opacity-0 h-0 p-0 overflow-hidden'
                                    }`}
                                  >
                                    <div className="flex items-start justify-between gap-2">
                                      <div className="flex items-start gap-2">
                                        <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                                          {st.stepNumber}
                                        </span>
                                        <div>
                                          <span className="font-bold text-slate-900 text-[10px] block leading-tight">
                                            {st.title}
                                          </span>
                                          <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">{st.summary}</p>
                                        </div>
                                      </div>
                                      {st.sourceDoc && (
                                        <button
                                          onClick={() => st.sourceSnippetId && openSourceDrawer(st.sourceSnippetId)}
                                          className="inline-flex items-center gap-1 text-[9px] text-amber-700 bg-amber-50 hover:bg-amber-100 px-1.5 py-0.5 rounded border border-amber-200 whitespace-nowrap shrink-0 transition-colors font-bold shadow-sm"
                                        >
                                          <FileText className="w-3 h-3" /> Source
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                        
                        {/* Status Badge */}
                        <div className="flex items-center justify-between bg-amber-50 border border-amber-200 p-2 rounded-lg">
                          <span className="text-[10px] uppercase tracking-wider text-amber-900 font-bold">
                            Status:
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase bg-white text-amber-700 border border-amber-300 flex items-center gap-1.5 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                            {msg.result.statusBadge}
                          </span>
                        </div>

                        {/* Next Action */}
                        <div className="pt-2">
                          <button
                            onClick={() => { setIsAskOpen(false); setCurrentScreen('L'); }}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] transition-colors shadow-md"
                          >
                            <span>Resolve in Human Review</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                     </div>
                   )}
                </div>
             </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Bottom Input Area */}
        <div className="p-4 bg-white border-t border-slate-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
           {/* Preset Suggested Query Chips */}
          <div className="flex overflow-x-auto gap-1.5 mb-3 pb-1 hide-scrollbar" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <button
              onClick={() => handleExecuteQuery('Has the respondent violated the order?')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              Did respondent violate the order?
            </button>
            <button
              onClick={() => handleExecuteQuery('What evidence is missing?')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              What evidence is missing?
            </button>
            <button
              onClick={() => handleExecuteQuery('Which law version applies to this case?')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              Which law version applies?
            </button>
            <button
              onClick={() => handleExecuteQuery('Explain the contradiction between the Affidavit and Bank Record.')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              Explain contradictions
            </button>
            <button
              onClick={() => handleExecuteQuery('What is the deadline for compliance?')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              Check deadline
            </button>
            <button
              onClick={() => handleExecuteQuery('Summarize all the legal issues found.')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              Summarize legal issues
            </button>
          </div>

          <div className="relative flex items-center">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleExecuteQuery(inputQuery)}
              placeholder="Message Praman..."
              className="w-full bg-slate-50 border border-slate-300 rounded-full pl-4 pr-12 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all shadow-inner"
            />
            <button
              onClick={() => handleExecuteQuery(inputQuery)}
              className="absolute right-1.5 p-2 bg-amber-500 hover:bg-amber-400 text-white rounded-full transition-transform hover:scale-105 shadow-md flex items-center justify-center"
            >
              <Send className="w-4 h-4 -ml-0.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
