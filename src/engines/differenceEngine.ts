// NyayaPraman - Difference Engine (Expected vs Observed)

import { Obligation, ObservedEvidenceState, DifferenceAnalysis } from '../types';

export function computeDifference(
  obligation: Obligation,
  observed: ObservedEvidenceState
): DifferenceAnalysis {
  const amountRequired = obligation.amountRequired;
  const amountEvidenced = observed.amountEvidenced;
  const amountGap = Math.max(0, amountRequired - amountEvidenced);
  const isAmountFulfilled = amountGap === 0;

  const deadline = new Date(obligation.deadlineDate);
  const observedDateObj = new Date(observed.evidenceDate);
  
  let daysLate = 0;
  if (!isNaN(observedDateObj.getTime()) && !isNaN(deadline.getTime())) {
    const diffTime = observedDateObj.getTime() - deadline.getTime();
    daysLate = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  } else {
    daysLate = observed.daysLate;
  }

  const isTimeCompliant = daysLate === 0 && observed.isWithinDeadline;

  const evidenceHierarchy = [
    {
      documentName: 'HDFC Certified Bank Statement',
      type: 'Primary Electronic Financial Record',
      authorityRank: 1, // Highest
      statedAmount: 125000,
      statedDate: '2025-07-06',
    },
    {
      documentName: 'Complainant Signed Partial Receipt',
      type: 'Bilateral Acknowledgment Document',
      authorityRank: 2, // Medium
      statedAmount: 125000,
      statedDate: '2025-07-06',
    },
    {
      documentName: 'Respondent Compliance Affidavit',
      type: 'Unilateral Sworn Statement (Claim only)',
      authorityRank: 3, // Lowest
      statedAmount: 200000,
      statedDate: '2025-06-28',
    },
  ];

  return {
    amountRequired,
    amountEvidenced,
    amountGap,
    isAmountFulfilled,
    deadlineDate: obligation.deadlineDate,
    observedDate: observed.evidenceDate,
    daysLate,
    isTimeCompliant,
    evidenceHierarchy,
  };
}
