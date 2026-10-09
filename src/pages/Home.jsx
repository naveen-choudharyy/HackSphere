import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  Search,
  CheckCircle2,
  Calendar,
  FileText,
  HelpCircle,
  MapPin,
  Layers,
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HackathonCard from '../components/HackathonCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import EmptyState from '../components/EmptyState';
import Button from '../components/Button';
import { hackathons, getAllTracks } from '../data/hackathons';
import { filterHackathons } from '../utils/filterHackathons';
import { sortHackathonsByDate } from '../utils/dateUtils';

export default function Home({ bookmarks, toggleBookmark }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [format, setFormat] = useState('All');
  const [track, setTrack] = useState('All');
  const [status, setStatus] = useState('All');

  const allTracks = useMemo(() => getAllTracks(), []);

  // Filter and sort hackathons
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

  // Structured Data for Home (Event & Organization Schema)
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HackSphere",
    "url": "https://hacksphere.edu",
    "description": "Comprehensive hackathon directory for Bennett University students in Greater Noida.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hacksphere.edu/hackathons?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEOHead
        title="Bennett University Hackathon 2026 | HackSphere"
        description="Everything about the Bennett University hackathon in Greater Noida: dates, registration, eligibility, schedule, rules, and problem tracks in one place."
        canonicalUrl="/"
        structuredData={homeStructuredData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                <span>Bennett University • Greater Noida</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Bennett University Hackathon
              </h1>

              <p className="text-lg sm:text-xl font-medium text-blue-700">
                Find your next hackathon.
              </p>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                HackSphere organizes campus hackathon information for Bennett University students in one reliable place. Discover verified registration links, eligibility criteria, round schedules, and problem statements without searching through scattered social media posts.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button to="/hackathons" size="lg" variant="primary">
                  <Compass className="w-4 h-4" aria-hidden="true" />
                  <span>Explore Hackathons</span>
                </Button>
                <Button href="#how-it-works" size="lg" variant="outline">
                  <span>How It Works</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>

              {/* Quick stats or notice */}
              <div className="pt-3 flex items-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Verified Campus Events
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Authentic Registration Links
                </span>
              </div>
            </div>

            {/* Static Clean Campus Technology Visual */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-600">bennett.edu.in/hackathons</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-slate-50 rounded border border-slate-100 text-slate-700">
                    <div className="text-[11px] font-semibold text-blue-700 mb-1">
                      Campus Hackathon Hub
                    </div>
                    <p className="text-xs text-slate-600 font-sans">
                      Single crawlable portal mapping high-intent queries: registration, eligibility, schedule, rules & tracks.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center font-sans">
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                      <div className="text-base font-bold text-slate-900">{hackathons.length}</div>
                      <div className="text-[11px] text-slate-500">Documented Events</div>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                      <div className="text-base font-bold text-blue-700">100%</div>
                      <div className="text-[11px] text-slate-500">Verified Sources</div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-blue-50/60 rounded border border-blue-100 text-[11px] text-blue-900 font-sans">
                    <strong>Notice:</strong> For unconfirmed dates or guidelines, official portals are linked directly. No guessed dates.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery & Search Section */}
      <section className="py-12 bg-white" id="discover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Discover Hackathons
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Explore upcoming, ongoing, and past hackathons at Bennett University. Filter by format, domain track, or status.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />
          </div>

          {/* Filter Panel */}
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

          {/* Event Results Count */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
            <span>
              Showing <strong>{filteredEvents.length}</strong> {filteredEvents.length === 1 ? 'hackathon' : 'hackathons'}
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-blue-600 hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Event Cards Grid */}
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
              title="No hackathons match your search"
              description="Try adjusting your keywords, selecting a different track, or clearing your active filters."
              actionLabel="Reset All Filters"
              onAction={resetFilters}
            />
          )}
        </div>
      </section>

      {/* How HackSphere Works Section */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              How HackSphere Works
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Three simple steps to go from searching to competing in your next campus hackathon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base mb-4">
                1
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Explore Available Hackathons
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Browse all Bennett University engineering hackathons, club sprints, and institutional SIH screenings in one unified catalog.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base mb-4">
                2
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Review Rules & Schedule
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Check confirmed batch eligibility, team size requirements, problem tracks, and round schedules before committing your team.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base mb-4">
                3
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Follow Official Registration Links
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Apply directly through verified organizer links (Unstop, Devfolio, or university portals). We never host proxy forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Information Hub Links */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Essential Event Information
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Direct access to dedicated pages answering common student questions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link
              to="/registration"
              className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group flex flex-col items-center text-center"
            >
              <FileText className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-slate-900">Registration</span>
              <span className="text-[11px] text-slate-500 mt-0.5">Steps & Links</span>
            </Link>

            <Link
              to="/eligibility"
              className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group flex flex-col items-center text-center"
            >
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-slate-900">Eligibility</span>
              <span className="text-[11px] text-slate-500 mt-0.5">Who Can Join</span>
            </Link>

            <Link
              to="/schedule"
              className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group flex flex-col items-center text-center"
            >
              <Calendar className="w-6 h-6 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-slate-900">Schedule</span>
              <span className="text-[11px] text-slate-500 mt-0.5">Rounds & Dates</span>
            </Link>

            <Link
              to="/rules"
              className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group flex flex-col items-center text-center"
            >
              <BookOpen className="w-6 h-6 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-slate-900">Rules</span>
              <span className="text-[11px] text-slate-500 mt-0.5">Teams & Code</span>
            </Link>

            <Link
              to="/tracks"
              className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group flex flex-col items-center text-center"
            >
              <Layers className="w-6 h-6 text-cyan-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-slate-900">Tracks</span>
              <span className="text-[11px] text-slate-500 mt-0.5">Themes & Tech</span>
            </Link>

            <Link
              to="/faq"
              className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group flex flex-col items-center text-center"
            >
              <HelpCircle className="w-6 h-6 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-slate-900">FAQ</span>
              <span className="text-[11px] text-slate-500 mt-0.5">Common Q&A</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
