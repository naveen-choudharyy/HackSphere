import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Info, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                HS
              </div>
              <span className="font-bold text-base text-white tracking-tight">HackSphere</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Find your next hackathon. An organized, SEO-focused campus directory built for students at Bennett University, Greater Noida.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
              <span>Greater Noida, Uttar Pradesh</span>
            </div>
          </div>

          {/* Core Directory Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Event Discovery
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/hackathons" className="hover:text-white transition-colors">
                  All Hackathons
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-white transition-colors">
                  Event Schedule
                </Link>
              </li>
              <li>
                <Link to="/eligibility" className="hover:text-white transition-colors">
                  Eligibility Criteria
                </Link>
              </li>
              <li>
                <Link to="/tracks" className="hover:text-white transition-colors">
                  Problem Tracks
                </Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-white transition-colors">
                  Registration Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Guidelines & Support */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Guidelines & Help
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/rules" className="hover:text-white transition-colors">
                  Rules & Code of Conduct
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="hover:text-white transition-colors">
                  Mentors & Speakers
                </Link>
              </li>
              <li>
                <Link to="/venue" className="hover:text-white transition-colors">
                  Venue & Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-white transition-colors">
                  Saved Bookmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Guides & About */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Guides & Project
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About HackSphere
                </Link>
              </li>
              <li>
                <Link to="/blog/hackathon-for-beginners" className="hover:text-white transition-colors">
                  Guide: Hackathons for Beginners
                </Link>
              </li>
              <li>
                <Link to="/blog/how-to-prepare-for-a-hackathon" className="hover:text-white transition-colors">
                  Guide: How to Prepare
                </Link>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>100% AI-Free Native Implementation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-start sm:items-center gap-1.5 text-left">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
            <p>
              HackSphere is an independent student academic project at Bennett University. Not an official administrative university website.
            </p>
          </div>
          <p className="shrink-0">
            &copy; {currentYear} HackSphere Project Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
