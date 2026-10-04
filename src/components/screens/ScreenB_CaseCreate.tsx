// Screen B - CASE CREATION PRO WORKSPACE
import React, { useState, useEffect } from 'react';
import { useApp } from '../../state/store';
import { FolderPlus, CheckCircle, AlertTriangle, Save, Play, Clock, Search, MapPin, UploadCloud, Users, FileText, ChevronRight } from 'lucide-react';

export const ScreenB_CaseCreate: React.FC = () => {
  const { setCurrentScreen, setGlobalCaseData } = useApp();

  // FORM STATE
  const [formData, setFormData] = useState({
    caseMode: 'New Case',
    caseNumber: '',
    filingNumber: '',
    caseTitle: '',
    caseType: 'Consumer Dispute',
    caseYear: new Date().getFullYear().toString(),
    matterType: 'Consumer',
    filingType: 'Consumer Complaint',
    forumLevel: 'District Commission',
    state: '',
    district: '',
    forumName: '',
    causeDate: '',
    causeState: '',
    causeDistrict: '',
    causeDesc: '',
    consideration: '',
    claimAmount: '',
    compensation: '',
    category: '',
    subcategory: '',
    previousCase: 'No',
    prevCaseNumber: '',
    prevOrderDate: '',
    proceduralStage: 'Draft / Pre-Filing',
    declarationChecked: false
  });

  const [parties, setParties] = useState([
    { id: '1', role: 'Complainant', name: '', contact: '', type: 'Individual' },
    { id: '2', role: 'Opposite Party', name: '', contact: '', type: 'Company' }
  ]);
  
  const [advocates, setAdvocates] = useState([]);
  
  const [lastSaved, setLastSaved] = useState('Not saved yet');
  const [draftId, setDraftId] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [isValidated, setIsValidated] = useState(false);

  // AUTO SAVE
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSaveDraft(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [formData, parties, advocates]);

  // LOAD FROM LOCAL STORAGE ON MOUNT
  useEffect(() => {
    const saved = localStorage.getItem('nyayatrace_draft_b');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed.formData);
        setParties(parsed.parties);
        setAdvocates(parsed.advocates);
        setLastSaved(parsed.lastSaved);
        setDraftId(parsed.draftId);
      } catch(e) {}
    }
  }, []);

  const handleSaveDraft = (manual = true) => {
    const time = new Date().toLocaleTimeString();
    const id = draftId || `DRAFT-${Math.floor(Math.random()*10000)}`;
    setDraftId(id);
    setLastSaved(time);
    localStorage.setItem('nyayatrace_draft_b', JSON.stringify({
      formData, parties, advocates, lastSaved: time, draftId: id
    }));
    if (manual) alert(`Draft saved successfully. ID: ${id}`);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsValidated(false);
  };

  const handleAddParty = (role) => {
    setParties([...parties, { id: Date.now().toString(), role, name: '', contact: '', type: 'Individual' }]);
  };

  const handleUpdateParty = (id, field, value) => {
    setParties(parties.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const handleRemoveParty = (id) => {
    setParties(parties.filter(p => p.id !== id));
  };

  const handleValidate = () => {
    let errors = [];
    if (!formData.caseTitle) errors.push("Case title is required.");
    if (!formData.causeDate) errors.push("Date of cause of action missing.");
    if (!formData.state || !formData.district) errors.push("Jurisdiction/Forum details incomplete.");
    
    const hasComplainant = parties.some(p => p.role === 'Complainant' && p.name.trim() !== '');
    const hasOP = parties.some(p => p.role === 'Opposite Party' && p.name.trim() !== '');
    
    if (!hasComplainant) errors.push("Primary complainant name missing.");
    if (!hasOP) errors.push("Opposite party name missing.");
    if (formData.filingType.includes('Appeal') && !formData.prevCaseNumber) errors.push("Appeal requires previous case number.");
    if (!formData.declarationChecked) errors.push("Declaration checkbox not confirmed.");

    setValidationErrors(errors);
    setIsValidated(true);
    
    if (errors.length === 0) {
      // Save global state
      if(setGlobalCaseData) setGlobalCaseData({ formData, parties });
    }
  };

  const fillFlagshipDemo = () => {
    setFormData({
      ...formData,
      caseMode: 'Existing Case � Post Order',
      caseNumber: 'CC/2025/00142',
      filingNumber: 'FIL/2025/08891',
      caseTitle: 'Anita Deshmukh v. BrightHome Interiors Pvt. Ltd.',
      matterType: 'Consumer',
      filingType: 'Consumer Complaint',
      state: 'Maharashtra',
      district: 'Pune',
      forumName: 'District Consumer Commission, Pune',
      causeDate: '2025-03-04',
      causeState: 'Maharashtra',
      causeDistrict: 'Pune',
      causeDesc: 'Defective interior services / refund dispute',
      consideration: '500000',
      claimAmount: '1000000',
      category: 'Consumer Goods',
      subcategory: 'Interior / Home Services',
      previousCase: 'No',
      proceduralStage: 'Post-Order Compliance',
      declarationChecked: true
    });
    setParties([
      { id: '1', role: 'Complainant', name: 'Anita Deshmukh', contact: 'an***@example.com', type: 'Individual' },
      { id: '2', role: 'Opposite Party', name: 'BrightHome Interiors Pvt. Ltd.', contact: 'support@brighthome.in', type: 'Company' }
    ]);
    setAdvocates([
      { id: 'a1', name: 'Adv. Ramesh P.', repFor: 'Complainant', barId: 'MH/SYN-1024/19' },
      { id: 'a2', name: 'Adv. S. Kumar', repFor: 'Opposite Party', barId: 'MH/SYN-558/12' }
    ]);
    alert("Flagship Demo Data Loaded.");
  };

  // Calculations
  const completeness = Math.floor(
    ((formData.caseTitle ? 1 : 0) + (formData.state ? 1 : 0) + (formData.causeDate ? 1 : 0) + 
    (parties[0].name ? 1 : 0) + (parties[1].name ? 1 : 0) + (formData.declarationChecked ? 1 : 0)) / 6 * 100
  );

  const docReadiness = [
    { name: 'Party Details', status: (parties[0].name && parties[1].name) ? 'ready' : 'missing' },
    { name: 'Case Details', status: formData.caseTitle ? 'ready' : 'missing' },
    { name: 'Order Copy', status: formData.filingType.includes('Appeal') || formData.filingType.includes('Execution') ? 'missing' : 'not_req' },
    { name: 'Affidavit', status: 'missing' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-32">
      {/* HEADER */}
      <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm flex justify-between items-start">
        <div>
          <p className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1"><FolderPlus className="w-4 h-4"/> WORKSPACE 2</p>
          <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide mb-2">CASE CREATION / APPLICATION REGISTRATION</h1>
          <p className="text-sm text-slate-600">Create a new legal matter and capture the procedural details required for downstream analysis.</p>
          <button onClick={fillFlagshipDemo} className="mt-4 text-xs bg-amber-100 text-amber-800 border border-amber-300 px-3 py-1.5 rounded font-bold hover:bg-amber-200 transition-colors">
            AUTO-FILL DEMO: CC/2025/00142 (SYNTHETIC)
          </button>
        </div>
        <div className="text-right text-sm bg-slate-50 p-4 rounded-lg border border-slate-200 shadow-inner">
          <p className="text-slate-500 font-bold mb-1">DRAFT IDENTITY</p>
          <p className="font-mono font-bold text-slate-900">{draftId || 'NEW'}</p>
          <p className="text-xs text-slate-400 mt-2">Autosave: ON</p>
          <p className="text-xs text-emerald-600 font-bold">Last Saved: {lastSaved}</p>
        </div>
      </div>

      <div className="flex gap-6">
        {/* MAIN FORM COLUMN */}
        <div className="w-2/3 space-y-6">
          
          {/* SECTION A: CASE DETAILS */}
          <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2 flex justify-between">
              <span>A. Case Details</span>
              <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded">USER ENTERED</span>
            </h2>
            
            <div className="mb-4">
               <label className="block text-xs font-bold text-slate-600 mb-2">CASE MODE</label>
               <div className="flex gap-4">
                 {['New Case', 'Existing Registered Case', 'Existing Case � Post Order', 'Execution / Further Application'].map(m => (
                   <label key={m} className="flex items-center gap-2 text-sm cursor-pointer">
                     <input type="radio" name="caseMode" value={m} checked={formData.caseMode === m} onChange={handleChange} className="accent-amber-500"/>
                     {m}
                   </label>
                 ))}
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">CASE TITLE *</label>
                <input type="text" name="caseTitle" value={formData.caseTitle} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50" placeholder="e.g. Anita Deshmukh v. BrightHome" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">MATTER TYPE</label>
                <select name="matterType" value={formData.matterType} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50 cursor-pointer">
                  <option>Consumer</option><option>Employment</option><option>Tenancy</option><option>Civil</option><option>Other</option>
                </select>
              </div>
              {formData.caseMode !== 'New Case' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">CASE NUMBER</label>
                    <input type="text" name="caseNumber" value={formData.caseNumber} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">FILING NUMBER</label>
                    <input type="text" name="filingNumber" value={formData.filingNumber} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50" />
                  </div>
                </>
              )}
            </div>
            
            {formData.matterType === 'Consumer' && (
              <div className="bg-emerald-50 border border-emerald-200 p-2 rounded text-xs text-emerald-800 font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4"/> CONSUMER PROCEDURE TEMPLATE ACTIVE
              </div>
            )}
          </div>

          {/* SECTION B: FILING TYPE & FORUM */}
          <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">B. Filing Type & Forum</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">FILING TYPE</label>
                <select name="filingType" value={formData.filingType} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50 cursor-pointer">
                  <option>Consumer Complaint</option><option>First Appeal</option><option>Execution Application</option><option>Review Application</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">LEVEL</label>
                <select name="forumLevel" value={formData.forumLevel} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50 cursor-pointer">
                  <option>District Commission</option><option>State Commission</option><option>National Commission</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">STATE</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50" placeholder="e.g. Maharashtra"/>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">DISTRICT</label>
                <input type="text" name="district" value={formData.district} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50" placeholder="e.g. Pune"/>
              </div>
            </div>
            
            {formData.state && formData.district && (
              <div className="mt-4 bg-slate-50 border border-slate-200 p-3 rounded flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0"/>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Jurisdiction Review</p>
                  <p className="text-sm font-bold text-slate-900">District Consumer Commission, {formData.district}</p>
                  <p className="text-xs text-slate-600 mt-1">Jurisdiction information captured � legal applicability requires human verification.</p>
                </div>
              </div>
            )}
          </div>

          {/* SECTION C & D: CAUSE & FINANCIAL */}
          <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">C. Cause of Action & Financials</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">DATE OF CAUSE OF ACTION *</label>
                <input type="date" name="causeDate" value={formData.causeDate} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">NATURE / DESCRIPTION</label>
                <input type="text" name="causeDesc" value={formData.causeDesc} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">CONSIDERATION AMOUNT (?)</label>
                <input type="number" name="consideration" value={formData.consideration} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">TOTAL CLAIM AMOUNT (?)</label>
                <input type="number" name="claimAmount" value={formData.claimAmount} onChange={handleChange} className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white/50" />
              </div>
            </div>
            {formData.causeDate && (
               <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded flex items-center gap-2 text-xs text-amber-800">
                 <Clock className="w-4 h-4"/> <strong>Date / Limitation Check:</strong> Indicative date calculation active � verify applicable limitation rule via Temporal Resolver.
               </div>
            )}
          </div>

          {/* SECTION E: PARTIES */}
          <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2 flex justify-between items-center">
               <span>E. Parties & Advocates</span>
               <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded">PII SHIELD ENABLED</span>
            </h2>
            
            <div className="space-y-4">
              {parties.map((p, idx) => (
                <div key={p.id} className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative">
                  {idx > 1 && <button onClick={() => handleRemoveParty(p.id)} className="absolute top-2 right-2 text-red-500 text-xs font-bold hover:underline">REMOVE</button>}
                  <p className="text-xs font-bold text-slate-500 mb-2 uppercase">{p.role}</p>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label className="block text-[10px] font-bold text-slate-600 mb-1">LEGAL NAME *</label>
                       <input type="text" value={p.name} onChange={(e) => handleUpdateParty(p.id, 'name', e.target.value)} className="w-full border border-slate-300 rounded p-1.5 text-sm bg-white outline-none focus:border-amber-500"/>
                     </div>
                     <div>
                       <label className="block text-[10px] font-bold text-slate-600 mb-1">CONTACT EMAIL/PHONE</label>
                       <input type="text" value={p.contact} onChange={(e) => handleUpdateParty(p.id, 'contact', e.target.value)} className="w-full border border-slate-300 rounded p-1.5 text-sm bg-white outline-none focus:border-amber-500 placeholder:text-slate-300" placeholder="PII masked in reports"/>
                     </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex gap-3">
              <button onClick={() => handleAddParty('Additional Complainant')} className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded hover:bg-blue-100">+ Complainant</button>
              <button onClick={() => handleAddParty('Additional OP')} className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded hover:bg-blue-100">+ Opposite Party</button>
            </div>
            
            {advocates.length > 0 && (
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="text-xs font-bold text-slate-600 mb-2 uppercase">Advocates / Representatives</p>
                {advocates.map(a => (
                  <div key={a.id} className="flex justify-between items-center bg-white border border-slate-200 p-2 rounded mb-2 text-sm">
                    <span className="font-bold text-slate-800">{a.name} <span className="text-xs text-slate-500 font-normal">({a.barId})</span></span>
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">Rep: {a.repFor}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* SECTION F: DECLARATION */}
          <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">J. Declaration</h2>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="declarationChecked" checked={formData.declarationChecked} onChange={(e) => setFormData({...formData, declarationChecked: e.target.checked})} className="mt-1 w-4 h-4 accent-amber-500"/>
              <span className="text-sm text-slate-700">I confirm that the information entered in this case-registration form has been reviewed by the submitting user. I understand that NYAYATRACE provides decision support and does not make judicial determinations.</span>
            </label>
          </div>

        </div>

        {/* RIGHT SIDEBAR / STICKY PANELS */}
        <div className="w-1/3 space-y-6">
           
           <div className="sticky top-24 space-y-6">
             {/* CASE COMPLETENESS */}
             <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-5 shadow-lg text-white">
                <h3 className="font-bold text-amber-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">Case Completeness</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-full bg-slate-800 h-2 rounded-full mr-4 overflow-hidden">
                    <div className="bg-emerald-500 h-full" style={{ width: `${completeness}%` }}></div>
                  </div>
                  <span className="font-black text-lg">{completeness}%</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex justify-between"><span>Case Details</span> <span>{formData.caseTitle ? '?' : '?'}</span></li>
                  <li className="flex justify-between"><span>Forum / Jurisdiction</span> <span>{formData.state ? '?' : '?'}</span></li>
                  <li className="flex justify-between"><span>Cause of Action</span> <span>{formData.causeDate ? '?' : '?'}</span></li>
                  <li className="flex justify-between"><span>Parties</span> <span>{parties[0].name ? '?' : '?'}</span></li>
                  <li className="flex justify-between"><span>Declaration</span> <span>{formData.declarationChecked ? '?' : '?'}</span></li>
                </ul>
             </div>

             {/* DOCUMENT READINESS */}
             <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Document Readiness</h3>
                <ul className="space-y-2 text-sm font-medium">
                  {docReadiness.map((doc, i) => (
                    <li key={i} className="flex justify-between items-center p-2 rounded bg-slate-50 border border-slate-100">
                      <span className="text-slate-700">{doc.name}</span>
                      {doc.status === 'ready' && <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-bold">READY ?</span>}
                      {doc.status === 'missing' && <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded font-bold">MISSING ?</span>}
                      {doc.status === 'not_req' && <span className="bg-slate-200 text-slate-500 text-[10px] px-2 py-0.5 rounded font-bold">OPTIONAL</span>}
                    </li>
                  ))}
                </ul>
             </div>

             {/* VALIDATION PANEL */}
             {isValidated && (
               <div className={`border-2 rounded-xl p-5 shadow-sm bg-white/85 backdrop-blur-md ${validationErrors.length > 0 ? 'border-red-400' : 'border-emerald-400'}`}>
                 <h3 className={`font-bold uppercase tracking-wider mb-3 ${validationErrors.length > 0 ? 'text-red-600' : 'text-emerald-600'}`}>Validation Results</h3>
                 {validationErrors.length > 0 ? (
                   <ul className="text-xs text-red-600 space-y-1 list-disc pl-4 font-medium">
                     {validationErrors.map((err, i) => <li key={i}>{err}</li>)}
                   </ul>
                 ) : (
                   <div className="text-sm text-emerald-600 font-bold flex items-center gap-2">
                     <CheckCircle className="w-5 h-5"/> Case Registration Complete!
                   </div>
                 )}
               </div>
             )}
             
             {/* PROCEDURE INFO */}
             <div className="bg-blue-50/80 backdrop-blur-md border border-blue-200 rounded-xl p-4">
                <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mb-1">PROCEDURE CONFIGURATION</p>
                <p className="text-xs text-blue-900">Form Version: NY-CC-01</p>
                <p className="text-xs text-blue-900 mt-1">Status: Configured for {formData.filingType}</p>
             </div>

           </div>
        </div>
      </div>
      
      {/* STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-64 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-300 p-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] flex justify-between items-center z-50">
         <div className="flex items-center gap-4">
            <span className="font-bold text-slate-900 font-mono text-sm">{draftId || 'UNSAVED DRAFT'}</span>
            <span className="text-xs text-slate-500">Last saved: {lastSaved}</span>
         </div>
         <div className="flex gap-4">
            <button onClick={() => handleSaveDraft(true)} className="px-6 py-2.5 rounded-lg border-2 border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors flex items-center gap-2"><Save className="w-4 h-4"/> SAVE DRAFT</button>
            <button onClick={handleValidate} className="px-6 py-2.5 rounded-lg border-2 border-blue-500 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> VALIDATE</button>
            <button 
              onClick={() => {
                handleValidate();
                if (validationErrors.length === 0 && isValidated) {
                  setCurrentScreen('C');
                }
              }}
              className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-900 font-black text-sm hover:bg-amber-400 hover:-translate-y-0.5 transition-all shadow-lg flex items-center gap-2"
            >
              CONTINUE TO DOCUMENTS <ChevronRight className="w-4 h-4"/>
            </button>
         </div>
      </div>

    </div>
  );
};
