import React from "react";
import { drdLessonHref, getDRDNeighbors } from "../drdManifest.js";

function lessonLabel(lesson) {
  return lesson ? `${lesson.code} ${lesson.title}` : "";
}

export function DRDCanonicalNavigation({ lesson, isDone = false, toggle = () => {}, bottom = false }) {
  const { previous, next } = getDRDNeighbors(lesson?.id);
  const previousInSameModule = previous && previous.module === lesson?.module ? previous : null;

  return (
    <nav className={`${bottom ? "mt-10" : "mb-6"} rounded-[2rem] border border-stone-200 bg-white/90 p-3 shadow-sm`} aria-label="DRD lesson navigation">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {previousInSameModule ? (
          <a href={drdLessonHref(previousInSameModule)} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:shadow-sm">
            Previous: {lessonLabel(previousInSameModule)}
          </a>
        ) : (
          <a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:shadow-sm">
            Previous: DRD dashboard
          </a>
        )}
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
          <a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.18em] text-stone-500 transition hover:bg-stone-50">
            {lesson?.code ? `${lesson.code} - Dashboard` : "DRD dashboard"}
          </a>
          <button type="button" onClick={toggle} className={`rounded-full px-4 py-2 text-sm font-black transition hover:-translate-y-0.5 ${isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white"}`}>
            {isDone ? "Completed" : "Mark completed"}
          </button>
        </div>
        {next ? (
          <a href={drdLessonHref(next)} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md">
            Next: {lessonLabel(next)}
          </a>
        ) : (
          <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-400">No next lesson</span>
        )}
      </div>
    </nav>
  );
}
