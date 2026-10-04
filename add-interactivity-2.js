const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

let screenJ = fs.readFileSync(path.join(screensDir, 'ScreenJ_ExpectedVsObserved.tsx'), 'utf8');
screenJ = screenJ.replace("import React from 'react';", "import React, { useState } from 'react';");
screenJ = screenJ.replace("const { setCurrentScreen } = useApp();", "const { setCurrentScreen } = useApp();\n  const [activeTab, setActiveTab] = useState('O1: Refund');");

screenJ = screenJ.replace(
  /<div className="flex border-b border-slate-200 gap-6 text-sm font-bold">([\s\S]*?)<\/div>/,
  `<div className="flex border-b border-slate-200 gap-6 text-sm font-bold">
        {['O1: Refund', 'O2: Litigation Costs'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={\`pb-3 \${activeTab === tab ? 'border-b-2 border-amber-500 text-amber-600' : 'text-slate-500 hover:text-slate-800'}\`}>{tab}</button>
        ))}
      </div>`
);

screenJ = screenJ.replace(
  /<div className="grid grid-cols-2 gap-6">/,
  `{activeTab !== 'O1: Refund' && <div className="p-10 text-center text-slate-500 bg-slate-50 rounded-xl border border-slate-200">The compliance analysis for {activeTab} is currently being calculated...</div>}
      <div className={\`grid grid-cols-2 gap-6 \${activeTab !== 'O1: Refund' ? 'hidden' : ''}\`}>`
);

fs.writeFileSync(path.join(screensDir, 'ScreenJ_ExpectedVsObserved.tsx'), screenJ, 'utf8');

console.log("Updated Screen J");
