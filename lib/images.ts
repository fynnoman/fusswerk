// Kuratierte Unsplash-Fotos, alle Photo-IDs curl-verifiziert.
const u = (id: string, w = 2000, q = 82) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const IMG = {
  // HERO & STATEMENT
  heroFeet: u('photo-1540555700478-4be289fbecef'),        // bare feet (Jernej Graj)
  heroSpa: u('photo-1544161515-4ab6ce6db874'),            // meditation / minimalist
  statementBath: u('photo-1570172619644-dfd03ed5d881'),   // spa towels
  statementStones: u('photo-1515377905703-c4788e51af15'), // Jared Rice spa interior

  // TREATMENTS
  treatCare: u('photo-1583416750470-965b2707b355'),       // pedicure close-up
  treatCream: u('photo-1596178065887-1198b6148b2b'),      // spa oil
  treatMassage: u('photo-1591343395082-e120087004b4'),    // foot touch
  treatWater: u('photo-1596073419667-9d77d59f033f'),      // warm detail
  treatInstruments: u('photo-1618498082410-b4aa22193b38'),// clinic instruments
  treatClinic: u('photo-1582719471384-894fbb16e074'),     // clean interior

  // KALTPLASMA DARK
  kaltAbstract: u('photo-1550684848-fac1c5b4e853'),       // ionized nebula look
  kaltMicro: u('photo-1628595351029-c2bf17511435'),       // lab
  kaltHand: u('photo-1559757175-5700dde675bc'),           // hand texture

  // PORTRAIT & ATMOSPHERE
  portraitRoom: u('photo-1631815588090-d4bfec5b1ccb'),    // natural light room
  minimalArch: u('photo-1555041469-a586c61ea9bc'),        // soft interior
  nature: u('photo-1529612700005-e35377bf1415'),          // stones / nature
  warmth: u('photo-1552693673-1bf958298935'),             // atmospheric

  // TESTIMONIALS (portraits)
  personWoman1: u('photo-1559839734-2b71ea197ec2'),
  personMan1: u('photo-1566753323558-f4e0952af115'),
  personWoman2: u('photo-1544005313-94ddf0286df2'),
} as const;

export const TREATMENTS = [
  {
    key: 'kaltplasma',
    tag: 'Neu · 09/2026',
    title: 'Kaltplasma­therapie',
    body: 'Ionisiertes Gas. Antimikrobiell, zellaktivierend, schmerzfrei. Ab der ersten Sitzung spürbar.',
    img: IMG.kaltAbstract,
    href: '/kaltplasmatherapie',
  },
  {
    key: 'onyfix',
    tag: 'Nagelkorrektur',
    title: 'Onyfix',
    body: 'Flexible Kompositspange. Korrigiert eingewachsene Nägel ohne Zug, ohne Schmerz.',
    img: IMG.treatCare,
    href: '/onyfix',
  },
  {
    key: 'onkologisch',
    tag: 'Spezialisiert',
    title: 'Onkologische Pflege',
    body: 'Besondere Sorgfalt, mehr Zeit, höchste Hygiene. Für Haut, die gerade mehr braucht.',
    img: IMG.treatMassage,
    href: '/onkologische-fusspflege',
  },
  {
    key: 'hausbesuche',
    tag: 'Mobile Pflege',
    title: 'Hausbesuche',
    body: 'Pflege im eigenen Wohnzimmer, in Senioreneinrichtungen, im Rollstuhl, am Krankenbett.',
    img: IMG.minimalArch,
    href: '/leistungen',
  },
  {
    key: 'nagelpflege',
    tag: 'Klassiker',
    title: 'Medizinische Nagelpflege',
    body: 'Rollnägel, Hühneraugen, Hyperkeratose. Die gesamte Bandbreite in erfahrenen Händen.',
    img: IMG.treatCream,
    href: '/leistungen',
  },
  {
    key: 'fersenrisse',
    tag: 'Haut & Nagel',
    title: 'Fersenrisse & Hornhaut',
    body: 'Behandlung schmerzhafter Rhagaden. Reduktion verhornter Bereiche. Nachhaltige Pflege.',
    img: IMG.treatWater,
    href: '/leistungen',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      'Ich war seit Jahren nicht mehr barfuß am Strand. Nach drei Terminen bei Oliver trage ich wieder Sandalen. Ohne Schmerzen.',
    name: 'Margarete K.',
    role: 'Patientin, 71',
    img: IMG.personWoman1,
  },
  {
    quote:
      'Oliver nimmt sich Zeit. Er erklärt. Er hört zu. Und er weiß, was er tut. Für mich der einzige Fußpfleger, zu dem ich gehe.',
    name: 'Wolfgang H.',
    role: 'Patient, 64',
    img: IMG.personMan1,
  },
  {
    quote:
      'Als Diabetikerin brauche ich besondere Sorgfalt. Hier fühle ich mich medizinisch, nicht kosmetisch behandelt.',
    name: 'Ingrid B.',
    role: 'Patientin, 68',
    img: IMG.personWoman2,
  },
];

export const STATS = [
  { k: '20', l: 'Jahre Rettungsdienst' },
  { k: '40–50', l: 'Minuten pro Behandlung' },
  { k: '2', l: 'Fachkräfte im Team' },
  { k: '09/26', l: 'Start Kaltplasma' },
];
