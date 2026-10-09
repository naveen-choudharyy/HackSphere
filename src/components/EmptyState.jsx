import React from 'react';
import { SearchX } from 'lucide-react';
import Button from './Button';

export default function EmptyState({
  icon: Icon = SearchX,
  title = "No hackathons found",
  description = "No events match your current search or filter criteria. Try adjusting your query or resetting filters.",
  actionLabel,
  onAction,
  actionTo
}) {
  return (
    <div className="text-center py-12 px-4 rounded-xl border border-dashed border-slate-300 bg-white">
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-500">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">{description}</p>
      
      {(actionLabel && onAction) && (
        <Button variant="outline" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}

      {(actionLabel && actionTo) && (
        <Button variant="outline" size="sm" to={actionTo}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
