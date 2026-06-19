import React from "react";

export function IBDPISection({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`rounded-[2rem] border border-stone-200 bg-white/85 p-5 shadow-sm md:p-6 ${className}`}>
      <div className="mb-5">
        {eyebrow && <div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-sky-700">{eyebrow}</div>}
        <h2 className="text-2xl font-black tracking-tight text-stone-950 md:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function IBDPIPillList({ items = [], tone = "stone" }) {
  const toneClass = tone === "skip" ? "border-amber-200 bg-amber-50 text-amber-800" : "border-stone-200 bg-stone-50 text-stone-700";
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => <span key={item} className={`rounded-full border px-3 py-1 text-xs font-black ${toneClass}`}>{item}</span>)}
    </div>
  );
}

export function IBDPIPracticeStrip({ content }) {
  const checkpoints = content.examCheckpoints || [];
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {checkpoints.slice(0, 3).map((item) => (
        <details key={item.prompt} className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
          <summary className="cursor-pointer text-sm font-black leading-6 text-stone-900">{item.prompt}</summary>
          <p className="mt-3 text-sm font-semibold leading-6 text-stone-600">{item.answer}</p>
          <p className="mt-2 text-xs font-bold leading-5 text-amber-700">Trap: {item.trap}</p>
        </details>
      ))}
    </div>
  );
}
