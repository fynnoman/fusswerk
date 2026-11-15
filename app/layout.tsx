import type { Metadata } from 'next';
import { Fraunces, Geist } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT'],
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Oliver Latz · Medizinische Fußpflege St. Ingbert',
  description:
    'Professionelle medizinische Fußpflege in St. Ingbert. Kaltplasmatherapie, Onyfix Nagelkorrektur, onkologische Fußpflege. Auch als Hausbesuch.',
  metadataBase: new URL('https://fusspflege-latz.de'),
  openGraph: {
    title: 'Oliver Latz · Medizinische Fußpflege St. Ingbert',
    description:
      'Ruhe, Pflege und medizinische Aufmerksamkeit für Ihre Füße. Neu ab September 2026: Kaltplasmatherapie.',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${geist.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
