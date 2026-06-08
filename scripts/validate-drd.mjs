import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  DRD_ALIAS_TO_ID,
  DRD_DRIVE,
  DRD_FINAL_REPORT,
  DRD_LESSONS,
  DRD_MODULES,
  DRD_STATUS,
  getDRDNeighbors,
  getDRDLessonById,
} from "../StudyGuide-src/src/lessons/drd/drdManifest.js";
import { DRD_LESSON_LOADERS } from "../StudyGuide-src/src/lessons/drd/drdLessonRegistry.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const drdRoot = path.join(repoRoot, "StudyGuide-src", "src", "lessons", "drd");
const checkNetwork = process.argv.includes("--check-links");

const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function hostMatches(value, allowedHosts) {
  try {
    const { hostname } = new URL(value);
    return allowedHosts.some((host) => hostname === host || hostname.endsWith(`.${host}`));
  } catch {
    return false;
  }
}

function validateResourceUrl(lesson, key, value) {
  assert(isHttpUrl(value), `${lesson.id}.${key} must be an absolute http(s) URL`);
  if (key === "slides" || key === "code") {
    assert(hostMatches(value, ["drive.google.com"]), `${lesson.id}.${key} should be a Google Drive file URL`);
  }
  if (key === "transcript") {
    assert(hostMatches(value, ["docs.google.com"]), `${lesson.id}.${key} should be a Google Docs URL`);
  }
  if (key === "recording") {
    assert(hostMatches(value, ["youtube.com", "youtu.be"]), `${lesson.id}.${key} should be a YouTube URL`);
  }
}

async function readLessonContent(lesson) {
  const contentPath = path.join(drdRoot, lesson.id, "content.js");
  if (!fs.existsSync(contentPath)) {
    fail(`${lesson.id} is missing content.js`);
    return null;
  }
  const moduleUrl = new URL(`../StudyGuide-src/src/lessons/drd/${lesson.id}/content.js`, import.meta.url);
  try {
    return await import(moduleUrl.href);
  } catch (error) {
    fail(`${lesson.id}/content.js failed to import: ${error.message}`);
    return null;
  }
}

async function checkLink(url, label) {
  try {
    const response = await fetch(url, { method: "HEAD", redirect: "follow" });
    if (response.status >= 400) {
      warn(`${label} returned HTTP ${response.status}`);
    }
  } catch (error) {
    warn(`${label} could not be checked: ${error.message}`);
  }
}

const moduleIds = new Set(DRD_MODULES.map((module) => module.id));
const statusIds = new Set(Object.keys(DRD_STATUS));
const lessonIds = new Set();
const aliases = new Set();
const canonicalPattern = /^m[12]-[a-z0-9]+(?:-[a-z0-9]+)*$/;
const routeChecks = [];
const networkChecks = [];

assert(DRD_LESSONS.length > 0, "DRD_LESSONS must not be empty");
assert(isHttpUrl(DRD_DRIVE.root), "DRD_DRIVE.root must be a URL");
assert(isHttpUrl(DRD_FINAL_REPORT.folder), "DRD_FINAL_REPORT.folder must be a URL");

for (const lesson of DRD_LESSONS) {
  assert(lesson.id, "Every lesson needs an id");
  assert(canonicalPattern.test(lesson.id), `${lesson.id} must use canonical m1-/m2- route style`);
  assert(!lessonIds.has(lesson.id), `Duplicate lesson id: ${lesson.id}`);
  lessonIds.add(lesson.id);

  assert(lesson.code, `${lesson.id} is missing code`);
  assert(moduleIds.has(lesson.module), `${lesson.id} has unknown module: ${lesson.module}`);
  assert(statusIds.has(lesson.status), `${lesson.id} has unknown status: ${lesson.status}`);
  assert(lesson.date, `${lesson.id} is missing date`);
  assert(lesson.title, `${lesson.id} is missing title`);
  assert(lesson.summary, `${lesson.id} is missing summary`);
  assert(Array.isArray(lesson.tags), `${lesson.id}.tags must be an array`);
  assert(Array.isArray(lesson.aliases), `${lesson.id}.aliases must be an array`);
  assert(isHttpUrl(lesson.driveFolder), `${lesson.id}.driveFolder must be a URL`);
  const lessonDir = path.join(drdRoot, lesson.id);
  const indexPath = path.join(lessonDir, "index.jsx");
  assert(fs.existsSync(lessonDir), `${lesson.id} folder is missing`);
  assert(fs.existsSync(indexPath), `${lesson.id} is missing index.jsx`);
  assert(fs.existsSync(path.join(drdRoot, lesson.id, "interactions.jsx")), `${lesson.id} is missing interactions.jsx`);

  assert(lesson.componentKey, `${lesson.id} is missing componentKey`);
  assert(DRD_LESSON_LOADERS[lesson.componentKey], `${lesson.id} componentKey '${lesson.componentKey}' is not in drdLessonRegistry`);

  for (const alias of lesson.aliases) {
    assert(alias !== lesson.id, `${lesson.id} repeats its own id as an alias`);
    assert(!lessonIds.has(alias), `${lesson.id} alias '${alias}' collides with a canonical id`);
    assert(!aliases.has(alias), `Duplicate alias: ${alias}`);
    aliases.add(alias);
    routeChecks.push(alias);
  }

  for (const [key, value] of Object.entries(lesson.resources || {})) {
    validateResourceUrl(lesson, key, value);
    networkChecks.push({ label: `${lesson.id}.${key}`, url: value });
  }

  if (lesson.status === "available") {
    assert(lesson.resources?.slides, `${lesson.id} is available but missing slides`);
    assert(lesson.resources?.transcript, `${lesson.id} is available but missing transcript`);
    assert(lesson.resources?.recording, `${lesson.id} is available but missing recording`);
  }

  const contentModule = await readLessonContent(lesson);
  const content = contentModule?.lessonContent;
  assert(content, `${lesson.id}/content.js must export lessonContent`);
  if (content) {
    assert(content.id === lesson.id, `${lesson.id}/content.js exports mismatched id '${content.id}'`);
    assert(Array.isArray(content.objectives), `${lesson.id}.objectives must be an array`);
    assert(Array.isArray(content.coreConcepts), `${lesson.id}.coreConcepts must be an array`);
    assert(Array.isArray(content.professorEmphasis), `${lesson.id}.professorEmphasis must be an array`);
    assert(Array.isArray(content.examTraps), `${lesson.id}.examTraps must be an array`);
    assert(Array.isArray(content.checkpoints), `${lesson.id}.checkpoints must be an array`);
    assert(Array.isArray(content.reportChecklist), `${lesson.id}.reportChecklist must be an array`);
    if (content.extractionStatus && content.extractionStatus !== "legacy-wrapper") {
      const indexSource = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, "utf8") : "";
      assert(indexSource.includes("DRDLessonTemplate"), `${lesson.id} has structured content but does not use DRDLessonTemplate`);
      assert(content.objectives.length > 0, `${lesson.id} structured content needs objectives`);
      assert(content.coreConcepts.length > 0, `${lesson.id} structured content needs coreConcepts`);
      assert(content.checkpoints.length > 0, `${lesson.id} structured content needs checkpoints`);
    }
  }
}

for (const lesson of DRD_LESSONS) {
  assert(getDRDLessonById(lesson.id)?.id === lesson.id, `${lesson.id} canonical route does not resolve`);
}

for (const alias of routeChecks) {
  const resolvedId = DRD_ALIAS_TO_ID[alias];
  assert(resolvedId, `Alias ${alias} is not in DRD_ALIAS_TO_ID`);
  assert(getDRDLessonById(alias)?.id === resolvedId, `Alias ${alias} does not resolve to ${resolvedId}`);
}

for (const lesson of DRD_LESSONS) {
  const { previous, next } = getDRDNeighbors(lesson.id);
  if (previous) assert(lessonIds.has(previous.id), `${lesson.id} previous neighbor is not in manifest`);
  if (next) assert(lessonIds.has(next.id), `${lesson.id} next neighbor is not in manifest`);
}

if (checkNetwork) {
  await Promise.all(networkChecks.map(({ label, url }) => checkLink(url, label)));
}

const summary = {
  lessons: DRD_LESSONS.length,
  aliases: aliases.size,
  components: Object.keys(DRD_LESSON_LOADERS).length,
  resourceUrls: networkChecks.length,
  networkChecked: checkNetwork,
  warnings: warnings.length,
  errors: errors.length,
};

if (warnings.length) {
  console.warn(warnings.map((message) => `Warning: ${message}`).join("\n"));
}

if (errors.length) {
  console.error(errors.map((message) => `Error: ${message}`).join("\n"));
  console.error(JSON.stringify(summary, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(summary, null, 2));
