# Vercel hosting (TanStack Start)

## Recommended approach: Static hosting (SPA) for this repo
This project is SSR-oriented (TanStack Start + Cloudflare worker config). If you want to deploy quickly on Vercel without extra server adapters, deploy the **client bundle** as static.

### 1) Build
```bash
npm install
npm run build
```

### 2) Vercel settings
In your Vercel project:
- **Framework preset**: Other / Static Site
- **Build command**: `npm run build`
- **Output directory**: `dist/client`

### 3) Ensure routing works
`vercel.json` in this repo enables `cleanUrls`.
For SPA routing of TanStack Router, you may also add a fallback rule if needed.

## Files added
- `vercel.json`
- `tsconfig.vercel.json`
- `vercel.config.ts`
- `package.json` script `start`

> If you specifically need SSR on Vercel Node, you’ll need a Node runtime adapter. The current repo is Cloudflare-SSR oriented via `wrangler.jsonc`, so that requires extra wiring.

