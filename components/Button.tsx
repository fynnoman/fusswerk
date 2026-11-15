import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'jade';
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

export default function Button({ href, children, variant = 'primary', arrow = false, className = '', external }: Props) {
  const cls = `btn ${
    variant === 'primary' ? 'btn-primary' : variant === 'jade' ? 'btn-jade' : 'btn-ghost'
  } ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowUpRight size={16} strokeWidth={1.8} />}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
