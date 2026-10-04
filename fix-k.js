const fs = require('fs');

let screenK = fs.readFileSync('src/components/screens/ScreenK_Verification.tsx', 'utf8');
screenK = screenK.replace(/onClick=\{\(\) => alert\('Opening Why Not Verified popup.*?\'\)\}/g, "onClick={() => alert('Opening Why Not Verified popup...')}");
fs.writeFileSync('src/components/screens/ScreenK_Verification.tsx', screenK, 'utf8');
