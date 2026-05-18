# Unified Study Guide source

This is the editable source for the full study hub.

## Edit workflow

From the repository root:

```bash
npm install
npm run dev
```

Edit the shared app here:

```text
StudyGuide-src/src/App.jsx
```

The local preview updates automatically.

## Publish workflow

From the repository root:

```bash
npm run build
git add .
git commit -m "Update study guides"
git push
```

The build writes the public pages into:

```text
index.html
AMLB/index.html
MP/index.html
assets/
```

## Existing AMLB content

The original Applied Machine Learning pages are preserved in:

```text
AMLB/legacy/
```

The new AMLB dashboard displays those pages inside the unified interface, and the old URLs redirect to the new routes.


## Favicons

Each entry page has its own favicon:

```text
favicons/hub.svg      # general Study Hub
favicons/amlb.svg     # Applied Machine Learning
favicons/mp.svg       # Molecular Phylogenetics
```

The source copies live in `StudyGuide-src/favicons/` for local Vite preview.
The published copies live in `favicons/` for GitHub Pages.
