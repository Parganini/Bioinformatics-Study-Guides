import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { AG_SLIDE_SELECTION } from "../StudyGuide-src/src/lessons/genomics/agSources.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(repoRoot, "tmp", "ag-sources");
const outputRoot = path.join(repoRoot, "StudyGuide-src", "public");
const tempDir = path.join(repoRoot, "tmp", "ag-slide-renders");

const dependencyRoot = path.join(
  process.env.USERPROFILE || "",
  ".cache",
  "codex-runtimes",
  "codex-primary-runtime",
  "dependencies"
);

const pdftoppm = path.join(dependencyRoot, "bin", "pdftoppm.cmd");
const python = path.join(dependencyRoot, "python", "python.exe");

function run(command, args, label) {
  const result = spawnSync(command, args, { encoding: "utf8", stdio: "pipe" });
  if (result.status !== 0) {
    throw new Error(`${label} failed\n${result.stdout}\n${result.stderr}`);
  }
  return result;
}

function renderSlide(slide) {
  const pdfPath = path.join(sourceDir, slide.source);
  if (!existsSync(pdfPath)) {
    return { ok: false, missing: pdfPath };
  }

  const assetPath = path.join(outputRoot, slide.asset);
  mkdirSync(path.dirname(assetPath), { recursive: true });
  mkdirSync(tempDir, { recursive: true });

  const prefix = path.join(tempDir, `${slide.id}-p${String(slide.page).padStart(3, "0")}`);
  run(pdftoppm, ["-f", String(slide.page), "-l", String(slide.page), "-r", "150", "-png", pdfPath, prefix], `Render ${slide.id}`);

  const renderedPng = readdirSync(tempDir)
    .filter((file) => file.startsWith(path.basename(prefix)) && file.endsWith(".png"))
    .map((file) => path.join(tempDir, file))[0];
  if (!renderedPng || !existsSync(renderedPng)) {
    throw new Error(`Expected render not found for ${slide.id}`);
  }

  const code = [
    "from PIL import Image",
    "import sys",
    "src, dst = sys.argv[1], sys.argv[2]",
    "im = Image.open(src).convert('RGB')",
    "im.thumbnail((1600, 1000), Image.Resampling.LANCZOS)",
    "im.save(dst, 'WEBP', quality=82, method=6)",
  ].join("\n");

  run(python, ["-c", code, renderedPng, assetPath], `Optimize ${slide.id}`);
  rmSync(renderedPng, { force: true });
  return { ok: true, asset: assetPath };
}

if (!existsSync(pdftoppm)) {
  throw new Error(`Poppler renderer not found: ${pdftoppm}`);
}

if (!existsSync(python)) {
  throw new Error(`Python runtime not found: ${python}`);
}

const missing = [];
let rendered = 0;

for (const slide of AG_SLIDE_SELECTION) {
  const result = renderSlide(slide);
  if (result.ok) {
    rendered += 1;
    console.log(`Rendered ${slide.id} -> ${slide.asset}`);
  } else {
    missing.push(result.missing);
  }
}

if (missing.length) {
  console.error("\nMissing source PDFs. Place these files before rerunning:");
  for (const file of [...new Set(missing)]) {
    console.error(`- ${file}`);
  }
  process.exitCode = 1;
} else {
  rmSync(tempDir, { recursive: true, force: true });
  console.log(`\nRendered ${rendered} Applied Genomics slide assets.`);
}
