const fs = require('fs');

let screenK = fs.readFileSync('src/components/screens/ScreenK_Verification.tsx', 'utf8');
screenK = screenK.replace(/Opening Why Not Verified popup...\\n\\n1. Expected: ?2,00,000\\n2. Verified: ?1,25,000\\n3. Diff: ?75,000\\n4. Late: 5 Days\\n5. Contradiction: Amount mismatch/, "Opening Why Not Verified popup... 1. Expected: 2,00,000 2. Verified: 1,25,000 3. Diff: 75,000 4. Late: 5 Days 5. Contradiction: Amount mismatch");
fs.writeFileSync('src/components/screens/ScreenK_Verification.tsx', screenK, 'utf8');

let screenE = fs.readFileSync('src/components/screens/ScreenE_IssueMatrix.tsx', 'utf8');
screenE = screenE.replace("      )}\n      )}\n    </div>\n  );\n};\n", "      )}\n    </div>\n  );\n};\n");
fs.writeFileSync('src/components/screens/ScreenE_IssueMatrix.tsx', screenE, 'utf8');
