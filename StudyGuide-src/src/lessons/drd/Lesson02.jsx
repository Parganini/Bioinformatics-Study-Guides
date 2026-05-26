import React, { useMemo, useState } from "react";
import targetsProbesSlide from "../../assets/drd/lesson02/targets-probes.jpg";
import threeArrayTypesSlide from "../../assets/drd/lesson02/three-array-types.jpg";
import spottingSlide from "../../assets/drd/lesson02/spotting-slide.jpg";
import oldArrayerSlide from "../../assets/drd/lesson02/old-arrayer.jpg";
import pinHeadSlide from "../../assets/drd/lesson02/pin-head.jpg";
import subarrayControlsSlide from "../../assets/drd/lesson02/subarray-controls.jpg";
import workflowSlide from "../../assets/drd/lesson02/competitive-workflow.jpg";
import cyanineDyesSlide from "../../assets/drd/lesson02/cyanine-dyes.jpg";
import indirectLabelingSlide from "../../assets/drd/lesson02/indirect-labeling.jpg";
import mergedScanSlide from "../../assets/drd/lesson02/merged-scan.jpg";
import falseColoursSlide from "../../assets/drd/lesson02/false-colours.jpg";
import spotQcSlide from "../../assets/drd/lesson02/spot-qc.jpg";
import technicalVariabilityMapSlide from "../../assets/drd/lesson02/technical-variability-map.jpg";
import dyeSwapSlide from "../../assets/drd/lesson02/dye-swap.jpg";
import atlasArraySlide from "../../assets/drd/lesson02/atlas-array.jpg";
import aspecificFluorescenceSlide from "../../assets/drd/lesson02/aspecific-fluorescence.jpg";
import imageneOutputSlide from "../../assets/drd/lesson02/imagene-output.jpg";
import toxoplasmaQuestionSlide from "../../assets/drd/lesson02/toxoplasma-question.jpg";
import dotPlotSlide from "../../assets/drd/lesson02/dot-plot.jpg";
import qcFilteringSlide from "../../assets/drd/lesson02/qc-filtering.jpg";
import logTransformSlide from "../../assets/drd/lesson02/log-transform.jpg";
import logNormalSlide from "../../assets/drd/lesson02/log-normal.jpg";
import linearRegressionBiasSlide from "../../assets/drd/lesson02/linear-regression-bias.jpg";
import maPlotFormulaSlide from "../../assets/drd/lesson02/ma-plot-formula.jpg";
import maExpectedRatiosSlide from "../../assets/drd/lesson02/ma-expected-ratios.jpg";
import maScalingSlide from "../../assets/drd/lesson02/ma-scaling.jpg";
import referenceSampleSlide from "../../assets/drd/lesson02/reference-sample.jpg";
import scalingBoxplotsSlide from "../../assets/drd/lesson02/scaling-boxplots.jpg";

const SLIDES_URL = "https://drive.google.com/file/d/1dZoiMM4jpg6J_1Ty_Pwd-kiInbBZS2nX/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1JLwo7lsvMAB2sCSC2wfyHYyh9wQWUoDoO9QYqnfvLoM/edit?usp=drivesdk";
const CLASS_RECORDING_URL = "https://www.youtube.com/watch?v=UqIn_t1T_RU&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=2";

const LESSON2_IMAGE_BANK = {
  targetsProbes: { src: targetsProbesSlide, slide: 2 },
  threeArrayTypes: { src: threeArrayTypesSlide, slide: 4 },
  spotting: { src: spottingSlide, slide: 7 },
  oldArrayer: { src: oldArrayerSlide, slide: 8 },
  pinHead: { src: pinHeadSlide, slide: 9 },
  subarrayControls: { src: subarrayControlsSlide, slide: 10 },
  workflow: { src: workflowSlide, slide: 11 },
  cyanineDyes: { src: cyanineDyesSlide, slide: 12 },
  indirectLabeling: { src: indirectLabelingSlide, slide: 13 },
  mergedScan: { src: mergedScanSlide, slide: 15 },
  falseColours: { src: falseColoursSlide, slide: 16 },
  spotQc: { src: spotQcSlide, slide: 17 },
  technicalVariabilityMap: { src: technicalVariabilityMapSlide, slide: 18 },
  dyeSwap: { src: dyeSwapSlide, slide: 19 },
  atlasArray: { src: atlasArraySlide, slide: 21 },
  aspecificFluorescence: { src: aspecificFluorescenceSlide, slide: 22 },
  imageneOutput: { src: imageneOutputSlide, slide: 24 },
  toxoplasmaQuestion: { src: toxoplasmaQuestionSlide, slide: 26 },
  dotPlot: { src: dotPlotSlide, slide: 27 },
  qcFiltering: { src: qcFilteringSlide, slide: 28 },
  logTransform: { src: logTransformSlide, slide: 29 },
  logNormal: { src: logNormalSlide, slide: 30 },
  linearRegressionBias: { src: linearRegressionBiasSlide, slide: 32 },
  maPlotFormula: { src: maPlotFormulaSlide, slide: 33 },
  maExpectedRatios: { src: maExpectedRatiosSlide, slide: 34 },
  maScaling: { src: maScalingSlide, slide: 38 },
  referenceSample: { src: referenceSampleSlide, slide: 40 },
  scalingBoxplots: { src: scalingBoxplotsSlide, slide: 42 }
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

const LESSON2_VISUAL_COPY = {
  en: {
    labels: { professor: "Professor emphasis", exam: "Exam watch", slide: "Slide", open: "Open slides PDF" },
    blocks: {
      arrayTypes: { eyebrow: "Microarray dictionary", title: "1 · Targets, probes and the three array families", intro: "The professor starts by building the vocabulary, so these images sit near the beginning rather than in a separate gallery.", items: [
        { image: "targetsProbes", title: "Target versus probe", body: "The target is the labelled biological molecule from the sample; the probe is fixed on the array support and captures a complementary sequence.", professor: "She pauses on terminology: targets vary with the biological question, and arrays can be DNA, RNA, miRNA, ChIP-chip, CGH or methylation-related.", exam: "Possible definition question: distinguish target, probe and array support." },
        { image: "threeArrayTypes", title: "Three platforms in this course", body: "Competitive/two-colour arrays, noncompetitive/one-colour arrays and Illumina BeadChip are the three technologies to compare across Module 1.", professor: "She says to pay attention to ‘competitive’: two samples on the same array, two colours and two lasers. Noncompetitive means one sample and one laser.", exam: "High-yield comparison: competitive vs noncompetitive vs BeadChip." }
      ] },
      fabrication: { eyebrow: "Fabrication and controls", title: "2 · Spotted arrays are physical objects with technical weak points", intro: "This visual block follows the platform overview because the professor explains that manufacturing itself creates part of the technical variability.", items: [
        { image: "spotting", title: "Glass slide and spotting", body: "Old competitive arrays used coated slides where cDNA/oligos were spotted onto precise positions.", professor: "She emphasizes that early systems resembled microscopy slides and that DNA had to bind to a chemically treated surface.", exam: "Mention spotting and fixed probes when listing characteristics of competitive arrays." },
        { image: "oldArrayer", title: "Old arrayer hardware", body: "Plate stacker, washer/vacuum, slides and pin head make the physical array; every step can introduce variation.", professor: "At the beginning, the pin touched the slide, creating many problems; later inkjet-like systems improved this.", exam: "Manufacturing issues explain why QC and filtering are needed." },
        { image: "pinHead", title: "Pin heads and cross-contamination", body: "Pins dip into wells and spot the slide; cleaning between dips is required to avoid cross-contamination.", professor: "She wants you to imagine the physical process: pin, wash, spot, repeat. This helps explain irregular spots.", exam: "Useful detail for a 10–12 line answer on technical variability." },
        { image: "subarrayControls", title: "Subarrays and controls", body: "Positive controls should fluoresce, negative controls should remain dark, and spike-ins can test intensity levels.", professor: "She later corrects a common confusion: positive/negative controls are QC spots; they are not the same as a reference sample.", exam: "Trap: reference sample ≠ positive/negative control spot." }
      ] },
      workflow: { eyebrow: "Competitive workflow", title: "3 · Two samples are processed separately, then compete", intro: "These slides belong next to the workflow component because they show exactly why this platform is called competitive.", items: [
        { image: "workflow", title: "Control and treated samples compete on the same probes", body: "Two mRNA samples are reverse-transcribed, labelled with different dyes, mixed and hybridized to the same array.", professor: "Her wording: if a transcript is more abundant in one sample, it ‘wins’ the hybridization competition for that spot.", exam: "Repeatable question: What does ‘competitive array’ mean?" },
        { image: "cyanineDyes", title: "Cy3 and Cy5 create the central bias", body: "Cy3 emits green and Cy5 emits red; their physical/chemical differences generate dye bias that must be corrected.", professor: "She stresses Cy5 is not identical to Cy3, and this is the origin of a systematic technical problem.", exam: "Must mention dye bias and normalization when describing two-colour arrays." },
        { image: "indirectLabeling", title: "Indirect labelling reduces colour bias", body: "Aminoallyl-dUTP allows cDNA synthesis first and dye coupling later, reducing problems caused by different dye size/behaviour.", professor: "She explains this as a protocol-level attempt to minimize the fluorochrome bias before computational correction.", exam: "Good supporting detail if asked how experimental variability is controlled." }
      ] },
      imageQc: { eyebrow: "Image output and QC", title: "4 · The image is the first dataset", intro: "These images appear before the colour and checkpoint exercises because the professor says the image and its processing determine the raw data table.", items: [
        { image: "mergedScan", title: "Separate Cy3/Cy5 scans and merged TIFF", body: "The array is scanned with two lasers; software merges the green and red channels into an interpretable image.", professor: "She says it is absolutely important to know the software and algorithm that turn the image into intensities.", exam: "Data output: TIFF/image → raw data table of spot intensities." },
        { image: "falseColours", title: "False colours are a code", body: "White means saturated, blue absent signal, red up-regulation, green down-regulation and yellow/orange similar signal.", professor: "She notes that one white spot is not catastrophic, but many white spots mean laser intensity/saturation problems.", exam: "Useful quick quiz: interpret red, green, yellow, white and blue spots." },
        { image: "spotQc", title: "Each spot is a distribution of pixels", body: "Spot-level QC checks background, irregular shapes, donuts, saturation, scratches and dust.", professor: "If background is higher than the signal, the spot is bad and cannot be used.", exam: "Possible question: why must spot-level QC precede normalization?" },
        { image: "technicalVariabilityMap", title: "Every step can add technical variability", body: "Separate tubes, dyes, lasers, hybridization, print-tip effects, background and image-processing algorithms all contribute.", professor: "This is why she returns to the first lecture’s variability concept: the technology itself produces experimental variability.", exam: "Link Lesson 2 back to Lesson 1: technical variability must be measured and reduced." }
      ] },
      dyeSwapOutput: { eyebrow: "Checking technical variability", title: "5 · Dye swap, failed areas and raw software tables", intro: "This block follows QC because it shows how the professor checks whether Cy3/Cy5 behaviour is distorting the result.", items: [
        { image: "dyeSwap", title: "Dye swap reverses the labels", body: "Use the same biological samples twice, reversing Cy3 and Cy5. If dyes behaved identically, combined ratios should be close to one.", professor: "She says you never obtain exactly one; you obtain a cloud. The acceptable variation discussed is around ±1.74 on the log scale.", exam: "Very likely: explain the purpose of dye swap." },
        { image: "atlasArray", title: "Visual inspection of the original array", body: "The ATLAS example shows controls, subarrays and different intensities in a real two-colour experiment.", professor: "She uses this to show that you must inspect arrays with your eyes before trusting the software output.", exam: "Visual QC is part of the answer, not an optional detail." },
        { image: "aspecificFluorescence", title: "A dye swap can fail", body: "Nonspecific fluorescence can cover spots; affected areas cannot be used for reliable measurement.", professor: "She explains that washing/background problems can make a whole area unusable and force filtering or repetition.", exam: "Good example of technical artifact that must not be interpreted biologically." },
        { image: "imageneOutput", title: "Software output: mean, median, SD, MAD and flags", body: "The final table includes spot location, signal/background mean and median, SD, MAD-like descriptors and quality flags.", professor: "Flag 0 means good; flag 1 means bad. If background exceeds the signal, the spot should not be used.", exam: "Mention that spot values are not single pixels; they summarize a pixel distribution." }
      ] },
      biologicalExample: { eyebrow: "Biological question in practice", title: "6 · Toxoplasma experiment: from question to first plots", intro: "The professor uses Toxoplasma infection to reconnect the technology to the design logic from Lesson 1.", items: [
        { image: "toxoplasmaQuestion", title: "A focused question, not a generic experiment", body: "Does Toxoplasma gondii infect human fibroblasts and modify gene transcription after one hour?", professor: "She emphasizes model, control, treated condition and timing. One hour is a design decision based on expected biological response.", exam: "Use this as a template for writing biological question + model + variable + technique." },
        { image: "dotPlot", title: "Raw dot plot: Cy3 versus Cy5", body: "Each dot is a spot/transcript, but raw intensities are bunched in the corner and spread at high intensity.", professor: "She says the raw cloud is not enough: you cannot really see the full distribution.", exam: "If asked why transform data, start from this problem." },
        { image: "qcFiltering", title: "QC before interpretation", body: "Saturated spots and outliers must be evaluated; outliers are filtered only if you are sure they are technical.", professor: "She explains that decreasing SD at very high intensity is a serious saturation signal, not a biological pattern.", exam: "Do not say ‘remove all outliers’; discuss whether they are technical or biological." }
      ] },
      transformMa: { eyebrow: "Transform and visualize", title: "7 · Log transformation and MA-plot open the data cloud", intro: "These images are inserted around the MA mini-lab because the professor explicitly marks MA-plot as a verification-test type question.", items: [
        { image: "logTransform", title: "Log2 transformation makes distributions visible", body: "Raw Cy3/Cy5 intensities are skewed; log2 transformation spreads the data and makes distributions more analyzable.", professor: "She says this transformation is used in both competitive and noncompetitive array contexts and prepares data for statistics.", exam: "State that log transform helps move toward a normal/log-normal distribution." },
        { image: "logNormal", title: "Original scale versus log scale", body: "The slide shows why a log-normal raw variable can become approximately Gaussian after log transformation.", professor: "She uses it to justify why downstream statistical reasoning often works on log2-transformed data.", exam: "Good definition: if log(X) is normal, X is log-normal." },
        { image: "linearRegressionBias", title: "Dot plot shows dye-dependent bias", body: "The regression line is not Y=X: Cy5 can dominate at low intensity and Cy3 at high intensity.", professor: "She says this shows the two dyes do not behave identically; therefore intra-array normalization is needed.", exam: "Connect dye bias to the need for intra-array normalization." },
        { image: "maPlotFormula", title: "MA-plot formula", body: "M is the log2 ratio Cy5/Cy3; A is the average log intensity. M shows effect direction; A shows signal strength.", professor: "She says clearly: ‘MA plot’ can be a verification-test question and is also used beyond microarrays, including RNA-seq.", exam: "Very high-yield: define M and A and explain what the plot is used for." },
        { image: "maExpectedRatios", title: "Expected MA distribution", body: "A good MA-plot should have its cloud centred around M=0 and roughly parallel to the x-axis.", professor: "She warns that fold-change thresholds are only suggestions; significance still needs statistical testing.", exam: "Do not equate fold change with statistical significance." }
      ] },
      normalization: { eyebrow: "Normalization and design", title: "8 · Make arrays comparable without claiming biology is identical", intro: "This final visual block follows the normalization exercise and design clarifier because it contains the professor’s most exam-oriented summary.", items: [
        { image: "maScaling", title: "Intra-array scaling", body: "Subtract the mean/median M so the cloud is centred around zero, assuming the red/green relationship is a constant factor.", professor: "She says the data must become parallel to the x-axis; otherwise they are not good for further analysis.", exam: "Possible question: what is the final purpose of normalization in competitive arrays?" },
        { image: "referenceSample", title: "Reference sample across arrays", body: "The same biological reference is hybridized across many arrays to create a fixed comparison anchor.", professor: "She explicitly says the reference is a biological sample, not a positive or negative control spot.", exam: "Important trap: reference sample ≠ array QC controls." },
        { image: "scalingBoxplots", title: "Inter-array scaling/centering", body: "Boxplots show how scaling can make medians comparable across arrays before more complete normalization.", professor: "She stresses that normalization makes intensity distributions comparable, not that all biological results become the same.", exam: "Phrase to memorize: equal distribution of intensities, not equal biological results." }
      ] },
      examSummary: { eyebrow: "Professor’s exam hints", title: "9 · What she explicitly says could be asked", intro: "This block is placed before the quiz/exam trainer so you can convert lecture warnings into written answers.", items: [
        { image: "threeArrayTypes", title: "‘What does competitive mean?’", body: "Answer with the list: two samples, same array, two colours, two lasers, competition for probes, dye bias, QC, intra-array and inter-array normalization.", professor: "Near the end she says a repeatable question is to list characteristics of competitive arrays. She wants concepts and ideas, not long calculations.", exam: "Write a 10–12 line answer using this checklist." },
        { image: "maPlotFormula", title: "‘What is an MA-plot?’", body: "M = log2 ratio; A = average log intensity; it helps evaluate distribution, dye bias, normalization quality and potential fold-change extremes.", professor: "She explicitly calls MA-plot a clear verification-test question.", exam: "Define axes, purpose, and what a good normalized MA-plot looks like." }
      ] }
    }
  },
  es: {
    labels: { professor: "Énfasis de la profesora", exam: "Ojo para examen", slide: "Diapositiva", open: "Abrir PDF de slides" },
    blocks: {
      arrayTypes: { eyebrow: "Diccionario de microarrays", title: "1 · Targets, probes y tres familias de arrays", intro: "La profesora empieza construyendo vocabulario; por eso estas imágenes van al inicio y no en una galería separada.", items: [
        { image: "targetsProbes", title: "Target versus probe", body: "El target es la molécula biológica marcada de la muestra; el probe está fijo en el array y captura una secuencia complementaria.", professor: "Se detiene en la terminología: los targets dependen de la pregunta biológica, y los arrays pueden medir DNA, RNA, miRNA, ChIP-chip, CGH o methylation.", exam: "Posible definición: distinguir target, probe y soporte del array." },
        { image: "threeArrayTypes", title: "Tres plataformas del curso", body: "Competitive/two-colour arrays, noncompetitive/one-colour arrays e Illumina BeadChip son las tres tecnologías a comparar en Module 1.", professor: "Dice que prestes atención a ‘competitive’: dos muestras en el mismo array, dos colores y dos láseres. Noncompetitive: una muestra y un láser.", exam: "Comparación de alto rendimiento: competitive vs noncompetitive vs BeadChip." }
      ] },
      fabrication: { eyebrow: "Fabricación y controles", title: "2 · Los spotted arrays son objetos físicos con puntos débiles técnicos", intro: "Este bloque sigue al overview porque la fabricación en sí misma introduce variabilidad técnica.", items: [
        { image: "spotting", title: "Slide de vidrio y spotting", body: "Los arrays competitivos antiguos usaban slides recubiertos donde se depositaban cDNA/oligos en posiciones precisas.", professor: "Enfatiza que los primeros sistemas se parecían a slides de microscopía y que el DNA debía unirse a una superficie tratada químicamente.", exam: "Menciona spotting y probes fijos al listar características de competitive arrays." },
        { image: "oldArrayer", title: "Hardware del old arrayer", body: "Plate stacker, washer/vacuum, slides y pin head construyen el array físico; cada paso puede introducir variación.", professor: "Al principio el pin tocaba el slide, creando muchos problemas; luego sistemas tipo inkjet mejoraron la fabricación.", exam: "Los problemas de fabricación explican por qué hacen falta QC y filtering." },
        { image: "pinHead", title: "Pin heads y contaminación cruzada", body: "Los pins entran en los wells y hacen spotting; deben limpiarse entre dips para evitar contaminación cruzada.", professor: "Quiere que imagines el proceso físico: pin, wash, spot, repetir. Eso explica irregular spots.", exam: "Detalle útil para una respuesta de 10–12 líneas sobre variabilidad técnica." },
        { image: "subarrayControls", title: "Subarrays y controles", body: "Los controles positivos deben fluorescer, los negativos deben quedar oscuros y los spike-ins prueban niveles de intensidad.", professor: "Corrige una confusión común: positive/negative controls son spots de QC; no son lo mismo que reference sample.", exam: "Trampa: reference sample ≠ positive/negative control spot." }
      ] },
      workflow: { eyebrow: "Workflow competitivo", title: "3 · Dos muestras se procesan separadas y luego compiten", intro: "Estas slides van junto al workflow porque muestran por qué la plataforma se llama competitive.", items: [
        { image: "workflow", title: "Control y tratado compiten por los mismos probes", body: "Dos muestras de mRNA se retrotranscriben, se marcan con dyes distintos, se mezclan e hibridan en el mismo array.", professor: "Su frase: si un transcrito es más abundante en una muestra, ‘gana’ la competencia por el spot.", exam: "Pregunta repetible: ¿qué significa competitive array?" },
        { image: "cyanineDyes", title: "Cy3 y Cy5 generan el sesgo central", body: "Cy3 emite verde y Cy5 rojo; sus diferencias físico-químicas generan dye bias que debe corregirse.", professor: "Insiste en que Cy5 no es idéntico a Cy3, y eso origina un problema técnico sistemático.", exam: "Debe aparecer dye bias y normalization al describir two-colour arrays." },
        { image: "indirectLabeling", title: "El indirect labelling reduce color bias", body: "Aminoallyl-dUTP permite sintetizar cDNA primero y acoplar el dye después, reduciendo problemas de tamaño/comportamiento del fluoróforo.", professor: "Lo explica como una estrategia de protocolo para minimizar dye bias antes de la corrección computacional.", exam: "Buen detalle si preguntan cómo se controla la variabilidad experimental." }
      ] },
      imageQc: { eyebrow: "Imagen y QC", title: "4 · La imagen es el primer dataset", intro: "Estas imágenes van antes de los ejercicios de color/QC porque la profesora dice que la imagen y su procesamiento determinan la tabla de datos crudos.", items: [
        { image: "mergedScan", title: "Escaneos Cy3/Cy5 y merge TIFF", body: "El array se escanea con dos láseres; el software fusiona los canales verde y rojo.", professor: "Dice que es absolutamente importante conocer el software y el algoritmo que transforman imagen en intensities.", exam: "Data output: TIFF/image → tabla cruda de intensidades por spot." },
        { image: "falseColours", title: "Los false colours son un código", body: "Blanco = saturado, azul = ausencia de señal, rojo = up-regulation, verde = down-regulation y amarillo/naranja = señal similar.", professor: "Un spot blanco no destruye todo, pero muchos spots blancos indican problema de laser intensity/saturation.", exam: "Quiz clásico: interpretar spots rojos, verdes, amarillos, blancos y azules." },
        { image: "spotQc", title: "Cada spot es una distribución de pixels", body: "El QC revisa background, formas irregulares, donuts, saturación, scratches y polvo.", professor: "Si el background es mayor que la señal, el spot es malo y no debe usarse.", exam: "Posible pregunta: ¿por qué el spot-level QC precede a la normalización?" },
        { image: "technicalVariabilityMap", title: "Cada paso añade variabilidad técnica", body: "Tubos separados, dyes, láseres, hibridación, print-tip, background y algoritmos de imagen contribuyen.", professor: "Por eso vuelve a Lesson 1: la tecnología produce experimental variability.", exam: "Conecta Lesson 2 con Lesson 1: la variabilidad técnica debe medirse y reducirse." }
      ] },
      dyeSwapOutput: { eyebrow: "Control de variabilidad técnica", title: "5 · Dye swap, áreas fallidas y tablas de software", intro: "Este bloque muestra cómo comprobar si Cy3/Cy5 están distorsionando el resultado.", items: [
        { image: "dyeSwap", title: "Dye swap invierte los labels", body: "Se usan las mismas muestras dos veces, invirtiendo Cy3 y Cy5. Si los dyes se comportaran igual, los ratios combinados deberían acercarse a uno.", professor: "Dice que nunca obtienes exactamente uno; obtienes una nube. La variación aceptable discutida es alrededor de ±1.74 en escala log.", exam: "Muy probable: explicar el propósito de dye swap." },
        { image: "atlasArray", title: "Inspección visual del array original", body: "El ejemplo ATLAS muestra controles, subarrays e intensidades diferentes en un experimento real.", professor: "Lo usa para mostrar que hay que mirar el array con los ojos antes de confiar en la salida del software.", exam: "El visual QC es parte de la respuesta, no un detalle opcional." },
        { image: "aspecificFluorescence", title: "Un dye swap puede fallar", body: "La fluorescencia inespecífica puede cubrir spots; esas áreas no sirven para medición fiable.", professor: "Explica que problemas de lavado/background pueden inutilizar una zona completa y forzar filtrado o repetición.", exam: "Ejemplo claro de artefacto técnico que no debe interpretarse biológicamente." },
        { image: "imageneOutput", title: "Salida del software: mean, median, SD, MAD y flags", body: "La tabla final incluye localización, señal/background mean y median, SD, descriptors tipo MAD y flags de calidad.", professor: "Flag 0 significa bueno; flag 1 malo. Si background excede señal, el spot no debe usarse.", exam: "Menciona que los valores de un spot resumen una distribución de pixels." }
      ] },
      biologicalExample: { eyebrow: "Pregunta biológica en práctica", title: "6 · Experimento Toxoplasma: de la pregunta a los primeros plots", intro: "La profesora usa infección por Toxoplasma para volver a la lógica de diseño de Lesson 1.", items: [
        { image: "toxoplasmaQuestion", title: "Una pregunta enfocada, no un experimento genérico", body: "¿Toxoplasma gondii infecta fibroblastos humanos y modifica la transcripción génica tras una hora?", professor: "Enfatiza modelo, control, tratado y timing. Una hora es una decisión de diseño basada en respuesta esperada.", exam: "Úsalo como plantilla: biological question + model + variable + technique." },
        { image: "dotPlot", title: "Dot plot crudo: Cy3 versus Cy5", body: "Cada punto es un spot/transcrito, pero las intensidades crudas se acumulan en la esquina y se abren a intensidades altas.", professor: "Dice que la nube cruda no basta: no se ve bien la distribución completa.", exam: "Si preguntan por qué transformar datos, empieza por este problema." },
        { image: "qcFiltering", title: "QC antes de interpretar", body: "Saturated spots y outliers deben evaluarse; los outliers solo se filtran si estás seguro de que son técnicos.", professor: "Explica que si SD disminuye a alta intensidad es una señal seria de saturación, no un patrón biológico.", exam: "No digas ‘eliminar todos los outliers’; discute si son técnicos o biológicos." }
      ] },
      transformMa: { eyebrow: "Transformar y visualizar", title: "7 · Log transformation y MA-plot abren la nube de datos", intro: "Estas imágenes van junto al MA mini-lab porque la profesora marca explícitamente el MA-plot como pregunta tipo verification test.", items: [
        { image: "logTransform", title: "La transformación log2 hace visibles las distribuciones", body: "Las intensidades crudas Cy3/Cy5 son sesgadas; log2 dispersa los datos y permite analizarlos mejor.", professor: "Dice que esta transformación se usa en arrays competitivos y no competitivos, y prepara los datos para estadística.", exam: "Di que log transform ayuda a acercarse a una distribución normal/log-normal." },
        { image: "logNormal", title: "Escala original versus escala log", body: "La slide muestra por qué una variable log-normal en escala cruda puede volverse aproximadamente gaussiana al aplicar log.", professor: "La usa para justificar el razonamiento estadístico sobre datos log2.", exam: "Definición útil: si log(X) es normal, X es log-normal." },
        { image: "linearRegressionBias", title: "El dot plot muestra bias dependiente del dye", body: "La regresión no es Y=X: Cy5 domina a baja intensidad y Cy3 a alta intensidad.", professor: "Dice que esto prueba que los dyes no se comportan igual; por eso hace falta intra-array normalization.", exam: "Conecta dye bias con la necesidad de intra-array normalization." },
        { image: "maPlotFormula", title: "Fórmula del MA-plot", body: "M es log2 ratio Cy5/Cy3; A es el promedio de log intensity. M muestra dirección del efecto y A fuerza de señal.", professor: "Lo dice claramente: ‘MA plot’ puede ser pregunta del verification test y se usa también fuera de microarrays, como RNA-seq.", exam: "Muy importante: define M y A y explica para qué sirve el plot." },
        { image: "maExpectedRatios", title: "Distribución esperada del MA-plot", body: "Un buen MA-plot debe tener la nube centrada alrededor de M=0 y aproximadamente paralela al eje x.", professor: "Advierte que los umbrales de fold-change son sugerencias; la significancia requiere test estadístico.", exam: "No confundas fold change con significancia estadística." }
      ] },
      normalization: { eyebrow: "Normalización y diseño", title: "8 · Hacer arrays comparables sin decir que la biología es idéntica", intro: "Este bloque final sigue a normalización y design clarifier porque contiene el resumen más orientado a examen.", items: [
        { image: "maScaling", title: "Scaling intra-array", body: "Se resta mean/median de M para centrar la nube en cero, asumiendo que rojo/verde se relacionan por un factor constante.", professor: "Dice que los datos deben quedar paralelos al eje x; si no, no son buenos para análisis posterior.", exam: "Posible pregunta: ¿cuál es el objetivo final de la normalización en competitive arrays?" },
        { image: "referenceSample", title: "Reference sample entre arrays", body: "La misma referencia biológica se hibrida en muchos arrays para crear un ancla fija de comparación.", professor: "Lo dice explícitamente: la reference es una muestra biológica, no un positive/negative control spot.", exam: "Trampa importante: reference sample ≠ controles de QC del array." },
        { image: "scalingBoxplots", title: "Scaling/centering inter-array", body: "Los boxplots muestran cómo el scaling hace comparables las medianas antes de una normalización más completa.", professor: "Insiste en que la normalización iguala distribuciones de intensidad, no resultados biológicos.", exam: "Frase para memorizar: equal distribution of intensities, not equal biological results." }
      ] },
      examSummary: { eyebrow: "Pistas explícitas de examen", title: "9 · Lo que ella dice que puede preguntar", intro: "Este bloque va antes del quiz/exam trainer para convertir advertencias de la clase en respuestas escritas.", items: [
        { image: "threeArrayTypes", title: "‘What does competitive mean?’", body: "Responde con la lista: dos muestras, mismo array, dos colores, dos láseres, competencia por probes, dye bias, QC, intra-array e inter-array normalization.", professor: "Al final dice que una pregunta repetible es listar características de competitive arrays. Quiere conceptos e ideas, no cálculos largos.", exam: "Escribe una respuesta de 10–12 líneas con este checklist." },
        { image: "maPlotFormula", title: "‘What is an MA-plot?’", body: "M = log2 ratio; A = average log intensity; sirve para evaluar distribución, dye bias, calidad de normalización y extremos de fold-change.", professor: "Llama explícitamente al MA-plot una pregunta clara de verification test.", exam: "Define ejes, propósito y cómo se ve un MA-plot normalizado." }
      ] }
    }
  },
  fa: {
    labels: { professor: "تأکید استاد", exam: "نکتهٔ امتحانی", slide: "اسلاید", open: "باز کردن PDF اسلایدها" },
    blocks: {
      arrayTypes: { eyebrow: "واژگان microarray", title: "۱ · target، probe و سه خانوادهٔ array", intro: "استاد درس را با واژگان شروع می‌کند؛ بنابراین تصاویر باید در جریان درس باشند، نه در یک گالری جدا.", items: [
        { image: "targetsProbes", title: "Target در برابر Probe", body: "target مولکول زیستیِ label شده از نمونه است؛ probe روی array ثابت است و توالی complementary را می‌گیرد.", professor: "targets به biological question بستگی دارند و arrayها می‌توانند DNA، RNA، miRNA، ChIP-chip، CGH یا methylation را بررسی کنند.", exam: "تعریف احتمالی: target، probe و support array را جدا کنید." },
        { image: "threeArrayTypes", title: "سه پلتفرم اصلی درس", body: "competitive/two-colour، noncompetitive/one-colour و Illumina BeadChip سه فناوری مهم Module 1 هستند.", professor: "competitive یعنی دو نمونه روی یک array، دو رنگ و دو laser. noncompetitive یعنی یک نمونه و یک laser.", exam: "مقایسهٔ مهم: competitive vs noncompetitive vs BeadChip." }
      ] },
      fabrication: { eyebrow: "ساخت و کنترل‌ها", title: "۲ · spotted array یک شیء فیزیکی با خطاهای فنی است", intro: "این بخش نشان می‌دهد خود manufacturing هم technical variability ایجاد می‌کند.", items: [
        { image: "spotting", title: "slide شیشه‌ای و spotting", body: "در arrayهای قدیمی cDNA/oligo روی slide پوشش‌دار spot می‌شد.", professor: "سطح باید شیمیایی آماده شود تا DNA به آن متصل شود.", exam: "در ویژگی‌های competitive array، spotting و fixed probe را ذکر کنید." },
        { image: "oldArrayer", title: "old arrayer", body: "plate stacker، washer، slide و pin head هر کدام می‌توانند variation ایجاد کنند.", professor: "او می‌گوید pin در ابتدا slide را لمس می‌کرد و مشکل می‌ساخت؛ روش‌های جدیدتر بهتر شدند.", exam: "مشکلات ساخت دلیل نیاز به QC و filtering است." },
        { image: "pinHead", title: "pin head و cross-contamination", body: "pinها باید بین dipها تمیز شوند تا آلودگی متقاطع رخ ندهد.", professor: "فرایند فیزیکی را تصور کنید: pin، wash، spot، repeat؛ همین irregular spots را توضیح می‌دهد.", exam: "جزئیات خوب برای پاسخ دربارهٔ technical variability." },
        { image: "subarrayControls", title: "subarray و controls", body: "positive controls باید روشن شوند، negative controls تاریک بمانند و spike-inها شدت را کنترل می‌کنند.", professor: "positive/negative controls با reference sample یکی نیستند.", exam: "دام مهم: reference sample ≠ positive/negative control spot." }
      ] },
      workflow: { eyebrow: "workflow رقابتی", title: "۳ · دو نمونه جدا آماده می‌شوند و بعد رقابت می‌کنند", intro: "این تصاویر دقیقاً نشان می‌دهند چرا این پلتفرم competitive نام دارد.", items: [
        { image: "workflow", title: "control و treated برای probe مشترک رقابت می‌کنند", body: "دو نمونهٔ mRNA reverse-transcribe، label، mix و روی یک array hybridize می‌شوند.", professor: "اگر transcript در یک نمونه بیشتر باشد، در hybridization ‘برنده’ می‌شود.", exam: "پرسش تکراری: competitive array یعنی چه؟" },
        { image: "cyanineDyes", title: "Cy3 و Cy5 bias اصلی را می‌سازند", body: "Cy3 سبز و Cy5 قرمز است؛ تفاوت‌های فیزیکی/شیمیایی dye bias می‌سازند.", professor: "Cy5 با Cy3 یکسان نیست؛ این یک مشکل technical systematic است.", exam: "در توصیف two-colour array، dye bias و normalization را ذکر کنید." },
        { image: "indirectLabeling", title: "indirect labeling برای کاهش bias", body: "aminoallyl-dUTP اجازه می‌دهد cDNA اول ساخته شود و dye بعداً attach شود.", professor: "این یک راهکار آزمایشگاهی برای کم کردن dye bias قبل از correction نرم‌افزاری است.", exam: "جزئیات خوب برای کنترل experimental variability." }
      ] },
      imageQc: { eyebrow: "خروجی تصویر و QC", title: "۴ · تصویر اولین dataset است", intro: "استاد می‌گوید تصویر و پردازش آن تعیین می‌کند جدول raw data چیست.", items: [
        { image: "mergedScan", title: "اسکن Cy3/Cy5 و merged TIFF", body: "array با دو laser اسکن می‌شود و software دو channel را merge می‌کند.", professor: "دانستن software و algorithm تبدیل image به intensity مهم است.", exam: "خروجی داده: TIFF/image → جدول intensity هر spot." },
        { image: "falseColours", title: "false colours یک کد هستند", body: "سفید=saturation، آبی=signal absence، قرمز=up، سبز=down، زرد=similar.", professor: "یک spot سفید فاجعه نیست، اما تعداد زیاد نشان‌دهندهٔ مشکل saturation است.", exam: "تفسیر رنگ‌ها را بلد باشید." },
        { image: "spotQc", title: "هر spot یک distribution از pixels است", body: "QC شامل background، irregular shapes، donuts، saturation، scratches و dust است.", professor: "اگر background از signal بزرگ‌تر باشد، spot بد است.", exam: "چرا spot-level QC قبل از normalization است؟" },
        { image: "technicalVariabilityMap", title: "هر مرحله technical variability اضافه می‌کند", body: "tubes، dyes، lasers، hybridization، print-tip، background و algorithms همگی دخیل‌اند.", professor: "اینجا درس ۲ به مفهوم variability در درس ۱ وصل می‌شود.", exam: "technical variability باید اندازه‌گیری و کم شود." }
      ] },
      dyeSwapOutput: { eyebrow: "بررسی variability فنی", title: "۵ · dye swap، نواحی خراب و جدول نرم‌افزار", intro: "این بخش نشان می‌دهد Cy3/Cy5 چگونه کنترل می‌شوند.", items: [
        { image: "dyeSwap", title: "dye swap labelها را برعکس می‌کند", body: "همان نمونه‌ها دوبار استفاده می‌شوند، اما Cy3/Cy5 برعکس می‌شود؛ ratioها باید نزدیک ۱ باشند.", professor: "هرگز دقیقاً ۱ نمی‌شود؛ یک cloud داریم. variation قابل قبول حدود ±1.74 در log scale است.", exam: "احتمالی: هدف dye swap چیست؟" },
        { image: "atlasArray", title: "بازبینی visual array", body: "مثال ATLAS controls، subarrays و intensities را نشان می‌دهد.", professor: "قبل از اعتماد به software باید array را دیداری چک کرد.", exam: "visual QC بخشی از پاسخ است." },
        { image: "aspecificFluorescence", title: "dye swap می‌تواند fail شود", body: "fluorescence غیر اختصاصی spotها را می‌پوشاند و آن ناحیه قابل استفاده نیست.", professor: "مشکل washing/background می‌تواند نیاز به filtering یا تکرار بسازد.", exam: "artifact فنی را biological interpretation نکنید." },
        { image: "imageneOutput", title: "خروجی software: mean، median، SD، MAD و flag", body: "جدول شامل location، signal/background، SD و flag کیفیت است.", professor: "flag 0 خوب و flag 1 بد است؛ اگر background از signal بیشتر باشد، spot حذف می‌شود.", exam: "spot value خلاصهٔ pixel distribution است." }
      ] },
      biologicalExample: { eyebrow: "پرسش زیستی در عمل", title: "۶ · آزمایش Toxoplasma از پرسش تا plot", intro: "این مثال تکنولوژی را به منطق طراحی درس ۱ وصل می‌کند.", items: [
        { image: "toxoplasmaQuestion", title: "پرسش دقیق، نه آزمایش کلی", body: "آیا Toxoplasma gondii fibroblast انسانی را infect می‌کند و transcription را بعد از ۱ ساعت تغییر می‌دهد؟", professor: "model، control، treated و timing مهم‌اند؛ یک ساعت یک تصمیم طراحی است.", exam: "الگو: biological question + model + variable + technique." },
        { image: "dotPlot", title: "dot plot خام: Cy3 در برابر Cy5", body: "هر نقطه یک spot/transcript است، اما raw intensities در گوشه جمع می‌شوند.", professor: "raw cloud کافی نیست؛ distribution کامل دیده نمی‌شود.", exam: "علت transform داده را با این مشکل توضیح دهید." },
        { image: "qcFiltering", title: "QC قبل از interpretation", body: "saturated spots و outliers باید بررسی شوند؛ outlier فقط اگر technical باشد حذف می‌شود.", professor: "کاهش SD در intensity بالا نشانهٔ saturation است، نه biology.", exam: "نگویید همهٔ outliers را حذف می‌کنیم؛ دلیل حذف را توضیح دهید." }
      ] },
      transformMa: { eyebrow: "تبدیل و visualization", title: "۷ · log transform و MA-plot ابر داده را باز می‌کنند", intro: "استاد MA-plot را صریحاً پرسش verification-test می‌داند.", items: [
        { image: "logTransform", title: "log2 distribution را قابل دیدن می‌کند", body: "raw Cy3/Cy5 skewed است؛ log2 داده را بهتر پخش می‌کند.", professor: "این transform برای arrays رقابتی و غیررقابتی و برای statistics مفید است.", exam: "log transform را به normal/log-normal distribution وصل کنید." },
        { image: "logNormal", title: "original scale در برابر log scale", body: "اگر log(X) normal باشد، X log-normal است.", professor: "این توجیه کار با داده‌های log2 است.", exam: "تعریف log-normal را بلد باشید." },
        { image: "linearRegressionBias", title: "dot plot bias وابسته به dye را نشان می‌دهد", body: "خط regression برابر Y=X نیست: Cy5 در low intensity و Cy3 در high intensity قوی‌تر است.", professor: "پس dyes یکسان رفتار نمی‌کنند و intra-array normalization لازم است.", exam: "dye bias را به normalization وصل کنید." },
        { image: "maPlotFormula", title: "فرمول MA-plot", body: "M = log2(Cy5/Cy3) و A = average log intensity است.", professor: "می‌گوید MA-plot یک پرسش روشن verification test است و در RNA-seq هم استفاده می‌شود.", exam: "M و A، هدف plot و شکل normalized آن را توضیح دهید." },
        { image: "maExpectedRatios", title: "انتظار از MA distribution", body: "cloud باید حول M=0 و parallel با محور x باشد.", professor: "fold-change threshold فقط پیشنهاد است؛ significance نیاز به test دارد.", exam: "fold change را با statistical significance یکی نگیرید." }
      ] },
      normalization: { eyebrow: "normalization و design", title: "۸ · arrays را قابل مقایسه کنید، نه اینکه biology را یکسان بدانید", intro: "اینجا خلاصهٔ امتحانی normalization آمده است.", items: [
        { image: "maScaling", title: "intra-array scaling", body: "mean/median M کم می‌شود تا cloud حول صفر قرار گیرد.", professor: "داده‌ها باید parallel با x-axis شوند؛ در غیر این صورت برای تحلیل بعدی خوب نیستند.", exam: "هدف final normalization در competitive arrays چیست؟" },
        { image: "referenceSample", title: "reference sample بین arrays", body: "یک reference زیستی ثابت روی arrays متعدد hybridize می‌شود.", professor: "reference یک biological sample است، نه positive/negative control spot.", exam: "دام مهم: reference sample ≠ QC controls." },
        { image: "scalingBoxplots", title: "inter-array scaling/centering", body: "boxplotها نشان می‌دهند medianها چگونه قابل مقایسه می‌شوند.", professor: "normalization distribution intensity را مساوی می‌کند، نه biological results را.", exam: "حفظ کنید: equal distribution of intensities, not equal biological results." }
      ] },
      examSummary: { eyebrow: "نکات صریح امتحانی", title: "۹ · چیزهایی که استاد گفت ممکن است بپرسد", intro: "این بخش قبل از quiz آمده تا نکات استاد به پاسخ نوشتاری تبدیل شوند.", items: [
        { image: "threeArrayTypes", title: "competitive یعنی چه؟", body: "دو نمونه، یک array، دو رنگ، دو laser، رقابت برای probe، dye bias، QC و normalization.", professor: "او می‌گوید سؤال تکراری می‌تواند list of characteristics of competitive arrays باشد. او concepts می‌خواهد، نه محاسبات طولانی.", exam: "پاسخ ۱۰–۱۲ خطی با همین checklist بنویسید." },
        { image: "maPlotFormula", title: "MA-plot چیست؟", body: "M=log2 ratio و A=average log intensity؛ برای distribution، bias و normalization استفاده می‌شود.", professor: "MA-plot را صریحاً verification-test question می‌داند.", exam: "محورها، هدف و شکل normalized را توضیح دهید." }
      ] }
    }
  }
};

const LESSON2_SLIDES = [];
const LESSON2_SLIDE_COPY = {};

const COPY = {
  en: {
    back: "Back to DRD dashboard",
    done: "✓ Completed",
    mark: "Mark completed",
    eyebrow: "DRD Lesson 2 · May 5",
    title: "Competitive two-colour arrays: Stanford logic.",
    subtitle: "A study page built from the May 5 slides and transcript: spotted arrays, targets versus probes, Cy3/Cy5 labelling, dye bias, dye swap, raw image output, spot-level QC, MA-plots and normalization.",
    tags: ["competitive arrays", "two colours", "Cy3/Cy5", "dye swap", "MA-plot", "normalization"],
    module: "Module", exam: "Exam", answer: "Answer", core: "Core", slides: "Slides PDF", transcript: "Transcript",
    bigIdea: "Big idea",
    bigIdeaText: "In competitive arrays, two labelled samples compete on the same chip; the biology is read through a colour ratio, but the ratio must be protected from technical colour bias.",
    resources: "Class resources", recording: "Recording",
    flowEyebrow: "Core workflow", flowTitle: "From RNA samples to comparable log-ratios", flowIntro: "The transcript repeatedly links every step to potential experimental variability: two tubes, two fluorochromes, two lasers, image processing and normalization.", activeStep: "Active step",
    flow: [
      ["1. Biological question", "Example from the lecture: does a stimulus, infection or treatment modify transcription in a specific biological model?"],
      ["2. Two samples", "Control and treated RNA samples are handled separately at first, usually as two tubes."],
      ["3. Reverse transcription + labelling", "mRNA is converted into cDNA targets and labelled with different cyanine dyes, Cy3 and Cy5."],
      ["4. Competitive hybridization", "The two labelled target populations are mixed and compete to bind the same spotted probes on the array."],
      ["5. Scanning and image output", "The array is scanned twice, with green and red lasers, then the images are merged into a raw data table."],
      ["6. QC + normalization", "Bad spots, saturation, background and dye bias are checked before intra-array and inter-array normalization."],
    ],
    compareEyebrow: "What makes it competitive?", compareTitle: "Two samples, one chip, one ratio", compareIntro: "A competitive array is not measuring absolute expression. It measures the relative abundance of two labelled samples at each spot.",
    compareCards: [
      ["Probe", "Fixed cDNA/oligonucleotide spotted on the glass slide; it represents the sequence to be interrogated."],
      ["Target", "Labelled cDNA generated from the sample RNA; it hybridizes to the probe."],
      ["Competition", "Control and treated targets bind the same probe. The more abundant transcript wins more hybridization signal."],
      ["Readout", "Cy5/Cy3 ratio, usually transformed to log2, becomes the first expression-change signal."],
    ],
    colourEyebrow: "Signal interpreter", colourTitle: "Read the merged image", colourIntro: "Assume the common design used in the lecture examples: Cy3 = control and Cy5 = treated. Select what each spot pattern means.",
    scenarios: [
      { id: "red", label: "Red spot", answer: "up", swatch: "bg-red-500", why: "Cy5/Cy3 > 1: treated signal is higher than control, so the transcript is up-regulated in the treated sample." },
      { id: "green", label: "Green spot", answer: "down", swatch: "bg-emerald-500", why: "Cy5/Cy3 < 1: control signal is higher than treated, so the transcript is down-regulated in the treated sample." },
      { id: "yellow", label: "Yellow/orange spot", answer: "same", swatch: "bg-amber-400", why: "Cy5 and Cy3 are similar: no strong difference between treated and control." },
      { id: "white", label: "White spot", answer: "saturated", swatch: "bg-white", why: "White/very bright spots indicate saturation and should be checked or filtered." },
      { id: "blue", label: "Blue/no signal", answer: "absent", swatch: "bg-sky-600", why: "No useful fluorescence signal: this can mean absence of signal or a failed/low-quality spot." },
    ],
    choices: { up: "Up-regulated", down: "Down-regulated", same: "No difference", saturated: "Saturated", absent: "No signal" },
    biasEyebrow: "Checkpoint", biasTitle: "Classify the problem", biasIntro: "The selected option stays highlighted. Use this to separate biological signal from technical artifacts and normalization decisions.",
    categoryLabels: { feature: "Core feature", bias: "Technical bias", qc: "QC / filtering", norm: "Normalization" },
    checkpoint: [
      { id: "twosamples", text: "Two samples are hybridized on the same array", answer: "feature", why: "This is the defining property of competitive/two-colour arrays." },
      { id: "dyes", text: "Cy3 and Cy5 have different fluorescence behaviour", answer: "bias", why: "This is dye bias and must be corrected, often through dye swap and intra-array normalization." },
      { id: "scratch", text: "Scratches, dust, donuts or high background around spots", answer: "qc", why: "These are image/spot quality problems and may require filtering." },
      { id: "parallel", text: "The MA-plot cloud is centered and parallel to the x-axis", answer: "norm", why: "This is a sign that intra-array normalization has reduced intensity-dependent dye bias." },
      { id: "reference", text: "The same reference sample is used across arrays", answer: "feature", why: "A reference design helps compare many arrays against the same pillar/sample." },
      { id: "quantile", text: "Distributions of intensity are made comparable across arrays", answer: "norm", why: "Inter-array normalization makes intensity distributions comparable without claiming identical biology." },
    ],
    maEyebrow: "MA-plot mini lab", maTitle: "Why M and A are better than raw Cy3/Cy5 clouds", maIntro: "Raw intensities bunch near the axes. Log transformation and MA-plots open the cloud and show whether dye bias depends on intensity.",
    mFormula: "M = log₂(Cy5/Cy3) = log₂Cy5 − log₂Cy3", aFormula: "A = average log intensity = ½(log₂Cy5 + log₂Cy3)",
    maCards: [
      ["M axis", "Effect direction: positive M means more Cy5/treated, negative M means more Cy3/control."],
      ["A axis", "Average signal strength: it shows whether the ratio changes with intensity."],
      ["Good normalized pattern", "The cloud should be centered around M = 0 and parallel to the x-axis."],
    ],
    normalizeEyebrow: "Normalization", normalizeTitle: "Scaling: subtract the median M", normalizeIntro: "One simple intra-array correction centers the log-ratio distribution. Try different medians and see how M is corrected.",
    observed: "Observed M", median: "Median M to subtract", corrected: "Corrected M", reset: "Reset",
    designEyebrow: "Experimental design", designTitle: "Reference sample versus positive/negative controls", designIntro: "The transcript clarifies a common confusion: a reference sample is a biological sample used across arrays; positive/negative control spots are array-level QC features.",
    designCards: [
      ["Reference sample", "A pooled or fixed biological sample hybridized across many arrays so each experimental sample has the same comparison anchor."],
      ["Positive/negative controls", "Specific spots on the array used to check whether hybridization and image acquisition worked."],
      ["Dye swap", "A second array with Cy3/Cy5 assignments reversed; if dye behaviour were perfect, the combined ratios would be near one."],
    ],
    quizEyebrow: "Quick quiz", quizTitle: "Check the Stanford array logic", correct: "Correct", wrong: "Try again",
    quiz: [
      { question: "Why is this platform called competitive?", options: ["Two samples compete for the same probe", "Two scanners compete", "Two genes compete for one transcript", "The software chooses one colour only"], answer: 0, explanation: "Control and treated labelled targets are mixed and bind the same spotted probes." },
      { question: "What does dye swap mainly check?", options: ["Biological age", "Dye-related technical variability", "Number of genes in the genome", "Protein concentration"], answer: 1, explanation: "The same samples are labelled in the reverse way to estimate Cy3/Cy5 bias." },
      { question: "In an MA-plot, M is:", options: ["Mean raw intensity", "Log2 ratio between the two channels", "Microarray size", "Median absolute deviation"], answer: 1, explanation: "M is the minus axis: log2(Cy5/Cy3), or log2Cy5 minus log2Cy3." },
      { question: "A saturated spot should usually be:", options: ["Trusted as the strongest biological signal", "Ignored without checking", "Flagged/filtered during QC", "Used as the reference sample"], answer: 2, explanation: "Saturation can compress differences and distort the signal." },
    ],
    examEyebrow: "Written exam trainer", examTitle: "Practice a 10–12-line answer", examQuestion: "Competitive arrays are characterized by specific features. List them and explain why normalization is necessary.", write: "Write your answer", placeholder: "Mention two samples, two colours, Cy3/Cy5, competition, dye bias, image QC, MA-plot and normalization...", modelTitle: "Model answer",
    modelAnswer: "Competitive microarrays are two-colour arrays in which two RNA samples, usually control and treated, are processed in parallel and labelled with two different fluorochromes, Cy3 and Cy5. After reverse transcription, the labelled cDNA targets are mixed and hybridized on the same slide, where they compete for the same spotted probes. The final signal is therefore relative, based on the Cy5/Cy3 ratio for each spot, rather than an absolute expression value. The array is scanned with two lasers and the software produces merged images and raw intensity tables. This technology has several sources of experimental variability: dye bias, different laser behaviour, background fluorescence, irregular spots, saturation, scratches, dust and image-processing algorithms. Dye swap or self-self hybridization can be used to estimate colour-related technical variability. QC is needed to remove bad spots and background effects. Log transformation and MA-plots help visualize the distribution of ratios and intensity-dependent bias. Normalization is necessary to make the log-ratio cloud centered around zero and to make arrays comparable before biological interpretation or statistical testing.",
  },
  es: {
    back: "Volver al dashboard DRD",
    done: "✓ Completada",
    mark: "Marcar completada",
    eyebrow: "DRD Lección 2 · 5 mayo",
    title: "Arrays competitivos two-colour: lógica Stanford.",
    subtitle: "Página de estudio construida con las slides y la transcripción del 5 de mayo: spotted arrays, targets versus probes, marcaje Cy3/Cy5, dye bias, dye swap, salida de imagen, QC de spots, MA-plots y normalización.",
    tags: ["arrays competitivos", "two colours", "Cy3/Cy5", "dye swap", "MA-plot", "normalización"],
    module: "Module", exam: "Examen", answer: "Respuesta", core: "Núcleo", slides: "Slides PDF", transcript: "Transcripción",
    bigIdea: "Idea central",
    bigIdeaText: "En los arrays competitivos, dos muestras marcadas compiten en el mismo chip; la biología se lee como un ratio de color, pero ese ratio debe protegerse del sesgo técnico del color.",
    resources: "Recursos de clase", recording: "Grabación",
    flowEyebrow: "Workflow central", flowTitle: "De muestras de RNA a log-ratios comparables", flowIntro: "La transcripción conecta cada paso con posible variabilidad experimental: dos tubos, dos fluorocromos, dos láseres, procesamiento de imagen y normalización.", activeStep: "Paso activo",
    flow: [
      ["1. Pregunta biológica", "Ejemplo de la clase: ¿un estímulo, infección o tratamiento modifica la transcripción en un modelo biológico concreto?"],
      ["2. Dos muestras", "Control y tratado se manejan por separado al inicio, normalmente en dos tubos."],
      ["3. Retrotranscripción + marcaje", "El mRNA se convierte en targets de cDNA y se marca con dos cyanine dyes: Cy3 y Cy5."],
      ["4. Hibridación competitiva", "Los dos targets marcados se mezclan y compiten por unirse a los mismos probes spotted en el array."],
      ["5. Escaneo e imagen", "El array se escanea dos veces, con láser verde y rojo, y las imágenes se fusionan en una tabla de datos raw."],
      ["6. QC + normalización", "Se revisan spots malos, saturación, background y dye bias antes de normalización intra-array e inter-array."],
    ],
    compareEyebrow: "¿Qué lo hace competitivo?", compareTitle: "Dos muestras, un chip, un ratio", compareIntro: "Un array competitivo no mide expresión absoluta. Mide la abundancia relativa de dos muestras marcadas en cada spot.",
    compareCards: [
      ["Probe", "cDNA/oligonucleótido fijo en el slide de vidrio; representa la secuencia que se quiere interrogar."],
      ["Target", "cDNA marcado generado desde el RNA de la muestra; se hibrida al probe."],
      ["Competición", "Targets control y tratados se unen al mismo probe. El transcript más abundante gana más señal de hibridación."],
      ["Readout", "El ratio Cy5/Cy3, normalmente transformado a log2, es la primera señal de cambio de expresión."],
    ],
    colourEyebrow: "Intérprete de señal", colourTitle: "Lee la imagen fusionada", colourIntro: "Asume el diseño común usado en los ejemplos: Cy3 = control y Cy5 = tratado. Selecciona qué significa cada patrón de spot.",
    scenarios: [
      { id: "red", label: "Spot rojo", answer: "up", swatch: "bg-red-500", why: "Cy5/Cy3 > 1: la señal del tratado es mayor que la del control, por tanto el transcript está up-regulated en tratado." },
      { id: "green", label: "Spot verde", answer: "down", swatch: "bg-emerald-500", why: "Cy5/Cy3 < 1: la señal del control es mayor que la del tratado, por tanto el transcript está down-regulated en tratado." },
      { id: "yellow", label: "Spot amarillo/naranja", answer: "same", swatch: "bg-amber-400", why: "Cy5 y Cy3 son parecidos: no hay diferencia fuerte entre tratado y control." },
      { id: "white", label: "Spot blanco", answer: "saturated", swatch: "bg-white", why: "Los spots blancos o demasiado brillantes indican saturación y deben revisarse o filtrarse." },
      { id: "blue", label: "Azul/sin señal", answer: "absent", swatch: "bg-sky-600", why: "No hay señal fluorescente útil: puede indicar ausencia de señal o spot fallido/de baja calidad." },
    ],
    choices: { up: "Up-regulated", down: "Down-regulated", same: "Sin diferencia", saturated: "Saturado", absent: "Sin señal" },
    biasEyebrow: "Checkpoint", biasTitle: "Clasifica el problema", biasIntro: "La opción seleccionada queda remarcada. Úsalo para separar señal biológica de artefactos técnicos y decisiones de normalización.",
    categoryLabels: { feature: "Característica", bias: "Sesgo técnico", qc: "QC / filtrado", norm: "Normalización" },
    checkpoint: [
      { id: "twosamples", text: "Dos muestras se hibridan en el mismo array", answer: "feature", why: "Es la propiedad definitoria de los arrays competitivos/two-colour." },
      { id: "dyes", text: "Cy3 y Cy5 tienen comportamiento fluorescente distinto", answer: "bias", why: "Esto es dye bias y debe corregirse con dye swap y normalización intra-array." },
      { id: "scratch", text: "Scratches, dust, donuts o background alto alrededor de spots", answer: "qc", why: "Son problemas de imagen/calidad del spot y pueden requerir filtrado." },
      { id: "parallel", text: "La nube del MA-plot está centrada y paralela al eje x", answer: "norm", why: "Indica que la normalización intra-array redujo el sesgo dependiente de intensidad." },
      { id: "reference", text: "La misma reference sample se usa en varios arrays", answer: "feature", why: "Un diseño con referencia ayuda a comparar muchos arrays contra el mismo pilar/muestra." },
      { id: "quantile", text: "Las distribuciones de intensidad se hacen comparables entre arrays", answer: "norm", why: "La normalización inter-array hace comparables las distribuciones sin decir que la biología sea idéntica." },
    ],
    maEyebrow: "Mini lab MA-plot", maTitle: "Por qué M y A son mejores que la nube raw Cy3/Cy5", maIntro: "Las intensidades raw se amontonan cerca de los ejes. La transformación log y el MA-plot abren la nube y muestran si el dye bias depende de la intensidad.",
    mFormula: "M = log₂(Cy5/Cy3) = log₂Cy5 − log₂Cy3", aFormula: "A = intensidad log promedio = ½(log₂Cy5 + log₂Cy3)",
    maCards: [
      ["Eje M", "Dirección del efecto: M positivo significa más Cy5/tratado; M negativo significa más Cy3/control."],
      ["Eje A", "Intensidad promedio: muestra si el ratio cambia con la intensidad."],
      ["Patrón normalizado", "La nube debe centrarse alrededor de M = 0 y ser paralela al eje x."],
    ],
    normalizeEyebrow: "Normalización", normalizeTitle: "Scaling: restar la mediana de M", normalizeIntro: "Una corrección intra-array simple centra la distribución de log-ratios. Prueba medianas distintas y mira cómo se corrige M.",
    observed: "M observado", median: "Mediana M a restar", corrected: "M corregido", reset: "Reset",
    designEyebrow: "Diseño experimental", designTitle: "Reference sample vs controles positivos/negativos", designIntro: "La transcripción aclara una confusión común: la reference sample es una muestra biológica usada en varios arrays; los spots positivos/negativos son controles de QC del array.",
    designCards: [
      ["Reference sample", "Muestra biológica fija o pooled hibridada en muchos arrays para que cada muestra experimental tenga el mismo ancla de comparación."],
      ["Controles positivos/negativos", "Spots específicos del array usados para verificar si la hibridación y adquisición de imagen funcionaron."],
      ["Dye swap", "Segundo array con asignación Cy3/Cy5 invertida; si el comportamiento de los dyes fuera perfecto, los ratios combinados quedarían cerca de uno."],
    ],
    quizEyebrow: "Quiz rápido", quizTitle: "Comprueba la lógica del array Stanford", correct: "Correcto", wrong: "Inténtalo otra vez",
    quiz: [
      { question: "¿Por qué esta plataforma se llama competitiva?", options: ["Dos muestras compiten por el mismo probe", "Dos scanners compiten", "Dos genes compiten por un transcript", "El software elige un solo color"], answer: 0, explanation: "Los targets control y tratados se mezclan y se unen a los mismos probes spotted." },
      { question: "¿Qué revisa principalmente el dye swap?", options: ["Edad biológica", "Variabilidad técnica asociada al dye", "Número de genes del genoma", "Concentración proteica"], answer: 1, explanation: "Las mismas muestras se marcan al revés para estimar sesgo Cy3/Cy5." },
      { question: "En un MA-plot, M es:", options: ["La intensidad raw media", "El log2 ratio entre los dos canales", "El tamaño del microarray", "La median absolute deviation"], answer: 1, explanation: "M es el eje de diferencia: log2(Cy5/Cy3), o log2Cy5 menos log2Cy3." },
      { question: "Un spot saturado normalmente debe:", options: ["Confiarse como la señal biológica más fuerte", "Ignorarse sin revisar", "Marcarse/filtrarse en QC", "Usarse como reference sample"], answer: 2, explanation: "La saturación puede comprimir diferencias y distorsionar la señal." },
    ],
    examEyebrow: "Written exam trainer", examTitle: "Practica una respuesta de 10–12 líneas", examQuestion: "Los arrays competitivos se caracterizan por rasgos específicos. Enuméralos y explica por qué la normalización es necesaria.", write: "Escribe tu respuesta", placeholder: "Menciona dos muestras, dos colores, Cy3/Cy5, competición, dye bias, QC de imagen, MA-plot y normalización...", modelTitle: "Respuesta modelo",
    modelAnswer: "Los microarrays competitivos son arrays two-colour en los que dos muestras de RNA, normalmente control y tratado, se procesan en paralelo y se marcan con dos fluorocromos distintos, Cy3 y Cy5. Tras la retrotranscripción, los targets de cDNA marcados se mezclan y se hibridan en el mismo slide, donde compiten por los mismos probes spotted. Por eso la señal final es relativa, basada en el ratio Cy5/Cy3 para cada spot, y no una medida absoluta de expresión. El array se escanea con dos láseres y el software genera imágenes fusionadas y tablas de intensidad raw. Esta tecnología tiene varias fuentes de variabilidad experimental: dye bias, comportamiento distinto de los láseres, fluorescencia de background, spots irregulares, saturación, scratches, dust y algoritmos de procesamiento de imagen. El dye swap o la self-self hybridization permiten estimar la variabilidad técnica asociada al color. El QC sirve para eliminar spots malos y corregir background. La transformación log y los MA-plots ayudan a visualizar la distribución de ratios y sesgo dependiente de intensidad. La normalización es necesaria para centrar la nube de log-ratios alrededor de cero y hacer comparables los arrays antes de interpretar biológicamente o aplicar tests estadísticos.",
  },
  fa: {
    back: "بازگشت به داشبورد DRD",
    done: "✓ کامل‌شده",
    mark: "علامت کامل‌شده",
    eyebrow: "درس ۲ DRD · ۵ مه",
    title: "آرایه‌های رقابتی دو رنگ: منطق Stanford.",
    subtitle: "صفحهٔ مطالعه بر پایهٔ اسلایدها و رونویسی ۵ مه: آرایه‌های spotted، target در برابر probe، برچسب‌گذاری Cy3/Cy5، dye bias، dye swap، خروجی تصویر خام، QC هر spot، MA-plot و نرمال‌سازی.",
    tags: ["آرایه رقابتی", "دو رنگ", "Cy3/Cy5", "dye swap", "MA-plot", "نرمال‌سازی"],
    module: "ماژول", exam: "امتحان", answer: "پاسخ", core: "هسته", slides: "PDF اسلایدها", transcript: "رونویسی",
    bigIdea: "ایدهٔ اصلی",
    bigIdeaText: "در آرایه‌های رقابتی، دو نمونهٔ برچسب‌دار روی یک chip رقابت می‌کنند؛ زیست‌شناسی از نسبت رنگ خوانده می‌شود، اما این نسبت باید از bias فنی رنگ محافظت شود.",
    resources: "منابع کلاس", recording: "ضبط",
    flowEyebrow: "روند اصلی", flowTitle: "از نمونه‌های RNA تا log-ratioهای قابل مقایسه", flowIntro: "رونویسی هر گام را به تغییرپذیری آزمایشی وصل می‌کند: دو لوله، دو فلوروکروم، دو لیزر، پردازش تصویر و نرمال‌سازی.", activeStep: "گام فعال",
    flow: [
      ["۱. پرسش زیستی", "نمونهٔ درس: آیا محرک، عفونت یا درمان، transcription را در یک مدل زیستی خاص تغییر می‌دهد؟"],
      ["۲. دو نمونه", "کنترل و تیمار در ابتدا جداگانه، معمولاً در دو لوله، پردازش می‌شوند."],
      ["۳. RT + برچسب‌گذاری", "mRNA به targetهای cDNA تبدیل و با رنگ‌های Cy3 و Cy5 برچسب‌گذاری می‌شود."],
      ["۴. هیبریداسیون رقابتی", "دو target برچسب‌دار مخلوط می‌شوند و برای اتصال به همان probeهای روی آرایه رقابت می‌کنند."],
      ["۵. اسکن و تصویر", "آرایه با لیزر سبز و قرمز اسکن می‌شود و تصاویر به جدول دادهٔ خام تبدیل می‌شوند."],
      ["۶. QC + نرمال‌سازی", "spotهای بد، saturation، background و dye bias پیش از نرمال‌سازی intra-array و inter-array بررسی می‌شوند."],
    ],
    compareEyebrow: "چرا رقابتی است؟", compareTitle: "دو نمونه، یک chip، یک نسبت", compareIntro: "آرایهٔ رقابتی بیان مطلق را نمی‌سنجد؛ abundance نسبی دو نمونهٔ برچسب‌دار را در هر spot می‌سنجد.",
    compareCards: [
      ["Probe", "cDNA/oligonucleotide ثابت روی اسلاید شیشه‌ای؛ توالی‌ای که باید بررسی شود."],
      ["Target", "cDNA برچسب‌دار ساخته‌شده از RNA نمونه که به probe متصل می‌شود."],
      ["رقابت", "targetهای کنترل و تیمار به همان probe متصل می‌شوند؛ transcript فراوان‌تر سیگنال بیشتری می‌دهد."],
      ["خروجی", "نسبت Cy5/Cy3، معمولاً پس از تبدیل log2، نخستین سیگنال تغییر بیان است."],
    ],
    colourEyebrow: "تفسیر سیگنال", colourTitle: "تصویر ادغام‌شده را بخوانید", colourIntro: "فرض کنید Cy3 = کنترل و Cy5 = تیمار است. معنی هر الگوی spot را انتخاب کنید.",
    scenarios: [
      { id: "red", label: "spot قرمز", answer: "up", swatch: "bg-red-500", why: "Cy5/Cy3 > 1: سیگنال تیمار بیشتر است، پس transcript در تیمار up-regulated است." },
      { id: "green", label: "spot سبز", answer: "down", swatch: "bg-emerald-500", why: "Cy5/Cy3 < 1: سیگنال کنترل بیشتر است، پس transcript در تیمار down-regulated است." },
      { id: "yellow", label: "spot زرد/نارنجی", answer: "same", swatch: "bg-amber-400", why: "Cy5 و Cy3 مشابه‌اند: تفاوت قوی میان تیمار و کنترل دیده نمی‌شود." },
      { id: "white", label: "spot سفید", answer: "saturated", swatch: "bg-white", why: "spot سفید یا بسیار روشن نشانهٔ saturation است و باید بررسی یا فیلتر شود." },
      { id: "blue", label: "آبی/بدون سیگنال", answer: "absent", swatch: "bg-sky-600", why: "سیگنال مفید وجود ندارد؛ ممکن است بیان نباشد یا spot کیفیت پایینی داشته باشد." },
    ],
    choices: { up: "Up-regulated", down: "Down-regulated", same: "بدون تفاوت", saturated: "Saturated", absent: "بدون سیگنال" },
    biasEyebrow: "Checkpoint", biasTitle: "مشکل را طبقه‌بندی کنید", biasIntro: "گزینهٔ انتخاب‌شده برجسته می‌ماند. هدف، جدا کردن سیگنال زیستی از آرتیفکت فنی و تصمیم‌های نرمال‌سازی است.",
    categoryLabels: { feature: "ویژگی اصلی", bias: "bias فنی", qc: "QC / فیلتر", norm: "نرمال‌سازی" },
    checkpoint: [
      { id: "twosamples", text: "دو نمونه روی یک آرایه هیبرید می‌شوند", answer: "feature", why: "این ویژگی اصلی آرایه‌های رقابتی/دو رنگ است." },
      { id: "dyes", text: "Cy3 و Cy5 رفتار فلورسانس متفاوتی دارند", answer: "bias", why: "این dye bias است و با dye swap و نرمال‌سازی intra-array کنترل می‌شود." },
      { id: "scratch", text: "خش، گرد و غبار، donut یا background بالا در اطراف spot", answer: "qc", why: "این‌ها مشکلات کیفیت تصویر/spot هستند و ممکن است نیاز به فیلتر داشته باشند." },
      { id: "parallel", text: "ابر MA-plot حول صفر و موازی محور x است", answer: "norm", why: "یعنی نرمال‌سازی intra-array bias وابسته به شدت را کاهش داده است." },
      { id: "reference", text: "یک reference sample یکسان در چند آرایه استفاده می‌شود", answer: "feature", why: "طراحی با reference به مقایسهٔ چند آرایه با یک anchor ثابت کمک می‌کند." },
      { id: "quantile", text: "توزیع‌های intensity بین آرایه‌ها قابل مقایسه می‌شوند", answer: "norm", why: "نرمال‌سازی inter-array توزیع intensity را قابل مقایسه می‌کند، نه اینکه زیست‌شناسی را یکسان اعلام کند." },
    ],
    maEyebrow: "مینی‌لب MA-plot", maTitle: "چرا M و A بهتر از ابر خام Cy3/Cy5 هستند؟", maIntro: "intensityهای خام نزدیک محور‌ها جمع می‌شوند. تبدیل log و MA-plot ابر داده را باز می‌کنند و نشان می‌دهند dye bias به intensity وابسته است یا نه.",
    mFormula: "M = log₂(Cy5/Cy3) = log₂Cy5 − log₂Cy3", aFormula: "A = میانگین شدت log = ½(log₂Cy5 + log₂Cy3)",
    maCards: [["محور M", "جهت اثر: M مثبت یعنی Cy5/تیمار بیشتر؛ M منفی یعنی Cy3/کنترل بیشتر."], ["محور A", "میانگین شدت سیگنال: نشان می‌دهد نسبت با شدت تغییر می‌کند یا نه."], ["الگوی نرمال‌شده", "ابر باید حول M = 0 و موازی محور x باشد."]],
    normalizeEyebrow: "نرمال‌سازی", normalizeTitle: "Scaling: کم کردن median M", normalizeIntro: "یک اصلاح سادهٔ intra-array توزیع log-ratio را حول صفر می‌آورد. medianهای مختلف را امتحان کنید.",
    observed: "M مشاهده‌شده", median: "median M برای کم کردن", corrected: "M اصلاح‌شده", reset: "بازنشانی",
    designEyebrow: "طراحی آزمایشی", designTitle: "reference sample در برابر کنترل‌های مثبت/منفی", designIntro: "رونویسی یک اشتباه رایج را روشن می‌کند: reference sample یک نمونهٔ زیستی است؛ spotهای مثبت/منفی کنترل QC آرایه هستند.",
    designCards: [["Reference sample", "نمونهٔ زیستی ثابت یا pooled که در چندین آرایه هیبرید می‌شود تا anchor مقایسه یکسان باشد."], ["کنترل مثبت/منفی", "spotهای خاص روی آرایه برای بررسی موفقیت هیبریداسیون و اسکن."], ["Dye swap", "آرایهٔ دوم با برعکس کردن Cy3/Cy5؛ اگر رنگ‌ها کامل باشند، نسبت‌های ترکیبی نزدیک یک می‌شوند."]],
    quizEyebrow: "آزمونک سریع", quizTitle: "منطق آرایه Stanford را بررسی کنید", correct: "درست", wrong: "دوباره تلاش کنید",
    quiz: [
      { question: "چرا این پلتفرم رقابتی نامیده می‌شود؟", options: ["دو نمونه برای همان probe رقابت می‌کنند", "دو اسکنر رقابت می‌کنند", "دو ژن برای یک transcript رقابت می‌کنند", "نرم‌افزار فقط یک رنگ را انتخاب می‌کند"], answer: 0, explanation: "targetهای کنترل و تیمار مخلوط می‌شوند و به همان probeهای spotted متصل می‌شوند." },
      { question: "dye swap عمدتاً چه چیزی را بررسی می‌کند؟", options: ["سن زیستی", "تغییرپذیری فنی مربوط به dye", "تعداد ژن‌های ژنوم", "غلظت پروتئین"], answer: 1, explanation: "همان نمونه‌ها برعکس برچسب‌گذاری می‌شوند تا bias Cy3/Cy5 برآورد شود." },
      { question: "در MA-plot، M چیست؟", options: ["میانگین intensity خام", "log2 ratio میان دو کانال", "اندازهٔ microarray", "median absolute deviation"], answer: 1, explanation: "M محور تفاوت است: log2(Cy5/Cy3)." },
      { question: "spot saturated معمولاً باید:", options: ["به عنوان قوی‌ترین سیگنال زیستی پذیرفته شود", "بدون بررسی نادیده گرفته شود", "در QC علامت‌گذاری/فیلتر شود", "به عنوان reference sample استفاده شود"], answer: 2, explanation: "saturation می‌تواند تفاوت‌ها را فشرده و سیگنال را تحریف کند." },
    ],
    examEyebrow: "تمرین امتحان نوشتاری", examTitle: "تمرین پاسخ ۱۰–۱۲ خطی", examQuestion: "ویژگی‌های آرایه‌های رقابتی را فهرست کنید و توضیح دهید چرا نرمال‌سازی لازم است.", write: "پاسخ خود را بنویسید", placeholder: "دو نمونه، دو رنگ، Cy3/Cy5، رقابت، dye bias، QC تصویر، MA-plot و نرمال‌سازی را ذکر کنید...", modelTitle: "پاسخ نمونه",
    modelAnswer: "آرایه‌های رقابتی microarrayهای دو رنگ هستند که در آن دو نمونهٔ RNA، معمولاً کنترل و تیمار، جداگانه پردازش و با دو فلوروکروم Cy3 و Cy5 برچسب‌گذاری می‌شوند. پس از reverse transcription، targetهای cDNA مخلوط شده و روی همان اسلاید hybridize می‌شوند؛ بنابراین برای همان probeهای spotted رقابت می‌کنند. خروجی نهایی نسبی است و بر پایهٔ نسبت Cy5/Cy3 برای هر spot است، نه بیان مطلق. آرایه با دو لیزر اسکن می‌شود و نرم‌افزار تصویرهای ادغام‌شده و جدول intensity خام تولید می‌کند. این تکنولوژی چند منبع تغییرپذیری آزمایشی دارد: dye bias، تفاوت رفتار لیزرها، background، spotهای نامنظم، saturation، خش و الگوریتم پردازش تصویر. dye swap یا self-self hybridization برای برآورد variability فنی رنگ استفاده می‌شود. QC برای حذف spotهای بد و اصلاح background لازم است. تبدیل log و MA-plot توزیع نسبت‌ها و bias وابسته به intensity را نشان می‌دهد. نرمال‌سازی برای مرکز کردن log-ratioها حول صفر و قابل مقایسه کردن آرایه‌ها پیش از تفسیر زیستی و آزمون آماری ضروری است."
  }
};

function getCopy(lang) { return COPY[lang] || COPY.es; }
function Pill({ children, tone = "stone" }) {
  const tones = { red: "border-red-200 bg-red-50 text-red-700", amber: "border-amber-200 bg-amber-50 text-amber-800", emerald: "border-emerald-200 bg-emerald-50 text-emerald-800", sky: "border-sky-200 bg-sky-50 text-sky-800", stone: "border-stone-200 bg-white text-stone-700", dark: "border-stone-800 bg-stone-950 text-white" };
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-black ${tones[tone] || tones.stone}`}>{children}</span>;
}
function SectionHeader({ eyebrow, title, children }) {
  return <div className="mb-5"><div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div><h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>{children && <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-stone-600">{children}</p>}</div>;
}
function StatCard({ label, value, tone = "stone" }) { return <div className={`rounded-2xl border p-4 ${tone === "red" ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}><div className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{label}</div><div className="mt-1 text-2xl font-black text-stone-950">{value}</div></div>; }
function ResourceLinks({ copy }) {
  const linkBase = "rounded-2xl border px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-sm";
  return <div className="mt-4 rounded-3xl border border-stone-200 bg-stone-50 p-4"><div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-stone-500">{copy.resources}</div><div className="grid gap-2 sm:grid-cols-3"><a href={SLIDES_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-red-200 bg-red-50 text-red-800 hover:bg-white`}>{copy.slides}</a><a href={TRANSCRIPT_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-stone-200 bg-white text-stone-800 hover:bg-stone-50`}>{copy.transcript}</a><a href={CLASS_RECORDING_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-stone-800 bg-stone-950 text-white hover:bg-red-700`}>{copy.recording}</a></div></div>;
}
const NAV = {
  en: { dashboard: "DRD dashboard", previous: "Previous", next: "Next", current: "Lesson 2", previousTitle: "M1.1 Biological question", nextTitle: "M1.3 Affymetrix GeneChip" },
  es: { dashboard: "Dashboard DRD", previous: "Anterior", next: "Siguiente", current: "Lección 2", previousTitle: "M1.1 Pregunta biológica", nextTitle: "M1.3 Affymetrix GeneChip" },
  fa: { dashboard: "داشبورد DRD", previous: "قبلی", next: "بعدی", current: "درس ۲", previousTitle: "M1.1 پرسش زیستی", nextTitle: "M1.3 Affymetrix GeneChip" }
};
function LessonNav({ lang = "es", position = "top", isDone = false, toggle = () => {}, copy }) {
  const nav = NAV[lang] || NAV.es;
  return <nav className={`${position === "bottom" ? "mt-10" : "mb-6"} rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm`} aria-label="Lesson navigation"><div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"><a href="#/lesson/m1-foundations" className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">← {nav.previous}: {nav.previousTitle}</a><div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center"><a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500 transition hover:bg-stone-50">{nav.current} · {nav.dashboard}</a><button onClick={toggle} className={`rounded-full px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5 ${isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white"}`}>{isDone ? copy.done : copy.mark}</button></div><a href="#/lesson/m1-affy" className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md">{nav.next}: {nav.nextTitle} →</a></div></nav>;
}
function SlideVisualNotes({ lang = "es" }) {
  const local = LESSON2_SLIDE_COPY[lang] || LESSON2_SLIDE_COPY.es;
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><SectionHeader eyebrow={local.eyebrow} title={local.title}>{local.intro}</SectionHeader><a href={SLIDES_URL} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-black text-red-800 transition hover:-translate-y-0.5 hover:bg-white">{local.open}</a></div><div className="grid gap-4 lg:grid-cols-3">{LESSON2_SLIDES.map((figure, idx) => { const item = local.figures[idx]; return <article key={figure.slide} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm"><div className="aspect-[4/3] border-b border-stone-200 bg-white p-3"><img src={figure.src} alt={item.title} loading="lazy" className="h-full w-full rounded-2xl object-contain" /></div><div className="p-5"><Pill tone="red">Slide {figure.slide}</Pill><h3 className="mt-3 text-xl font-black text-stone-950">{item.title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.body}</p></div></article>; })}</div></section>;
}

function Lesson2VisualBlock({ lang = "es", block }) {
  const local = LESSON2_VISUAL_COPY[lang] || LESSON2_VISUAL_COPY.es;
  const data = local.blocks[block];
  if (!data) return null;
  const cols = data.items.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-2";
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><SectionHeader eyebrow={data.eyebrow} title={data.title}>{data.intro}</SectionHeader><a href={SLIDES_URL} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-black text-red-800 transition hover:-translate-y-0.5 hover:bg-white">{local.labels.open}</a></div>
    <div className={`grid gap-4 ${cols}`}>{data.items.map((item, idx) => { const figure = LESSON2_IMAGE_BANK[item.image]; const fullRow = data.items.length === 1 || (data.items.length % 2 === 1 && idx === data.items.length - 1); return <article key={`${block}-${item.image}-${idx}`} className={`overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm ${fullRow ? "lg:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr]" : ""}`}><div className={`aspect-[4/3] border-b border-stone-200 bg-white p-3 ${fullRow ? "lg:aspect-auto lg:border-b-0 lg:border-r" : ""}`}><ZoomableFigure src={figure.src} alt={item.title} lang={lang} className="h-full w-full rounded-2xl object-contain" /></div><div className="p-5"><Pill tone="red">{local.labels.slide} {figure.slide}</Pill><h3 className="mt-3 text-xl font-black text-stone-950">{item.title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.body}</p><div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="text-xs font-black uppercase tracking-[0.16em] text-amber-800">{local.labels.professor}</div><p className="mt-1 text-sm font-bold leading-6 text-amber-950">{item.professor}</p></div><ExamWatchCard item={item} lang={lang} label={local.labels.exam} /></div></article>; })}</div>
  </section>;
}

function Workflow({ copy }) {
  const [active, setActive] = useState(0);
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.flowEyebrow} title={copy.flowTitle}>{copy.flowIntro}</SectionHeader><div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]"><div className="space-y-2">{copy.flow.map(([title], idx) => <button key={title} onClick={() => setActive(idx)} className={`w-full rounded-2xl border p-4 text-left transition ${active === idx ? "border-red-200 bg-red-50 shadow-sm" : "border-stone-200 bg-stone-50 hover:bg-white"}`}><div className="flex items-center justify-between gap-3"><span className="text-sm font-black text-stone-950">{title}</span><span className="rounded-full bg-white px-2 py-1 text-xs font-black text-stone-500">{idx + 1}/{copy.flow.length}</span></div></button>)}</div><article className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-200">{copy.activeStep}</div><h3 className="mt-3 text-3xl font-black tracking-tight">{copy.flow[active][0]}</h3><p className="mt-4 text-lg font-semibold leading-8 text-stone-200">{copy.flow[active][1]}</p><div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-red-500 transition-all" style={{ width: `${((active + 1) / copy.flow.length) * 100}%` }} /></div></article></div></section>;
}
function ConceptCards({ copy }) {
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.compareEyebrow} title={copy.compareTitle}>{copy.compareIntro}</SectionHeader><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{copy.compareCards.map(([title, body], idx) => <article key={title} className={`rounded-3xl border p-5 ${idx === 2 ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}><h3 className="text-xl font-black text-stone-950">{title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{body}</p></article>)}</div></section>;
}
function SignalInterpreter({ copy }) {
  const [answers, setAnswers] = useState({});
  const labels = Object.entries(copy.choices);
  const score = useMemo(() => copy.scenarios.filter(s => answers[s.id] === s.answer).length, [answers, copy.scenarios]);
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.colourEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.colourTitle}</h3></div><Pill tone={score === copy.scenarios.length ? "emerald" : "amber"}>{score}/{copy.scenarios.length}</Pill></div><p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{copy.colourIntro}</p><div className="mt-5 grid gap-3">{copy.scenarios.map(s => { const selected = answers[s.id]; const correct = selected && selected === s.answer; const wrong = selected && selected !== s.answer; return <div key={s.id} className={`rounded-2xl border p-4 ${correct ? "border-emerald-200 bg-emerald-50" : wrong ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}><div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-3"><span className={`h-8 w-8 rounded-full border border-stone-300 ${s.swatch}`} /><div><div className="text-sm font-black text-stone-950">{s.label}</div>{selected && <p className="mt-1 text-xs font-bold leading-5 text-stone-600">{s.why}</p>}</div></div><div className="flex flex-wrap gap-2 md:justify-end">{labels.map(([key, label]) => <button key={key} onClick={() => setAnswers({ ...answers, [s.id]: key })} className={`rounded-full border px-3 py-1.5 text-xs font-black transition ${selected === key ? (correct ? "border-emerald-300 bg-emerald-100 text-emerald-900 ring-2 ring-emerald-100" : wrong ? "border-red-300 bg-red-100 text-red-900 ring-2 ring-red-100" : "border-stone-300 bg-white") : "border-stone-200 bg-white text-stone-600 hover:border-red-200 hover:bg-red-50"}`}>{selected === key ? "✓ " : ""}{label}</button>)}</div></div></div>; })}</div></article>;
}
function Checkpoint({ copy }) {
  const [answers, setAnswers] = useState({});
  const categories = Object.entries(copy.categoryLabels);
  const score = useMemo(() => copy.checkpoint.filter(item => answers[item.id] === item.answer).length, [answers, copy.checkpoint]);
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.biasEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.biasTitle}</h3></div><Pill tone={score === copy.checkpoint.length ? "emerald" : "amber"}>{score}/{copy.checkpoint.length}</Pill></div><p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{copy.biasIntro}</p><div className="mt-5 grid gap-3">{copy.checkpoint.map(item => { const selected = answers[item.id]; const correct = selected && selected === item.answer; const wrong = selected && selected !== item.answer; return <div key={item.id} className={`rounded-2xl border p-4 ${correct ? "border-emerald-200 bg-emerald-50" : wrong ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}><div className="text-sm font-black text-stone-950">{item.text}</div><div className="mt-3 flex flex-wrap gap-2">{categories.map(([key, label]) => <button key={key} onClick={() => setAnswers({ ...answers, [item.id]: key })} className={`rounded-full border px-3 py-1.5 text-xs font-black transition ${selected === key ? (correct ? "border-emerald-300 bg-emerald-100 text-emerald-900 ring-2 ring-emerald-100" : wrong ? "border-red-300 bg-red-100 text-red-900 ring-2 ring-red-100" : "border-stone-300 bg-white") : "border-stone-200 bg-white text-stone-600 hover:border-red-200 hover:bg-red-50"}`}>{selected === key ? "✓ " : ""}{label}</button>)}</div>{selected && <p className="mt-3 text-xs font-bold leading-5 text-stone-600">{item.why}</p>}</div>; })}</div></article>;
}
function MAMiniLab({ copy }) {
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.maEyebrow} title={copy.maTitle}>{copy.maIntro}</SectionHeader><div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]"><div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5"><div className="rounded-3xl bg-stone-950 p-5 text-white"><p className="text-lg font-black leading-8">{copy.mFormula}</p><p className="mt-3 text-lg font-black leading-8">{copy.aFormula}</p></div><div className="mt-4 grid gap-3">{copy.maCards.map(([title, body]) => <div key={title} className="rounded-2xl border border-stone-200 bg-white p-4"><div className="text-sm font-black text-stone-950">{title}</div><p className="mt-1 text-sm font-semibold leading-6 text-stone-600">{body}</p></div>)}</div></div><div className="rounded-[2rem] border border-stone-200 bg-white p-5"><svg viewBox="0 0 520 320" className="h-full min-h-[290px] w-full"><rect x="20" y="20" width="480" height="270" rx="26" fill="#fafaf9" stroke="#e7e5e4"/><line x1="60" y1="155" x2="470" y2="155" stroke="#111827" strokeWidth="3" opacity="0.55"/><line x1="70" y1="260" x2="70" y2="55" stroke="#111827" strokeWidth="3" opacity="0.35"/><path d="M72 174 C130 145,190 135,260 135 S390 150,465 118" fill="none" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" opacity="0.8"/><path d="M84 151 C145 155,205 158,270 153 S396 157,456 154" fill="none" stroke="#059669" strokeWidth="6" strokeLinecap="round" opacity="0.75"/><g fill="#111827" opacity="0.55">{Array.from({ length: 85 }).map((_, i) => { const x = 85 + ((i * 37) % 360); const y = 145 + Math.sin(i * 0.7) * 24 + ((i * 11) % 37) - 18; return <circle key={i} cx={x} cy={y} r="3"/>; })}</g><text x="76" y="48" fontSize="16" fontWeight="800" fill="#111827">M</text><text x="456" y="282" fontSize="16" fontWeight="800" fill="#111827">A</text><text x="110" y="90" fontSize="13" fontWeight="800" fill="#dc2626">biased cloud</text><text x="340" y="176" fontSize="13" fontWeight="800" fill="#059669">after normalization</text></svg></div></div></section>;
}
function NormalizationExercise({ copy }) {
  const [observed, setObserved] = useState(0.85); const [median, setMedian] = useState(0.35);
  const corrected = observed - median;
  const status = Math.abs(corrected) < 0.15 ? "emerald" : Math.abs(corrected) < 0.6 ? "amber" : "red";
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.normalizeEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.normalizeTitle}</h3><p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{copy.normalizeIntro}</p><div className="mt-5 grid gap-4"><label className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><div className="flex justify-between gap-3 text-xs font-black uppercase tracking-[0.16em] text-stone-500"><span>{copy.observed}</span><span>{observed.toFixed(2)}</span></div><input value={observed} onChange={e => setObserved(Number(e.target.value))} type="range" min="-2" max="2" step="0.05" className="mt-3 w-full accent-red-700" /></label><label className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><div className="flex justify-between gap-3 text-xs font-black uppercase tracking-[0.16em] text-stone-500"><span>{copy.median}</span><span>{median.toFixed(2)}</span></div><input value={median} onChange={e => setMedian(Number(e.target.value))} type="range" min="-2" max="2" step="0.05" className="mt-3 w-full accent-red-700" /></label><div className={`rounded-3xl border p-5 ${status === "emerald" ? "border-emerald-200 bg-emerald-50" : status === "amber" ? "border-amber-200 bg-amber-50" : "border-red-200 bg-red-50"}`}><div className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{copy.corrected}</div><div className="mt-1 text-4xl font-black text-stone-950">{corrected.toFixed(2)}</div><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">M corrected = observed M − median M</p></div><button onClick={() => { setObserved(0.85); setMedian(0.35); }} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700 transition hover:bg-stone-50">{copy.reset}</button></div></article>;
}
function DesignClarifier({ copy }) {
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.designEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.designTitle}</h3><p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{copy.designIntro}</p><div className="mt-5 grid gap-3">{copy.designCards.map(([title, body], idx) => <div key={title} className={`rounded-2xl border p-4 ${idx === 0 ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}><h4 className="text-sm font-black text-stone-950">{title}</h4><p className="mt-1 text-sm font-semibold leading-6 text-stone-600">{body}</p></div>)}</div></article>;
}
function QuizBlock({ copy }) {
  const [answers, setAnswers] = useState({});
  const score = copy.quiz.reduce((total, q, idx) => total + (answers[idx] === q.answer ? 1 : 0), 0);
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end"><SectionHeader eyebrow={copy.quizEyebrow} title={copy.quizTitle} /><Pill tone={score === copy.quiz.length ? "emerald" : "amber"}>{score}/{copy.quiz.length}</Pill></div><div className="grid gap-4 lg:grid-cols-2">{copy.quiz.map((q, idx) => { const selected = answers[idx]; const answered = selected !== undefined; const correct = answered && selected === q.answer; return <article key={q.question} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{idx + 1}</span>{answered && <Pill tone={correct ? "emerald" : "amber"}>{correct ? copy.correct : copy.wrong}</Pill>}</div><h3 className="mt-4 text-lg font-black leading-7 text-stone-950">{q.question}</h3><div className="mt-4 grid gap-2">{q.options.map((option, optionIdx) => { const isSelected = selected === optionIdx; const isAnswer = q.answer === optionIdx; const cls = !answered ? "border-stone-200 bg-stone-50 hover:bg-white" : isAnswer ? "border-emerald-300 bg-emerald-50 text-emerald-900" : isSelected ? "border-amber-300 bg-amber-50 text-amber-900" : "border-stone-200 bg-stone-50 text-stone-500"; return <button key={option} onClick={() => setAnswers({ ...answers, [idx]: optionIdx })} className={`rounded-2xl border px-4 py-3 text-left text-sm font-black leading-6 transition ${cls}`}><span className="me-2">{String.fromCharCode(65 + optionIdx)}.</span>{option}{answered && isAnswer && <span className="ms-2 text-emerald-700">✓</span>}{answered && isSelected && !isAnswer && <span className="ms-2 text-amber-700">×</span>}</button>; })}</div>{answered && <p className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-semibold leading-6 text-stone-700">{q.explanation}</p>}</article>; })}</div></section>;
}
function ExamTrainer({ copy }) {
  const [draft, setDraft] = useState("");
  const words = draft.trim().split(/\s+/).filter(Boolean).length;
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.examEyebrow} title={copy.examTitle}>{copy.examQuestion}</SectionHeader><div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]"><article className="rounded-3xl border border-stone-200 bg-white p-5"><label className="text-xl font-black text-stone-950" htmlFor="drd-lesson2-answer">{copy.write}</label><textarea id="drd-lesson2-answer" value={draft} onChange={e => setDraft(e.target.value)} rows={12} placeholder={copy.placeholder} className="mt-4 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-semibold leading-7 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-red-300 focus:ring-4 focus:ring-red-100" /><div className="mt-2 text-xs font-bold text-stone-500">{words} words</div></article><article className="rounded-3xl border border-stone-800 bg-stone-950 p-5 text-white"><h3 className="text-xl font-black">{copy.modelTitle}</h3><p className="mt-3 text-sm font-semibold leading-7 text-stone-200">{copy.modelAnswer}</p></article></div></section>;
}
export default function DRDLesson02({ lang = "es", isDone = false, toggle = () => {} }) {
  const copy = getCopy(lang);
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><LessonNav lang={lang} position="top" isDone={isDone} toggle={toggle} copy={copy}/><section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5"><div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"><div className="p-7 md:p-10 lg:p-12"><div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.eyebrow}</div><h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{copy.subtitle}</p><div className="mt-6 flex flex-wrap gap-2">{copy.tags.map(tag => <Pill key={tag} tone={tag.includes("Cy") || tag.includes("dye") ? "red" : "stone"}>{tag}</Pill>)}</div></div><div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0"><div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner"><div className="grid grid-cols-2 gap-3"><StatCard label={copy.module} value="1" tone="red"/><StatCard label={copy.exam} value="4Q"/><StatCard label={copy.answer} value="10–12"/><StatCard label={copy.core} value="Cy3/Cy5" tone="red"/></div><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{copy.bigIdea}</div><p className="mt-2 text-lg font-bold leading-7">{copy.bigIdeaText}</p></div><ResourceLinks copy={copy}/></div></div></div></section><Workflow copy={copy}/><ConceptCards copy={copy}/><Lesson2VisualBlock lang={lang} block="arrayTypes"/><Lesson2VisualBlock lang={lang} block="fabrication"/><Lesson2VisualBlock lang={lang} block="workflow"/><section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1fr]"><SignalInterpreter copy={copy}/><Checkpoint copy={copy}/></section><Lesson2VisualBlock lang={lang} block="imageQc"/><Lesson2VisualBlock lang={lang} block="dyeSwapOutput"/><Lesson2VisualBlock lang={lang} block="biologicalExample"/><MAMiniLab copy={copy}/><Lesson2VisualBlock lang={lang} block="transformMa"/><section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1fr]"><NormalizationExercise copy={copy}/><DesignClarifier copy={copy}/></section><Lesson2VisualBlock lang={lang} block="normalization"/><Lesson2VisualBlock lang={lang} block="examSummary"/><QuizBlock copy={copy}/><ExamTrainer copy={copy}/><LessonNav lang={lang} position="bottom" isDone={isDone} toggle={toggle} copy={copy}/></main>;
}
