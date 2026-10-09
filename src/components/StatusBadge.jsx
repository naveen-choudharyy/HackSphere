import React from 'react';

export default function StatusBadge({ status, className = '' }) {
  const getBadgeStyle = () => {
    switch (status) {
      case 'Registration Open':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Upcoming':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Registration Closed':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Completed':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getDotStyle = () => {
    switch (status) {
      case 'Registration Open':
        return 'bg-emerald-500';
      case 'Upcoming':
        return 'bg-blue-500';
      case 'Registration Closed':
        return 'bg-amber-500';
      case 'Completed':
        return 'bg-slate-400';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getBadgeStyle()} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${getDotStyle()}`} aria-hidden="true" />
      {status || 'Unknown'}
    </span>
  );
}
