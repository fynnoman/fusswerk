import Link from 'next/link';
import { Phone, HeartPulse, Shield, Leaf, Clock, Hand } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { HeroMesh, SoftBlob } from '@/components/Mesh';
import { Section, Eyebrow, SectionTitle } from '@/components/Section';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Onkologische Fußpflege · Oliver Latz St. Ingbert',
  description:
    'Besonders sanfte, zertifizierte Fußpflege für Menschen in oder nach einer onkologischen Therapie. Mit Zeit, Sorgfalt und maximaler Hygiene.',
};

export default function OnkologischPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-24">
        <HeroMesh />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>Onkologische Fußpflege</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[clamp(52px,9vw,148px)] leading-[0.93] tracking-[-0.035em] balance">
              Pflege, die
              <br />
              <span className="italic text-[var(--color-jade)]">verstanden hat.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-[640px] text-[clamp(17px,1.25vw,20px)] leading-[1.6] text-[var(--color-ink-80)] pretty">
              In und nach einer onkologischen Therapie reagiert die Haut
              empfindlicher. Nägel verändern sich, Immunsystem und Empfinden
              schwanken. Hier braucht Fußpflege vor allem eines: Zeit.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Für wen</Eyebrow>
            <SectionTitle className="mt-6">
              Besonders sanft.
              <br />
              <span className="italic text-[var(--color-jade)]">Besonders achtsam.</span>
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 space-y-6 text-[17px] leading-[1.75] text-[var(--color-ink-80)] pretty">
            <p>
              Die onkologische Fußpflege ist eine spezialisierte Form der
              medizinischen Fußpflege. Sie richtet sich an Menschen, die eine
              Chemotherapie, Strahlentherapie oder Immuntherapie bekommen oder bekommen
              haben.
            </p>
            <p>
              Wir arbeiten mit erhöhter Hygiene, besonders schonenden Techniken und
              produktseitig auf natürlicher Basis. Jede Behandlung passt sich Ihrem
              Tagesbefinden an.
            </p>
            <p>
              Für Nagel und Hautveränderungen infolge Ihrer Therapie bietet die
              Kaltplasmatherapie zusätzlich sanfte Unterstützung. Wir beraten Sie,
              welche Kombination für Sie passt.
            </p>
          </Reveal>
        </div>
      </Section>

      <section className="relative py-28 md:py-36 bg-[var(--color-paper-2)] overflow-hidden">
        <SoftBlob className="w-[40vw] h-[40vw] -top-[10vw] right-[0vw]" color="rgba(215,229,219,0.7)" />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>Was Sie erwartet</Eyebrow>
            <SectionTitle className="mt-6">
              Vier <span className="italic text-[var(--color-jade)]">Zusagen.</span>
            </SectionTitle>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: Clock, t: 'Mehr Zeit', b: 'Wir nehmen uns so lange, wie Sie und Ihre Füße brauchen.' },
              { icon: Shield, t: 'Maximale Hygiene', b: 'Sterilisierte Instrumente. Einmalhandschuhe. Klimatisierte Räume.' },
              { icon: Hand, t: 'Schonende Technik', b: 'Reduzierter Druck. Keine aggressive Hornhautentfernung.' },
              { icon: Leaf, t: 'Natürliche Produkte', b: 'Pflege auf Basis natürlicher Inhaltsstoffe. Keine Reizstoffe.' },
            ].map(({ icon: Icon, t, b }, i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="glass rounded-[var(--radius-2xl)] p-8 h-full card-lift">
                  <Icon size={24} strokeWidth={1.4} className="text-[var(--color-jade)]" />
                  <h3 className="mt-6 font-display text-[28px] leading-tight tracking-[-0.02em]">
                    {t}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[var(--color-ink-60)] pretty">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="relative overflow-hidden rounded-[var(--radius-3xl)] bg-[var(--color-ink)] text-[var(--color-paper)] p-10 md:p-20">
          <SoftBlob className="w-[60%] h-[60%] -top-[20%] -left-[10%]" color="rgba(47,93,75,0.5)" />
          <SoftBlob className="w-[60%] h-[60%] -bottom-[20%] -right-[10%]" color="rgba(236,201,182,0.25)" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <Reveal className="lg:col-span-7">
              <HeartPulse size={28} strokeWidth={1.4} className="text-[var(--color-blush)]" />
              <h3 className="mt-6 font-display text-[clamp(32px,4.5vw,64px)] leading-[0.98] tracking-[-0.03em] balance">
                Wir hören zu.
                <br />
                <span className="italic text-[var(--color-blush)]">Vor jeder Berührung.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-[16px] leading-[1.7] text-[var(--color-paper)]/80 pretty">
                Rufen Sie an, wir nehmen uns Zeit für Ihre Fragen und beraten Sie zur
                passenden Behandlung. Gern auch im Rahmen eines Hausbesuchs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={SITE.phoneHref} className="btn btn-primary !bg-[var(--color-paper)] !text-[var(--color-ink)]">
                  <Phone size={15} strokeWidth={1.8} /> {SITE.phoneDisplay}
                </a>
                <Link href="/kontakt" className="btn btn-ghost !border-[var(--color-paper)]/30 !text-[var(--color-paper)] hover:!bg-white/5">
                  Kontakt
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
