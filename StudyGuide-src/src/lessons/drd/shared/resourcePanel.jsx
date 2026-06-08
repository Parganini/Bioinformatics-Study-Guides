import React from "react";
import { DRD_RESOURCE_LABELS } from "../drdManifest.js";

const RESOURCE_ORDER = ["slides", "transcript", "recording", "code", "folder"];

export function DRDResourcePanel({ lesson, title = "Class resources" }) {
  const links = [];
  for (const key of RESOURCE_ORDER) {
    const href = key === "folder" ? lesson?.driveFolder : lesson?.resources?.[key];
    if (href) links.push({ key, href, label: DRD_RESOURCE_LABELS[key] || key });
  }

  if (!links.length) {
    return (
      <section className="mt-5 rounded-3xl border border-stone-200 bg-stone-50 p-4">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{title}</div>
        <p className="mt-3 text-sm font-semibold leading-6 text-stone-600">Source links will appear here once the class material is available.</p>
      </section>
    );
  }

  return (
    <section className="mt-5 rounded-3xl border border-stone-200 bg-stone-50 p-4">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{title}</div>
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
    </section>
  );
}
