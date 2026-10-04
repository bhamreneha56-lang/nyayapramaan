const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

let screenE = fs.readFileSync(path.join(screensDir, 'ScreenE_IssueMatrix.tsx'), 'utf8');
screenE = screenE.replace(/> ADD ISSUE<\/button>/, ' onClick={() => alert("Opening new issue creation modal...")}> ADD ISSUE</button>');
screenE = screenE.replace(/>EXPORT CSV \/ MARKDOWN<\/button>/, ' onClick={() => alert("Exporting Issue Matrix as CSV...")}>EXPORT CSV / MARKDOWN</button>');

fs.writeFileSync(path.join(screensDir, 'ScreenE_IssueMatrix.tsx'), screenE, 'utf8');
