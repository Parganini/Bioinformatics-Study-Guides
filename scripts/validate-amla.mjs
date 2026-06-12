import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  AMLA_ALIAS_TO_ID,
  AMLA_DRIVE,
  AMLA_LESSONS,
  AMLA_MODULES,
  AMLA_STATUS,
  getAMLALessonById,
  getAMLANeighbors,
} from "../StudyGuide-src/src/lessons/amla/amlaManifest.js";
import { AMLA_LESSON_LOADERS } from "../StudyGuide-src/src/lessons/amla/amlaLessonRegistry.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const amlaRoot = path.join(repoRoot, "StudyGuide-src", "src", "lessons", "amla");
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
    assert(isHttpUrl(value), `${lesson.id}.resources.${key} must be an absolute URL, null or a todo object`);
    return;
  }
  assert(typeof value === "object" && value.todo, `${lesson.id}.resources.${key} object must include todo`);
}

async function readLessonContent(lesson) {
  const moduleUrl = new URL(`../StudyGuide-src/src/lessons/amla/${lesson.id}/content.js`, import.meta.url);
  try {
    return await import(moduleUrl.href);
  } catch (error) {
    fail(`${lesson.id}/content.js failed to import: ${error.message}`);
    return null;
  }
}

const moduleIds = new Set(AMLA_MODULES.map((module) => module.id));
const statusIds = new Set(Object.keys(AMLA_STATUS));
const lessonIds = new Set();
const aliases = new Set();
const routeChecks = [];
const canonicalPattern = /^amla-2026-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$/;

assert(AMLA_LESSONS.length > 0, "AMLA_LESSONS must not be empty");
assert(isHttpUrl(AMLA_DRIVE.root), "AMLA_DRIVE.root must be a URL");
assert(isHttpUrl(AMLA_DRIVE.transcriptions), "AMLA_DRIVE.transcriptions must be a URL");

for (const lesson of AMLA_LESSONS) {
  assert(canonicalPattern.test(lesson.id), `${lesson.id} must use amla-2026-mm-dd-topic route style`);
  assert(!lessonIds.has(lesson.id), `Duplicate lesson id: ${lesson.id}`);
  lessonIds.add(lesson.id);
  assert(lesson.code, `${lesson.id} is missing code`);
  assert(moduleIds.has(lesson.module), `${lesson.id} has unknown module: ${lesson.module}`);
  assert(statusIds.has(lesson.status), `${lesson.id} has unknown status: ${lesson.status}`);
  assert(lesson.date, `${lesson.id} is missing date`);
  assert(lesson.title, `${lesson.id} is missing title`);
  assert(lesson.summary, `${lesson.id} is missing summary`);
  assert(Array.isArray(lesson.tags), `${lesson.id}.tags must be an array`);
  assert(Array.isArray(lesson.products), `${lesson.id}.products must be an array`);
  assert(Array.isArray(lesson.aliases), `${lesson.id}.aliases must be an array`);
  assert(isHttpUrl(lesson.driveFolder), `${lesson.id}.driveFolder must be a URL`);
  assert(lesson.componentKey, `${lesson.id} is missing componentKey`);
  assert(AMLA_LESSON_LOADERS[lesson.componentKey], `${lesson.id} componentKey '${lesson.componentKey}' is not in amlaLessonRegistry`);

  const lessonDir = path.join(amlaRoot, lesson.id);
  assert(fs.existsSync(lessonDir), `${lesson.id} folder is missing`);
  for (const file of ["index.jsx", "content.js", "interactions.jsx"]) {
    assert(fs.existsSync(path.join(lessonDir, file)), `${lesson.id} is missing ${file}`);
  }

  for (const alias of lesson.aliases) {
    assert(alias !== lesson.id, `${lesson.id} repeats its own id as an alias`);
    assert(!aliases.has(alias), `Duplicate alias: ${alias}`);
    aliases.add(alias);
    routeChecks.push(alias);
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
    for (const key of ["objectives", "coreConcepts", "professorEmphasis", "commonTraps", "quickQuiz", "examQuestions", "studyChecklist"]) {
      assert(Array.isArray(content[key]), `${lesson.id}.${key} must be an array`);
    }
    if (lesson.status === "available") {
      assert(content.objectives.length >= 4, `${lesson.id} complete lesson needs at least 4 objectives`);
      assert(content.coreConcepts.length >= 4, `${lesson.id} complete lesson needs coreConcepts`);
      assert(content.quickQuiz.length >= 5, `${lesson.id} complete lesson needs at least 5 quick quiz items`);
      assert(content.examQuestions.length >= 3, `${lesson.id} complete lesson needs at least 3 exam questions`);
    }
  }
}

for (const lesson of AMLA_LESSONS) {
  assert(getAMLALessonById(lesson.id)?.id === lesson.id, `${lesson.id} canonical route does not resolve`);
  const { previous, next } = getAMLANeighbors(lesson.id);
  if (previous) assert(lessonIds.has(previous.id), `${lesson.id} previous neighbor is not in manifest`);
  if (next) assert(lessonIds.has(next.id), `${lesson.id} next neighbor is not in manifest`);
}

for (const alias of routeChecks) {
  const resolvedId = AMLA_ALIAS_TO_ID[alias];
  assert(resolvedId, `Alias ${alias} is not in AMLA_ALIAS_TO_ID`);
  assert(getAMLALessonById(alias)?.id === resolvedId, `Alias ${alias} does not resolve to ${resolvedId}`);
}

if (AMLA_LESSONS.filter((lesson) => lesson.status === "available").length !== 2) {
  warn("Phase 1 expects exactly two complete available AMLA lessons.");
}

const summary = {
  lessons: AMLA_LESSONS.length,
  aliases: aliases.size,
  components: Object.keys(AMLA_LESSON_LOADERS).length,
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
