import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Backgrounds stay near-opaque so the label reads at consistent contrast over any photo,
// not just the darker ones — a translucent pill loses the text against bright imagery.
const getTagColor = (tag) => {
  const t = tag ? tag.toLowerCase() : '';
  if (t.includes('qa') || t.includes('test')) return 'bg-[#3D1216]/95 text-[#FF9BA3] border-[#FF858F]/25';
  if (t.includes('eng') || t.includes('dev')) return 'bg-[#12233D]/95 text-[#9ACEFF] border-[#85C4FF]/25';
  if (t.includes('cloud') || t.includes('infra') || t.includes('bpm')) return 'bg-[#12331A]/95 text-[#9CFFB8] border-[#85FFA9]/25';
  return 'bg-[#3D2F12]/95 text-[#FFE79C] border-[#FFE785]/25';
};

// Canvas background for the card rendering glowing horizontal speed trails (matching logo trails)
function CardLogoBackground({ reducedMotion }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const size = () => ({
      w: canvas.parentElement?.clientWidth || 0,
      h: canvas.parentElement?.clientHeight || 0,
    });

    const resizeCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = window.devicePixelRatio || 1;
      const { w, h } = size();
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const count = 18; // clean density for card space
    const { w, h } = size();
    const trails = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      length: Math.random() * 120 + 60,
      speed: Math.random() * 1.5 + 0.5,
      thickness: Math.random() * 1.5 + 0.6,
      alpha: Math.random() * 0.25 + 0.08,
      color: Math.random() > 0.4 ? 'rgba(230, 0, 0, ' : 'rgba(218, 202, 164, ' // red or gold-sand accent
    }));

    const drawFrame = () => {
      const { w: cw, h: ch } = size();
      ctx.clearRect(0, 0, cw, ch);
      trails.forEach((t) => {
        ctx.beginPath();
        ctx.moveTo(t.x, t.y);
        ctx.lineTo(t.x + t.length, t.y);
        ctx.strokeStyle = `${t.color}${t.alpha})`;
        ctx.lineWidth = t.thickness;
        ctx.stroke();
      });
    };

    if (reducedMotion) {
      // Draw a single still frame instead of a continuous loop.
      drawFrame();
      return () => window.removeEventListener('resize', resizeCanvas);
    }

    const animate = () => {
      const { w: cw } = size();
      drawFrame();
      trails.forEach((t) => {
        t.x += t.speed;
        if (t.x > cw) {
          t.x = -t.length;
          t.y = Math.random() * size().h;
          t.speed = Math.random() * 1.5 + 0.5;
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.85] z-0"
    />
  );
}

// Calculate transition offset classes using hardware-accelerated CSS properties
const getOffsetClass = (index, active, total, reducedMotion) => {
  if (index === active) {
    return reducedMotion ? 'opacity-100 z-10' : 'translate-x-0 opacity-100 scale-100 z-10';
  }

  if (reducedMotion) {
    return 'opacity-0 z-0 pointer-events-none';
  }

  // Calculate shortest circular wrapping path
  let diff = index - active;
  if (diff === -(total - 1)) diff = 1;
  if (diff === (total - 1)) diff = -1;

  if (diff > 0) {
    return 'translate-x-12 opacity-0 scale-[1.02] z-0 pointer-events-none';
  } else {
    return '-translate-x-12 opacity-0 scale-[1.02] z-0 pointer-events-none';
  }
};

export default function CoreSolutionsCarousel({ items, onSelect, ariaLabel = 'Featured industry solutions' }) {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const [isManuallyPaused, setIsManuallyPaused] = useState(() => Boolean(prefersReducedMotion));

  const activeRef = useRef(active);
  useEffect(() => { activeRef.current = active; }, [active]);

  const handleChange = (index) => {
    if (index === activeRef.current) return;
    setActive(index);
  };

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = useCallback(() => {
    setActive((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  // Preload all solution images up front to cache them in browser memory
  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [items]);

  // Pause autoplay while the tab is hidden so slides don't jump ahead unseen.
  useEffect(() => {
    const handleVisibility = () => setIsPageVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const isPaused = isHovering || isFocused || isManuallyPaused || !isPageVisible;

  // Freeze-proof auto-scroll loop: pauses on hover, keyboard focus, a hidden tab, or the manual toggle.
  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const current = items[active];
  const tagClasses = getTagColor(current.tag);
  const TagIcon = current.icon;

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsFocused(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); handlePrev(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); handleNext(); }
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      className="w-full bg-white border border-black/10 rounded-xl p-6 md:p-10 shadow-2xl shadow-black/10 relative overflow-hidden transition-all duration-300"
    >
      {/* Announces slide changes to screen readers without moving focus */}
      <span className="sr-only" aria-live="polite">
        {`Slide ${active + 1} of ${items.length}: ${current.title}`}
      </span>

      {/* Animated horizontal speed trails backdrop */}
      <CardLogoBackground reducedMotion={prefersReducedMotion} />

      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 relative z-10">

        {/* Left: Text & Content Block */}
        <div className="flex-1 min-w-0 flex flex-col justify-between relative z-10">
          {/* Prevent height jumps across screen sizes by locking min-height on all layouts */}
          <div className="min-w-0 min-h-[260px] sm:min-h-[180px] lg:min-h-[220px]">
            {/* Slide Header */}
            <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
              {current.title}
            </h3>

            {/* Description Body */}
            <div className="mt-4">
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl">
                {current.summary}
              </p>
            </div>
          </div>

          {/* Primary CTA (Button) */}
          <div className="mt-8 relative z-20">
            <button
              type="button"
              onClick={() => onSelect(current.id)}
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold uppercase tracking-wider text-[10px] px-5 py-3 rounded-md transition-all active:scale-[0.98] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nforce-red focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <span>Know More</span>
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Large Image Card / Component (Pure hardware-accelerated CSS translation to prevent stuttering) */}
        <div className="w-full lg:w-[480px] aspect-[16/10] rounded-xl border border-black/10 bg-neutral-100 shadow-sm shrink-0 overflow-hidden select-none relative z-10">
          {TagIcon && (
            <div
              className={cn(
                'absolute top-4 left-4 z-30 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border backdrop-blur-sm pointer-events-none transition-colors duration-300',
                tagClasses
              )}
            >
              <TagIcon className="w-3 h-3" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-wider">{current.tag}</span>
            </div>
          )}

          {items.map((item, index) => {
            const ActiveComponent = item.component;
            const offsetClass = getOffsetClass(index, active, items.length, prefersReducedMotion);
            const isActiveSlide = index === active;
            const transitionClass = prefersReducedMotion
              ? 'transition-opacity duration-150'
              : 'transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]';

            if (ActiveComponent) {
              return (
                <ActiveComponent
                  key={item.id ?? index}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${items.length}`}
                  aria-hidden={!isActiveSlide}
                  className={cn('absolute inset-0 w-full h-full', transitionClass, offsetClass)}
                />
              );
            }

            return (
              <img
                key={item.id ?? index}
                src={item.image}
                alt={item.title}
                role="group"
                aria-roledescription="slide"
                aria-hidden={!isActiveSlide}
                className={cn(
                  'absolute inset-0 w-full h-full object-cover pointer-events-none',
                  transitionClass,
                  offsetClass
                )}
              />
            );
          })}
        </div>

      </div>

      {/* Footer Navigation (Thin Segment tracker & Arrows) */}
      <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4 relative z-10">

        {/* Index indicator segments */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            {items.map((item, index) => {
              const isSelected = index === active;
              return (
                <button
                  key={item.id ?? index}
                  type="button"
                  onClick={() => handleChange(index)}
                  className="py-2 px-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nforce-red focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label={`Go to slide ${index + 1}: ${item.title}`}
                  aria-current={isSelected ? 'true' : undefined}
                >
                  <div
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      isSelected ? "w-6 bg-neutral-900" : "w-1.5 bg-black/15 hover:bg-black/30"
                    )}
                  />
                </button>
              );
            })}
          </div>

          <span className="text-xs font-bold text-neutral-500 tabular-nums" aria-hidden="true">
            {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
        </div>

        {/* Minimalist Navigation Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsManuallyPaused((p) => !p)}
            aria-label={isManuallyPaused ? 'Resume automatic slideshow' : 'Pause automatic slideshow'}
            aria-pressed={isManuallyPaused}
            className="p-2 rounded-md border border-black/10 bg-black/5 text-neutral-900 hover:bg-black/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nforce-red"
          >
            {isManuallyPaused ? (
              <Play className="w-3.5 h-3.5" aria-hidden="true" />
            ) : (
              <Pause className="w-3.5 h-3.5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous solution"
            className="p-2 rounded-md border border-black/10 bg-black/5 text-neutral-900 hover:bg-black/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nforce-red"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
              <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next solution"
            className="p-2 rounded-md border border-black/10 bg-black/5 text-neutral-900 hover:bg-black/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nforce-red"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>

      </div>

    </div>
  );
}
