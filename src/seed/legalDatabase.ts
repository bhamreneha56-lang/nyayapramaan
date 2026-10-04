// NyayaPraman - Legal Knowledge Base, Statutory Database & Temporal Resolver Seeds

export interface StatutoryProvision {
  id: string;
  actTitle: string;
  section: string;
  passageText: string;
  enactedDate: string;
  commencementDate: string;
  repealDate?: string;
  temporalStatus: 'IN_FORCE' | 'REPEALED' | 'TRANSITIONAL' | 'AMENDED';
  jurisdiction: string;
  officialCitation: string;
  illustrativeDisclaimer: string;
  verificationPending: boolean;
  citationAuditStatus: 'SUPPORTED' | 'UNSUPPORTED' | 'UNCERTAIN';
  auditNote: string;
  retrievalScore: {
    keywordMatch: number;
    semanticScore: number;
    metadataFilterMatch: boolean;
    rerankScore: number;
  };
}

export const LEGAL_PROVISIONS_SEED: StatutoryProvision[] = [
  {
    id: 'cpa_sec_39',
    actTitle: 'Consumer Protection Act, 2019',
    section: 'Section 39(1)(e) - Findings and Relief of District Commission',
    passageText: 'Where the District Commission is satisfied that the goods complained against suffer from any defect or that any of the allegations contained in the complaint about deficiency in service are proved, it shall issue an order directing the opposite party to return to the complainant the price, or as the case may be, the charges paid by the complainant.',
    enactedDate: '2019-08-09',
    commencementDate: '2020-07-20',
    temporalStatus: 'IN_FORCE',
    jurisdiction: 'Pan-India (District, State & National Commissions)',
    officialCitation: 'Act No. 35 of 2019, Part IV',
    illustrativeDisclaimer: 'Illustrative sample - verify against official Gazette notification before real use.',
    verificationPending: true,
    citationAuditStatus: 'SUPPORTED',
    auditNote: 'Directly supports the order requiring return of purchase price for defective product.',
    retrievalScore: {
      keywordMatch: 0.94,
      semanticScore: 0.96,
      metadataFilterMatch: true,
      rerankScore: 0.97,
    },
  },
  {
    id: 'cpa_sec_71',
    actTitle: 'Consumer Protection Act, 2019',
    section: 'Section 71 - Enforcement of Orders of District Commission',
    passageText: 'Every order made by a District Commission, State Commission or the National Commission shall be enforced by it in the same manner as if it were a decree of a civil court made by a court in a suit filed therein.',
    enactedDate: '2019-08-09',
    commencementDate: '2020-07-20',
    temporalStatus: 'IN_FORCE',
    jurisdiction: 'Pan-India',
    officialCitation: 'Act No. 35 of 2019, Section 71',
    illustrativeDisclaimer: 'Illustrative sample - verify against official source before real use.',
    verificationPending: true,
    citationAuditStatus: 'SUPPORTED',
    auditNote: 'Establishes executable decree character of final consumer commission orders.',
    retrievalScore: {
      keywordMatch: 0.89,
      semanticScore: 0.92,
      metadataFilterMatch: true,
      rerankScore: 0.93,
    },
  },
  {
    id: 'cpa_sec_72',
    actTitle: 'Consumer Protection Act, 2019',
    section: 'Section 72 - Penalty for Non-Compliance of Order',
    passageText: 'Whoever fails to comply with any order made by the District Commission or the State Commission or the National Commission, as the case may be, shall be punishable with imprisonment for a term which shall not be less than one month, but which may extend to three years, or with fine, or with both.',
    enactedDate: '2019-08-09',
    commencementDate: '2020-07-20',
    temporalStatus: 'IN_FORCE',
    jurisdiction: 'Pan-India',
    officialCitation: 'Act No. 35 of 2019, Section 72',
    illustrativeDisclaimer: 'Illustrative sample - verify against official source before real use.',
    verificationPending: true,
    citationAuditStatus: 'SUPPORTED',
    auditNote: 'Applies to execution proceedings post expiry of prescribed compliance duration.',
    retrievalScore: {
      keywordMatch: 0.86,
      semanticScore: 0.90,
      metadataFilterMatch: true,
      rerankScore: 0.91,
    },
  },
  {
    id: 'bsa_sec_63',
    actTitle: 'Bharatiya Sakshya Adhiniyam, 2023 (BSA)',
    section: 'Section 63 - Electronic Records and Primary Bank Ledger Evidentiary Hierarchy',
    passageText: 'Electronic records certified in accordance with Section 63 shall constitute admissible evidence of financial transactions. Primary system-generated electronic records maintain higher evidentiary reliability than unilateral subjective statements.',
    enactedDate: '2023-12-25',
    commencementDate: '2024-07-01',
    temporalStatus: 'IN_FORCE',
    jurisdiction: 'Pan-India (Replaced Indian Evidence Act 1872 from 1 Jul 2024)',
    officialCitation: 'Act No. 47 of 2023',
    illustrativeDisclaimer: 'Illustrative sample - verify against official source before real use.',
    verificationPending: true,
    citationAuditStatus: 'SUPPORTED',
    auditNote: 'Applies to all proceedings and evidence assessments initiated on or after 1 July 2024.',
    retrievalScore: {
      keywordMatch: 0.91,
      semanticScore: 0.94,
      metadataFilterMatch: true,
      rerankScore: 0.95,
    },
  },
  {
    id: 'unsupported_sample_claim',
    actTitle: 'Purported Commercial Practice Doctrine',
    section: 'Alleged Informal Oral Waiver of Court Deadlines',
    passageText: 'Where commercial entities enter informal oral correspondence, time-bound judicial directions may be unilaterally deferred without formal enlargement application.',
    enactedDate: 'N/A',
    commencementDate: 'N/A',
    temporalStatus: 'REPEALED',
    jurisdiction: 'Non-Statutory Proposition',
    officialCitation: 'None - Extraneous assertion',
    illustrativeDisclaimer: 'Illustrative sample - verify against official source before real use.',
    verificationPending: true,
    citationAuditStatus: 'UNSUPPORTED',
    auditNote: 'Citation does not sufficiently support the claim. No statutory provision or precedent allows unilateral oral modification of an executable judicial direction.',
    retrievalScore: {
      keywordMatch: 0.35,
      semanticScore: 0.28,
      metadataFilterMatch: false,
      rerankScore: 0.21,
    },
  },
  {
    id: 'ni_act_sec_138',
    actTitle: 'Negotiable Instruments Act, 1881 / BNSS Procedural Linkage',
    section: 'Section 138 - Dishonour of Cheque for Insufficiency of Funds',
    passageText: 'Where any cheque drawn by a person on an account maintained by him with a banker for payment of any amount of money to another person from out of that account for the discharge, in whole or in part, of any debt or other liability, is returned by the bank unpaid...',
    enactedDate: '1881-12-09',
    commencementDate: '1882-03-01',
    temporalStatus: 'TRANSITIONAL',
    jurisdiction: 'Pan-India',
    officialCitation: 'Act No. 26 of 1881, Section 138',
    illustrativeDisclaimer: 'Illustrative sample - verify against official source before real use.',
    verificationPending: true,
    citationAuditStatus: 'SUPPORTED',
    auditNote: 'For offences or proceedings post 1 July 2024, procedural cognizance and summons follow Bharatiya Nagarik Suraksha Sanhita (BNSS), subject to statutory commencement details.',
    retrievalScore: {
      keywordMatch: 0.78,
      semanticScore: 0.81,
      metadataFilterMatch: true,
      rerankScore: 0.82,
    },
  },
];

export interface TemporalTransitionEvent {
  eventDate: string;
  description: string;
  criminalCode: string;
  procedureCode: string;
  evidenceCode: string;
  statutoryNote: string;
}

export function resolveTemporalLaw(dateString: string): TemporalTransitionEvent {
  const targetDate = new Date(dateString);
  const transitionDate = new Date('2024-07-01');

  if (targetDate >= transitionDate) {
    return {
      eventDate: dateString,
      description: 'Event occurred on or after 1 July 2024: New Criminal & Evidence Codes Apply',
      criminalCode: 'Bharatiya Nyaya Sanhita, 2023 (BNS)',
      procedureCode: 'Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)',
      evidenceCode: 'Bharatiya Sakshya Adhiniyam, 2023 (BSA)',
      statutoryNote:
        'From 1 July 2024, IPC 1860, CrPC 1973, and Indian Evidence Act 1872 were replaced by BNS, BNSS, and BSA respectively. Procedural steps including summons, electronic evidence certifications (Sec 63 BSA), and inquiry protocols are governed by the new codes, subject to statutory commencement details.',
    };
  } else {
    return {
      eventDate: dateString,
      description: 'Event occurred before 1 July 2024: Pre-Amendment Statutory Regime Applies',
      criminalCode: 'Indian Penal Code, 1860 (IPC)',
      procedureCode: 'Code of Criminal Procedure, 1973 (CrPC)',
      evidenceCode: 'Indian Evidence Act, 1872 (IEA)',
      statutoryNote:
        'Substantive liabilities and procedural timelines for events occurring prior to 1 July 2024 remain governed by the erstwhile penal and procedural codes under statutory savings clauses.',
    };
  }
}
