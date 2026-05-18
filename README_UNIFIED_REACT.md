# Unified React/Vite version

The public site now has one unified interface for:

- `index.html` — main Study Hub
- `AMLB/index.html` — Applied Machine Learning dashboard
- `MP/index.html` — Molecular Phylogenetics dashboard

The original AMLB material is preserved under `AMLB/legacy/`, so existing lecture content is not lost.

## Daily editing

```bash
npm install
npm run dev
```

Edit:

```text
StudyGuide-src/src/App.jsx
```

## Publish

```bash
npm run build
git add .
git commit -m "Update unified study guide"
git push
```
