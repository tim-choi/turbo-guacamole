## Repo snapshot

This is a small full-stack portfolio app with a Node/Express server that serves both API routes and a Vite-built React client. Key folders:
- `client/` — React + Vite app (root for Vite). Entry: `client/src/main.tsx` and `client/src/App.tsx`.
- `server/` — Express server entry `server/index.ts`, route registrations in `server/routes.ts`, static serving via `server/vite.ts`.
- `shared/` — shared TypeScript/Zod schemas and data (`shared/schema.ts`, `shared/projects.ts`, `shared/assets.ts`).

## High-level architecture notes

- The server is the single process that serves both API endpoints and the client. In development Vite is mounted into the Express server (`server/index.ts` -> `setupVite`). In production the client is pre-built into `dist/public` and served as static assets.
- API surface is small and file-based. See `server/routes.ts` for endpoints like `POST /api/contact` and `GET /api/resume/download`.
- Project data is not fetched from an external API — `shared/projects.ts` is the source-of-truth used by client pages (e.g. `ProjectDetail.tsx` imports `@shared/projects`).

## How to build & run (developer shortcuts)

- Development (starts server + vite):

  npm run dev

  - This runs `tsx server/index.ts`. The server sets up Vite in development mode. Check `package.json` -> `scripts.dev`.

- Production build and start:

  npm run build
  npm start

  - `build` runs `vite build` and also bundles `server/index.ts` with esbuild into `dist/`.

- Type-checking: `npm run check` (runs `tsc`). If unsure about path aliases, see `tsconfig.json` and `vite.config.ts` aliases (`@` -> `client/src`, `@shared` -> `shared`).

## Project-specific conventions & patterns

- Aliases: The repo uses Vite + tsconfig path aliases. Use `@/...` for client code and `@shared/...` for cross-cutting types/data (e.g. `@shared/schema`, `@shared/projects`). Keep imports aligned with these aliases so Vite and tsc resolve correctly.
- Shared data-as-code: Project content is authored in `shared/projects.ts` (static array). When editing or adding projects, update this file and reference image keys in `shared/assets.ts` (image keys map to `/images/*` paths).
- Image handling: Images referenced by projects are served from `attached_assets/` (Vite config maps `@assets` to that folder). On the client, `getProjectImage(project.image)` in `shared/assets.ts` returns a public path used in `<img src=...>`.
- Validation: Request payloads use Zod schemas defined in `shared/schema.ts` (e.g. `contactFormSchema`). Server routes parse and return validation errors using `zod-validation-error`.

## Debugging & logs

- API request logging: `server/index.ts` wraps requests and logs `/api` responses (truncates long JSON). Use this to trace API responses during dev.
- Resume download endpoint uses `res.download` and logs errors — check server console when testing `/api/resume/download`.

## Integration points & external deps

- Email: `server/routes.ts` contains commented nodemailer example — currently the contact endpoint logs submissions instead of sending email. If enabling emails, add credentials to environment variables (EMAIL_USER / EMAIL_PASSWORD) and implement `nodemailer.createTransport`.
- DB/ORM: Drizzle ORM is present in dependencies, but the repository uses static project data for the portfolio. `shared/schema.ts` includes example table schemas for reference.

## Helpful examples for common tasks

- Add a new project: update `shared/projects.ts` (add Project object matching `shared/schema.ts`), add image to `attached_assets/images/`, map the key in `shared/assets.ts`.
- Change a client UI component: edit files under `client/src/components/*`. Run `npm run dev` to see live updates via Vite.
- Add a new server API: add route in `server/routes.ts`. Use Zod schemas from `shared/schema.ts` to validate inputs and return JSON responses. Server errors are converted to JSON with message + status.

## Files to inspect when working on this repo

- `package.json` — scripts and deps (dev vs production steps)
- `server/index.ts` — server lifecycle, Vite mounting, logging
- `server/routes.ts` — all API endpoints
- `client/src/*` — UI entrypoints and pages: `main.tsx`, `App.tsx`, `pages/*`, `components/*`
- `shared/schema.ts`, `shared/projects.ts`, `shared/assets.ts` — canonical types and content
- `vite.config.ts`, `tsconfig.json` — aliases and build output (`dist/public`)

## What not to change without confirming

- `vite.config.ts` aliases and `tsconfig.json` paths — keep them in sync when changing import paths.
- `server/index.ts` dev-only Vite setup ordering — Vite must be initialized after routes to avoid catch-all collision.
- The `id` fields in `shared/projects.ts` — routes depend on `id` to find projects in `getProjectById`.

## Example prompts for code-generation in this repo

- "Add a new API endpoint POST /api/feedback that accepts {name,email,feedback} validated by Zod and stores in a new JSON file under attached_assets/logs; return {success:true}. Follow existing error handling style in `server/routes.ts`."
- "Create a new component `client/src/components/ProjectGallery.tsx` that renders `getAllProjects()` from `@shared/projects` in a responsive grid, using existing `ui/card.tsx` styles."

If anything is missing or you want me to expand sections (examples, tests, CI), tell me which area to focus on next.
