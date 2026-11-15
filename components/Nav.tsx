'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Mark from './Mark';
import { NAV, SITE } from '@/lib/site';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overHero = pathname === '/' && !scrolled;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const linkCls = overHero
    ? 'text-white/85 hover:text-white'
    : 'text-[var(--color-ink-80)] hover:text-[var(--color-ink)]';

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <div className="container-x">
          <div
            className={`flex items-center justify-between px-4 py-2.5 rounded-full transition-all duration-500 ${
              scrolled ? 'glass' : 'bg-transparent'
            }`}
          >
            <Mark invert={overHero} />

            <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
              {NAV.slice(0, 7).map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`nav-link px-3 py-2 text-[13.5px] ${linkCls} transition-colors`}
                  data-active={pathname === n.href || undefined}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <a
                href={SITE.phoneHref}
                className={`hidden xl:inline-flex items-center gap-2 px-3 py-2 text-[13.5px] ${linkCls} transition-colors`}
              >
                <Phone size={13} strokeWidth={1.8} />
                {SITE.phoneDisplay}
              </a>
              <Link
                href="/kontakt"
                className={`btn !py-2.5 !px-4 !text-[13.5px] ${
                  overHero
                    ? 'bg-white text-[var(--color-ink)] hover:bg-[var(--color-blush)]'
                    : 'btn-primary'
                }`}
              >
                Termin buchen
              </Link>
            </div>

            <button
              aria-label="Menü öffnen"
              className={`lg:hidden rounded-full border p-2.5 ${
                overHero ? 'border-white/40 text-white' : 'border-[var(--color-ink-20)]'
              }`}
              onClick={() => setOpen(true)}
            >
              <Menu size={18} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[var(--color-paper)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mesh" />
            <div className="relative h-full flex flex-col">
              <div className="container-x flex items-center justify-between py-5">
                <Mark />
                <button
                  aria-label="Menü schließen"
                  className="rounded-full border border-[var(--color-ink-20)] p-2.5"
                  onClick={() => setOpen(false)}
                >
                  <X size={18} strokeWidth={1.6} />
                </button>
              </div>

              <nav className="container-x flex-1 flex flex-col justify-center gap-1 pb-10">
                {NAV.map((n, i) => (
                  <motion.div
                    key={n.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={n.href}
                      className="font-display italic text-[clamp(42px,9vw,78px)] leading-[1.02] tracking-[-0.03em] block py-1.5"
                    >
                      {n.label}
                      <span className="text-[var(--color-ink-20)] ml-3 not-italic font-sans text-sm align-middle">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="container-x pb-10 flex flex-wrap items-center gap-3 border-t border-[var(--color-ink-10)] pt-6">
                <a href={SITE.phoneHref} className="btn btn-primary">
                  <Phone size={15} strokeWidth={1.8} />
                  {SITE.phoneDisplay}
                </a>
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  WhatsApp
                </a>
                <span className="ml-auto text-[13px] text-[var(--color-ink-60)]">
                  {SITE.addressStreet} · {SITE.addressCity}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
