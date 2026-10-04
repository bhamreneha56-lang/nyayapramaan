const fs = require('fs');

let content = fs.readFileSync('src/components/AskNyayaModal.tsx', 'utf8');

const oldChips = `
            <button
              onClick={() => handleExecuteQuery('Has the respondent violated the order?')}
              className="text-[10px] px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm"
            >
              Did respondent violate the order?
            </button>
            <button
              onClick={() => handleExecuteQuery('What evidence is missing?')}
              className="text-[10px] px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm"
            >
              What evidence is missing?
            </button>
`;

const newChips = `
            <button
              onClick={() => handleExecuteQuery('Has the respondent violated the order?')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              Did respondent violate the order?
            </button>
            <button
              onClick={() => handleExecuteQuery('What evidence is missing?')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              What evidence is missing?
            </button>
            <button
              onClick={() => handleExecuteQuery('Which law version applies to this case?')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              Which law version applies?
            </button>
            <button
              onClick={() => handleExecuteQuery('Explain the contradiction between the Affidavit and Bank Record.')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              Explain contradictions
            </button>
            <button
              onClick={() => handleExecuteQuery('What is the deadline for compliance?')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              Check deadline
            </button>
            <button
              onClick={() => handleExecuteQuery('Summarize all the legal issues found.')}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-slate-700 font-medium transition-colors shadow-sm whitespace-nowrap"
            >
              Summarize legal issues
            </button>
`;

content = content.replace(oldChips, newChips);

// Also add an overflow-x-auto to the container so they scroll horizontally
content = content.replace(
  '<div className="flex flex-wrap gap-1.5 mb-3">',
  '<div className="flex overflow-x-auto gap-1.5 mb-3 pb-1 hide-scrollbar" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>'
);

fs.writeFileSync('src/components/AskNyayaModal.tsx', content, 'utf8');
console.log("FAQs added");
