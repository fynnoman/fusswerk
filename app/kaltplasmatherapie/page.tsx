import Link from 'next/link';
import { ArrowUpRight, Sparkles, Zap, Shield, Clock, HeartPulse, Dna, Droplets, FlaskConical, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { HeroMesh, SoftBlob } from '@/components/Mesh';
import { Section, Eyebrow, SectionTitle } from '@/components/Section';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Kaltplasmatherapie · Oliver Latz Fußpflege St. Ingbert',
  description:
    'Kaltplasma für Nagel und Haut. Antimikrobiell, zellaktivierend, schmerzfrei. Neu ab September 2026 in der Praxis Oliver Latz.',
};

const APPLICATIONS = [
  { icon: FlaskConical, title: 'Haut und Nagelpilz', body: 'Reduktion von Pilzsporen. Förderung gesunden Nagelwachstums.' },
  { icon: HeartPulse, title: 'Verbrennungen und Narben', body: 'Verbesserte Heilung durch Keimreduktion und gesteigerte Durchblutung.' },
  { icon: Shield, title: 'Resistente Bakterien', body: 'Wirkt, wo klassische Therapien an Grenzen kommen.' },
  { icon: Droplets, title: 'Besenreiser', body: 'Sanfte Aktivierung der Mikrozirkulation.' },
  { icon: Dna, title: 'Warzen', body: 'Zellstrukturen werden gezielt inaktiviert.' },
  { icon: Sparkles, title: 'Akne und Neurodermitis', body: 'Entzündungsregulation und Regeneration der Hautbarriere.' },
  { icon: Zap, title: 'Dermatitis', body: 'Auch infolge von Immuntherapien geeignet.' },
];

const STEPS = [
  { n: '01', t: 'Individuelle Anamnese', b: 'Nach eingehender Untersuchung legen wir Anzahl und Dauer der Sitzungen fest.' },
  { n: '02', t: 'Zwei Sitzungen pro Woche', b: 'Anfangs. Die Dauer liegt zwischen 10 und 30 Minuten, körperwarm und schmerzfrei.' },
  { n: '03', t: 'Erste Verbesserung', b: 'Bereits nach der zweiten bis dritten Anwendung spürbar.' },
  { n: '04', t: 'Vollständige Regeneration', b: 'In der Regel innerhalb von zwei Monaten.' },
];

export default function KaltplasmaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-24">
        <HeroMesh />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow">Neu ab {SITE.startKaltplasma}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[clamp(42px,10vw,160px)] leading-[0.95] tracking-[-0.02em] balance">
              Kalt<span className="italic text-[var(--color-jade)]">plasma.</span>
              <br />
              Die neue Innovation.
            </h1>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <Reveal delay={0.2} className="lg:col-span-6">
              <p className="text-[clamp(17px,1.3vw,21px)] leading-[1.6] text-[var(--color-ink-80)] max-w-[560px] pretty">
                Ein ionisiertes Gas, erzeugt durch eine elektrische Entladung. Mit
                therapeutischen Eigenschaften, die Haut und Nägel regenerieren. Ohne
                Strahlung. Ohne Schmerz.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/kontakt" className="btn btn-jade">
                  Termin ab {SITE.startKaltplasma} sichern
                  <ArrowUpRight size={16} strokeWidth={1.8} />
                </Link>
                <a href={SITE.phoneHref} className="btn btn-ghost">
                  <Phone size={15} strokeWidth={1.8} />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.3} className="lg:col-span-6">
              <div className="glass rounded-[var(--radius-3xl)] p-8 md:p-10">
                <p className="eyebrow">Was macht es besonders</p>
                <ul className="mt-6 space-y-5">
                  {[
                    'Antimikrobielle Wirkung ohne Antibiotika',
                    'Anregung von Zellstoffwechsel und Durchblutung',
                    'Regulation von Entzündungen',
                    'Überdosierung technisch unmöglich',
                    'Klasse I Medizinprodukt von Dr. plajin',
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15.5px] leading-[1.6]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-jade)] flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WAS IST KALTPLASMA */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Was ist Kaltplasma</Eyebrow>
            <SectionTitle className="mt-6">
              Vierter <span className="italic text-[var(--color-jade)]">Aggregatzustand.</span>
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-[18px] leading-[1.75] text-[var(--color-ink-80)] pretty">
              Kaltes Plasma ist ein ionisiertes Gas, das durch eine elektrische
              Entladung erzeugt wird. Es besitzt einzigartige therapeutische
              Eigenschaften. Es wirkt antimikrobiell, regt den Zellstoffwechsel und die
              Durchblutung an, reguliert Entzündungen und stimuliert
              Regenerationsprozesse.
            </p>
            <p className="mt-6 text-[18px] leading-[1.75] text-[var(--color-ink-80)] pretty">
              Das Kaltplasma Gerät von Dr. plajin wirkt oberflächlich. Ohne Strahlen.
              Es verbessert die Mikrozirkulation der Haut, versorgt die Zellen mit
              Sauerstoff und fördert die Zellaktivität zur Regeneration von Haut und
              Nägeln.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* NAGELPILZ CLOSEUP */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)]">
        <SoftBlob className="w-[50vw] h-[50vw] -top-[15vw] -right-[15vw]" color="rgba(47,93,75,0.55)" />
        <SoftBlob className="w-[40vw] h-[40vw] -bottom-[10vw] -left-[10vw]" color="rgba(236,201,182,0.25)" />
        <div className="container-x relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow !text-[var(--color-paper)]/60 before:bg-[var(--color-paper)]/30">
                Nagelpilzbehandlung
              </p>
              <SectionTitle className="mt-6 !text-[var(--color-paper)]">
                Wie der Pilz
                <br />
                <span className="italic text-[var(--color-blush)]">abstirbt.</span>
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <p className="text-[18px] leading-[1.75] text-[var(--color-paper)]/80 pretty">
                Wird ein Gas wie Sauerstoff elektrisch geladen, entsteht Plasma bei
                Körperwärme. Durch Interaktion mit der Raumluft entstehen reaktive
                Stickstoff und Sauerstoffmoleküle, sogenannte radikale Spezies.
              </p>
              <p className="mt-6 text-[18px] leading-[1.75] text-[var(--color-paper)]/80 pretty">
                Diese inaktivieren die Zellstrukturen des Pilzes, zerstören Proteine
                in der Pilzmembran und deformieren Pilzsporen. Die Pilz DNA wird
                irreparabel geschädigt. Der Pilz stirbt ab.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { k: 'RNS', v: 'Reaktiver Stickstoff' },
                  { k: 'ROS', v: 'Reaktiver Sauerstoff' },
                  { k: 'DNA', v: 'Irreparable Schädigung' },
                ].map((s) => (
                  <div key={s.k} className="glass-dark rounded-2xl p-5">
                    <p className="num-badge !text-[32px] !text-[var(--color-blush)]">
                      {s.k}
                    </p>
                    <p className="mt-3 text-[13px] text-[var(--color-paper)]/75">{s.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ANWENDUNGSGEBIETE */}
      <Section>
        <Reveal>
          <Eyebrow>Anwendungsgebiete</Eyebrow>
          <SectionTitle className="mt-6">
            Breites <span className="italic text-[var(--color-jade)]">Wirkspektrum.</span>
          </SectionTitle>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {APPLICATIONS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.04}>
              <div className="glass rounded-[var(--radius-2xl)] p-7 h-full card-lift">
                <Icon size={24} strokeWidth={1.4} className="text-[var(--color-jade)]" />
                <h3 className="mt-5 font-display text-[26px] leading-tight tracking-[-0.02em]">
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

      {/* ABLAUF */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <SoftBlob className="w-[50vw] h-[50vw] top-[10vw] -left-[20vw]" color="rgba(236,201,182,0.4)" />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>So läuft die Therapie ab</Eyebrow>
            <SectionTitle className="mt-6">
              Von der ersten Sitzung
              <br />
              <span className="italic text-[var(--color-jade)]">bis zur Regeneration.</span>
            </SectionTitle>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="relative rounded-[var(--radius-2xl)] bg-[var(--color-paper-2)] p-8 card-lift">
                  <span className="num-badge">{s.n}</span>
                  <h3 className="mt-6 font-display text-[28px] leading-tight tracking-[-0.02em]">
                    {s.t}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[var(--color-ink-60)] pretty">
                    {s.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-[var(--radius-3xl)] bg-[var(--color-jade-tint)] p-10 md:p-20 text-center">
          <SoftBlob className="w-[60%] h-[60%] -top-[20%] -left-[10%]" color="rgba(236,201,182,0.55)" />
          <SoftBlob className="w-[60%] h-[60%] -bottom-[20%] -right-[10%]" color="rgba(215,229,219,0.9)" />
          <Reveal>
            <p className="eyebrow">Jetzt Termin sichern</p>
            <h2 className="mt-6 font-display text-[clamp(42px,6vw,96px)] leading-[0.95] tracking-[-0.02em] balance">
              Die Plätze sind
              <br />
              <span className="italic text-[var(--color-jade)]">begrenzt.</span>
            </h2>
            <p className="mt-6 max-w-[620px] mx-auto text-[16px] leading-[1.7] text-[var(--color-ink-80)]">
              Seien Sie schnell und sichern Sie sich einen Termin ab dem {SITE.startKaltplasma}.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link href="/kontakt" className="btn btn-primary">
                Termin anfragen
              </Link>
              <a href={SITE.phoneHref} className="btn btn-ghost">
                <Phone size={15} strokeWidth={1.8} />
                {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
