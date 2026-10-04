// NyayaPraman - Missing Evidence Detection Engine

import { Obligation, ObservedEvidenceState, MissingEvidenceItem } from '../types';

export function detectMissingEvidence(
  obligation: Obligation,
  observed: ObservedEvidenceState
): MissingEvidenceItem[] {
  const missing: MissingEvidenceItem[] = [];
  const amountGap = obligation.amountRequired - observed.amountEvidenced;

  if (amountGap > 0) {
    missing.push({
      id: 'miss_amount_gap',
      description: `Proof of remaining ₹${amountGap.toLocaleString('en-IN')}`,
      severity: 'CRITICAL',
      requiredToVerify: 'Certified bank credit advice or official receipt for the balance sum',
      actionRecommendation: 'Request or upload complete payment proof for the remaining balance sum.',
    });
  }

  missing.push({
    id: 'miss_complete_ledger',
    description: 'Complete payment record and transaction audit trail',
    severity: 'MODERATE',
    requiredToVerify: 'Full statement of account showing originating and receiving UTR numbers',
    actionRecommendation: 'Verify transaction date and narration against primary banking records.',
  });

  if (!observed.isWithinDeadline || observed.daysLate > 0) {
    missing.push({
      id: 'miss_deadline_proof',
      description: `Evidence of payment within the deadline (on or before ${obligation.deadlineDate})`,
      severity: 'CRITICAL',
      requiredToVerify: 'Timestamped banking advice establishing debit initiation on or before 1 Jul 2025',
      actionRecommendation: 'Verify whether any payment was initiated prior to the 30-day expiry date.',
    });
  }

  return missing;
}
