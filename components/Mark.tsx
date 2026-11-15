import Link from 'next/link';

export default function Mark({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-baseline gap-2" aria-label="Oliver Latz Startseite">
      <span
        className={`font-display italic text-[22px] leading-none tracking-[-0.02em] ${
          invert ? 'text-white' : ''
        }`}
      >
        Oliver Latz
      </span>
      <span
        className={`hidden sm:inline text-[11px] uppercase tracking-[0.22em] ${
          invert ? 'text-white/60' : 'text-[var(--color-ink-60)]'
        }`}
      >
        St. Ingbert
      </span>
    </Link>
  );
}
