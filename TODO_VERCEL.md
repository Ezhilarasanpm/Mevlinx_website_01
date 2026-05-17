# Vercel Hosting Plan (TanStack Start)

## 1) Quick assessment
- This repo is a TanStack Start (React + SSR) project.
- It uses `wrangler.jsonc` and Cloudflare tooling for SSR.
- Vercel supports Node/SSR, but Cloudflare Workers-specific configuration may not work without adjustments.

## 2) Create Vercel entry
- Add Vercel config to run the app as a Node server.
- Create/adjust a server entry compatible with Vercel runtime.

## 3) Update package scripts (if needed)
- Ensure `dev` and `build` remain valid.
- Add `start` script suitable for Vercel (`next`-like hosting is not used; Vercel uses `vercel build` + `vercel dev` + `start`).

## 4) Build output verification
- Run locally:
  - `npm run build`
  - `npm run preview` (or custom start)

## 5) Deploy
- Push to GitHub.
- Create a Vercel project from the repo.
- Set build command and output to match the chosen runtime.

## 6) Runtime decision (must choose one)
Option A (recommended if supported by this stack):
- SSR on Vercel Node.

Option B:
- Static export (if SSR can be disabled) and host on Vercel as static.

## Current repo status
- `npm run build` succeeds locally.
- No Vercel-specific files exist yet in the repo.

