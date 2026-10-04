const fs = require('fs');

let screenJ = fs.readFileSync('src/components/screens/ScreenJ_ExpectedVsObserved.tsx', 'utf8');

// The error is around line 39. Let's find exactly how the ternary is closed.
// It looks like:
// {loading ? <div ...> : <div ...>
//   { obligations.map(...) }
// </div>}
// {activeTab !== 'O1: Refund' && !loading && ...}

// Let's replace the whole loading / tab section safely
screenJ = screenJ.replace(/\{loading \? [\s\S]*?<div className=\{`grid grid-cols-2 gap-6 \$\{activeTab !== 'O1: Refund' \? 'hidden' : ''\}`\}>/, 
`      {loading ? (
        <div className='p-4 text-slate-500 animate-pulse font-bold'>Loading Legal Data from Database...</div>
      ) : (
        <div className="flex border-b border-slate-200 gap-6 text-sm font-bold">
          {obligations.map(ob => \`O\${ob.id.replace('o','')}: \${ob.description}\`).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={\`pb-3 \${activeTab === tab ? 'border-b-2 border-amber-500 text-amber-600' : 'text-slate-500 hover:text-slate-800'}\`}>{tab}</button>
          ))}
        </div>
      )}

      {activeTab !== 'O1: Refund' && !loading && <div className="p-10 text-center text-slate-500 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">The compliance analysis for {activeTab} is currently being calculated...</div>}
      <div className={\`grid grid-cols-2 gap-6 \${activeTab !== 'O1: Refund' ? 'hidden' : ''}\`}>`
);

fs.writeFileSync('src/components/screens/ScreenJ_ExpectedVsObserved.tsx', screenJ, 'utf8');
