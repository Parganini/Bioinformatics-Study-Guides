import React, { useEffect, useMemo, useState } from "react";
import { AG_SOURCE_FILES, AG_SOURCE_FOLDER, AG_TRANSCRIPT_FOLDER, driveFileUrl } from "./agSources.js";
import { AG_EXAM_STATS, AG_GUIDE_SECTIONS, AG_PROGRESS_KEY, getSlidesForSection } from "./agStudyGuideData.js";
import { LectureSection, SlideZoom, SourceBadge } from "./components.jsx";

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function percent(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

function sectionIdFromHash(hash) {
  if (!hash || hash === "#/" || hash === "#") return null;
  const sectionRoute = hash.match(/^#\/section\/([^/?#]+)/);
  if (sectionRoute) return decodeURIComponent(sectionRoute[1]);
  const legacyAnchor = hash.match(/^#([^/].*)/);
  if (legacyAnchor) return decodeURIComponent(legacyAnchor[1]);
  return null;
}

function sectionHref(section) {
  return `#/section/${section.id}`;
}

function GuideHeader({ completedCount, progress, nextSection, sourceLinks }) {
  return (
    <>
      <section className="rounded-[2rem] border border-emerald-200 bg-white/90 p-6 shadow-sm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-emerald-700">Applied Genomics</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">Exam-focused study guide</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
              Chronological review from course orientation through NGS technologies, data analysis, assembly,
              annotation, population genomics, GWAS and project preparation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={sectionHref(nextSection)} className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-emerald-800">
                Continue guide
              </a>
              <a href="#/practice-exam" className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-black text-emerald-800 transition hover:-translate-y-0.5 hover:bg-emerald-100">
                Practice exam
              </a>
              <a href="../index.html" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-black text-stone-800 transition hover:-translate-y-0.5 hover:shadow-md">
                Main hub
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-stone-500">Guide progress</p>
                <p className="mt-2 text-3xl font-black text-stone-950">{progress}%</p>
              </div>
              <p className="text-sm font-bold text-stone-600">{completedCount}/{AG_GUIDE_SECTIONS.length} sections</p>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-emerald-700 transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {AG_EXAM_STATS.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white p-3">
                  <p className="text-xs font-bold text-stone-500">{stat.label}</p>
                  <p className="mt-1 text-lg font-black text-stone-950">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-stone-200 bg-white/90 p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-stone-500">Original sources</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">
              Drive path confirmed from the provided Applied Genomics source list. Professor transcript files were not included in this lightweight archive, so unsupported comments are not fabricated.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={AG_SOURCE_FOLDER} target="_blank" rel="noreferrer" className="rounded-full bg-stone-900 px-3 py-2 text-xs font-black text-white">Drive folder</a>
              {AG_TRANSCRIPT_FOLDER ? (
                <a href={AG_TRANSCRIPT_FOLDER} target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 bg-white px-3 py-2 text-xs font-black text-stone-800">Transcripts</a>
              ) : (
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-black text-amber-800">Transcripts not bundled</span>
              )}
            </div>
          </div>
          <div className="max-h-28 overflow-auto pr-1 lg:max-w-[520px]">
            <div className="flex flex-wrap gap-2">
              {sourceLinks.map((file) => (
                <a key={file.driveId} href={file.url} target="_blank" rel="noreferrer">
                  <SourceBadge>{file.title}</SourceBadge>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function GuideIndex({ completed }) {
  return (
    <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white/90 p-5 shadow-sm md:p-7">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700">Pages</p>
          <h2 className="mt-2 text-3xl font-black text-stone-950">Chronological route</h2>
        </div>
        <a href="#/practice-exam" className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-black text-emerald-800 transition hover:bg-emerald-100">
          Practice exam
        </a>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {AG_GUIDE_SECTIONS.map((section) => (
          <a
            key={section.id}
            href={sectionHref(section)}
            className="group rounded-2xl border border-stone-200 bg-stone-50 p-4 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="rounded-xl bg-white px-3 py-2 text-sm font-black text-emerald-800">Section {section.number}</div>
              <span className={completed[section.id] ? "rounded-full bg-emerald-700 px-3 py-1 text-xs font-black text-white" : "rounded-full border border-stone-300 bg-white px-3 py-1 text-xs font-black text-stone-600"}>
                {completed[section.id] ? "Done" : "Open"}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-black leading-6 text-stone-950 group-hover:text-emerald-950">{section.title}</h3>
            <p className="mt-3 line-clamp-3 text-sm font-semibold leading-6 text-stone-600">{section.remember}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {section.sources.slice(0, 2).map((source) => (
                <span key={source} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-black text-stone-500">
                  {source}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function PageNav({ previous, next }) {
  return (
    <nav className="mt-6 flex flex-col gap-3 rounded-[2rem] border border-stone-200 bg-white/90 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <a href="#/" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-black text-stone-800 transition hover:bg-stone-50">
        All pages
      </a>
      <div className="flex flex-col gap-3 sm:flex-row">
        {previous && (
          <a href={sectionHref(previous)} className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-black text-emerald-800 transition hover:bg-emerald-100">
            Previous: {previous.number}
          </a>
        )}
        {next && (
          <a href={sectionHref(next)} className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-800">
            Next: {next.number}
          </a>
        )}
      </div>
    </nav>
  );
}

export default function AppliedGenomicsGuide({ hash = "" }) {
  const [completed, setCompleted] = useState(() => readJson(AG_PROGRESS_KEY, {}));
  const [checks, setChecks] = useState(() => readJson(`${AG_PROGRESS_KEY}_checks`, {}));
  const [zoomSlide, setZoomSlide] = useState(null);

  useEffect(() => writeJson(AG_PROGRESS_KEY, completed), [completed]);
  useEffect(() => writeJson(`${AG_PROGRESS_KEY}_checks`, checks), [checks]);

  const completedCount = AG_GUIDE_SECTIONS.filter((section) => completed[section.id]).length;
  const nextSection = AG_GUIDE_SECTIONS.find((section) => !completed[section.id]) || AG_GUIDE_SECTIONS[0];
  const progress = percent(completedCount, AG_GUIDE_SECTIONS.length);
  const requestedSectionId = sectionIdFromHash(hash);
  const activeSection = AG_GUIDE_SECTIONS.find((section) => section.id === requestedSectionId) || null;
  const activeIndex = activeSection ? AG_GUIDE_SECTIONS.findIndex((section) => section.id === activeSection.id) : -1;
  const previousSection = activeIndex > 0 ? AG_GUIDE_SECTIONS[activeIndex - 1] : null;
  const followingSection = activeIndex >= 0 && activeIndex < AG_GUIDE_SECTIONS.length - 1 ? AG_GUIDE_SECTIONS[activeIndex + 1] : null;

  const sourceLinks = useMemo(
    () =>
      AG_SOURCE_FILES.map((file) => ({
        ...file,
        url: driveFileUrl(file.driveId),
      })),
    []
  );

  const toggleSection = (id) => {
    setCompleted((current) => ({ ...current, [id]: !current[id] }));
  };

  const toggleChecklist = (sectionId, itemId) => {
    setChecks((current) => ({
      ...current,
      [sectionId]: {
        ...(current[sectionId] || {}),
        [itemId]: !current[sectionId]?.[itemId],
      },
    }));
  };

  return (
    <main id="top" className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <GuideHeader completedCount={completedCount} progress={progress} nextSection={nextSection} sourceLinks={sourceLinks} />

      {activeSection ? (
        <>
          <PageNav previous={previousSection} next={followingSection} />
          <LectureSection
            section={activeSection}
            slides={getSlidesForSection(activeSection)}
            completed={Boolean(completed[activeSection.id])}
            onToggle={() => toggleSection(activeSection.id)}
            checklistState={checks[activeSection.id] || {}}
            onChecklistToggle={(itemId) => toggleChecklist(activeSection.id, itemId)}
            onZoom={setZoomSlide}
          />
          <PageNav previous={previousSection} next={followingSection} />
        </>
      ) : (
        <GuideIndex completed={completed} />
      )}

      <section className="mt-8 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700">Final drill</p>
            <h2 className="mt-2 text-2xl font-black text-emerald-950">Move from review into retrieval</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-emerald-900">
              Use the practice exam after this guide, then come back to the sections behind every missed answer.
            </p>
          </div>
          <a href="#/practice-exam" className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-800">
            Open practice exam
          </a>
        </div>
      </section>

      <SlideZoom slide={zoomSlide} onClose={() => setZoomSlide(null)} />
    </main>
  );
}
