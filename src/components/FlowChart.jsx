import React from 'react';

// Simple horizontal flow of nodes with arrows between consecutive nodes
export default function FlowChart({ nodes = [] }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-between gap-4">
        {nodes.map((n, idx) => (
          <React.Fragment key={idx}>
            <div className="min-w-[160px] rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
              <div className="text-sm font-medium text-gray-900">{n.title}</div>
              {n.subtitle && (
                <div className="mt-1 text-xs text-gray-500">{n.subtitle}</div>
              )}
            </div>
            {idx < nodes.length - 1 && (
              <svg aria-hidden="true" className="h-6 w-6 shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
