import Reveal from '@/components/Reveal';
import { HeroMesh } from '@/components/Mesh';
import { Section, Eyebrow } from '@/components/Section';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Impressum · Oliver Latz Fußpflege' };

export default function ImpressumPage() {
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
              Impressum
            </h1>
          </Reveal>
        </div>
      </section>
      <Section>
        <div className="glass rounded-[var(--radius-2xl)] p-10 max-w-[760px] space-y-6 text-[15.5px] leading-[1.75] text-[var(--color-ink-80)]">
          <div>
            <p className="eyebrow">Angaben gemäß § 5 TMG</p>
            <p className="mt-4">
              {SITE.nameFull}
              <br />
              {SITE.addressStreet}
              <br />
              {SITE.addressCity}
            </p>
          </div>
          <div>
            <p className="eyebrow">Kontakt</p>
            <p className="mt-4">Telefon {SITE.phoneDisplay}</p>
          </div>
          <p className="text-[13px] text-[var(--color-ink-40)]">
            Weitere Angaben (verantwortlich für Inhalte, Aufsichtsbehörde, Berufsbezeichnung,
            Haftungsausschluss) werden hier ergänzt.
          </p>
        </div>
      </Section>
    </>
  );
}
