import React from "react";
import { drdLessonHref, getDRDLessonById, getDRDNeighbors } from "./drdManifest.js";

function formatLessonLabel(lesson) {
  return lesson ? `${lesson.code} ${lesson.title}` : "";
}

function moduleNumberFromLesson(lesson) {
  const match = lesson?.code?.match(/^M(\d+)/);
  return match ? match[1] : "1";
}

function canonicalEyebrow(lesson, fallback) {
  if (!lesson) return fallback;
  return `${lesson.code} · ${lesson.date}`;
}

export function M1HeroEyebrow({ children }) {
  return (
    <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">
      {children}
    </div>
  );
}

export function M1Pill({ children, tone = "stone" }) {
  const toneClasses = {
    red: "border-red-200 bg-red-50 text-red-700",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
    sky: "border-sky-200 bg-sky-50 text-sky-800",
    dark: "border-stone-800 bg-stone-950 text-white",
    stone: "border-stone-200 bg-white/80 text-stone-700"
  };
  const cls = toneClasses[tone] || toneClasses.stone;
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${cls}`}>{children}</span>;
}

export function M1StatCard({ label, value, tone = "stone" }) {
  return (
    <div className={`rounded-2xl border p-4 ${tone === "red" ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}>
      <div className="text-xs font-black uppercase tracking-[0.2em] text-stone-500">{label}</div>
      <div className="mt-2 text-2xl font-black text-stone-950">{value}</div>
    </div>
  );
}

export function M1SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-6">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {children ? <p className="mt-3 max-w-4xl text-base font-semibold leading-7 text-stone-600">{children}</p> : null}
    </div>
  );
}

export function M1ResourceLinks({ ui, links, columns = 3 }) {
  const gridClass = columns === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3";
  const linkBase = "rounded-2xl border px-4 py-3 text-sm font-black transition";
  const toneClass = tone => {
    if (tone === "accent") return "border-red-200 bg-red-50 text-red-800 hover:bg-white";
    if (tone === "dark") return "border-stone-800 bg-stone-950 text-white hover:bg-red-700";
    return "border-stone-200 bg-white text-stone-800 hover:bg-stone-50";
  };

  return (
    <div className="mt-4 rounded-3xl border border-stone-200 bg-stone-50 p-4">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-stone-500">{ui.resources}</div>
      <div className={`grid gap-2 ${gridClass}`}>
        {links.map(link => {
          const classes = `${linkBase} ${toneClass(link.tone)}`;
          if (!link.href || link.href === "#") {
            return <span key={link.label} aria-disabled="true" className={`${classes} cursor-not-allowed opacity-50`}>{link.label}</span>;
          }
          return (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={`${classes} hover:-translate-y-0.5 hover:shadow-sm`}>
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function M1LessonHero({
  lessonId,
  title,
  subtitle,
  tags = [],
  tagTone = () => "stone",
  statLabels = {},
  coreValue,
  bigIdeaLabel,
  bigIdeaText,
  resourcePanel,
}) {
  const lesson = getDRDLessonById(lessonId);
  const moduleNumber = moduleNumberFromLesson(lesson);
  const displayedTags = tags.length ? tags : lesson?.tags || [];

  return (
    <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-7 md:p-10 lg:p-12">
          <M1HeroEyebrow>{canonicalEyebrow(lesson, statLabels.eyebrow)}</M1HeroEyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{title || lesson?.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{subtitle || lesson?.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {displayedTags.map((tag) => <M1Pill key={tag} tone={tagTone(tag)}>{tag}</M1Pill>)}
          </div>
        </div>
        <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
          <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
            <div className="grid grid-cols-2 gap-3">
              <M1StatCard label={statLabels.module || "Module"} value={moduleNumber} tone="red" />
              <M1StatCard label={statLabels.exam || statLabels.writtenExam || "Written test"} value="4Q" />
              <M1StatCard label={statLabels.answer || statLabels.answerLines || "Answer lines"} value="10-12" />
              <M1StatCard label={statLabels.core || "Core idea"} value={coreValue} tone="red" />
            </div>
            <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{bigIdeaLabel || "Big idea"}</div>
              <p className="mt-2 text-lg font-bold leading-7">{bigIdeaText}</p>
            </div>
            {resourcePanel}
          </div>
        </div>
      </div>
    </section>
  );
}

export function M1LessonNav({ labels, lessonId, isDone = false, toggle = () => {}, position = "top", previousHref, previousTitle, nextHref, showDashboardInCurrent = true, dashboardHref = "#/" }) {
  const lesson = getDRDLessonById(lessonId);
  const { previous, next } = lesson ? getDRDNeighbors(lesson.id) : { previous: null, next: null };
  const resolvedPreviousHref = lesson ? (previous ? drdLessonHref(previous) : dashboardHref) : previousHref;
  const resolvedNextHref = lesson ? (next ? drdLessonHref(next) : null) : nextHref;
  const previousLabel = lesson ? (previous ? formatLessonLabel(previous) : labels.dashboard) : (previousTitle || labels.previousTitle || labels.dashboard);
  const nextLabel = lesson ? (next ? formatLessonLabel(next) : labels.dashboard) : labels.nextTitle;
  const currentLabel = lesson ? lesson.code : (showDashboardInCurrent ? `${labels.current} · ${labels.dashboard}` : labels.current);

  return (
    <nav className={`${position === "bottom" ? "mt-10" : "mb-6"} rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm`} aria-label="Lesson navigation">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <a href={resolvedPreviousHref} className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
          ← {labels.previous}: {previousLabel}
        </a>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center">
          {showDashboardInCurrent ? (
            <a href={dashboardHref} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500 transition hover:bg-stone-50">{currentLabel}</a>
          ) : (
            <div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500">{currentLabel}</div>
          )}
          <button type="button" onClick={toggle} className={`rounded-full px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5 ${isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white"}`}>
            {isDone ? labels.done : labels.mark}
          </button>
        </div>
        {resolvedNextHref ? (
          <a href={resolvedNextHref} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md">
            {labels.next}: {nextLabel} →
          </a>
        ) : (
          <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-black text-stone-400">
            {labels.next}: {nextLabel}
          </span>
        )}
      </div>
    </nav>
  );
}
