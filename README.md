# DerSchmentor

Kompletter Neuaufbau der Website für die Creator- und Entertainment-Marke **DerSchmentor**. Die Homepage kombiniert eine reduzierte, typografische Gestaltung mit hochwertigen Scroll- und Hover-Animationen. Der frühere HTML-/PNG-Bestand wurde vollständig ersetzt.

## Technologien

- Next.js 16 mit App Router
- React 19 und TypeScript
- Tailwind CSS 4
- Motion für Animationen
- `next/image` für optimierte Visuals
- Lucide React für UI-Icons
- Next.js Metadata API
- ESLint mit den Next.js Core Web Vitals-Regeln
- pnpm

## Installation

Voraussetzungen: Node.js 20.9 oder neuer und pnpm.

```bash
pnpm install
```

## Development Server

```bash
pnpm dev
```

Anschließend ist die Website unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Qualitätsprüfungen

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Der Production Server kann nach dem Build lokal mit `pnpm start` ausgeführt werden.

## Projektstruktur

```text
app/
  layout.tsx                 Globale Metadata und Root Layout
  page.tsx                   Homepage-Komposition
  globals.css                Design-Tokens und globale Styles
  icon.tsx                   Generierter Favicon-Platzhalter
  opengraph-image.tsx        Generierte Social-Preview
  robots.ts                  robots.txt
  sitemap.ts                 sitemap.xml
  visuals/                   Generiertes Video-Platzhalter-Visual
components/
  layout/                    Navigation und Footer
  sections/                  Eigenständige Homepage-Sections
  ui/                        Wiederverwendbare UI-Bausteine
lib/
  site-data.ts               Content-Modell für Formate und Socials
  placeholder-visual.tsx     Neutrale Bild-Platzhalter
public/                      Platz für spätere statische Marken-Assets
```

Statische Inhalte bleiben standardmäßig Server Components. Interaktive Navigation, Scroll-Animationen und das noch nicht angebundene Kontaktformular sind bewusst in kleine Client-Component-Grenzen aufgeteilt.

## Inhalte und spätere Integrationen

- Die Latest-Content-Section nutzt ein separates Datenobjekt und kann später durch einen YouTube-API-Adapter gespeist werden.
- Das Kontaktformular versendet aktuell keine Daten. Es kann später an eine Server Action und einen Mail-Dienst angebunden werden.
- Social- und Rechtslinks sind Platzhalter.
- Kanalstatistiken sind absichtlich nicht erfunden und mit `—` gekennzeichnet.
- Die Schmenunity-Section ist für den späteren Discord-Einladungslink vorbereitet.
- Vor dem Livegang sollten die kanonische Domain in `app/layout.tsx`, `app/robots.ts` und `app/sitemap.ts` sowie reale Social-, YouTube- und Rechtslinks bestätigt werden.

## Deployment mit Vercel

1. Repository in Vercel importieren.
2. Framework-Preset **Next.js** verwenden.
3. Build Command `pnpm build` und Install Command `pnpm install` beibehalten.
4. Falls später externe Dienste hinzukommen, deren Umgebungsvariablen in Vercel hinterlegen.
5. Deployment auslösen und danach die produktive Domain in den Metadata-Dateien eintragen.

Es wurden in diesem Rebuild keine externen Domains, Vercel-Projekte oder Drittanbieter-Dienste verändert.
