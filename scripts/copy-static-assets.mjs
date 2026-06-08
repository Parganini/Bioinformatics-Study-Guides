import { cp, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const copies = [
  {
    from: path.join(repoRoot, "AMLB", "legacy"),
    to: path.join(repoRoot, "dist", "AMLB", "legacy"),
  },
];

for (const { from, to } of copies) {
  if (!existsSync(from)) {
    console.warn(`Skipping missing static source: ${path.relative(repoRoot, from)}`);
    continue;
  }
  await mkdir(path.dirname(to), { recursive: true });
  await cp(from, to, { recursive: true, force: true });
  console.log(`Copied ${path.relative(repoRoot, from)} -> ${path.relative(repoRoot, to)}`);
}
