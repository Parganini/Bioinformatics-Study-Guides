# Repository Guidelines

## Project Structure & Module Organization

This repository hosts a unified React/Vite study hub for multiple courses. The editable app lives in `StudyGuide-src/src/`, with the main router and dashboards in `StudyGuide-src/src/App.jsx`. Course-specific lesson systems live under `StudyGuide-src/src/lessons/` such as `lessons/drd/` and `lessons/amla/`; exams live in `StudyGuide-src/src/exams/`. Static slide images and other public assets are under `StudyGuide-src/public/`. Published entry pages and built assets are generated into `index.html`, `AMLB/`, `MP/`, `DRD/`, `dist/`, and `assets/`. Utility scripts are in `scripts/`.

## Build, Test, and Development Commands

Run commands from the repository root:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run validate:drd
npm run validate:amla
```

`npm run dev` starts the Vite dev server using `StudyGuide-src/vite.config.js`. `npm run build` creates the production build and runs `postbuild` to copy static assets. `npm run preview` serves the built app locally. Validation scripts check manifest, routing, component, and resource consistency for DRD and AMLA.

## Coding Style & Naming Conventions

Use modern React with functional components and hooks. Keep JSX readable with two-space indentation and descriptive component names in PascalCase. Course manifests use stable kebab-case lesson IDs such as `amla-2026-05-29-project-xai-sequential`; lesson folders should match their manifest IDs. Keep resource fields explicit: use real URLs when verified, or `{ todo: "..." }` when a notebook or asset is mentioned but no link is available.

## Testing Guidelines

There is no separate unit-test suite currently. Treat validation scripts plus production build as the required QA baseline. For lesson work, verify that manifest entries, aliases, resource links, slide image paths, previous/next navigation, and completion controls still work. Run the relevant validator before building; run both validators when touching shared routing or dashboard code.

## Commit & Pull Request Guidelines

Recent commits use concise imperative messages, for example `Expand HMMER lesson content and walkthroughs`. Follow that style: start with a verb and name the course or feature affected. Pull requests should summarize changed courses/pages, list validation/build commands run, mention any unresolved TODO resources, and include screenshots for visible dashboard or lesson-layout changes.

## Agent-Specific Instructions

Avoid large global refactors unless requested. Preserve existing course content and legacy AMLB pages. Do not invent Drive, Colab, GitHub, recording, or transcript URLs; keep missing resources visibly pending.
