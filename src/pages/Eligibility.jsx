import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Users,
  ShieldCheck,
  AlertCircle,
  Building,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import { hackathons } from '../data/hackathons';

export default function Eligibility() {
  return (
    <>
      <SEOHead
        title="Who Can Join the Bennett Hackathon | Eligibility"
        description="Eligibility criteria for the Bennett hackathon: who can participate, team size, eligible student batches, and university ID requirements."
        canonicalUrl="/eligibility"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Eligibility' }]} />
        </div>
      </div>

      <main className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
              <span>Participation Guidelines</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bennett Hackathon Eligibility
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Clear participation guidelines, eligible academic departments, student identity verification, and team composition rules for hackathons at Bennett University.
            </p>
          </div>

          {/* Core Eligibility Standards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-slate-900">Student Status</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Must be an active, regularly enrolled student pursuing an undergraduate or postgraduate degree. Valid university photo ID card is mandatory during physical check-in.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-slate-900">Team Formation</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Most departmental events require teams of 2 to 3 members. National SIH internal selection rounds require strictly 6 members with mandatory female representation.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <Building className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-slate-900">Campus Presence</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                For offline and hybrid sprints, all team members must be physically present at the Bennett University Greater Noida campus for hackathon rounds and viva presentations.
              </p>
            </div>
          </section>

          {/* Official Announcement Advisory */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-blue-900 space-y-1">
              <strong className="font-semibold block">Batch-Specific Circular Policy</strong>
              <p>
                Eligibility criteria for institutional hackathons are designated by department circulars from the School of Computer Science Engineering & Technology (SCSET). If official batch guidelines for an upcoming cycle have not yet been gazetted, students must consult the official departmental notification before final registration.
              </p>
            </div>
          </div>

          {/* Breakdown by Campus Event Type */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Eligibility Breakdown by Event Type
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-lg border border-slate-200 bg-white space-y-3">
                <h3 className="text-base font-bold text-slate-900">
                  1. Annual Bennett University Engineering Hackathon
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The flagship departmental event conducted by the School of Engineering.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pl-4 list-disc">
                  <li><strong>Eligible Batches:</strong> Enrolled B.Tech students (Computer Science & Engineering, Electronics & Communication Engineering, and allied branches).</li>
                  <li><strong>Team Size:</strong> 2 to 3 members per team.</li>
                  <li><strong>Verification:</strong> Institutional email and university registration numbers required.</li>
                </ul>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 bg-white space-y-3">
                <h3 className="text-base font-bold text-slate-900">
                  2. Smart India Hackathon (BU SIH Internal Screening)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Institutional screening to nominate campus teams for the national Grand Finale.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pl-4 list-disc">
                  <li><strong>Eligible Batches:</strong> Open to all undergraduate Bennett University students.</li>
                  <li><strong>Mandatory Team Rule:</strong> Exactly 6 members. Must include at least 1 female team member as mandated by national SIH guidelines.</li>
                  <li><strong>Restrictions:</strong> No individual entries permitted.</li>
                </ul>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 bg-white space-y-3">
                <h3 className="text-base font-bold text-slate-900">
                  3. Student Club & Open Campus Hackathons (e.g., Phantasia, GDG TechSprint)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Club-organized hackathons, often open to inter-college participants across India.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pl-4 list-disc">
                  <li><strong>Eligibility:</strong> Bonafide college students across recognized universities with valid college ID.</li>
                  <li><strong>Team Size:</strong> 2 to 5 members (check specific event listing).</li>
                  <li><strong>Cross-College Teams:</strong> Allowed in select national editions.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Navigation to related pages */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Ready to form a team?</h3>
              <p className="text-xs text-slate-600">Review project rules and registration procedures.</p>
            </div>
            <div className="flex gap-2">
              <Button to="/rules" variant="outline" size="sm">
                View Rules
              </Button>
              <Button to="/registration" variant="primary" size="sm">
                Registration Steps
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
