import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  Clock,
  HelpCircle
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import { hackathons } from '../data/hackathons';

export default function Registration() {
  const activeEvents = hackathons.filter(
    (h) => h.status === 'Registration Open' || h.status === 'Upcoming'
  );

  return (
    <>
      <SEOHead
        title="Bennett Hackathon Registration 2026 | How to Apply"
        description="How to register for the Bennett hackathon: step-by-step application process, team requirements, official registration links, and deadline information."
        canonicalUrl="/registration"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Registration' }]} />
        </div>
      </div>

      <main className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
              <span>Official Application Guide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bennett Hackathon Registration
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Step-by-step guide for Bennett University students applying for campus innovation sprints. All registrations are completed directly through official university or platform links.
            </p>
          </div>

          {/* Verification Warning Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900 space-y-1">
              <strong className="font-semibold block">Authentic Registration Policy</strong>
              <p>
                HackSphere does not host proxy registration forms or capture applicant credentials. We route you directly to authentic organizer portals (such as Unstop, Devfolio, or official Bennett circular links). If an event registration link is not yet finalized, it is clearly noted below.
              </p>
            </div>
          </div>

          {/* 4-Step Registration Process */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              General Registration Process (4 Steps)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 space-y-2">
                <span className="w-7 h-7 rounded bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center">
                  1
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Form Your Team & Review Criteria
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verify team size requirements (typically 2–3 for departmental events, 6 for SIH). Ensure every teammate has a valid university ID and agrees to the physical attendance rules.
                </p>
                <Link to="/eligibility" className="text-xs text-blue-600 font-medium inline-flex items-center gap-1">
                  View Eligibility Rules <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 space-y-2">
                <span className="w-7 h-7 rounded bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center">
                  2
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Prepare Team Details & Tech Stack
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Gather team member enrollment numbers, university email IDs, GitHub usernames, and select your preferred track domain or problem statement.
                </p>
                <Link to="/tracks" className="text-xs text-blue-600 font-medium inline-flex items-center gap-1">
                  Explore Problem Tracks <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 space-y-2">
                <span className="w-7 h-7 rounded bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center">
                  3
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Submit via Official Organizer Portal
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The team leader completes the official form on the verified platform before the announced cut-off deadline. Keep your registration confirmation email safe.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 space-y-2">
                <span className="w-7 h-7 rounded bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center">
                  4
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Attend On-Campus Check-in
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Arrive at Bennett University campus labs with your team and laptops on hackathon day for badge collection and environment setup.
                </p>
                <Link to="/venue" className="text-xs text-blue-600 font-medium inline-flex items-center gap-1">
                  Venue & Lab Directions <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </section>

          {/* Current Hackathons & Their Registration Status */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Campus Events & Official Registration Links
            </h2>
            <div className="space-y-3">
              {hackathons.map((h) => (
                <div
                  key={h.id}
                  className="p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900">
                        {h.name}
                      </h3>
                      <StatusBadge status={h.status} />
                    </div>
                    <p className="text-xs text-slate-500">
                      Organiser: {h.organiser} • Deadline: {h.deadline || 'To be announced'}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <Link
                      to={`/hackathons/${h.slug}`}
                      className="text-xs px-3 py-1.5 rounded border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      View Details
                    </Link>

                    {h.registrationUrl ? (
                      <Button
                        href={h.registrationUrl}
                        variant="primary"
                        size="sm"
                      >
                        <span>Official Link</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Button>
                    ) : (
                      <span className="text-xs text-slate-600 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded">
                        Link will be announced
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ link banner */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Have questions about registration?</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Read answers regarding team registration fees, cross-branch eligibility, and certificates.
              </p>
            </div>
            <Button to="/faq" variant="outline" size="sm" className="shrink-0">
              <HelpCircle className="w-4 h-4 mr-1.5" />
              <span>Read Registration FAQ</span>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
