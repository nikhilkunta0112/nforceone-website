import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const AUTO_PLAY_DURATION = 5000;

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CoreSolutionsCarousel({ items, onSelect }) {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleChange = (index) => {
    if (index === active || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handlePrev = () => handleChange(active === 0 ? items.length - 1 : active - 1);
  const handleNext = () => handleChange(active === items.length - 1 ? 0 : active + 1);

  // Restarts the 5s window every time the active slide (or pause state) changes,
  // so autoplay always waits a full interval after the last manual interaction.
  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(handleNext, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isPaused, items.length]);

  const current = items[active];
  const CurrentIcon = current.icon;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-start gap-6 md:gap-10">
        <span className="text-7xl md:text-[120px] font-light leading-none text-red-600 select-none tabular-nums">
          {String(active + 1).padStart(2, '0')}
        </span>

        <div className="flex-1 pt-2 md:pt-6 min-w-0 flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
          <div className="flex-1 min-w-0">
            <span
              className={cn(
                'text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-3 transition-all duration-300',
                isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
              )}
            >
              {current.tag}
            </span>

            <h3
              className={cn(
                'text-2xl md:text-3xl font-extrabold leading-snug text-neutral-900 tracking-tight transition-all duration-300',
                isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
              )}
            >
              {current.title}
            </h3>

            <div
              className={cn(
                'mt-4 group cursor-default transition-all duration-300 delay-100',
                isTransitioning ? 'opacity-0' : 'opacity-100'
              )}
            >
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl">
                {current.summary}
              </p>

              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full bg-red-50 border-2 border-red-100 group-hover:border-red-200 flex items-center justify-center text-red-600 transition-all duration-300 shrink-0">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <button
                  onClick={onSelect}
                  className="font-bold text-neutral-900 hover:text-red-600 transition-colors text-sm inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-sm"
                >
                  Know More
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Image card - small square, crossfades with the active solution */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm shrink-0">
            {items.map((item, index) => (
              <img
                key={item.id ?? index}
                src={item.image}
                alt={item.title}
                className={cn(
                  'absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out',
                  index === active ? 'opacity-100' : 'opacity-0'
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation - thin line selector */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-6 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {items.map((item, index) => (
              <button
                key={item.id ?? index}
                onClick={() => handleChange(index)}
                className="group relative py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-sm"
                aria-label={`Show ${item.title}`}
                aria-current={index === active}
              >
                <span
                  className={cn(
                    'block h-[2px] transition-all duration-500 ease-out',
                    index === active
                      ? 'w-10 bg-red-600'
                      : 'w-5 bg-neutral-300 group-hover:w-7 group-hover:bg-neutral-400'
                  )}
                />
              </button>
            ))}
          </div>
          <span className="text-xs text-neutral-500 tracking-widest uppercase shrink-0">
            {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous solution"
            className="p-2.5 rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-sm hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next solution"
            className="p-2.5 rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-sm hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
