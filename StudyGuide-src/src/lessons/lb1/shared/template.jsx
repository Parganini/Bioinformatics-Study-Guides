import React from "react";
import { LB1ResourcePanel } from "./resourcePanel.jsx";
import { LB1CanonicalNavigation } from "./navigation.jsx";
import { getLB1StatusMeta } from "./status.js";
import { LB1_PLANNED_CONTENT } from "../lb1Manifest.js";

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-5">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {children ? <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">{children}</p> : null}
    </div>
  );
}

function BulletList({ items = [] }) {
  if (!items.length) return null;
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm font-semibold leading-6 text-stone-700 marker:text-teal-700">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function StudyCallout({ label, tone = "stone", children }) {
  const classes = {
    stone: "border-stone-200 bg-white text-stone-700",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    emerald: "border-emerald-100 bg-emerald-50 text-emerald-950",
    teal: "border-teal-100 bg-teal-50 text-teal-950",
    red: "border-red-100 bg-red-50 text-red-950",
  };
  return (
    <div className={`mt-4 rounded-2xl border p-4 ${classes[tone] || classes.stone}`}>
      <div className="text-xs font-black uppercase tracking-[0.18em] opacity-70">{label}</div>
      <div className="mt-2 text-sm font-bold leading-6">{children}</div>
    </div>
  );
}

function ZoomableSlideImage({ src, alt }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="group relative block w-full cursor-zoom-in text-left">
        <img src={src} alt={alt} loading="lazy" className="aspect-video w-full rounded-[1.35rem] border border-stone-200 bg-white object-contain shadow-sm" />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-stone-200 bg-white/95 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-stone-700 shadow-sm transition group-hover:-translate-y-0.5">Click to zoom</span>
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-6xl rounded-[2rem] border border-stone-200 bg-white p-3 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setOpen(false)} className="absolute right-5 top-5 z-10 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-stone-700 shadow-sm transition hover:bg-stone-50">Close zoom</button>
            <img src={src} alt={alt} className="max-h-[82vh] w-full rounded-[1.5rem] object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}

function SlideAttachment({ slide, resources }) {
  const pdfLink = slide.sourceUrl || resources?.slides;
  const slideNumber = slide.page || slide.slideNumber;
  return (
    <div className="rounded-[1.75rem] border border-stone-200 bg-white p-3 shadow-sm">
      {slide.image ? (
        <ZoomableSlideImage src={slide.image} alt={slide.alt || `${slide.title} slide`} />
      ) : (
        <div className="aspect-video rounded-[1.35rem] border border-stone-200 bg-gradient-to-br from-white via-teal-50 to-stone-100 p-5">
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-teal-800">Source slide</span>
                {slideNumber ? <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-stone-600">Slide {slideNumber}</span> : null}
              </div>
              <h4 className="mt-4 text-lg font-black leading-6 text-stone-950">{slide.slideTitle || slide.title}</h4>
              <div className="mt-3 space-y-1 text-xs font-bold leading-5 text-stone-600">
                {(slide.slideBullets || []).slice(0, 4).map((bullet) => <p key={bullet}>- {bullet}</p>)}
              </div>
            </div>
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-stone-500">Open the PDF for the original visual layout</p>
          </div>
        </div>
      )}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">
        <span className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{slide.deckLabel || "Capriotti LB1 deck"}</span>
        {pdfLink ? <a href={pdfLink} target="_blank" rel="noreferrer" className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-black text-teal-800">Open PDF</a> : null}
      </div>
    </div>
  );
}

function Objectives({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Learning objectives" title="By the end you should be able to..." />
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((objective, index) => <div key={objective} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">{index + 1}. {objective}</div>)}
      </div>
    </section>
  );
}

function WhyThisMatters({ text }) {
  if (!text) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-teal-100 bg-teal-50 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Why this matters" title="The biological question behind the method" />
      <p className="max-w-4xl text-base font-bold leading-8 text-teal-950">{text}</p>
    </section>
  );
}

function ConceptGrid({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Concept map" title="Make these ideas connected" />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <h3 className="text-xl font-black text-stone-950">{item.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-7 text-stone-600">{item.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(item.keywords || []).map((keyword) => <span key={keyword} className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-black text-teal-800">{keyword}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RouteSteps({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Study route" title="Recommended path through the material" />
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item, index) => (
          <article key={item.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">Step {index + 1}</div>
            <h3 className="mt-2 text-lg font-black text-stone-950">{item.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SlideWalkthrough({ sections = [], resources }) {
  if (!sections.length) return null;
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
        <SectionHeading eyebrow="Slide walkthrough" title="Study the deck in source order">
          These are source-aware study cards. They paraphrase the slide logic, separate teaching emphasis from facts, and point you back to the PDF for the exact source.
        </SectionHeading>
        {resources?.slides ? (
          <a href={resources.slides} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-black text-teal-800">Open source PDF</a>
        ) : null}
      </div>
      {sections.map((section, sectionIndex) => (
        <article key={section.title} className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-black text-teal-800">Section {sectionIndex + 1}</span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-black text-stone-600">{section.range}</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{section.title}</h2>
          <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">{section.intro}</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {(section.slides || []).map((slide, slideIndex) => (
              <div key={`${section.title}-${slide.label || slideIndex}`} className={`rounded-[2rem] border border-stone-200 bg-stone-50 p-5 ${section.slides.length % 2 === 1 && slideIndex === section.slides.length - 1 ? "lg:col-span-2" : ""}`}>
                <SlideAttachment slide={slide} resources={resources} />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">{slide.label}</span>
                  {slide.page ? <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-black text-teal-800">Slide {slide.page}</span> : null}
                </div>
                <h3 className="mt-3 text-xl font-black leading-7 text-stone-950">{slide.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-stone-700">{slide.comment}</p>
                {slide.teaching ? <StudyCallout label="Teaching emphasis / study interpretation" tone="amber">{slide.teaching}</StudyCallout> : null}
                {slide.remember ? <StudyCallout label="What to remember" tone="emerald">{slide.remember}</StudyCallout> : null}
                {slide.trap ? <StudyCallout label="Common trap" tone="red">{slide.trap}</StudyCallout> : null}
                {slide.prompt ? <StudyCallout label="Exam-style prompt" tone="teal">{slide.prompt}</StudyCallout> : null}
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

function MiniLabs({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Mini-labs" title="Practice like a bioinformatician">
        Short applied drills in the style of the DNA lessons: make a decision, explain it, then check the trap.
      </SectionHeading>
      <div className="grid gap-4 lg:grid-cols-2">
        {items.map((lab, index) => (
          <article key={lab.title} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">Mini-lab {index + 1}</div>
            <h3 className="mt-2 text-xl font-black text-stone-950">{lab.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-7 text-stone-700">{lab.goal}</p>
            <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-4">
              <div className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">Do this</div>
              <div className="mt-2"><BulletList items={lab.steps} /></div>
            </div>
            {lab.output ? <StudyCallout label="Your output" tone="teal">{lab.output}</StudyCallout> : null}
            {lab.check ? <StudyCallout label="Self-check" tone="emerald">{lab.check}</StudyCallout> : null}
            {lab.trap ? <StudyCallout label="Trap to avoid" tone="red">{lab.trap}</StudyCallout> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Checkpoints({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Mini-checkpoints" title="Explain before you move on" />
      <div className="grid gap-3">
        {items.map((item, index) => (
          <details key={item.question} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4">
            <summary className="cursor-pointer text-sm font-black leading-6 text-stone-950">{index + 1}. {item.question}</summary>
            <p className="mt-3 rounded-2xl bg-white p-4 text-sm font-semibold leading-7 text-stone-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ModelAnswer({ item }) {
  if (!item) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="High-yield oral/written answer" title={item.question} />
      <p className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-5 text-sm font-bold leading-7 text-emerald-950">{item.answer}</p>
    </section>
  );
}

function SourcesUsed({ lesson, notes = [] }) {
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Sources used" title="Open the original material" />
      <LB1ResourcePanel lesson={lesson} title="Lesson resources" />
      {notes.length ? <div className="mt-5"><BulletList items={notes} /></div> : null}
    </section>
  );
}

function PlannedStudyBlock({ lesson }) {
  const planned = LB1_PLANNED_CONTENT[lesson?.id];
  if (!planned) return null;
  return (
    <>
      <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
        <SectionHeading eyebrow="Planned lesson route" title="Useful first-pass study targets">
          This page is intentionally lighter than the completed lessons, but it is not a placeholder: use it as a route through the source deck while the full slide walkthrough is expanded.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <h3 className="text-lg font-black text-stone-950">Key concepts</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {(lesson?.concepts || []).map((concept) => <span key={concept} className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-black text-teal-800">{concept}</span>)}
            </div>
          </article>
          <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5 lg:col-span-2">
            <h3 className="text-lg font-black text-stone-950">Study targets</h3>
            <div className="mt-3"><BulletList items={planned.studyTargets} /></div>
          </article>
        </div>
      </section>
      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-red-100 bg-red-50 p-6 shadow-sm">
          <SectionHeading eyebrow="Common traps" title="Avoid these mistakes" />
          <BulletList items={planned.commonTraps} />
        </article>
        <article className="rounded-[2rem] border border-teal-100 bg-teal-50 p-6 shadow-sm">
          <SectionHeading eyebrow="Likely prompts" title="Practice explaining" />
          <BulletList items={planned.likelyPrompts} />
        </article>
      </section>
      <section className="mt-10 rounded-[2.5rem] border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-8">
        <SectionHeading eyebrow="Expansion note" title="To be expanded from slides/transcripts" />
        <p className="text-sm font-bold leading-7 text-amber-950">The current route is source-linked and exam-oriented. A later pass should add a slide-by-slide walkthrough and transcript-specific teaching comments after verifying the exact matching class session.</p>
      </section>
    </>
  );
}

export function LB1LessonTemplate({ lesson, content, interactions: Interactions, isDone = false, toggle = () => {} }) {
  const status = getLB1StatusMeta(lesson?.status);
  const extractionStatus = content?.extractionStatus || "planned source route";

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-6 md:pt-8">
      <LB1CanonicalNavigation lesson={lesson} isDone={isDone} toggle={toggle} />
      <section className="grid overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/85 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-[#effdf9] p-8 md:p-12">
          <div className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-teal-800">{lesson?.code} - {lesson?.sourceDeck}</div>
          <h1 className="mt-7 max-w-3xl text-5xl font-black tracking-tight text-stone-950 md:text-6xl">{lesson?.title}</h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-stone-700">{lesson?.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">{(lesson?.tags || []).map((tag) => <span key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-700">{tag}</span>)}</div>
        </div>
        <aside className="border-t border-stone-200 bg-white p-8 lg:border-l lg:border-t-0 md:p-10">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className={`rounded-3xl border p-5 ${status.className}`}><div className="text-xs font-black uppercase tracking-[0.18em] opacity-70">Status</div><div className="mt-2 text-2xl font-black">{status.label}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Lesson type</div><div className="mt-2 text-sm font-black text-stone-950">{lesson?.lessonType}</div></div>
          </div>
          <div className="mt-3 rounded-3xl border border-stone-200 bg-stone-50 p-5">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Content status</div>
            <div className="mt-2 text-sm font-black text-stone-950">{extractionStatus}</div>
          </div>
          <LB1ResourcePanel lesson={lesson} />
        </aside>
      </section>

      <WhyThisMatters text={content?.whyThisMatters} />
      <Objectives items={content?.objectives} />
      <ConceptGrid items={content?.coreConcepts} />
      <RouteSteps items={content?.routeSteps} />
      <SlideWalkthrough sections={content?.walkthroughSections} resources={lesson?.resources} />
      <PlannedStudyBlock lesson={lesson} />
      {Interactions ? <Interactions lesson={lesson} content={content} /> : null}
      <MiniLabs items={content?.miniLabs} />
      <Checkpoints items={content?.checkpoints} />
      <ModelAnswer item={content?.modelAnswer} />
      <SourcesUsed lesson={lesson} notes={content?.sourceNotes} />
      <LB1CanonicalNavigation lesson={lesson} isDone={isDone} toggle={toggle} bottom />
    </main>
  );
}

export function LB1PlannedLesson(props) {
  const fallbackContent = {
    extractionStatus: "planned source route",
    whyThisMatters: "This deck has a stable place in the chronological course map. Use the linked PDF and the first-pass study targets to prepare active-recall answers while the full slide walkthrough is expanded.",
    objectives: [
      "Open the source deck and follow the topic in chronological context.",
      "Use the listed key concepts to build short oral or written answers.",
      "Identify common traps before treating a database or model output as biological evidence.",
    ],
    coreConcepts: [],
    checkpoints: [],
    sourceNotes: ["Primary source: Capriotti LB1 slide deck listed in the lesson header.", "Supporting transcripts and recordings are linked at folder level until a deck-specific transcript match is verified."],
  };
  return <LB1LessonTemplate {...props} content={fallbackContent} />;
}
