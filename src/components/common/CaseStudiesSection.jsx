import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const caseStudies = [
  {
    id: 'healthcare',
    category: 'Healthcare & Telehealth',
    title: 'Leading Healthcare & Telehealth Provider',
    challenge: 'Legacy manual testing bottlenecks delaying bi-weekly feature rollouts and causing regression defects.',
    solution: 'Implemented automated CI/CD test pipelines using Playwright and containerized staging environments.',
    metrics: [
      { value: '68%', label: 'Faster Release Cycles' },
      { value: '0', label: 'P1 Production Defects Across 12 Sprints' }
    ],
    image: '/images/case_healthcare.jpg'
  },
  {
    id: 'fintech',
    category: 'FinTech & Cloud Systems',
    title: 'Global FinTech Solutions Provider',
    challenge: 'High latency and hosting bills due to unoptimized cloud infrastructure and lack of automatic provisioning.',
    solution: 'Re-architected microservices on AWS EKS, built Terraform deployment scripts, and automated serverless scaling.',
    metrics: [
      { value: '42%', label: 'Cloud Hosting Cost Reductions' },
      { value: '99.99%', label: 'High-Availability System Uptime' }
    ],
    image: '/images/case_fintech_cloud.jpg'
  },
  {
    id: 'logistics',
    category: 'Logistics & BPM Automation',
    title: 'Supply Chain & Logistics Giant',
    challenge: 'Fragmented manual routing processes resulting in warehouse delivery delays and slow tracking updates.',
    solution: 'Built a unified dispatch tracking architecture on the Pega platform with automated event routing triggers.',
    metrics: [
      { value: '3.5x', label: 'Faster Order Dispatch Rates' },
      { value: '90%', label: 'Reduction in Routing Errors' }
    ],
    image: '/images/case_logistics.jpg'
  }
];

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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.85] z-0"
    />
  );
}

export default function CaseStudiesSection() {
  const [active, setActive] = useState(0);

  const current = caseStudies[active];

  return (
    <section className="pt-10 pb-24 bg-[#DACAA4] border-b border-black/[0.04]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header & Interactive Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <span className="block text-xs font-bold text-red-700 tracking-[0.2em] uppercase">
              FEATURED CASE STUDIES
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight mt-2">
              Proven Enterprise Success
            </h2>
          </div>

          {/* Minimalist Switch Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-black/5 p-1 rounded-lg border border-black/5">
            {caseStudies.map((cs, index) => {
              const isSelected = index === active;
              return (
                <button
                  key={cs.id}
                  onClick={() => setActive(index)}
                  className={`px-4 py-2 rounded-md text-xs font-bold transition-all duration-200 ${
                    isSelected
                      ? 'bg-neutral-950 text-white shadow-sm'
                      : 'text-neutral-800 hover:text-black hover:bg-black/5'
                  }`}
                >
                  {cs.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Card Container (Dusk Red to Black Card) */}
        <div className="w-full bg-white border border-black/10 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/10 relative overflow-hidden min-h-[480px] md:min-h-[420px] flex flex-col justify-between">
          {/* Animated horizontal speed trails backdrop */}
          <CardLogoBackground />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 w-full relative z-10"
            >
              
              {/* Left Column: Metrics & Text content */}
              <div className="md:col-span-7 space-y-5">
                <span className="text-[10px] font-bold text-red-500 tracking-[0.2em] uppercase">
                  CLIENT ROI SUMMARY
                </span>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                  {current.title}
                </h3>

                <div className="space-y-3 text-sm text-neutral-600">
                  <p>
                    <strong className="text-red-600 font-bold">Challenge: </strong>
                    {current.challenge}
                  </p>
                  <p>
                    <strong className="text-red-600 font-bold">NForceOne Solution: </strong>
                    {current.solution}
                  </p>
                </div>

                {/* Metrics Blocks */}
                <div className="pt-4 flex flex-wrap items-center gap-6">
                  {current.metrics.map((metric, mi) => (
                    <div
                      key={mi}
                      className={mi > 0 ? "border-l border-black/10 pl-6" : ""}
                    >
                      <div className="text-3xl lg:text-4xl font-black text-red-600 tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-xs text-neutral-500 mt-1 max-w-[200px] leading-snug">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: High-End Mockup Image */}
              <div className="md:col-span-5 rounded-xl overflow-hidden border border-black/10 aspect-[4/3] bg-neutral-100 shrink-0 relative flex items-stretch">
                <img 
                  src={current.image} 
                  alt={current.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
