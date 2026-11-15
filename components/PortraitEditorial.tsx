'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function PortraitEditorial() {
  return (
    <section className="relative py-20 md:py-40 overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Big portrait, offset */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden">
              <Image
                src="/oliver.jpeg"
                alt="Oliver Latz, zertifizierter medizinischer Fußpfleger"
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] opacity-70">
                    Praxisinhaber
                  </p>
                  <p className="mt-1 font-display text-2xl">Oliver Latz</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] uppercase tracking-[0.22em] opacity-70">
                    seit
                  </p>
                  <p className="mt-1 font-display italic text-2xl">2022</p>
                </div>
              </div>
            </div>

            {/* Floating certification chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute right-3 md:-right-10 top-3 md:top-10 glass rounded-full px-4 md:px-5 py-2.5 md:py-3 text-[10px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.22em] text-[var(--color-ink)] max-w-[60%] md:max-w-none"
            >
              <span className="md:hidden">Zertifiziert</span>
              <span className="hidden md:inline">Zertifiziert · Fußpflege Schule Saarland</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="absolute left-3 md:-left-10 bottom-24 md:bottom-20 glass rounded-2xl px-4 md:px-5 py-3 md:py-4"
            >
              <p className="num-badge !text-[30px] md:!text-[36px]">20</p>
              <p className="mt-1 text-[10px] md:text-[12px] uppercase tracking-[0.18em] md:tracking-[0.2em] text-[var(--color-ink-60)]">
                Jahre Rettungsdienst
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <p className="eyebrow">Hinter der Praxis</p>
            <h2 className="mt-8 font-display text-[clamp(38px,7vw,112px)] leading-[0.98] tracking-[-0.035em] balance">
              Medizin, die{' '}
              <span className="italic text-[var(--color-jade)]">zuhört.</span>
            </h2>
            <blockquote className="mt-10 font-display italic text-[clamp(20px,2vw,28px)] leading-[1.4] text-[var(--color-ink-80)] pretty border-l-2 border-[var(--color-jade)] pl-6">
              „Mir geht es nicht nur um die richtige Pflege. Mir ist es wichtig, durch
              gemeinsame Gespräche den Fußproblemen auf den Grund zu gehen.&#8220;
            </blockquote>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[var(--color-ink-10)] pt-8">
              {[
                ['DRK', 'Rettungswache'],
                ['Uniklinik', 'Anästhesie Homburg'],
                ['Saarland', 'Fußpflege Schule'],
              ].map(([k, v]) => (
                <div key={k} className="flex sm:block items-baseline gap-3">
                  <p className="font-display text-[22px] italic text-[var(--color-jade)] leading-tight shrink-0">
                    {k}
                  </p>
                  <p className="sm:mt-2 text-[12.5px] uppercase tracking-[0.18em] text-[var(--color-ink-60)]">
                    {v}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/ueber-mich"
              className="mt-10 inline-flex items-center gap-2 text-[var(--color-ink)] font-medium group"
            >
              Zur vollständigen Geschichte
              <ArrowUpRight size={16} strokeWidth={1.8} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
