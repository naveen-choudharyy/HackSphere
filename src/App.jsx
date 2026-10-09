import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Hackathons from './pages/Hackathons';
import HackathonDetails from './pages/HackathonDetails';
import Registration from './pages/Registration';
import Eligibility from './pages/Eligibility';
import Schedule from './pages/Schedule';
import Rules from './pages/Rules';
import Tracks from './pages/Tracks';
import Speakers from './pages/Speakers';
import Venue from './pages/Venue';
import FAQ from './pages/FAQ';
import SavedHackathons from './pages/SavedHackathons';
import BlogBeginners from './pages/BlogBeginners';
import BlogPreparation from './pages/BlogPreparation';
import NotFound from './pages/NotFound';

import { useBookmarks } from './hooks/useBookmarks';

export default function App() {
  const { bookmarks, toggleBookmark, clearAllBookmarks } = useBookmarks();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top persistent accessible navigation */}
      <Navbar bookmarkCount={bookmarks.length} />

      {/* Main content body */}
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route
            path="/"
            element={<Home bookmarks={bookmarks} toggleBookmark={toggleBookmark} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/hackathons"
            element={<Hackathons bookmarks={bookmarks} toggleBookmark={toggleBookmark} />}
          />
          <Route
            path="/hackathons/:slug"
            element={<HackathonDetails bookmarks={bookmarks} toggleBookmark={toggleBookmark} />}
          />
          <Route path="/registration" element={<Registration />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/saved"
            element={
              <SavedHackathons
                bookmarks={bookmarks}
                toggleBookmark={toggleBookmark}
                clearAllBookmarks={clearAllBookmarks}
              />
            }
          />
          <Route path="/blog/hackathon-for-beginners" element={<BlogBeginners />} />
          <Route path="/blog/how-to-prepare-for-a-hackathon" element={<BlogPreparation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Unified footer with dynamic JS copyright */}
      <Footer />
    </div>
  );
}
