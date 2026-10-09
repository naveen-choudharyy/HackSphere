import React from 'react';
import { MapPin, Navigation, Mail, Phone, ExternalLink, Building2, Train, Car, Info } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';

export default function Venue() {
  return (
    <>
      <SEOHead
        title="Bennett Hackathon Venue in Greater Noida | Contact"
        description="Where the Bennett hackathon takes place at Bennett University, Greater Noida, with campus directions, transport guide, and official contact channels."
        canonicalUrl="/venue"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Venue & Contact' }]} />
        </div>
      </div>

      <main className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
              <span>Campus Location & Navigation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bennett Hackathon Venue and Contact
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Official campus address, navigation directions, transit connectivity, and contact channels for hackathons hosted at Bennett University, Greater Noida.
            </p>
          </div>

          {/* Official Verified Campus Address */}
          <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-slate-900">
                  Bennett University Campus
                </h2>
                <p className="text-sm text-slate-700">
                  Plot Nos 8–11, TechZone II, Greater Noida, Uttar Pradesh 201310, India
                </p>
                <p className="text-xs text-slate-500">
                  Primary Venue: Academic Block Labs & Seminar Halls (Exact room/lab designated per event schedule).
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                href="https://maps.google.com/?q=Bennett+University+Greater+Noida"
                variant="primary"
                size="sm"
              >
                <Navigation className="w-4 h-4 mr-1.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          </section>

          {/* How to Reach Bennett University */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Directions & Public Transit Guide
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg border border-slate-200 bg-white space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                  <Train className="w-4 h-4" />
                  <span>By Metro (Noida-Greater Noida Aqua Line)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The nearest metro station is <strong>Pari Chowk</strong> or <strong>Alpha 1</strong> on the Noida Metro Aqua Line. From the metro station, shared autos and cab services are readily available directly to TechZone II (approximately 15–20 minutes commute).
                </p>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 bg-white space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                  <Car className="w-4 h-4" />
                  <span>By Road / Expressway</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Accessible via the Noida-Greater Noida Expressway and the Yamuna Expressway. Follow TechZone II road signs near the university campus gate. Visitor parking is managed at the designated security gate.
                </p>
              </div>
            </div>
          </section>

          {/* Campus Facility Checklist for Participants */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              Participant Logistics Checklist
            </h2>
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-700 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Security Check-In:</strong> Carry your physical university student ID card. Non-Bennett participants attending open events must have their government ID and college photo ID.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Power & Wi-Fi:</strong> High-speed campus Wi-Fi credentials are provided during registration. Teams are advised to bring a 3-pin extension strip for multiple chargers.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Cafeteria & Dining:</strong> Campus food courts and mess facilities operate with designated meal tokens during 24-hour hackathons.</span>
              </div>
            </div>
          </section>

          {/* Contact Channels */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Official Contact Channels
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-lg border border-slate-200 bg-white space-y-1">
                <span className="text-slate-500 font-medium block">University Website</span>
                <a
                  href="https://www.bennett.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  bennett.edu.in
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 bg-white space-y-1">
                <span className="text-slate-500 font-medium block">Official Hackathon Portal</span>
                <a
                  href="https://www.bennett.edu.in/hackathon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  bennett.edu.in/hackathon
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-600 pt-2">
              Note: Contact channels for individual student-led club events (Phantasia, GDG TechSprint, SIH) are managed via their respective event pages on HackSphere and official community channels.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
