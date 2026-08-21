import { ArrowRight } from 'lucide-react';

// Editorial "insights grid" card layout: title (underlines on hover like a link),
// a truncated summary paragraph, a "Know More" CTA, then a rounded image at the
// bottom of the card. Modeled on Deloitte's insights/services card grid.
export default function IndustryCardGrid({ items, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item)}
          className="group flex flex-col text-left bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nforce-red"
        >
          <h3 className="text-lg font-bold text-neutral-900 leading-snug underline-offset-4 decoration-2 group-hover:underline">
            {item.name}
          </h3>

          <p className="text-sm text-neutral-600 leading-relaxed mt-2 line-clamp-4 flex-1">
            {item.summary}
          </p>

          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-nforce-red mt-4">
            <span>Know More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>

          <div className="mt-5 rounded-xl overflow-hidden h-40">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </button>
      ))}
    </div>
  );
}
