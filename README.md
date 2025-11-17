# Mirran Gallery Discovery

Mirran Gallery Discovery is a Vite + React + TypeScript single-page application that showcases featured exhibitions, artists, and waitlist registration for the Mirran digital art gallery.

## Tech Stack

- React 18 with TypeScript
- Vite 5 + SWC React plugin
- Tailwind CSS & shadcn/ui components
- Supabase client
- TanStack Query

## Getting Started

```sh
git clone <repo-url>
cd mirran-gallery-discovery-60-main
npm install
npm run dev
```

The dev server runs on http://localhost:5173 by default. Update environment variables in `.env` as needed (see `.env.example` if present).

## Available Scripts

- `npm run dev` – start Vite in development mode
- `npm run build` – create an optimized production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Deployment

1. Build the project with `npm run build`.
2. Deploy the contents of the `dist/` folder to your static host of choice (Vercel, Netlify, Cloudflare Pages, etc.).
3. Configure your hosting provider for custom domains/SSL as needed.

## Project Structure Highlights

- `src/pages` – route-level components such as the landing page
- `src/components` – UI building blocks, SEO helpers, and forms
- `src/assets` – static images used throughout the experience
- `public` – static files served as-is (favicons, sitemap, robots.txt)

## Contributing

1. Create a feature branch.
2. Make your changes and ensure lint/build passes.
3. Open a pull request describing the change and any required environment updates.
