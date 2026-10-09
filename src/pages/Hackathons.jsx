import React, { useState, useMemo } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import HackathonCard from '../components/HackathonCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import EmptyState from '../components/EmptyState';
import { hackathons, getAllTracks } from '../data/hackathons';
import { filterHackathons } from '../utils/filterHackathons';
import { sortHackathonsByDate } from '../utils/dateUtils';

export default function Hackathons({ bookmarks, toggleBookmark }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [format, setFormat] = useState('All');
  const [track, setTrack] = useState('All');
  const [status, setStatus] = useState('All');

  const allTracks = useMemo(() => getAllTracks(), []);

  const filteredEvents = useMemo(() => {
    const list = filterHackathons(hackathons, {
      searchQuery,
      format,
      track,
      status
    });
    return sortHackathonsByDate(list);
  }, [searchQuery, format, track, status]);

  const hasActiveFilters = searchQuery !== '' || format !== 'All' || track !== 'All' || status !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setFormat('All');
    setTrack('All');
    setStatus('All');
  };

  return (
    <>
      <SEOHead
        title="Bennett University Hackathons Directory | HackSphere"
        description="Browse current, upcoming, and past student hackathons at Bennett University, Greater Noida. Filter by format, domain track, and dates."
        canonicalUrl="/hackathons"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Hackathons' }]} />
        </div>
      </div>

      <main className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Bennett University Hackathons Directory
            </h1>
            <p className="text-sm text-slate-600 mt-2">
              Explore the complete catalog of engineering sprints, institutional Smart India Hackathon selections, and student tech hackathons at Bennett University, Greater Noida.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              placeholder="Search by name, track, or format..."
            />
          </div>

          {/* Filters */}
          <FilterPanel
            format={format}
            setFormat={setFormat}
            track={track}
            setTrack={setTrack}
            status={status}
            setStatus={setStatus}
            allTracks={allTracks}
            onReset={resetFilters}
            hasActiveFilters={hasActiveFilters}
          />

          {/* Results Meta */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
            <span>
              Showing <strong>{filteredEvents.length}</strong> of <strong>{hackathons.length}</strong> total events
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Reset active filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((hackathon) => (
                <HackathonCard
                  key={hackathon.id}
                  hackathon={hackathon}
                  isBookmarked={bookmarks.includes(hackathon.id)}
                  onToggleBookmark={toggleBookmark}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No events matched your filters"
              description="No hackathons match your search query or chosen filters. Try widening your criteria."
              actionLabel="Reset All Filters"
              onAction={resetFilters}
            />
          )}
        </div>
      </main>
    </>
  );
}
