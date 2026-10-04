// NyayaPraman - "Ask NyayaPraman" Query Engine & 10-Step Reasoning Pipeline

export interface ReasoningStep {
  stepNumber: number;
  title: string;
  summary: string;
  details: string;
  sourceDoc?: string;
  sourceSnippetId?: string;
  highlightedGraphNodes?: string[];
  status: 'completed' | 'active' | 'pending';
}

export interface AskQueryResult {
  query: string;
  reframedIntent: string;
  steps: ReasoningStep[];
  statusBadge: string;
  finalAnswerText: string;
  suggestedActions: string[];
  sourceCitations: { title: string; snippetId: string }[];
  isSafeReframing: boolean;
}

export const BENCHMARK_QUERY =
  'Has the respondent definitely violated the court order to refund ₹2,00,000 within 30 days?';

export function runAskEngine(userQuery: string): AskQueryResult {
  const queryLower = userQuery.toLowerCase().trim();

  // 1. Primary Benchmark Query Match
  if (
    queryLower.includes('violated') ||
    queryLower.includes('2,00,000') ||
    queryLower.includes('30 days') ||
    queryLower.includes('refund') ||
    queryLower.includes('sharma')
  ) {
    return {
      query: userQuery,
      reframedIntent:
        'Reframed Request: Request for judicial conclusion detected. Reframing from "verdict prediction" to objective "evidentiary compliance verification against court order terms".',
      steps: [
        {
          stepNumber: 1,
          title: 'Intent & Boundary Check',
          summary: 'Detected request for legal/judicial conclusion. Reframed to evidentiary verification.',
          details:
            'Platform safety rules prohibit predicting guilt, contempt, or liability. The question was reframed to evaluate available documentary proof against the requirements of the court order.',
          status: 'completed',
          highlightedGraphNodes: ['node_case', 'node_issue_1'],
        },
        {
          stepNumber: 2,
          title: 'Retrieve Case Context',
          summary: 'Retrieved District Commission Court Order (1 Jun 2025) and 6 related evidence documents.',
          details:
            'Loaded: Tax Invoice (doc_1), Legal Notice (doc_2), Petition (doc_3), Court Order (doc_4), Affidavit (doc_5), Bank Statement (doc_6), Signed Receipt (doc_7).',
          sourceDoc: 'COURT ORDER (District Consumer Commission, 01-06-2025)',
          sourceSnippetId: 'snip_ord_1',
          status: 'completed',
          highlightedGraphNodes: ['node_order', 'node_doc_bank', 'node_doc_affidavit'],
        },
        {
          stepNumber: 3,
          title: 'Extract Obligation',
          summary: 'Obligation: QuickElectro Pvt Ltd -> Refund ₹2,00,000 to Aditya Sharma within 30 days.',
          details:
            'Obligation compiled: Responsible Party = QuickElectro; Amount = ₹2,00,000; Window = 30 days; Calculated Deadline = 1 Jul 2025; Required proof = Certified electronic banking advice.',
          sourceDoc: 'Court Order, Page 3, Paragraph 4',
          sourceSnippetId: 'snip_ord_1',
          status: 'completed',
          highlightedGraphNodes: ['node_obligation', 'node_deadline'],
        },
        {
          stepNumber: 4,
          title: 'Build Expected State',
          summary: 'Expected State: ₹2,00,000 credited in full on or before 1 Jul 2025.',
          details:
            'Deterministic benchmark established. Target consideration: ₹2,00,000; Latest permissible timestamp: 2025-07-01T23:59:59 IST.',
          status: 'completed',
          highlightedGraphNodes: ['node_expected'],
        },
        {
          stepNumber: 5,
          title: 'Match Evidence & Build Observed State',
          summary: 'Observed State: ₹1,25,000 credited on 6 Jul 2025 (Day 35) per certified HDFC bank ledger.',
          details:
            'Electronic bank record reflects credit of ₹1,25,000 on 6 Jul 2025. Unilateral affidavit claims ₹2,00,000 on 28 Jun 2025, but ranks lowest in evidentiary hierarchy.',
          sourceDoc: 'HDFC Certified Bank Statement, Page 2',
          sourceSnippetId: 'snip_bnk_1',
          status: 'completed',
          highlightedGraphNodes: ['node_observed', 'node_doc_bank'],
        },
        {
          stepNumber: 6,
          title: 'Run Analytical Engines',
          summary: 'Differences: ₹75,000 short, 5 days late. Detected 2 cross-document contradictions & 3 missing evidence items.',
          details:
            'Difference engine identified ₹75,000 unevidenced and Day 35 execution. Contradiction engine identified discrepancy between affidavit assertion and bank transaction timestamp.',
          status: 'completed',
          highlightedGraphNodes: ['edge_contradicts_1', 'edge_contradicts_2'],
        },
        {
          stepNumber: 7,
          title: 'Retrieve Law & Temporal Check',
          summary: 'Consumer Protection Act 2019 Sec 39 & Sec 71 apply. BSA 2023 Sec 63 governs electronic evidence.',
          details:
            'Verified temporal applicability for 2025 event. Citation Auditor marked claim regarding oral deadline extension as UNSUPPORTED.',
          sourceDoc: 'Consumer Protection Act, 2019 & BSA 2023',
          sourceSnippetId: 'cpa_sec_39',
          status: 'completed',
          highlightedGraphNodes: ['node_act_cpa', 'node_sec_39'],
        },
        {
          stepNumber: 8,
          title: 'Verification Status Computation',
          summary: 'Computed Status: PARTIAL / INSUFFICIENT EVIDENCE (HUMAN REVIEW REQUIRED).',
          details:
            'All conditions for automated verification failed due to partial financial consideration and missing deadline proof. Assigned to Human Review Queue.',
          status: 'completed',
          highlightedGraphNodes: ['node_obligation', 'node_observed'],
        },
        {
          stepNumber: 9,
          title: 'Formulate Objective Answer',
          summary: 'Neutral evidentiary analysis generated in compliance with legal-tech safety standards.',
          details:
            'Answer strictly avoids judicial determinations, provides facts, diffs, contradictions, and next actions.',
          status: 'completed',
        },
        {
          stepNumber: 10,
          title: 'Human Review Hand-off',
          summary: 'Prepared action packet with direct jumps to Human Review and Compliance Report.',
          details:
            'Interactive action buttons linked to Screen L (Human Review Queue) and Screen M (Compliance Report Generator).',
          status: 'completed',
        },
      ],
      statusBadge: 'PARTIAL / INSUFFICIENT EVIDENCE - HUMAN REVIEW REQUIRED',
      finalAnswerText: `I can't determine whether the respondent has violated the order. That is a legal determination for a human professional. Here is what the available evidence shows:

• Order required: ₹2,00,000 refund within 30 days (by 1 Jul 2025).
• Evidence shows: ₹1,25,000 credited on 6 Jul 2025 (Day 35) per bank record.
• Differences: ₹75,000 not evidenced; payment recorded 5 days after the deadline.
• Possible contradiction: the affidavit states full payment on 28 Jun 2025, but the bank record and receipt show a smaller amount on a later date.
• Missing evidence: proof of the remaining ₹75,000, a complete payment record, and proof of payment within the deadline.

Status: PARTIAL - insufficient evidence to establish complete compliance. Human review required.

Suggested next review actions:
(1) request complete payment proof,
(2) verify the transaction date against the primary bank record,
(3) record the reviewer's decision.`,
      suggestedActions: [
        'Request complete payment proof for remaining ₹75,000',
        'Verify transaction date against primary bank record',
        'Proceed to Human Review to record final decision',
      ],
      sourceCitations: [
        { title: 'COURT ORDER (01-06-2025) p. 3', snippetId: 'snip_ord_1' },
        { title: 'HDFC Bank Statement (06-07-2025) p. 2', snippetId: 'snip_bnk_1' },
        { title: 'Respondent Compliance Affidavit (30-06-2025)', snippetId: 'snip_aff_1' },
        { title: 'Complainant Signed Receipt (06-07-2025)', snippetId: 'snip_rec_1' },
      ],
      isSafeReframing: true,
    };
  }

  // 2. Suggested Query: Missing Evidence
  if (queryLower.includes('missing') || queryLower.includes('obligation 1')) {
    return {
      query: userQuery,
      reframedIntent: 'Automated retrieval of missing evidentiary requirements for Obligation 1.',
      steps: [
        {
          stepNumber: 1,
          title: 'Obligation Lookup',
          summary: 'Retrieved Obligation 1: Full refund of ₹2,00,000 by 1 Jul 2025.',
          details: 'Evaluated observed records against standard verification requirements.',
          status: 'completed',
        },
        {
          stepNumber: 2,
          title: 'Missing Evidence Gap Analysis',
          summary: 'Identified 3 evidentiary omissions.',
          details: '1. ₹75,000 proof, 2. Complete ledger audit trail, 3. Timestamp proving initiation by deadline.',
          status: 'completed',
        },
      ],
      statusBadge: 'INSUFFICIENT EVIDENCE',
      finalAnswerText: `For Obligation 1 (Refund of ₹2,00,000 within 30 days), the following evidence is currently missing from the case record:

1. Financial Proof for Balance ₹75,000: No certified bank credit advice, cheque clearance memo, or counter-signed acknowledgment exists on record for the remaining sum.
2. Complete Payment Ledger: A full statement showing both the debit transaction ID and credit confirmation with originating bank UTR number.
3. Proof of Compliance within Deadline: No verified banking evidence demonstrates that remittance was initiated on or before 1 July 2025 (the recorded credit occurred on 6 July 2025).

Safe Next Action: Request the Respondent to submit a certified bank statement showing debit initiation prior to 1 July 2025 and proof of remittance for the remaining ₹75,000.`,
      suggestedActions: [
        'Issue notice for supplementary banking records',
        'Inspect Complainant passbook for July 2025',
      ],
      sourceCitations: [
        { title: 'Court Order (01-06-2025)', snippetId: 'snip_ord_1' },
        { title: 'HDFC Statement (06-07-2025)', snippetId: 'snip_bnk_1' },
      ],
      isSafeReframing: false,
    };
  }

  // 3. Suggested Query: Temporal Legal Resolver (15 Aug 2024 / Cheque)
  if (queryLower.includes('15 aug 2024') || queryLower.includes('cheque') || queryLower.includes('law version')) {
    return {
      query: userQuery,
      reframedIntent: 'Temporal Legal Resolution for incident date: 15 August 2024.',
      steps: [
        {
          stepNumber: 1,
          title: 'Temporal Anchor Date Evaluation',
          summary: 'Event Date: 15 August 2024. Post-dates major statutory transition of 1 July 2024.',
          details: 'Evaluation against enactment and commencement notifications of criminal and evidence laws.',
          status: 'completed',
        },
        {
          stepNumber: 2,
          title: 'Statute Transition Mapping',
          summary: 'BNS, BNSS, and BSA apply in place of IPC, CrPC, and Indian Evidence Act.',
          details: 'Substantive offence under Section 138 NI Act remains in force; criminal procedural inquiry follows BNSS 2023.',
          status: 'completed',
        },
      ],
      statusBadge: 'VERIFIED STATUTORY APPLICABILITY',
      finalAnswerText: `Temporal Legal Resolver Finding for Event Date: 15 August 2024

1. Substantive Law:
• Negotiable Instruments Act, 1881 (Section 138) continues to define the substantive offence regarding cheque dishonour.

2. Procedural & Evidence Regime:
• Because the event occurred on 15 August 2024 (after 1 July 2024), procedural cognizance, summons issuance, and trial processes are governed by the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS), replacing the Code of Criminal Procedure, 1973 (CrPC).
• The admissibility and certification of electronic bank records and digital signatures are governed by Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), replacing the Indian Evidence Act, 1872.

*Note: All statutory transitions are subject to statutory commencement details and jurisdictional notifications. Illustrative sample - verify against official Gazette before real use.*`,
      suggestedActions: [
        'Cross-check jurisdictional High Court circulars on BNSS transition',
        'Verify Section 63 BSA certificate for digital transaction slips',
      ],
      sourceCitations: [
        { title: 'BNSS 2023 Commencement Notification (01-07-2024)', snippetId: 'bsa_sec_63' },
        { title: 'NI Act 1881 Section 138', snippetId: 'ni_act_sec_138' },
      ],
      isSafeReframing: false,
    };
  }

  // 4. Safe Abstention Fallback for Out-of-Scope Queries
  return {
    query: userQuery,
    reframedIntent: 'Out-of-scope query evaluated against local evidentiary boundary.',
    steps: [
      {
        stepNumber: 1,
        title: 'Scope & Boundary Verification',
        summary: 'Query requires information outside the seeded case facts and verified statutory records.',
        details: 'Applying safe abstention protocol.',
        status: 'completed',
      },
    ],
    statusBadge: 'INSUFFICIENT EVIDENCE',
    finalAnswerText: `The available evidence is insufficient to establish complete compliance. Additional evidence is required for human review.

NyayaPraman operates strictly on verified case documents and certified statutory text. For inquiries outside the current case record, a qualified legal practitioner should review the primary court files.`,
    suggestedActions: [
      'Upload additional case documents in Screen C',
      'Select one of the suggested query chips above',
    ],
    sourceCitations: [],
    isSafeReframing: true,
  };
}
