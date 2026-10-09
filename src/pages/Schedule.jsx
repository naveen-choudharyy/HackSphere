import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import { hackathons } from '../data/hackathons';

export default function Schedule() {
  const [selectedHackathonId, setSelectedHackathonId] = useState('bu-annual-2026');

  const selectedEvent = hackathons.find((h) => h.id === selectedHackathonId) || hackathons[0];

  return (
    <>
      <SEOHead
        title="Bennett Hackathon Schedule 2026 | Dates and Rounds"
        description="Dates, timings, rounds, and deadlines for the Bennett hackathon, updated as events approach. Chronological timelines for campus hackathons."
        canonicalUrl="/schedule"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Schedule' }]} />
        </div>
      </div>

      <main className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
              <span>Event Timelines & Rounds</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bennett Hackathon Schedule
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Chronological timelines, problem statement announcements, and evaluation rounds for hackathons conducted at Bennett University.
            </p>
          </div>

          {/* Freshness and Verification Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start justify-between gap-4">
            <div className="space-y-1 text-xs sm:text-sm">
              <span className="font-semibold text-slate-900 block">Freshness Notice</span>
              <p className="text-slate-600">
                Dates and round timings are synchronized with official university circulars. For upcoming cycles where exact calendar slots are awaiting committee approval, slots are labeled "To be announced".
              </p>
            </div>
            <span className="shrink-0 text-xs text-slate-500 font-medium">
              Last updated: October 2026
            </span>
          </div>

          {/* Event Selector Tab */}
          <div>
            <label htmlFor="event-schedule-select" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Select Hackathon to View Timeline
            </label>
            <div className="flex flex-wrap gap-2">
              {hackathons.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setSelectedHackathonId(h.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                    selectedHackathonId === h.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {h.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Event Details Header */}
          <div className="border border-slate-200 rounded-xl p-6 bg-white space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {selectedEvent.name}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Organised by: {selectedEvent.organiser}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge status={selectedEvent.status} />
                <span className="text-xs px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                  {selectedEvent.format}
                </span>
              </div>
            </div>

            {/* Quick summary strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div>
                <strong className="block text-slate-800">Event Window:</strong>
                <span>{selectedEvent.eventDate || 'To be announced'}</span>
              </div>
              <div>
                <strong className="block text-slate-800">Registration Deadline:</strong>
                <span>{selectedEvent.deadline || 'To be announced'}</span>
              </div>
              <div>
                <strong className="block text-slate-800">Campus Location:</strong>
                <span className="truncate block">{selectedEvent.location}</span>
              </div>
            </div>

            {/* Timeline Breakdown */}
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-900 mb-4">
                Round Timeline & Milestones
              </h3>

              {selectedEvent.schedule && selectedEvent.schedule.length > 0 ? (
                <div className="relative pl-6 border-l-2 border-slate-200 space-y-8">
                  {selectedEvent.schedule.map((item, index) => (
                    <div key={index} className="relative group">
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] top-0.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-600 group-hover:scale-125 transition-transform" />

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                            {item.phase}
                          </span>
                          <span className="text-xs font-medium text-slate-500">
                            {item.time}
                          </span>
                        </div>
                        <h4 className="text-base font-semibold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 py-4">
                  Schedule details for this event have not yet been posted.
                </p>
              )}
            </div>

            {/* Event Specific Link */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to={`/hackathons/${selectedEvent.slug}`}
                className="text-xs text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>View full event details & rules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Typical 24-Hour Campus Hackathon Master Timeline */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Standard 24-Hour Hackathon Format (Reference)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              For upcoming offline 24-hour hackathons (like Phantasia), the standard timetable follows this structure:
            </p>

            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-700 font-semibold text-left">
                  <tr>
                    <th scope="col" className="px-4 py-3">Stage / Time</th>
                    <th scope="col" className="px-4 py-3">Activity</th>
                    <th scope="col" className="px-4 py-3">Location / Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Day 1: 09:00 AM</td>
                    <td className="px-4 py-3">Registration & Check-In</td>
                    <td className="px-4 py-3">Academic Block Atrium (ID Verification)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Day 1: 10:30 AM</td>
                    <td className="px-4 py-3">Opening Briefing & Problem Statements</td>
                    <td className="px-4 py-3">Auditorium / Lab Allocation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Day 1: 11:30 AM</td>
                    <td className="px-4 py-3">Hacking Sprint Begins</td>
                    <td className="px-4 py-3">Computer Laboratories</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Day 1: 05:00 PM</td>
                    <td className="px-4 py-3">Mentor Review Round 1</td>
                    <td className="px-4 py-3">Architecture & Scope Check</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Day 2: 10:00 AM</td>
                    <td className="px-4 py-3">Code Freeze & Repository Submission</td>
                    <td className="px-4 py-3">GitHub / Evaluation Portal</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Day 2: 11:30 AM</td>
                    <td className="px-4 py-3">Final Jury Presentations & Viva</td>
                    <td className="px-4 py-3">Designated Judging Rooms</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Day 2: 03:00 PM</td>
                    <td className="px-4 py-3">Valedictory & Results Announcement</td>
                    <td className="px-4 py-3">University Auditorium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
