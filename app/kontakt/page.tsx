import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, Home, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { HeroMesh, SoftBlob } from '@/components/Mesh';
import { Section, Eyebrow, SectionTitle } from '@/components/Section';
import { SITE, HOURS } from '@/lib/site';

export const metadata = {
  title: 'Kontakt · Oliver Latz Fußpflege St. Ingbert',
  description:
    'Terminvereinbarung, Hausbesuche, Rückfragen. Wir sind telefonisch und per WhatsApp für Sie erreichbar.',
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-24">
        <HeroMesh />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>Kontakt</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[clamp(42px,10vw,160px)] leading-[0.95] tracking-[-0.035em] balance">
              Lassen Sie uns
              <br />
              <span className="italic text-[var(--color-jade)]">sprechen.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-[620px] text-[clamp(17px,1.25vw,20px)] leading-[1.6] text-[var(--color-ink-80)] pretty">
              Buchen Sie gerne einen Termin. Im Buchungssystem sehen Sie die
              einzelnen Leistungen und entsprechend freie Termine. Sollten keine
              freien Termine verfügbar sein, rufen Sie an, und wir finden gemeinsam
              eine Lösung.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Phone */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-[var(--radius-3xl)] bg-[var(--color-ink)] text-[var(--color-paper)] p-10 md:p-14 h-full relative overflow-hidden card-lift">
              <SoftBlob className="w-[60%] h-[60%] -top-[20%] -right-[10%]" color="rgba(47,93,75,0.5)" />
              <Phone size={28} strokeWidth={1.4} className="text-[var(--color-blush)]" />
              <p className="mt-10 text-[11px] uppercase tracking-[0.22em] text-[var(--color-paper)]/60">
                Direkt anrufen
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-4 block font-display text-[clamp(48px,7vw,104px)] leading-none tracking-[-0.03em] hover:text-[var(--color-blush)] transition-colors"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="mt-6 text-[15px] text-[var(--color-paper)]/70 max-w-[480px]">
                Montag bis Freitag erreichbar. Außerhalb der Zeiten freuen wir uns
                über eine Nachricht.
              </p>
            </div>
          </Reveal>

          {/* WhatsApp */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="rounded-[var(--radius-3xl)] bg-[var(--color-jade-tint)] p-10 h-full relative overflow-hidden card-lift">
              <SoftBlob className="w-[70%] h-[70%] -bottom-[20%] -left-[20%]" color="rgba(236,201,182,0.5)" />
              <MessageCircle size={28} strokeWidth={1.4} className="text-[var(--color-jade)]" />
              <h3 className="mt-8 font-display text-[clamp(28px,3vw,42px)] leading-tight tracking-[-0.02em]">
                Schreiben Sie uns
                <br />
                <span className="italic text-[var(--color-jade)]">via WhatsApp.</span>
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[var(--color-ink-80)] pretty">
                Schnell, unkompliziert, auch für kurze Rückfragen.
              </p>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-8 btn btn-primary"
              >
                WhatsApp öffnen
                <ArrowUpRight size={15} strokeWidth={1.8} />
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Hours */}
          <Reveal>
            <div className="glass rounded-[var(--radius-2xl)] p-8 h-full">
              <Clock size={22} strokeWidth={1.4} className="text-[var(--color-jade)]" />
              <h3 className="mt-6 font-display text-[26px] leading-tight tracking-[-0.02em]">
                Öffnungszeiten
              </h3>
              <ul className="mt-5 divide-y divide-[var(--color-ink-10)]">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex items-baseline justify-between py-2.5 text-[14px]">
                    <span className="text-[var(--color-ink-80)]">{h.day}</span>
                    <span className="text-[var(--color-ink-60)] tabular-nums">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          {/* Address */}
          <Reveal delay={0.06}>
            <div className="glass rounded-[var(--radius-2xl)] p-8 h-full">
              <MapPin size={22} strokeWidth={1.4} className="text-[var(--color-jade)]" />
              <h3 className="mt-6 font-display text-[26px] leading-tight tracking-[-0.02em]">
                Adresse
              </h3>
              <p className="mt-5 text-[15px] leading-[1.7] text-[var(--color-ink-80)]">
                {SITE.addressStreet}
                <br />
                {SITE.addressCity}
              </p>
              <Link href="/anfahrt" className="mt-8 inline-flex items-center gap-2 text-[var(--color-jade)] font-medium group">
                Anfahrt
                <ArrowUpRight size={15} strokeWidth={1.8} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
          {/* Hausbesuche */}
          <Reveal delay={0.12}>
            <div className="glass rounded-[var(--radius-2xl)] p-8 h-full">
              <Home size={22} strokeWidth={1.4} className="text-[var(--color-jade)]" />
              <h3 className="mt-6 font-display text-[26px] leading-tight tracking-[-0.02em]">
                Hausbesuche
              </h3>
              <p className="mt-5 text-[15px] leading-[1.7] text-[var(--color-ink-80)] pretty">
                Gerne komme ich zu Ihnen nach Hause oder in Ihre Einrichtung. Rufen
                Sie an, wir besprechen die Details.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
