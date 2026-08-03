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

// 1. Cost-effectiveness: a value-vs-cost crossing chart on an engineering grid.
function CostEffectivenessSVG({ reducedMotion }) {
  const bars = [
    { x: 44, h: 28, tone: 0 },
    { x: 84, h: 46, tone: 0 },
    { x: 124, h: 34, tone: 0 },
    { x: 164, h: 62, tone: 1 },
    { x: 204, h: 50, tone: 1 },
    { x: 244, h: 78, tone: 1 },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-br from-neutral-50 to-[#FAF6F0] flex items-center justify-center p-5 select-none relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#E60000]/10 blur-3xl" />
      <svg className="w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <FrameCorners stroke="#00000022" />
        <DiagramTag label="FIG.01 — COST/VALUE" color="#00000055" />

        {bars.map((b, i) => (
          <motion.rect
            key={b.x}
            x={b.x}
            width="24"
            rx="2"
            fill={b.tone ? '#E60000' : '#3F3F46'}
            fillOpacity={b.tone ? 0.16 : 0.12}
            stroke={b.tone ? '#E60000' : '#3F3F46'}
            strokeOpacity={b.tone ? 0.5 : 0.25}
            strokeWidth="1"
            initial={reducedMotion ? false : { height: 0, y: 168 }}
            animate={{ height: b.h, y: 168 - b.h }}
            transition={{ duration: 0.7, delay: reducedMotion ? 0 : i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}

        <path d="M30 55 L270 150" stroke="#3F3F46" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 4" />

        <motion.path
          d="M30 168 L90 128 L140 140 L190 88 L230 96 L270 40"
          stroke="#E60000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_2px_8px_rgba(230,0,0,0.35)]"
          initial={reducedMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        {[[30, 168], [90, 128], [140, 140], [190, 88], [230, 96]].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="3.5" fill="#171717" />
        ))}
        <motion.circle
          cx="270"
          cy="40"
          r="6"
          fill="#E60000"
          className="drop-shadow-[0_2px_6px_rgba(230,0,0,0.5)]"
          animate={reducedMotion ? {} : { scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

// 2. Innovative Technology: layered orbital core — the section's dark, high-drama beat.
function InnovativeTechSVG({ reducedMotion }) {
  const nodes = [
    [150, 25], [223, 47], [255, 100], [223, 153],
    [150, 175], [77, 153], [45, 100], [77, 47],
  ];
  const particles = [
    [30, 20], [270, 30], [20, 170], [280, 165], [55, 65], [245, 135], [40, 120], [260, 55], [150, 15], [150, 185],
  ];
  return (
    <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-[#140606] to-[#0A0505] flex items-center justify-center p-5 select-none relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:22px_22px]" />
      <svg className="w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <FrameCorners stroke="#ffffff22" />
        <DiagramTag label="FIG.02 — CORE MESH" color="#ffffff40" />

        {particles.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.2" fill="#FFFFFF" fillOpacity="0.35" />
        ))}

        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF4444" />
            <stop offset="100%" stopColor="#B00000" />
          </radialGradient>
        </defs>

        <motion.ellipse cx="150" cy="100" rx="95" ry="34" stroke="#DACAA4" strokeWidth="1" strokeOpacity="0.35"
          animate={reducedMotion ? {} : { rotate: -360 }} style={{ originX: '150px', originY: '100px' }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} />
        <motion.ellipse cx="150" cy="100" rx="78" ry="28" stroke="#E60000" strokeWidth="1.5" strokeOpacity="0.45"
          animate={reducedMotion ? {} : { rotate: 360 }} style={{ originX: '150px', originY: '100px' }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }} />
        <motion.ellipse cx="150" cy="100" rx="55" ry="55" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.15"
          animate={reducedMotion ? {} : { rotate: -360 }} style={{ originX: '150px', originY: '100px' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />

        {nodes.map(([x, y], i) => (
          <g key={`${x}-${y}`}>
            <line x1="150" y1="100" x2={x} y2={y} stroke="#E60000" strokeWidth="1" strokeOpacity="0.25" />
            <motion.circle cx={x} cy={y} r={i % 2 ? 3 : 4} fill={i % 2 ? '#DACAA4' : '#FFFFFF'} fillOpacity="0.85"
              animate={reducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }} />
          </g>
        ))}

        <motion.circle cx="150" cy="100" r="26" fill="url(#coreGlow)"
          initial={{ r: 26, opacity: 0.85 }}
          animate={reducedMotion ? {} : { r: [24, 29, 24], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
        <circle cx="150" cy="100" r="8" fill="#FFF" fillOpacity="0.9" />
      </svg>
    </div>
  );
}

// 3. Industry Expertise: hub-and-spoke network with cross-links between verticals.
function IndustryExpertiseSVG({ reducedMotion }) {
  const outer = [
    { x: 150, y: 34, glyph: 'plus' },
    { x: 238, y: 82, glyph: 'bars' },
    { x: 210, y: 168, glyph: 'dot' },
    { x: 90, y: 168, glyph: 'dot' },
    { x: 62, y: 82, glyph: 'signal' },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-br from-neutral-50 to-[#FAF6F0] flex items-center justify-center p-5 select-none relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:16px_16px]" />
      <svg className="w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <FrameCorners stroke="#00000018" />
        <DiagramTag label="FIG.03 — VERTICAL NET" color="#00000050" />

        <polygon points="150,34 238,82 210,168 90,168 62,82" stroke="#3F3F46" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="3 4" />

        {outer.map((n, i) => {
          const next = outer[(i + 1) % outer.length];
          return <line key={`x-${n.x}`} x1={n.x} y1={n.y} x2={next.x} y2={next.y} stroke="#3F3F46" strokeOpacity="0.08" strokeWidth="1" />;
        })}
        {outer.map((n) => (
          <line key={`s-${n.x}`} x1="150" y1="102" x2={n.x} y2={n.y} stroke="#E60000" strokeOpacity="0.3" strokeWidth="1.25" />
        ))}

        <motion.circle cx="150" cy="102" r="30" stroke="#E60000" strokeWidth="2" strokeDasharray="6 5"
          animate={reducedMotion ? {} : { rotate: 360 }} style={{ originX: '150px', originY: '102px' }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }} />
        <circle cx="150" cy="102" r="7" fill="#E60000" />

        {outer.map((n) => (
          <g key={`node-${n.x}`}>
            <circle cx={n.x} cy={n.y} r="17" fill="#FFFFFF" stroke="#3F3F46" strokeOpacity="0.25" strokeWidth="1.5" />
            {n.glyph === 'plus' && <path d={`M${n.x - 5} ${n.y} H${n.x + 5} M${n.x} ${n.y - 5} V${n.y + 5}`} stroke="#E60000" strokeWidth="2" strokeLinecap="round" />}
            {n.glyph === 'bars' && (
              <g stroke="#3F3F46" strokeWidth="2" strokeLinecap="round">
                <line x1={n.x - 5} y1={n.y + 4} x2={n.x - 5} y2={n.y - 2} />
                <line x1={n.x} y1={n.y + 4} x2={n.x} y2={n.y - 6} />
                <line x1={n.x + 5} y1={n.y + 4} x2={n.x + 5} y2={n.y + 1} />
              </g>
            )}
            {n.glyph === 'signal' && (
              <g stroke="#3F3F46" strokeWidth="1.75" fill="none" strokeLinecap="round">
                <path d={`M${n.x - 6} ${n.y + 5} a 8 8 0 0 1 12 0`} />
                <path d={`M${n.x - 3} ${n.y + 5} a 4 4 0 0 1 6 0`} />
                <circle cx={n.x} cy={n.y + 5} r="1.4" fill="#3F3F46" />
              </g>
            )}
            {n.glyph === 'dot' && <circle cx={n.x} cy={n.y} r="3.5" fill="#3F3F46" fillOpacity="0.5" />}
          </g>
        ))}
      </svg>
    </div>
  );
}

// 4. Scalability: stacked isometric platforms rising off a grounded floor grid.
function ScalabilitySVG({ reducedMotion }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-neutral-50 to-[#FAF6F0] flex items-center justify-center p-5 select-none relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:18px_18px]" />
      <svg className="w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <FrameCorners stroke="#00000022" />
        <DiagramTag label="FIG.04 — SCALE STACK" color="#00000055" />

        <g stroke="#3F3F46" strokeOpacity="0.1" strokeWidth="1">
          <path d="M150,182 L220,142 L150,102 L80,142 Z" />
          <path d="M150,172 L210,138 L150,104 L90,138 Z" />
        </g>

        <g opacity="0.28">
          <path d="M150,158 L210,124 L150,90 L90,124 Z" fill="#3F3F46" />
          <path d="M90,124 L90,136 L150,170 L150,158 Z" fill="#27272A" />
          <path d="M150,158 L150,170 L210,136 L210,124 Z" fill="#52525B" />
        </g>
        <g opacity="0.5">
          <path d="M150,122 L210,88 L150,54 L90,88 Z" fill="#3F3F46" />
          <path d="M90,88 L90,100 L150,134 L150,122 Z" fill="#27272A" />
          <path d="M150,122 L150,134 L210,100 L210,88 Z" fill="#52525B" />
        </g>
        <g opacity="0.75">
          <path d="M150,86 L210,52 L150,18 L90,52 Z" fill="#E60000" fillOpacity="0.18" stroke="#E60000" strokeWidth="1.25" />
          <path d="M90,52 L90,64 L150,98 L150,86 Z" fill="#E60000" fillOpacity="0.32" stroke="#E60000" strokeWidth="1.25" />
          <path d="M150,86 L150,98 L210,64 L210,52 Z" fill="#E60000" fillOpacity="0.5" stroke="#E60000" strokeWidth="1.25" />
        </g>

        <motion.line x1="150" y1="158" x2="150" y2="18" stroke="#E60000" strokeWidth="2.5" strokeDasharray="7 6"
          className="drop-shadow-[0_0_8px_rgba(230,0,0,0.5)]"
          animate={reducedMotion ? {} : { strokeDashOffset: -52 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }} />
        <motion.circle cx="150" cy="158" r="4" fill="#FFFFFF" className="drop-shadow-[0_0_6px_rgba(230,0,0,0.6)]"
          initial={{ cy: 158 }}
          animate={reducedMotion ? { cy: 18 } : { cy: [158, 18] }}
          transition={reducedMotion ? {} : { duration: 1.8, repeat: Infinity, ease: 'linear' }} />
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
