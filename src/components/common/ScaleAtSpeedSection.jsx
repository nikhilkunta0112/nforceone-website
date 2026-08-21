import { Sparkles, ArrowRight, Star } from 'lucide-react';

// Brand promise section: reuses the "Scale at Speed" tagline (see Footer) to funnel
// visitors into the About Us page. Three-column layout (text, floating product-style
// image, stats), with the image sitting free on the background instead of in a card.
export default function ScaleAtSpeedSection({ onExplore }) {
  return (
    <section
      className="relative overflow-hidden border-b border-red-900 py-[3px] text-white"
      style={{
        backgroundImage: "url('/images/scale_at_speed_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 space-y-5 text-left">
          <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-red-100 text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Our Promise
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Scale at Speed<sup className="text-base align-super">™</sup>
            </span>
            <br />
            <span className="text-red-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">with NForceOne</span>
          </h2>

          <p className="text-red-50/85 text-base sm:text-lg leading-relaxed max-w-md">
            Blazing new trails, disrupting old ideas, and helping enterprises transform at speed
            bringing agility, resilience, and efficiency to every engagement.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onExplore}
              className="group px-8 py-4 bg-white hover:bg-red-50 text-nforce-red font-bold text-xs uppercase tracking-widest rounded shadow-md transition-all hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Know More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onExplore}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-nforce-red font-bold text-xs uppercase tracking-widest rounded transition-all"
            >
              Our Story
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:self-end">
          <img
            src="/images/about_laptop_mockup.png"
            alt="NForceOne team collaborating on a project"
            className="w-full max-w-sm lg:max-w-md h-auto object-contain"
            style={{ filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.4))' }}
          />
        </div>

        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-8 justify-center lg:items-end text-center lg:text-right">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">100+</div>
            <div className="text-xs font-bold text-red-100 uppercase tracking-wider mt-1">Enterprise Clients Served</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">99.8%</div>
            <div className="flex items-center justify-center lg:justify-end gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-red-300 text-red-300" />
              ))}
            </div>
            <div className="text-xs font-bold text-red-100 uppercase tracking-wider mt-1">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
