import React, { useState, useEffect, useRef } from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const getTagColor = (tag) => {
  const t = tag ? tag.toLowerCase() : '';
  if (t.includes('qa') || t.includes('test')) return 'bg-[#5c1d24]/30 text-[#FF858F] border-[#FF858F]/20';
  if (t.includes('eng') || t.includes('dev')) return 'bg-[#1d3e5c]/30 text-[#85C4FF] border-[#85C4FF]/20';
  if (t.includes('cloud') || t.includes('infra') || t.includes('bpm')) return 'bg-[#1b4c26]/30 text-[#85FFA9] border-[#85FFA9]/20';
  return 'bg-[#5c491d]/30 text-[#FFE785] border-[#FFE785]/20';
};

// Canvas background for the card rendering glowing horizontal speed trails (matching logo trails)
function CardLogoBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const trails = [];
    const count = 18; // clean density for card space

    for (let i = 0; i < count; i++) {
      trails.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 120 + 60,
        speed: Math.random() * 1.5 + 0.5,
        thickness: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.25 + 0.08,
        color: Math.random() > 0.4 ? 'rgba(230, 0, 0, ' : 'rgba(218, 202, 164, ' // red or gold-sand accent
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < count; i++) {
        const t = trails[i];
        
        ctx.beginPath();
        ctx.moveTo(t.x, t.y);
        ctx.lineTo(t.x + t.length, t.y);
        ctx.strokeStyle = `${t.color}${t.alpha})`;
        ctx.lineWidth = t.thickness;
        ctx.stroke();

        t.x += t.speed;

        if (t.x > canvas.width) {
          t.x = -t.length;
          t.y = Math.random() * canvas.height;
          t.speed = Math.random() * 1.5 + 0.5;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-85 z-0"
    />
  );
}

// Calculate transition offset classes using hardware-accelerated CSS properties
const getOffsetClass = (index, active, total) => {
  if (index === active) {
    return 'translate-x-0 opacity-100 scale-100 z-10';
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

export default function CoreSolutionsCarousel({ items, onSelect }) {
  const [active, setActive] = useState(0);

  const activeRef = useRef(active);
  useEffect(() => { activeRef.current = active; }, [active]);

  const handleChange = (index) => {
    if (index === activeRef.current) return;
    setActive(index);
  };

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Preload all solution images up front to cache them in browser memory
  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [items]);

  // Unconditional, freeze-proof 3-second auto-scroll loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  const current = items[active];

  return (
    <div className="w-full bg-gradient-to-br from-[#2D0B0B] via-[#120404] to-black border border-white/10 rounded-xl p-6 md:p-10 shadow-2xl shadow-black/40 relative overflow-hidden transition-all duration-300">
      {/* Animated horizontal speed trails backdrop */}
      <CardLogoBackground />

      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 relative z-10">
        
        {/* Left: Text & Content Block */}
        <div className="flex-1 min-w-0 flex flex-col justify-between relative z-10">
          {/* Prevent height jumps across screen sizes by locking min-height on all layouts */}
          <div className="min-w-0 min-h-[260px] sm:min-h-[180px] lg:min-h-[220px]">
            {/* Slide Header */}
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {current.title}
            </h3>

            {/* Description Body */}
            <div className="mt-4">
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl">
                {current.summary}
              </p>
            </div>
          </div>

          {/* Primary CTA (Button) */}
          <div className="mt-8 relative z-20">
            <button
              onClick={() => onSelect(current.id)}
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-950 font-bold uppercase tracking-wider text-[10px] px-5 py-3 rounded-md transition-all active:scale-98 shadow-sm"
            >
              <span>Know More</span>
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Large Image Card / Component (Pure hardware-accelerated CSS translation to prevent stuttering) */}
        <div className="w-full lg:w-[480px] aspect-[16/10] rounded-xl border border-white/10 bg-black/50 shadow-sm shrink-0 overflow-hidden select-none relative z-10">
          {items.map((item, index) => {
            const ActiveComponent = item.component;
            const offsetClass = getOffsetClass(index, active, items.length);
            
            if (ActiveComponent) {
              return (
                <ActiveComponent
                  key={item.id ?? index}
                  className={cn(
                    "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out",
                    offsetClass
                  )}
                />
              );
            }
            
            return (
              <img
                key={item.id ?? index}
                src={item.image}
                alt={item.title}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-700 ease-in-out",
                  offsetClass
                )}
              />
            );
          })}
        </div>

      </div>

      {/* Footer Navigation (Thin Segment tracker & Arrows) */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
        
        {/* Index indicator segments */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            {items.map((item, index) => {
              const isSelected = index === active;
              return (
                <button
                  key={item.id ?? index}
                  onClick={() => handleChange(index)}
                  className="py-2 focus-visible:outline-none"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div 
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      isSelected ? "w-6 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"
                    )}
                  />
                </button>
              );
            })}
          </div>
          
          <span className="text-xs font-bold text-zinc-400 tabular-nums">
            {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
        </div>

        {/* Minimalist Navigation Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrev}
            aria-label="Previous solution"
            className="p-2 rounded-md border border-white/10 bg-white/5 text-white hover:bg-white/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
              <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next solution"
            className="p-2 rounded-md border border-white/10 bg-white/5 text-white hover:bg-white/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700"
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
