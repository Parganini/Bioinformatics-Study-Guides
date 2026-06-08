import React, { useMemo, useState } from "react";
import { M1Pill as Pill, M1StatCard as StatCard, M1SectionHeader as SectionHeader, M1ResourceLinks, M1LessonHero, M1LessonNav } from "./module1Shared.jsx";
import wetLabFlowSlide from "../../assets/drd/lesson01/wet-lab-flow.jpg";
import biologicalQuestionSlide from "../../assets/drd/lesson01/biological-question.jpg";
import omicsMapSlide from "../../assets/drd/lesson01/omics-map.jpg";
import dynamicProcessesSlide from "../../assets/drd/lesson01/dynamic-processes.jpg";
import variabilitySourcesSlide from "../../assets/drd/lesson01/variability-sources.jpg";
import environmentEpigeneticsSlide from "../../assets/drd/lesson01/environment-epigenetics.jpg";
import dnaMethylationSlide from "../../assets/drd/lesson01/dna-methylation.jpg";
import mirnaSeedSlide from "../../assets/drd/lesson01/mirna-seed.jpg";
import gutMicrornaSlide from "../../assets/drd/lesson01/gut-microrna.jpg";
import mainMessageSlide from "../../assets/drd/lesson01/main-message.jpg";
import platformsPipelineSlide from "../../assets/drd/lesson01/platforms-pipeline.jpg";
import technicalCvSlide from "../../assets/drd/lesson01/technical-cv.jpg";
import donorCvSlide from "../../assets/drd/lesson01/donor-cv.jpg";
import boxplotIqrSlide from "../../assets/drd/lesson01/boxplot-iqr.jpg";
import individualVariabilitySlide from "../../assets/drd/lesson01/individual-variability.jpg";

const SLIDES_URL = "https://drive.google.com/file/d/1F1UK7JpTC8Sm8arnNC9mfXnj8aLxbzqZ/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1kYvSq04ZeL3mt3GbLNdNwmaAqFImS8CgG70t_9NQWnA/edit?usp=drivesdk";
const CLASS_RECORDING_URL = "https://www.youtube.com/watch?v=SQtYHrV1y-U&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=1";

const LESSON1_IMAGE_BANK = {
  wetLabFlow: { src: wetLabFlowSlide, slide: 8 },
  biologicalQuestion: { src: biologicalQuestionSlide, slide: 9 },
  omicsMap: { src: omicsMapSlide, slide: 10 },
  dynamicProcesses: { src: dynamicProcessesSlide, slide: 11 },
  variabilitySources: { src: variabilitySourcesSlide, slide: 12 },
  environmentEpigenetics: { src: environmentEpigeneticsSlide, slide: 18 },
  dnaMethylation: { src: dnaMethylationSlide, slide: 21 },
  mirnaSeed: { src: mirnaSeedSlide, slide: 27 },
  gutMicrorna: { src: gutMicrornaSlide, slide: 31 },
  mainMessage: { src: mainMessageSlide, slide: 32 },
  platformsPipeline: { src: platformsPipelineSlide, slide: 34 },
  technicalCv: { src: technicalCvSlide, slide: 36 },
  donorCv: { src: donorCvSlide, slide: 40 },
  boxplotIqr: { src: boxplotIqrSlide, slide: 43 },
  individualVariability: { src: individualVariabilitySlide, slide: 44 }
};


const EXAM_UI_COPY = {
  en: {
    zoom: "Click to zoom",
    closeZoom: "Close zoom",
    expand: "Open expanded answer",
    include: "What to include",
    trap: "Common trap",
    model: "Sample answer"
  },
  es: {
    zoom: "Haz clic para ampliar",
    closeZoom: "Cerrar zoom",
    expand: "Ver respuesta ampliada",
    include: "Qué deberías incluir",
    trap: "Trampa frecuente",
    model: "Respuesta modelo"
  },
  fa: {
    zoom: "برای بزرگ‌نمایی کلیک کنید",
    closeZoom: "بستن بزرگ‌نمایی",
    expand: "پاسخ بازشده را ببینید",
    include: "چه چیزهایی را باید بیاورید",
    trap: "اشتباه رایج",
    model: "پاسخ نمونه"
  }
};

function getExamUi(lang = "es") {
  return EXAM_UI_COPY[lang] || EXAM_UI_COPY.es;
}

function firstSentence(text = "") {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  const match = clean.match(/.*?[.!?](?:\s|$)/);
  return (match ? match[0] : clean).trim();
}

function getExamTrap(item, lang = "es") {
  const haystack = `${item?.title || ""} ${item?.exam || ""} ${item?.professor || ""}`.toLowerCase();
  if (/ma-?plot/.test(haystack)) {
    return lang === "en"
      ? "Do not stop at saying ‘it is a microarray graph’. Define M and A, and explain what a good normalized cloud looks like."
      : lang === "fa"
        ? "فقط نگویید «یک نمودار میکروآرایه است». باید M و A را تعریف کنید و بگویید ابر نرمال‌شده چه شکلی دارد."
        : "No te quedes en ‘es una gráfica de microarrays’. Hay que definir M y A y decir cómo se ve una nube bien normalizada.";
  }
  if (/competitive|cy3|cy5|two-colou?r|array/.test(haystack)) {
    return lang === "en"
      ? "Do not forget the technical side: two samples, same chip, two dyes, two lasers, competition for the same probe, dye bias and normalization."
      : lang === "fa"
        ? "بخش فنی را فراموش نکنید: دو نمونه، یک چیپ، دو رنگ، دو لیزر، رقابت برای یک probe، bias رنگ و normalization."
        : "No olvides la parte técnica: dos muestras, un chip, dos dyes, dos láseres, competición por el mismo probe, dye bias y normalización.";
  }
  if (/replicat|donor|donante/.test(haystack)) {
    return lang === "en"
      ? "A classic mistake is calling different donors ‘replicates’. Replicates estimate technical variability; donors introduce biological variability."
      : lang === "fa"
        ? "اشتباه کلاسیک این است که donorهای مختلف را «replicate» بنامیم. replicate تغییرپذیری فنی را می‌سنجد؛ donor تغییرپذیری زیستی را وارد می‌کند."
        : "La trampa clásica es llamar ‘replicados’ a donantes distintos. Los replicados estiman variabilidad técnica; los donantes introducen variabilidad biológica.";
  }
  if (/mirna|sirna/.test(haystack)) {
    return lang === "en"
      ? "Do not mix miRNA and siRNA: miRNA usually acts with partial complementarity, whereas siRNA is classically described with perfect complementarity and cleavage."
      : lang === "fa"
        ? "miRNA و siRNA را یکی نگیرید: miRNA معمولاً مکمل‌بودن جزئی دارد، اما siRNA به‌صورت کلاسیک با مکمل‌بودن کامل و cleavage توضیح داده می‌شود."
        : "No mezcles miRNA y siRNA: miRNA suele actuar con complementariedad parcial, mientras que siRNA se describe clásicamente con complementariedad perfecta y cleavage.";
  }
  if (/methyl|metil/.test(haystack)) {
    return lang === "en"
      ? "Do not present methylation rules as fully solved causality. The lecture explicitly says these associations are useful, but causality is not completely resolved."
      : lang === "fa"
        ? "قواعد متیلاسیون را به‌صورت علیت کاملاً حل‌شده ارائه نکنید. خود درس می‌گوید این روابط مفیدند اما علیت هنوز کاملاً روشن نیست."
        : "No presentes las reglas de metilación como causalidad completamente resuelta. La clase dice explícitamente que son asociaciones útiles, pero la causalidad no está cerrada.";
  }
  if (/boxplot|iqr|outlier/.test(haystack)) {
    return lang === "en"
      ? "Do not confuse mean/SD with median/IQR. If you mention boxplots, explain quartiles and why outliers are defined from the interquartile range."
      : lang === "fa"
        ? "میانگین/انحراف معیار را با میانه/IQR قاطی نکنید. اگر از boxplot حرف می‌زنید باید quartileها و تعریف outlier از IQR را توضیح دهید."
        : "No confundas media/SD con mediana/IQR. Si hablas de boxplot, explica los cuartiles y por qué los outliers se definen desde el IQR.";
  }
  return lang === "en"
    ? "Avoid a generic answer. Define the concept first, then connect it to the experimental logic of the lesson."
    : lang === "fa"
      ? "پاسخ را خیلی کلی ندهید. اول مفهوم را تعریف کنید و بعد آن را به منطق آزمایشی درس وصل کنید."
      : "Evita una respuesta genérica. Primero define el concepto y después conéctalo con la lógica experimental de la lección.";
}

function getExamModel(item, lang = "es") {
  const haystack = `${item?.title || ""} ${item?.exam || ""}`.toLowerCase();
  if (/ma-?plot/.test(haystack)) {
    return lang === "en"
      ? "An MA-plot represents M as the log2 ratio between the two channels and A as the average log intensity. It is used to visualize dye bias, check whether the cloud is centred around M = 0, and judge whether normalization made the distribution parallel to the x-axis."
      : lang === "fa"
        ? "MA-plot در محور M نسبت log2 دو کانال و در محور A میانگین شدت log را نشان می‌دهد. از آن برای دیدن dye bias، بررسی تمرکز ابر حول M=0 و قضاوت دربارهٔ موفقیت normalization استفاده می‌شود."
        : "Un MA-plot representa en M el ratio log2 entre los dos canales y en A la intensidad media log. Sirve para visualizar el dye bias, comprobar si la nube queda centrada alrededor de M = 0 y juzgar si la normalización dejó la distribución paralela al eje x.";
  }
  if (/competitive|cy3|cy5|two-colou?r|array/.test(haystack)) {
    return lang === "en"
      ? "A competitive array places two labelled samples on the same chip, so both populations compete for the same probe. The readout is a colour ratio, but because Cy3 and Cy5 do not behave identically, quality control and normalization are essential before interpreting expression changes."
      : lang === "fa"
        ? "در competitive array دو نمونهٔ برچسب‌خورده روی یک چیپ قرار می‌گیرند و برای همان probe رقابت می‌کنند. خروجی یک نسبت رنگی است، اما چون Cy3 و Cy5 یکسان رفتار نمی‌کنند، قبل از تفسیر تغییرات بیان باید QC و normalization انجام شود."
        : "En un competitive array dos muestras marcadas se colocan en el mismo chip y compiten por el mismo probe. La lectura es un ratio de color, pero como Cy3 y Cy5 no se comportan igual, hacen falta QC y normalización antes de interpretar cambios de expresión.";
  }
  if (/replicat|donor|donante/.test(haystack)) {
    return lang === "en"
      ? "Technical replicates reuse the same biological sample and therefore estimate experimental variability. Different donors are not replicates, because they add genuine biological variability on top of the technical noise of the method."
      : lang === "fa"
        ? "replicate فنی همان نمونهٔ زیستی را دوباره اندازه می‌گیرد و بنابراین تغییرپذیری آزمایشی را برآورد می‌کند. donorهای مختلف replicate نیستند، چون علاوه بر نویز فنی، تغییرپذیری واقعی زیستی را وارد می‌کنند."
        : "Los replicados técnicos reutilizan la misma muestra biológica y por eso estiman variabilidad experimental. Donantes distintos no son replicados, porque añaden variabilidad biológica real encima del ruido técnico del método.";
  }
  if (/mirna|sirna/.test(haystack)) {
    return lang === "en"
      ? "The lecture presents miRNA as a small regulatory RNA that usually binds with partial complementarity and represses translation, while siRNA is described with perfect complementarity and cleavage of the target mRNA."
      : lang === "fa"
        ? "درس miRNA را به‌صورت RNA تنظیمی کوچک با مکمل‌بودن جزئی و سرکوب ترجمه معرفی می‌کند، در حالی که siRNA با مکمل‌بودن کامل و cleavage mRNA هدف توضیح داده می‌شود."
        : "La clase presenta al miRNA como un RNA regulador pequeño que suele unirse con complementariedad parcial y reprimir la traducción, mientras que el siRNA se describe con complementariedad perfecta y corte del mRNA diana.";
  }
  if (/methyl|metil/.test(haystack)) {
    return lang === "en"
      ? "DNA methylation refers mainly to methylation of cytosines in CpG contexts. It is relevant because it changes with cell type, stimuli and age, and because it can be used as a biomarker, although the lecture stresses that causality is still not fully resolved."
      : lang === "fa"
        ? "متیلاسیون DNA عمدتاً به متیله‌شدن سیتوزین‌ها در زمینهٔ CpG اشاره دارد. این موضوع مهم است چون با نوع سلول، محرک و سن تغییر می‌کند و می‌تواند biomarker باشد، هرچند خود درس تأکید می‌کند که علیت هنوز کاملاً روشن نشده است."
        : "La metilación del DNA se refiere sobre todo a la metilación de citosinas en contextos CpG. Es relevante porque cambia con el tipo celular, los estímulos y la edad, y porque puede usarse como biomarcador, aunque la clase insiste en que la causalidad no está completamente resuelta.";
  }
  if (/boxplot|iqr|outlier/.test(haystack)) {
    return lang === "en"
      ? "A boxplot summarizes ranked data through quartiles, with the box spanning Q1 to Q3 and the median inside. The interquartile range is Q3 − Q1, and outliers are defined as values that fall well beyond that central range."
      : lang === "fa"
        ? "boxplot داده‌های رتبه‌بندی‌شده را با quartileها خلاصه می‌کند؛ جعبه از Q1 تا Q3 است و میانه درون آن قرار می‌گیرد. IQR برابر Q3−Q1 است و outlierها مقادیری هستند که به‌وضوح بیرون از این بازهٔ مرکزی می‌افتند."
        : "Un boxplot resume datos ordenados mediante cuartiles: la caja va de Q1 a Q3 y la mediana queda dentro. El IQR es Q3 − Q1, y los outliers son los valores que caen claramente fuera de ese rango central.";
  }
  const body = firstSentence(item?.body || "");
  const professor = firstSentence(item?.professor || "");
  return lang === "en"
    ? `Start by defining ${item?.title || "the concept"}. Then connect it to the lecture's message: ${body} ${professor}`.trim()
    : lang === "fa"
      ? `با تعریف ${item?.title || "مفهوم اصلی"} شروع کنید. سپس آن را به پیام درس وصل کنید: ${body} ${professor}`.trim()
      : `Empieza definiendo ${item?.title || "el concepto central"}. Después conéctalo con el mensaje de la clase: ${body} ${professor}`.trim();
}

function getExamInclude(item, lang = "es") {
  const body = firstSentence(item?.body || "");
  const professor = firstSentence(item?.professor || "");
  if (lang === "en") {
    return [
      `Open with a one-sentence definition of ${item?.title || "the concept"}.`,
      `Then include the lecture's key content: ${body}`,
      `Finish with the nuance the professor emphasizes: ${professor}`
    ];
  }
  if (lang === "fa") {
    return [
      `با یک تعریف یک‌جمله‌ای از ${item?.title || "مفهوم اصلی"} شروع کنید.`,
      `بعد ایدهٔ کلیدی درس را وارد کنید: ${body}`,
      `در پایان نکته‌ای را بگویید که استاد روی آن تأکید کرده است: ${professor}`
    ];
  }
  return [
    `Abre con una definición de una frase sobre ${item?.title || "el concepto central"}.`,
    `Después mete la idea clave de la clase: ${body}`,
    `Cierra con el matiz que la profesora remarca: ${professor}`
  ];
}

function ZoomableFigure({ src, alt, lang = "es", className = "" }) {
  const [open, setOpen] = useState(false);
  const ui = getExamUi(lang);
  return <>
    <button type="button" onClick={() => setOpen(true)} className="group relative block h-full w-full cursor-zoom-in text-left">
      <img src={src} alt={alt} loading="lazy" className={className} />
      <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-stone-200 bg-white/95 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-stone-700 shadow-sm transition group-hover:-translate-y-0.5">{ui.zoom}</span>
    </button>
    {open && <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4" onClick={() => setOpen(false)}>
      <div className="relative w-full max-w-6xl rounded-[2rem] border border-stone-200 bg-white p-3 shadow-2xl" onClick={e => e.stopPropagation()}>
        <button type="button" onClick={() => setOpen(false)} className="absolute right-5 top-5 z-10 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-stone-700 shadow-sm transition hover:bg-stone-50">{ui.closeZoom}</button>
        <div className="rounded-[1.5rem] bg-stone-50 p-2">
          <img src={src} alt={alt} className="max-h-[82vh] w-full rounded-[1.25rem] object-contain" />
        </div>
      </div>
    </div>}
  </>;
}

function ExamWatchCard({ item, lang = "es", label }) {
  const ui = getExamUi(lang);
  const include = getExamInclude(item, lang);
  const trap = getExamTrap(item, lang);
  const model = getExamModel(item, lang);
  return <div className="mt-3 rounded-2xl border border-red-200 bg-red-50 p-4">
    <div className="text-xs font-black uppercase tracking-[0.16em] text-red-700">{label}</div>
    <p className="mt-1 text-sm font-bold leading-6 text-red-950">{item.exam}</p>
    <details className="mt-3 rounded-2xl border border-red-200/80 bg-white/80 p-3 open:bg-white">
      <summary className="cursor-pointer list-none text-sm font-black text-red-800 marker:hidden">{ui.expand}</summary>
      <div className="mt-3 space-y-3 text-sm font-semibold leading-6 text-stone-700">
        <div>
          <div className="text-[11px] font-black uppercase tracking-[0.16em] text-stone-500">{ui.include}</div>
          <ul className="mt-2 space-y-2">
            {include.map(point => <li key={point} className="flex gap-2"><span className="mt-1 text-red-600">•</span><span>{point}</span></li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3">
          <div className="text-[11px] font-black uppercase tracking-[0.16em] text-amber-800">{ui.trap}</div>
          <p className="mt-1 font-bold text-amber-950">{trap}</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
          <div className="text-[11px] font-black uppercase tracking-[0.16em] text-stone-500">{ui.model}</div>
          <p className="mt-1 font-bold text-stone-900">{model}</p>
        </div>
      </div>
    </details>
  </div>;
}

const LESSON1_VISUAL_COPY = {
  en: {
    labels: { professor: "Professor emphasis", exam: "Exam watch", slide: "Slide", open: "Open slides PDF" },
    blocks: {
      questionFlow: {
        eyebrow: "Follow the lecture flow", title: "1 · Wet-lab science starts with a focused question", intro: "The image is placed here because it is the first conceptual step of the lesson: question → experiment → results/statistics → a new, more focused question.",
        items: [
          { image: "wetLabFlow", title: "Science is an iterative circuit", body: "The professor says this looks trivial, but it is not: results do not close the project; they usually generate the next biological question.", professor: "Do not write a broad topic like ‘study cancer’. Write a specific question: which cancer, which model, which stimulus, dose, time and readout?", exam: "Possible written question: Explain how a focused biological question becomes an experiment and why statistics comes before the next question." }
        ]
      },
      design: {
        eyebrow: "Design before data", title: "2 · Define context, model, variables and technique", intro: "These slides belong next to the biological-question builder because they show what must be decided before any dataset exists.",
        items: [
          { image: "biologicalQuestion", title: "The checklist behind every answer", body: "Context, model, experimental design, sample size, ad hoc technique, independent/dependent variables and variability are all part of the same answer.", professor: "Sample size is not just ‘more samples’: it is the number needed to find something significant. Time-series is described as an excellent design when feasible.", exam: "High-yield: Be ready to list these elements in 10–12 lines and connect them to DNA/RNA quantification." },
          { image: "dynamicProcesses", title: "DNA/RNA dynamics in a specific context", body: "The model can be human, animal, in vitro, in vivo or ex vivo; variables include tissue/cell type, sex, stimulus, dose, time and age.", professor: "She repeatedly links the technique to the variable: if the question is RNA, measure RNA; if it is methylation, choose methylation profiling.", exam: "Possible question: Describe which variables must be controlled in a DNA/RNA dynamics experiment." }
        ]
      },
      omics: {
        eyebrow: "Choose the biological layer", title: "3 · Omics technologies are selected after the question", intro: "The omics table follows the design block because the professor’s point is not to choose a fashionable technique first, but to choose the layer that answers the question.",
        items: [
          { image: "omicsMap", title: "From genomics to spatial multiomics", body: "Genomics, transcriptomics, epigenomics, metagenomics, proteomics, metabolomics, single-cell and spatial multiomics answer different questions.", professor: "She highlights spatial multiomics as ‘the top’ because it can measure RNA/protein while preserving tissue location, but the key is still appropriateness.", exam: "Useful contrast: DNA-seq for sequence variation, RNA profiling for expression, methylation arrays for epigenetic state." }
        ]
      },
      molecularContext: {
        eyebrow: "Biological context", title: "4 · DNA, epigenetics, RNA and microbiome create the variability", intro: "This block follows the omics map because the first lecture spends time showing why biological context is not generic background—it determines the variables to measure.",
        items: [
          { image: "environmentEpigenetics", title: "Environment and exposome modify DNA/RNA profiles", body: "Diet, stress, smoking, alcohol, pathogens and aging can influence chromatin, methylation and expression.", professor: "The word ‘exposome’ is emphasized as crucial: our life is exposed every day to stimuli that interact with age and biological defenses.", exam: "Mention genetics + epigenetics + environment/exposome + age as sources of biological variability." },
          { image: "dnaMethylation", title: "DNA methylation is the bridge to Module 2", body: "CpG methylation, DNMT1 maintenance, DNMT3A/3B de novo methylation and TET demethylation are introduced here before the Illumina pipeline.", professor: "She says DNA methylation is the core of Module 2 and warns that promoter/gene-body methylation rules are useful but causality is not fully resolved.", exam: "Possible short question: What is DNA methylation and why is it relevant for biological age or disease?" },
          { image: "mirnaSeed", title: "RNA is not only mRNA", body: "The lecture introduces non-coding RNAs, especially miRNAs: 18–25 nt, seed sequence, many targets and broad regulation of gene expression.", professor: "She contrasts miRNA with siRNA: miRNA usually has partial complementarity, whereas siRNA is perfectly complementary and cleaves the mRNA.", exam: "Remember the difference between miRNA and siRNA; it is a compact, exam-friendly comparison." },
          { image: "gutMicrorna", title: "Microbiome becomes a variable in gut-related pathology", body: "In intestinal inflammation, host cells, microbes, metabolites, cytokines and miRNAs interact; this is why the biological model must include the right variables.", professor: "She says that if you write a gut-inflammation project excluding the microbiome, the project would likely be rejected.", exam: "Use this as an example of ‘biological context determines variables’." },
          { image: "mainMessage", title: "Main message of the lecture", body: "The proper variables can only be measured if the biological context is known first.", professor: "This slide is the shortest version of her main thesis: context → variables → technique → data.", exam: "This can be the opening sentence of almost any written answer for Lesson 1." }
        ]
      },
      variability: {
        eyebrow: "Quantifying variability", title: "5 · Technical variability must not hide biological variability", intro: "The CV examples are placed after the interactive classifier because they show exactly how the professor distinguishes replicates from different donors.",
        items: [
          { image: "platformsPipeline", title: "High-throughput platforms add preprocessing and algorithms", body: "DNA/RNA targets become data only after biosample processing, platform chemistry, preprocessing, data mining and statistics.", professor: "She notes that different software/algorithms can change final results, so the technique itself is a source of variability.", exam: "Good phrase: raw data are not yet biological conclusions; preprocessing and algorithms are part of the experiment." },
          { image: "variabilitySources", title: "Two types of variability", body: "Experimental variability comes from technique, instruments, reagents and operators. Biological variability comes from individuals, time, genetics, epigenetics, environment and age.", professor: "She is very explicit: if technical variability is bigger than biological variability, ‘you cannot work’. You must know the machine’s variability.", exam: "Very likely: distinguish biological and experimental variability with examples." },
          { image: "technicalCv", title: "Technical replicates: CV ≈ 8.53%", body: "The same sample measured repeatedly gives similar but not identical values; CV = SD / mean × 100.", professor: "She stresses that identical replicates never give exactly identical numbers; SD = 0 basically does not happen in real experiments.", exam: "Be able to state what technical replicates measure: experimental variability, not donor variability." },
          { image: "donorCv", title: "Different donors: CV ≈ 51%", body: "The same gene measured in different donors includes biological variability plus the technical variability embedded in the method.", professor: "She warns: do not call different donors ‘replicates’. Donors are different biological samples.", exam: "This is a key trap: replicates ≠ donors." }
        ]
      },
      plots: {
        eyebrow: "Showing variability", title: "6 · Use plots to show distribution, outliers and individuality", intro: "The final visual block follows the replicate/donor distinction because the professor ends by moving from mean/SD toward heterogeneity and individualized profiles.",
        items: [
          { image: "boxplotIqr", title: "Boxplot, IQR and outliers", body: "Quartiles divide ranked data; IQR is Q3−Q1; outliers lie below Q1−1.5×IQR or above Q3+1.5×IQR.", professor: "She says boxplots often show data better than a simple mean ± SD because they display distribution and outliers.", exam: "Possible definition question: What is IQR and how are outliers identified in a boxplot?" },
          { image: "individualVariability", title: "Beyond the mean: individual variability", body: "The centenarian/nonagenarian example is used to show that aging increases heterogeneity and that mean values can hide individual trajectories.", professor: "Her vision is personalized medicine and N-of-1/longitudinal approaches, while recognizing that they are expensive and difficult.", exam: "Use this to close answers about why variability is not just noise; it can be the biological phenomenon itself." }
        ]
      }
    }
  },
  es: {
    labels: { professor: "Énfasis de la profesora", exam: "Ojo para examen", slide: "Diapositiva", open: "Abrir PDF de slides" },
    blocks: {
      questionFlow: { eyebrow: "Sigue el flujo de la clase", title: "1 · La wet lab empieza con una pregunta enfocada", intro: "La imagen va aquí porque es el primer paso conceptual: pregunta → experimento → resultados/estadística → nueva pregunta más enfocada.", items: [
        { image: "wetLabFlow", title: "La ciencia es un circuito iterativo", body: "La profesora dice que parece trivial, pero no lo es: los resultados no cierran el proyecto; normalmente abren la siguiente pregunta biológica.", professor: "No escribas una idea amplia como ‘estudiar cáncer’. Hay que especificar qué cáncer, qué modelo, qué estímulo, dosis, tiempo y variable de salida.", exam: "Posible pregunta escrita: explicar cómo una pregunta biológica enfocada se transforma en experimento y por qué la estadística precede a la siguiente pregunta." }
      ] },
      design: { eyebrow: "Diseño antes que datos", title: "2 · Define contexto, modelo, variables y técnica", intro: "Estas slides van junto al constructor de pregunta biológica porque muestran qué se decide antes de tener un dataset.", items: [
        { image: "biologicalQuestion", title: "El checklist detrás de cualquier respuesta", body: "Contexto, modelo, diseño, tamaño muestral, técnica ad hoc, variables independientes/dependientes y variabilidad forman una sola respuesta.", professor: "Sample size no es solo ‘más muestras’: es el número necesario para encontrar algo significativo. Time-series es una estrategia muy buena cuando se puede.", exam: "Muy preguntable: listar estos elementos en 10–12 líneas y conectarlos con cuantificación de DNA/RNA." },
        { image: "dynamicProcesses", title: "DNA/RNA dynamics en contexto específico", body: "El modelo puede ser humano, animal, in vitro, in vivo o ex vivo; las variables incluyen tejido/célula, sexo, estímulo, dosis, tiempo y edad.", professor: "Ella une siempre técnica y variable: si la pregunta es RNA, mide RNA; si es metilación, usa methylation profiling.", exam: "Posible pregunta: describe qué variables deben controlarse en un experimento de DNA/RNA dynamics." }
      ] },
      omics: { eyebrow: "Elegir la capa biológica", title: "3 · Las tecnologías ómicas se eligen después de la pregunta", intro: "La tabla de ómicas sigue al diseño porque el mensaje no es elegir la técnica de moda, sino la capa que responde la pregunta.", items: [
        { image: "omicsMap", title: "De genómica a spatial multiomics", body: "Genomics, transcriptomics, epigenomics, metagenomics, proteomics, metabolomics, single-cell y spatial multiomics responden preguntas distintas.", professor: "Destaca spatial multiomics como ‘lo top’ porque preserva localización tisular, pero la clave sigue siendo que la técnica sea apropiada.", exam: "Contraste útil: DNA-seq para secuencia, RNA profiling para expresión, methylation arrays para estado epigenético." }
      ] },
      molecularContext: { eyebrow: "Contexto biológico", title: "4 · DNA, epigenética, RNA y microbioma generan variabilidad", intro: "Este bloque sigue al mapa de ómicas porque la clase muestra que el contexto biológico determina las variables que se deben medir.", items: [
        { image: "environmentEpigenetics", title: "Ambiente y exposoma modifican perfiles DNA/RNA", body: "Dieta, estrés, tabaco, alcohol, patógenos y edad pueden influir sobre cromatina, metilación y expresión.", professor: "La palabra ‘exposome’ se enfatiza como crucial: cada día estamos expuestos a estímulos que interactúan con la edad y las defensas biológicas.", exam: "Menciona genetics + epigenetics + environment/exposome + age como fuentes de variabilidad biológica." },
        { image: "dnaMethylation", title: "DNA methylation conecta con Module 2", body: "Se introducen CpG methylation, DNMT1, DNMT3A/3B y TET antes de la pipeline Illumina.", professor: "Dice que la metilación es el núcleo del Module 2 y advierte que las reglas promoter/gene body ayudan, pero la causalidad no está completamente resuelta.", exam: "Posible pregunta: ¿qué es DNA methylation y por qué importa en edad biológica o enfermedad?" },
        { image: "mirnaSeed", title: "RNA no es solo mRNA", body: "La clase introduce ncRNAs, sobre todo miRNAs: 18–25 nt, seed sequence, muchos targets y regulación amplia.", professor: "Contrasta miRNA y siRNA: miRNA suele tener complementariedad parcial; siRNA es perfectamente complementario y corta el mRNA.", exam: "Recuerda la diferencia miRNA vs siRNA; es una comparación compacta para examen." },
        { image: "gutMicrorna", title: "El microbioma es variable en patología intestinal", body: "En inflamación intestinal interactúan células huésped, microbios, metabolitos, citoquinas y miRNAs.", professor: "Afirma que un proyecto sobre inflamación intestinal que excluye el microbioma probablemente sería rechazado.", exam: "Úsalo como ejemplo de ‘el contexto biológico determina las variables’." },
        { image: "mainMessage", title: "Mensaje principal de la clase", body: "Solo se miden las variables correctas si primero se conoce el contexto biológico.", professor: "Esta slide resume su tesis: contexto → variables → técnica → datos.", exam: "Puede ser la frase inicial de casi cualquier respuesta de la Lesson 1." }
      ] },
      variability: { eyebrow: "Cuantificar variabilidad", title: "5 · La variabilidad técnica no debe ocultar la biológica", intro: "Los ejemplos de CV van después del clasificador porque muestran cómo separar replicados técnicos de donantes diferentes.", items: [
        { image: "platformsPipeline", title: "Las plataformas añaden preprocesamiento y algoritmos", body: "Los targets DNA/RNA se vuelven datos tras procesamiento de muestra, química de plataforma, preprocessing, data mining y estadística.", professor: "Señala que software y algoritmos distintos pueden cambiar los resultados finales; la técnica también introduce variabilidad.", exam: "Buena frase: raw data no son conclusiones biológicas; preprocessing y algoritmos son parte del experimento." },
        { image: "variabilitySources", title: "Dos tipos de variabilidad", body: "La experimental viene de técnica, instrumentos, reactivos y operador. La biológica viene de individuos, tiempo, genética, epigenética, ambiente y edad.", professor: "Lo dice muy claro: si la variabilidad técnica supera a la biológica, ‘no se puede trabajar’. Hay que conocer la variabilidad de la máquina.", exam: "Muy probable: distinguir variabilidad biológica y experimental con ejemplos." },
        { image: "technicalCv", title: "Replicados técnicos: CV ≈ 8.53%", body: "La misma muestra medida varias veces da valores parecidos, pero no idénticos; CV = SD / mean × 100.", professor: "Insiste en que replicados idénticos nunca dan números exactamente idénticos; SD = 0 prácticamente no existe.", exam: "Debes decir qué miden los replicados técnicos: variabilidad experimental, no variabilidad entre donantes." },
        { image: "donorCv", title: "Donantes diferentes: CV ≈ 51%", body: "El mismo gen en donantes distintos incluye variabilidad biológica más la variabilidad técnica del método.", professor: "Advertencia clave: no llames ‘replicates’ a donantes distintos. Son muestras biológicas diferentes.", exam: "Trampa clave: replicates ≠ donors." }
      ] },
      plots: { eyebrow: "Mostrar la variabilidad", title: "6 · Usa plots para distribución, outliers e individualidad", intro: "El bloque final conecta la diferencia replicados/donantes con la idea de heterogeneidad e individualización.", items: [
        { image: "boxplotIqr", title: "Boxplot, IQR y outliers", body: "Los cuartiles dividen datos ordenados; IQR = Q3−Q1; outliers están fuera de Q1−1.5×IQR o Q3+1.5×IQR.", professor: "Dice que un boxplot puede mostrar mejor los datos que mean ± SD porque enseña distribución y outliers.", exam: "Posible definición: ¿qué es IQR y cómo se identifican outliers en un boxplot?" },
        { image: "individualVariability", title: "Más allá de la media: variabilidad individual", body: "El ejemplo de nonagenarians/centenarians muestra que el envejecimiento aumenta la heterogeneidad y que la media puede ocultar trayectorias individuales.", professor: "Su visión es personalized medicine y enfoques N-of-1/longitudinales, aunque reconoce que son costosos y difíciles.", exam: "Úsalo para cerrar respuestas: la variabilidad no siempre es ruido; puede ser el fenómeno biológico." }
      ] }
    }
  },
  fa: {
    labels: { professor: "تأکید استاد", exam: "نکتهٔ امتحانی", slide: "اسلاید", open: "باز کردن PDF اسلایدها" },
    blocks: {
      questionFlow: { eyebrow: "جریان درس", title: "۱ · wet lab با یک پرسش دقیق شروع می‌شود", intro: "این تصویر در این بخش آمده چون اولین منطق درس است: پرسش → آزمایش → داده/آمار → پرسش دقیق‌تر بعدی.", items: [
        { image: "wetLabFlow", title: "علم یک چرخهٔ تکراری است", body: "استاد می‌گوید این جریان ساده به نظر می‌رسد، اما ساده نیست: نتیجه‌ها معمولاً پایان کار نیستند و پرسش بعدی را می‌سازند.", professor: "ننویسید ‘study cancer’. باید مشخص کنید کدام سرطان، کدام مدل، کدام stimulus، dose، زمان و readout.", exam: "پرسش احتمالی: توضیح دهید چگونه biological question به experiment تبدیل می‌شود و چرا statistics مهم است." }
      ] },
      design: { eyebrow: "طراحی پیش از داده", title: "۲ · زمینه، مدل، متغیرها و تکنیک را تعریف کنید", intro: "این اسلایدها کنار question builder قرار می‌گیرند چون نشان می‌دهند قبل از dataset چه چیزهایی باید مشخص شوند.", items: [
        { image: "biologicalQuestion", title: "چک‌لیست هر پاسخ خوب", body: "context، model، design، sample size، تکنیک ad hoc، متغیرهای independent/dependent و variability باید با هم دیده شوند.", professor: "sample size یعنی تعداد لازم برای دیدن نتیجهٔ significant. time-series وقتی ممکن باشد یک طراحی بسیار خوب است.", exam: "پرکاربرد: این عناصر را در ۱۰–۱۲ خط به quantification در DNA/RNA وصل کنید." },
        { image: "dynamicProcesses", title: "DNA/RNA dynamics در context مشخص", body: "مدل می‌تواند human، animal، in vitro، in vivo یا ex vivo باشد؛ متغیرها شامل cell/tissue، sex، stimulus، dose، time و age هستند.", professor: "تکنیک همیشه باید به متغیر وصل باشد: پرسش RNA → اندازه‌گیری RNA؛ پرسش methylation → methylation profiling.", exam: "پرسش احتمالی: در یک آزمایش DNA/RNA dynamics چه متغیرهایی باید کنترل شوند؟" }
      ] },
      omics: { eyebrow: "انتخاب لایهٔ زیستی", title: "۳ · فناوری omics بعد از پرسش انتخاب می‌شود", intro: "جدول omics بعد از design می‌آید چون پیام استاد این است که اول پرسش، بعد تکنیک.", items: [
        { image: "omicsMap", title: "از genomics تا spatial multiomics", body: "genomics، transcriptomics، epigenomics، metagenomics، proteomics، metabolomics، single-cell و spatial multiomics هرکدام پرسش متفاوتی را پاسخ می‌دهند.", professor: "spatial multiomics را ‘top’ می‌داند چون مکان بافتی را حفظ می‌کند، اما اصل همان مناسب بودن تکنیک است.", exam: "مقایسهٔ مفید: DNA-seq برای sequence، RNA profiling برای expression، methylation array برای epigenetic state." }
      ] },
      molecularContext: { eyebrow: "زمینهٔ زیستی", title: "۴ · DNA، اپی‌ژنتیک، RNA و microbiome تغییرپذیری می‌سازند", intro: "این بخش نشان می‌دهد context زیستی تعیین می‌کند چه variableهایی باید اندازه‌گیری شوند.", items: [
        { image: "environmentEpigenetics", title: "environment و exposome پروفایل‌های DNA/RNA را تغییر می‌دهند", body: "diet، stress، smoking، alcohol، pathogens و age می‌توانند chromatin، methylation و expression را تغییر دهند.", professor: "واژهٔ exposome مهم است: بدن هر روز در تماس با stimulusهایی است که با age و defenseها تعامل دارند.", exam: "منابع variability زیستی: genetics + epigenetics + environment/exposome + age." },
        { image: "dnaMethylation", title: "DNA methylation پل ورود به Module 2 است", body: "CpG methylation، DNMT1، DNMT3A/3B و TET پیش از pipeline Illumina معرفی می‌شوند.", professor: "می‌گوید methylation هستهٔ Module 2 است و causality کاملاً حل نشده است.", exam: "پرسش احتمالی: DNA methylation چیست و چرا در biological age یا disease مهم است؟" },
        { image: "mirnaSeed", title: "RNA فقط mRNA نیست", body: "miRNAها ۱۸–۲۵ نوکلئوتید هستند، seed sequence دارند و targets زیادی را تنظیم می‌کنند.", professor: "miRNA با complementarity جزئی کار می‌کند؛ siRNA معمولاً complementarity کامل دارد و mRNA را cleave می‌کند.", exam: "تفاوت miRNA و siRNA را حفظ کنید." },
        { image: "gutMicrorna", title: "microbiome در بیماری روده یک متغیر کلیدی است", body: "در التهاب روده، سلول میزبان، میکروب، metabolite، cytokine و miRNA تعامل دارند.", professor: "می‌گوید پروژهٔ التهاب روده بدون microbiome احتمالاً رد می‌شود.", exam: "مثال خوب برای اینکه context زیستی variableها را تعیین می‌کند." },
        { image: "mainMessage", title: "پیام اصلی درس", body: "فقط وقتی context را می‌دانیم می‌توانیم variable درست را اندازه‌گیری کنیم.", professor: "خلاصهٔ درس: context → variables → technique → data.", exam: "جملهٔ شروع مناسب برای پاسخ‌های Lesson 1." }
      ] },
      variability: { eyebrow: "اندازه‌گیری variability", title: "۵ · variability فنی نباید variability زیستی را پنهان کند", intro: "مثال‌های CV نشان می‌دهند replicates فنی با donors متفاوت فرق دارند.", items: [
        { image: "platformsPipeline", title: "platformها preprocessing و الگوریتم دارند", body: "targets DNA/RNA بعد از sample processing، chemistry، preprocessing، data mining و statistics به داده تبدیل می‌شوند.", professor: "نرم‌افزار و الگوریتم هم می‌توانند نتیجه را تغییر دهند؛ پس تکنیک هم منبع variability است.", exam: "raw data هنوز biological conclusion نیست." },
        { image: "variabilitySources", title: "دو نوع variability", body: "experimental از تکنیک، instrument، reagent و operator می‌آید؛ biological از فرد، زمان، genetics، epigenetics، environment و age.", professor: "اگر technical variability از biological variability بزرگ‌تر باشد، نمی‌توان کار کرد.", exam: "احتمالی: biological و experimental variability را با مثال جدا کنید." },
        { image: "technicalCv", title: "technical replicates: CV ≈ 8.53%", body: "یک نمونهٔ یکسان چند بار اندازه‌گیری می‌شود؛ CV = SD / mean × 100.", professor: "نتایج identical واقعاً identical نمی‌شوند؛ SD=0 تقریباً وجود ندارد.", exam: "technical replicates variability آزمایشی را می‌سنجند، نه donor variability." },
        { image: "donorCv", title: "donors متفاوت: CV ≈ 51%", body: "اندازه‌گیری یک ژن در donors مختلف شامل biological variability و technical variability است.", professor: "donors را replicates صدا نکنید؛ donors نمونه‌های زیستی متفاوت‌اند.", exam: "دام مهم: replicates ≠ donors." }
      ] },
      plots: { eyebrow: "نمایش variability", title: "۶ · plotها distribution، outlier و individuality را نشان می‌دهند", intro: "این بخش آخر به heterogeneity و personalized medicine وصل می‌شود.", items: [
        { image: "boxplotIqr", title: "Boxplot، IQR و outliers", body: "IQR = Q3−Q1 و outlier خارج از Q1−1.5×IQR یا Q3+1.5×IQR است.", professor: "boxplot گاهی از mean ± SD بهتر است چون distribution و outlier را نشان می‌دهد.", exam: "تعریف IQR و outlier ممکن است پرسیده شود." },
        { image: "individualVariability", title: "فراتر از میانگین: variability فردی", body: "مثال centenarians نشان می‌دهد aging heterogeneity را زیاد می‌کند و میانگین می‌تواند مسیرهای فردی را پنهان کند.", professor: "چشم‌انداز او personalized medicine و N-of-1/longitudinal study است، اگرچه گران و دشوار است.", exam: "variability همیشه noise نیست؛ گاهی خود phenomenon زیستی است." }
      ] }
    }
  }
};

const LESSON1_SLIDES = [];
const LESSON1_SLIDE_COPY = {};

const LESSON_COPY = {
  "en": {
    "back": "Back to DRD dashboard",
    "done": "✓ Completed",
    "mark": "Mark completed",
    "eyebrow": "DRD Lesson 1 · Apr 28",
    "title": "From biological question to data and variability.",
    "subtitle": "First study page for DNA/RNA Dynamics, built from the introductory slides and the April 28 transcript: biological question, experimental model, omics, variability, CV, distribution and exam logic.",
    "tags": [
      "biological question",
      "experimental design",
      "technical variability",
      "biological variability",
      "CV"
    ],
    "module": "Module",
    "exam": "Exam",
    "answer": "Answer",
    "core": "Core",
    "bigIdea": "Big idea",
    "bigIdeaText": "A biological question becomes useful only when it becomes a measurable design with controlled variability.",
    "slides": "Slides PDF",
    "transcript": "Transcript",
    "flowEyebrow": "Core flow",
    "flowTitle": "How wet lab science works",
    "flowIntro": "The transcript insists this is not a trivial pipeline: every experiment starts with a focused question, produces data/statistics, and usually opens the next question.",
    "activeStep": "Active step",
    "flow": [
      {
        "title": "1. Biological question",
        "body": "The question must be focused: not simply ‘study cancer’, but which cancer, model, treatment, dose, time, tissue or population."
      },
      {
        "title": "2. Model + design",
        "body": "The model can be in vitro, in vivo, ex vivo, animal or human. The design can be case-control, longitudinal, cross-sectional or time-series."
      },
      {
        "title": "3. Technique",
        "body": "The technique is chosen after the question: DNA-seq, RNA profiling, methylation array, protein/metabolite assays, microbiome and so on."
      },
      {
        "title": "4. Data + statistics",
        "body": "The measurement produces numbers, data and variability. Then we decide whether the result is interpretable and statistically defensible."
      },
      {
        "title": "5. New question",
        "body": "Results rarely close the process. They normally generate a second, more focused biological question."
      }
    ],
    "builderEyebrow": "Interactive builder",
    "builderTitle": "Build a focused biological question",
    "builderPill": "question → experiment",
    "model": "Model",
    "independent": "Independent variable",
    "dependent": "Dependent variable",
    "technique": "Technique",
    "focusedQuestion": "Focused question",
    "sentence": "In a {model}, does {independent} modify {dependent}, measured by {technique}?",
    "models": [
      "human cohort",
      "in vitro cell model",
      "animal model",
      "ex vivo blood sample"
    ],
    "independentOptions": [
      "age",
      "inflammatory stimulus",
      "drug dose",
      "sex/gender",
      "time after treatment"
    ],
    "dependentOptions": [
      "DNA methylation profile",
      "mRNA expression",
      "microRNA profile",
      "protein level",
      "metabolite profile"
    ],
    "techniqueOptions": [
      "Illumina EPIC / 450K methylation array",
      "RNA-seq",
      "microarray",
      "qPCR",
      "ELISA"
    ],
    "designEyebrow": "Design checklist",
    "designTitle": "What the slides ask you to define",
    "designCards": [
      [
        "Model",
        "human · animal · in vitro · in vivo · ex vivo"
      ],
      [
        "Variables",
        "cell type/tissue · sex/gender · stimulus · dose · microenvironment · time/age"
      ],
      [
        "Sample size",
        "sufficient to detect a significant difference, not only to generate data"
      ],
      [
        "Technique",
        "ad hoc: it must answer the question and have acceptable technical variability"
      ]
    ],
    "omicsEyebrow": "Omics map",
    "omicsTitle": "Choose the layer that answers the question",
    "omicsIntro": "The lecture introduces the omics era to avoid a common error: choosing an advanced technique before knowing which biological layer must be measured.",
    "omics": [
      [
        "Genomics",
        "sequence, mutations, aberrations",
        "DNA-seq · arrays · Hi-C"
      ],
      [
        "Transcriptomics",
        "mRNA and RNA profiles",
        "microarrays · RNA-seq"
      ],
      [
        "Epigenomics",
        "DNA methylation, chromatin",
        "methylation arrays · ChIP-seq · Nanopore"
      ],
      [
        "Metagenomics",
        "microbiome genes",
        "DNA-seq"
      ],
      [
        "Proteomics / metabolomics",
        "proteins and metabolites",
        "protein arrays · LC-MS · GC-MS · NMR"
      ],
      [
        "Single-cell / spatial",
        "cell-level and tissue-positioned omics",
        "scRNA-seq · CITE-seq · GeoMx DSP"
      ]
    ],
    "classEyebrow": "Checkpoint",
    "classTitle": "Classify variability sources",
    "classIntro": "Mark each source as mainly biological or experimental. The lesson’s key rule: technical variability must be low enough not to hide the biological signal.",
    "bioBtn": "Biological",
    "techBtn": "Experimental",
    "varItems": [
      {
        "id": "sex",
        "label": "Sex/gender effect",
        "type": "bio",
        "why": "A biological difference that can be stratified to reduce heterogeneity."
      },
      {
        "id": "operator",
        "label": "Operator pipetting",
        "type": "technical",
        "why": "Comes from experimental handling and must remain low and stable."
      },
      {
        "id": "age",
        "label": "Chronological age",
        "type": "bio",
        "why": "Age modifies DNA/RNA profiles and increases heterogeneity."
      },
      {
        "id": "scanner",
        "label": "Scanner / machine noise",
        "type": "technical",
        "why": "The transcript stresses that the researcher must know the machine’s own variability."
      },
      {
        "id": "exposome",
        "label": "Exposome: stress, diet, smoke",
        "type": "bio",
        "why": "Environment and lifestyle interact with genetics and epigenetics."
      },
      {
        "id": "reagents",
        "label": "Different reagent lots",
        "type": "technical",
        "why": "Kits and reagents can introduce experimental variation."
      }
    ],
    "cvEyebrow": "Mini calculator",
    "cvTitle": "Coefficient of Variation",
    "cvIntro": "In the transcript, qPCR technical replicates give about 8.5% CV, while different donors can be around 51–52%. The conceptual difference matters more than the exact number.",
    "cvFormula": "CV = SD / mean × 100",
    "interpretation": "Interpretation:",
    "low": "low technical variability",
    "moderate": "moderate variability",
    "high": "high variability; design or biology may dominate",
    "repEyebrow": "Interpretation",
    "repTitle": "Replicates are not donors",
    "repIntro": "This distinction appears explicitly in the transcript and is essential for not confusing technical variability with biological variability.",
    "repCards": [
      [
        "Technical replicates",
        "Same biological sample, same operator, same reagents. The expected difference should be small but never zero."
      ],
      [
        "Different donors",
        "Different DNA/RNA profiles. CV now includes biological variability plus the technical variability embedded in the measurement."
      ],
      [
        "Design response",
        "If biological variability is huge, use stratification, larger sample size, longitudinal design or a more precise biological question."
      ]
    ],
    "quizEyebrow": "Quick quiz",
    "quizTitle": "Check the logic of the lecture",
    "showAnswer": "Show answer",
    "correct": "Correct",
    "wrong": "Try again",
    "quiz": [
      {
        "question": "What should be defined before choosing the technique?",
        "options": [
          "The biological question and model",
          "The final p-value",
          "The colour of the plot",
          "The file name"
        ],
        "answer": 0,
        "explanation": "The technique is chosen ad hoc after knowing the biological process, model and variable to measure."
      },
      {
        "question": "Which statement matches the lecture’s logic about variability?",
        "options": [
          "Technical variability should be higher than biological variability",
          "Technical variability should be low and known",
          "Biological variability should always be removed",
          "Replicates and donors mean the same thing"
        ],
        "answer": 1,
        "explanation": "Technical variability always exists, but it must be low and known so it does not cover the biological signal."
      },
      {
        "question": "In the qPCR example, identical replicates of the same sample estimate mainly:",
        "options": [
          "biological variability",
          "experimental variability",
          "sex differences",
          "microbiome effects"
        ],
        "answer": 1,
        "explanation": "Same sample, same operator, same reagents: the remaining differences are experimental/technical variability."
      },
      {
        "question": "Why is the microbiome mentioned as a design variable?",
        "options": [
          "It is always a technical artifact",
          "It is relevant especially in gut-related biological questions",
          "It replaces RNA measurements",
          "It only matters in plants"
        ],
        "answer": 1,
        "explanation": "The transcript emphasizes that gut-related pathology cannot ignore the microbiome because it changes the biological context."
      }
    ],
    "examEyebrow": "Written exam trainer",
    "examTitle": "10–12-line answer skeleton",
    "examQuestion": "Explain why biological context and variability are essential when designing a DNA/RNA dynamics experiment.",
    "copySkeleton": "Use this skeleton",
    "skeleton": [
      "Start from a focused biological question, not a broad topic.",
      "Define model: human, animal, in vitro, in vivo or ex vivo.",
      "Define independent/dependent variables: stimulus, age, tissue, time, dose, etc.",
      "Choose the technique after the question: RNA, DNA methylation, protein, microbiome…",
      "Distinguish biological variability from technical variability.",
      "Explain that technical variability must be low and known.",
      "Use sample size, replicates, QC and statistics before drawing conclusions."
    ],
    "implEyebrow": "Implementation notes",
    "implTitle": "How this page fits the guide",
    "implIntro": "This reading is the base for the next ones: Stanford, Affymetrix, Illumina, Module 2 pipelines and differential expression.",
    "implCards": [
      [
        "React lesson",
        "Interactive lesson with builder, classifier, CV calculator, quiz and exam trainer."
      ],
      [
        "Quiz",
        "Short conceptual questions, ready to expand with feedback per option."
      ],
      [
        "Mock exam",
        "The final block trains the 10–12-line structure requested by Capri."
      ],
      [
        "Next lesson",
        "Next page should apply this logic to Stanford two-colour arrays: technique, biases, QC and variability."
      ]
    ]
  },
  "es": {
    "back": "Volver al dashboard DRD",
    "done": "✓ Completada",
    "mark": "Marcar completada",
    "eyebrow": "DRD Lección 1 · 28 abril",
    "title": "De la pregunta biológica a los datos y la variabilidad.",
    "subtitle": "Primera página de estudio para DNA/RNA Dynamics, construida con las slides introductorias y la transcripción del 28 de abril: pregunta biológica, modelo experimental, ómicas, variabilidad, CV, distribución y lógica de examen.",
    "tags": [
      "pregunta biológica",
      "diseño experimental",
      "variabilidad técnica",
      "variabilidad biológica",
      "CV"
    ],
    "module": "Module",
    "exam": "Examen",
    "answer": "Respuesta",
    "core": "Núcleo",
    "bigIdea": "Idea central",
    "bigIdeaText": "Una pregunta biológica solo se vuelve útil cuando se transforma en un diseño medible con variabilidad controlada.",
    "slides": "Slides PDF",
    "transcript": "Transcripción",
    "flowEyebrow": "Flujo central",
    "flowTitle": "Cómo funciona la wet lab science",
    "flowIntro": "La transcripción insiste en que no es un pipeline trivial: cada experimento empieza con una pregunta focalizada, produce datos/estadística y normalmente abre otra pregunta.",
    "activeStep": "Paso activo",
    "flow": [
      {
        "title": "1. Pregunta biológica",
        "body": "La pregunta debe ser focused: no basta ‘estudiar cáncer’; hay que definir cáncer, modelo, tratamiento, dosis, tiempo, tejido o población."
      },
      {
        "title": "2. Modelo + diseño",
        "body": "El modelo puede ser in vitro, in vivo, ex vivo, animal o humano. El diseño puede ser case-control, longitudinal, cross-sectional o time-series."
      },
      {
        "title": "3. Técnica",
        "body": "La técnica se elige después de la pregunta: DNA-seq, RNA profiling, methylation array, proteínas/metabolitos, microbioma, etc."
      },
      {
        "title": "4. Datos + estadística",
        "body": "La medición produce números, datos y variabilidad. Después se decide si el resultado es interpretable y defendible estadísticamente."
      },
      {
        "title": "5. Nueva pregunta",
        "body": "Los resultados casi nunca cierran el proceso: normalmente generan una segunda pregunta biológica más específica."
      }
    ],
    "builderEyebrow": "Constructor interactivo",
    "builderTitle": "Construye una pregunta biológica enfocada",
    "builderPill": "pregunta → experimento",
    "model": "Modelo",
    "independent": "Variable independiente",
    "dependent": "Variable dependiente",
    "technique": "Técnica",
    "focusedQuestion": "Pregunta enfocada",
    "sentence": "En un {model}, ¿{independent} modifica {dependent}, medido mediante {technique}?",
    "models": [
      "cohorte humana",
      "modelo celular in vitro",
      "modelo animal",
      "muestra de sangre ex vivo"
    ],
    "independentOptions": [
      "la edad",
      "un estímulo inflamatorio",
      "la dosis de un fármaco",
      "el sexo/género",
      "el tiempo tras tratamiento"
    ],
    "dependentOptions": [
      "el perfil de metilación del DNA",
      "la expresión de mRNA",
      "el perfil de microRNA",
      "el nivel de proteína",
      "el perfil de metabolitos"
    ],
    "techniqueOptions": [
      "Illumina EPIC / 450K methylation array",
      "RNA-seq",
      "microarray",
      "qPCR",
      "ELISA"
    ],
    "designEyebrow": "Checklist de diseño",
    "designTitle": "Lo que las slides piden definir",
    "designCards": [
      [
        "Modelo",
        "humano · animal · in vitro · in vivo · ex vivo"
      ],
      [
        "Variables",
        "tipo celular/tejido · sexo/género · estímulo · dosis · microambiente · tiempo/edad"
      ],
      [
        "Sample size",
        "suficiente para detectar una diferencia significativa, no solo para generar datos"
      ],
      [
        "Técnica",
        "ad hoc: debe responder la pregunta y tener variabilidad técnica aceptable"
      ]
    ],
    "omicsEyebrow": "Mapa ómico",
    "omicsTitle": "Elige la capa que responde la pregunta",
    "omicsIntro": "La clase introduce la era ómica para evitar un error común: elegir una técnica avanzada antes de saber qué capa biológica hay que medir.",
    "omics": [
      [
        "Genomics",
        "secuencia, mutaciones, aberraciones",
        "DNA-seq · arrays · Hi-C"
      ],
      [
        "Transcriptomics",
        "mRNA y perfiles de RNA",
        "microarrays · RNA-seq"
      ],
      [
        "Epigenomics",
        "metilación de DNA, cromatina",
        "methylation arrays · ChIP-seq · Nanopore"
      ],
      [
        "Metagenomics",
        "genes del microbioma",
        "DNA-seq"
      ],
      [
        "Proteomics / metabolomics",
        "proteínas y metabolitos",
        "protein arrays · LC-MS · GC-MS · NMR"
      ],
      [
        "Single-cell / spatial",
        "ómicas a nivel celular y posición tisular",
        "scRNA-seq · CITE-seq · GeoMx DSP"
      ]
    ],
    "classEyebrow": "Checkpoint",
    "classTitle": "Clasifica fuentes de variabilidad",
    "classIntro": "Marca si cada fuente pertenece principalmente a variabilidad biológica o experimental. Regla clave: la variabilidad técnica debe ser suficientemente baja para no ocultar la señal biológica.",
    "bioBtn": "Biológica",
    "techBtn": "Experimental",
    "varItems": [
      {
        "id": "sex",
        "label": "Efecto sexo/género",
        "type": "bio",
        "why": "Diferencia biológica que puede estratificarse para reducir heterogeneidad."
      },
      {
        "id": "operator",
        "label": "Pipeteo del operador",
        "type": "technical",
        "why": "Procede del manejo experimental y debe mantenerse bajo y estable."
      },
      {
        "id": "age",
        "label": "Edad cronológica",
        "type": "bio",
        "why": "La edad modifica perfiles DNA/RNA y aumenta heterogeneidad."
      },
      {
        "id": "scanner",
        "label": "Ruido del scanner/máquina",
        "type": "technical",
        "why": "La transcripción recalca que el investigador debe conocer la variabilidad propia de la máquina."
      },
      {
        "id": "exposome",
        "label": "Exposoma: estrés, dieta, tabaco",
        "type": "bio",
        "why": "Ambiente y estilo de vida interactúan con genética y epigenética."
      },
      {
        "id": "reagents",
        "label": "Lotes distintos de reactivos",
        "type": "technical",
        "why": "Kits y reactivos pueden introducir variación experimental."
      }
    ],
    "cvEyebrow": "Mini calculadora",
    "cvTitle": "Coeficiente de variación",
    "cvIntro": "En la transcripción, los replicados técnicos de qPCR dan un CV cercano a 8.5%, mientras que distintos donantes pueden rondar 51–52%. La diferencia conceptual importa más que el número exacto.",
    "cvFormula": "CV = SD / media × 100",
    "interpretation": "Interpretación:",
    "low": "variabilidad técnica baja",
    "moderate": "variabilidad moderada",
    "high": "variabilidad alta; el diseño o la biología pueden dominar",
    "repEyebrow": "Interpretación",
    "repTitle": "Replicados no son donantes",
    "repIntro": "Esta distinción aparece explícitamente en la transcripción y es fundamental para no confundir variabilidad técnica con variabilidad biológica.",
    "repCards": [
      [
        "Replicados técnicos",
        "Misma muestra biológica, mismo operador, mismos reactivos. La diferencia esperada debe ser pequeña, pero nunca cero."
      ],
      [
        "Donantes distintos",
        "Perfiles DNA/RNA distintos. El CV incluye ahora variabilidad biológica más la variabilidad técnica incrustada en la medición."
      ],
      [
        "Respuesta de diseño",
        "Si la variabilidad biológica es enorme, usa estratificación, mayor sample size, diseño longitudinal o una pregunta más precisa."
      ]
    ],
    "quizEyebrow": "Quiz rápido",
    "quizTitle": "Comprueba la lógica de la clase",
    "showAnswer": "Mostrar respuesta",
    "correct": "Correcto",
    "wrong": "Inténtalo otra vez",
    "quiz": [
      {
        "question": "¿Qué debe definirse antes de elegir la técnica?",
        "options": [
          "La pregunta biológica y el modelo",
          "El p-value final",
          "El color del gráfico",
          "El nombre del archivo"
        ],
        "answer": 0,
        "explanation": "La técnica se elige ad hoc después de saber qué proceso, modelo y variable se quiere medir."
      },
      {
        "question": "¿Qué frase encaja con la lógica de la clase sobre variabilidad?",
        "options": [
          "La variabilidad técnica debe ser mayor que la biológica",
          "La variabilidad técnica debe ser baja y conocida",
          "La variabilidad biológica siempre debe eliminarse",
          "Replicados y donantes significan lo mismo"
        ],
        "answer": 1,
        "explanation": "La variabilidad técnica siempre existe, pero debe ser baja y conocida para no cubrir la señal biológica."
      },
      {
        "question": "En el ejemplo de qPCR, replicados idénticos de la misma muestra estiman sobre todo:",
        "options": [
          "variabilidad biológica",
          "variabilidad experimental",
          "diferencias de sexo",
          "efectos del microbioma"
        ],
        "answer": 1,
        "explanation": "Misma muestra, mismo operador, mismos reactivos: las diferencias restantes son variabilidad experimental/técnica."
      },
      {
        "question": "¿Por qué se menciona el microbioma como variable de diseño?",
        "options": [
          "Siempre es un artefacto técnico",
          "Es relevante especialmente en preguntas biológicas relacionadas con intestino",
          "Sustituye las mediciones de RNA",
          "Solo importa en plantas"
        ],
        "answer": 1,
        "explanation": "La transcripción enfatiza que en patología intestinal no se puede ignorar el microbioma porque cambia el contexto biológico."
      }
    ],
    "examEyebrow": "Entrenador de examen escrito",
    "examTitle": "Esqueleto de respuesta de 10–12 líneas",
    "examQuestion": "Explica por qué el contexto biológico y la variabilidad son esenciales al diseñar un experimento de DNA/RNA dynamics.",
    "copySkeleton": "Usa este esqueleto",
    "skeleton": [
      "Parte de una pregunta biológica enfocada, no de un tema amplio.",
      "Define el modelo: humano, animal, in vitro, in vivo o ex vivo.",
      "Define variables independientes/dependientes: estímulo, edad, tejido, tiempo, dosis, etc.",
      "Elige la técnica después de la pregunta: RNA, metilación DNA, proteína, microbioma…",
      "Distingue variabilidad biológica de variabilidad técnica.",
      "Explica que la variabilidad técnica debe ser baja y conocida.",
      "Usa sample size, replicados, QC y estadística antes de concluir."
    ],
    "implEyebrow": "Notas de implementación",
    "implTitle": "Cómo encaja esta página en la guía",
    "implIntro": "Esta lectura es la base para las siguientes: Stanford, Affymetrix, Illumina, pipelines de Module 2 y differential expression.",
    "implCards": [
      [
        "React lesson",
        "Lección interactiva con builder, clasificador, calculadora de CV, quiz y exam trainer."
      ],
      [
        "Quiz",
        "Preguntas conceptuales cortas, listas para ampliar con feedback por opción."
      ],
      [
        "Mock exam",
        "El bloque final entrena la estructura de 10–12 líneas que pide Capri."
      ],
      [
        "Siguiente lección",
        "La próxima página debería aplicar esta lógica a Stanford two-colour arrays: técnica, sesgos, QC y variabilidad."
      ]
    ]
  },
  "fa": {
    "back": "بازگشت به داشبورد DRD",
    "done": "✓ کامل شد",
    "mark": "علامت کامل‌شده",
    "eyebrow": "درس ۱ DRD · ۲۸ آوریل",
    "title": "از پرسش زیستی تا داده و تغییرپذیری.",
    "subtitle": "نخستین صفحهٔ مطالعه برای DNA/RNA Dynamics، بر پایهٔ اسلایدهای معرفی و رونویسی ۲۸ آوریل: پرسش زیستی، مدل آزمایشی، اومیکس، تغییرپذیری، CV، توزیع و منطق امتحان.",
    "tags": [
      "پرسش زیستی",
      "طراحی آزمایش",
      "تغییرپذیری فنی",
      "تغییرپذیری زیستی",
      "CV"
    ],
    "module": "ماژول",
    "exam": "امتحان",
    "answer": "پاسخ",
    "core": "هسته",
    "bigIdea": "ایدهٔ اصلی",
    "bigIdeaText": "یک پرسش زیستی زمانی مفید می‌شود که به طراحی قابل اندازه‌گیری با تغییرپذیری کنترل‌شده تبدیل شود.",
    "slides": "PDF اسلایدها",
    "transcript": "رونویسی",
    "flowEyebrow": "جریان اصلی",
    "flowTitle": "علم wet lab چگونه کار می‌کند؟",
    "flowIntro": "رونویسی تأکید می‌کند که این یک خط ساده نیست: هر آزمایش با پرسش متمرکز آغاز می‌شود، داده/آمار تولید می‌کند و معمولاً پرسش تازه‌ای می‌سازد.",
    "activeStep": "گام فعال",
    "flow": [
      {
        "title": "۱. پرسش زیستی",
        "body": "پرسش باید focused باشد: نه فقط «مطالعهٔ سرطان»، بلکه نوع سرطان، مدل، درمان، دوز، زمان، بافت یا جمعیت."
      },
      {
        "title": "۲. مدل + طراحی",
        "body": "مدل می‌تواند in vitro، in vivo، ex vivo، حیوانی یا انسانی باشد. طراحی می‌تواند case-control، طولی، cross-sectional یا time-series باشد."
      },
      {
        "title": "۳. تکنیک",
        "body": "تکنیک بعد از پرسش انتخاب می‌شود: DNA-seq، پروفایل RNA، آرایهٔ متیلاسیون، سنجش پروتئین/متابولیت، میکروبیوم و غیره."
      },
      {
        "title": "۴. داده + آمار",
        "body": "اندازه‌گیری اعداد، داده و تغییرپذیری تولید می‌کند. سپس باید دید نتیجه قابل تفسیر و از نظر آماری قابل دفاع است یا نه."
      },
      {
        "title": "۵. پرسش تازه",
        "body": "نتیجه‌ها معمولاً پایان فرایند نیستند؛ اغلب پرسش زیستی دقیق‌تری ایجاد می‌کنند."
      }
    ],
    "builderEyebrow": "سازندهٔ تعاملی",
    "builderTitle": "یک پرسش زیستی متمرکز بسازید",
    "builderPill": "پرسش → آزمایش",
    "model": "مدل",
    "independent": "متغیر مستقل",
    "dependent": "متغیر وابسته",
    "technique": "تکنیک",
    "focusedQuestion": "پرسش متمرکز",
    "sentence": "در {model}، آیا {independent} باعث تغییر {dependent} می‌شود که با {technique} سنجیده شده است؟",
    "models": [
      "کوهورت انسانی",
      "مدل سلولی in vitro",
      "مدل حیوانی",
      "نمونهٔ خون ex vivo"
    ],
    "independentOptions": [
      "سن",
      "محرک التهابی",
      "دوز دارو",
      "جنس/جندر",
      "زمان پس از درمان"
    ],
    "dependentOptions": [
      "پروفایل متیلاسیون DNA",
      "بیان mRNA",
      "پروفایل microRNA",
      "سطح پروتئین",
      "پروفایل متابولیت"
    ],
    "techniqueOptions": [
      "Illumina EPIC / 450K methylation array",
      "RNA-seq",
      "microarray",
      "qPCR",
      "ELISA"
    ],
    "designEyebrow": "چک‌لیست طراحی",
    "designTitle": "اسلایدها از شما چه چیزهایی می‌خواهند تعریف کنید",
    "designCards": [
      [
        "مدل",
        "انسان · حیوان · in vitro · in vivo · ex vivo"
      ],
      [
        "متغیرها",
        "نوع سلول/بافت · جنس/جندر · محرک · دوز · ریزمحیط · زمان/سن"
      ],
      [
        "اندازهٔ نمونه",
        "کافی برای یافتن تفاوت معنی‌دار، نه فقط تولید داده"
      ],
      [
        "تکنیک",
        "ad hoc: باید به پرسش پاسخ دهد و تغییرپذیری فنی قابل قبول داشته باشد"
      ]
    ],
    "omicsEyebrow": "نقشهٔ اومیکس",
    "omicsTitle": "لایه‌ای را انتخاب کنید که به پرسش پاسخ می‌دهد",
    "omicsIntro": "درس مفهوم omics era را معرفی می‌کند تا از خطای رایج جلوگیری شود: انتخاب تکنیک پیشرفته قبل از دانستن لایهٔ زیستی مورد نیاز.",
    "omics": [
      [
        "Genomics",
        "توالی، جهش‌ها، ناهنجاری‌ها",
        "DNA-seq · arrays · Hi-C"
      ],
      [
        "Transcriptomics",
        "mRNA و پروفایل‌های RNA",
        "microarrays · RNA-seq"
      ],
      [
        "Epigenomics",
        "متیلاسیون DNA، کروماتین",
        "methylation arrays · ChIP-seq · Nanopore"
      ],
      [
        "Metagenomics",
        "ژن‌های میکروبیوم",
        "DNA-seq"
      ],
      [
        "Proteomics / metabolomics",
        "پروتئین‌ها و متابولیت‌ها",
        "protein arrays · LC-MS · GC-MS · NMR"
      ],
      [
        "Single-cell / spatial",
        "اومیکس در سطح سلول و موقعیت بافت",
        "scRNA-seq · CITE-seq · GeoMx DSP"
      ]
    ],
    "classEyebrow": "Checkpoint",
    "classTitle": "منابع تغییرپذیری را طبقه‌بندی کنید",
    "classIntro": "مشخص کنید هر منبع بیشتر زیستی است یا آزمایشی. قانون کلیدی: تغییرپذیری فنی باید آن‌قدر کم باشد که سیگنال زیستی را پنهان نکند.",
    "bioBtn": "زیستی",
    "techBtn": "آزمایشی",
    "varItems": [
      {
        "id": "sex",
        "label": "اثر جنس/جندر",
        "type": "bio",
        "why": "تفاوت زیستی که می‌توان برای کاهش ناهمگنی stratify کرد."
      },
      {
        "id": "operator",
        "label": "پیپت‌کردن توسط اپراتور",
        "type": "technical",
        "why": "از کار آزمایشگاهی می‌آید و باید کم و پایدار باشد."
      },
      {
        "id": "age",
        "label": "سن تقویمی",
        "type": "bio",
        "why": "سن پروفایل DNA/RNA را تغییر می‌دهد و ناهمگنی را افزایش می‌دهد."
      },
      {
        "id": "scanner",
        "label": "نویز اسکنر/دستگاه",
        "type": "technical",
        "why": "رونویسی تأکید می‌کند پژوهشگر باید تغییرپذیری خود دستگاه را بشناسد."
      },
      {
        "id": "exposome",
        "label": "اکسپوزوم: استرس، رژیم، سیگار",
        "type": "bio",
        "why": "محیط و سبک زندگی با ژنتیک و اپی‌ژنتیک تعامل دارند."
      },
      {
        "id": "reagents",
        "label": "لات‌های مختلف مواد مصرفی",
        "type": "technical",
        "why": "کیت‌ها و مواد می‌توانند تغییرپذیری آزمایشی وارد کنند."
      }
    ],
    "cvEyebrow": "ماشین‌حساب کوچک",
    "cvTitle": "ضریب تغییرات",
    "cvIntro": "در رونویسی، تکرارهای فنی qPCR حدود ۸.۵٪ CV دارند، در حالی که اهداکنندگان مختلف می‌توانند حدود ۵۱–۵۲٪ باشند. تفاوت مفهومی از عدد دقیق مهم‌تر است.",
    "cvFormula": "CV = SD / میانگین × 100",
    "interpretation": "تفسیر:",
    "low": "تغییرپذیری فنی پایین",
    "moderate": "تغییرپذیری متوسط",
    "high": "تغییرپذیری بالا؛ طراحی یا زیست‌شناسی ممکن است غالب باشد",
    "repEyebrow": "تفسیر",
    "repTitle": "تکرارها همان اهداکنندگان نیستند",
    "repIntro": "این تمایز در رونویسی به‌صراحت آمده و برای اشتباه نگرفتن تغییرپذیری فنی با زیستی ضروری است.",
    "repCards": [
      [
        "تکرارهای فنی",
        "همان نمونهٔ زیستی، همان اپراتور، همان مواد. تفاوت مورد انتظار باید کوچک باشد، اما هرگز صفر نیست."
      ],
      [
        "اهداکنندگان متفاوت",
        "پروفایل‌های DNA/RNA متفاوت. CV اکنون تغییرپذیری زیستی به‌علاوهٔ تغییرپذیری فنی موجود در اندازه‌گیری را شامل می‌شود."
      ],
      [
        "پاسخ طراحی",
        "اگر تغییرپذیری زیستی بسیار زیاد است، stratification، نمونهٔ بزرگ‌تر، طراحی طولی یا پرسش دقیق‌تر به کار ببرید."
      ]
    ],
    "quizEyebrow": "آزمونک سریع",
    "quizTitle": "منطق درس را بسنجید",
    "showAnswer": "نمایش پاسخ",
    "correct": "درست",
    "wrong": "دوباره تلاش کنید",
    "quiz": [
      {
        "question": "قبل از انتخاب تکنیک چه چیزی باید تعریف شود؟",
        "options": [
          "پرسش زیستی و مدل",
          "p-value نهایی",
          "رنگ نمودار",
          "نام فایل"
        ],
        "answer": 0,
        "explanation": "تکنیک ad hoc و پس از مشخص شدن فرایند، مدل و متغیر مورد اندازه‌گیری انتخاب می‌شود."
      },
      {
        "question": "کدام جمله با منطق درس دربارهٔ تغییرپذیری سازگار است؟",
        "options": [
          "تغییرپذیری فنی باید از زیستی بیشتر باشد",
          "تغییرپذیری فنی باید کم و شناخته‌شده باشد",
          "تغییرپذیری زیستی همیشه باید حذف شود",
          "تکرارها و اهداکنندگان یک معنی دارند"
        ],
        "answer": 1,
        "explanation": "تغییرپذیری فنی همیشه وجود دارد، اما باید کم و شناخته‌شده باشد تا سیگنال زیستی را نپوشاند."
      },
      {
        "question": "در مثال qPCR، تکرارهای یکسان از همان نمونه عمدتاً چه چیزی را برآورد می‌کنند؟",
        "options": [
          "تغییرپذیری زیستی",
          "تغییرپذیری آزمایشی",
          "تفاوت‌های جنس",
          "اثر میکروبیوم"
        ],
        "answer": 1,
        "explanation": "همان نمونه، همان اپراتور، همان مواد: تفاوت‌های باقی‌مانده تغییرپذیری فنی/آزمایشی هستند."
      },
      {
        "question": "چرا میکروبیوم به عنوان متغیر طراحی ذکر می‌شود؟",
        "options": [
          "همیشه آرتیفکت فنی است",
          "به‌ویژه در پرسش‌های مربوط به روده مهم است",
          "جایگزین سنجش RNA می‌شود",
          "فقط در گیاهان مهم است"
        ],
        "answer": 1,
        "explanation": "رونویسی تأکید می‌کند در پاتولوژی‌های روده نمی‌توان میکروبیوم را نادیده گرفت، چون زمینهٔ زیستی را تغییر می‌دهد."
      }
    ],
    "examEyebrow": "تمرین امتحان نوشتاری",
    "examTitle": "اسکلت پاسخ ۱۰–۱۲ خطی",
    "examQuestion": "توضیح دهید چرا زمینهٔ زیستی و تغییرپذیری در طراحی آزمایش DNA/RNA dynamics ضروری هستند.",
    "copySkeleton": "از این اسکلت استفاده کنید",
    "skeleton": [
      "از یک پرسش زیستی متمرکز شروع کنید، نه یک موضوع کلی.",
      "مدل را تعریف کنید: انسان، حیوان، in vitro، in vivo یا ex vivo.",
      "متغیرهای مستقل/وابسته را تعریف کنید: محرک، سن، بافت، زمان، دوز و غیره.",
      "تکنیک را پس از پرسش انتخاب کنید: RNA، متیلاسیون DNA، پروتئین، میکروبیوم…",
      "تغییرپذیری زیستی را از تغییرپذیری فنی جدا کنید.",
      "توضیح دهید تغییرپذیری فنی باید کم و شناخته‌شده باشد.",
      "پیش از نتیجه‌گیری از sample size، تکرارها، QC و آمار استفاده کنید."
    ],
    "implEyebrow": "یادداشت‌های پیاده‌سازی",
    "implTitle": "این صفحه چگونه در راهنما جا می‌گیرد",
    "implIntro": "این خوانش پایهٔ صفحات بعدی است: Stanford، Affymetrix، Illumina، پایپ‌لاین‌های Module 2 و differential expression.",
    "implCards": [
      [
        "درس React",
        "درس تعاملی با سازنده، طبقه‌بند، ماشین‌حساب CV، آزمونک و تمرین امتحان."
      ],
      [
        "آزمونک",
        "پرسش‌های مفهومی کوتاه، آماده برای گسترش با بازخورد برای هر گزینه."
      ],
      [
        "Mock exam",
        "بلوک پایانی ساختار ۱۰–۱۲ خطی مورد انتظار Capri را تمرین می‌دهد."
      ],
      [
        "درس بعدی",
        "صفحهٔ بعدی باید همین منطق را روی Stanford two-colour arrays اعمال کند: تکنیک، سوگیری‌ها، QC و تغییرپذیری."
      ]
    ]
  }
};

function getCopy(lang) { return LESSON_COPY[lang] || LESSON_COPY.es; }

const RESOURCE_COPY = {
  en: { resources: "Class resources", recording: "Recording", recordingPending: "Recording link pending" },
  es: { resources: "Recursos de clase", recording: "Grabación", recordingPending: "Link de grabación pendiente" },
  fa: { resources: "منابع کلاس", recording: "ضبط", recordingPending: "لینک ضبط هنوز اضافه نشده" }
};

function ResourceLinks({ copy, lang = "es" }) {
  const labels = RESOURCE_COPY[lang] || RESOURCE_COPY.es;
  const links = [
    { label: copy.slides, href: SLIDES_URL, tone: "accent" },
    { label: copy.transcript, href: TRANSCRIPT_URL },
    { label: CLASS_RECORDING_URL && CLASS_RECORDING_URL !== "#" ? labels.recording : labels.recordingPending, href: CLASS_RECORDING_URL, tone: "dark" }
  ];
  return <M1ResourceLinks ui={labels} links={links} />;
}

function fmt(template, values) { return Object.entries(values).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, v), template); }
function ProgressDots({ active }) { return <div className="flex gap-1.5">{[0,1,2,3,4].map(i => <span key={i} className={`h-2.5 w-2.5 rounded-full ${i <= active ? "bg-red-700" : "bg-stone-200"}`} />)}</div>; }
function SelectBox({ label, value, setValue, options }) { return <label className="block rounded-2xl border border-stone-200 bg-stone-50 p-4"><span className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{label}</span><select value={value} onChange={e => setValue(e.target.value)} className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm font-bold text-stone-800 outline-none focus:border-red-300 focus:ring-4 focus:ring-red-100">{options.map(option => <option key={option}>{option}</option>)}</select></label>; }
function BiologicalQuestionBuilder({ copy }) {
  const [model, setModel] = useState(copy.models[0]); const [independent, setIndependent] = useState(copy.independentOptions[0]); const [dependent, setDependent] = useState(copy.dependentOptions[0]); const [technique, setTechnique] = useState(copy.techniqueOptions[0]);
  const sentence = fmt(copy.sentence, { model, independent, dependent, technique });
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.builderEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.builderTitle}</h3></div><Pill tone="red">{copy.builderPill}</Pill></div><div className="mt-5 grid gap-3 md:grid-cols-2"><SelectBox label={copy.model} value={model} setValue={setModel} options={copy.models}/><SelectBox label={copy.independent} value={independent} setValue={setIndependent} options={copy.independentOptions}/><SelectBox label={copy.dependent} value={dependent} setValue={setDependent} options={copy.dependentOptions}/><SelectBox label={copy.technique} value={technique} setValue={setTechnique} options={copy.techniqueOptions}/></div><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-200">{copy.focusedQuestion}</div><p className="mt-2 text-xl font-black leading-8">{sentence}</p></div></article>;
}
function VariabilityClassifier({ copy }) {
  const [answers, setAnswers] = useState({});
  const score = useMemo(() => copy.varItems.filter(item => answers[item.id] === item.type).length, [answers, copy.varItems]);
  const optionClass = (selected, option) => {
    const isSelected = selected === option;
    if (!selected) return "border-stone-200 bg-white text-stone-700 hover:border-red-200 hover:bg-red-50";
    if (isSelected && selected === option) {
      return selected === "bio"
        ? "border-emerald-300 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-100"
        : "border-sky-300 bg-sky-50 text-sky-900 ring-2 ring-sky-100";
    }
    return "border-stone-200 bg-white/70 text-stone-400";
  };
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.classEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.classTitle}</h3></div><Pill tone={score === copy.varItems.length ? "emerald" : "amber"}>{score}/{copy.varItems.length}</Pill></div>
    <p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{copy.classIntro}</p>
    <div className="mt-5 grid gap-3">{copy.varItems.map(item => {
      const selected = answers[item.id];
      const correct = selected && selected === item.type;
      const wrong = selected && selected !== item.type;
      return <div key={item.id} className={`rounded-2xl border p-4 ${correct ? "border-emerald-200 bg-emerald-50" : wrong ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div><div className="text-sm font-black text-stone-950">{item.label}</div>{selected && <div className="mt-1 text-xs font-bold leading-5 text-stone-600">{item.why}</div>}</div>
          <div className="flex gap-2">
            <button onClick={() => setAnswers({ ...answers, [item.id]: "bio" })} className={`rounded-full border px-3 py-1.5 text-xs font-black transition ${optionClass(selected, "bio")}`}>{selected === "bio" ? "✓ " : ""}{copy.bioBtn}</button>
            <button onClick={() => setAnswers({ ...answers, [item.id]: "technical" })} className={`rounded-full border px-3 py-1.5 text-xs font-black transition ${optionClass(selected, "technical")}`}>{selected === "technical" ? "✓ " : ""}{copy.techBtn}</button>
          </div>
        </div>
      </div>;
    })}</div>
  </article>;
}
function CVExercise({ copy }) {
  const [values, setValues] = useState("260, 282, 310, 279, 284"); const parsed = useMemo(() => values.split(/[\s,;]+/).map(v => Number(v)).filter(Number.isFinite), [values]);
  const stats = useMemo(() => { if (parsed.length < 2) return null; const mean = parsed.reduce((a,b)=>a+b,0)/parsed.length; const sd = Math.sqrt(parsed.reduce((s,x)=>s + Math.pow(x-mean,2),0)/(parsed.length-1)); return { mean, sd, cv: sd/mean*100 }; }, [parsed]);
  const interp = stats?.cv <= 10 ? copy.low : stats?.cv <= 25 ? copy.moderate : copy.high;
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.cvEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.cvTitle}</h3></div><Pill tone="dark">{copy.cvFormula}</Pill></div><p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{copy.cvIntro}</p><textarea value={values} onChange={e => setValues(e.target.value)} rows={2} className="mt-4 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-bold text-stone-800 outline-none focus:border-red-300 focus:ring-4 focus:ring-red-100"/><div className="mt-4 grid gap-3 md:grid-cols-4"><StatCard label="n" value={parsed.length || "—"}/><StatCard label="mean" value={stats ? stats.mean.toFixed(2) : "—"}/><StatCard label="SD" value={stats ? stats.sd.toFixed(2) : "—"}/><StatCard label="CV" value={stats ? `${stats.cv.toFixed(2)}%` : "—"} tone="red"/></div>{stats && <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-black text-amber-900">{copy.interpretation} {interp}</div>}</article>;
}
function QuizBlock({ copy }) { const [selected, setSelected] = useState({}); return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.quizEyebrow} title={copy.quizTitle} /> <div className="grid gap-4">{copy.quiz.map((q, qi) => <article key={q.question} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><h3 className="text-lg font-black text-stone-950">{qi + 1}. {q.question}</h3><div className="mt-4 grid gap-2 md:grid-cols-2">{q.options.map((opt, oi) => { const picked = selected[qi] === oi; const correct = q.answer === oi; const answered = selected[qi] !== undefined; return <button key={opt} onClick={() => setSelected({...selected, [qi]: oi})} className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${picked && correct ? "border-emerald-300 bg-emerald-50 text-emerald-900" : picked ? "border-red-300 bg-red-50 text-red-900" : answered && correct ? "border-emerald-200 bg-white text-emerald-900" : "border-stone-200 bg-white text-stone-700 hover:border-red-200"}`}>{opt}</button>; })}</div>{selected[qi] !== undefined && <p className="mt-3 rounded-2xl bg-white p-3 text-sm font-bold leading-6 text-stone-700">{selected[qi] === q.answer ? copy.correct : copy.wrong} · {q.explanation}</p>}</article>)}</div></section>; }
const EXAM_TRAINER_COPY = {
  en: {
    write: "Write your answer here",
    placeholder: "Draft 10–12 lines: define the biological question, model, variables, technique, variability and why QC/statistics are needed...",
    modelTitle: "Example of a correct answer",
    modelAnswer: "In DNA/RNA dynamics, the biological context is essential because it determines which variables should be measured and which technique is appropriate. A good experiment starts from a focused biological question, not from a broad topic. The model must be defined, for example human samples, animal models, in vitro cells, in vivo systems or ex vivo samples. The design must also specify independent and dependent variables, such as stimulus, age, sex, tissue, dose and time. Once the question is clear, the technique can be chosen, such as RNA profiling, DNA methylation arrays, qPCR or other omics approaches. Variability is central because biological variability reflects real differences among individuals, cells or conditions, while experimental variability comes from operators, reagents, instruments and data-processing steps. Technical variability should be low and known, otherwise it can hide the biological signal. Therefore sample size, replicates, quality control and statistical analysis are required before interpreting results. Only then can the data support a reliable biological conclusion."
  },
  es: {
    write: "Escribe tu respuesta aquí",
    placeholder: "Redacta 10–12 líneas: define la pregunta biológica, modelo, variables, técnica, variabilidad y por qué hacen falta QC/estadística...",
    modelTitle: "Ejemplo de respuesta correcta",
    modelAnswer: "En DNA/RNA dynamics, el contexto biológico es esencial porque determina qué variables deben medirse y qué técnica es apropiada. Un buen experimento parte de una pregunta biológica enfocada, no de un tema amplio. El modelo debe definirse, por ejemplo muestras humanas, modelos animales, células in vitro, sistemas in vivo o muestras ex vivo. El diseño también debe especificar variables independientes y dependientes, como estímulo, edad, sexo, tejido, dosis y tiempo. Cuando la pregunta está clara, se elige la técnica, por ejemplo RNA profiling, arrays de metilación de DNA, qPCR u otros enfoques ómicos. La variabilidad es central porque la variabilidad biológica refleja diferencias reales entre individuos, células o condiciones, mientras que la variabilidad experimental procede del operador, reactivos, instrumentos y procesamiento de datos. La variabilidad técnica debe ser baja y conocida; si no, puede ocultar la señal biológica. Por eso hacen falta sample size, replicados, quality control y análisis estadístico antes de interpretar resultados. Solo así los datos pueden sostener una conclusión biológica fiable."
  },
  fa: {
    write: "پاسخ خود را اینجا بنویسید",
    placeholder: "در ۱۰–۱۲ خط بنویسید: پرسش زیستی، مدل، متغیرها، تکنیک، تغییرپذیری و دلیل نیاز به QC/آمار...",
    modelTitle: "نمونهٔ پاسخ درست",
    modelAnswer: "در DNA/RNA dynamics، زمینهٔ زیستی ضروری است چون تعیین می‌کند چه متغیرهایی باید اندازه‌گیری شوند و کدام تکنیک مناسب است. یک آزمایش خوب از یک پرسش زیستی متمرکز شروع می‌شود، نه از یک موضوع بسیار کلی. مدل باید مشخص شود، مانند نمونه‌های انسانی، مدل حیوانی، سلول‌های in vitro، سیستم‌های in vivo یا نمونه‌های ex vivo. طراحی همچنین باید متغیر مستقل و وابسته را مشخص کند، مانند محرک، سن، جنس، بافت، دوز و زمان. وقتی پرسش روشن شد، تکنیک انتخاب می‌شود؛ برای مثال RNA profiling، آرایه‌های متیلاسیون DNA، qPCR یا روش‌های دیگر omics. تغییرپذیری مهم است چون تغییرپذیری زیستی تفاوت‌های واقعی میان افراد، سلول‌ها یا شرایط را نشان می‌دهد، اما تغییرپذیری آزمایشی از اپراتور، مواد، دستگاه و پردازش داده ایجاد می‌شود. تغییرپذیری فنی باید کم و شناخته‌شده باشد، وگرنه می‌تواند سیگنال زیستی را پنهان کند. بنابراین اندازهٔ نمونه، تکرارها، کنترل کیفیت و تحلیل آماری پیش از تفسیر نتایج لازم هستند. تنها در این صورت داده‌ها می‌توانند از یک نتیجهٔ زیستی قابل اعتماد پشتیبانی کنند."
  }
};

function ExamTrainer({ copy, lang = "es" }) {
  const [draft, setDraft] = useState("");
  const local = EXAM_TRAINER_COPY[lang] || EXAM_TRAINER_COPY.es;
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
    <SectionHeader eyebrow={copy.examEyebrow} title={copy.examTitle}>{copy.examQuestion}</SectionHeader>
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <article className="rounded-3xl border border-red-200 bg-red-50 p-5"><h3 className="text-xl font-black text-red-950">{copy.copySkeleton}</h3><ol className="mt-4 space-y-2 text-sm font-bold leading-6 text-red-900">{copy.skeleton.map(item => <li key={item} className="flex gap-2"><span>•</span><span>{item}</span></li>)}</ol></article>
      <article className="rounded-3xl border border-stone-200 bg-white p-5">
        <label className="text-xl font-black text-stone-950" htmlFor="drd-written-answer">{local.write}</label>
        <textarea id="drd-written-answer" value={draft} onChange={e => setDraft(e.target.value)} rows={10} placeholder={local.placeholder} className="mt-4 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-semibold leading-7 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-red-300 focus:ring-4 focus:ring-red-100" />
        <div className="mt-2 text-xs font-bold text-stone-500">{draft.trim().split(/\s+/).filter(Boolean).length} words</div>
      </article>
    </div>
    <article className="mt-4 rounded-3xl border border-stone-800 bg-stone-950 p-5 text-white">
      <h3 className="text-xl font-black">{local.modelTitle}</h3>
      <p className="mt-3 text-sm font-semibold leading-7 text-stone-200">{local.modelAnswer}</p>
    </article>
  </section>;
}

function SlideVisualNotes({ lang = "es" }) {
  const local = LESSON1_SLIDE_COPY[lang] || LESSON1_SLIDE_COPY.es;
  const total = LESSON1_SLIDES.length;
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><SectionHeader eyebrow={local.eyebrow} title={local.title}>{local.intro}</SectionHeader><a href={SLIDES_URL} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-black text-red-800 transition hover:-translate-y-0.5 hover:bg-white">{local.open}</a></div><div className="grid gap-4 lg:grid-cols-2">{LESSON1_SLIDES.map((figure, idx) => { const item = local.figures[idx]; const fullRow = total % 2 === 1 && idx === total - 1; return <article key={figure.slide} className={`overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm ${fullRow ? "lg:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr]" : ""}`}><div className={`aspect-[4/3] border-b border-stone-200 bg-white p-3 ${fullRow ? "lg:aspect-auto lg:border-b-0 lg:border-r" : ""}`}><ZoomableFigure src={figure.src} alt={item.title} lang={lang} className="h-full w-full rounded-2xl object-contain" /></div><div className="p-5"><Pill tone="red">Slide {figure.slide}</Pill><h3 className="mt-3 text-xl font-black text-stone-950">{item.title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.body}</p></div></article>; })}</div></section>;
}

function Lesson1VisualBlock({ lang = "es", block }) {
  const local = LESSON1_VISUAL_COPY[lang] || LESSON1_VISUAL_COPY.es;
  const data = local.blocks[block];
  if (!data) return null;
  const isSingle = data.items.length === 1;
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><SectionHeader eyebrow={data.eyebrow} title={data.title}>{data.intro}</SectionHeader><a href={SLIDES_URL} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-black text-red-800 transition hover:-translate-y-0.5 hover:bg-white">{local.labels.open}</a></div>
    <div className={`grid gap-4 ${isSingle ? "lg:grid-cols-1" : "lg:grid-cols-2"}`}>{data.items.map((item, idx) => { const figure = LESSON1_IMAGE_BANK[item.image]; const fullRow = isSingle || (data.items.length % 2 === 1 && idx === data.items.length - 1); return <article key={`${block}-${item.image}-${idx}`} className={`overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm ${fullRow ? "lg:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr]" : ""}`}><div className={`border-b border-stone-200 bg-white p-3 ${fullRow ? "lg:border-b-0 lg:border-r" : ""}`}><ZoomableFigure src={figure.src} alt={item.title} lang={lang} className="h-full max-h-[420px] w-full rounded-2xl object-contain" /></div><div className="p-5"><Pill tone="red">{local.labels.slide} {figure.slide}</Pill><h3 className="mt-3 text-xl font-black text-stone-950">{item.title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.body}</p><div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="text-xs font-black uppercase tracking-[0.16em] text-amber-800">{local.labels.professor}</div><p className="mt-1 text-sm font-bold leading-6 text-amber-950">{item.professor}</p></div><ExamWatchCard item={item} lang={lang} label={local.labels.exam} /></div></article>; })}</div>
  </section>;
}

const LESSON_NAV_COPY = {
  en: { dashboard: "DRD dashboard", previous: "Previous", next: "Next", current: "Lesson 1", nextTitle: "M1.2 Stanford two-colour arrays" },
  es: { dashboard: "Dashboard DRD", previous: "Anterior", next: "Siguiente", current: "Lección 1", nextTitle: "M1.2 Stanford two-colour arrays" },
  fa: { dashboard: "داشبورد DRD", previous: "قبلی", next: "بعدی", current: "درس ۱", nextTitle: "M1.2 آرایه‌های دو رنگ Stanford" }
};

function LessonNav({ lang = "es", position = "top", isDone = false, toggle = () => {}, copy }) {
  const nav = LESSON_NAV_COPY[lang] || LESSON_NAV_COPY.es;
  const labels = copy || getCopy(lang);
  return <M1LessonNav lessonId="m1-foundations" labels={{ ...nav, done: labels.done, mark: labels.mark }} isDone={isDone} toggle={toggle} position={position} previousHref="#/" previousTitle={nav.dashboard} nextHref="#/lesson/m1-stanford" showDashboardInCurrent={false} />;
}

export default function DRDLesson01({ lang = "es", isDone = false, toggle = () => {} }) {
  const copy = getCopy(lang); const [activeFlow, setActiveFlow] = useState(0);
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><LessonNav lang={lang} position="top" isDone={isDone} toggle={toggle} copy={copy}/>
    <M1LessonHero lessonId="m1-foundations" title={copy.title} subtitle={copy.subtitle} tags={copy.tags} tagTone={(tag) => tag.includes("CV") ? "red" : "stone"} statLabels={{ module: copy.module, exam: copy.exam, answer: copy.answer, core: copy.core, eyebrow: copy.eyebrow }} coreValue="CV" bigIdeaLabel={copy.bigIdea} bigIdeaText={copy.bigIdeaText} resourcePanel={<ResourceLinks copy={copy} lang={lang}/>} />
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.flowEyebrow} title={copy.flowTitle}>{copy.flowIntro}</SectionHeader><div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]"><div className="space-y-2">{copy.flow.map((step, idx) => <button key={step.title} onClick={() => setActiveFlow(idx)} className={`w-full rounded-2xl border p-4 text-left transition ${activeFlow === idx ? "border-red-200 bg-red-50 shadow-sm" : "border-stone-200 bg-stone-50 hover:bg-white"}`}><div className="flex items-center justify-between gap-3"><span className="text-sm font-black text-stone-950">{step.title}</span><ProgressDots active={idx} /></div></button>)}</div><article className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-200">{copy.activeStep}</div><h3 className="mt-3 text-3xl font-black tracking-tight">{copy.flow[activeFlow].title}</h3><p className="mt-4 text-lg font-semibold leading-8 text-stone-200">{copy.flow[activeFlow].body}</p></article></div></section>
    <Lesson1VisualBlock lang={lang} block="questionFlow"/>
    <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.95fr]"><BiologicalQuestionBuilder copy={copy}/><article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.designEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.designTitle}</h3><div className="mt-5 grid gap-3">{copy.designCards.map(([title, body]) => <div key={title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><div className="text-sm font-black text-stone-950">{title}</div><div className="mt-1 text-sm font-semibold leading-6 text-stone-600">{body}</div></div>)}</div></article></section>
    <Lesson1VisualBlock lang={lang} block="design"/>
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.omicsEyebrow} title={copy.omicsTitle}>{copy.omicsIntro}</SectionHeader><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{copy.omics.map(([name, what, tools]) => <article key={name} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><h3 className="text-xl font-black text-stone-950">{name}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{what}</p><div className="mt-4 rounded-2xl bg-white p-3 text-xs font-black text-red-700 shadow-sm">{tools}</div></article>)}</div></section>
    <Lesson1VisualBlock lang={lang} block="omics"/>
    <Lesson1VisualBlock lang={lang} block="molecularContext"/>
    <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1fr]"><VariabilityClassifier copy={copy}/><CVExercise copy={copy}/></section>
    <Lesson1VisualBlock lang={lang} block="variability"/>
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.repEyebrow} title={copy.repTitle}>{copy.repIntro}</SectionHeader><div className="grid gap-4 lg:grid-cols-3">{copy.repCards.map(([title, body], i) => <article key={title} className={`rounded-3xl border p-5 ${i === 0 ? "border-emerald-200 bg-emerald-50" : i === 1 ? "border-red-200 bg-red-50" : "border-amber-200 bg-amber-50"}`}><h3 className="text-xl font-black text-stone-950">{title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{body}</p></article>)}</div></section>
    <Lesson1VisualBlock lang={lang} block="plots"/>
    <QuizBlock copy={copy}/><ExamTrainer copy={copy} lang={lang}/><LessonNav lang={lang} position="bottom" isDone={isDone} toggle={toggle} copy={copy}/>
  </main>;
}
