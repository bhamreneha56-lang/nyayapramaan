const fs = require('fs');

let screenJ = fs.readFileSync('src/components/screens/ScreenJ_ExpectedVsObserved.tsx', 'utf8');

// Add useEffect and state
screenJ = screenJ.replace(
  "import React, { useState } from 'react';",
  "import React, { useState, useEffect } from 'react';"
);

screenJ = screenJ.replace(
  "const [activeTab, setActiveTab] = useState('O1: Refund');",
  "const [activeTab, setActiveTab] = useState('O1: Refund');\n  const [obligations, setObligations] = useState([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch('http://localhost:3000/api/cases/case_1/obligations')\n      .then(res => res.json())\n      .then(data => {\n        setObligations(data);\n        if(data.length > 0) setActiveTab(`O${data[0].id.replace('o','')}: ${data[0].description}`);\n        setLoading(false);\n      });\n  }, []);"
);

// Replace static tabs with dynamic ones
screenJ = screenJ.replace(
  /\{ \['O1: Refund', 'O2: Litigation Costs'\]\.map\(tab => \(/,
  "{ obligations.map(ob => `O${ob.id.replace('o','')}: ${ob.description}`).map(tab => ("
);

// Add loading state
screenJ = screenJ.replace(
  /<div className="flex border-b border-slate-200 gap-6 text-sm font-bold">/,
  "{loading ? <div className='p-4 text-slate-500 animate-pulse font-bold'>Loading Legal Data from Database...</div> : <div className=\"flex border-b border-slate-200 gap-6 text-sm font-bold\">"
);

// Close loading state div
screenJ = screenJ.replace(
  /<\/div>\n      \{activeTab !== 'O1: Refund'/,
  "</div>}\n      {activeTab !== 'O1: Refund' && !loading"
);

fs.writeFileSync('src/components/screens/ScreenJ_ExpectedVsObserved.tsx', screenJ, 'utf8');
