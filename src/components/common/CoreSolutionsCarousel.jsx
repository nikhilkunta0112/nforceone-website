import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const AUTO_PLAY_DURATION = 2000;

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CoreSolutionsCarousel({ items, onSelect }) {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Refs mirror the latest state so the autoplay interval (which is not
  // recreated on every slide change) never acts on a stale closure.
  const activeRef = useRef(active);
  const isTransitioningRef = useRef(isTransitioning);
  useEffect(() => { activeRef.current = active; }, [active]);
  useEffect(() => { isTransitioningRef.current = isTransitioning; }, [isTransitioning]);

  const handleChange = (index) => {
    if (index === activeRef.current || isTransitioningRef.current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handlePrev = () => handleChange(activeRef.current === 0 ? items.length - 1 : activeRef.current - 1);
  const handleNext = () => handleChange(activeRef.current === items.length - 1 ? 0 : activeRef.current + 1);

  // Interval is created once per pause/length change (not per slide), ticking
  // steadily every AUTO_PLAY_DURATION; refs above keep handleNext non-stale.
  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(handleNext, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, items.length]);

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

          {/* Image card - large landscape, crossfades with the active solution */}
          <div className="relative w-full sm:w-72 md:w-96 aspect-[3/2] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm shrink-0">
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
