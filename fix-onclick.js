const fs = require('fs');
const path = require('path');

function fix(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/> onClick=/g, ' onClick=');
  fs.writeFileSync(file, content, 'utf8');
}

fix('src/components/screens/ScreenF_RAGSearch.tsx');
fix('src/components/screens/ScreenD_CaseUnderstanding.tsx');
fix('src/components/screens/ScreenL_HumanReview.tsx');
fix('src/components/screens/ScreenM_GenerateReport.tsx');
fix('src/components/screens/ScreenB_CaseCreate.tsx');
fix('src/components/screens/ScreenE_IssueMatrix.tsx');
