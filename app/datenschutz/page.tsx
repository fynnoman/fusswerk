import Reveal from '@/components/Reveal';
import { HeroMesh } from '@/components/Mesh';
import { Section, Eyebrow } from '@/components/Section';

export const metadata = { title: 'Datenschutz · Oliver Latz Fußpflege' };

export default function DatenschutzPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-24">
        <HeroMesh />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>Rechtliches</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[clamp(56px,10vw,140px)] leading-[0.95] tracking-[-0.02em]">
              Datenschutz
            </h1>
          </Reveal>
        </div>
      </section>
      <Section>
        <div className="glass rounded-[var(--radius-2xl)] p-10 max-w-[760px] space-y-5 text-[15.5px] leading-[1.75] text-[var(--color-ink-80)]">
          <p className="eyebrow">Hinweis</p>
          <p>
            Diese Website speichert selbst keine personenbezogenen Daten. Es werden
            keine Tracking Dienste eingesetzt. Bei Kontaktaufnahme per Telefon oder
            WhatsApp gelten die üblichen datenschutzrechtlichen Bestimmungen.
          </p>
          <p className="text-[13px] text-[var(--color-ink-40)]">
            Die vollständige Datenschutzerklärung wird hier ergänzt.
          </p>
        </div>
      </Section>
    </>
  );
}
