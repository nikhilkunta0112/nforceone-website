import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const AUTO_PLAY_DURATION = 5000;

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ServicesCarousel({ eyebrow, title, items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const handleTabClick = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(handleNext, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  // Preload every slide's image up front so switching never waits on a fetch/decode.
  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [items]);

  const variants = prefersReducedMotion
    ? {
        enter: { opacity: 0 },
        center: { zIndex: 1, opacity: 1 },
        exit: { zIndex: 0, opacity: 0 },
      }
    : {
        enter: (dir) => ({ y: dir > 0 ? '-100%' : '100%', opacity: 0 }),
        center: { zIndex: 1, y: 0, opacity: 1 },
        exit: (dir) => ({ zIndex: 0, y: dir > 0 ? '100%' : '-100%', opacity: 0 }),
      };

  return (
    <section className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Heading + Tab List */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4">
            <div className="space-y-3 mb-10">
              <span className="text-xs font-bold text-red-600 uppercase tracking-[0.2em]">{eyebrow}</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">{title}</h2>
            </div>

            <div className="flex flex-col">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                const IconComp = item.icon;
                return (
                  <button
                    key={item.id ?? item.title}
                    onClick={() => handleTabClick(index)}
                    aria-current={isActive}
                    className={cn(
                      'group relative flex items-start gap-4 py-6 text-left transition-colors duration-500 border-t border-neutral-200 first:border-0',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 rounded-sm',
                      isActive ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-700'
                    )}
                  >
                    <div className="absolute left-[-16px] top-0 bottom-0 w-[2px] bg-neutral-200" aria-hidden="true">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-red-600 origin-top"
                          initial={{ height: '0%' }}
                          animate={isPaused ? { height: '0%' } : { height: '100%' }}
                          transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: 'linear' }}
                        />
                      )}
                    </div>

                    {IconComp && (
                      <div
                        className={cn(
                          'w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-500',
                          isActive ? 'bg-red-600 text-white' : 'bg-red-50 text-red-600'
                        )}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                    )}

                    <div className="flex flex-col gap-2 flex-1">
                      <span className="text-xl lg:text-2xl font-bold tracking-tight">{item.title}</span>
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-neutral-600 text-sm leading-relaxed max-w-sm pb-1">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2">
            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-[4/5] md:aspect-[16/10] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: 'spring', stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <img
                      src={items[activeIndex].image}
                      alt={items[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 right-6 flex gap-3 z-20">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 flex items-center justify-center text-neutral-900 hover:bg-white transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    aria-label="Previous service"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 flex items-center justify-center text-neutral-900 hover:bg-white transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    aria-label="Next service"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
