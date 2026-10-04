const fs = require('fs');

let screenE = fs.readFileSync('src/components/screens/ScreenE_IssueMatrix.tsx', 'utf8');
screenE = screenE.replace(/      \)}\n      \)}\n    <\/div>\n  \);\n};\n/, "      )}\n    </div>\n  );\n};\n");
screenE = screenE.replace(/      \)}\n    <\/div>\n  \);\n};\n/, "      </div>\n      )}\n    </div>\n  );\n};\n");
// Actually, let's just use regex to remove multiple `)}` before the final divs
screenE = screenE.replace(/\n\s*\)\}\n\s*\)\}\n\s*<\/div>\n\s*\);\n\};\n/g, "\n      )}\n    </div>\n  );\n};\n");
fs.writeFileSync('src/components/screens/ScreenE_IssueMatrix.tsx', screenE, 'utf8');
