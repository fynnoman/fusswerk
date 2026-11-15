export const SITE = {
  name: 'Oliver Latz',
  nameFull: 'Oliver Latz Medizinische Fußpflege',
  tagline: 'Praxis für medizinische Fußpflege',
  city: 'St. Ingbert',
  phone: '+49 170 960 15 77',
  phoneDisplay: '0170 960 15 77',
  phoneHref: 'tel:+4917096015 77'.replace(/\s/g, ''),
  whatsapp: 'https://wa.me/4917096015 77'.replace(/\s/g, ''),
  addressStreet: 'Am Waldfriedhof',
  addressCity: '66386 St. Ingbert',
  startKaltplasma: '01.09.2026',
} as const;

export const NAV: { href: string; label: string }[] = [
  { href: '/kaltplasmatherapie', label: 'Kaltplasma' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/onkologische-fusspflege', label: 'Onkologisch' },
  { href: '/onyfix', label: 'Onyfix' },
  { href: '/praxis', label: 'Praxis' },
  { href: '/ueber-mich', label: 'Über mich' },
  { href: '/anfahrt', label: 'Anfahrt' },
  { href: '/kontakt', label: 'Kontakt' },
];

export const HOURS: { day: string; time: string }[] = [
  { day: 'Montag', time: '8:30 bis 17:30' },
  { day: 'Dienstag', time: '8:30 bis 17:30' },
  { day: 'Mittwoch', time: '8:30 bis 15:00' },
  { day: 'Donnerstag', time: '8:30 bis 17:30' },
  { day: 'Freitag', time: '8:30 bis 16:00' },
  { day: 'Samstag', time: 'nach Absprache' },
];
