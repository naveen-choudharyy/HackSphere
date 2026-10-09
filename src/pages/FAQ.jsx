import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Search, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import { faqData, faqCategories } from '../data/faq';

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Structured Data: FAQPage JSON-LD
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Bennett Hackathon FAQ | Common Questions & Answers"
        description="Answers to common questions about the Bennett hackathon: teams, registration deadlines, eligibility, certificates, what to bring, and campus logistics."
        canonicalUrl="/faq"
        structuredData={faqStructuredData}
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
        </div>
      </div>

      <main className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
              <span>Help & Questions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bennett Hackathon FAQ
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Find quick, authentic answers to common student questions about registration, eligibility, team composition, certificates, and campus venue rules.
            </p>
          </div>

          {/* Search bar inside FAQ */}
          <div className="relative">
            <label htmlFor="faq-search" className="sr-only">
              Search questions
            </label>
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="search"
              id="faq-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion Component */}
          <div>
            <div className="text-xs text-slate-500 mb-3">
              Showing <strong>{filteredFaqs.length}</strong> questions
            </div>
            <FAQAccordion items={filteredFaqs} />
          </div>

          {/* Related pages links to avoid duplicate text */}
          <section className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-3">
            <h2 className="text-base font-bold text-slate-900">
              Need More Specific Information?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Instead of duplicating long guidelines in the FAQ, we maintain dedicated reference pages for each topic:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <Link
                to="/eligibility"
                className="p-3 bg-white rounded border border-slate-200 text-xs font-medium text-slate-800 hover:text-blue-700 hover:border-blue-300 flex items-center justify-between"
              >
                <span>Full Eligibility Criteria</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              <Link
                to="/rules"
                className="p-3 bg-white rounded border border-slate-200 text-xs font-medium text-slate-800 hover:text-blue-700 hover:border-blue-300 flex items-center justify-between"
              >
                <span>Rules & Rubrics</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              <Link
                to="/registration"
                className="p-3 bg-white rounded border border-slate-200 text-xs font-medium text-slate-800 hover:text-blue-700 hover:border-blue-300 flex items-center justify-between"
              >
                <span>Application Steps</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
