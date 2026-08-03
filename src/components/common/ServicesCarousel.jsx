import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const AUTO_PLAY_DURATION = 5000;

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// 1. Cost Effectiveness SVG: Isometric chart and saving indicators
function CostEffectivenessSVG() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-neutral-50 to-[#FAF6F0] flex items-center justify-center p-8 select-none relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:20px_20px]" />
      <svg className="w-full h-full max-h-[220px]" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 50 150 L 120 120 L 190 140 L 260 70"
          stroke="#E60000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="drop-shadow-[0_2px_8px_rgba(230,0,0,0.3)]"
        />
        <line x1="50" y1="150" x2="50" y2="40" stroke="#000000" strokeOpacity="0.05" strokeDasharray="3 3" />
        <line x1="120" y1="150" x2="120" y2="40" stroke="#000000" strokeOpacity="0.05" strokeDasharray="3 3" />
        <line x1="190" y1="150" x2="190" y2="40" stroke="#000000" strokeOpacity="0.05" strokeDasharray="3 3" />
        <line x1="260" y1="150" x2="260" y2="40" stroke="#000000" strokeOpacity="0.05" strokeDasharray="3 3" />
        <motion.circle cx="50" cy="150" r="5" fill="#3F3F46" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
        <motion.circle cx="120" cy="120" r="5" fill="#3F3F46" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
        <motion.circle cx="190" cy="140" r="5" fill="#3F3F46" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />
        <motion.circle cx="260" cy="70" r="7" fill="#E60000" className="drop-shadow-[0_2px_6px_rgba(230,0,0,0.4)]" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 1.5 }} />
        <rect x="35" y="155" width="30" height="5" rx="2" fill="#3F3F46" fillOpacity="0.2" />
        <rect x="105" y="125" width="30" height="35" rx="2" fill="#3F3F46" fillOpacity="0.2" />
        <rect x="175" y="145" width="30" height="15" rx="2" fill="#3F3F46" fillOpacity="0.2" />
        <motion.rect 
          x="245" 
          y="75" 
          width="30" 
          height="85" 
          rx="2" 
          fill="#E60000" 
          fillOpacity="0.1" 
          stroke="#E60000"
          strokeWidth="1.5"
          initial={{ height: 0, y: 160 }}
          animate={{ height: 85, y: 75 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </svg>
    </div>
  );
}

// 2. Innovative Technology SVG: Rotating orbits and quantum AI nodes
function InnovativeTechSVG() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-[#0A0505] flex items-center justify-center p-8 select-none relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:25px_25px]" />
      <svg className="w-full h-full max-h-[220px]" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle 
          cx="150" 
          cy="100" 
          r="25" 
          fill="url(#coreGlow)" 
          animate={{ r: [23, 27, 23], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF3333" />
            <stop offset="100%" stopColor="#E60000" />
          </radialGradient>
        </defs>
        <motion.ellipse 
          cx="150" cy="100" rx="75" ry="30" 
          stroke="#E60000" strokeWidth="1.5" strokeOpacity="0.4"
          animate={{ rotate: 360 }}
          style={{ originX: "150px", originY: "100px" }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.ellipse 
          cx="150" cy="100" rx="90" ry="20" 
          stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2"
          animate={{ rotate: -360 }}
          style={{ originX: "150px", originY: "100px" }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
        <motion.g animate={{ rotate: 45 }} style={{ originX: "150px", originY: "100px" }}>
          <line x1="150" y1="100" x2="80" y2="50" stroke="#E60000" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="150" y1="100" x2="220" y2="150" stroke="#E60000" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="80" cy="50" r="4" fill="#E60000" />
          <circle cx="220" cy="150" r="4" fill="#E60000" />
        </motion.g>
        <motion.g animate={{ rotate: -60 }} style={{ originX: "150px", originY: "100px" }}>
          <line x1="150" y1="100" x2="90" y2="140" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="150" y1="100" x2="210" y2="60" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2" />
          <circle cx="90" cy="140" r="3" fill="#FFFFFF" fillOpacity="0.7" />
          <circle cx="210" cy="60" r="3" fill="#FFFFFF" fillOpacity="0.7" />
        </motion.g>
      </svg>
    </div>
  );
}

// 3. Industry Expertise SVG: Connected workflow circles
function IndustryExpertiseSVG() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-neutral-50 to-[#FAF6F0] flex items-center justify-center p-8 select-none relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:15px_15px]" />
      <svg className="w-full h-full max-h-[220px]" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,50 90,140 210,140" stroke="#3F3F46" strokeWidth="1.5" strokeOpacity="0.1" strokeDasharray="4 4" />
        <motion.circle 
          cx="150" cy="110" r="28" 
          stroke="#E60000" strokeWidth="2" strokeDasharray="6 4"
          animate={{ rotate: 360 }}
          style={{ originX: "150px", originY: "110px" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="150" cy="110" r="6" fill="#E60000" />
        <circle cx="150" cy="50" r="18" fill="#FFFFFF" stroke="#3F3F46" strokeWidth="1.5" />
        <path d="M145,50 H155 M150,45 V55" stroke="#E60000" strokeWidth="2" strokeLinecap="round" />
        <circle cx="90" cy="140" r="18" fill="#FFFFFF" stroke="#3F3F46" strokeWidth="1.5" />
        <circle cx="90" cy="140" r="4" fill="#3F3F46" />
        <circle cx="210" cy="140" r="18" fill="#FFFFFF" stroke="#3F3F46" strokeWidth="1.5" />
        <path d="M205,140 H215" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// 4. Scalability SVG: Vertical isometric database node stack
function ScalabilitySVG() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-neutral-50 to-[#FAF6F0] flex items-center justify-center p-8 select-none relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:20px_20px]" />
      <svg className="w-full h-full max-h-[220px]" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3">
          <path d="M150,140 L210,110 L150,80 L90,110 Z" fill="#3F3F46" />
          <path d="M90,110 L90,125 L150,155 L150,140 Z" fill="#27272A" />
          <path d="M150,140 L150,155 L210,125 L210,110 Z" fill="#52525B" />
        </g>
        <g opacity="0.6">
          <path d="M150,105 L210,75 L150,45 L90,75 Z" fill="#3F3F46" />
          <path d="M90,75 L90,90 L150,120 L150,105 Z" fill="#27272A" />
          <path d="M150,105 L150,120 L210,90 L210,75 Z" fill="#52525B" />
        </g>
        <g>
          <path d="M150,70 L210,40 L150,10 L90,40 Z" fill="#E60000" fillOpacity="0.2" stroke="#E60000" strokeWidth="1.5" />
          <path d="M90,40 L90,55 L150,85 L150,70 Z" fill="#E60000" fillOpacity="0.4" stroke="#E60000" strokeWidth="1.5" />
          <path d="M150,70 L150,85 L210,55 L210,40 Z" fill="#E60000" fillOpacity="0.6" stroke="#E60000" strokeWidth="1.5" />
        </g>
        <motion.line 
          x1="150" y1="140" x2="150" y2="10" 
          stroke="#E60000" strokeWidth="2.5" strokeDasharray="8 6"
          animate={{ strokeDashOffset: -50 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="drop-shadow-[0_0_8px_rgba(230,0,0,0.5)]"
        />
      </svg>
    </div>
  );
}

const renderIllustration = (itemId) => {
  switch (itemId) {
    case '01':
      return <CostEffectivenessSVG />;
    case '02':
      return <InnovativeTechSVG />;
    case '03':
      return <IndustryExpertiseSVG />;
    case '04':
      return <ScalabilitySVG />;
    default:
      return null;
  }
};

export default function ServicesCarousel({ eyebrow, title, items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handleTabClick = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

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
    <section 
      className="pt-20 pb-10 bg-[#DACAA4] border-b border-black/[0.04]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Heading + Tab List (tighter padding & spacing, "minute gaps") */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold text-red-700 uppercase tracking-[0.25em]">{eyebrow}</span>
              <h2 className="text-3xl lg:text-4xl font-black text-neutral-950 tracking-tight leading-tight">{title}</h2>
            </div>

            <div className="flex flex-col gap-2">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                const IconComp = item.icon;
                return (
                  <button
                    key={item.id ?? item.title}
                    onClick={() => handleTabClick(index)}
                    aria-current={isActive}
                    className={cn(
                      'group relative flex items-start gap-4 p-4 text-left transition-all duration-300 rounded-xl border',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2',
                      isActive 
                        ? 'bg-white border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-neutral-950' 
                        : 'bg-white/35 border-white/20 text-neutral-750 hover:text-neutral-950 hover:bg-white/50 hover:border-white/35'
                    )}
                  >
                    {/* Active Accent Left Border Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-3 bottom-3 w-[3px] bg-red-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

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
                            <p className="text-neutral-600 text-sm leading-relaxed max-w-sm pt-1">
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

          {/* Right: 3D Stacked Deck Gallery (Accenture-inspired physical card shuffler) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 py-4">
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-w-[600px] mx-auto group/showcase"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Outer frame matching design styling */}
              <div className="relative w-full h-full p-4 sm:p-6 rounded-[2rem] border border-white/30 bg-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-stretch transition-all duration-500">
                
                {/* Core Pile Container */}
                <div className="relative w-full h-full">
                  
                  {items.map((item, index) => {
                    const isActive = activeIndex === index;
                    
                    // Determine index offset relative to activeIndex
                    const indexOffset = index - activeIndex;
                    
                    // Style attributes for physical stacked card shuffler
                    // Active card sits flat, inactive cards stack underneath with offsets and slight rotation
                    let rotateDeg = indexOffset * -3; 
                    let yTranslate = indexOffset * 12;
                    let xTranslate = indexOffset * 10;
                    let zIndex = items.length - Math.abs(indexOffset);
                    let opacityVal = isActive ? 1 : 0.4 - Math.abs(indexOffset) * 0.1;
                    
                    if (isActive) {
                      rotateDeg = 0;
                      yTranslate = 0;
                      xTranslate = 0;
                      zIndex = items.length + 5;
                      opacityVal = 1;
                    }

                    return (
                      <motion.div
                        key={item.id ?? item.title}
                        className={cn(
                          "absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-lg border border-black/[0.08] bg-white cursor-pointer origin-bottom-right flex flex-col items-stretch",
                          isActive ? "ring-2 ring-red-600/20" : ""
                        )}
                        style={{ zIndex }}
                        animate={{
                          rotate: rotateDeg,
                          x: xTranslate,
                          y: yTranslate,
                          scale: isActive ? 1 : 0.95,
                          opacity: opacityVal
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 220,
                          damping: 24
                        }}
                        onClick={() => handleTabClick(index)}
                      >
                        {item.id === '01' ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover select-none"
                          />
                        ) : (
                          renderIllustration(item.id)
                        )}

                      </motion.div>
                    );
                  })}

                </div>

                {/* Float Controls (Bottom Left for visual balance with stack origin bottom right) */}
                <div className="absolute bottom-6 left-6 flex gap-2 z-30">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm border border-black/[0.06] flex items-center justify-center text-neutral-900 shadow-md hover:bg-white hover:scale-105 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    aria-label="Previous service"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
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
