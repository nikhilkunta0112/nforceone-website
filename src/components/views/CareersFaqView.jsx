import React, { useState } from 'react';
import { careersData } from '../../data/careersData';
import { Briefcase, MapPin, Clock, Mail, ChevronDown, ChevronUp, CheckCircle, Sparkles } from 'lucide-react';

const faqsList = [
  {
    q: 'How quickly can NForceOne onboard a dedicated QA or engineering team?',
    a: 'We can deploy certified QA automation engineers, Pega developers, or full-stack engineers within 48 to 72 hours under our flexible staff augmentation and dedicated delivery models.'
  },
  {
    q: 'What security compliance standards does NForceOne follow?',
    a: 'NForceOne is ISO 27001 and SOC 2 Type II compliant. All engagement teams execute strict mutual NDAs and work within encrypted environments with sanitized test datasets.'
  },
  {
    q: 'Does NForceOne support custom test automation frameworks?',
    a: 'Yes. We design and implement custom Playwright, Selenium, Cypress, Appium, Pega Launchpad, and REST Assured test automation suites tailored to your existing CI/CD pipelines.'
  },
  {
    q: 'How do I apply for an open job position at NForceOne?',
    a: 'You can submit your resume directly to admin@nforceone.com with the job title in the subject line. Our talent acquisition team reviews candidates on a rolling basis.'
  }
];

export default function CareersFaqView() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <main className="flex-1 py-16 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Careers Hero */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-nforce-red/10 border border-nforce-red/20 text-nforce-red text-xs font-bold uppercase tracking-widest">
            {careersData.hero.tagline}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {careersData.hero.heading}
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed font-light">
            {careersData.hero.description}
          </p>
        </div>

        {/* Culture Perks Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {careersData.perks.map((perk, idx) => (
            <div key={idx} className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl space-y-2">
              <div className="text-base font-bold text-white flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-nforce-red shrink-0" />
                <span>{perk.title}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Job Listings */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-white">Open Roles & Opportunities</h2>
              <p className="text-xs text-zinc-400">Join our engineering and QA teams in Hyderabad, India and Dallas, USA.</p>
            </div>
            <a 
              href="mailto:admin@nforceone.com" 
              className="inline-flex items-center space-x-2 bg-nforce-red hover:bg-nforce-red text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-nforce-red/20"
            >
              <Mail className="w-4 h-4" />
              <span>Send Resume (admin@nforceone.com)</span>
            </a>
          </div>

          <div className="space-y-4">
            {careersData.jobListings.map((job) => (
              <div 
                key={job.id} 
                className={`bg-zinc-900/80 border rounded-2xl p-6 transition-all ${
                  selectedJob === job.id ? 'border-nforce-red bg-zinc-900' : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-nforce-red bg-nforce-red/10 px-2.5 py-1 rounded-md">{job.department}</span>
                      <span className="text-xs text-zinc-400 flex items-center space-x-1"><MapPin className="w-3 h-3 text-nforce-red" /><span>{job.location}</span></span>
                      <span className="text-xs text-zinc-400 flex items-center space-x-1"><Clock className="w-3 h-3 text-nforce-red" /><span>{job.type} • {job.experience}</span></span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl">{job.overview}</p>
                  </div>

                  <button
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    className="self-start md:self-center px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white rounded-xl transition-all border border-zinc-700"
                  >
                    {selectedJob === job.id ? 'Hide Details' : 'View Requirements'}
                  </button>
                </div>

                {/* Expanded Details */}
                {selectedJob === job.id && (
                  <div className="mt-6 pt-6 border-t border-zinc-800 space-y-4 animate-in fade-in">
                    <h4 className="text-sm font-bold text-white">Key Requirements & Skills:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {job.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="text-xs text-zinc-300 flex items-start space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 text-nforce-red shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 flex items-center space-x-3 text-xs text-zinc-400">
                      <span>Apply by emailing your CV to:</span>
                      <a href={`mailto:${job.applyEmail}?subject=Application for ${job.title}`} className="text-nforce-red font-bold hover:underline">
                        {job.applyEmail}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-8 bg-zinc-900/40 border border-zinc-800 p-5 sm:p-8 rounded-3xl">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-xs text-zinc-400">Everything you need to know about partnering with NForceOne.</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqsList.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-white text-sm hover:text-red-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-nforce-red" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
