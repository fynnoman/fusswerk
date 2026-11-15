'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { IMG } from '@/lib/images';
import { SITE } from '@/lib/site';
import PlaceholderLabel from './PlaceholderLabel';

export default function KaltplasmaImmersive() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '15%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-48 bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 opacity-45">
        <Image
          src={IMG.kaltAbstract}
          alt="Abstrakte Darstellung ionisierten Gases"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)] via-transparent to-[var(--color-ink)]" />
        <PlaceholderLabel position="top-right" tone="light" />
      </motion.div>

      <div className="container-x relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[var(--color-blush)]"
        >
          <Sparkles size={14} />
          Neu · ab {SITE.startKaltplasma}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-10 font-display text-[clamp(48px,11vw,200px)] leading-[0.9] tracking-[-0.02em] balance max-w-[12ch]"
        >
          Der vierte{' '}
          <span className="italic text-[var(--color-blush)]">Aggregatzustand.</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-5 text-[clamp(17px,1.4vw,22px)] leading-[1.6] text-[var(--color-paper)]/85 pretty"
          >
            Kaltes Plasma. Ein ionisiertes Gas, erzeugt durch elektrische Entladung.
            Es wirkt antimikrobiell, regt den Zellstoffwechsel an und stimuliert
            Regenerationsprozesse. Ohne Strahlung. Ohne Schmerz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {[
                ['01', 'Antimikrobiell', 'Zellstrukturen der Pilze werden inaktiviert.'],
                ['02', 'Regenerativ', 'Mehr Sauerstoff, bessere Mikrozirkulation.'],
                ['03', 'Entzündungsregulierend', 'Reaktive Spezies greifen gezielt an.'],
                ['04', 'Schmerzfrei', 'Körperwarm. Überdosierung unmöglich.'],
              ].map(([n, t, b]) => (
                <li key={n} className="py-5 md:py-6 flex md:grid md:grid-cols-12 gap-4 items-start md:items-baseline">
                  <span className="shrink-0 md:col-span-1 num-badge !text-[22px] !text-[var(--color-blush)]">
                    {n}
                  </span>
                  <div className="flex-1 md:col-span-11 md:grid md:grid-cols-11 md:gap-4">
                    <span className="md:col-span-4 block font-display text-[20px] md:text-[clamp(20px,1.8vw,28px)] leading-tight tracking-[-0.02em]">
                      {t}
                    </span>
                    <span className="md:col-span-7 block mt-2 md:mt-0 text-[14.5px] md:text-[15px] leading-[1.55] md:leading-[1.6] text-[var(--color-paper)]/70">
                      {b}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/kaltplasmatherapie"
              className="mt-10 inline-flex items-center gap-2 text-[var(--color-blush)] font-medium group"
            >
              Zur Kaltplasmatherapie
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
