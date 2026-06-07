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
