const fs = require('fs');
const path = require('path');

function replaceGt(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/Expected > Observed/g, 'Expected &gt; Observed');
  fs.writeFileSync(file, content, 'utf8');
}

replaceGt('src/components/screens/ScreenL_HumanReview.tsx');
replaceGt('src/components/screens/ScreenK_Verification.tsx');
