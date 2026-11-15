'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/images';

export default function TickerCounter() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-16 md:py-28 border-y border-white/10">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-10">
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-l border-white/15 pl-4 md:pl-6"
            >
              <p className="font-display italic text-[clamp(36px,6vw,96px)] leading-none tracking-[-0.03em] text-[var(--color-blush)]">
                {s.k}
              </p>
              <p className="mt-3 md:mt-4 text-[11px] md:text-[13px] uppercase tracking-[0.18em] md:tracking-[0.2em] text-[var(--color-paper)]/70">
                {s.l}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
