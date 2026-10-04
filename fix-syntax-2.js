const fs = require('fs');
let screenK = fs.readFileSync('src/components/screens/ScreenK_Verification.tsx', 'utf8');
screenK = screenK.replace("alert('Opening Why Not Verified popup...\\n\\n1. Expected: ?2,00,000\\n2. Verified: ?1,25,000\\n3. Diff: ?75,000\\n4. Late: 5 Days\\n5. Contradiction: Amount mismatch')", "alert('Opening Why Not Verified popup...')");
fs.writeFileSync('src/components/screens/ScreenK_Verification.tsx', screenK, 'utf8');

let screenE = fs.readFileSync('src/components/screens/ScreenE_IssueMatrix.tsx', 'utf8');
const eParts = screenE.split('      )}\n      )}\n    </div>\n  );\n};\n');
if (eParts.length > 1) {
    fs.writeFileSync('src/components/screens/ScreenE_IssueMatrix.tsx', eParts.join('      )}\n    </div>\n  );\n};\n'), 'utf8');
} else {
    // maybe it has 3 closing parts?
    screenE = screenE.replace(/      \)}\n      \)}\n    <\/div>\n  \);\n};\n/g, "      )}\n    </div>\n  );\n};\n");
    fs.writeFileSync('src/components/screens/ScreenE_IssueMatrix.tsx', screenE, 'utf8');
}
