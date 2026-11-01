# orlandomyjourney.dev

Personal site of **Orlando Guzman** — Tech Lead and Cloud Solutions Engineer.
Built with Angular 22, prerendered to static HTML (English at `/`, Spanish at `/es/`) and deployed to GitHub Pages.

## Run locally

Requires Node.js 24.15 or newer (see `.nvmrc`).

```bash
nvm use
npm install
npm start          # http://localhost:4200
npm run build      # static output in dist/orlando-my-journey/browser
```

## Where to edit content

| What | File |
| --- | --- |
| Texts in English | `src/app/i18n/content.en.ts` |
| Texts in Spanish | `src/app/i18n/content.es.ts` |
| Email, links, photos | `src/app/i18n/profile.ts` |
| Colors (Dracula / Alucard) | `src/styles.scss` |
| Photos | `public/images/` |

Both language files share the `Content` type (`content.model.ts`), so TypeScript reports any section missing in one of them.

## Updating the CV

Replace `public/cv/Orlando-Guzman-Resume.pdf` with the new version (same file name) and push to `main`.
The workflow redeploys the site and the "Download CV" buttons serve the new file.

## Deployment (GitHub Pages + name.com)

1. Push this project to the repository `orlandomyjourney/orlandomyjourney.github.io`, branch `main`.
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
   The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
3. In **Settings → Pages → Custom domain**, enter `orlandomyjourney.dev` (it is also in `public/CNAME`).
4. In name.com, **DNS Records** for `orlandomyjourney.dev`:

   | Type | Host | Answer |
   | --- | --- | --- |
   | A | *(empty)* | 185.199.108.153 |
   | A | *(empty)* | 185.199.109.153 |
   | A | *(empty)* | 185.199.110.153 |
   | A | *(empty)* | 185.199.111.153 |
   | AAAA | *(empty)* | 2606:50c0:8000::153 |
   | AAAA | *(empty)* | 2606:50c0:8001::153 |
   | AAAA | *(empty)* | 2606:50c0:8002::153 |
   | AAAA | *(empty)* | 2606:50c0:8003::153 |
   | CNAME | www | orlandomyjourney.github.io |

   Remove any default name.com parking records (A / ALIAS / CNAME on the root or `www`) that conflict with these.
5. When the DNS check passes, enable **Enforce HTTPS**. `.dev` domains only work over HTTPS, so the site loads once GitHub issues the certificate (it can take up to an hour).
6. Recommended: verify the domain in **GitHub → Settings (your profile) → Pages → Add a domain**, to prevent takeovers.
