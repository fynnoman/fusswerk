import Image from 'next/image';
import { IMG } from '@/lib/images';
import PlaceholderLabel from './PlaceholderLabel';

const ITEMS = [
  { img: IMG.statementBath, label: 'Pflegeritual' },
  { img: IMG.treatInstruments, label: 'Sterilisierte Instrumente' },
  { img: IMG.statementStones, label: 'Ruhige Atmosphäre' },
  { img: IMG.treatCream, label: 'Natürliche Produkte' },
  { img: IMG.treatClinic, label: 'Klimatisiert' },
  { img: IMG.nature, label: 'Natürliche Produkte' },
];

export default function ImageMarquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section className="relative overflow-hidden py-10 md:py-14 border-y border-[var(--color-ink-10)] bg-[var(--color-paper)]">
      <div className="flex gap-4 md:gap-5 marquee-track">
        {doubled.map((it, i) => (
          <div
            key={i}
            className="shrink-0 w-[200px] h-[140px] md:w-[260px] md:h-[180px] relative rounded-2xl overflow-hidden"
          >
            <Image
              src={it.img}
              alt={it.label}
              fill
              sizes="260px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <PlaceholderLabel position="top-right" tone="light" />
            <span className="absolute bottom-3 left-3 text-white/90 text-[11px] uppercase tracking-[0.2em]">
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
