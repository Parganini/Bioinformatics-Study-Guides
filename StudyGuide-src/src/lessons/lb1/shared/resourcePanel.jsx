import React from "react";
import { LB1_RESOURCE_LABELS } from "../lb1Manifest.js";

const RESOURCE_ORDER = ["slides", "transcript", "audio", "recording", "notebook", "projectIterativeNotebook", "icon", "folder"];

function getResourceHref(lesson, key) {
  if (key === "folder") return lesson?.driveFolder;
  const value = lesson?.resources?.[key];
  return typeof value === "string" ? value : null;
}

function pendingText(value) {
  if (!value || typeof value === "string") return null;
  return value.todo || value.note || "Resource pending.";
}

export function LB1ResourcePanel({ lesson, title = "Source links" }) {
  const links = [];
  const pending = [];

  for (const key of RESOURCE_ORDER) {
    const href = getResourceHref(lesson, key);
    const label = LB1_RESOURCE_LABELS[key] || (key === "projectIterativeNotebook" ? "Project iterative notebook" : key);
    if (href) links.push({ key, href, label });
    const todo = pendingText(lesson?.resources?.[key]);
    if (todo) pending.push({ key, label, todo });
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
            <div key={item.key} className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-xs font-bold leading-5 text-amber-900">
              {item.label}: {item.todo}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
