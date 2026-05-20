# Christian Garcia — Summer 2026 Sample Agenda

A sample June–July 2026 babysitting agenda site for Christian Garcia, built to pitch
prospective Lincoln Park families on a thoughtful, themed summer for their two
animal-, history-, and nature-loving kids (ages 6 & 9).

The whole agenda is intentionally a starting point — every week, day, and destination
is editable so families can shape it to fit their summer.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react icons

## Getting started

```bash
npm install --legacy-peer-deps
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## How to edit the agenda

All content lives in `lib/data.ts`:

- `weeks` — the 9-week themed agenda (each week with 5 daily plans)
- `destinations` — the catalog of 21 vetted spots in/around Lincoln Park
- `dailyRhythm` — the typical daily schedule
- `credentials` — the "Why Christian" pitch points

Edit any of those arrays and the site updates automatically. The Agenda and
Destinations sections both render directly from this data.

## Deploy

Configured for Vercel. Use the Vercel CLI:

```bash
npm i -g vercel
vercel
vercel --prod
```

## License

Personal / pitch use.
