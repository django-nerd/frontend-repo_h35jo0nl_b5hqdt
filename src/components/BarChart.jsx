import React from 'react';

// Simple accessible bar chart using divs (no external libs)
export default function BarChart({ title = 'Chart', data = [] }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 text-sm font-medium text-gray-900">{title}</div>
      <div className="space-y-3">
        {data.map((d) => (
          <div key={d.label} className="grid grid-cols-5 items-center gap-3">
            <div className="col-span-1 text-sm text-gray-700">{d.label}</div>
            <div className="col-span-4">
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-sky-500 transition-all"
                  style={{ width: `${(d.value / max) * 100}%` }}
                />
              </div>
              <div className="mt-1 text-xs text-gray-500">{d.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
