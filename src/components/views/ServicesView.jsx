import React from 'react';
import { Cpu, ArrowRight } from 'lucide-react';
import { servicesList } from '../../data/servicesData';

export default function ServicesView({ navigateToService }) {
  return (
    <main className="flex-1 py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-extrabold text-red-600 uppercase tracking-widest">Services & Solutions</div>
          <h1 className="text-4xl font-extrabold text-neutral-900">Comprehensive Technology Services for Enterprise Growth</h1>
          <p className="text-neutral-600 text-base">NForceOne is your trusted partner for IT management, data security, and cloud technology, with one goal in mind: to transform the way your business works in order to save you time and money.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div key={service.id} className="bg-white rounded-xl border border-neutral-200 p-6 flex flex-col justify-between card-hover">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
                <p className="text-neutral-600 text-sm">{service.summary}</p>
                
                <div className="pt-3 border-t border-neutral-100 space-y-1.5">
                  <div className="text-xs font-bold text-neutral-400 uppercase">Subservices & Disciplines:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.subservices.map((sub, i) => (
                      <span key={i} className="bg-neutral-100 text-neutral-800 text-[11px] font-semibold px-2 py-0.5 rounded">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => navigateToService(service)}
                className="mt-6 w-full bg-black hover:bg-neutral-900 text-white font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Service Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-500" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
