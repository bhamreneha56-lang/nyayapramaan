// NyayaPraman - Global State Store & Context

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserMode,
  CaseData,
  DocumentSnippet,
  HumanReviewAction,
  VerificationStatus,
} from '../types';
import { demoCase } from '../seed/demoCase';
import { caseVerma, caseGupta } from '../seed/altCases';
import { scanForForbiddenWords } from '../engines/safetyGuard';

export type ScreenId =
  | 'A' // Mode Select
  | 'B' // Case Creation
  | 'C' // Upload Case Docs
  | 'D' // Case Understanding
  | 'E' // Lawyer Issue Matrix
  | 'F' // Legal RAG Search & Temporal Resolver
  | 'G' // Unified Graph
  | 'H' // Case Timeline
  | 'I' // Order-to-Outcome Compiler
  | 'J' // Expected vs Observed
  | 'K' // Verification Dashboard
  | 'L' // Human Review
  | 'M'; // Generate Report

interface AppContextType {
  mode: UserMode;
  setMode: (mode: UserMode) => void;
  currentScreen: ScreenId;
  setCurrentScreen: (screen: ScreenId) => void;
  currentCase: CaseData;
  switchCase: (caseId: string) => void;
  activeSnippet: DocumentSnippet | null;
  openSourceDrawer: (snippet: DocumentSnippet | string) => void;
  closeSourceDrawer: () => void;
  reviewActions: HumanReviewAction[];
  addReviewAction: (action: Omit<HumanReviewAction, 'id' | 'timestamp'>) => void;
  markCaseVerified: (reviewerName: string, memo: string) => void;
  isAskOpen: boolean;
  setIsAskOpen: (open: boolean) => void;
  isTrustSafetyOpen: boolean;
  setIsTrustSafetyOpen: (open: boolean) => void;
  highlightReasoningPath: boolean;
  setHighlightReasoningPath: (val: boolean) => void;
  prefillQuery: string;
  setPrefillQuery: (q: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<UserMode>('lawyer');
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('A');
  const [currentCase, setCurrentCase] = useState<CaseData>(demoCase);
  const [activeSnippet, setActiveSnippet] = useState<DocumentSnippet | null>(null);
  const [isAskOpen, setIsAskOpen] = useState(false);
  const [isTrustSafetyOpen, setIsTrustSafetyOpen] = useState(false);
  const [highlightReasoningPath, setHighlightReasoningPath] = useState(false);
  const [prefillQuery, setPrefillQuery] = useState('');

  const [reviewActions, setReviewActions] = useState<HumanReviewAction[]>([
    {
      id: 'rev_init_1',
      targetId: 'contr_1',
      targetType: 'CONTRADICTION',
      decision: 'ACCEPTED',
      reviewerName: 'Sr. Compliance Auditor Mehta',
      timestamp: '2026-10-03 10:14:22 IST',
      comment: 'Initial discrepancy flagged between Affidavit stated sum and HDFC NEFT transaction confirmation.',
    },
  ]);

  // Run safety guard on initial boot to verify zero forbidden words in seeded data
  useEffect(() => {
    const scan = scanForForbiddenWords(currentCase);
    if (!scan.isSafe) {
      console.warn('SAFETY GUARD WARNING: Detected forbidden strings in case data:', scan.violations);
    } else {
      console.log('NyayaPraman Safety Guard: 100% verified clean. Zero forbidden terms found.');
    }
  }, [currentCase]);

  const switchCase = (caseId: string) => {
    if (caseId === 'case_sharma_0412') setCurrentCase(demoCase);
    else if (caseId === 'case_verma_0889') setCurrentCase(caseVerma);
    else if (caseId === 'case_gupta_0122') setCurrentCase(caseGupta);
  };

  const openSourceDrawer = (snippetOrId: DocumentSnippet | string) => {
    if (typeof snippetOrId === 'string') {
      // Find in current case documents
      for (const doc of currentCase.documents) {
        const found = doc.snippets.find((s) => s.id === snippetOrId);
        if (found) {
          setActiveSnippet(found);
          return;
        }
      }
      // Fallback synthetic snippet
      setActiveSnippet({
        id: snippetOrId,
        documentTitle: 'Verified Judicial Record',
        documentType: 'court_record',
        pageNumber: 1,
        date: currentCase.eventDate,
        sourceText: `Snippet reference ${snippetOrId} linked to authoritative case proceedings.`,
        verifiedAuthoritativeLaw: false,
      });
    } else {
      setActiveSnippet(snippetOrId);
    }
  };

  const closeSourceDrawer = () => setActiveSnippet(null);

  const addReviewAction = (action: Omit<HumanReviewAction, 'id' | 'timestamp'>) => {
    const now = new Date();
    const timestampStr = `${now.toISOString().split('T')[0]} ${now.toTimeString().split(' ')[0]} IST`;
    const newAction: HumanReviewAction = {
      ...action,
      id: `rev_${Date.now()}`,
      timestamp: timestampStr,
    };
    setReviewActions((prev) => [newAction, ...prev]);
  };

  const markCaseVerified = (reviewerName: string, memo: string) => {
    const now = new Date();
    const timestampStr = `${now.toISOString().split('T')[0]} ${now.toTimeString().split(' ')[0]} IST`;
    
    // Add audit entry
    addReviewAction({
      targetId: currentCase.obligation.id,
      targetType: 'OBLIGATION',
      decision: 'VERIFIED',
      reviewerName,
      comment: memo || 'Marked as reviewed and recorded into official compliance ledger.',
    });

    // Update case status
    setCurrentCase((prev) => ({
      ...prev,
      finalVerificationRecord: {
        status: 'HUMAN REVIEW REQUIRED',
        verifiedBy: reviewerName,
        timestamp: timestampStr,
        memo,
      },
    }));
  };

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
        currentScreen,
        setCurrentScreen,
        currentCase,
        switchCase,
        activeSnippet,
        openSourceDrawer,
        closeSourceDrawer,
        reviewActions,
        addReviewAction,
        markCaseVerified,
        isAskOpen,
        setIsAskOpen,
        isTrustSafetyOpen,
        setIsTrustSafetyOpen,
        highlightReasoningPath,
        setHighlightReasoningPath,
        prefillQuery,
        setPrefillQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
