# ELI EditorialWide Home (SSG) — Next.js Standard

This project has been migrated to the **standard website stack**:

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS** (enabled; legacy CSS retained for pixel-parity)
- SEO/PPC friendly: real HTML per route + route-level metadata

## Local Run (Windows CMD)

```bat
npm install
npm run dev
```

Open:
- http://localhost:3000

## Build

```bat
npm run build
npm run start
```

## Project Pages (SSG)

Project pages are statically generated from `src/content/projects.ts` using:
- `generateStaticParams()`
- route: `/projects/[slug]`

Add new projects by appending to `projects`.

## Images

Place assets in:
- `public/images/home/*`
- `public/images/projects/<slug>/*`

"# ELI-Land-Design-WideStandard" 
