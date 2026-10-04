const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'components', 'screens');

let screenE = fs.readFileSync(path.join(screensDir, 'ScreenE_IssueMatrix.tsx'), 'utf8');
screenE = screenE.replace("import React from 'react';", "import React, { useState } from 'react';");
screenE = screenE.replace("import { FileSpreadsheet, Plus, AlertTriangle, CheckCircle, ChevronRight, Link2 } from 'lucide-react';", "import { FileSpreadsheet, Plus, AlertTriangle, CheckCircle, ChevronRight, Link2, ShieldCheck, XCircle } from 'lucide-react';");
screenE = screenE.replace("const { setCurrentScreen } = useApp();", "const { setCurrentScreen } = useApp();\n  const [activeTab, setActiveTab] = useState('Lawyer Issue Matrix');");

screenE = screenE.replace(
  /<div className="flex justify-between items-center">/,
  `<div className="flex border-b border-slate-200 gap-6 text-base font-bold mb-6">
        {['Lawyer Issue Matrix', 'Claim Coverage'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={\`pb-3 \${activeTab === tab ? 'border-b-2 border-amber-500 text-amber-600' : 'text-slate-500 hover:text-slate-800'}\`}>{tab}</button>
        ))}
      </div>
      
      <div className="flex justify-between items-center mb-4">`
);

const claimCoverageHtml = `
      {activeTab === 'Claim Coverage' && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-blue-50 border-b border-blue-200 p-3 w-full flex justify-between items-center">
            <span className="font-bold text-blue-900 text-sm uppercase tracking-wider flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> NYAYATRACE DIFFERENTIATOR</span>
            <span className="text-xs text-blue-700">Claim-Level Evidence Coverage Matrix</span>
          </div>
          
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase">
              <tr>
                <th className="p-4 w-1/5">CLAIM</th>
                <th className="p-4 w-1/6">SOURCE</th>
                <th className="p-4 w-1/6">SUPPORTING EVIDENCE</th>
                <th className="p-4 w-1/6">CONTRADICTING EVIDENCE</th>
                <th className="p-4 w-1/4">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold text-slate-900">"Full payment of ?2,00,000 made"</td>
                <td className="p-4 text-slate-700"><span className="bg-slate-200 px-2 py-1 rounded text-xs font-bold">Affidavit</span></td>
                <td className="p-4 text-slate-500 italic">None</td>
                <td className="p-4 text-slate-700"><span className="text-red-600 font-bold">Bank Statement (?1.25L)</span></td>
                <td className="p-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded font-bold text-xs flex items-center w-fit gap-1"><XCircle className="w-3 h-3"/> CONTRADICTED</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold text-slate-900">"?1,25,000 transferred"</td>
                <td className="p-4 text-slate-700"><span className="bg-slate-200 px-2 py-1 rounded text-xs font-bold">Bank</span></td>
                <td className="p-4 text-slate-700"><span className="text-emerald-600 font-bold">Bank Record</span></td>
                <td className="p-4 text-slate-500 italic">None</td>
                <td className="p-4"><span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded font-bold text-xs flex items-center w-fit gap-1"><CheckCircle className="w-3 h-3"/> SUPPORTED</span></td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold text-slate-900">"Payment made 8 June"</td>
                <td className="p-4 text-slate-700"><span className="bg-slate-200 px-2 py-1 rounded text-xs font-bold">Affidavit</span></td>
                <td className="p-4 text-slate-500 italic">None</td>
                <td className="p-4 text-slate-700"><span className="text-amber-600 font-bold">Bank says 9 June</span></td>
                <td className="p-4"><span className="bg-amber-100 text-amber-800 px-3 py-1 rounded font-bold text-xs flex items-center w-fit gap-1"><AlertTriangle className="w-3 h-3"/> POSSIBLE CONTRADICTION</span></td>
              </tr>
            </tbody>
          </table>
          
          <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
             <span className="font-bold text-amber-400">CASE CLAIM COVERAGE (3 Total)</span>
             <div className="flex gap-4 text-xs font-bold">
                <span className="text-emerald-400">1 SUPPORTED</span>
                <span className="text-amber-400">1 POSSIBLE</span>
                <span className="text-red-400">1 CONTRADICTED</span>
             </div>
          </div>
        </div>
      )}
`;

screenE = screenE.replace(
  /<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">/,
  `{activeTab === 'Lawyer Issue Matrix' && (
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">`
);

screenE = screenE.replace(
  /<\/div>\s*<div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md">/,
  `</div>\n      )}\n\n      ${claimCoverageHtml}\n\n      {activeTab === 'Lawyer Issue Matrix' && (\n      <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md">`
);

screenE = screenE.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*\);\s*};\s*$/,
  '</div>\n      )}\n    </div>\n  );\n};\n'
);

fs.writeFileSync(path.join(screensDir, 'ScreenE_IssueMatrix.tsx'), screenE, 'utf8');

console.log('Updated Screen E with Claim Coverage.');
