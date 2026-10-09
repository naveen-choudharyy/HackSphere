import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Bookmark, Compass } from 'lucide-react';
import Button from './Button';

export default function Navbar({ bookmarkCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Hackathons', path: '/hackathons' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Eligibility', path: '/eligibility' },
    { name: 'Rules', path: '/rules' },
    { name: 'Tracks', path: '/tracks' },
    { name: 'FAQ', path: '/faq' },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Tagline branding */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
            >
              <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center text-white font-bold text-sm tracking-tight group-hover:bg-blue-600 transition-colors">
                HS
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                  HackSphere
                </span>
                <span className="text-[10px] text-slate-600 -mt-1 hidden sm:inline">
                  Bennett University Directory
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right actions: Saved Bookmarks + Explore CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              to="/saved"
              aria-label={`Saved Hackathons (${bookmarkCount} saved)`}
              className="relative p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <Bookmark className="w-4 h-4" aria-hidden="true" />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {bookmarkCount}
                </span>
              )}
            </Link>

            <Button to="/hackathons" size="sm" variant="primary">
              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Explore Hackathons</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/saved"
              aria-label={`Saved Hackathons (${bookmarkCount} saved)`}
              onClick={closeMenu}
              className="relative p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <Bookmark className="w-4 h-4" aria-hidden="true" />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {bookmarkCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg">
          <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-semibold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Button
              to="/hackathons"
              size="md"
              variant="primary"
              className="w-full justify-center"
              onClick={closeMenu}
            >
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>Explore Hackathons</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
