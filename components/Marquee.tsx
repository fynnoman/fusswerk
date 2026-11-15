import type { ReactNode } from 'react';

export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-6 border-y border-[var(--color-ink-10)]">
      <div className="flex gap-10 whitespace-nowrap marquee-track">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="font-display italic text-[clamp(28px,4vw,52px)] leading-none text-[var(--color-ink-80)] tracking-[-0.03em]"
          >
            {it}
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-jade)] mx-8 translate-y-[-14px]" />
          </span>
        ))}
      </div>
    </div>
  );
}
