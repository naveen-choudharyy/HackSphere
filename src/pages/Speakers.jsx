import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Award, Users, AlertCircle, ArrowRight, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';

export default function Speakers() {
  return (
    <>
      <SEOHead
        title="Bennett Hackathon Mentors and Speakers | HackSphere"
        description="Meet the mentors, speakers, judges, and organizers guiding the Bennett hackathon in Greater Noida. Confirmed panels updated upon university announcement."
        canonicalUrl="/speakers"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Mentors & Speakers' }]} />
        </div>
      </div>

      <main className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
              <span>Jury & Mentorship Panels</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bennett Hackathon Mentors and Speakers
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Information on faculty advisors, technical mentors, workshop instructors, and industry jury panels guiding student participants at Bennett University.
            </p>
          </div>

          {/* Strict Data Integrity Notice */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 space-y-1">
              <strong className="font-semibold text-slate-900 block">Strict Data Integrity Notice</strong>
              <p>
                In accordance with HackSphere's verified information policy, we do not generate fictional mentor names, fake testimonials, or stock photos. Official speaker rosters and industry jury members are published here only once formally gazetted by the organizing department.
              </p>
            </div>
          </div>

          {/* Mentorship Structure Overview */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Campus Mentorship Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-lg border border-slate-200 bg-white space-y-2">
                <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Faculty Advisors</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Professors and research mentors from SCSET (School of Computer Science Engineering & Technology) providing architectural feedback.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 bg-white space-y-2">
                <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Student Tech Leads</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Experienced upper-year hackathon winners and open-source contributors assisting teams with debugging and Git setups.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 bg-white space-y-2">
                <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Industry Jury</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Visiting technology leads, startup founders, and engineering alumni invited to judge the final demo round and viva.
                </p>
              </div>
            </div>
          </section>

          {/* Current Upcoming Cycle Roster State */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Upcoming Edition Panel Status
            </h2>

            <div className="p-8 text-center bg-slate-50 border border-dashed border-slate-300 rounded-xl space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                Panel Roster To Be Announced
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                The official list of guest speakers, keynote session titles, and panel judges for the upcoming Bennett University hackathon cycle will be announced following the release of the event circular.
              </p>
              <div className="pt-2">
                <Button to="/schedule" variant="outline" size="sm">
                  View Current Schedule Timeline
                </Button>
              </div>
            </div>
          </section>

          {/* Bottom links */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              Interested in judging or mentoring a campus hackathon?
            </p>
            <Button to="/venue" variant="primary" size="sm">
              Contact Organizing Team
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
