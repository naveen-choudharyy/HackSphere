import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Bookmark, ArrowRight, Clock, ExternalLink } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { getRemainingDays } from '../utils/dateUtils';

export default function HackathonCard({
  hackathon,
  isBookmarked = false,
  onToggleBookmark
}) {
  const deadlineInfo = getRemainingDays(hackathon.deadlineISO);

  return (
    <article className="bg-white rounded-lg border border-slate-200 p-5 hover:border-slate-300 transition-all shadow-sm flex flex-col justify-between group">
      <div>
        {/* Top bar: Status, Deadline Pill, and Bookmark */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center flex-wrap gap-2">
            <StatusBadge status={hackathon.status} />
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
              {hackathon.format}
            </span>
            {deadlineInfo && !deadlineInfo.isExpired && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                <Clock className="w-3 h-3" aria-hidden="true" />
                {deadlineInfo.label}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => onToggleBookmark(hackathon.id)}
            aria-label={isBookmarked ? `Remove ${hackathon.name} from saved` : `Save ${hackathon.name} to bookmarks`}
            className={`p-1.5 rounded-md transition-colors ${
              isBookmarked
                ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Bookmark
              className="w-4 h-4"
              fill={isBookmarked ? 'currentColor' : 'none'}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Title & Organiser */}
        <div className="mb-3">
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
            <Link to={`/hackathons/${hackathon.slug}`} className="focus:outline-none">
              {hackathon.name}
            </Link>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            Organised by: {hackathon.organiser}
          </p>
        </div>

        {/* Tagline / Brief Summary */}
        <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2">
          {hackathon.tagline || hackathon.eligibilitySummary}
        </p>

        {/* Key Event Metadata */}
        <div className="space-y-1.5 text-xs text-slate-600 mb-4 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            <span className="truncate">
              <strong>Date:</strong> {hackathon.eventDate || 'To be announced'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            <span className="truncate">
              <strong>Location:</strong> {hackathon.location}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            <span>
              <strong>Team Size:</strong> {hackathon.teamSize || 'To be announced'}
            </span>
          </div>
        </div>

        {/* Tracks Tags */}
        {hackathon.tracks && hackathon.tracks.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {hackathon.tracks.slice(0, 3).map((track, i) => (
              <span
                key={i}
                className="inline-block px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-700 rounded"
              >
                {track}
              </span>
            ))}
            {hackathon.tracks.length > 3 && (
              <span className="inline-block px-1.5 py-0.5 text-[11px] font-medium bg-slate-50 text-slate-500 rounded">
                +{hackathon.tracks.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Card Actions */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <Link
          to={`/hackathons/${hackathon.slug}`}
          className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors"
        >
          <span>View details</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>

        {hackathon.registrationUrl ? (
          <a
            href={hackathon.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
          >
            <span>Official Link</span>
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        ) : (
          <span className="text-[11px] text-slate-600 italic">
            Link unannounced
          </span>
        )}
      </div>
    </article>
  );
}
