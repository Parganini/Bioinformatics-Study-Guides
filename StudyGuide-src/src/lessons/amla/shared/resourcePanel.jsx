import React from "react";
import { AMLA_RESOURCE_LABELS } from "../amlaManifest.js";

const RESOURCE_ORDER = ["slides", "extraSlides", "playgroundSlides", "transcript", "recording", "notebook", "code", "project", "audio", "folder"];

function getResourceHref(lesson, key) {
  if (key === "folder") return lesson?.driveFolder;
  const value = lesson?.resources?.[key];
  return typeof value === "string" ? value : null;
}

function pendingMeta(value) {
  if (!value || typeof value === "string") return null;
  if (value.todo) return { type: "Missing link", text: value.todo, className: "border-amber-200 bg-amber-50 text-amber-900" };
  if (value.note) return { type: "Note", text: value.note, className: "border-stone-200 bg-white text-stone-700" };
  return { type: "Resource pending", text: "Resource pending.", className: "border-amber-200 bg-amber-50 text-amber-900" };
}

export function AMLAResourcePanel({ lesson, title = "Class resources" }) {
  const links = [];
  const pending = [];

  for (const key of RESOURCE_ORDER) {
    const href = getResourceHref(lesson, key);
    const label = AMLA_RESOURCE_LABELS[key] || key;
    if (href) links.push({ key, href, label });
    const meta = pendingMeta(lesson?.resources?.[key]);
    if (meta) pending.push({ key, label, ...meta });
  }

  return (
    <section className="mt-5 rounded-3xl border border-stone-200 bg-stone-50 p-4">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{title}</div>
      {links.length ? (
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-sm font-black text-stone-800 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-3 text-sm font-semibold leading-6 text-stone-600">Source links will appear here once the class material is available.</p>
      )}
      {pending.length ? (
        <div className="mt-3 grid gap-2">
          {pending.map((item) => (
            <div key={item.key} className={`rounded-2xl border p-3 text-xs font-bold leading-5 ${item.className}`}>
              <span className="mr-2 rounded-full bg-white/70 px-2 py-1 font-black uppercase tracking-[0.12em]">{item.type}</span>
              {item.label}: {item.text}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
