import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Cinematic dark "featured case study" section: tag pill + headline + prose + stat row on one
// side, a large hover-zoom image with a bottom gradient on the other, with a faint oversized
// watermark logo in the background. A tab bar plus prev/next arrows let visitors step through
// every entry in `items` - both stay hidden while there's only one case study, and start
// working automatically as soon as a second one is added to the data array.
export default function CaseStudySection({ items, onExplore }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];
  const hasMultiple = items.length > 1;

  const goTo = (idx) => setActiveIndex((idx + items.length) % items.length);

  return (
    <section
      className="relative overflow-hidden border-b border-nforce-borderDark"
      style={{
        backgroundImage: "url('/images/case_study_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 pointer-events-none" />

      {hasMultiple && (
        <div className="relative z-10 border-b border-nforce-borderDark/80">
          <div className="max-w-[1280px] mx-auto px-6 flex gap-8 overflow-x-auto">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => goTo(idx)}
                className={`py-4 border-b-2 whitespace-nowrap font-bold uppercase tracking-[0.15em] text-xs transition-colors ${
                  idx === activeIndex ? 'border-red-600 text-red-500' : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {String(idx + 1).padStart(2, '0')} / {item.client}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="md:col-span-5 space-y-5"
          >
            <span className="inline-block px-3 py-1 bg-red-600/10 text-red-500 text-xs font-bold rounded border border-red-600/20 uppercase tracking-[0.2em]">
              Featured Case Study
            </span>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {active.client}
            </h3>
            <p className="text-zinc-400 text-base leading-relaxed">{active.summary}</p>

            <div className="flex items-center gap-6 pt-2">
              {active.stats.map((stat, idx) => (
                <div key={idx} className={idx > 0 ? 'border-l border-zinc-700 pl-6' : ''}>
                  <div className="text-3xl font-black text-red-500">{stat.value}</div>
                  <div className="text-xs text-zinc-500 mt-1 max-w-[140px]">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wide pt-2"
            >
              <span className="relative overflow-hidden">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-red-500">View Case Study</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-500" />
            </button>
          </motion.div>
        </AnimatePresence>

        <div className="md:col-span-7 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative h-[320px] lg:h-[420px] rounded-xl overflow-hidden border border-nforce-borderDark group shadow-2xl shadow-black/40"
            >
              <img
                src={active.image}
                alt={active.client}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {hasMultiple && (
            <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
              <button
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous case study"
                className="w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next case study"
                className="w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
