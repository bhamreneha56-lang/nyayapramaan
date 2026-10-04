const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

// --- Update Screen C (Upload Docs) ---
let screenC = fs.readFileSync(path.join(screensDir, 'ScreenC_UploadDocs.tsx'), 'utf8');
screenC = screenC.replace("import React from 'react';", "import React, { useState } from 'react';");
screenC = screenC.replace("const { setCurrentScreen } = useApp();", "const { setCurrentScreen } = useApp();\n  const [activeTab, setActiveTab] = useState('Required');");

// Update the tabs to be clickable
screenC = screenC.replace(
  /<div className="flex border-b border-slate-200 gap-6 text-sm font-bold">([\s\S]*?)<\/div>/,
  `<div className="flex border-b border-slate-200 gap-6 text-sm font-bold">
        {['Required', 'Pleadings', 'Orders', 'Evidence', 'Other'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={\`pb-3 \${activeTab === tab ? 'border-b-2 border-amber-500 text-amber-600' : 'text-slate-500 hover:text-slate-800'}\`}>{tab}</button>
        ))}
      </div>`
);

// Add action alerts
screenC = screenC.replace(/<button className="text-blue-600/g, '<button onClick={() => alert("Opening document viewer...")} className="text-blue-600');
screenC = screenC.replace(/<button className="text-slate-500 text-xs font-bold hover:underline">EXTRACT/g, '<button onClick={() => alert("Running AI extraction pipeline...")} className="text-slate-500 text-xs font-bold hover:underline">EXTRACT');
screenC = screenC.replace(/<div className="border-2 border-dashed/g, '<div onClick={() => alert("Opening file picker...")} className="border-2 border-dashed');

fs.writeFileSync(path.join(screensDir, 'ScreenC_UploadDocs.tsx'), screenC, 'utf8');


// --- Update Screen D (Case Understanding) ---
let screenD = fs.readFileSync(path.join(screensDir, 'ScreenD_CaseUnderstanding.tsx'), 'utf8');
screenD = screenD.replace("import React from 'react';", "import React, { useState } from 'react';");
screenD = screenD.replace("const { setCurrentScreen } = useApp();", "const { setCurrentScreen } = useApp();\n  const [activeTab, setActiveTab] = useState('Extracted Facts');");

screenD = screenD.replace(
  /<div className="flex border-b border-slate-200 gap-6 text-sm font-bold">([\s\S]*?)<\/div>/,
  `<div className="flex border-b border-slate-200 gap-6 text-sm font-bold overflow-x-auto">
        {['Overview', 'Parties', 'Extracted Facts', 'Claims', 'Entities', 'Issues'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={\`pb-3 whitespace-nowrap \${activeTab === tab ? 'border-b-2 border-amber-500 text-amber-600' : 'text-slate-500 hover:text-slate-800'}\`}>{tab}</button>
        ))}
      </div>`
);

// Add simple condition to hide content if not Extracted Facts (simulate tabs)
screenD = screenD.replace(
  /<div className="grid grid-cols-3 gap-6">/,
  `{activeTab !== 'Extracted Facts' && <div className="p-10 text-center text-slate-500 bg-slate-50 rounded-xl border border-slate-200">Select "Extracted Facts" to view the populated workspace for this demo, or integrate real data for {activeTab}.</div>}
      <div className={\`grid grid-cols-3 gap-6 \${activeTab !== 'Extracted Facts' ? 'hidden' : ''}\`}>`
);
screenD = screenD.replace(/<button className="text-amber-600 font-bold hover:underline">VIEW PROVENANCE/g, '<button onClick={() => alert("Opening Provenance Lens...")} className="text-amber-600 font-bold hover:underline">VIEW PROVENANCE');
screenD = screenD.replace(/>MERGE<\/button>/, ' onClick={() => alert("Entities merged successfully.")}>MERGE</button>');
screenD = screenD.replace(/>REJECT<\/button>/, ' onClick={() => alert("Entity match rejected.")}>REJECT</button>');

fs.writeFileSync(path.join(screensDir, 'ScreenD_CaseUnderstanding.tsx'), screenD, 'utf8');


// --- Update Screen F (Legal RAG) ---
let screenF = fs.readFileSync(path.join(screensDir, 'ScreenF_RAGSearch.tsx'), 'utf8');
screenF = screenF.replace("import React from 'react';", "import React, { useState } from 'react';");
screenF = screenF.replace("const { setCurrentScreen } = useApp();", "const { setCurrentScreen } = useApp();\n  const [activeTab, setActiveTab] = useState('Legal Search');");

screenF = screenF.replace(
  /<div className="flex border-b border-slate-200 gap-6 text-sm font-bold">([\s\S]*?)<\/div>/,
  `<div className="flex border-b border-slate-200 gap-6 text-sm font-bold">
        {['Legal Search', 'Temporal Resolver', 'Judgment Explorer', 'Citation Auditor'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={\`pb-3 \${activeTab === tab ? 'border-b-2 border-amber-500 text-amber-600' : 'text-slate-500 hover:text-slate-800'}\`}>{tab}</button>
        ))}
      </div>`
);

screenF = screenF.replace(
  /<div className="grid grid-cols-3 gap-6">/,
  `{activeTab !== 'Legal Search' && <div className="p-10 text-center text-slate-500 bg-slate-50 rounded-xl border border-slate-200">The {activeTab} workspace module is loading...</div>}
      <div className={\`grid grid-cols-3 gap-6 \${activeTab !== 'Legal Search' ? 'hidden' : ''}\`}>`
);
screenF = screenF.replace(/SEARCH<\/button>/, 'SEARCH</button>');
screenF = screenF.replace(/<button className="bg-slate-900 text-white/, '<button onClick={() => alert("Executing hybrid legal search...")} className="bg-slate-900 text-white');
screenF = screenF.replace(/RESOLVE LAW IN FORCE<\/button>/, ' onClick={() => alert("Resolving law in force for 05-May-2025...")}>RESOLVE LAW IN FORCE</button>');

fs.writeFileSync(path.join(screensDir, 'ScreenF_RAGSearch.tsx'), screenF, 'utf8');


// --- Update Screen K (Verification Dashboard) ---
let screenK = fs.readFileSync(path.join(screensDir, 'ScreenK_Verification.tsx'), 'utf8');
screenK = screenK.replace("import React from 'react';", "import React, { useState } from 'react';");
screenK = screenK.replace(
  /<button className="bg-blue-600 hover:bg-blue-500/,
  `<button onClick={() => { alert('Running 14-step verification procedure...'); }} className="bg-blue-600 hover:bg-blue-500`
);
screenK = screenK.replace(
  /<button className="text-xs text-blue-600 font-bold hover:underline flex items-center gap-1">WHY\?/,
  `<button onClick={() => alert('Opening full rule trace and explainability logs...')} className="text-xs text-blue-600 font-bold hover:underline flex items-center gap-1">WHY?`
);
fs.writeFileSync(path.join(screensDir, 'ScreenK_Verification.tsx'), screenK, 'utf8');


// --- Update Screen L (Human Review) ---
let screenL = fs.readFileSync(path.join(screensDir, 'ScreenL_HumanReview.tsx'), 'utf8');
screenL = screenL.replace("import React from 'react';", "import React, { useState } from 'react';");
screenL = screenL.replace(/<button className="flex-1 bg-emerald-600 text-white/g, '<button onClick={() => alert("Finding confirmed and logged to audit trail.")} className="flex-1 bg-emerald-600 text-white');
screenL = screenL.replace(/<button className="flex-1 bg-red-600 text-white/g, '<button onClick={() => alert("Finding rejected. Please ensure comment is provided.")} className="flex-1 bg-red-600 text-white');
screenL = screenL.replace(/> REQUEST EVIDENCE<\/button>/, ' onClick={() => alert("Request sent for additional evidence.")}> REQUEST EVIDENCE</button>');
screenL = screenL.replace(/> MODIFY<\/button>/, ' onClick={() => alert("Opening editor to modify system findings...")}> MODIFY</button>');
fs.writeFileSync(path.join(screensDir, 'ScreenL_HumanReview.tsx'), screenL, 'utf8');


// --- Update Screen M (Generate Report) ---
let screenM = fs.readFileSync(path.join(screensDir, 'ScreenM_GenerateReport.tsx'), 'utf8');
screenM = screenM.replace("import React from 'react';", "import React, { useState } from 'react';");
screenM = screenM.replace(/GENERATE REPORT<\/button>/, 'GENERATE REPORT</button>');
screenM = screenM.replace(/<button className="bg-amber-500 hover:bg-amber-400/, '<button onClick={() => alert("Generating PII-shielded PDF report. Download will begin shortly...")} className="bg-amber-500 hover:bg-amber-400');
fs.writeFileSync(path.join(screensDir, 'ScreenM_GenerateReport.tsx'), screenM, 'utf8');


// --- Update Screen B (Case Create) ---
let screenB = fs.readFileSync(path.join(screensDir, 'ScreenB_CaseCreate.tsx'), 'utf8');
screenB = screenB.replace(/> SAVE DRAFT<\/button>/, ' onClick={() => alert("Draft saved successfully!")}> SAVE DRAFT</button>');
screenB = screenB.replace(/> VALIDATE<\/button>/, ' onClick={() => alert("Validation passed. No issues found.")}> VALIDATE</button>');
fs.writeFileSync(path.join(screensDir, 'ScreenB_CaseCreate.tsx'), screenB, 'utf8');

console.log("Updated functionality");
