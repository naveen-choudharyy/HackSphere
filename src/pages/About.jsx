import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Search, CheckCircle, ShieldAlert, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';

export default function About() {
  return (
    <>
      <SEOHead
        title="About the Bennett Hackathon | HackSphere"
        description="What the Bennett hackathon is, who organizes it, its goals, and how HackSphere organizes fragmented campus hackathon discovery through SEO."
        canonicalUrl="/about"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About' }]} />
        </div>
      </div>

      <main className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
              <span>Campus Project Overview</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About the Bennett Hackathon
            </h1>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              HackSphere is an SEO-driven hackathon discovery project developed for Bennett University students in Greater Noida. Its mission is to transform fragmented campus event notices into a single, structured, easily searchable knowledge repository.
            </p>
          </div>

          {/* The Problem We Address */}
          <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              The Campus Discovery Problem
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every academic year, Bennett University hosts departmental engineering hackathons, student society sprints (such as Phantasia and TechSprint), and institutional Smart India Hackathon (SIH) screenings. However, critical details are often scattered across:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 pt-2">
              <li className="flex items-start gap-2 bg-white p-3 rounded border border-slate-200">
                <span className="text-red-500 font-bold">•</span>
                <span>Third-party registration forms buried behind logins.</span>
              </li>
              <li className="flex items-start gap-2 bg-white p-3 rounded border border-slate-200">
                <span className="text-red-500 font-bold">•</span>
                <span>Ephemeral social media posters with minimal text searchability.</span>
              </li>
              <li className="flex items-start gap-2 bg-white p-3 rounded border border-slate-200">
                <span className="text-red-500 font-bold">•</span>
                <span>Outdated listings that still display concluded editions from past semesters.</span>
              </li>
              <li className="flex items-start gap-2 bg-white p-3 rounded border border-slate-200">
                <span className="text-red-500 font-bold">•</span>
                <span>Inconsistent naming conventions across Unstop, Devfolio, and campus circulars.</span>
              </li>
            </ul>
          </section>

          {/* The HackSphere Solution */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              How HackSphere Solves This
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              HackSphere is organized directly around the precise questions students search for online. Rather than forcing students to sift through PDF circulars, HackSphere maps each query to a dedicated, crawlable page:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 border border-slate-200 rounded-lg bg-white">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  One Dedicated Page Per Student Query
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Individual, focused pages for Registration, Eligibility, Schedule, Rules, Tracks, Mentors, and Venue.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg bg-white">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Zero AI Fabrications
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  100% authentic, verified details. When a deadline or rule is unconfirmed, we honestly state "To be announced".
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg bg-white">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Technical Search Optimization
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Clean URLs, XML sitemaps, robots.txt, structured JSON-LD schema, and semantic HTML for search engines.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg bg-white">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Direct Organizer Handoff
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  We guide participants directly to the official registration portals (Unstop, Devfolio, Google forms) without proxy data collection.
                </p>
              </div>
            </div>
          </section>

          {/* Academic Transparency */}
          <section className="bg-blue-50/50 border border-blue-200 rounded-xl p-6 space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-700" />
              Academic Context & Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              This application was engineered as a Search Engine Optimization academic project within the Department of Computer Science & Engineering at Bennett University, Greater Noida (Academic Year 2026–27).
            </p>
            <div className="pt-2 text-xs text-slate-600 space-y-1">
              <div><strong>Specialization:</strong> Artificial Intelligence / Computer Science Engineering</div>
              <div><strong>Core Objective:</strong> Demonstrating how structured SEO and clean frontend architecture improve local campus event discovery without requiring generative AI.</div>
            </div>
          </section>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4">
            <Button to="/hackathons" variant="primary">
              <span>Browse All Campus Hackathons</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button to="/faq" variant="outline">
              <span>Read FAQ</span>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
