import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ExternalLink,
  Share2,
  Copy,
  Check,
  Bookmark,
  ArrowLeft,
  AlertCircle,
  Award,
  Layers,
  FileText
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import StatusBadge from '../components/StatusBadge';
import Button from '../components/Button';
import { getHackathonBySlug } from '../data/hackathons';
import { getRemainingDays } from '../utils/dateUtils';

export default function HackathonDetails({ bookmarks, toggleBookmark }) {
  const { slug } = useParams();
  const hackathon = getHackathonBySlug(slug);

  const [copied, setCopied] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(null);

  if (!hackathon) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <SEOHead
          title="Hackathon Not Found | HackSphere"
          description="The requested hackathon could not be found."
        />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Hackathon Not Found</h1>
        <p className="text-sm text-slate-600 mb-6">
          The hackathon you are looking for does not exist or may have been removed.
        </p>
        <Button to="/hackathons" variant="primary">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Hackathons
        </Button>
      </div>
    );
  }

  const isSaved = bookmarks.includes(hackathon.id);
  const deadlineInfo = getRemainingDays(hackathon.deadlineISO);

  // Copy event link handler
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setShareFeedback('Could not copy link to clipboard.');
      setTimeout(() => setShareFeedback(null), 3000);
    }
  };

  // Web Share API handler with fallback
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${hackathon.name} | HackSphere`,
          text: `Check out ${hackathon.name} at Bennett University, Greater Noida:`,
          url: window.location.href
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          handleCopyLink();
        }
      }
    } else {
      handleCopyLink();
    }
  };

  // Structured Data (Event Schema)
  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": hackathon.name,
    "description": hackathon.tagline || hackathon.eligibilitySummary,
    "startDate": hackathon.startDateISO || undefined,
    "endDate": hackathon.endDateISO || undefined,
    "eventStatus": hackathon.status === 'Completed'
      ? "https://schema.org/EventCompleted"
      : "https://schema.org/EventScheduled",
    "eventAttendanceMode": hackathon.format === 'Online'
      ? "https://schema.org/OnlineEventAttendanceMode"
      : (hackathon.format === 'Hybrid' ? "https://schema.org/MixedEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode"),
    "location": {
      "@type": "Place",
      "name": "Bennett University",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot Nos 8-11, TechZone II",
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201310",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": hackathon.organiser
    },
    "offers": {
      "@type": "Offer",
      "url": hackathon.registrationUrl || `https://hacksphere.edu/hackathons/${hackathon.slug}`,
      "price": "0",
      "priceCurrency": "INR",
      "availability": hackathon.status === 'Registration Open' ? "https://schema.org/InStock" : "https://schema.org/SoldOut"
    }
  };

  return (
    <>
      <SEOHead
        title={`${hackathon.name} | Bennett Hackathon Guide`}
        description={`Details for ${hackathon.name} at Bennett University, Greater Noida. Review dates, rules, eligibility criteria, schedule, and registration links.`}
        canonicalUrl={`/hackathons/${hackathon.slug}`}
        structuredData={eventStructuredData}
        ogType="article"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Hackathons', to: '/hackathons' },
              { label: hackathon.name }
            ]}
          />
        </div>
      </div>

      <main className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-6">
            <Link
              to="/hackathons"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to directory</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Header Info */}
              <div className="border-b border-slate-200 pb-6">
                <div className="flex items-center gap-2 mb-3">
                  <StatusBadge status={hackathon.status} />
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                    {hackathon.format}
                  </span>
                  {deadlineInfo && !deadlineInfo.isExpired && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                      <Clock className="w-3.5 h-3.5" />
                      {deadlineInfo.label}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {hackathon.name}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
                  Organised by: {hackathon.organiser}
                </p>

                {hackathon.tagline && (
                  <p className="text-base text-slate-700 mt-3 leading-relaxed">
                    {hackathon.tagline}
                  </p>
                )}
              </div>

              {/* Event Overview & Key Parameters */}
              <section className="bg-slate-50 rounded-xl border border-slate-200 p-5 sm:p-6 space-y-4">
                <h2 className="text-lg font-bold text-slate-900">Event Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 block text-xs">Event Date</span>
                    <span className="font-semibold text-slate-900">{hackathon.eventDate || 'To be announced'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Registration Deadline</span>
                    <span className="font-semibold text-slate-900">{hackathon.deadline || 'To be announced'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Team Size</span>
                    <span className="font-semibold text-slate-900">{hackathon.teamSize || 'To be announced'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Registration Fee</span>
                    <span className="font-semibold text-slate-900">{hackathon.registrationFee || 'Free'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Prize Pool / Recognition</span>
                    <span className="font-semibold text-slate-900">{hackathon.prizePool || 'To be announced'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Location / Venue</span>
                    <span className="font-semibold text-slate-900">{hackathon.location}</span>
                  </div>
                </div>

                {hackathon.venueDetails && (
                  <div className="pt-3 border-t border-slate-200 text-xs text-slate-600">
                    <strong>Detailed Campus Venue:</strong> {hackathon.venueDetails}
                  </div>
                )}
              </section>

              {/* Eligibility Criteria */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">Eligibility Criteria</h2>
                <p className="text-sm text-slate-600">
                  {hackathon.eligibilitySummary}
                </p>
                {hackathon.eligibilityDetails && hackathon.eligibilityDetails.length > 0 && (
                  <ul className="space-y-2 text-sm text-slate-700 bg-white border border-slate-200 rounded-lg p-4">
                    {hackathon.eligibilityDetails.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Technology & Problem Tracks */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">Tracks & Problem Domains</h2>
                {hackathon.tracksDisclaimer && (
                  <p className="text-xs text-amber-800 bg-amber-50 p-2.5 rounded border border-amber-200">
                    {hackathon.tracksDisclaimer}
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {hackathon.tracks.map((t, i) => (
                    <div key={i} className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-sm font-semibold text-slate-800">{t}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Rules & Guidelines */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">Rules & Code of Conduct</h2>
                <p className="text-sm text-slate-600">
                  {hackathon.rulesSummary}
                </p>
                {hackathon.rules && hackathon.rules.length > 0 && (
                  <div className="space-y-2 bg-slate-50 border border-slate-200 rounded-lg p-4">
                    {hackathon.rules.map((rule, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="font-mono text-blue-600 font-bold text-xs">{i + 1}.</span>
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Event Schedule / Timeline */}
              {hackathon.schedule && hackathon.schedule.length > 0 && (
                <section className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900">Event Schedule</h2>
                  <div className="border border-slate-200 rounded-lg divide-y divide-slate-200 overflow-hidden">
                    {hackathon.schedule.map((item, i) => (
                      <div key={i} className="p-4 sm:flex sm:items-start sm:justify-between gap-4 bg-white">
                        <div className="sm:w-1/3 mb-1 sm:mb-0">
                          <span className="text-xs font-semibold text-blue-700 block">
                            {item.phase}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {item.time}
                          </span>
                        </div>
                        <div className="sm:w-2/3">
                          <h3 className="text-sm font-semibold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-600 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Freshness & Metadata info */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Last updated: {hackathon.lastUpdated || 'October 2026'}</span>
                <Link to="/about" className="hover:underline">
                  Information verification policy
                </Link>
              </div>
            </div>

            {/* Sidebar Actions & Utility Controls (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Registration Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4 sticky top-24">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Registration Information
                </h3>

                {hackathon.registrationUrl ? (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Official registration is active through the organizer's verified portal:
                    </p>
                    <Button
                      href={hackathon.registrationUrl}
                      variant="primary"
                      className="w-full justify-center"
                    >
                      <span>Go to Official Registration</span>
                      <ExternalLink className="w-4 h-4 ml-1.5" />
                    </Button>
                    {hackathon.registrationNotes && (
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {hackathon.registrationNotes}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>
                        Official registration link will be announced once released by the department organizing committee.
                      </span>
                    </div>
                    {hackathon.registrationNotes && (
                      <p className="text-xs text-slate-500">
                        {hackathon.registrationNotes}
                      </p>
                    )}
                  </div>
                )}

                {/* Bookmark Toggle */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => toggleBookmark(hackathon.id)}
                    className={`w-full py-2 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-2 border transition-colors ${
                      isSaved
                        ? 'border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100'
                        : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Bookmark
                      className="w-4 h-4"
                      fill={isSaved ? 'currentColor' : 'none'}
                    />
                    <span>{isSaved ? 'Saved to Bookmarks' : 'Save This Hackathon'}</span>
                  </button>
                </div>

                {/* Share and Copy Link Controls */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="py-2 px-2.5 rounded-md text-xs font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="py-2 px-2.5 rounded-md text-xs font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Share Event</span>
                  </button>
                </div>

                {shareFeedback && (
                  <p className="text-xs text-amber-700 text-center">{shareFeedback}</p>
                )}

                {/* Quick Navigation Links */}
                <div className="pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="font-semibold text-slate-900 mb-1">Related Information:</div>
                  <div>
                    • <Link to="/eligibility" className="text-blue-600 hover:underline">General Eligibility Rules</Link>
                  </div>
                  <div>
                    • <Link to="/venue" className="text-blue-600 hover:underline">Bennett Campus Directions</Link>
                  </div>
                  <div>
                    • <Link to="/faq" className="text-blue-600 hover:underline">Frequently Asked Questions</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
