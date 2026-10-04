const fs = require('fs');
let appContent = fs.readFileSync('src/App.tsx', 'utf8');

// Replace the line
appContent = appContent.replace(
  'const { currentScreen } = useApp();',
  'const { currentScreen, setIsAskOpen } = useApp();'
);

// Replace the fake button with the real one
appContent = appContent.replace(
  `onClick={() => document.getElementById('btn-open-chatbot').click()}`,
  `onClick={() => setIsAskOpen(true)}`
);

fs.writeFileSync('src/App.tsx', appContent, 'utf8');
console.log("App.tsx fixed");
