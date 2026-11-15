import Link from 'next/link';
import { SITE, HOURS } from '@/lib/site';
import { Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-32 pt-24 pb-10 bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div
          className="absolute -top-40 -right-40 w-[60vw] h-[60vw] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(47,93,75,0.55), transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[50vw] h-[50vw] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(236,201,182,0.25), transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="container-x relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
          <div className="md:col-span-5">
            <p className="eyebrow !text-[var(--color-paper)]/60 before:bg-[var(--color-paper)]/30">
              Sprechen wir
            </p>
            <h3 className="mt-6 font-display text-[clamp(36px,5vw,64px)] leading-[0.98] tracking-[-0.03em] balance">
              Ihre Füße verdienen <br />
              <span className="italic text-[var(--color-blush)]">eine Verabredung.</span>
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn btn-primary !bg-[var(--color-paper)] !text-[var(--color-ink)] hover:!bg-[var(--color-sand)]">
                <Phone size={15} strokeWidth={1.8} />
                {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost !border-[var(--color-paper)]/30 !text-[var(--color-paper)] hover:!bg-white/5"
              >
                <MessageCircle size={15} strokeWidth={1.8} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-paper)]/50">
              Praxis
            </p>
            <div className="mt-4 text-[14.5px] leading-7 text-[var(--color-paper)]/85">
              {SITE.nameFull}
              <br />
              {SITE.addressStreet}
              <br />
              {SITE.addressCity}
            </div>
            <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-[var(--color-paper)]/50">
              Hausbesuche
            </p>
            <p className="mt-3 text-[14.5px] leading-7 text-[var(--color-paper)]/85 pretty">
              Pflege im häuslichen Umfeld. In Senioren und Pflegeeinrichtungen. Am Krankenbett.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-paper)]/50">
              Öffnungszeiten
            </p>
            <ul className="mt-4 divide-y divide-white/8">
              {HOURS.map((h) => (
                <li key={h.day} className="flex items-baseline justify-between py-2.5 text-[14.5px]">
                  <span className="text-[var(--color-paper)]/90">{h.day}</span>
                  <span className="text-[var(--color-paper)]/70 tabular-nums">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display italic text-xl">Oliver Latz</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[var(--color-paper)]/70">
            <Link href="/" className="hover:text-[var(--color-paper)]">Startseite</Link>
            <Link href="/kontakt" className="hover:text-[var(--color-paper)]">Kontakt</Link>
            <Link href="/impressum" className="hover:text-[var(--color-paper)]">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-[var(--color-paper)]">Datenschutz</Link>
            <Link href="/agb" className="hover:text-[var(--color-paper)]">AGB</Link>
          </nav>
          <p className="text-[12px] text-[var(--color-paper)]/50">
            © {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
