import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { caseStudiesList } from '../../data/caseStudiesData';

export default function CaseStudyDetailView({ selectedCaseStudy, setCurrentTab, navigateToCaseStudy }) {
  if (!selectedCaseStudy) return null;

  const handleNav = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const otherCaseStudies = caseStudiesList.filter((cs) => cs.id !== selectedCaseStudy.id);

  return (
    <main className="flex-1 py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">

        <button
          onClick={() => handleNav('home')}
          className="-m-2 p-2 text-xs font-bold text-nforce-red hover:underline flex items-center gap-1"
        >
          &larr; Back to Home
        </button>

        <div className="space-y-6">
          <div className="inline-block bg-red-100 text-red-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
            Featured Case Study
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">{selectedCaseStudy.client}</h1>

          {selectedCaseStudy.snapshot && (
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
              {selectedCaseStudy.snapshot.map((item, idx) => (
                <div key={idx} className={idx > 0 ? 'sm:border-l sm:border-neutral-200 sm:pl-8' : ''}>
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wide">{item.label}</div>
                  <div className="text-sm font-bold text-neutral-800 mt-0.5">{item.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
          <img
            src={selectedCaseStudy.image}
            alt={selectedCaseStudy.client}
            style={{ objectPosition: selectedCaseStudy.imagePosition || 'center' }}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-neutral-900">The Challenge</h3>
            <p className="text-base text-neutral-600 leading-relaxed">{selectedCaseStudy.challenge}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-neutral-900">The Solution</h3>
            <p className="text-base text-neutral-600 leading-relaxed">{selectedCaseStudy.solution}</p>
          </div>
        </div>

        <div className="bg-neutral-50 p-6 sm:p-8 rounded-xl border border-neutral-200 space-y-4">
          <h3 className="text-lg font-bold text-neutral-900">Impact</h3>
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {selectedCaseStudy.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-black text-nforce-red">{stat.value}</div>
                <div className="text-xs text-neutral-500 mt-1 max-w-[200px]">{stat.label}</div>
              </div>
            ))}
          </div>
          {selectedCaseStudy.disclaimer && (
            <p className="text-xs text-neutral-400 italic pt-2 border-t border-neutral-200">{selectedCaseStudy.disclaimer}</p>
          )}
        </div>

        {selectedCaseStudy.exampleQuote && (
          <div className="bg-neutral-50 border border-neutral-200 p-6 sm:p-8 rounded-xl space-y-4">
            <div className="flex gap-4">
              <Quote className="w-8 h-8 text-nforce-red/30 shrink-0" />
              <div className="space-y-2">
                <p className="text-lg text-neutral-700 italic leading-relaxed">
                  &ldquo;{selectedCaseStudy.exampleQuote.text}&rdquo;
                </p>
                <p className="text-xs font-semibold text-neutral-400">{selectedCaseStudy.exampleQuote.attribution}</p>
              </div>
            </div>
          </div>
        )}

        {otherCaseStudies.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">More Case Studies</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherCaseStudies.map((cs) => (
                <button
                  key={cs.id}
                  onClick={() => navigateToCaseStudy(cs)}
                  className="group flex items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-left hover:border-nforce-red/40 hover:bg-white transition-colors"
                >
                  <img
                    src={cs.image}
                    alt={cs.client}
                    style={{ objectPosition: cs.imagePosition || 'center' }}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-bold text-neutral-900 leading-snug">{cs.client}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-nforce-red shrink-0 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-black text-white rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6 border border-neutral-800">
          <div>
            <h3 className="text-2xl font-bold">Ready to Build Something Like This?</h3>
            <p className="text-neutral-300 text-sm mt-1">Talk with an NForceOne technical lead to scope your next engagement.</p>
          </div>
          <button
            onClick={() => handleNav('contact')}
            className="bg-nforce-red text-white font-bold px-6 py-3 rounded-lg hover:bg-nforce-redHover transition-colors shadow-md"
          >
            Schedule Consultation &rarr;
          </button>
        </div>

      </div>
    </main>
  );
}
