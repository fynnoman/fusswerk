import Link from 'next/link';
import { ArrowUpRight, Phone, MapPin, ShieldCheck, Sparkles, Fingerprint, Clock, Wind, Home } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { HeroMesh, SoftBlob } from '@/components/Mesh';
import { Section, Eyebrow, SectionTitle } from '@/components/Section';
import { SITE, HOURS } from '@/lib/site';

export const metadata = {
  title: 'Praxis · Oliver Latz Fußpflege St. Ingbert',
  description:
    'Unsere Praxis in St. Ingbert. Zwei erfahrene Fußpflegerinnen und Fußpfleger, klimatisierte Behandlungsräume, sterilisierte Instrumente.',
};

export default function PraxisPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-24">
        <HeroMesh />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>Die Praxis</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[clamp(42px,10vw,160px)] leading-[0.95] tracking-[-0.02em] balance">
              Ein Ort, an dem
              <br />
              <span className="italic text-[var(--color-jade)]">Zeit da ist.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-[620px] text-[clamp(17px,1.25vw,20px)] leading-[1.6] text-[var(--color-ink-80)] pretty">
              Zwei erfahrene Hände. Ein eingespieltes Team. In der gemeinsamen Praxis
              behandeln Oliver Latz und Christine Daub Sie professionell, individuell
              und mit der nötigen Ruhe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-[var(--radius-3xl)] bg-[var(--color-paper-2)] p-10 h-full relative overflow-hidden card-lift">
              <SoftBlob className="w-[70%] h-[70%] -top-[20%] -right-[20%]" color="rgba(215,229,219,0.75)" />
              <p className="eyebrow">Team</p>
              <h2 className="mt-6 font-display text-[clamp(32px,4vw,56px)] leading-[0.98] tracking-[-0.02em]">
                Oliver Latz
              </h2>
              <p className="mt-3 text-[15px] text-[var(--color-ink-60)]">
                Zertifizierter medizinischer Fußpfleger
              </p>
              <p className="mt-6 text-[15.5px] leading-[1.7] text-[var(--color-ink-80)] pretty">
                Zwanzig Jahre auf der DRK Rettungswache St. Ingbert. Anschließend
                Anästhesie an der Uniklinik Homburg. Ausbildung an der Fußpflege Schule
                Saarland.
              </p>
              <Link href="/ueber-mich" className="mt-6 inline-flex items-center gap-2 font-medium group">
                Zur Geschichte
                <ArrowUpRight size={16} strokeWidth={1.8} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[var(--radius-3xl)] bg-[var(--color-jade-tint)] p-10 h-full relative overflow-hidden card-lift">
              <SoftBlob className="w-[70%] h-[70%] -bottom-[20%] -left-[20%]" color="rgba(236,201,182,0.55)" />
              <p className="eyebrow">Team</p>
              <h2 className="mt-6 font-display text-[clamp(32px,4vw,56px)] leading-[0.98] tracking-[-0.02em]">
                Christine Daub
              </h2>
              <p className="mt-3 text-[15px] text-[var(--color-ink-60)]">
                Langjährige Fußpflegerin
              </p>
              <p className="mt-6 text-[15.5px] leading-[1.7] text-[var(--color-ink-80)] pretty">
                Langjährige Erfahrung in der professionellen Fußpflege. Gemeinsam
                bieten wir Ihnen die gesamte Bandbreite der medizinischen Pflege in
                einem Haus an.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* HYGIENE DETAIL */}
      <Section>
        <Reveal>
          <Eyebrow>Hygienemaßnahmen</Eyebrow>
          <SectionTitle className="mt-6">
            Sauberkeit ist
            <br />
            <span className="italic text-[var(--color-jade)]">kein Detail.</span>
          </SectionTitle>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: Sparkles, label: 'Desinfektion der Behandlungsplätze' },
            { icon: ShieldCheck, label: 'Sterilisation der Instrumente' },
            { icon: Fingerprint, label: 'Mund und Nasenschutz' },
            { icon: Fingerprint, label: 'Einmalhandschuhe' },
            { icon: Wind, label: 'Klimatisierte Räume' },
          ].map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <div className="glass rounded-[var(--radius-2xl)] p-6 h-full">
                <Icon size={22} strokeWidth={1.4} className="text-[var(--color-jade)]" />
                <p className="mt-5 text-[14.5px] leading-[1.5] text-[var(--color-ink-80)]">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* HOURS + MAP */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Öffnungszeiten</Eyebrow>
            <SectionTitle className="mt-6">
              Wir sind<br /><span className="italic text-[var(--color-jade)]">für Sie da.</span>
            </SectionTitle>
            <p className="mt-6 text-[16px] leading-[1.7] text-[var(--color-ink-60)] max-w-[420px]">
              Andere Zeiten nach Absprache. Rufen Sie an und wir finden gemeinsam einen Termin.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn btn-jade">
                <Phone size={15} strokeWidth={1.8} /> {SITE.phoneDisplay}
              </a>
              <Link href="/anfahrt" className="btn btn-ghost">
                <MapPin size={15} strokeWidth={1.8} /> Anfahrt
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="glass rounded-[var(--radius-3xl)] p-8 md:p-10">
              <ul className="divide-y divide-[var(--color-ink-10)]">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex items-baseline justify-between py-4 first:pt-0 last:pb-0">
                    <span className="font-display text-[22px] tracking-[-0.02em]">{h.day}</span>
                    <span className="text-[15px] text-[var(--color-ink-60)] tabular-nums">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* HAUSBESUCHE CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-[var(--radius-3xl)] bg-[var(--color-ink)] text-[var(--color-paper)] p-10 md:p-20">
          <SoftBlob className="w-[50%] h-[50%] -top-[20%] -right-[10%]" color="rgba(47,93,75,0.55)" />
          <SoftBlob className="w-[50%] h-[50%] -bottom-[20%] -left-[10%]" color="rgba(236,201,182,0.25)" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <Reveal className="lg:col-span-7">
              <Home size={28} strokeWidth={1.4} className="text-[var(--color-blush)]" />
              <h3 className="mt-6 font-display text-[clamp(36px,5vw,72px)] leading-[0.98] tracking-[-0.018em] balance">
                Wir kommen zu Ihnen.
                <br />
                <span className="italic text-[var(--color-blush)]">Gern auch regelmäßig.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-[16px] leading-[1.7] text-[var(--color-paper)]/80 pretty">
                In Senioren und Pflegeeinrichtungen. Im Rollstuhl. Am Krankenbett. Die
                mobilen Behandlungen finden im Komfort Ihres Zuhauses statt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/kontakt" className="btn btn-primary !bg-[var(--color-paper)] !text-[var(--color-ink)]">
                  Hausbesuch anfragen
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
