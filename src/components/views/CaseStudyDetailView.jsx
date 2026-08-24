import React from 'react';

export default function CaseStudyDetailView({ selectedCaseStudy, setCurrentTab }) {
  if (!selectedCaseStudy) return null;

  const handleNav = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        </div>

        <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
          <img
            src={selectedCaseStudy.image}
            alt={selectedCaseStudy.client}
            style={{ objectPosition: selectedCaseStudy.imagePosition || 'center' }}
            className="w-full h-96 object-cover"
          />
        </div>

        <p className="text-lg text-neutral-600 leading-relaxed">{selectedCaseStudy.summary}</p>

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
