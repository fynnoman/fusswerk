'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TREATMENTS } from '@/lib/images';
import PlaceholderLabel from './PlaceholderLabel';

export default function HorizontalTreatments() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-40 bg-[var(--color-paper-2)]">
      <div className="container-x mb-10 md:mb-16 flex items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Behandlungen</p>
          <h2 className="mt-6 font-display text-[clamp(36px,7vw,112px)] leading-[0.98] tracking-[-0.02em] balance max-w-[16ch]">
            Jede Pflege ist ein{' '}
            <span className="italic text-[var(--color-jade)]">eigenes Kapitel.</span>
          </h2>
        </motion.div>
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Vorheriges"
            className="w-12 h-12 rounded-full border border-[var(--color-ink-20)] inline-flex items-center justify-center hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition"
          >
            <ArrowLeft size={18} strokeWidth={1.6} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Nächstes"
            className="w-12 h-12 rounded-full border border-[var(--color-ink-20)] inline-flex items-center justify-center hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition"
          >
            <ArrowRight size={18} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-8 snap-x snap-mandatory scroll-px-6 md:scroll-px-10 px-6 md:px-10"
        style={{ scrollbarWidth: 'none' }}
      >
        <style jsx>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
        {TREATMENTS.map((t, i) => (
          <motion.article
            key={t.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative shrink-0 w-[85vw] sm:w-[60vw] md:w-[46vw] lg:w-[34vw] xl:w-[28vw] snap-start"
          >
            <Link href={t.href} className="block group">
              <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden bg-[var(--color-paper-3)]">
                <Image
                  src={t.img}
                  alt={t.title}
                  fill
                  sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 34vw, (min-width: 768px) 46vw, 85vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <PlaceholderLabel position="bottom-left" tone="light" />
                <span className="absolute top-5 left-5 text-[11px] uppercase tracking-[0.22em] text-white/80 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                  {t.tag}
                </span>
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-white group-hover:text-[var(--color-ink)] transition">
                  <ArrowUpRight size={16} strokeWidth={1.6} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 text-white">
                  <h3 className="font-display text-[26px] md:text-[clamp(28px,2.4vw,40px)] leading-[1.05] tracking-[-0.02em] balance">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] md:text-[14.5px] leading-[1.55] text-white/85 max-w-[360px] pretty">
                    {t.body}
                  </p>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
        <div className="shrink-0 w-4" />
      </div>
    </section>
  );
}
