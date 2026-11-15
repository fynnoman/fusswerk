import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { HeroMesh, SoftBlob } from '@/components/Mesh';
import { Section, Eyebrow, SectionTitle } from '@/components/Section';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Über Oliver Latz · Medizinische Fußpflege St. Ingbert',
  description:
    'Oliver Latz, zertifizierter medizinischer Fußpfleger in St. Ingbert. Zwanzig Jahre Rettungsdienst, Anästhesie Uniklinik Homburg, Ausbildung Fußpflege Schule Saarland.',
};

const TIMELINE = [
  { year: '1975', t: 'Geboren in Neunkirchen', b: 'Vater einer Tochter. Verwurzelt im Saarland.' },
  { year: '20 Jahre', t: 'DRK Rettungswache St. Ingbert', b: 'Medizin an vorderster Front. Verantwortung in kritischen Momenten.' },
  { year: 'Danach', t: 'Anästhesie Uniklinik Homburg', b: 'Hochpräzise Medizin in einem spezialisierten Team.' },
  { year: 'Heute', t: 'Zertifiziert, Fußpflege Schule Saarland', b: 'Ausbildung unter Dirk Stoll. Praxis im Team mit Christine Daub in St. Ingbert.' },
];

export default function UeberMichPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-24">
        <HeroMesh />
        <div className="container-x relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <Reveal className="lg:col-span-7">
              <Eyebrow>Über Oliver Latz</Eyebrow>
              <h1 className="mt-8 font-display text-[clamp(42px,10vw,160px)] leading-[0.95] tracking-[-0.035em] balance">
                Medizin, die
                <br />
                <span className="italic text-[var(--color-jade)]">zuhört.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[var(--radius-3xl)] overflow-hidden">
                <Image
                  src="/oliver.jpeg"
                  alt="Oliver Latz"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORY */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Werdegang</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(32px,4vw,56px)] leading-[0.98] tracking-[-0.02em] balance">
              Vom Rettungsdienst
              <br />
              <span className="italic text-[var(--color-jade)]">in die Fußpflege.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8 space-y-6 text-[17px] leading-[1.75] text-[var(--color-ink-80)] pretty">
            <p>
              Schon früh fühlte ich mich der Medizin und der Hilfe am Menschen
              hingezogen. Zwanzig Jahre habe ich auf der DRK Rettungswache in St.
              Ingbert gearbeitet, anschließend in der Anästhesie der Uniklinik
              Homburg.
            </p>
            <p>
              Meine Ausbildung im Bereich der medizinischen Fußpflege habe ich an der
              Fußpflege Schule Saarland unter der Leitung von Dirk Stoll mit Erfolg
              absolviert. Als zertifizierter Fußpfleger stehe ich Ihnen im Rahmen der
              professionellen Fußpflege jederzeit beratend und behandelnd zur Seite.
            </p>
            <p>
              Ich gehe individuell auf Ihre Wünsche und Sorgen ein. Mein Anliegen ist
              nicht nur die richtige Pflege und Vorbeugung der Fußgesundheit. Mir ist
              es ebenso wichtig, durch gemeinsame Gespräche den Fußproblemen auf den
              Grund zu gehen, um bestmögliche Lösungsansätze zu finden.
            </p>
            <p>
              Eine normale Behandlung dauert in der Regel vierzig bis fünfzig Minuten
              und wird mit modernster Technologie und hochwertigen Instrumenten
              durchgeführt. Regelmäßige Fußpflege hilft, ernsthafte Probleme zu
              vermeiden und trägt zu gesunden, schmerzfreien Füßen bei.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* TIMELINE */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-[var(--color-paper-2)]">
        <SoftBlob className="w-[40vw] h-[40vw] -top-[10vw] -right-[10vw]" color="rgba(236,201,182,0.4)" />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>Stationen</Eyebrow>
            <SectionTitle className="mt-6">
              Vier <span className="italic text-[var(--color-jade)]">Kapitel.</span>
            </SectionTitle>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <div className="glass rounded-[var(--radius-2xl)] p-8 h-full card-lift">
                  <p className="num-badge !text-[44px]">{t.year}</p>
                  <h3 className="mt-6 font-display text-[28px] leading-tight tracking-[-0.02em]">
                    {t.t}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[var(--color-ink-60)] pretty">
                    {t.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE / CTA */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <blockquote className="font-display italic text-[clamp(28px,3.5vw,52px)] leading-[1.2] tracking-[-0.025em] balance text-[var(--color-ink-80)] border-l-2 border-[var(--color-jade)] pl-8">
              „Regelmäßige Fußpflege durch erfahrene Fachfußpfleger hilft, ernsthafte
              Fußprobleme zu vermeiden und trägt zu gesunden und schmerzfreien Füßen
              bei.&#8220;
            </blockquote>
            <p className="mt-8 font-display text-[22px] italic">Ihr Oliver Latz</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="glass rounded-[var(--radius-2xl)] p-8">
              <p className="eyebrow">Jetzt sprechen</p>
              <p className="mt-6 text-[15px] leading-[1.65] text-[var(--color-ink-60)]">
                Fragen zur Behandlung oder Terminwünsche? Ich bin für Sie da.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <a href={SITE.phoneHref} className="btn btn-primary">
                  <Phone size={15} strokeWidth={1.8} /> {SITE.phoneDisplay}
                </a>
                <Link href="/kontakt" className="btn btn-ghost">
                  Kontakt
                  <ArrowUpRight size={15} strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
