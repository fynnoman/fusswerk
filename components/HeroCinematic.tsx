'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Phone, Sparkles } from 'lucide-react';
import { SITE } from '@/lib/site';
import { IMG } from '@/lib/images';
import PlaceholderLabel from './PlaceholderLabel';

export default function HeroCinematic() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[90vh] min-h-[600px] md:min-h-[720px] w-full overflow-hidden -mt-[72px]"
    >
      {/* Image layer */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={IMG.heroFeet}
          alt="Entspannte nackte Füße in warmem Licht"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* dual gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        <PlaceholderLabel position="top-right" tone="light" />
      </motion.div>

      {/* Top meta row */}
      <motion.div
        style={{ opacity }}
        className="absolute top-24 md:top-28 left-0 right-0 z-10 container-x flex items-center justify-between text-white/70 text-[11px] md:text-[12px] uppercase tracking-[0.22em]"
      >
        <span className="inline-flex items-center gap-2">
          <span className="w-6 h-px bg-white/40" />
          Praxis St. Ingbert
        </span>
        <span className="hidden md:inline">Est. am Waldfriedhof</span>
        <span className="hidden md:inline">N 49.27° · E 7.11°</span>
      </motion.div>

      {/* Headline */}
      <div className="absolute inset-0 z-10 container-x flex flex-col justify-end pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-white text-[clamp(48px,11vw,200px)] leading-[0.9] tracking-[-0.02em] max-w-[14ch] balance">
            Jeder Schritt{' '}
            <span className="italic text-[var(--color-blush)]">verdient</span>{' '}
            Sorgfalt.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8"
        >
          <p className="text-white/85 text-[15px] md:text-[clamp(16px,1.3vw,20px)] leading-[1.55] max-w-[440px] pretty">
            Medizinische Fußpflege in St. Ingbert. Mit Zeit, Wissen und der Ruhe,
            die Füße nach einem langen Leben verdienen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn bg-white text-[var(--color-ink)] hover:bg-[var(--color-blush)] !text-[13.5px] md:!text-[15px]">
              Termin vereinbaren
            </Link>
            <a href={SITE.phoneHref} className="btn border border-white/40 text-white hover:bg-white/10 !text-[13.5px] md:!text-[15px]">
              <Phone size={15} strokeWidth={1.8} />
              {SITE.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom floating meta cards */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-4 md:bottom-6 left-0 right-0 z-10 container-x flex items-center justify-between gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/60"
      >
        <span className="inline-flex items-center gap-2">
          <Sparkles size={12} className="text-[var(--color-blush)]" />
          <span className="hidden sm:inline">Neu: Kaltplasma ab {SITE.startKaltplasma}</span>
          <span className="sm:hidden">Neu · Kaltplasma</span>
        </span>
        <span className="hidden md:inline-flex items-center gap-2 animate-pulse">
          <ArrowDown size={13} />
          Scrollen
        </span>
      </motion.div>
    </section>
  );
}
