import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = '', id }: Props) {
  return (
    <section id={id} className={`relative py-20 md:py-32 ${className}`}>
      <div className="container-x relative">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionTitle({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-[clamp(34px,6vw,88px)] leading-[1] tracking-[-0.03em] balance ${className}`}
    >
      {children}
    </h2>
  );
}
