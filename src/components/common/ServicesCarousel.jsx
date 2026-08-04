import React, { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';

const AUTO_PLAY_MS = 3000;

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Registration-mark corners shared by every illustration, tying them to one
// blueprint/schematic system rather than four unrelated scenes.
function FrameCorners({ stroke }) {
  const s = 13;
  return (
    <g stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round">
      <path d={`M12 ${12 + s} V12 H${12 + s}`} />
      <path d={`M${300 - 12 - s} 12 H${300 - 12} V${12 + s}`} />
      <path d={`M12 ${200 - 12 - s} V${200 - 12} H${12 + s}`} />
      <path d={`M${300 - 12 - s} ${200 - 12} H${300 - 12} V${200 - 12 - s}`} />
    </g>
  );
}

function DiagramTag({ label, color }) {
  return (
    <text x="20" y="188" fontSize="8" fontFamily="ui-monospace, 'Space Mono', monospace" letterSpacing="0.15em" fill={color}>
      {label}
    </text>
  );
}

// 1. Cost-effectiveness: real photo (calculator + cost/value reports), kept inside
// the same engineering-diagram frame as the other tabs for visual consistency.
function CostEffectivenessSVG() {
  return (
    <div className="w-full h-full relative overflow-hidden select-none">
      <img
        src="/images/cost_effectiveness.jpg"
        alt="Accountant reviewing cost and value reports with a calculator"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#E60000]/20 blur-3xl" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <FrameCorners stroke="#ffffff55" />
        <DiagramTag label="FIG.01 — COST/VALUE" color="#ffffffaa" />
      </svg>
    </div>
  );
}

// 2. Innovative Technology: real photo (AI/ML engineer at a multi-monitor workstation),
// kept inside the same engineering-diagram frame as the other tabs for visual consistency.
function InnovativeTechSVG() {
  return (
    <div className="w-full h-full relative overflow-hidden select-none">
      <img
        src="/images/innovative_technology.jpg"
        alt="Engineer reviewing neural network training metrics across dual monitors"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#E60000]/20 blur-3xl" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <FrameCorners stroke="#ffffff55" />
        <DiagramTag label="FIG.02 — CORE MESH" color="#ffffffaa" />
      </svg>
    </div>
  );
}

// 3. Industry Expertise: real photo (consultants mapping client strategy and tech
// architecture on a whiteboard), kept inside the shared engineering-diagram frame.
function IndustryExpertiseSVG() {
  return (
    <div className="w-full h-full relative overflow-hidden select-none">
      <img
        src="/images/industry_expertise.jpg"
        alt="Consultants mapping client strategy and technical architecture on a whiteboard"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#E60000]/20 blur-3xl" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <FrameCorners stroke="#ffffff55" />
        <DiagramTag label="FIG.03 — VERTICAL NET" color="#ffffffaa" />
      </svg>
    </div>
  );
}

// 4. Scalability: real photo (ascending stacked blocks forming a growth staircase),
// kept inside the shared engineering-diagram frame.
function ScalabilitySVG() {
  return (
    <div className="w-full h-full relative overflow-hidden select-none">
      <img
        src="/images/scalability.jpg"
        alt="Ascending stacked red blocks forming a growth staircase, symbolizing scaling upward"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#E60000]/20 blur-3xl" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <FrameCorners stroke="#ffffff55" />
        <DiagramTag label="FIG.04 — SCALE STACK" color="#ffffffaa" />
      </svg>
    </div>
  );
}

const renderIllustration = (itemId, reducedMotion) => {
  switch (itemId) {
    case '01':
      return <CostEffectivenessSVG reducedMotion={reducedMotion} />;
    case '02':
      return <InnovativeTechSVG reducedMotion={reducedMotion} />;
    case '03':
      return <IndustryExpertiseSVG reducedMotion={reducedMotion} />;
    case '04':
      return <ScalabilitySVG reducedMotion={reducedMotion} />;
    default:
      return null;
  }
};

export default function ServicesCarousel({ eyebrow, title, items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [isManuallyPaused, setIsManuallyPaused] = useState(() => Boolean(prefersReducedMotion));

  const isPaused = isHovering || isFocused || isManuallyPaused;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const handleTabClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(handleNext, AUTO_PLAY_MS);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const listId = `services-tablist-${eyebrow ?? 'default'}`;

  return (
    <section
      className="pt-20 pb-10 bg-[#DACAA4] border-b border-black/[0.04]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsFocused(false);
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Heading + Tab List */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold text-red-700 uppercase tracking-[0.2em]">{eyebrow}</span>
              <h2 className="text-3xl lg:text-4xl font-black text-neutral-950 tracking-tight leading-tight">{title}</h2>
            </div>

            <div
              role="tablist"
              aria-label={eyebrow ? `${eyebrow}: ${title}` : title}
              className="flex flex-col gap-2"
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') { e.preventDefault(); handleTabClick((activeIndex + 1) % items.length); }
                if (e.key === 'ArrowLeft') { e.preventDefault(); handleTabClick((activeIndex - 1 + items.length) % items.length); }
              }}
            >
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                const IconComp = item.icon;
                const tabId = `${listId}-tab-${item.id ?? index}`;
                const panelId = `${listId}-panel-${item.id ?? index}`;
                return (
                  <button
                    key={item.id ?? item.title}
                    type="button"
                    role="tab"
                    id={tabId}
                    aria-selected={isActive}
                    aria-controls={panelId}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      'group relative flex items-start gap-4 p-4 text-left transition-all duration-300 rounded-xl border',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2',
                      isActive
                        ? 'bg-white border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-neutral-950'
                        : 'bg-white/35 border-white/20 text-neutral-700 hover:text-neutral-950 hover:bg-white/50 hover:border-white/35'
                    )}
                  >
                    {IconComp && (
                      <div
                        className={cn(
                          'w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300',
                          isActive ? 'bg-red-600 text-white shadow-sm' : 'bg-red-50 text-red-600'
                        )}
                      >
                        <IconComp className="w-4 h-4" />
                      </div>
                    )}

                    <div className="flex flex-col gap-1 flex-1">
                      <span className="text-lg lg:text-xl font-extrabold tracking-tight">{item.title}</span>
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-neutral-600 text-sm leading-relaxed max-w-sm pt-1 min-h-[5rem]">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Autoplay progress meter for the active tab (replaces a static accent border) */}
                    {isActive && (
                      <div
                        className={cn(
                          'absolute bottom-1.5 left-4 right-4 h-[2px] rounded-full bg-black/[0.08] overflow-hidden transition-opacity duration-300',
                          isPaused ? 'opacity-0' : 'opacity-100'
                        )}
                      >
                        {!isPaused && (
                          <motion.div
                            key={activeIndex}
                            className="h-full bg-red-600 rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: AUTO_PLAY_MS / 1000, ease: 'linear' }}
                          />
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: 3D Stacked Deck Gallery (Accenture-inspired physical card shuffler) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 py-4">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-w-[600px] mx-auto group/showcase">
              {/* Outer glass frame — single elevation source (border only, no stacked shadow) */}
              <div className="relative w-full h-full p-4 sm:p-5 rounded-2xl border border-white/40 bg-white/10 backdrop-blur-xl flex flex-col justify-stretch">

                <div className="relative w-full h-full">
                  {items.map((item, index) => {
                    const isActive = activeIndex === index;
                    const indexOffset = index - activeIndex;
                    const panelId = `${listId}-panel-${item.id ?? index}`;
                    const tabId = `${listId}-tab-${item.id ?? index}`;

                    let rotateDeg = indexOffset * -3;
                    let yTranslate = indexOffset * 12;
                    let xTranslate = indexOffset * 10;
                    const zIndex = isActive ? items.length + 5 : items.length - Math.abs(indexOffset);
                    let opacityVal = isActive ? 1 : 0.4 - Math.abs(indexOffset) * 0.1;

                    if (isActive) {
                      rotateDeg = 0;
                      yTranslate = 0;
                      xTranslate = 0;
                      opacityVal = 1;
                    }

                    const animateProps = prefersReducedMotion
                      ? { rotate: 0, x: 0, y: 0, scale: 1, opacity: isActive ? 1 : 0 }
                      : { rotate: rotateDeg, x: xTranslate, y: yTranslate, scale: isActive ? 1 : 0.95, opacity: opacityVal };

                    return (
                      <motion.div
                        key={item.id ?? item.title}
                        role="tabpanel"
                        id={panelId}
                        aria-labelledby={tabId}
                        aria-hidden={!isActive}
                        className={cn(
                          'absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-lg border border-black/[0.08] bg-white cursor-pointer origin-bottom-right flex flex-col items-stretch',
                          isActive ? 'ring-2 ring-red-600/20' : ''
                        )}
                        style={{ zIndex }}
                        animate={animateProps}
                        transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                        onClick={() => handleTabClick(index)}
                      >
                        {renderIllustration(item.id, prefersReducedMotion)}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Float Controls */}
                <div className="absolute bottom-6 left-6 flex gap-2 z-30">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setIsManuallyPaused((p) => !p); }}
                    aria-label={isManuallyPaused ? 'Resume automatic rotation' : 'Pause automatic rotation'}
                    aria-pressed={isManuallyPaused}
                    className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm border border-black/[0.06] flex items-center justify-center text-neutral-900 shadow-md hover:bg-white hover:scale-105 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                  >
                    {isManuallyPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm border border-black/[0.06] flex items-center justify-center text-neutral-900 shadow-md hover:bg-white hover:scale-105 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    aria-label="Previous service"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm border border-black/[0.06] flex items-center justify-center text-neutral-900 shadow-md hover:bg-white hover:scale-105 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    aria-label="Next service"
                  >
                    <ArrowRight className="w-4 h-4" />
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
