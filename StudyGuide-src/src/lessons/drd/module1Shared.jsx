import React from "react";

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
