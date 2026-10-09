import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Code, Award, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';

export default function Rules() {
  return (
    <>
      <SEOHead
        title="Bennett Hackathon Rules and Guidelines | HackSphere"
        description="Rules, submission requirements, judging criteria, team size regulations, and code of conduct for the Bennett hackathon in Greater Noida."
        canonicalUrl="/rules"
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Rules' }]} />
        </div>
      </div>

      <main className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
              <span>Code of Conduct & Competition Standards</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bennett Hackathon Rules & Guidelines
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Standard rules, team composition regulations, development integrity guidelines, submission criteria, and evaluation rubrics applied across Bennett University hackathons.
            </p>
          </div>

          {/* Section 1: Team Size and Composition */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Users className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">1. Team Composition Rules</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-3 text-xs sm:text-sm text-slate-700">
              <p>
                <strong>Team Limits:</strong> For departmental engineering hackathons, teams typically consist of <strong>2 to 3 students</strong>. In national screenings such as the Smart India Hackathon (SIH), teams must consist of <strong>exactly 6 members</strong>.
              </p>
              <p>
                <strong>Singular Registration:</strong> A participant may register as a member of only <strong>one team</strong> per hackathon cycle. Dual registrations will lead to disqualification from both teams.
              </p>
              <p>
                <strong>Team Leadership:</strong> Each team must nominate a single Primary Contact / Team Leader responsible for official submissions and communications.
              </p>
            </div>
          </section>

          {/* Section 2: Originality and Development Guidelines */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Code className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">2. Development & Originality Standards</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-3 text-xs sm:text-sm text-slate-700">
              <p>
                <strong>Fresh Work Requirement:</strong> All code, design assets, and project prototypes must be written during the active hackathon window. Submitting pre-built legacy semester projects is strictly prohibited.
              </p>
              <p>
                <strong>Open Source & Libraries:</strong> The use of open-source libraries, packages (e.g., npm, PyPI), and public APIs is encouraged, provided they are attributed in the project README.
              </p>
              <p>
                <strong>Version Control & Git Commits:</strong> Projects must be tracked using a public Git repository (GitHub/GitLab). Judges verify commit timestamps to ensure work was created during the hackathon sprint.
              </p>
            </div>
          </section>

          {/* Section 3: Judging Criteria & Evaluation Rubric */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Award className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">3. Judging Rubric (100 Points)</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Projects are evaluated by faculty panels and visiting industry mentors across four standardized dimensions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-semibold text-slate-900">Technical Depth & Execution</h3>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">30 Pts</span>
                </div>
                <p className="text-xs text-slate-600">
                  Clean architecture, working prototype, code hygiene, and effective integration of core technologies.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-semibold text-slate-900">Originality & Innovation</h3>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">25 Pts</span>
                </div>
                <p className="text-xs text-slate-600">
                  Novelty of the approach and uniqueness compared to existing campus or commercial tools.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-semibold text-slate-900">Impact & Practical Viability</h3>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">25 Pts</span>
                </div>
                <p className="text-xs text-slate-600">
                  Real-world relevance, scalability, user experience, and practical feasibility for target users.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-semibold text-slate-900">Pitch & Demonstration</h3>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">20 Pts</span>
                </div>
                <p className="text-xs text-slate-600">
                  Clarity of presentation, live demo reliability, and the ability to answer jury technical questions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: University Code of Conduct */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Shield className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">4. Code of Conduct</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-3 text-xs sm:text-sm text-slate-700">
              <p>
                <strong>Respectful Environment:</strong> Bennett University is dedicated to providing a harassment-free hackathon experience for everyone regardless of gender, sexual orientation, disability, physical appearance, or background.
              </p>
              <p>
                <strong>Campus Discipline:</strong> Participants must follow university security rules, keep labs orderly, and abide by campus hostel/visiting hours as outlined during check-in.
              </p>
              <p>
                <strong>Zero Tolerance for Plagiarism:</strong> Copying entire repositories or misrepresenting third-party code as your own will result in instant disqualification and notification to university disciplinary authorities.
              </p>
            </div>
          </section>

          {/* Footer links */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              Questions regarding rule interpretations?
            </p>
            <div className="flex gap-2">
              <Button to="/faq" variant="outline" size="sm">
                Check FAQ
              </Button>
              <Button to="/eligibility" variant="primary" size="sm">
                View Eligibility
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
