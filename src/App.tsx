// NyayaPraman - Root App Component with Router and Modals

import React from 'react';
import { useApp } from './state/store';
import { Layout } from './components/Layout';
import { SourceDrawer } from './components/SourceDrawer';
import { TrustSafetyModal } from './components/TrustSafetyModal';
import { AskNyayaModal } from './components/AskNyayaModal';

// Screens A to M
import { ScreenA_ModeSelect } from './components/screens/ScreenA_ModeSelect';
import { ScreenB_CaseCreate } from './components/screens/ScreenB_CaseCreate';
import { ScreenC_UploadDocs } from './components/screens/ScreenC_UploadDocs';
import { ScreenD_CaseUnderstanding } from './components/screens/ScreenD_CaseUnderstanding';
import { ScreenE_IssueMatrix } from './components/screens/ScreenE_IssueMatrix';
import { ScreenF_RAGSearch } from './components/screens/ScreenF_RAGSearch';
import { ScreenG_GraphView } from './components/screens/ScreenG_GraphView';
import { ScreenH_Timeline } from './components/screens/ScreenH_Timeline';
import { ScreenI_OrderCompiler } from './components/screens/ScreenI_OrderCompiler';
import { ScreenJ_ExpectedVsObserved } from './components/screens/ScreenJ_ExpectedVsObserved';
import { ScreenK_Verification } from './components/screens/ScreenK_Verification';
import { ScreenL_HumanReview } from './components/screens/ScreenL_HumanReview';
import { ScreenM_GenerateReport } from './components/screens/ScreenM_GenerateReport';

export const AppContent: React.FC = () => {
  const { currentScreen, setIsAskOpen } = useApp();

  const renderActiveScreen = () => {
    switch (currentScreen) {
      case 'A':
        return <ScreenA_ModeSelect />;
      case 'B':
        return <ScreenB_CaseCreate />;
      case 'C':
        return <ScreenC_UploadDocs />;
      case 'D':
        return <ScreenD_CaseUnderstanding />;
      case 'E':
        return <ScreenE_IssueMatrix />;
      case 'F':
        return <ScreenF_RAGSearch />;
      case 'G':
        return <ScreenG_GraphView />;
      case 'H':
        return <ScreenH_Timeline />;
      case 'I':
        return <ScreenI_OrderCompiler />;
      case 'J':
        return <ScreenJ_ExpectedVsObserved />;
      case 'K':
        return <ScreenK_Verification />;
      case 'L':
        return <ScreenL_HumanReview />;
      case 'M':
        return <ScreenM_GenerateReport />;
      default:
        return <ScreenA_ModeSelect />;
    }
  };

  return (
    <Layout>
      {renderActiveScreen()}
      <SourceDrawer />
      <TrustSafetyModal />
      <AskNyayaModal />

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsAskOpen(true)}
        className="fixed bottom-12 right-6 z-[60] w-16 h-16 rounded-full bg-white shadow-2xl border-4 border-amber-500 flex items-center justify-center overflow-hidden hover:scale-110 transition-transform cursor-pointer"
      >
        <img src="/lawyer-avatar.png" alt="Chatbot" className="w-full h-full object-cover" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
      </button>
      <button id="btn-open-chatbot" className="hidden" onClick={() => window.dispatchEvent(new CustomEvent('open-ask-nyaya'))}></button>

    </Layout>
  );
};
