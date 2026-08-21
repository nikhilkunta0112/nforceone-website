import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function IndustryDetailView({ selectedIndustry, setCurrentTab }) {
  if (!selectedIndustry) return null;

  const handleNav = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="flex-1 py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        <button
          onClick={() => handleNav('industries')}
          className="-m-2 p-2 text-xs font-bold text-nforce-red hover:underline flex items-center gap-1"
        >
          &larr; Back to All Industries
        </button>

        <div className="space-y-4">
          <div className="text-xs font-bold text-nforce-red uppercase tracking-widest">{selectedIndustry.tagline}</div>
          <h1 className="text-4xl font-extrabold text-neutral-900">{selectedIndustry.name}</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">{selectedIndustry.summary}</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
          <img src={selectedIndustry.image} alt={selectedIndustry.name} className="w-full h-96 object-cover" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">Regulatory Compliance Standards</h3>
            <div className="space-y-2">
              {selectedIndustry.compliance.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
                  <ShieldCheck className="w-4 h-4 text-nforce-red shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">Specialized Solutions</h3>
            <div className="space-y-2">
              {selectedIndustry.solutions.map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-nforce-red shrink-0" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
