import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Unfold card: at rest, the service photo + name fill the card. On hover
// (desktop) or keyboard focus, the photo zooms out and settles into a fixed
// banner pinned to the top, while a red/black gradient panel below it
// smoothly unfolds to reveal the description and key capabilities.
export default function FlipCard({
  eyebrow,
  title,
  description,
  features = [],
  image,
  color = '#E60000',
  onSelect,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[424px] w-full overflow-hidden rounded-xl border border-zinc-900 bg-black shadow-lg transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/30"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsFlipped(false);
      }}
    >
      <div className="flex h-full w-full flex-col">
        {/* Photo banner: full-height at rest, zooms out and pins to the top on hover */}
        <div
          className={cn(
            'relative w-full shrink-0 overflow-hidden transition-[height] duration-500 ease-out motion-reduce:transition-none',
            isFlipped ? 'h-28' : 'h-full'
          )}
        >
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className={cn(
              'absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out motion-reduce:transition-none',
              isFlipped ? 'scale-100' : 'scale-110'
            )}
          />
          {/* Scrim: scoped to the text area only, so text stays legible on any photo */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />

          <div className={cn('absolute inset-x-0 bottom-0 transition-all duration-500', isFlipped ? 'p-3' : 'p-6')}>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
              {eyebrow}
            </span>
            <h3
              className={cn(
                'font-black leading-tight tracking-tight text-white transition-all duration-500',
                isFlipped ? 'mt-0.5 text-sm' : 'mt-2 text-xl'
              )}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Info panel: collapsed at rest, unfolds beneath the photo banner on hover */}
        <div
          className={cn(
            'relative w-full overflow-hidden transition-[height] duration-500 ease-out motion-reduce:transition-none',
            isFlipped ? 'h-[312px]' : 'h-0'
          )}
        >
          {/* Blurred red/black gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-nforce-red/50 via-[#1a0505] to-black" />
          <div className="absolute -inset-16 bg-gradient-to-tr from-nforce-red/80 via-transparent to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-black/25" />

          <div
            className={cn(
              'relative flex h-full flex-col p-5 transition-opacity duration-300 ease-out motion-reduce:transition-none',
              isFlipped ? 'opacity-100 delay-150' : 'opacity-0'
            )}
          >
            <p className="line-clamp-3 text-sm leading-relaxed text-zinc-200">
              {description}
            </p>

            <ul className="mt-3 space-y-2">
              {features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-xs font-medium text-zinc-200">
                  <CheckCircle2
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-nforce-red"
                    aria-hidden="true"
                  />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-sm font-bold text-white">Explore Service</span>
              <ArrowRight
                className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onSelect}
        className="absolute inset-0 z-20 h-full w-full cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        style={{ ['--tw-ring-color']: color }}
        aria-label={`${eyebrow}: ${title}. Click to view details.`}
      />

      {/* Explicit toggle: hover doesn't fire on touch, so a tap on the
          card would otherwise navigate away before the info panel is ever seen */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsFlipped((flipped) => !flipped);
        }}
        aria-pressed={isFlipped}
        aria-label={isFlipped ? 'Show photo' : 'Show service details'}
        className="absolute top-3 right-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        style={{ ['--tw-ring-color']: color }}
      >
        <Info className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
