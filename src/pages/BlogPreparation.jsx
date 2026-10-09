import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckSquare, Laptop, BatteryCharging, ArrowRight, Layers } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';

export default function BlogPreparation() {
  return (
    <>
      <SEOHead
        title="How to Prepare for a Hackathon | College Checklist"
        description="Comprehensive checklist on how to prepare for a campus hackathon at Bennett University: hardware essentials, environment setup, boilerplates, and pitching tips."
        canonicalUrl="/blog/how-to-prepare-for-a-hackathon"
        ogType="article"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Guides', to: '/about' },
              { label: 'How to Prepare for a Hackathon' }
            ]}
          />
        </div>
      </div>

      <main className="py-10 bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header */}
          <header className="space-y-3 border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              <CheckSquare className="w-3.5 h-3.5" />
              <span>Preparation Checklist</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How to Prepare for a Hackathon: The Complete Checklist
            </h1>
            <p className="text-sm text-slate-500">
              Practical checklist for participating in offline & 24-hour campus hackathons at Bennett University.
            </p>
          </header>

          {/* Section 1: 48 Hours Before */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Laptop className="w-5 h-5 text-blue-600" />
              1. Technical Preparation (48 Hours Before)
            </h2>
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <input type="checkbox" readOnly checked className="mt-1 rounded text-blue-600 pointer-events-none" />
                <span><strong>Pre-install Dev Tools:</strong> Install Node.js, Python, Git, Docker, and IDE extensions in advance so you don't exhaust venue bandwidth during opening hours.</span>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" readOnly checked className="mt-1 rounded text-blue-600 pointer-events-none" />
                <span><strong>Prepare Starter Templates:</strong> Configure bare-bones project boilerplates (e.g. Vite + React + Tailwind or FastAPI boilerplate) to hit the ground running.</span>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" readOnly checked className="mt-1 rounded text-blue-600 pointer-events-none" />
                <span><strong>Verify Accounts & APIs:</strong> Ensure your GitHub, Vercel, Supabase, or cloud developer credentials are functioning and logged in.</span>
              </div>
            </div>
          </section>

          {/* Section 2: What to Pack */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <BatteryCharging className="w-5 h-5 text-blue-600" />
              2. What to Bring to an Offline Campus Hackathon
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-4 rounded-lg border border-slate-200 bg-white space-y-1">
                <strong className="text-slate-900 block">Mandatory Hardware</strong>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Laptop & reliable charger</li>
                  <li>3-pin power extension strip</li>
                  <li>Wired or wireless mouse</li>
                  <li>Phone charger & power bank</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 bg-white space-y-1">
                <strong className="text-slate-900 block">Personal Essentials</strong>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Physical Bennett University Student ID</li>
                  <li>Refillable water bottle</li>
                  <li>Light sweater / jacket (labs get chilly)</li>
                  <li>Basic personal medication if needed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Time Management */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Time Allocation Across a 24-Hour Hackathon
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Most teams fail because they spend 12 hours arguing about ideas and run out of time for debugging. Follow this recommended time split:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <div className="text-lg font-bold text-slate-900">2 Hours</div>
                <div className="text-slate-500 font-medium">Idea & Architecture</div>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <div className="text-lg font-bold text-slate-900">14 Hours</div>
                <div className="text-slate-500 font-medium">Core Development</div>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <div className="text-lg font-bold text-slate-900">4 Hours</div>
                <div className="text-slate-500 font-medium">Testing & Deployment</div>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <div className="text-lg font-bold text-slate-900">4 Hours</div>
                <div className="text-slate-500 font-medium">Pitch & Demo Polish</div>
              </div>
            </div>
          </section>

          {/* Bottom Actions */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Ready to put this into practice?</h3>
              <p className="text-xs text-slate-600">Check event schedules and registration deadlines.</p>
            </div>
            <div className="flex gap-2">
              <Button to="/schedule" variant="outline" size="sm">
                View Schedule
              </Button>
              <Button to="/hackathons" variant="primary" size="sm">
                Browse Hackathons
              </Button>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
