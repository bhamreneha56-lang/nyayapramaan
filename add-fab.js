const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

const fabHtml = `
      {/* Floating Chatbot Button */}
      <button
        onClick={() => document.getElementById('btn-open-chatbot').click()}
        className="fixed bottom-12 right-6 z-[60] w-16 h-16 rounded-full bg-white shadow-2xl border-4 border-amber-500 flex items-center justify-center overflow-hidden hover:scale-110 transition-transform cursor-pointer"
      >
        <img src="/lawyer-avatar.png" alt="Chatbot" className="w-full h-full object-cover" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
      </button>
      <button id="btn-open-chatbot" className="hidden" onClick={() => window.dispatchEvent(new CustomEvent('open-ask-nyaya'))}></button>
`;

if (!appContent.includes('Floating Chatbot Button')) {
  appContent = appContent.replace('<AskNyayaModal />', '<AskNyayaModal />\n' + fabHtml);
  fs.writeFileSync('src/App.tsx', appContent, 'utf8');
}
console.log("FAB added to App.tsx.");
