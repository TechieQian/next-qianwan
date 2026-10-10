# qianwan.dev

My personal website and a place to experiment with modern web development.

Built with Vite+ 1.1, React 19.3 canary, React Router 7, TypeScript 7, and Sass.
React and React DOM are pinned to the same canary release for reproducible installs.

## Development

Use Node.js 26 (`nvm install && nvm use`) and npm 12.

```sh
npm install
npm run dev
```

The project uses npm and `package-lock.json`. `.npmrc` allows installation with
React canary, whose prerelease version falls outside dependencies’ stable peer ranges.

```sh
npm run check  # Vite+ formatting/lint, then TypeScript checks
npm run build # TypeScript check and production build
npm start     # Preview the production build locally
```

## Hosting

Deploy `dist/` as a static site. Configure the host to serve `index.html` for
application routes such as `/project/` and `/resume/` (an SPA fallback).
The site now renders in the browser; Next.js server rendering and image optimization
are no longer part of the build. `npm start` is for local preview, not a production server.

The resume form still uses the existing external reCAPTCHA and submission endpoint.
