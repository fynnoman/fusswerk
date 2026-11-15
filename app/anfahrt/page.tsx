import Link from 'next/link';
import { MapPin, Car, Bus, Phone, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { HeroMesh, SoftBlob } from '@/components/Mesh';
import { Section, Eyebrow, SectionTitle } from '@/components/Section';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Anfahrt · Oliver Latz Fußpflege St. Ingbert',
  description:
    'So finden Sie zur Praxis Oliver Latz in St. Ingbert, Am Waldfriedhof. Parkplätze direkt vor der Praxis. Buslinie 524, Haltestelle Am Waldfriedhof.',
};

export default function AnfahrtPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-24">
        <HeroMesh />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>Anfahrt</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[clamp(42px,10vw,160px)] leading-[0.95] tracking-[-0.02em] balance">
              So finden Sie
              <br />
              <span className="italic text-[var(--color-jade)]">zu uns.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <Reveal className="lg:col-span-5">
            <div className="glass rounded-[var(--radius-3xl)] p-8 md:p-10 h-full">
              <MapPin size={26} strokeWidth={1.4} className="text-[var(--color-jade)]" />
              <h2 className="mt-6 font-display text-[32px] leading-tight tracking-[-0.02em]">
                Adresse
              </h2>
              <p className="mt-4 text-[17px] leading-[1.7] text-[var(--color-ink-80)]">
                {SITE.nameFull}
                <br />
                {SITE.addressStreet}
                <br />
                {SITE.addressCity}
              </p>
              <div className="mt-8 flex flex-col gap-2">
                <a href={SITE.phoneHref} className="btn btn-jade">
                  <Phone size={15} strokeWidth={1.8} /> {SITE.phoneDisplay}
                </a>
                <a
                  href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(
                    `${SITE.addressStreet}, ${SITE.addressCity}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  In Karten öffnen
                  <ArrowUpRight size={15} strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="relative aspect-[5/4] rounded-[var(--radius-3xl)] overflow-hidden bg-[var(--color-paper-2)]">
              <SoftBlob className="w-[60%] h-[60%] -top-[20%] -left-[10%]" color="rgba(215,229,219,0.9)" />
              <SoftBlob className="w-[60%] h-[60%] -bottom-[20%] -right-[10%]" color="rgba(236,201,182,0.5)" />
              {/* Decorative map motif */}
              <svg
                viewBox="0 0 400 320"
                className="absolute inset-0 w-full h-full"
                aria-hidden
              >
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14,14,12,0.08)" strokeWidth="0.6" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path
                  d="M 20 230 C 100 200, 150 220, 220 170 S 340 120, 380 90"
                  fill="none"
                  stroke="rgba(47,93,75,0.6)"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                />
                <circle cx="220" cy="170" r="10" fill="#2F5D4B" />
                <circle cx="220" cy="170" r="22" fill="#2F5D4B" opacity="0.18" />
              </svg>
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-60)]">Lage</p>
                  <p className="mt-1 font-display text-lg">Am Waldfriedhof, St. Ingbert</p>
                </div>
                <MapPin size={20} strokeWidth={1.4} className="text-[var(--color-jade)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-[var(--radius-3xl)] bg-[var(--color-paper-2)] p-10 h-full card-lift">
              <Car size={26} strokeWidth={1.4} className="text-[var(--color-jade)]" />
              <h3 className="mt-6 font-display text-[32px] leading-tight tracking-[-0.02em]">
                Mit dem Auto
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-[var(--color-ink-80)] pretty">
                Einen Parkplatz finden Sie direkt vor der Praxis. Zusätzliche
                Parkmöglichkeiten gegenüber auf dem Parkplatz des Waldfriedhofs.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[var(--radius-3xl)] bg-[var(--color-jade-tint)] p-10 h-full card-lift">
              <Bus size={26} strokeWidth={1.4} className="text-[var(--color-jade)]" />
              <h3 className="mt-6 font-display text-[32px] leading-tight tracking-[-0.02em]">
                Mit dem Bus
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-[var(--color-ink-80)] pretty">
                Mit der Linie 524. Steigen Sie an der Haltestelle „Am Waldfriedhof“
                aus. Von dort sind es wenige Schritte zur Praxis.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
