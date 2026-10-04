// NyayaPraman - Cross-Document Contradiction Engine

import { ContradictionItem } from '../types';

export function detectContradictions(): ContradictionItem[] {
  return [
    {
      id: 'contr_1',
      title: 'Amount Contradiction: Affidavit vs Bank Record & Receipt',
      status: 'POSSIBLE CONTRADICTION',
      sideA: {
        documentName: 'Respondent Compliance Affidavit (30 Jun 2025)',
        statement: 'Solemnly affirms full sum of ₹2,00,000/- was remitted to Complainant.',
        date: '2025-06-30',
        amount: 200000,
        snippetId: 'snip_aff_1',
      },
      sideB: {
        documentName: 'Certified Bank Ledger & Complainant Receipt (6 Jul 2025)',
        statement: 'Primary bank statement and counter-signed receipt show credit of ₹1,25,000/- only.',
        date: '2025-07-06',
        amount: 125000,
        snippetId: 'snip_bnk_1',
      },
      findingNote:
        'Possible Contradiction - Human Review Required. The unilateral affidavit claims ₹2,00,000, whereas higher-authority electronic banking logs document ₹1,25,000.',
    },
    {
      id: 'contr_2',
      title: 'Date Contradiction: Stated Transfer Date vs Bank Credit Date',
      status: 'POSSIBLE CONTRADICTION',
      sideA: {
        documentName: 'Respondent Compliance Affidavit',
        statement: 'Deposes that electronic transfer was executed on 28.06.2025 (within 30-day window).',
        date: '2025-06-28',
        snippetId: 'snip_aff_1',
      },
      sideB: {
        documentName: 'HDFC Bank Certified Ledger',
        statement: 'Records actual NEFT credit timestamp on 06.07.2025 (Day 35, 5 days after deadline).',
        date: '2025-07-06',
        snippetId: 'snip_bnk_1',
      },
      findingNote:
        'Possible Contradiction - Human Review Required. Discrepancy between stated transfer date (28 Jun 2025) and authenticated receipt timestamp (6 Jul 2025).',
    },
  ];
}
