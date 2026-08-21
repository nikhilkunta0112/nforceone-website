import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceDetailView({ selectedService, setCurrentTab }) {
  if (!selectedService) return null;

  const handleNav = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="flex-1 py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        
        <button
          onClick={() => handleNav('services')}
          className="-m-2 p-2 text-xs font-bold text-red-600 hover:underline flex items-center gap-1"
        >
          &larr; Back to All Services
        </button>

        <div className="space-y-6">
          <div className="inline-block bg-red-100 text-red-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
            {selectedService.category}
          </div>
          <h1 className="text-4xl font-extrabold text-neutral-900">{selectedService.title}</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">{selectedService.summary}</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
          <img src={selectedService.image} alt={selectedService.title} className="w-full h-96 object-cover" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-6">
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">Key Capabilities & Features</h3>
            <div className="space-y-2">
              {selectedService.features.map((ft, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{ft}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">Sub-disciplines Included</h3>
            <div className="flex flex-wrap gap-2">
              {selectedService.subservices.map((sub, i) => (
                <div key={i} className="bg-white border border-neutral-200 text-neutral-800 text-xs font-bold px-3 py-1.5 rounded-md shadow-xs">
                  {sub}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6 border border-neutral-800">
          <div>
            <h3 className="text-2xl font-bold">Ready to Implement {selectedService.title}?</h3>
            <p className="text-neutral-300 text-sm mt-1">Talk with an NForceOne technical lead to start your engagement.</p>
          </div>
          <button 
            onClick={() => handleNav('contact')}
            className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors shadow-md"
          >
            Schedule Consultation &rarr;
          </button>
        </div>

      </div>
    </main>
  );
}
