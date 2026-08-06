import { motion } from 'framer-motion';

// Single-row grid of vertical feature cards (all items shown at once, no pagination).
export default function ParallaxFeatureSection({ eyebrow, title, subtitle, items }) {
  return (
    <section className="bg-white text-neutral-900 border-b border-neutral-200 pt-12 pb-16">
      <div className="max-w-[1280px] mx-auto px-6 text-left">
        <div>
          <span className="text-xs font-bold text-red-600 uppercase tracking-[0.2em]">{eyebrow}</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2 max-w-2xl">{title}</h2>
          {subtitle && <p className="text-neutral-600 text-sm md:text-base max-w-2xl mt-4">{subtitle}</p>}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id ?? index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="feature-card rounded-2xl p-8 bg-nforce-cardDark border border-nforce-borderDark flex flex-col min-h-[320px]"
              >
                <div className="feature-card-content flex flex-col h-full">
                  {Icon && <Icon className="feature-icon w-8 h-8 text-red-500 mb-6" />}
                  <h3 className="text-xl font-extrabold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="feature-desc text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
