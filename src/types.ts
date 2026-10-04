// NyayaPraman - Core Type Definitions

export type UserMode = 'citizen' | 'lawyer' | 'compliance';

export type VerificationStatus =
  | 'VERIFIED'
  | 'PARTIAL'
  | 'INSUFFICIENT EVIDENCE'
  | 'POSSIBLE CONTRADICTION'
  | 'NOT YET VERIFIED'
  | 'HUMAN REVIEW REQUIRED';

export type AuthorityRanking = 'PRIMARY_BANK' | 'SIGNED_RECEIPT' | 'UNILATERAL_AFFIDAVIT';

export interface DocumentSnippet {
  id: string;
  documentTitle: string;
  documentType: string;
  pageNumber: number;
  date: string;
  sourceText: string;
  verifiedAuthoritativeLaw: boolean; // false for user documents
}

export interface CaseDocument {
  id: string;
  title: string;
  type: 'court_order' | 'petition' | 'affidavit' | 'agreement' | 'notice' | 'bank_statement' | 'receipt' | 'report';
  date: string;
  size: string;
  confidenceScore: number; // OCR confidence e.g. 98.4%
  ocrStatus: 'completed' | 'processing' | 'pending';
  snippets: DocumentSnippet[];
  summary: string;
}

export interface LegalParty {
  id: string;
  name: string;
  role: 'Complainant' | 'Respondent' | 'Judge' | 'Third Party';
  counsel?: string;
  contact?: string;
}

export interface CaseFact {
  id: string;
  statement: string;
  date: string;
  evidencedBySnippetId: string;
  category: 'purchase' | 'communication' | 'payment' | 'procedural';
  contradictionFlag?: string;
}

export interface CaseClaim {
  id: string;
  allegedBy: string;
  statement: string;
  relevantLawRef?: string;
  citationAuditStatus: 'SUPPORTED' | 'UNSUPPORTED' | 'UNCERTAIN';
  auditReason: string;
  snippetId: string;
}

export interface LegalIssue {
  id: string;
  title: string;
  description: string;
  relevantFacts: string[];
  applicableStatute: string;
  statuteSection: string;
  evidenceSnippets: string[];
  precedents: string[];
  unresolvedGap: string;
  status: 'Critical' | 'Substantial' | 'Resolved';
}

export interface Obligation {
  id: string;
  courtOrderId: string;
  responsibleParty: string;
  beneficiaryParty: string;
  action: string;
  amountRequired: number;
  currency: string;
  deadlineDate: string;
  deadlineDays: number;
  rawOrderText: string;
  highlightPhrase: string;
  requiredEvidenceTypes: string[];
}

export interface ObservedEvidenceState {
  amountEvidenced: number;
  evidenceDate: string;
  primaryDocumentId: string;
  primaryAuthority: AuthorityRanking;
  paymentReference: string;
  sourceSnippetId: string;
  isWithinDeadline: boolean;
  daysLate: number;
}

export interface DifferenceAnalysis {
  amountRequired: number;
  amountEvidenced: number;
  amountGap: number;
  isAmountFulfilled: boolean;
  deadlineDate: string;
  observedDate: string;
  daysLate: number;
  isTimeCompliant: boolean;
  evidenceHierarchy: {
    documentName: string;
    type: string;
    authorityRank: number; // 1 = highest (bank), 2 = receipt, 3 = affidavit
    statedAmount: number;
    statedDate: string;
  }[];
}

export interface MissingEvidenceItem {
  id: string;
  description: string;
  severity: 'CRITICAL' | 'MODERATE' | 'INFORMATIONAL';
  requiredToVerify: string;
  actionRecommendation: string;
}

export interface ContradictionItem {
  id: string;
  title: string;
  status: 'POSSIBLE CONTRADICTION';
  sideA: {
    documentName: string;
    statement: string;
    date: string;
    amount?: number;
    snippetId: string;
  };
  sideB: {
    documentName: string;
    statement: string;
    date: string;
    amount?: number;
    snippetId: string;
  };
  findingNote: string;
}

export interface HumanReviewAction {
  id: string;
  targetId: string; // contradiction or gap id
  targetType: 'CONTRADICTION' | 'OBLIGATION' | 'MISSING_EVIDENCE';
  decision: 'ACCEPTED' | 'REJECTED' | 'EVIDENCE_REQUESTED' | 'VERIFIED';
  reviewerName: string;
  timestamp: string;
  comment: string;
}

export interface CaseData {
  id: string;
  caseName: string;
  caseNumber: string;
  court: string;
  jurisdiction: string;
  eventDate: string;
  caseType: 'Consumer Dispute' | 'Employment' | 'Tenancy';
  parties: LegalParty[];
  documents: CaseDocument[];
  facts: CaseFact[];
  claims: CaseClaim[];
  issues: LegalIssue[];
  obligation: Obligation;
  observedState: ObservedEvidenceState;
  finalVerificationRecord?: {
    status: VerificationStatus;
    verifiedBy: string;
    timestamp: string;
    memo: string;
  };
}

export interface GraphNode {
  id: string;
  type:
    | 'Case'
    | 'Party'
    | 'Fact'
    | 'Claim'
    | 'Evidence'
    | 'LegalIssue'
    | 'Act'
    | 'Section'
    | 'Judgment'
    | 'CourtOrder'
    | 'Obligation'
    | 'ExpectedOutcome'
    | 'ObservedOutcome'
    | 'Deadline';
  label: string;
  subtitle?: string;
  snippetId?: string;
  status?: VerificationStatus;
  x: number;
  y: number;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  label: string;
  relationType:
    | 'supports'
    | 'contradicts'
    | 'cites'
    | 'interprets'
    | 'requires'
    | 'applies_to'
    | 'amended_by'
    | 'alleged_by'
    | 'found_by_court'
    | 'evidenced_by'
    | 'fulfilled_by';
  isReasoningPath?: boolean;
}
