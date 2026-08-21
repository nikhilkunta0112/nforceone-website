import { ArrowRight } from 'lucide-react';

// Asymmetric "hero + 2x2" bento layout modeled on Tech Mahindra's "Latest Thinking"
// section: one tall featured card plus four shorter cards in two stacked columns,
// all edge-to-edge photo cards with text over a dark overlay (no card chrome/shadow).
//
// Hover behavior matches what was confirmed on the reference: short cards hide their
// description + "Read More" link at rest and reveal them on hover (no image zoom, the
// overlay just darkens slightly); the hero card already shows them at rest so hover
// only shifts the "Read More" link color.
function SolutionCard({ item, isHero, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className={`group relative block w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nforce-red ${
        isHero ? 'h-[320px] lg:h-full lg:min-h-[560px]' : 'h-[220px] lg:h-[262px]'
      }`}
    >
      <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-colors duration-300 group-hover:from-black/90 group-hover:via-black/40" />

      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
        <h3 className="text-white font-semibold text-xl leading-snug tracking-tight">{item.title}</h3>

        {isHero ? (
          <>
            <p className="text-white/80 text-sm mt-2 leading-relaxed line-clamp-2 max-w-md">
              {item.summary}
            </p>
            <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold uppercase tracking-wide mt-4 transition-colors duration-200 ease-linear group-hover:text-red-300">
              Read More
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </>
        ) : (
          <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-out">
            <p className="text-white/80 text-sm mt-2 leading-relaxed line-clamp-2">{item.summary}</p>
            <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold uppercase tracking-wide mt-3 transition-colors duration-200 ease-linear group-hover:text-red-300">
              Read More
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        )}
      </div>
    </button>
  );
}

export default function CoreSolutionsGrid({ items, onSelect }) {
  const [hero, a, b, c, d] = items;

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-[38%] shrink-0">
        <SolutionCard item={hero} isHero onSelect={onSelect} />
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <SolutionCard item={a} onSelect={onSelect} />
          <SolutionCard item={b} onSelect={onSelect} />
        </div>
        <div className="flex flex-col gap-6">
          <SolutionCard item={c} onSelect={onSelect} />
          <SolutionCard item={d} onSelect={onSelect} />
        </div>
      </div>
    </div>
  );
}
