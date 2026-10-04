// NyayaPraman - Safety Guard & Forbidden Words Runtime Scanner

export const FORBIDDEN_WORDS = [
  'guilty',
  'fraud',
  'contempt',
  'liable',
  'violated the order',
  'violation of the order',
  'judge will rule',
  'judge will decide',
  'definitely violated',
  'convicted',
  'penalize',
  'court will hold',
  'sure to win',
];

export const ALLOWED_STATUSES = [
  'VERIFIED',
  'PARTIAL',
  'INSUFFICIENT EVIDENCE',
  'POSSIBLE CONTRADICTION',
  'NOT YET VERIFIED',
  'HUMAN REVIEW REQUIRED',
] as const;

export const SAFE_ABSTENTION_TEXT =
  'The available evidence is insufficient to establish complete compliance. Additional evidence is required for human review.';

export const PERSISTENT_FOOTER_DISCLAIMER =
  'AI-assisted analysis. Final legal determination rests with a human professional.';

export interface SafetyCheckResult {
  isSafe: boolean;
  violations: string[];
  scannedLength: number;
}

/**
 * Scans arbitrary text or JSON structures for forbidden legal conclusions.
 */
export function scanForForbiddenWords(input: string | object): SafetyCheckResult {
  const text = typeof input === 'string' ? input : JSON.stringify(input);
  const lower = text.toLowerCase();
  const violations: string[] = [];

  for (const word of FORBIDDEN_WORDS) {
    if (lower.includes(word.toLowerCase())) {
      violations.push(word);
    }
  }

  return {
    isSafe: violations.length === 0,
    violations,
    scannedLength: text.length,
  };
}

/**
 * Runtime sanitization guard for dynamic UI generation.
 * Replaces any accidental forbidden legal conclusion with objective evidentiary phrasing.
 */
export function sanitizeSafeCopy(rawText: string): string {
  let sanitized = rawText;
  const replacements: Record<string, string> = {
    'violated the order': 'unverified compliance against the order',
    'guilty': 'subject to evidentiary inquiry',
    'fraud': 'unsubstantiated representation',
    'contempt': 'matter pending judicial review',
    'liable': 'subject to statutory verification',
  };

  for (const [bad, replacement] of Object.entries(replacements)) {
    const regex = new RegExp(bad, 'gi');
    sanitized = sanitized.replace(regex, replacement);
  }
  return sanitized;
}

/**
 * Validates that a status tag is strictly within the allowed safety taxonomy.
 */
export function isValidStatus(status: string): boolean {
  return (ALLOWED_STATUSES as readonly string[]).includes(status);
}
