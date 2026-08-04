import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// 3D flip card: front shows the service photo + name clearly, back reveals
// the description and key capabilities. Flips on hover (desktop) and on
// keyboard focus (so tabbing to the card previews the back before activating).
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
      className="group relative h-[424px] w-full [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsFlipped(false);
      }}
    >
      <div
        className={cn(
          'relative h-full w-full [transform-style:preserve-3d] transition-all duration-700',
          isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
        )}
      >
        {/* Front: photo + service name, unambiguous at a glance */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full [backface-visibility:hidden]',
            'overflow-hidden rounded-xl border border-zinc-900 bg-black',
            'shadow-lg transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-black/20'
          )}
        >
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-105"
          />
          {/* Scrim: scoped to the text area only, so text stays legible on any photo */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
              {eyebrow}
            </span>
            <h3 className="mt-2 text-xl font-black leading-tight tracking-tight text-white">
              {title}
            </h3>
          </div>
        </div>

        {/* Back: description + key capabilities */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]',
            'flex flex-col rounded-xl border border-zinc-900 bg-[#0A0A0A] p-6',
            'shadow-lg'
          )}
        >
          <div className="flex-1 space-y-4 overflow-hidden">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                {eyebrow}
              </span>
              <h3 className="mt-2 text-lg font-black leading-tight tracking-tight text-white">
                {title}
              </h3>
            </div>

            <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400">
              {description}
            </p>

            <ul className="space-y-2">
              {features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-xs font-medium text-zinc-300">
                  <CheckCircle2
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-400"
                    aria-hidden="true"
                  />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-sm font-bold text-white">Explore Service</span>
            <ArrowRight
              className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
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

      {/* Explicit flip toggle: hover doesn't fire on touch, so a tap on the
          card would otherwise navigate away before the back face is ever seen */}
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
