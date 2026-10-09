import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Globe, Cpu, ShieldCheck, HeartPulse, Sparkles, BookOpen, AlertCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import { hackathons } from '../data/hackathons';

export default function Tracks() {
  const indicativeTracks = [
    {
      title: "Web & Mobile Systems",
      icon: Globe,
      description: "Full-stack web applications, progressive web apps, and cross-platform mobile utilities addressing student productivity, campus workflows, or local community needs.",
      suggestedTech: ["React / Next.js", "Node.js / Python", "Tailwind CSS", "PostgreSQL / SQLite"],
      status: "Illustrative"
    },
    {
      title: "Applied AI & Data Engineering",
      icon: Cpu,
      description: "Classical and deep machine learning pipelines, natural language processing tools, computer vision prototypes, and predictive analytics on real datasets.",
      suggestedTech: ["Python", "PyTorch / TensorFlow", "Scikit-Learn", "Pandas & FastAPI"],
      status: "Illustrative"
    },
    {
      title: "Cybersecurity & Distributed Systems",
      icon: ShieldCheck,
      description: "Decentralized applications, smart contract security auditing, identity management protocols, threat modeling tools, and cryptography implementations.",
      suggestedTech: ["Solidity", "Rust", "Go", "Cryptography Libraries"],
      status: "Illustrative"
    },
    {
      title: "Healthcare, BioTech & Assistive Tools",
      icon: HeartPulse,
      description: "Diagnostic aids, patient monitoring software, accessibility tools for differently-abled individuals, and biotechnology data visualization.",
      suggestedTech: ["IoT Protocols", "Mobile SDKs", "Time-series Models", "WebRTC"],
      status: "Illustrative"
    },
    {
      title: "Open Innovation & Campus Utilities",
      icon: Sparkles,
      description: "Wildcard track for unconventional ideas: open-source developer tooling, sustainable campus systems, green tech, and experimental software engineering.",
      suggestedTech: ["Open Choice", "Public APIs", "Hardware / Arduino Integration"],
      status: "Illustrative"
    }
  ];

  return (
    <>
      <SEOHead
        title="Bennett Hackathon Tracks and Problem Statements | HackSphere"
        description="The tracks, themes, and problem domains available at the Bennett hackathon. Review confirmed event categories and illustrative technology themes."
        canonicalUrl="/tracks"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Tracks' }]} />
        </div>
      </div>

      <main className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
              <span>Domain Problem Statements</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bennett Hackathon Tracks
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Explore the technology domains and problem statements typical of Bennett University hackathons. Read below for distinctions between confirmed tracks and illustrative themes.
            </p>
          </div>

          {/* Illustrative Notice */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-blue-900 space-y-1">
              <strong className="font-semibold block">Track Confirmation Policy</strong>
              <p>
                Specific problem statements for departmental hackathons are officially unveiled during the opening briefing to preserve competitive fairness. The domains listed below are representative tracks aligned with university academic specializations. For confirmed tracks of past and registered events, review the specific event listings.
              </p>
            </div>
          </div>

          {/* Technology Domains Grid */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Core Problem Domains (Illustrative Themes)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {indicativeTracks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-5 rounded-lg border border-slate-200 bg-white shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {item.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                        Relevant Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {item.suggestedTech.map((tech, j) => (
                          <span
                            key={j}
                            className="text-[11px] px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Confirmed Tracks from Documented Events */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Confirmed Tracks from Campus Events
            </h2>
            <div className="space-y-3">
              {hackathons.map((h) => (
                <div key={h.id} className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-sm font-bold text-slate-900">{h.name}</h3>
                    <span className="text-xs text-slate-500 font-medium">Status: {h.status}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {h.tracks.map((track, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 bg-white border border-slate-200 rounded font-medium text-slate-700"
                      >
                        {track}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Have a project idea in mind?</h3>
              <p className="text-xs text-slate-600">Review eligibility requirements and registration instructions.</p>
            </div>
            <Button to="/registration" variant="primary" size="sm">
              <span>View Registration Steps</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
