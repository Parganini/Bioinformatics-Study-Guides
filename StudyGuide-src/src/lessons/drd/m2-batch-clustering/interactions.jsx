import React, { useMemo, useState } from "react";

function sectionTitle(eyebrow, title, body) {
  return (
    <div className="mb-5">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {body ? <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">{body}</p> : null}
    </div>
  );
}

function SlideGuidedNotes({ blocks = [] }) {
  if (!blocks.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Slide-guided notes", "Follow the June 11 practical logic", "The cards track what the instructor did live: output, interpretation and how it belongs in the final report.")}
      <div className="grid gap-4 lg:grid-cols-2">
        {blocks.map((block) => (
          <article key={block.range} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-800">{block.range}</span>
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">report output</span>
            </div>
            <h3 className="mt-4 text-xl font-black leading-7 text-stone-950">{block.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-7 text-stone-600">{block.body}</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">Professor emphasis</div>
                <p className="mt-2 text-sm font-bold leading-6 text-amber-950">{block.professor}</p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Report move</div>
                <p className="mt-2 text-sm font-bold leading-6 text-stone-700">{block.report}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HeatmapLab() {
  const labels = {
    rows: "Rows: CpG features/probes",
    columns: "Columns: samples",
    color: "Color scale: beta values 0 to 1",
    dendrogram: "Dendrograms: hierarchical clustering",
    track: "Color bar: phenotype metadata",
  };
  const [active, setActive] = useState("columns");

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Mini-lab", "Read the heatmap like a report figure", "Click a part of the heatmap and rehearse the exact interpretation order.")}
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-5">
          <svg viewBox="0 0 760 460" className="h-[460px] w-full">
            <rect x="120" y="85" width="420" height="290" rx="10" fill="#f5f5f4" stroke="#d6d3d1" />
            {Array.from({ length: 12 }).map((_, row) =>
              Array.from({ length: 8 }).map((__, col) => {
                const high = (row + col * 2) % 7 < 3;
                const fill = high ? (col < 4 ? "#0f766e" : "#dc2626") : "#f8fafc";
                return <rect key={`${row}-${col}`} x={135 + col * 48} y={100 + row * 22} width="46" height="20" fill={fill} opacity={0.82} />;
              })
            )}
            <path d="M135 60 V78 H230 M230 78 V60 M375 60 V78 H518 M518 78 V60" stroke={active === "dendrogram" ? "#dc2626" : "#78716c"} strokeWidth="4" fill="none" />
            <path d="M80 105 H105 V160 M80 160 H105 M80 230 H105 V310 M80 310 H105" stroke={active === "dendrogram" ? "#dc2626" : "#78716c"} strokeWidth="4" fill="none" />
            <rect x="135" y="390" width="384" height="20" fill="#e5e7eb" stroke="#d6d3d1" />
            {Array.from({ length: 8 }).map((_, index) => <rect key={index} x={135 + index * 48} y="390" width="48" height="20" fill={index < 4 ? "#86efac" : "#fda4af"} />)}
            <rect x="585" y="120" width="34" height="220" fill="url(#betaGradient)" stroke="#d6d3d1" />
            <defs>
              <linearGradient id="betaGradient" x1="0" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="50%" stopColor="#0f766e" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
            <text x="330" y="32" textAnchor="middle" fontSize="15" fontWeight="900" fill={active === "columns" ? "#dc2626" : "#44403c"}>samples</text>
            <text x="42" y="230" textAnchor="middle" fontSize="15" fontWeight="900" fill={active === "rows" ? "#dc2626" : "#44403c"} transform="rotate(-90 42 230)">CpG features</text>
            <text x="632" y="112" fontSize="13" fontWeight="900" fill={active === "color" ? "#dc2626" : "#44403c"}>beta</text>
            <text x="330" y="432" textAnchor="middle" fontSize="14" fontWeight="900" fill={active === "track" ? "#dc2626" : "#44403c"}>control / disease color bar</text>
          </svg>
        </div>
        <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-5">
          <div className="flex flex-wrap gap-2">
            {Object.entries(labels).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={`rounded-full border px-3 py-2 text-xs font-black transition ${active === key ? "border-emerald-500 bg-white text-emerald-900" : "border-emerald-200 bg-emerald-100 text-emerald-800 hover:bg-white"}`}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Current focus</div>
          <p className="mt-2 text-2xl font-black leading-9 text-emerald-950">{labels[active]}</p>
          <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-stone-700">Report sentence: sample clustering separates disease and control, suggesting methylation patterns consistent with phenotype, if metadata confirms no stronger technical explanation.</p>
        </div>
      </div>
    </section>
  );
}

function LinkageChooser() {
  const methods = {
    complete: "Compact clusters; uses the largest dissimilarity between two groups.",
    single: "Elongated chaining; uses the closest pair between two groups.",
    average: "Intermediate behavior; uses average pairwise distance between groups.",
  };
  const [method, setMethod] = useState("complete");

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Mini-lab", "Choose the linkage wording", "You do not need to derive the dendrogram; you do need to name how groups are merged.")}
      <div className="flex flex-wrap gap-2">
        {Object.keys(methods).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setMethod(key)}
            className={`rounded-full border px-4 py-2 text-sm font-black transition ${method === key ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"}`}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-[2rem] border border-emerald-100 bg-emerald-50 p-5">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{method} linkage</div>
        <p className="mt-3 text-2xl font-black leading-9 text-emerald-950">{methods[method]}</p>
      </div>
    </section>
  );
}

function ProbeTableLab() {
  const [quoted, setQuoted] = useState(true);
  const [type, setType] = useState("II");
  const color = type === "II" ? "" : "Red/Green channel-specific";
  const ok = quoted;

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Mini-lab", "Probe table builder", "This mirrors the live report task: subset one probe address and build a clean table for the report.")}
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <label className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            <input type="checkbox" checked={quoted} onChange={(event) => setQuoted(event.target.checked)} className="h-5 w-5 accent-emerald-700" />
            Probe address is quoted as a string
          </label>
          <label className="block rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            Infinium type
            <select value={type} onChange={(event) => setType(event.target.value)} className="mt-3 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 font-black outline-none">
              <option value="II">Type II</option>
              <option value="I">Type I</option>
            </select>
          </label>
          <div className={`rounded-2xl border p-4 text-sm font-black leading-6 ${ok ? "border-emerald-200 bg-emerald-50 text-emerald-950" : "border-red-200 bg-red-50 text-red-950"}`}>
            {ok ? "Subsetting can work: R will match the address as a row name." : "This will fail or return nonsense: R treats the address as an object/numeric value."}
          </div>
        </div>
        <div className="overflow-x-auto rounded-[2rem] border border-stone-200 bg-white">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-stone-50 text-xs font-black uppercase tracking-[0.14em] text-stone-500">
              <tr><th className="p-3">Sample</th><th className="p-3">Red</th><th className="p-3">Green</th><th className="p-3">Type</th><th className="p-3">Color</th></tr>
            </thead>
            <tbody>
              {["S1_control", "S2_control", "S3_disease", "S4_disease"].map((sample, index) => (
                <tr key={sample} className="border-t border-stone-100">
                  <td className="p-3 font-black text-stone-950">{sample}</td>
                  <td className="p-3 font-mono">{(8400 + index * 417).toLocaleString()}</td>
                  <td className="p-3 font-mono">{(7600 + index * 381).toLocaleString()}</td>
                  <td className="p-3 font-black text-emerald-800">{type}</td>
                  <td className="p-3 font-black text-stone-700">{color || "empty value"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function QCPipelineLab() {
  const [qcBad, setQcBad] = useState(true);
  const [negativeOk, setNegativeOk] = useState(true);
  const [failedFew, setFailedFew] = useState(true);
  const conclusion = qcBad && negativeOk && failedFew
    ? "Keep samples, with comment: low median intensity is not enough to remove them because negative controls and detection p-values look acceptable."
    : !negativeOk || !failedFew
      ? "Investigate or remove: background/detection evidence supports a real quality problem."
      : "No obvious removal: QC evidence does not indicate a strong sample problem.";

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Mini-lab", "QC decision stack", "Practice the exact reasoning from class: one plot raises suspicion; later checks decide.")}
      <div className="grid gap-3 md:grid-cols-3">
        <label className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
          <input type="checkbox" checked={qcBad} onChange={(event) => setQcBad(event.target.checked)} className="h-5 w-5 accent-emerald-700" />
          QC plot flags low median intensity
        </label>
        <label className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
          <input type="checkbox" checked={negativeOk} onChange={(event) => setNegativeOk(event.target.checked)} className="h-5 w-5 accent-emerald-700" />
          Negative controls below threshold
        </label>
        <label className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
          <input type="checkbox" checked={failedFew} onChange={(event) => setFailedFew(event.target.checked)} className="h-5 w-5 accent-emerald-700" />
          Few failed detection p-values
        </label>
      </div>
      <div className="mt-5 rounded-[2rem] border border-emerald-100 bg-emerald-50 p-5">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Report conclusion</div>
        <p className="mt-3 text-xl font-black leading-8 text-emerald-950">{conclusion}</p>
      </div>
    </section>
  );
}

function DensityPlotLab() {
  const [shift, setShift] = useState(8);
  const [show, setShow] = useState(false);
  const interpretation = shift > 15
    ? "Disease has a visible left shift at the high-methylation peak, suggesting fewer highly methylated probes globally."
    : "Distributions are broadly similar; only a subtle shift should be described cautiously.";

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Mini-lab", "Raw beta density plot", "Move the disease peak and practice the report wording without exaggerating the result.")}
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-5">
          <svg viewBox="0 0 760 360" className="h-[360px] w-full">
            <line x1="70" y1="300" x2="700" y2="300" stroke="#44403c" strokeWidth="3" />
            <line x1="70" y1="45" x2="70" y2="300" stroke="#44403c" strokeWidth="3" />
            <path d="M80 292 C135 145, 185 145, 240 292 C300 320, 390 320, 450 292 C520 108, 600 108, 680 292" fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d={`M80 292 C135 150, 185 150, 240 292 C300 320, 390 320, ${450 - shift} 292 C${520 - shift} 120, ${600 - shift} 120, ${680 - shift} 292`} fill="none" stroke="#dc2626" strokeWidth="5" />
            <text x="665" y="330" textAnchor="middle" fontSize="14" fontWeight="900" fill="#44403c">beta value</text>
            <text x="120" y="70" fontSize="14" fontWeight="900" fill="#0f766e">control</text>
            <text x="120" y="94" fontSize="14" fontWeight="900" fill="#dc2626">disease</text>
          </svg>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
          <label className="block text-sm font-black text-stone-700">
            Disease high-methylation peak shift: {shift}
            <input type="range" min="0" max="35" value={shift} onChange={(event) => setShift(Number(event.target.value))} className="mt-3 w-full accent-emerald-700" />
          </label>
          <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-black leading-7 text-emerald-950">{interpretation}</div>
          <button type="button" onClick={() => setShow(!show)} className="mt-4 rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white hover:bg-emerald-700">{show ? "Hide report wording" : "Reveal report wording"}</button>
          {show ? <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-stone-700">The raw beta-value density plot shows the expected bimodal methylation distribution. Control and disease curves are largely overlapping, so there is no strong global methylation difference at this stage. A slight shift of the high-methylation peak can be noted cautiously and should be revisited after normalization and differential methylation analysis.</p> : null}
        </div>
      </div>
    </section>
  );
}

export function LessonInteractions({ content }) {
  return (
    <>
      <SlideGuidedNotes blocks={content?.slideBlocks} />
      <HeatmapLab />
      <LinkageChooser />
      <ProbeTableLab />
      <QCPipelineLab />
      <DensityPlotLab />
    </>
  );
}
