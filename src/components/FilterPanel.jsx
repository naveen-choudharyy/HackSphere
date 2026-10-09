import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

export default function FilterPanel({
  format,
  setFormat,
  track,
  setTrack,
  status,
  setStatus,
  allTracks = [],
  onReset,
  hasActiveFilters
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm mb-6">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
          <Filter className="w-4 h-4 text-blue-600" aria-hidden="true" />
          <span>Filter Hackathons</span>
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Format Filter */}
        <div>
          <label htmlFor="filter-format" className="block text-xs font-medium text-slate-700 mb-1">
            Format
          </label>
          <select
            id="filter-format"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-md py-1.5 px-2.5 text-slate-800 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          >
            <option value="All">All Formats</option>
            <option value="Offline">Offline (Campus)</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Online">Online / Virtual</option>
          </select>
        </div>

        {/* Track Filter */}
        <div>
          <label htmlFor="filter-track" className="block text-xs font-medium text-slate-700 mb-1">
            Technology Track
          </label>
          <select
            id="filter-track"
            value={track}
            onChange={(e) => setTrack(e.target.value)}
            className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-md py-1.5 px-2.5 text-slate-800 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          >
            <option value="All">All Tracks</option>
            {allTracks.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label htmlFor="filter-status" className="block text-xs font-medium text-slate-700 mb-1">
            Event Status
          </label>
          <select
            id="filter-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-md py-1.5 px-2.5 text-slate-800 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          >
            <option value="All">All Events</option>
            <option value="Upcoming">Upcoming & Open</option>
            <option value="Completed">Completed / Archived</option>
          </select>
        </div>
      </div>
    </div>
  );
}
