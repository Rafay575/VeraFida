# VeraFide Technology Group

A Next.js App Router conversion of the purchased Startup template.

| Route | Template layout |
| --- | --- |
| `/` | Home 2 |
| `/about` | About 2 |
| `/services` | Services 1 |
| `/contact` | Contact |
| `/blog` | Blog |
| `/our-team` | Our Team |

## Run locally

```powershell
npm.cmd ci
npm.cmd run dev
```

Open http://localhost:3000. Use `npm.cmd run build` to check a production build.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_CONTACT_EMAIL` to your public business email address. Restart the development server after updating it. The Contact form opens a draft in the visitor's email app.

The original template package and its license are kept locally in `Startup/`, outside the Git repository. The converted pages live in `app/`, the shared header and footer live in `app/site-shell.jsx`, and the logo is in `public/assets/`. Replace the demo service descriptions, figures, pricing, testimonials, team profiles, and sample articles with company content before launch.

