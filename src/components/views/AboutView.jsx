import React from 'react';
import { aboutData } from '../../data/aboutData';
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Award, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

const iconMap = {
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Award: Award
};

export default function AboutView() {
  return (
    <main className="flex-1 bg-white text-neutral-900 antialiased">
      
      {/* 
        ================================================================
        DARK FEATURED HERO SECTION: "Dedicated to Delivering Excellence"
        ================================================================
      */}
      <section className="w-full bg-neutral-950 text-white py-16 sm:py-24 border-b border-zinc-800 shadow-2xl relative overflow-hidden">
        
        {/* User Provided Hero Background Image (decorative) */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <img
            src="/images/about_hero_bg.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-70"
          />
          {/* Dark Vignette & Gradient Overlay for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/85 via-neutral-950/70 to-neutral-950" />
        </div>

        {/* Ambient Dark Gradient Glows (decorative) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nforce-red/15 blur-[140px] rounded-full pointer-events-none z-0" aria-hidden="true" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-900/15 blur-[100px] rounded-full pointer-events-none z-0" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
          
          {/* Hero Heading & Tagline */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nforce-red/10 border border-nforce-red/30 text-nforce-red text-xs font-extrabold uppercase tracking-widest shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{aboutData.hero.tagline}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {aboutData.hero.heading}
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mx-auto">
              {aboutData.hero.subheading}
            </p>
            
            <div className="p-6 sm:p-8 bg-zinc-900/80 border border-zinc-800/90 rounded-2xl text-zinc-300 text-sm sm:text-base leading-relaxed text-left shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-nforce-red" />
              {aboutData.hero.story}
            </div>
          </div>

          {/* Key Metrics Stats Grid (Dark Glass Aesthetic) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
            {aboutData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/90 border border-zinc-800/90 p-6 rounded-2xl text-center space-y-2 hover:bg-zinc-900 shadow-xl group backdrop-blur-md card-hover"
              >
                <div className="text-3xl sm:text-4xl font-black text-nforce-red motion-safe:group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        ================================================================
        CLEAN WHITE BACKGROUND FOR THE REST OF THE PAGE
        ================================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 bg-white">
        
        {/* 4 Core Values Section */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="text-xs font-extrabold text-nforce-red uppercase tracking-widest">
              Core Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Our Core Culture & Values
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Four key attributes that differentiate NForceOne from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.coreValues.map((val, idx) => {
              const IconComp = iconMap[val.icon] || Award;
              return (
                <div
                  key={idx}
                  className="bg-neutral-50 border border-neutral-200/90 p-6 rounded-2xl space-y-4 hover:bg-white group card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-nforce-red/10 border border-nforce-red/20 flex items-center justify-center text-nforce-red motion-safe:group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-nforce-red transition-colors">
                    {val.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Milestones & Success Stories Section */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="text-xs font-extrabold text-nforce-red uppercase tracking-widest">
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Our Recent Success Stories
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Proven impact delivering enterprise scale, automation, and AI innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {aboutData.milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-2xl space-y-4 shadow-sm card-hover"
              >
                <div className="inline-block text-xs font-extrabold text-nforce-red bg-red-50 border border-red-200/60 px-3 py-1 rounded-md">
                  {m.year} Milestone
                </div>
                <h3 className="text-lg font-bold text-neutral-900 leading-snug">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Capabilities Checklist Callout */}
        <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white border border-zinc-800 p-8 sm:p-12 rounded-3xl space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-nforce-red/10 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />
          
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-extrabold text-nforce-red uppercase tracking-widest">
              Comprehensive Delivery
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              End-to-End Engineering Capabilities
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              From product strategy and UI design to QA automation, DevOps, and cloud deployment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {aboutData.capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-200 bg-zinc-900/60 border border-zinc-800 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-nforce-red shrink-0 mt-0.5" />
                <span className="font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </main>
  );
}
