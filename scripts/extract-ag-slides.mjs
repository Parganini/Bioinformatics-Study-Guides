import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { AG_SLIDE_SELECTION } from "../StudyGuide-src/src/lessons/genomics/agSources.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const sourceDir = path.resolve(process.env.AG_SOURCE_DIR || path.join(repoRoot, "tmp", "ag-sources"));
const outputRoot = path.join(repoRoot, "StudyGuide-src", "public");
const tempDir = path.join(repoRoot, "tmp", "ag-slide-renders");
const python = process.env.PYTHON || "python3";
const pdftoppm = process.env.PDFTOPPM || "pdftoppm";

mkdirSync(tempDir, { recursive: true });
const manifestPath = path.join(tempDir, "ag-slide-selection.json");
writeFileSync(manifestPath, JSON.stringify(AG_SLIDE_SELECTION, null, 2));

const py = String.raw`
import json, os, shutil, subprocess, sys
from pathlib import Path
from PIL import Image

manifest, source_dir, output_root, temp_dir, pdftoppm = map(Path, sys.argv[1:6])
# pdftoppm is a command, not always a path-like file.
pdftoppm_cmd = str(pdftoppm)
slides = json.loads(manifest.read_text())
temp_dir.mkdir(parents=True, exist_ok=True)
missing = []
rendered = 0

for slide in slides:
    pdf = source_dir / slide["source"]
    if not pdf.exists():
        missing.append(str(pdf))
        continue
    print(f"Rendering {slide['id']} ({slide['source']} p.{slide['page']})", flush=True)
    prefix = temp_dir / f"{slide['id']}-p{int(slide['page']):03d}"
    subprocess.run([pdftoppm_cmd, "-f", str(slide["page"]), "-l", str(slide["page"]), "-r", "120", "-png", str(pdf), str(prefix)], check=True, timeout=60)
    pngs = sorted(temp_dir.glob(prefix.name + "*.png"))
    if not pngs:
        raise RuntimeError(f"Expected render not found for {slide['id']}")
    out = output_root / slide["asset"]
    out.parent.mkdir(parents=True, exist_ok=True)
    im = Image.open(pngs[0]).convert("RGB")
    im.thumbnail((1280, 800), Image.Resampling.LANCZOS)
    im.save(out, "WEBP", quality=78, method=0)
    pngs[0].unlink(missing_ok=True)
    rendered += 1
    print(f"Rendered {slide['id']} -> {slide['asset']}", flush=True)

shutil.rmtree(temp_dir, ignore_errors=True)
if missing:
    print(f"\nMissing source PDFs in {source_dir}. Place these files there, or run with AG_SOURCE_DIR=/path/to/pdfs:", file=sys.stderr)
    for item in sorted(set(missing)):
        print(f"- {item}", file=sys.stderr)
    sys.exit(1)
print(f"\nRendered {rendered} Applied Genomics slide assets.", flush=True)
`;

if (!existsSync(sourceDir)) {
  console.error(`Missing AG source directory: ${sourceDir}`);
  console.error("Put the Applied Genomics PDFs there, or run with AG_SOURCE_DIR=/path/to/pdfs.");
  process.exit(1);
}

const result = spawnSync(python, ["-c", py, manifestPath, sourceDir, outputRoot, tempDir, pdftoppm], {
  encoding: "utf8",
  stdio: "inherit",
  timeout: 180000,
});

if (result.error) {
  throw result.error;
}
process.exit(result.status ?? 1);
