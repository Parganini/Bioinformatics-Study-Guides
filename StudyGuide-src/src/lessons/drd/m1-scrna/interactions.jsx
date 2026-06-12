import React, { useMemo, useState } from "react";

function sectionTitle(eyebrow, title, body) {
  return (
    <div className="mb-5">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {body ? <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">{body}</p> : null}
    </div>
  );
}

function SlideGuidedNotes({ blocks = [] }) {
  if (!blocks.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Slide-guided notes", "Follow the June 10 scRNA-seq slides", "These cards mirror the slide logic: concept, professor emphasis and exam-ready wording.")}
      <div className="grid gap-4 lg:grid-cols-2">
        {blocks.map((block) => (
          <article key={block.range} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">{block.range}</span>
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">visual slide card</span>
            </div>
            <h3 className="mt-4 text-xl font-black leading-7 text-stone-950">{block.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-7 text-stone-600">{block.body}</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">Professor emphasis</div>
                <p className="mt-2 text-sm font-bold leading-6 text-amber-950">{block.professor}</p>
              </div>
              <div className="rounded-2xl border border-red-100 bg-white p-4">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Exam cue</div>
                <p className="mt-2 text-sm font-bold leading-6 text-stone-700">{block.exam}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DropletWorkflowLab() {
  const steps = [
    { label: "Dissociate", text: "Tissue becomes a suspension of single cells; spatial information is lost." },
    { label: "Encapsulate", text: "10X creates GEMs with ideally one bead, one cell and RT reagents." },
    { label: "Capture", text: "Poly(dT) on the bead captures polyA mRNA after cell lysis." },
    { label: "Barcode", text: "Cell barcode marks origin; UMI marks the original molecule." },
    { label: "Sequence", text: "Reads are pooled, aligned to genes and collapsed by UMI counts." },
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Mini-lab", "10X droplet workflow", "Click through the wet-lab-to-matrix story until the barcode/UMI logic feels automatic.")}
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
          <div className="flex flex-wrap gap-2">
            {steps.map((step, index) => (
              <button
                key={step.label}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-full border px-4 py-2 text-sm font-black transition ${active === index ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"}`}
              >
                {index + 1}. {step.label}
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-red-100 bg-red-50 p-5">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{steps[active].label}</div>
            <p className="mt-2 text-base font-black leading-8 text-red-950">{steps[active].text}</p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-5">
          <svg viewBox="0 0 720 360" className="h-[360px] w-full">
            <rect x="24" y="40" width="145" height="80" rx="26" fill={active >= 0 ? "#fee2e2" : "#fafaf9"} stroke="#dc2626" strokeWidth="4" />
            <text x="96" y="75" textAnchor="middle" fontSize="15" fontWeight="900" fill="#991b1b">Tissue</text>
            <text x="96" y="98" textAnchor="middle" fontSize="13" fontWeight="800" fill="#991b1b">many cells</text>
            <path d="M170 80 H250" stroke="#d6d3d1" strokeWidth="5" strokeLinecap="round" />
            <circle cx="295" cy="82" r="38" fill={active >= 1 ? "#fef2f2" : "#fafaf9"} stroke="#dc2626" strokeWidth="4" />
            <circle cx="282" cy="78" r="9" fill="#111827" />
            <circle cx="306" cy="88" r="12" fill="#ef4444" />
            <text x="295" y="150" textAnchor="middle" fontSize="14" fontWeight="900" fill="#44403c">GEM</text>
            <path d="M335 82 H420" stroke="#d6d3d1" strokeWidth="5" strokeLinecap="round" />
            <rect x="420" y="42" width="150" height="96" rx="22" fill={active >= 3 ? "#fef2f2" : "#fafaf9"} stroke="#dc2626" strokeWidth="4" />
            <text x="495" y="75" textAnchor="middle" fontSize="14" fontWeight="900" fill="#991b1b">Barcode</text>
            <text x="495" y="98" textAnchor="middle" fontSize="13" fontWeight="800" fill="#991b1b">cell origin</text>
            <text x="495" y="120" textAnchor="middle" fontSize="13" fontWeight="800" fill="#991b1b">UMI molecule</text>
            <path d="M570 90 H650" stroke="#d6d3d1" strokeWidth="5" strokeLinecap="round" />
            <rect x="500" y="220" width="170" height="82" rx="24" fill={active >= 4 ? "#111827" : "#fafaf9"} stroke="#d6d3d1" strokeWidth="3" />
            <text x="585" y="252" textAnchor="middle" fontSize="15" fontWeight="900" fill={active >= 4 ? "#fff" : "#44403c"}>Feature-barcode</text>
            <text x="585" y="276" textAnchor="middle" fontSize="15" fontWeight="900" fill={active >= 4 ? "#fff" : "#44403c"}>matrix</text>
            <path d="M520 138 V200 H585 V220" stroke="#d6d3d1" strokeWidth="5" fill="none" strokeLinecap="round" />
            <text x="72" y="324" fontSize="15" fontWeight="900" fill="#991b1b">Cell barcode = what cell? Transcript alignment = what gene? UMI = how many original molecules?</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

function QCGateLab() {
  const [umi, setUmi] = useState(1400);
  const [mito, setMito] = useState(12);
  const [mixed, setMixed] = useState(false);
  const call = useMemo(() => {
    if (mixed) return { label: "Likely doublet", text: "Mixed marker programs suggest two cells may share one barcode.", tone: "border-amber-200 bg-amber-50 text-amber-950" };
    if (umi < 400) return { label: "Likely empty droplet", text: "Very low UMI count fits ambient RNA more than a real cell.", tone: "border-red-200 bg-red-50 text-red-950" };
    if (mito > 35) return { label: "Likely damaged/dead", text: "High mitochondrial fraction is a warning signal for cell damage or death.", tone: "border-red-200 bg-red-50 text-red-950" };
    return { label: "Keep for now", text: "UMI count and mitochondrial fraction look compatible with a usable cell.", tone: "border-emerald-200 bg-emerald-50 text-emerald-950" };
  }, [umi, mito, mixed]);

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Mini-lab", "Single-cell QC triage", "Use the professor's logic: keep one real, alive, undamaged cell per barcode; discard technical artifacts.")}
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <label className="block rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            Total UMIs: {umi}
            <input type="range" min="0" max="7000" step="100" value={umi} onChange={(event) => setUmi(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
          </label>
          <label className="block rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            Mitochondrial reads: {mito}%
            <input type="range" min="0" max="70" value={mito} onChange={(event) => setMito(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
          </label>
          <label className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            <input type="checkbox" checked={mixed} onChange={(event) => setMixed(event.target.checked)} className="h-5 w-5 accent-red-700" />
            Mixed marker programs
          </label>
        </div>
        <div className={`rounded-[2rem] border p-6 ${call.tone}`}>
          <div className="text-xs font-black uppercase tracking-[0.18em] opacity-80">QC call</div>
          <div className="mt-2 text-4xl font-black">{call.label}</div>
          <p className="mt-4 text-base font-black leading-8">{call.text}</p>
          <p className="mt-5 rounded-2xl bg-white/70 p-4 text-sm font-bold leading-6 text-stone-700">Exam wording: QC separates real cell barcodes from empty droplets, ambient RNA, doublets and low-quality cells before clustering or annotation.</p>
        </div>
      </div>
    </section>
  );
}

function AnnotationLab() {
  const clusters = {
    cd14: { label: "Cluster 4", markers: "S100A8, S100A9, LYZ", answer: "CD14+ classical monocytes" },
    cd16: { label: "Cluster 8", markers: "FCGR3A, CDKN1C", answer: "CD16+ non-classical monocytes" },
    b: { label: "Cluster 7", markers: "CD79A, IGHG1", answer: "Memory B cells" },
    rbc: { label: "Cluster 12", markers: "HBB, HBA1, HBA2", answer: "Erythrocyte contaminants" },
    nk: { label: "NK island", markers: "NKG7, KLRD1, GZMB", answer: "NK / cytotoxic cells" },
  };
  const [choice, setChoice] = useState("cd14");
  const item = clusters[choice];

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Annotation lab", "Marker genes -> cautious cluster labels", "The class repeatedly used marker genes, heatmap signals and differential expression to name clusters.")}
      <div className="flex flex-wrap gap-2">
        {Object.entries(clusters).map(([key, cluster]) => (
          <button
            key={key}
            type="button"
            onClick={() => setChoice(key)}
            className={`rounded-full border px-4 py-2 text-sm font-black transition ${choice === key ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"}`}
          >
            {cluster.label}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Markers to inspect</div>
          <p className="mt-3 text-3xl font-black text-stone-950">{item.markers}</p>
          <p className="mt-4 text-sm font-bold leading-7 text-stone-600">Use more than one marker, because dropout and contamination can make one gene misleading.</p>
        </div>
        <div className="rounded-[2rem] border border-red-100 bg-red-50 p-5">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Likely label</div>
          <p className="mt-3 text-3xl font-black text-red-950">{item.answer}</p>
          <p className="mt-4 text-sm font-bold leading-7 text-red-950">Then validate with heatmap, violin/dot plot, frequency plot or automatic annotation.</p>
        </div>
      </div>
    </section>
  );
}

function TrailMakerReportPrompt() {
  const [show, setShow] = useState(false);
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Workshop drill", "Turn the MIS-C exercise into a biological paragraph", "This is the class's practical story: TrailMaker output -> annotation -> composition -> differential expression -> biological interpretation.")}
      <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-black leading-7 text-stone-950">Prompt: Explain how the acute and convalescent MIS-C PBMC samples were interpreted using scRNA-seq clusters, and mention the CD14 monocyte / FCGR1A finding.</p>
        <textarea className="mt-4 min-h-36 w-full rounded-3xl border border-stone-200 bg-white p-4 text-sm font-semibold leading-7 outline-none focus:border-red-300" placeholder="Write 8-10 lines here..." />
        <button type="button" onClick={() => setShow(!show)} className="mt-4 rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white hover:bg-red-700">{show ? "Hide model answer" : "Reveal model answer"}</button>
        {show ? (
          <p className="mt-4 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-bold leading-7 text-red-950">
            The dataset contains PBMCs from acute and convalescent MIS-C samples analyzed with 10X scRNA-seq. After QC, integration and UMAP, clusters are annotated using markers such as CD14/S100A8/S100A9 for classical monocytes, CD79A/IGH genes for B cells and HBB/HBA for erythrocyte contaminants. Frequency plots compare cell composition across samples. The convalescent sample shows an increase in CD14 monocytes, and differential expression within that cell type identifies changes such as reduced FCGR1A/CD64, an IgG receptor. This matters because single-cell RNA-seq separates composition changes from transcriptomic changes inside a specific cell population.
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function LessonInteractions({ content }) {
  return (
    <>
      <SlideGuidedNotes blocks={content?.slideBlocks} />
      <DropletWorkflowLab />
      <QCGateLab />
      <AnnotationLab />
      <TrailMakerReportPrompt />
    </>
  );
}
