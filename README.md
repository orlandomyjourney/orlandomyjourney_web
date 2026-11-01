# orlandomyjourney.dev

Personal site of **Orlando Guzman** — Tech Lead and Cloud Solutions Engineer.
It tells my professional journey: experience, architecture work, projects, talks and writing.

🌐 [orlandomyjourney.dev](https://orlandomyjourney.dev)

## Stack

- Angular 22 (standalone components, signals), prerendered to static HTML
- Bilingual: English at `/`, Spanish at `/es/`
- Dracula (dark) and Alucard (light) themes, inspired by VS Code
- Hosted on Netlify with continuous deployment from `main`

## Run locally

Requires Node.js 24.15 or newer (see `.nvmrc`).

```bash
nvm use
npm install
npm start          # http://localhost:4200
npm run build      # static site in dist/orlando-my-journey/browser
```

## Project structure

| What | Where |
| --- | --- |
| Texts (EN / ES) | `src/app/i18n/content.en.ts`, `content.es.ts` |
| Shared links and photos | `src/app/i18n/profile.ts` |
| Page sections | `src/app/sections/` |
| Theme colors | `src/styles.scss` |
| Images and CV | `public/` |

Both language files share the `Content` type, so TypeScript reports any text missing in one of them.

## License

The code is available for reference. Texts, photos and the CV are personal content — please don't reuse them.
