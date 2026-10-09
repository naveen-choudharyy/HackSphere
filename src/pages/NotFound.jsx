import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404: Page Not Found | HackSphere"
        description="The page you requested could not be found. Explore HackSphere to discover Bennett University hackathons."
      />

      <main className="py-20 bg-white flex-1 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mx-auto text-2xl font-bold font-mono">
            404
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              We couldn't find the page or hackathon event you were looking for. The link may be out of date or the URL may have been mistyped.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Button to="/" variant="primary">
              <Home className="w-4 h-4 mr-2" />
              <span>Return Home</span>
            </Button>
            <Button to="/hackathons" variant="outline">
              <Compass className="w-4 h-4 mr-2" />
              <span>Explore Directory</span>
            </Button>
          </div>

          <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-2">
            <p className="font-semibold text-slate-700">Popular Pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/schedule" className="text-blue-600 hover:underline">
                Schedule
              </Link>
              <span>•</span>
              <Link to="/registration" className="text-blue-600 hover:underline">
                Registration
              </Link>
              <span>•</span>
              <Link to="/eligibility" className="text-blue-600 hover:underline">
                Eligibility
              </Link>
              <span>•</span>
              <Link to="/faq" className="text-blue-600 hover:underline">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
