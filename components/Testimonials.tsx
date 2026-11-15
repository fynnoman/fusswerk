'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/images';
import PlaceholderLabel from './PlaceholderLabel';

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-40 bg-[var(--color-paper-2)]">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="flex items-end justify-between gap-6 flex-wrap"
        >
          <div>
            <p className="eyebrow">Was Patienten sagen</p>
            <h2 className="mt-6 font-display text-[clamp(36px,6.5vw,104px)] leading-[0.98] tracking-[-0.02em] balance max-w-[18ch]">
              Eine ruhige{' '}
              <span className="italic text-[var(--color-jade)]">Stimme</span>{' '}
              reicht manchmal.
            </h2>
          </div>
          <p className="max-w-[320px] text-[15px] leading-[1.7] text-[var(--color-ink-60)] pretty">
            Drei Stimmen aus der Praxis. Keine KI. Keine Vorlagen. Nur Menschen, die wiederkommen.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[28px] bg-[var(--color-paper)] overflow-hidden card-lift flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <PlaceholderLabel position="top-right" tone="light" />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <Quote size={22} strokeWidth={1.4} className="text-[var(--color-jade)]" />
                <p className="mt-5 text-[15.5px] md:text-[17px] leading-[1.6] text-[var(--color-ink-80)] pretty flex-1">
                  „{t.quote}&#8220;
                </p>
                <div className="mt-7 pt-6 border-t border-[var(--color-ink-10)]">
                  <p className="font-display text-xl italic">{t.name}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
