import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="container-x flex items-center justify-center gap-3 py-2.5 text-[13px]">
        <Sparkles size={14} className="text-[var(--color-blush)]" strokeWidth={1.6} />
        <span className="text-[var(--color-paper)]/85">
          Neu ab {SITE.startKaltplasma}. Terminvergabe für die Kaltplasmatherapie ist geöffnet.
        </span>
        <Link
          href="/kaltplasmatherapie"
          className="hidden sm:inline underline underline-offset-4 decoration-[var(--color-paper)]/40 hover:decoration-[var(--color-paper)] transition"
        >
          Mehr erfahren
        </Link>
      </div>
    </div>
  );
}
