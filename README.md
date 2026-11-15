# Oliver Latz · Medizinische Fußpflege St. Ingbert

Premium Apple-style Website für die Praxis von Oliver Latz.
Next.js 16 + Tailwind v4 + Framer Motion.

## Start

```bash
cd /Users/fynnschulz/oliver-latz-fusspflege_website
npm install
npm run dev
```

Lokaler Dev-Server: http://localhost:3050

## Design-System

- Fonts: Fraunces (Display, variable + opsz axis) + Geist (UI)
- Farben: warmes Ivory `#FAF7F2`, tiefes Ink `#0E0E0C`, Signatur-Jade `#2F5D4B`, warme Akzente Sand/Blush
- Glassmorphismus (`.glass`, `.glass-dark`), weiche Radial-Gradient-Meshes, dezente Noise-Textur
- Scroll-Reveal via Framer Motion, Easing `[0.22, 1, 0.36, 1]`

## Seiten

- `/` Startseite mit 8 Sections
- `/kaltplasmatherapie` detaillierte Kaltplasma-Seite
- `/praxis` Team, Hygiene, Öffnungszeiten, Hausbesuche
- `/ueber-mich` Portrait + Werdegang-Timeline
- `/leistungen` komplettes Leistungsraster
- `/onkologische-fusspflege` sanfte, spezialisierte Pflege
- `/onyfix` Nagelkorrektur-Therapie
- `/anfahrt` Adresse, Parken, ÖPNV, dekorative Karte
- `/kontakt` Telefon, WhatsApp, Hausbesuche
- `/agb`, `/impressum`, `/datenschutz` juristische Platzhalter

## Hinweise

- Rechtstexte (AGB, Impressum, Datenschutz) sind Platzhalter und müssen vor Launch ergänzt werden.
- Der Portrait liegt in `public/oliver.jpeg`.
- Telefon, Adresse und Öffnungszeiten werden zentral in `lib/site.ts` gepflegt.
