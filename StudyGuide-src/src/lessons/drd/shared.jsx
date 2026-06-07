import React from "react";

export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function tr(value, lang = "es") {
  if (Array.isArray(value)) return value.map(item => tr(item, lang));
  if (value && typeof value === "object" && !value.$$typeof) return value[lang] || value.es || value.en || value.fa || "";
  return value;
}

export function DRDPill({ children, tone = "green", className = "" }) {
  const styles = {
    green: "border border-emerald-200 bg-emerald-50 text-emerald-700",
    stone: "border border-stone-200 bg-white text-stone-700",
    solidGreen: "bg-emerald-100 text-emerald-800",
    solidStone: "bg-stone-100 text-stone-600"
  };

  return (
    <span className={cx(
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em]",
      styles[tone] || styles.green,
      className
    )}>
      {children}
    </span>
  );
}

export function DRDStatCard({ label, value, tone = "stone" }) {
  return (
    <div className={cx("rounded-3xl border p-4", tone === "green" ? "border-emerald-200 bg-emerald-50" : "border-stone-200 bg-stone-50")}>
      <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{label}</div>
      <div className="mt-2 text-3xl font-black text-stone-950">{value}</div>
    </div>
  );
}

export function DRDSectionHeader({ eyebrow, title, children }) {
  return (
    <div>
      <DRDPill>{eyebrow}</DRDPill>
      <h2 className="mt-4 text-3xl font-black text-stone-950 md:text-4xl">{title}</h2>
      {children && <p className="mt-4 max-w-4xl text-base font-semibold leading-8 text-stone-700">{children}</p>}
    </div>
  );
}

export function DRDResourceLinks({ title, links, columns = 4 }) {
  const gridClass = columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4";
  const baseClass = "rounded-full border px-4 py-2 text-center text-sm font-black transition";
  const toneClass = (tone, active = true) => {
    if (tone === "accent") return cx("border-emerald-200 bg-emerald-50 text-emerald-800", active && "hover:bg-white");
    if (tone === "dark") return cx("border-stone-800 bg-stone-950 text-white", active && "hover:bg-emerald-700");
    return cx("border-stone-200 bg-white text-stone-800", active && "hover:bg-stone-50");
  };

  return (
    <div className="mt-5 rounded-3xl border border-stone-200 bg-stone-50 p-4">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{title}</div>
      <div className={cx("mt-3 grid gap-2", gridClass)}>
        {links.map(link => {
          const isActive = Boolean(link.href && link.href !== "#");
          const classes = cx(baseClass, toneClass(link.tone, isActive));

          if (!isActive) {
            return (
              <span key={link.label} aria-disabled="true" className={cx(classes, "cursor-not-allowed opacity-50")}>
                {link.label}
              </span>
            );
          }

          return (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={cx(classes, "hover:-translate-y-0.5 hover:shadow-md")}>
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function DRDLessonNav({ labels, isDone = false, toggle = () => {}, bottom = false, previousHref, nextHref, dashboardHref = "#/" }) {
  return (
    <nav className={cx("rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm", bottom ? "mt-10" : "mb-6")} aria-label="Lesson navigation">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <a href={previousHref} className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
          ← {labels.previous}: {labels.previousTitle}
        </a>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center">
          <a href={dashboardHref} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500 transition hover:bg-stone-50">
            {labels.current} · {labels.dashboard}
          </a>
          <button type="button" onClick={toggle} className={cx("rounded-full px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5", isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white hover:bg-emerald-700")}>
            {isDone ? labels.done : labels.mark}
          </button>
        </div>
        <a href={nextHref} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md">
          {labels.next}: {labels.nextTitle} →
        </a>
      </div>
    </nav>
  );
}
