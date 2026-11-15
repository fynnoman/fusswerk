import Reveal from '@/components/Reveal';
import { HeroMesh } from '@/components/Mesh';
import { Section, Eyebrow } from '@/components/Section';

export const metadata = { title: 'AGB · Oliver Latz Fußpflege' };

export default function AGBPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-24">
        <HeroMesh />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>Rechtliches</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[clamp(56px,10vw,140px)] leading-[0.95] tracking-[-0.035em]">
              AGB
            </h1>
          </Reveal>
        </div>
      </section>
      <Section>
        <div className="glass rounded-[var(--radius-2xl)] p-10 max-w-[760px]">
          <p className="text-[15px] leading-[1.7] text-[var(--color-ink-80)]">
            Die Allgemeinen Geschäftsbedingungen werden hier ergänzt. Für Rückfragen
            zu Terminen, Stornierung oder Behandlungsablauf wenden Sie sich bitte an
            uns.
          </p>
        </div>
      </Section>
    </>
  );
}
