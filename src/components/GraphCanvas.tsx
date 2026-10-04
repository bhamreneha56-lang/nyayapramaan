// Unified Case + Law + Evidence Interactive Graph Canvas

import React, { useState, useMemo } from 'react';
import { useApp } from '../state/store';
import { GraphNode, GraphEdge } from '../types';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Search,
  Filter,
  Layers,
  Sparkles,
  FileText,
  X,
  AlertTriangle,
  Compass,
} from 'lucide-react';
import { InnovationBadge } from './InnovationBadge';

export const INITIAL_GRAPH_NODES: GraphNode[] = [
  { id: 'n_case', type: 'Case', label: 'Sharma v. QuickElectro', subtitle: 'CC/2025/0412', x: 80, y: 300 },
  { id: 'n_party_c', type: 'Party', label: 'Aditya Sharma', subtitle: 'Complainant', x: 260, y: 140 },
  { id: 'n_party_r', type: 'Party', label: 'QuickElectro Pvt Ltd', subtitle: 'Respondent', x: 260, y: 460 },
  { id: 'n_issue', type: 'LegalIssue', label: 'Monetary Compliance', subtitle: 'Sec 39(1)(e) CPA', x: 440, y: 300 },
  { id: 'n_act', type: 'Act', label: 'Consumer Protection Act', subtitle: 'Act 35 of 2019', x: 440, y: 120 },
  { id: 'n_sec', type: 'Section', label: 'Section 39(1)(e)', subtitle: 'Refund Power', x: 620, y: 120 },
  { id: 'n_order', type: 'CourtOrder', label: 'Order of 01-06-2025', subtitle: 'Final Relief Direction', snippetId: 'snip_ord_1', x: 620, y: 300 },
  { id: 'n_ob', type: 'Obligation', label: 'Refund ₹2,00,000', subtitle: 'Within 30 Days', x: 800, y: 300 },
  { id: 'n_dl', type: 'Deadline', label: 'Deadline: 01-07-2025', subtitle: 'Day 30 Mark', x: 800, y: 140 },
  { id: 'n_exp', type: 'ExpectedOutcome', label: 'Expected: ₹2,00,000', subtitle: '100% Remittance by 1 Jul', x: 980, y: 220 },
  { id: 'n_obs', type: 'ObservedOutcome', label: 'Observed: ₹1,25,000', subtitle: 'Credited 06-07-2025 (Day 35)', snippetId: 'snip_bnk_1', status: 'PARTIAL', x: 980, y: 380 },
  { id: 'n_ev_bank', type: 'Evidence', label: 'HDFC Bank Ledger', subtitle: 'Credit ₹1,25,000 (Rank 1)', snippetId: 'snip_bnk_1', x: 1160, y: 440 },
  { id: 'n_ev_aff', type: 'Evidence', label: 'Respondent Affidavit', subtitle: 'Claims ₹2,00,000 on 28 Jun (Rank 3)', snippetId: 'snip_aff_1', x: 1160, y: 280 },
  { id: 'n_fact_contr', type: 'Fact', label: 'Fact: ₹75,000 Gap', subtitle: 'Omission Unfulfilled', x: 980, y: 520 },
];

export const INITIAL_GRAPH_EDGES: GraphEdge[] = [
  { id: 'e1', source: 'n_case', target: 'n_party_c', label: 'party', relationType: 'alleged_by' },
  { id: 'e2', source: 'n_case', target: 'n_party_r', label: 'party', relationType: 'alleged_by' },
  { id: 'e3', source: 'n_case', target: 'n_issue', label: 'adjudicates', relationType: 'applies_to', isReasoningPath: true },
  { id: 'e4', source: 'n_issue', target: 'n_act', label: 'governed by', relationType: 'interprets', isReasoningPath: true },
  { id: 'e5', source: 'n_act', target: 'n_sec', label: 'contains', relationType: 'cites', isReasoningPath: true },
  { id: 'e6', source: 'n_sec', target: 'n_order', label: 'empowers', relationType: 'found_by_court', isReasoningPath: true },
  { id: 'e7', source: 'n_order', target: 'n_ob', label: 'establishes', relationType: 'requires', isReasoningPath: true },
  { id: 'e8', source: 'n_ob', target: 'n_dl', label: 'time-bound by', relationType: 'requires' },
  { id: 'e9', source: 'n_ob', target: 'n_exp', label: 'specifies', relationType: 'requires', isReasoningPath: true },
  { id: 'e10', source: 'n_ob', target: 'n_obs', label: 'evaluated against', relationType: 'evidenced_by', isReasoningPath: true },
  { id: 'e11', source: 'n_obs', target: 'n_ev_bank', label: 'evidenced by', relationType: 'evidenced_by', isReasoningPath: true },
  { id: 'e12', source: 'n_ev_aff', target: 'n_ev_bank', label: 'CONTRADICTS (Date & Sum)', relationType: 'contradicts' },
  { id: 'e13', source: 'n_exp', target: 'n_obs', label: 'CONTRADICTS (₹75k Shortfall)', relationType: 'contradicts' },
  { id: 'e14', source: 'n_obs', target: 'n_fact_contr', label: 'manifests gap', relationType: 'evidenced_by' },
];

const NODE_COLORS: Record<string, { bg: string; border: string; text: string; ring: string }> = {
  Case: { bg: '#172554', border: '#3b82f6', text: '#93c5fd', ring: 'rgba(59, 130, 246, 0.4)' },
  Party: { bg: '#1f2937', border: '#6b7280', text: '#e5e7eb', ring: 'rgba(107, 114, 128, 0.4)' },
  LegalIssue: { bg: '#312e81', border: '#6366f1', text: '#c7d2fe', ring: 'rgba(99, 102, 241, 0.4)' },
  Act: { bg: '#064e3b', border: '#10b981', text: '#a7f3d0', ring: 'rgba(16, 185, 129, 0.4)' },
  Section: { bg: '#065f46', border: '#34d399', text: '#d1fae5', ring: 'rgba(52, 211, 153, 0.4)' },
  CourtOrder: { bg: '#78350f', border: '#d4af37', text: '#fde68a', ring: 'rgba(212, 175, 55, 0.5)' },
  Obligation: { bg: '#451a03', border: '#f59e0b', text: '#fef3c7', ring: 'rgba(245, 158, 11, 0.5)' },
  Deadline: { bg: '#701a75', border: '#c026d3', text: '#f5d0fe', ring: 'rgba(192, 38, 211, 0.4)' },
  ExpectedOutcome: { bg: '#1e1b4b', border: '#818cf8', text: '#e0e7ff', ring: 'rgba(129, 140, 248, 0.4)' },
  ObservedOutcome: { bg: '#7f1d1d', border: '#ef4444', text: '#fecaca', ring: 'rgba(239, 68, 68, 0.5)' },
  Evidence: { bg: '#134e4a', border: '#14b8a6', text: '#99f6e4', ring: 'rgba(20, 184, 166, 0.4)' },
  Fact: { bg: '#374151', border: '#9ca3af', text: '#f3f4f6', ring: 'rgba(156, 163, 175, 0.4)' },
};

export const GraphCanvas: React.FC = () => {
  const { openSourceDrawer, highlightReasoningPath, setHighlightReasoningPath } = useApp();
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('ALL');
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

  const filteredNodes = useMemo(() => {
    return INITIAL_GRAPH_NODES.filter((n) => {
      const matchesSearch =
        n.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (n.subtitle && n.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesFilter = selectedTypeFilter === 'ALL' || n.type === selectedTypeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, selectedTypeFilter]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.node-element')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const resetView = () => {
    setZoom(0.85);
    setPan({ x: 20, y: 10 });
  };

  return (
    <div className="relative w-full h-[650px] bg-[#070b16] rounded-2xl border border-amber-200 overflow-hidden flex flex-col select-none">
      {/* Top Toolbar */}
      <div className="p-3 bg-[#0a1020] border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Unified Case + Law + Evidence Graph</span>
          </div>
          <InnovationBadge label="Cross-Entity Graph Compiler" />
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-900 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search graph nodes..."
              className="bg-white border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-black">
            <Filter className="w-3 h-3 text-amber-400" />
            <select
              value={selectedTypeFilter}
              onChange={(e) => setSelectedTypeFilter(e.target.value)}
              className="bg-transparent text-xs text-black focus:outline-none"
            >
              <option value="ALL">All Types</option>
              <option value="Case">Case</option>
              <option value="Obligation">Obligation</option>
              <option value="Evidence">Evidence</option>
              <option value="CourtOrder">Court Order</option>
              <option value="Act">Act / Statute</option>
            </select>
          </div>

          {/* Reasoning Path Toggle */}
          <button
            onClick={() => setHighlightReasoningPath(!highlightReasoningPath)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              highlightReasoningPath
                ? 'bg-amber-500 text-slate-50 border-amber-400 shadow-md shadow-amber-500/25'
                : 'bg-slate-100 hover:bg-slate-200 text-amber-300 border-amber-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reasoning Path</span>
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1">
          <button
            onClick={() => setZoom((z) => Math.min(z + 0.15, 2))}
            className="p-1 rounded text-black hover:text-slate-900 hover:bg-slate-200"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(z - 0.15, 0.4))}
            className="p-1 rounded text-black hover:text-slate-900 hover:bg-slate-200"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={resetView}
            className="p-1 rounded text-black hover:text-slate-900 hover:bg-slate-200"
            title="Reset View"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive SVG Canvas */}
      <div
        className="flex-1 relative cursor-grab active:cursor-grabbing overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: '0 0',
          }}
        >
          {/* Edges */}
          {INITIAL_GRAPH_EDGES.map((edge) => {
            const source = INITIAL_GRAPH_NODES.find((n) => n.id === edge.source);
            const target = INITIAL_GRAPH_NODES.find((n) => n.id === edge.target);
            if (!source || !target) return null;

            const isContradiction = edge.relationType === 'contradicts';
            const isPath = highlightReasoningPath && edge.isReasoningPath;

            return (
              <g key={edge.id}>
                <line
                  x1={source.x + 80}
                  y1={source.y + 30}
                  x2={target.x + 80}
                  y2={target.y + 30}
                  stroke={
                    isContradiction
                      ? '#ef4444'
                      : isPath
                      ? '#d4af37'
                      : 'rgba(255, 255, 255, 0.22)'
                  }
                  strokeWidth={isContradiction ? 3 : isPath ? 3.5 : 1.5}
                  strokeDasharray={isContradiction ? '6,4' : isPath ? '8,4' : undefined}
                  className={isContradiction ? 'animate-pulse' : undefined}
                />
                {/* Edge Label */}
                <text
                  x={(source.x + target.x) / 2 + 80}
                  y={(source.y + target.y) / 2 + 25}
                  fill={isContradiction ? '#f87171' : isPath ? '#fef08a' : '#94a3b8'}
                  fontSize="10"
                  textAnchor="middle"
                  fontFamily="monospace"
                  className="font-bold"
                >
                  {edge.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Nodes Layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: '0 0',
          }}
        >
          {filteredNodes.map((node) => {
            const colors = NODE_COLORS[node.type] || NODE_COLORS.Case;
            const isSelected = selectedNode?.id === node.id;

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                style={{
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                  backgroundColor: colors.bg,
                  borderColor: isSelected ? '#000fff' : colors.border,
                  boxShadow: `0 4px 20px ${colors.ring}`,
                }}
                className={`node-element absolute w-48 p-3 rounded-xl border pointer-events-auto cursor-pointer transition-all duration-200 hover:scale-105 ${
                  isSelected ? 'ring-2 ring-white scale-105 z-20' : 'z-10'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="text-[9px] uppercase tracking-wider font-bold"
                    style={{ color: colors.text }}
                  >
                    {node.type}
                  </span>
                  {node.snippetId && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  )}
                </div>
                <div className="font-semibold text-slate-900 text-xs leading-snug line-clamp-1">
                  {node.label}
                </div>
                {node.subtitle && (
                  <div className="text-[10px] text-black/80 mt-0.5 line-clamp-1">
                    {node.subtitle}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Node Details Drawer */}
        {selectedNode && (
          <div className="absolute top-4 right-4 w-72 bg-white/95 border border-amber-300 rounded-xl p-4 shadow-2xl backdrop-blur-md z-30 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
              <span className="text-[10px] uppercase font-bold text-amber-400">
                Node Inspection: {selectedNode.type}
              </span>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-slate-900 hover:text-slate-900"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <h4 className="font-bold text-slate-900 text-sm">{selectedNode.label}</h4>
            {selectedNode.subtitle && (
              <p className="text-xs text-black mt-1">{selectedNode.subtitle}</p>
            )}

            {selectedNode.snippetId && (
              <div className="mt-3 pt-3 border-t border-slate-200">
                <button
                  onClick={() => openSourceDrawer(selectedNode.snippetId!)}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-200 rounded-lg text-xs font-semibold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Source Document</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-3 left-3 bg-[#0a1020]/90 border border-slate-200 rounded-xl p-3 text-[11px] backdrop-blur-md flex flex-wrap items-center gap-3 z-20">
          <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
            Graph Legend:
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="text-black">Case/Issue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="text-black">Order/Obligation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span className="text-black">Evidence</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-rose-500"></span>
            <span className="text-rose-400 font-semibold">Contradiction</span>
          </div>
        </div>
      </div>
    </div>
  );
};
