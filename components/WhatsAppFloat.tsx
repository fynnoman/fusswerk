'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 320);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Nachricht per WhatsApp senden"
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 pl-4 pr-5 py-3 rounded-full glass text-[13.5px] text-[var(--color-ink)] shadow-[0_20px_40px_-20px_rgba(28,58,46,0.25)] transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <MessageCircle size={16} strokeWidth={1.8} className="text-[var(--color-jade)]" />
      WhatsApp schreiben
    </a>
  );
}
