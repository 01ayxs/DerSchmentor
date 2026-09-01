# DerSchmentor

Kompletter Neuaufbau der Website für die Creator- und Entertainment-Marke **DerSchmentor**. Die Homepage kombiniert eine reduzierte, typografische Gestaltung mit hochwertigen Scroll- und Hover-Animationen. Der frühere HTML-/PNG-Bestand wurde vollständig ersetzt.

## Technologien

- Next.js 16 mit App Router
- React 19 und TypeScript
- Tailwind CSS 4
- Motion für Animationen
- `next/image` für optimierte Visuals
- Lucide React für UI-Icons und React Icons für Social-Brand-Icons
- Resend SDK für den serverseitigen E-Mail-Versand
- YouTube Data API v3 für aktuelle Kanal- und Video-Daten
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
  api/contact/route.ts       Validierung und Resend-E-Mail-Versand
  layout.tsx                 Globale Metadata und Root Layout
  page.tsx                   Homepage-Komposition
  globals.css                Design-Tokens und globale Styles
  opengraph-image.tsx        Generierte Social-Preview
  robots.ts                  robots.txt
  sitemap.ts                 sitemap.xml
components/
  layout/                    Navigation und Footer
  sections/                  Eigenständige Homepage-Sections
  ui/                        Wiederverwendbare UI-Bausteine
lib/
  contact.ts                 Geteiltes Kontakt-Datenmodell und Validierung
  site-data.ts               Content-Modell für Formate und Socials
  server/youtube.ts          Gecachte serverseitige YouTube-Datenanbindung
public/
  derschmentor-logo.jpg      Offizielles DerSchmentor-Brand-Asset
```

Statische Inhalte bleiben standardmäßig Server Components. Interaktive Navigation, Scroll-Animationen und das noch nicht angebundene Kontaktformular sind bewusst in kleine Client-Component-Grenzen aufgeteilt.

## Inhalte und spätere Integrationen

- Latest Content sowie Abonnenten- und Videoanzahl werden serverseitig über die YouTube Data API geladen und 15 Minuten zwischengespeichert. Bei einem API-Ausfall erscheinen stabile Fallback-Inhalte.
- Die Format-Cards bleiben redaktionell festgelegt und verwenden die offiziellen YouTube-Thumbnails der ausgewählten Videos.
- Das Kontaktformular sendet eine HTML- und Textversion über den serverseitigen `POST /api/contact`-Endpunkt an `business.derschmentor@gmail.com`. Der Resend API Key bleibt ausschließlich serverseitig.
- Social- und Discord-Links sind mit den offiziellen DerSchmentor-Profilen verbunden.
- Das Startjahr 2026 bleibt im Statistikbereich statisch.
- Impressum und Datenschutz bleiben Platzhalter, bis die rechtlichen Inhalte vorliegen.
- Vor dem Livegang sollten die kanonische Domain in `app/layout.tsx`, `app/robots.ts` und `app/sitemap.ts` sowie reale Social-, YouTube- und Rechtslinks bestätigt werden.

## Deployment mit Vercel

1. Repository in Vercel importieren.
2. Framework-Preset **Next.js** verwenden.
3. Build Command `pnpm build` und Install Command `pnpm install` beibehalten.
4. Falls später externe Dienste hinzukommen, deren Umgebungsvariablen in Vercel hinterlegen.
5. Deployment auslösen und danach die produktive Domain in den Metadata-Dateien eintragen.

## Resend-Konfiguration

`.env.example` nach `.env.local` kopieren und einen gültigen API Key hinterlegen:

```bash
RESEND_API_KEY=re_xxxxxxxxx
```

Ohne `RESEND_FROM_EMAIL` wird Resends Test-Absender verwendet. Nach der Verifizierung von `derschmentor.com` kann der produktive Absender ohne Codeänderung gesetzt werden:

```bash
RESEND_FROM_EMAIL="DerSchmentor Website <kontakt@derschmentor.com>"
```

## YouTube-Konfiguration

Für aktuelle öffentliche Kanaldaten wird ein YouTube Data API v3 Key benötigt:

```bash
YOUTUBE_API_KEY=your_youtube_data_api_key
```

Der Key wird ausschließlich im Servermodul verwendet und nicht an Browser-Komponenten übergeben. Für ein Vercel-Deployment muss `YOUTUBE_API_KEY` zusätzlich in den Environment Variables des Vercel-Projekts gesetzt werden.

Es wurden in diesem Rebuild keine externen Domains, Vercel-Projekte oder Drittanbieter-Dienste verändert.
