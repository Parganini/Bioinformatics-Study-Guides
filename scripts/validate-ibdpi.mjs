import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  IBDPI_ALIAS_TO_ID,
  IBDPI_DRIVE,
  IBDPI_LESSONS,
  IBDPI_MODULES,
  IBDPI_STATUS,
  getIBDPILessonById,
  getIBDPINeighbors,
} from "../StudyGuide-src/src/lessons/ibdpi/ibdpiManifest.js";
import { IBDPI_LESSON_LOADERS } from "../StudyGuide-src/src/lessons/ibdpi/ibdpiLessonRegistry.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const ibdpiRoot = path.join(repoRoot, "StudyGuide-src", "src", "lessons", "ibdpi");
const errors = [];
const warnings = [];

function fail(message) { errors.push(message); }
function warn(message) { warnings.push(message); }
function assert(condition, message) { if (!condition) fail(message); }

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function assertResourceValue(lesson, key, value) {
  if (value === null) return;
  if (typeof value === "string") {
    assert(isHttpUrl(value), `${lesson.id}.resources.${key} must be an absolute URL or a todo object`);
    assert(!/todo|pending|placeholder|example\.com/i.test(value), `${lesson.id}.resources.${key} looks like an invented placeholder URL`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertResourceValue(lesson, `${key}[${index}]`, item?.href ? item.href : item));
    return;
  }
  assert(typeof value === "object", `${lesson.id}.resources.${key} must be a URL, array or todo object`);
  if (value.href) {
    assertResourceValue(lesson, `${key}.href`, value.href);
    return;
  }
  assert(value.todo && typeof value.todo === "string", `${lesson.id}.resources.${key} object must include todo`);
}

async function readLessonContent(lesson) {
  const moduleUrl = new URL(`../StudyGuide-src/src/lessons/ibdpi/${lesson.id}/content.js`, import.meta.url);
  try {
    return await import(moduleUrl.href);
  } catch (error) {
    fail(`${lesson.id}/content.js failed to import: ${error.message}`);
    return null;
  }
}

const moduleIds = new Set(IBDPI_MODULES.map((module) => module.id));
const statusIds = new Set(Object.keys(IBDPI_STATUS));
const lessonIds = new Set();
const aliases = new Set();
const canonicalPattern = /^ibdpi-2026-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$/;

assert(IBDPI_LESSONS.length === 14, "IBDPI_LESSONS should include the 14 chronological class entries");
assert(isHttpUrl(IBDPI_DRIVE.root), "IBDPI_DRIVE.root must be a URL");
assert(isHttpUrl(IBDPI_DRIVE.corso), "IBDPI_DRIVE.corso must be a URL");

for (const lesson of IBDPI_LESSONS) {
  assert(canonicalPattern.test(lesson.id), `${lesson.id} must use ibdpi-2026-mm-dd-topic route style`);
  assert(!lessonIds.has(lesson.id), `Duplicate lesson id: ${lesson.id}`);
  lessonIds.add(lesson.id);
  for (const key of ["id", "code", "module", "date", "title", "summary", "status", "lessonType", "componentKey", "driveFolder", "resources", "examScope"]) {
    assert(lesson[key], `${lesson.id} is missing ${key}`);
  }
  assert(moduleIds.has(lesson.module), `${lesson.id} has unknown module: ${lesson.module}`);
  assert(statusIds.has(lesson.status), `${lesson.id} has unknown status: ${lesson.status}`);
  assert(Array.isArray(lesson.tags), `${lesson.id}.tags must be an array`);
  assert(Array.isArray(lesson.products), `${lesson.id}.products must be an array`);
  assert(Array.isArray(lesson.aliases), `${lesson.id}.aliases must be an array`);
  assert(isHttpUrl(lesson.driveFolder), `${lesson.id}.driveFolder must be a URL`);
  assert(lesson.examScope?.priority, `${lesson.id}.examScope.priority is missing`);
  assert(Array.isArray(lesson.examScope?.okTopics), `${lesson.id}.examScope.okTopics must be an array`);
  assert(Array.isArray(lesson.examScope?.skippedTopics), `${lesson.id}.examScope.skippedTopics must be an array`);

  if (lesson.status === "available") {
    assert(lesson.componentKey, `${lesson.id} is available but missing componentKey`);
    assert(IBDPI_LESSON_LOADERS[lesson.componentKey], `${lesson.id} componentKey '${lesson.componentKey}' is not in ibdpiLessonRegistry`);
  }

  const lessonDir = path.join(ibdpiRoot, lesson.id);
  assert(fs.existsSync(lessonDir), `${lesson.id} folder is missing`);
  for (const file of ["index.jsx", "content.js", "interactions.jsx"]) {
    assert(fs.existsSync(path.join(lessonDir, file)), `${lesson.id} is missing ${file}`);
  }

  for (const alias of lesson.aliases) {
    assert(alias !== lesson.id, `${lesson.id} repeats its own id as an alias`);
    assert(!aliases.has(alias), `Duplicate alias: ${alias}`);
    aliases.add(alias);
    assert(IBDPI_ALIAS_TO_ID[alias] === lesson.id, `Alias ${alias} does not map to ${lesson.id}`);
  }

  for (const [key, value] of Object.entries(lesson.resources || {})) {
    assertResourceValue(lesson, key, value);
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
    for (const key of ["objectives", "coreConcepts", "walkthroughSections", "handsOn", "examCheckpoints", "flashcards", "glossary", "skippedOrLowPriority"]) {
      assert(Array.isArray(content[key]), `${lesson.id}.${key} must be an array`);
    }
    if (lesson.status === "available") {
      assert(content.objectives.length >= 5 && content.objectives.length <= 8, `${lesson.id} needs 5-8 objectives`);
      assert(content.coreConcepts.length >= 8 && content.coreConcepts.length <= 15, `${lesson.id} needs 8-15 core concepts`);
      assert(content.walkthroughSections.length >= 3 && content.walkthroughSections.length <= 6, `${lesson.id} needs 3-6 walkthrough sections`);
      assert(content.flashcards.length >= 5 && content.flashcards.length <= 10, `${lesson.id} needs 5-10 flashcards`);
      assert(content.examCheckpoints.length >= 3 && content.examCheckpoints.length <= 6, `${lesson.id} needs 3-6 exam checkpoints`);
    }
  }
}

for (const lesson of IBDPI_LESSONS) {
  assert(getIBDPILessonById(lesson.id)?.id === lesson.id, `${lesson.id} canonical route does not resolve`);
  const { previous, next } = getIBDPINeighbors(lesson.id);
  if (previous) assert(lessonIds.has(previous.id), `${lesson.id} previous neighbor is not in manifest`);
  if (next) assert(lessonIds.has(next.id), `${lesson.id} next neighbor is not in manifest`);
}

if (IBDPI_LESSONS.some((lesson) => lesson.status !== "available")) {
  warn("Some IBDPI lessons are not available.");
}

const summary = {
  lessons: IBDPI_LESSONS.length,
  aliases: aliases.size,
  components: Object.keys(IBDPI_LESSON_LOADERS).length,
  warnings: warnings.length,
  errors: errors.length,
};

if (warnings.length) console.warn(warnings.map((message) => `Warning: ${message}`).join("\n"));
if (errors.length) {
  console.error(errors.map((message) => `Error: ${message}`).join("\n"));
  console.error(JSON.stringify(summary, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(summary, null, 2));
