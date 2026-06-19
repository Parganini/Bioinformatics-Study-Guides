import React from "react";

function ResourceItem({ label, value }) {
  if (!value) return null;
  if (typeof value === "string") {
    return (
      <a href={value} target="_blank" rel="noreferrer" className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700 hover:shadow-sm">
        {label}
      </a>
    );
  }
  if (Array.isArray(value)) {
    return value.map((item) => <ResourceItem key={`${label}-${item.label || item.href || item.todo}`} label={item.label || label} value={item.href ? item.href : item} />);
  }
  if (value.href) return <ResourceItem label={value.label || label} value={value.href} />;
  if (value.todo) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-bold leading-6 text-amber-800">
        <span className="font-black">{label}:</span> {value.todo}
      </div>
    );
  }
  return null;
}

export function IBDPIResourcePanel({ lesson, title = "Resources" }) {
  const resources = lesson?.resources || {};
  const extras = Array.isArray(resources.extra) ? resources.extra : [];
  return (
    <div className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-sky-700">{title}</div>
      <div className="grid gap-2">
        <ResourceItem label="Slides" value={resources.slides} />
        <ResourceItem label="Transcript" value={resources.transcript} />
        <ResourceItem label="Recording" value={resources.recording} />
        {extras.map((item) => <ResourceItem key={item.label || item.href || item.todo} label={item.label || "Extra"} value={item.href ? item.href : item} />)}
      </div>
    </div>
  );
}
