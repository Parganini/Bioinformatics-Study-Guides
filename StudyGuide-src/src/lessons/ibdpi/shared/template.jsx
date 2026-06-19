import React, { useState } from "react";
import { getIBDPINeighbors } from "../ibdpiManifest.js";
import { IBDPIResourcePanel } from "./resourcePanel.jsx";
import { IBDPILessonNavigation } from "./navigation.jsx";
import { IBDPISection, IBDPIPillList } from "./components.jsx";

function PriorityBadge({ value }) {
  const className = value === "high" ? "bg-red-700 text-white" : value === "medium" ? "bg-amber-100 text-amber-800" : "bg-stone-100 text-stone-600";
  return <span className={`rounded-full px-3 py-1 text-xs font-black uppercase ${className}`}>{value}</span>;
}

function staticAssetUrl(image) {
  if (!image || typeof image !== "string") return null;
  if (/^(https?:|data:|blob:|\/)/.test(image)) return image;
  const base = import.meta.env.BASE_URL || "./";
  if (base === "./") return `../${image}`;
  return `${base.replace(/\/?$/, "/")}${image}`;
}

function slideSourceHref(lesson, slide) {
  if (slide.href && typeof slide.href === "string") return slide.href;
  const slideDeckLabel = slide.deckLabel?.toLowerCase();
  const match = (lesson.resources?.extra || []).find((item) => (
    item.href && slideDeckLabel && (
      item.label === slide.deckLabel
      || item.label === slide.deck
      || slideDeckLabel.includes(item.label.toLowerCase())
      || item.label.toLowerCase().includes(slideDeckLabel)
    )
  ));
  if (match?.href) return match.href;
  if (lesson.resources?.slides && typeof lesson.resources.slides === "string") return lesson.resources.slides;
  return null;
}

function SlidePreview({ lesson, slide, onZoom }) {
  const imageSrc = staticAssetUrl(slide.image);
  const sourceHref = slideSourceHref(lesson, slide);
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <div className="flex items-center justify-between gap-2 border-b border-stone-200 bg-stone-950 px-4 py-2 text-white">
        <div className="min-w-0">
          <div className="truncate text-xs font-black uppercase tracking-[0.16em] text-stone-300">{slide.deckLabel}</div>
          <div className="truncate text-sm font-black">{slide.page}</div>
        </div>
        {imageSrc ? (
          <button type="button" onClick={() => onZoom(slide)} className="rounded-full border border-white/20 px-3 py-1 text-xs font-black text-white hover:bg-white/10">
            Zoom
          </button>
        ) : sourceHref ? (
          <a href={sourceHref} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-3 py-1 text-xs font-black text-white hover:bg-white/10">
            PDF
          </a>
        ) : null}
      </div>
      {imageSrc ? (
        <button type="button" onClick={() => onZoom(slide)} className="block w-full bg-stone-100">
          <img src={imageSrc} alt={`${slide.deckLabel} ${slide.page}: ${slide.title}`} className="aspect-[16/10] w-full object-contain" loading="lazy" />
        </button>
      ) : (
        <div className="grid aspect-[16/10] place-items-center bg-[linear-gradient(135deg,#f8fafc_0%,#f8fafc_48%,#e0f2fe_48%,#e0f2fe_52%,#f8fafc_52%)] p-5 text-center">
          <div>
            <div className="mx-auto mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-sky-800">Important source slide</div>
            <div className="text-lg font-black leading-6 text-stone-950">{slide.title}</div>
            <div className="mt-2 text-sm font-bold leading-6 text-stone-600">Slide image extraction pending. Use the verified PDF link for the original slide.</div>
          </div>
        </div>
      )}
    </div>
  );
}

function SlideZoomModal({ slide, onClose }) {
  const imageSrc = staticAssetUrl(slide?.image);
  if (!slide || !imageSrc) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-stone-950/80 p-4" role="dialog" aria-modal="true" aria-label={`${slide.deckLabel} slide preview`}>
      <div className="max-h-[92vh] w-[min(1120px,100%)] overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-stone-200 px-4 py-3">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-700">{slide.deckLabel} · {slide.page}</div>
            <div className="font-black text-stone-950">{slide.title}</div>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white">Close</button>
        </div>
        <img src={imageSrc} alt={`${slide.deckLabel} ${slide.page}: ${slide.title}`} className="max-h-[78vh] w-full object-contain bg-stone-100" />
      </div>
    </div>
  );
}

export function IBDPIPlannedLesson({ lesson }) {
  return (
    <main className="mx-auto w-[min(980px,calc(100%-24px))] pb-16 pt-8">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <a href="#/" className="text-sm font-black text-sky-700">Back to IBDPI dashboard</a>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-950">{lesson?.title || "Planned lesson"}</h1>
        <p className="mt-3 text-stone-600">This lesson is listed in the course map but its source-based page is not available yet.</p>
      </div>
    </main>
  );
}

export function IBDPILessonTemplate({ lesson, content, interactions: Interactions, isDone, toggle }) {
  const { previous, next } = getIBDPINeighbors(lesson.id);
  const [zoomedSlide, setZoomedSlide] = useState(null);
  return (
    <main className="mx-auto w-[min(1120px,calc(100%-24px))] pb-16 pt-8 md:pt-10">
      <IBDPILessonNavigation lesson={lesson} isDone={isDone} toggle={toggle} />

      <section className="mt-6 overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/95 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-9">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-stone-950 px-3 py-1 text-xs font-black text-white">{lesson.code}</span>
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">{lesson.date}</span>
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">{lesson.lessonType}</span>
              <PriorityBadge value={lesson.examScope?.priority || "medium"} />
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-stone-950 md:text-5xl">{lesson.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">{lesson.summary}</p>
            <div className="mt-6">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-sky-700">OK exam scope</div>
              <div className="mt-3"><IBDPIPillList items={lesson.examScope?.okTopics || []} /></div>
            </div>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <IBDPIResourcePanel lesson={lesson} title="Verified source links" />
            <div className="mt-4 rounded-3xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-800">
              SKIP/low priority: {(lesson.examScope?.skippedTopics || ["None for this class"]).join("; ")}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <IBDPISection eyebrow="Study target" title="Objectives">
          <ul className="grid gap-3">
            {content.objectives.map((item) => <li key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">{item}</li>)}
          </ul>
        </IBDPISection>
        <IBDPISection eyebrow="Core concepts" title="What to know">
          <div className="grid gap-4 md:grid-cols-2">
            {content.coreConcepts.map((item) => (
              <article key={item.title} className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
                <h3 className="text-lg font-black text-stone-950">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.body}</p>
                <div className="mt-3"><IBDPIPillList items={item.keywords || []} /></div>
              </article>
            ))}
          </div>
        </IBDPISection>
      </div>

      <IBDPISection className="mt-8" eyebrow="Key slide walkthrough" title="Important slides and professor comments">
        <div className="grid gap-5">
          {content.walkthroughSections.map((group) => (
            <article key={group.title} className="rounded-3xl border border-stone-200 bg-white p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-sky-700 px-3 py-1 text-xs font-black text-white">{group.range}</span>
                <h3 className="text-xl font-black text-stone-950">{group.title}</h3>
              </div>
              <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{group.intro}</p>
              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                {group.slides.map((item) => (
                  <div key={`${group.title}-${item.label}-${item.title}`} className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
                    <SlidePreview lesson={lesson} slide={item} onZoom={setZoomedSlide} />
                    <div className="flex flex-wrap gap-2">
                      <span className="mt-3 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">{item.deckLabel}</span>
                      <span className="mt-3 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">{item.page}</span>
                      <span className={`rounded-full px-3 py-1 text-xs font-black ${item.corsoStatus === "SKIP" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`}>{item.corsoStatus}</span>
                      <span className={`rounded-full px-3 py-1 text-xs font-black ${item.examPriority === "high" ? "bg-red-700 text-white" : "bg-stone-200 text-stone-700"}`}>{item.examPriority}</span>
                    </div>
                    <h4 className="mt-3 text-lg font-black text-stone-950">{item.title}</h4>
                    <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.comment}</p>
                    <p className="mt-3 text-sm font-bold leading-6 text-sky-800">Professor emphasis: {item.professor}</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-amber-700">Remember: {item.remember}</p>
                    {item.trap ? <p className="mt-2 text-sm font-bold leading-6 text-red-700">Common trap: {item.trap}</p> : null}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </IBDPISection>
      <SlideZoomModal slide={zoomedSlide} onClose={() => setZoomedSlide(null)} />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <IBDPISection eyebrow="Hands-on" title="Command memory">
          <div className="grid gap-4">
            {content.handsOn.map((item) => (
              <article key={item.title} className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
                <h3 className="text-lg font-black text-stone-950">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.goal}</p>
                <pre className="mt-3 overflow-auto rounded-2xl bg-stone-950 p-4 text-xs font-bold leading-6 text-white">{item.commands.join("\n")}</pre>
                <p className="mt-3 text-sm font-bold text-emerald-700">Expected: {item.expectedResult}</p>
                <p className="mt-2 text-sm font-bold text-amber-700">Common error: {item.commonError}</p>
                <p className="mt-2 text-sm font-bold text-sky-700">Exam angle: {item.examAngle}</p>
              </article>
            ))}
          </div>
        </IBDPISection>
        <IBDPISection eyebrow="Exam checkpoints" title="Trap-aware questions">
          <div className="grid gap-3">
            {content.examCheckpoints.map((item) => (
              <details key={item.prompt} className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
                <summary className="cursor-pointer text-sm font-black leading-6 text-stone-950">{item.prompt}</summary>
                <p className="mt-3 text-sm font-semibold leading-6 text-stone-600">{item.answer}</p>
                <p className="mt-2 text-xs font-bold leading-5 text-amber-700">Common trap: {item.trap}</p>
              </details>
            ))}
          </div>
        </IBDPISection>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <IBDPISection eyebrow="Flashcards" title="Quick recall">
          <div className="grid gap-3 md:grid-cols-2">
            {content.flashcards.map((item) => <div key={item.front} className="rounded-3xl border border-stone-200 bg-stone-50 p-4"><div className="text-sm font-black text-stone-950">{item.front}</div><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.back}</p></div>)}
          </div>
        </IBDPISection>
        <IBDPISection eyebrow="Glossary" title="Terms">
          <div className="grid gap-3">
            {content.glossary.map((item) => <div key={`${lesson.id}-${item.term}`} className="rounded-2xl border border-stone-200 bg-stone-50 p-3 text-sm leading-6"><span className="font-black text-stone-950">{item.term}:</span> <span className="font-semibold text-stone-600">{item.definition}</span></div>)}
          </div>
        </IBDPISection>
      </div>

      <IBDPISection className="mt-8" eyebrow="Low priority" title="Skipped or not exam priority">
        <div className="grid gap-3 md:grid-cols-2">
          {content.skippedOrLowPriority.map((item) => (
            <div key={item.topic} className="rounded-3xl border border-amber-200 bg-amber-50 p-4">
              <h3 className="text-lg font-black text-amber-950">{item.topic}</h3>
              <p className="mt-2 text-sm font-bold leading-6 text-amber-800">{item.reason}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-amber-700">Know at most: {item.whatToKnowAtMost}</p>
            </div>
          ))}
        </div>
      </IBDPISection>

      {Interactions && (
        <IBDPISection className="mt-8" eyebrow="Practice strip" title="Fast self-check">
          <Interactions content={content} />
        </IBDPISection>
      )}

      <div className="mt-8">
        <IBDPILessonNavigation lesson={lesson} isDone={isDone} toggle={toggle} previous={previous} next={next} />
      </div>
    </main>
  );
}
