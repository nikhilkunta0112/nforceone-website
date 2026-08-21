import { useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';

// Client testimonial carousel: single-slide-at-a-time, dot-navigated, autoplay every 5s
// (pauses while a visitor is interacting with the dots), styled to match the dark
// CaseStudySection/PartnerWithUs sections it sits between on the homepage.
export default function TestimonialsSection({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  if (!items || items.length === 0) return null;

  const active = items[activeIndex];
  const initials = active.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      className="py-24 text-white border-b border-zinc-800"
      style={{ background: 'linear-gradient(to bottom, #000000 0%, #000000 45%, #200000 70%, #3A0000 100%)' }}
    >
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 bg-nforce-red/10 text-nforce-red text-xs font-bold rounded border border-nforce-red/20 uppercase tracking-[0.2em]">
          Testimonials
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-4">
          Trusted by the Teams We Scale
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-3">
          Feedback from the clients we've partnered with across quality engineering, software
          development, and enterprise automation.
        </p>

        <div className="mt-14 min-h-[280px] flex flex-col items-center justify-center">
          <Quote className="w-9 h-9 text-nforce-red/40 mb-4" />

          <p className="text-lg lg:text-2xl font-medium leading-relaxed text-zinc-100 max-w-3xl">
            &ldquo;{active.text}&rdquo;
          </p>

          <div className="flex items-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-nforce-red text-nforce-red" />
            ))}
          </div>

          <div className="flex items-center gap-3 mt-6">
            <div className="w-12 h-12 rounded-full bg-nforce-red/15 border border-nforce-red/30 flex items-center justify-center text-nforce-red font-bold text-sm shrink-0">
              {initials}
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-sm">{active.name}</div>
              <div className="text-zinc-500 text-xs">{active.role}</div>
            </div>
          </div>
        </div>

        {items.length > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial from ${item.name}`}
                aria-current={idx === activeIndex ? 'true' : undefined}
                className="p-2 -m-2"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all ${
                    idx === activeIndex ? 'w-8 bg-nforce-red' : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
