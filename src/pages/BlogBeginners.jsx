import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, ArrowRight, Lightbulb, Users, Code, Calendar } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';

export default function BlogBeginners() {
  return (
    <>
      <SEOHead
        title="Hackathon for Beginners: College Student Guide | HackSphere"
        description="A practical, straightforward guide for first-year Bennett University students attending their first campus hackathon. Learn what to expect, team formation, and tips."
        canonicalUrl="/blog/hackathon-for-beginners"
        ogType="article"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Guides', to: '/about' },
              { label: 'Hackathon for Beginners' }
            ]}
          />
        </div>
      </div>

      <main className="py-10 bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header */}
          <header className="space-y-3 border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Student Guide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hackathon for Beginners: The Practical College Guide
            </h1>
            <p className="text-sm text-slate-500">
              Published by HackSphere Team • Target Audience: First & Second-Year University Students
            </p>
          </header>

          {/* Intro */}
          <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p>
              Walking into your first hackathon at Bennett University can feel intimidating. You might imagine that everyone else has built dozens of production applications or won competitive coding olympiads. In reality, campus hackathons are designed first and foremost as <strong>learning accelerators</strong>.
            </p>
            <p>
              This guide walks you through the fundamentals: what actually happens during the event, how to assemble a balanced beginner team, and how to finish a working prototype within the deadline.
            </p>
          </div>

          {/* Section 1: What is a Hackathon */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. What Actually Is a Campus Hackathon?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              A hackathon is an intensive collaborative sprint—typically 18 to 24 hours offline—where small teams (2 to 4 students) brainstorm, design, and program a working software prototype that addresses a specific problem statement.
            </p>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
              <strong>Key takeaway:</strong> You do not need to build a complete multi-tier commercial software suite. Judges evaluate working prototypes that solve a specific pain point with clean logic and honest execution.
            </div>
          </section>

          {/* Section 2: Assembling Your Team */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Assembling a Balanced Beginner Team
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Avoid forming a team where everyone has the exact same skill set. A balanced 3-person team ideally features:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-4 list-disc">
              <li><strong>Frontend / UI Developer:</strong> Builds the user interface, ensures forms work, and styles clean screens (using React, HTML/CSS, or Tailwind).</li>
              <li><strong>Backend / Logic Developer:</strong> Handles API routing, database schema, data processing, or algorithmic models (Python, Node.js, SQLite).</li>
              <li><strong>Pitch & Documentation Lead:</strong> Prepares the project pitch deck, drafts the GitHub README, tests edge cases, and delivers the jury presentation.</li>
            </ul>
          </section>

          {/* Section 3: Golden Rules */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Three Golden Rules for Your First Event
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-lg border border-slate-200 bg-white">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Rule #1: Ruthlessly Scope Down
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Build one feature that works reliably end-to-end rather than five half-broken ideas. A working calculator beats an unfinished artificial intelligence empire every time.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 bg-white">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Rule #2: Set Up Git on Hour Zero
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Create a shared GitHub repository, verify everyone can push commits, and establish branch rules before writing project code. Never debug merge conflicts at 3:00 AM.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 bg-white">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Rule #3: Attend Every Mentor Checkpoint
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Faculty and visiting mentors will visit your desk. Ask for direct feedback early on your architecture. They will highlight fatal scope flaws while you still have time to pivot.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Call to Action */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Ready to find a hackathon?</h3>
              <p className="text-xs text-slate-600">Browse current student hackathons at Bennett University.</p>
            </div>
            <Button to="/hackathons" variant="primary" size="sm">
              <span>Explore Directory</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </article>
      </main>
    </>
  );
}
