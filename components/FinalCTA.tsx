'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ArrowUpRight } from 'lucide-react';
import { IMG } from '@/lib/images';
import { SITE } from '@/lib/site';
import PlaceholderLabel from './PlaceholderLabel';

export default function FinalCTA() {
  return (
    <section className="relative h-[82vh] min-h-[520px] md:min-h-[640px] overflow-hidden">
      <Image
        src={IMG.statementBath}
        alt="Pflegeritual am Fuß"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
      <PlaceholderLabel position="top-right" tone="light" />
      <div className="absolute inset-0 container-x flex flex-col justify-end pb-16 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] uppercase tracking-[0.3em] text-white/70"
        >
          Jetzt einen Termin
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 md:mt-8 font-display text-white text-[clamp(44px,10vw,180px)] leading-[0.92] tracking-[-0.02em] balance max-w-[14ch]"
        >
          Lass uns deine Füße{' '}
          <span className="italic text-[var(--color-blush)]">kennenlernen.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link href="/kontakt" className="btn bg-white text-[var(--color-ink)] hover:bg-[var(--color-blush)]">
            Termin vereinbaren
            <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>
          <a href={SITE.phoneHref} className="btn border border-white/40 text-white hover:bg-white/10">
            <Phone size={15} strokeWidth={1.8} />
            {SITE.phoneDisplay}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
