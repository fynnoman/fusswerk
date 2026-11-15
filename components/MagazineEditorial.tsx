'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { IMG } from '@/lib/images';
import PlaceholderLabel from './PlaceholderLabel';

export default function MagazineEditorial() {
  return (
    <section className="relative py-20 md:py-40 overflow-hidden">
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="eyebrow"
        >
          Essay · Kapitel Eins
        </motion.p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Headline left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-[clamp(38px,8vw,140px)] leading-[0.95] tracking-[-0.02em] balance">
              Unsere Füße tragen
              <br />
              uns ein{' '}
              <span className="italic text-[var(--color-jade)]">Leben lang.</span>
            </h2>
          </motion.div>

          {/* Image right, bleeds */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 relative aspect-[4/5] rounded-[28px] overflow-hidden"
          >
            <Image
              src={IMG.statementStones}
              alt="Ruhige Spa-Umgebung mit natürlichem Licht"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <PlaceholderLabel position="top-right" tone="light" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-xl p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-60)]">
                Ritual der Ruhe
              </p>
              <p className="mt-1 font-display italic text-lg">Pflege als Pause.</p>
            </div>
          </motion.div>
        </div>

        {/* Body text with drop cap */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-5 lg:col-start-2 order-2 lg:order-none"
          >
            <p className="first-letter:font-display first-letter:italic first-letter:text-[64px] md:first-letter:text-[80px] first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[var(--color-jade)] text-[16.5px] md:text-[18px] leading-[1.7] md:leading-[1.75] text-[var(--color-ink-80)] pretty">
              Sie leisten Schwerstarbeit, ohne jemals eine Pause zu bekommen. Tagein,
              tagaus tragen sie unser Gewicht. Sie ertragen Trockenheit, Feuchtigkeit
              und die immer währende Dunkelheit in unserem Schuhwerk. Und doch werden
              sie am wenigsten beachtet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <blockquote className="font-display italic text-[clamp(22px,2.2vw,32px)] leading-[1.35] text-[var(--color-ink)] balance border-l-2 border-[var(--color-jade)] pl-6 md:pl-8">
              „Die Wenigsten gönnen ihren Füßen die notwendige Erholung. Hier bekommen
              sie sie.&#8220;
            </blockquote>
            <p className="mt-6 text-[14px] uppercase tracking-[0.22em] text-[var(--color-ink-60)]">
              Oliver Latz · Praxisinhaber
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
