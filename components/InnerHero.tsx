'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  image: string;
  imageAlt: string;
  tone?: 'dark' | 'light';
};

export default function InnerHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  tone = 'dark',
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const textColor = tone === 'dark' ? 'text-white' : 'text-[var(--color-ink)]';
  const subColor = tone === 'dark' ? 'text-white/80' : 'text-[var(--color-ink-80)]';
  const labelColor = tone === 'dark' ? 'text-white/70' : 'text-[var(--color-ink-60)]';

  return (
    <section ref={ref} className="relative h-[78vh] min-h-[560px] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        {tone === 'dark' ? (
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/80" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-white/60" />
        )}
      </motion.div>

      <div className="relative container-x h-full flex flex-col justify-end pb-20 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] ${labelColor}`}
        >
          <span className={`w-6 h-px ${tone === 'dark' ? 'bg-white/40' : 'bg-black/30'}`} />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-8 font-display ${textColor} text-[clamp(52px,10vw,160px)] leading-[0.9] tracking-[-0.02em] max-w-[14ch] balance`}
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-10 ${subColor} text-[clamp(16px,1.3vw,20px)] leading-[1.6] max-w-[560px] pretty`}
          >
            {lead}
          </motion.p>
        )}
      </div>
    </section>
  );
}
