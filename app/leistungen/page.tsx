import Link from 'next/link';
import { Phone, ArrowUpRight, Fingerprint, Sparkles, HeartPulse, Scissors, Shield, Leaf, Footprints, CircleDot, Hammer, Droplets, Ruler, ClipboardList, Hand } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { HeroMesh, SoftBlob } from '@/components/Mesh';
import { Section, Eyebrow, SectionTitle } from '@/components/Section';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Leistungen · Oliver Latz Fußpflege St. Ingbert',
  description:
    'Behandlungsschwerpunkte der Praxis Oliver Latz. Nagelkorrektur mit Onyfix, Druckschutz, Hornhaut, Rollnägel, Hühneraugen, Nagelprothetik und mehr.',
};

const SERVICES = [
  { icon: Fingerprint, title: 'Nagelkorrektur mit Onyfix', body: 'Schmerzfreie Korrektur deformierter Nägel mit flexiblen Kompositspangen.' },
  { icon: Scissors, title: 'Nageleinwuchs', body: 'Fachgerechte Behandlung bei Unguis Incarnatus.' },
  { icon: Shield, title: 'Druckschutz und Orthesen', body: 'Individuell angefertigte Entlastungen, die wirklich sitzen.' },
  { icon: Sparkles, title: 'Haut und Nagelpilz', body: 'Diagnostik, Therapie und wirksame Nachsorge.' },
  { icon: Hand, title: 'Massage der Fußreflexzonen', body: 'Pflege, die über den Fuß hinaus wirkt.' },
  { icon: Footprints, title: 'Kinderfüße', body: 'Besondere Sorgfalt für kleine Füße.' },
  { icon: Hammer, title: 'Nagelprothetik', body: 'Rekonstruktion fehlender oder beschädigter Nägel.' },
  { icon: ClipboardList, title: 'Anamnese', body: 'Patientengeschichte und Grunderkrankungen verstehen.' },
  { icon: Ruler, title: 'Begutachtung', body: 'Füße, Nägel und Hautbeschaffenheit im Detail.' },
  { icon: Droplets, title: 'Fersenrisse', body: 'Behandlung schmerzhafter Rhagaden.' },
  { icon: Leaf, title: 'Vermehrte Hornhaut', body: 'Reduktion und Pflege bei Hyperkeratose.' },
  { icon: CircleDot, title: 'Hühneraugen', body: 'Entfernung und Nachsorge von Clavi.' },
  { icon: HeartPulse, title: 'Rollnägel', body: 'Behandlung bei Ungius Convolutus.' },
];

export default function LeistungenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-24">
        <HeroMesh />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>Behandlungsschwerpunkte</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[clamp(42px,10vw,160px)] leading-[0.95] tracking-[-0.02em] balance">
              Alles, was Ihre Füße
              <br />
              <span className="italic text-[var(--color-jade)]">brauchen.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-[620px] text-[clamp(17px,1.25vw,20px)] leading-[1.6] text-[var(--color-ink-80)] pretty">
              Von klassischer Nagelpflege bis zur Nagelprothetik. Von Druckschutz bis
              zur Kaltplasmatherapie. In einer Praxis, mit vierzig bis fünfzig Minuten
              Zeit pro Behandlung.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.05}>
              <div className="glass rounded-[var(--radius-2xl)] p-7 h-full card-lift">
                <div className="flex items-start justify-between">
                  <Icon size={24} strokeWidth={1.4} className="text-[var(--color-jade)]" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-40)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[26px] leading-tight tracking-[-0.02em]">
                  {title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-[var(--color-ink-60)] pretty">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DAUER + HAUSBESUCHE */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-[var(--radius-3xl)] bg-[var(--color-paper-2)] p-10 h-full relative overflow-hidden card-lift">
              <SoftBlob className="w-[60%] h-[60%] -top-[20%] -right-[20%]" color="rgba(215,229,219,0.8)" />
              <Eyebrow>Dauer</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(32px,4vw,56px)] leading-[0.98] tracking-[-0.02em]">
                Vierzig bis fünfzig<br />
                <span className="italic text-[var(--color-jade)]">Minuten Ruhe.</span>
              </h2>
              <p className="mt-6 text-[15.5px] leading-[1.7] text-[var(--color-ink-80)] pretty">
                Eine normale Behandlung dauert in der Regel vierzig bis fünfzig Minuten
                und wird mit modernster Technologie und hochwertigen Instrumenten
                durchgeführt.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[var(--radius-3xl)] bg-[var(--color-ink)] text-[var(--color-paper)] p-10 h-full relative overflow-hidden card-lift">
              <SoftBlob className="w-[60%] h-[60%] -bottom-[20%] -left-[20%]" color="rgba(47,93,75,0.5)" />
              <p className="eyebrow !text-[var(--color-paper)]/60 before:bg-[var(--color-paper)]/30">
                Hausbesuche
              </p>
              <h2 className="mt-6 font-display text-[clamp(32px,4vw,56px)] leading-[0.98] tracking-[-0.02em]">
                Wir kommen<br />
                <span className="italic text-[var(--color-blush)]">zu Ihnen.</span>
              </h2>
              <p className="mt-6 text-[15.5px] leading-[1.7] text-[var(--color-paper)]/80 pretty">
                In Senioren und Pflegeeinrichtungen. Im Rollstuhl oder Krankenbett.
                Pflegeprodukte auf Basis natürlicher Inhaltsstoffe.
              </p>
              <Link href="/kontakt" className="mt-8 btn btn-primary !bg-[var(--color-paper)] !text-[var(--color-ink)]">
                Hausbesuch anfragen
                <ArrowUpRight size={15} strokeWidth={1.8} />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-[var(--radius-3xl)] bg-[var(--color-jade-tint)] p-10 md:p-20 text-center">
          <SoftBlob className="w-[60%] h-[60%] -top-[20%] -left-[10%]" color="rgba(236,201,182,0.55)" />
          <SoftBlob className="w-[60%] h-[60%] -bottom-[20%] -right-[10%]" color="rgba(215,229,219,0.9)" />
          <Reveal>
            <Eyebrow>Termin</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(42px,6vw,96px)] leading-[0.95] tracking-[-0.02em] balance">
              Lassen Sie uns
              <br />
              <span className="italic text-[var(--color-jade)]">anfangen.</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link href="/kontakt" className="btn btn-primary">Termin vereinbaren</Link>
              <a href={SITE.phoneHref} className="btn btn-ghost">
                <Phone size={15} strokeWidth={1.8} /> {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
