import React from 'react';
import { ArrowRight } from 'lucide-react';
import { industriesList } from '../../data/industriesData';

export default function IndustriesView({ navigateToIndustry }) {
  return (
    <main className="flex-1 py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-extrabold text-nforce-red uppercase tracking-widest">Industry Expertise</div>
          <h1 className="text-4xl font-extrabold text-neutral-900">No Matter Your Industry, We've Got You Covered</h1>
          <p className="text-neutral-600 text-base">NForceOne has over 10 years of experience serving the IT needs of businesses across a variety of industries, giving us the expertise to understand the specificities of your industry and develop a strategy that matches your needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((ind) => (
            <div key={ind.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden card-hover flex flex-col justify-between">
              <div>
                <img src={ind.image} alt={ind.name} className="w-full h-44 object-cover" />
                <div className="p-6 space-y-3">
                  <div className="text-xs font-bold text-nforce-red uppercase">{ind.tagline}</div>
                  <h3 className="text-xl font-bold text-neutral-900">{ind.name}</h3>
                  <p className="text-neutral-600 text-xs line-clamp-3">{ind.summary}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button 
                  onClick={() => navigateToIndustry(ind)}
                  className="w-full bg-black hover:bg-neutral-900 text-white font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore Industry Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 text-nforce-red" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
