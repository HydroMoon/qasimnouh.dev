# qasimnouh.com

Personal portfolio for Gasim Nouh, built with Nuxt 3 and Tailwind CSS and served as a static site on GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Edit content

All CV content (experience, skills, stats, contact links) lives in `data/cv.ts`. The components read from it, so most edits don't need template changes.

## Deploy

```bash
npm run deploy
```

This runs `nuxt generate` and pushes `.output/public` (including `CNAME` and `.nojekyll`) to the `gh-pages` branch, which GitHub Pages serves at qasimnouh.com.
