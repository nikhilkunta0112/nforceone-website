import React from 'react';
import { industriesList } from '../../data/industriesData';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// 1. Banking & FinTech Line Art: Vault lock, data shield, and rising trend lines
function FinTechLineArt() {
  return (
    <svg className="w-full h-[180px] mt-auto select-none opacity-85 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="120" cy="100" r="32" stroke="#121212" strokeWidth="1.5" />
      <circle cx="120" cy="100" r="8" stroke="#121212" strokeWidth="1.5" />
      <path d="M120 40 V68 M120 132 V160 M60 100 H88 M152 100 H200" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M78 58 L98 78 M142 122 L162 142 M78 142 L98 122 M142 78 L162 58" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40 150 L85 125 L135 135 L190 90 L210 100" stroke="#E60000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-[-4px] transition-transform duration-500 ease-out" />
      <circle cx="190" cy="90" r="3" fill="#E60000" />
    </svg>
  );
}

// 2. Retail & eCommerce Line Art: Minimalist shopping bag handles, barcodes, and package boundaries
function RetailLineArt() {
  return (
    <svg className="w-full h-[180px] mt-auto select-none opacity-85 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M75 140 L85 70 H155 L165 140 Z" stroke="#121212" strokeWidth="1.5" fill="none" className="group-hover:translate-y-[-2px] transition-transform duration-500" />
      <path d="M100 70 C100 45, 140 45, 140 70" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M60 160 H180" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
      {/* Barcode representation */}
      <path d="M80 110 V130 M86 110 V130 M94 110 V130 M98 110 V130 M108 110 V130 M114 110 V130 M120 110 V130 M130 110 V130 M136 110 V130 M144 110 V130 M150 110 V130" stroke="#121212" strokeWidth="1.5" className="group-hover:scale-y-95 transition-transform origin-center duration-500" />
    </svg>
  );
}

// 3. ISV & SaaS Line Art: App browser shell, nested databases, and API node links
function SaasLineArt() {
  return (
    <svg className="w-full h-[180px] mt-auto select-none opacity-85 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="55" y="45" width="130" height="90" rx="4" stroke="#121212" strokeWidth="1.5" />
      <line x1="55" y1="65" x2="185" y2="65" stroke="#121212" strokeWidth="1.5" />
      <circle cx="67" cy="55" r="2.5" fill="#121212" />
      <circle cx="77" cy="55" r="2.5" fill="#121212" />
      <circle cx="87" cy="55" r="2.5" fill="#121212" />
      {/* Database Node cylinders inside container */}
      <ellipse cx="140" cy="95" rx="18" ry="5" stroke="#E60000" strokeWidth="1.5" className="group-hover:translate-x-[2px] transition-transform duration-500" />
      <path d="M122 95 V110 C122 115, 158 115, 158 110 V95" stroke="#E60000" strokeWidth="1.5" className="group-hover:translate-x-[2px] transition-transform duration-500" />
      <path d="M122 110 V125 C122 130, 158 130, 158 125 V110" stroke="#E60000" strokeWidth="1.5" className="group-hover:translate-x-[2px] transition-transform duration-500" />
      {/* Code bracket elements */}
      <path d="M75 90 L65 100 L75 110 M100 90 L110 100 L100 110" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 4. Energy & Grid Line Art: Wind turbine, electrical substation grid, and solar rays
function EnergyLineArt() {
  return (
    <svg className="w-full h-[180px] mt-auto select-none opacity-85 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wind Turbine Pole & Rotors */}
      <line x1="120" y1="150" x2="120" y2="70" stroke="#121212" strokeWidth="1.5" />
      <g className="group-hover:rotate-45 transition-transform duration-[1200ms] ease-out origin-[120px_70px]">
        <path d="M120 70 L105 35 M120 70 L150 80 M120 70 L105 100" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="120" cy="70" r="3" fill="#121212" />
      </g>
      {/* Smart Grid Node Connection Outlines */}
      <circle cx="60" cy="130" r="8" stroke="#E60000" strokeWidth="1.5" />
      <circle cx="180" cy="130" r="8" stroke="#E60000" strokeWidth="1.5" />
      <path d="M68 130 H112 M128 130 H172" stroke="#E60000" strokeWidth="1" strokeDasharray="3 2" />
    </svg>
  );
}

const homepageCards = [
  {
    id: 'fintech',
    eyebrow: 'PERSPECTIVE',
    title: 'AI Tokenomics for Enterprise FinTech Value',
    type: 'light',
    component: FinTechLineArt
  },
  {
    id: 'healthcare',
    eyebrow: 'RESEARCH REPORT',
    title: 'Pulse of Change: Digital health & patient care infrastructure',
    type: 'dark',
    image: '/images/hero_command_center.jpg',
    accentColor: 'from-[#0B1A2D] via-[#050D18] to-black'
  },
  {
    id: 'retail',
    eyebrow: 'PERSPECTIVE',
    title: 'Customer 360: Next-gen omni-channel commerce & APIs',
    type: 'light',
    component: RetailLineArt
  },
  {
    id: 'telecom',
    eyebrow: 'RESEARCH REPORT',
    title: 'AI agents are changing how telecom subscribers choose',
    type: 'dark',
    image: '/images/cloud_devops.jpg',
    accentColor: 'from-[#2D0B24] via-[#180513] to-black'
  },
  {
    id: 'automotive',
    eyebrow: 'RESEARCH REPORT',
    title: 'Reinventing for Connected Vehicles & Smart Mobility',
    type: 'dark',
    image: '/images/pega_automation.jpg',
    accentColor: 'from-[#2D230B] via-[#181205] to-black'
  },
  {
    id: 'isv',
    eyebrow: 'PERSPECTIVE',
    title: 'Product Scaling: The new playbook for SaaS database clusters',
    type: 'light',
    component: SaasLineArt
  },
  {
    id: 'manufacturing',
    eyebrow: 'RESEARCH REPORT',
    title: 'Smart Manufacturing: Industrial IoT & Smart Factories',
    type: 'dark',
    image: '/images/pega_automation.jpg',
    accentColor: 'from-[#0B2D1B] via-[#05180D] to-black'
  },
  {
    id: 'energy-utilities',
    eyebrow: 'PERSPECTIVE',
    title: 'Sustainable Grid: Smart utility carbon emission analytics',
    type: 'light',
    component: EnergyLineArt
  }
];

export default function IndustriesTileGrid({ navigateToIndustry, setCurrentTab }) {
  const handleCardClick = (id) => {
    const indData = industriesList.find((i) => i.id === id);
    if (indData) {
      navigateToIndustry(indData);
    }
  };

  return (
    <section className="py-24 bg-[#D5C29D] text-neutral-900 border-b border-black/[0.04] relative overflow-hidden select-none">
      {/* Background blueprint grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold text-red-700 uppercase tracking-[0.25em]">INDUSTRIES WE SERVE</span>
            <h2 className="text-3xl lg:text-4xl font-black text-neutral-950 tracking-tight leading-none">
              Powering Innovation Across Every Industry
            </h2>
            <p className="text-neutral-750 text-sm max-w-2xl leading-relaxed">
              Our IT services empower organizations—startups, legacy enterprises, and government bodies—to modernize infrastructure, enhance digital resilience, and scale innovation.
            </p>
          </div>
          <button 
            onClick={() => { setCurrentTab('industries'); window.scrollTo(0, 0); }}
            className="text-xs font-bold text-neutral-900 border-b-2 border-red-700 pb-1 hover:text-red-800 hover:border-red-800 transition-colors uppercase tracking-widest shrink-0"
          >
            VIEW ALL INDUSTRIES
          </button>
        </div>

        {/* 2x4 Accenture Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {homepageCards.map((card) => {
            const isLight = card.type === 'light';
            const ArtComponent = card.component;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={cn(
                  "w-full h-[424px] flex flex-col justify-between p-7 relative overflow-hidden rounded-sm border group cursor-pointer transition-all duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] hover:scale-[1.03] hover:shadow-2xl hover:shadow-neutral-950/10",
                  isLight 
                    ? "bg-white border-black/5 text-neutral-900 hover:bg-neutral-50" 
                    : "bg-black border-zinc-900 text-white"
                )}
              >
                {/* 1. Header Metadata */}
                <div className="relative z-10 flex flex-col">
                  <span className={cn(
                    "text-[10px] font-bold tracking-[0.2em] uppercase",
                    isLight ? "text-neutral-500" : "text-red-500"
                  )}>
                    {card.eyebrow}
                  </span>
                  <h3 className="text-[20px] font-black leading-tight tracking-tight mt-3">
                    {card.title}
                  </h3>
                </div>

                {/* 2. Visual Content Background / Art */}
                {!isLight ? (
                  <>
                    {/* Dark Card Photo Background */}
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-[700ms] ease-out pointer-events-none"
                      />
                      {/* Deep backdrop gradient overlay */}
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-t mix-blend-multiply opacity-90 pointer-events-none",
                        card.accentColor
                      )} />
                      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                    </div>
                    {/* Decorative Red neon accent lines inside dark cards */}
                    <div className="mt-auto h-[100px] w-full relative z-10 flex items-end">
                      <div className="w-full h-[2px] bg-gradient-to-r from-red-600/50 to-transparent group-hover:from-red-500 transition-colors duration-500" />
                    </div>
                  </>
                ) : (
                  <div className="relative z-10 w-full flex justify-center">
                    {ArtComponent && <ArtComponent />}
                  </div>
                )}

                {/* 3. Action Click Overlay Button */}
                <button
                  className="absolute inset-0 w-full h-full cursor-pointer z-20 outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
                  aria-label={`${card.eyebrow}: ${card.title}. Click to expand solutions.`}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
