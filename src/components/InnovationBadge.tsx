// Subtle Innovation Tag Component

import React from 'react';

export const InnovationBadge: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-200">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
      <span>Innovation: {label}</span>
    </span>
  );
};
