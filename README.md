# tcla — Tom Claes persoonlijke site

Editorial Dark portfolio in [Astro](https://docs.astro.build), voorgefilterde HTML zonder bundelbloat.

## Pagina's

- `/` — Home (hero + uitgelicht werk)
- `/over` — Over mij, skills, opleiding & certificeringen
- `/ervaring` — Werkervaring + eerdere ervaring
- `/projecten` — Projectenoverzicht
- `/contact` — Contact & CTA

Alle inhoud (profiel, jobs, projecten, skills) staat centraal in `src/data/profile.ts`, gesynct van LinkedIn.

## Commands

| Command            | Actie                                                  |
| :----------------- | :----------------------------------------------------- |
| `npm run dev`      | Dev-server op `localhost:4321`                         |
| `npm run build`    | Build naar `./dist/`                                   |
| `npm run preview`  | Preview de build lokaal                                |
| `npm test`         | Unit- & component-tests (Vitest)                       |
| `npm run test:e2e` | E2E-tests (Playwright) — bouwt en previewt automatisch |

## Deploy (Vercel)

Omdat de site static is (geen server-side adapter), volstaat de standaard Vercel-build: import dit repo op [vercel.com](https://vercel.com), framework preset `Astro`, build command `npm run build`, output `dist`.
