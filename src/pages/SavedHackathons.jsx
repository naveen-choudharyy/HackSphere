import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Trash2, ArrowLeft, Compass } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import HackathonCard from '../components/HackathonCard';
import EmptyState from '../components/EmptyState';
import Button from '../components/Button';
import { hackathons } from '../data/hackathons';

export default function SavedHackathons({ bookmarks, toggleBookmark, clearAllBookmarks }) {
  const savedList = useMemo(() => {
    return hackathons.filter((h) => bookmarks.includes(h.id));
  }, [bookmarks]);

  return (
    <>
      <SEOHead
        title="Saved Hackathons | HackSphere"
        description="View and manage your bookmarked campus hackathons saved locally in your browser."
        canonicalUrl="/saved"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Saved Hackathons' }]} />
        </div>
      </div>

      <main className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
                <Bookmark className="w-3.5 h-3.5" fill="currentColor" />
                <span>Local Bookmarks</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Your Saved Hackathons
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Hackathons you have saved for quick access. Saved securely in your browser's local storage without requiring accounts.
              </p>
            </div>

            {savedList.length > 0 && (
              <button
                type="button"
                onClick={clearAllBookmarks}
                className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-800 font-medium px-3 py-1.5 rounded border border-red-200 hover:bg-red-50 transition-colors self-start sm:self-auto"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All Saved</span>
              </button>
            )}
          </div>

          {savedList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedList.map((hackathon) => (
                <HackathonCard
                  key={hackathon.id}
                  hackathon={hackathon}
                  isBookmarked={true}
                  onToggleBookmark={toggleBookmark}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Bookmark}
              title="No saved hackathons yet"
              description="Click the bookmark icon on any hackathon card to save it here for quick access later."
              actionLabel="Explore Hackathons"
              actionTo="/hackathons"
            />
          )}
        </div>
      </main>
    </>
  );
}
