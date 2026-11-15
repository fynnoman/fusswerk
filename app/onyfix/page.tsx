import Link from 'next/link';
import { Phone, Fingerprint, Shield, Clock, Smile, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { HeroMesh, SoftBlob } from '@/components/Mesh';
import { Section, Eyebrow, SectionTitle } from '@/components/Section';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Onyfix Nagelkorrektur · Oliver Latz Fußpflege St. Ingbert',
  description:
    'Onyfix Nagelkorrektur in St. Ingbert. Schmerzfrei, ohne mechanischen Zug und mit sichtbarem Erfolg bei eingewachsenen und eingerollten Nägeln.',
};

const STEPS = [
  { n: '01', t: 'Analyse', b: 'Beurteilung der Nagelform, der Beschwerden und möglicher Ursachen.' },
  { n: '02', t: 'Nagel vorbereiten', b: 'Reinigung und schonende Formgebung des Nagels.' },
  { n: '03', t: 'Onyfix applizieren', b: 'Die Kompositspange wird auf den Nagel aufgetragen und mit UV Licht ausgehärtet.' },
  { n: '04', t: 'Kontrollen', b: 'Regelmäßige Termine, bis der Nagel in seiner neuen Form wächst.' },
];

const BENEFITS = [
  { icon: Smile, t: 'Schmerzfrei', b: 'Keine Zug und Druckkräfte wie bei klassischen Spangen.' },
  { icon: Fingerprint, t: 'Unauffällig', b: 'Dünne, flexible Komposittechnologie. Alltagstauglich.' },
  { icon: Shield, t: 'Für fast jeden geeignet', b: 'Auch für Diabetiker, Schwangere und Kinder.' },
  { icon: Sparkles, t: 'Sichtbarer Effekt', b: 'Der Nagel wird in seine gesunde Form zurückgeführt.' },
  { icon: Clock, t: 'Alltagstauglich', b: 'Sport, Dusche, Strand. Alles ohne Sorge möglich.' },
];

export default function OnyfixPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-24">
        <HeroMesh />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>Onyfix Nagelkorrektur</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[clamp(42px,10vw,160px)] leading-[0.95] tracking-[-0.02em] balance">
              Nagelkorrektur.
              <br />
              <span className="italic text-[var(--color-jade)]">Ganz ohne Zug.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-[620px] text-[clamp(17px,1.25vw,20px)] leading-[1.6] text-[var(--color-ink-80)] pretty">
              Onyfix ist ein flexibles Kompositmaterial, das sanft auf den Nagel
              aufgebracht wird. Es korrigiert eingewachsene und eingerollte Nägel
              zuverlässig. Ohne mechanische Belastung. Ohne Schmerz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STEPS */}
      <Section>
        <Reveal>
          <Eyebrow>Ablauf</Eyebrow>
          <SectionTitle className="mt-6">
            In vier<br /><span className="italic text-[var(--color-jade)]">Schritten.</span>
          </SectionTitle>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="rounded-[var(--radius-2xl)] bg-[var(--color-paper-2)] p-8 card-lift h-full">
                <span className="num-badge">{s.n}</span>
                <h3 className="mt-6 font-display text-[28px] leading-tight tracking-[-0.02em]">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[var(--color-ink-60)] pretty">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* BENEFITS */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)]">
        <SoftBlob className="w-[50vw] h-[50vw] -top-[15vw] -right-[15vw]" color="rgba(47,93,75,0.5)" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow !text-[var(--color-paper)]/60 before:bg-[var(--color-paper)]/30">
              Warum Onyfix
            </p>
            <SectionTitle className="mt-6 !text-[var(--color-paper)]">
              Fünf<br /><span className="italic text-[var(--color-blush)]">gute Gründe.</span>
            </SectionTitle>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map(({ icon: Icon, t, b }, i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="glass-dark rounded-[var(--radius-2xl)] p-7 h-full">
                  <Icon size={22} strokeWidth={1.4} className="text-[var(--color-blush)]" />
                  <h3 className="mt-6 font-display text-[26px] leading-tight tracking-[-0.02em]">{t}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.65] text-[var(--color-paper)]/75 pretty">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="relative overflow-hidden rounded-[var(--radius-3xl)] bg-[var(--color-jade-tint)] p-10 md:p-20 text-center">
          <SoftBlob className="w-[60%] h-[60%] -top-[20%] -left-[10%]" color="rgba(236,201,182,0.55)" />
          <SoftBlob className="w-[60%] h-[60%] -bottom-[20%] -right-[10%]" color="rgba(215,229,219,0.9)" />
          <Reveal>
            <Eyebrow>Beratung</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(42px,6vw,96px)] leading-[0.95] tracking-[-0.02em] balance">
              Ist Onyfix
              <br />
              <span className="italic text-[var(--color-jade)]">das Richtige für Sie?</span>
            </h2>
            <p className="mt-6 max-w-[620px] mx-auto text-[16px] leading-[1.7] text-[var(--color-ink-80)]">
              Rufen Sie an, wir prüfen die Eignung gemeinsam und beraten zu Kosten
              und Dauer.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link href="/kontakt" className="btn btn-primary">Beratung anfragen</Link>
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
