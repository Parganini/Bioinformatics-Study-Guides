import React, { useMemo, useState } from "react";
import slide01 from "../../assets/drd/lesson10/slide-01.png";
import slide02 from "../../assets/drd/lesson10/slide-02.png";
import slide03 from "../../assets/drd/lesson10/slide-03.png";
import slide04 from "../../assets/drd/lesson10/slide-04.png";
import slide05 from "../../assets/drd/lesson10/slide-05.png";
import slide06 from "../../assets/drd/lesson10/slide-06.png";
import slide07 from "../../assets/drd/lesson10/slide-07.png";
import slide08 from "../../assets/drd/lesson10/slide-08.png";
import slide09 from "../../assets/drd/lesson10/slide-09.png";
import slide10 from "../../assets/drd/lesson10/slide-10.png";
import slide11 from "../../assets/drd/lesson10/slide-11.png";
import slide12 from "../../assets/drd/lesson10/slide-12.png";
import slide13 from "../../assets/drd/lesson10/slide-13.png";
import slide14 from "../../assets/drd/lesson10/slide-14.png";
import slide15 from "../../assets/drd/lesson10/slide-15.png";
import slide16 from "../../assets/drd/lesson10/slide-16.png";
import slide17 from "../../assets/drd/lesson10/slide-17.png";
import slide18 from "../../assets/drd/lesson10/slide-18.png";
import slide19 from "../../assets/drd/lesson10/slide-19.png";
import slide20 from "../../assets/drd/lesson10/slide-20.png";
import slide21 from "../../assets/drd/lesson10/slide-21.png";
import slide22 from "../../assets/drd/lesson10/slide-22.png";
import slide23 from "../../assets/drd/lesson10/slide-23.png";
import slide24 from "../../assets/drd/lesson10/slide-24.png";
import slide25 from "../../assets/drd/lesson10/slide-25.png";
import slide26 from "../../assets/drd/lesson10/slide-26.png";
import slide27 from "../../assets/drd/lesson10/slide-27.png";
import slide28 from "../../assets/drd/lesson10/slide-28.png";
import slide29 from "../../assets/drd/lesson10/slide-29.png";
import slide30 from "../../assets/drd/lesson10/slide-30.png";
import plotPicture1 from "../../assets/drd/lesson10/plot-picture1.png";
import plotComparisonFunnorm from "../../assets/drd/lesson10/plot-comparison-funnorm.png";
import plotComparisonNoob from "../../assets/drd/lesson10/plot-comparison-noob.png";
import plotComparisonQuantile from "../../assets/drd/lesson10/plot-comparison-quantile.png";
import plotComparisonSwan from "../../assets/drd/lesson10/plot-comparison-swan.png";

const SLIDES_URL = "https://drive.google.com/file/d/1k2pszA-h2YXwEfr3SCQPk9ZRb-tfKaMS/view?usp=drivesdk";
const CODE_URL = "https://drive.google.com/file/d/1PCExfbK5Eegc5OvnCEUhUaaMGD_iwXtx/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1C5VEIJ_9v1Ak_DgtKza9zyaLg_c-Z__HWxw1_m42FfA/edit?usp=drivesdk";
const RECORDING_URL = "https://www.youtube.com/watch?v=aBVSPgrVB7I&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=8";

const slideImages = [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10, slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20, slide21, slide22, slide23, slide24, slide25, slide26, slide27, slide28, slide29, slide30];

const ui = {
  en: { mark: "Mark completed", done: "Completed", dashboard: "DRD dashboard", previous: "Previous", next: "Next", previousTitle: "M2.3 Data import + QC", nextTitle: "M2.5 Normalization II", current: "M2.4", resources: "Class resources", slides: "Slides", code: "Code HTML", transcript: "Transcript", recording: "Recording", slide: "Slide", zoom: "Click to zoom", close: "Close zoom", reportWatch: "Report watch", openAnswer: "Open expanded answer", hideAnswer: "Hide answer", include: "What to include", trap: "Common trap", model: "Report-ready wording", rcode: "R code", interpretation: "Interpretation", professor: "Professor emphasis", reportMove: "Report move", checkpoint: "Checkpoint", correct: "Correct", notQuite: "Not quite", trainer: "Report paragraph trainer", placeholder: "Write a report-style paragraph here...", words: "words", showAnswer: "Show answer", quickLab: "Mini-lab", generatedFigure: "Generated figure" },
  es: { mark: "Marcar completada", done: "Completada", dashboard: "Dashboard DRD", previous: "Anterior", next: "Siguiente", previousTitle: "M2.3 Importación + QC", nextTitle: "M2.5 Normalización II", current: "M2.4", resources: "Recursos de clase", slides: "Slides", code: "Código HTML", transcript: "Transcripción", recording: "Recording", slide: "Diapositiva", zoom: "Click para ampliar", close: "Cerrar zoom", reportWatch: "Report watch", openAnswer: "Abrir respuesta desarrollada", hideAnswer: "Ocultar respuesta", include: "Qué incluir", trap: "Trampa común", model: "Redacción lista para report", rcode: "Código R", interpretation: "Interpretación", professor: "Énfasis del profesor", reportMove: "Movimiento para report", checkpoint: "Checkpoint", correct: "Correcto", notQuite: "Casi", trainer: "Entrenador de párrafo de report", placeholder: "Escribe aquí un párrafo estilo report...", words: "palabras", showAnswer: "Mostrar respuesta", quickLab: "Mini-lab", generatedFigure: "Figura generada" },
  fa: { mark: "علامت کامل‌شده", done: "کامل شد", dashboard: "داشبورد DRD", previous: "قبلی", next: "بعدی", previousTitle: "M2.3 ورود داده + QC", nextTitle: "M2.5 نرمال‌سازی II", current: "M2.4", resources: "منابع کلاس", slides: "اسلایدها", code: "HTML کد", transcript: "رونوشت", recording: "Recording", slide: "اسلاید", zoom: "برای بزرگ‌نمایی کلیک کن", close: "بستن بزرگ‌نمایی", reportWatch: "نکته برای گزارش", openAnswer: "باز کردن پاسخ کامل", hideAnswer: "پنهان کردن پاسخ", include: "چه چیزهایی باید بیاید", trap: "دام رایج", model: "عبارت آماده برای گزارش", rcode: "کد R", interpretation: "تفسیر", professor: "تأکید استاد", reportMove: "حرکت مناسب گزارش", checkpoint: "Checkpoint", correct: "درست", notQuite: "نه کاملاً", trainer: "تمرین پاراگراف گزارش", placeholder: "یک پاراگراف به سبک گزارش بنویسید...", words: "کلمه", showAnswer: "نمایش پاسخ", quickLab: "مینی‌لب", generatedFigure: "شکل تولیدشده" }
};

const copy = {
  hero: {
    eyebrow: { en: "Module 2 · May 20 · beta/M values + normalization I", es: "Módulo 2 · 20 de mayo · beta/M values + normalización I", fa: "ماژول ۲ · ۲۰ مه · beta/M value + نرمال‌سازی I" },
    title: { en: "From beta/M values to normalization decisions", es: "De beta/M values a decisiones de normalización", fa: "از beta/M values تا تصمیم‌های normalization" },
    subtitle: { en: "A practical lesson following the real PDF slides and the R HTML walkthrough: extract beta and M values, visualize distributions, understand technical variation, compare background correction, quantile normalization and functional normalization, and justify the selected method in the report.", es: "Una lección práctica siguiendo las slides reales del PDF y el walkthrough del HTML de R: extraer beta y M values, visualizar distribuciones, entender variación técnica, comparar background correction, quantile normalization y functional normalization, y justificar el método elegido en el report.", fa: "یک درس عملی بر اساس اسلایدهای واقعی PDF و walkthrough کد R: استخراج beta و M، نمایش توزیع‌ها، فهم technical variation، مقایسه background correction، quantile normalization و functional normalization، و توجیه روش انتخابی در report." },
    tags: { en: ["beta", "M-value", "normalization", "Noob", "quantile", "functional"], es: ["beta", "M-value", "normalización", "Noob", "quantile", "functional"], fa: ["beta", "M-value", "normalization", "Noob", "quantile", "functional"] },
    bigIdea: { en: "Raw methylation values are interpretable, but not automatically comparable. Choose normalization by matching the method assumption to the biology you expect.", es: "Los valores crudos de metilación son interpretables, pero no automáticamente comparables. Elige la normalización alineando la asunción del método con la biología esperada.", fa: "مقادیر خام methylation قابل تفسیرند، اما خودبه‌خود قابل مقایسه نیستند. normalization را بر اساس سازگاری فرض روش با biology مورد انتظار انتخاب کن." }
  },
  stats: [
    { label: { en: "Module", es: "Módulo", fa: "ماژول" }, value: "2", tone: "green" },
    { label: { en: "Date", es: "Fecha", fa: "تاریخ" }, value: "May 20" },
    { label: { en: "Core", es: "Core", fa: "محور" }, value: "Norm", tone: "green" },
    { label: { en: "Output", es: "Output", fa: "خروجی" }, value: "Report" }
  ]
};

const learningBlocks = [
  {
    id: "beta-m",
    eyebrow: { en: "1 · methylation scale", es: "1 · escala de metilación", fa: "۱ · مقیاس methylation" },
    title: { en: "Beta values are intuitive; M-values are better behaved for statistics", es: "Beta values son intuitivos; M-values se comportan mejor para estadística", fa: "beta شهودی است؛ M-value برای آمار مناسب‌تر رفتار می‌کند" },
    body: { en: "Slides 1-4 introduce beta as M/(M+U), bounded between 0 and 1, and M-value as log2(M/U), unbounded. The professor emphasizes that beta is the biological percentage-like interpretation, while M-values stretch differences near 0 and 1 where beta is compressed.", es: "Las slides 1-4 introducen beta como M/(M+U), acotado entre 0 y 1, y M-value como log2(M/U), no acotado. El profesor remarca que beta es la interpretación biológica tipo porcentaje, mientras que M-values expanden diferencias cerca de 0 y 1, donde beta se comprime.", fa: "اسلایدهای ۱ تا ۴ beta را به صورت M/(M+U)، بین ۰ و ۱، و M-value را log2(M/U) معرفی می‌کنند. استاد تأکید می‌کند beta تفسیر زیستی شبیه درصد دارد، اما M-value تفاوت‌های نزدیک ۰ و ۱ را که در beta فشرده می‌شوند باز می‌کند." },
    slides: [
      { n: 1, title: { en: "Lesson frame", es: "Marco de la lección", fa: "چارچوب درس" }, body: { en: "Start with methylation-value definitions before choosing normalization.", es: "Primero define los valores de metilación antes de elegir normalización.", fa: "قبل از انتخاب normalization، تعریف methylation value را تثبیت کن." } },
      { n: 2, title: { en: "Beta and M formulas", es: "Fórmulas beta y M", fa: "فرمول‌های beta و M" }, body: { en: "Beta has biological meaning; M is a log-ratio scale.", es: "Beta tiene significado biológico; M es escala log-ratio.", fa: "beta معنای زیستی دارد؛ M مقیاس log-ratio است." } },
      { n: 3, title: { en: "Bimodal distributions", es: "Distribuciones bimodales", fa: "توزیع‌های bimodal" }, body: { en: "Both beta and M show hypomethylated and hypermethylated peaks.", es: "Beta y M muestran picos hipo- e hipermetilados.", fa: "beta و M هر دو peakهای hypo/hyper methylated دارند." } },
      { n: 4, title: { en: "Logistic relationship", es: "Relación logística", fa: "رابطه logistic" }, body: { en: "The middle range is close to linear; extremes are not.", es: "El rango medio es casi lineal; los extremos no.", fa: "بازه میانی تقریباً linear است؛ extremeها نه." } }
    ],
    watch: {
      title: { en: "Report watch: do not confuse beta interpretation with M-value testing", es: "Report watch: no confundas interpretación beta con testeo en M-value", fa: "نکته گزارش: تفسیر beta را با آزمون M-value قاطی نکن" },
      include: { en: ["State beta = methylated intensity / total intensity, interpreted from 0 to 1.", "State M-value = log2 methylated/unmethylated, useful because it is not bounded.", "Explain that beta is compressed at the extremes; small biological changes near 0 or 1 may be easier to model on the M scale."], es: ["Di que beta = intensidad methylated / intensidad total, interpretado de 0 a 1.", "Di que M-value = log2 methylated/unmethylated, útil porque no está acotado.", "Explica que beta se comprime en los extremos; cambios biológicos pequeños cerca de 0 o 1 pueden modelarse mejor en escala M."], fa: ["بگویید beta = methylated intensity / total intensity و بین ۰ تا ۱ تفسیر می‌شود.", "بگویید M-value = log2 methylated/unmethylated و چون محدود نیست برای مدل‌سازی مفید است.", "توضیح دهید beta در extremeها فشرده می‌شود و تغییرهای کوچک نزدیک ۰ یا ۱ ممکن است در مقیاس M بهتر دیده شوند."] },
      trap: { en: "Do not write that M-values are methylation percentages. They are log ratios.", es: "No escribas que M-values son porcentajes de metilación. Son log-ratios.", fa: "ننویسید M-value درصد methylation است؛ M یک log-ratio است." },
      model: { en: "Beta values are preferable for biological interpretation because they range from 0 to 1 and approximate the fraction of methylated molecules at a CpG. M-values are log2 ratios of methylated versus unmethylated signal and are usually more appropriate for statistical modelling because they are not compressed at the extremes.", es: "Los beta values son preferibles para interpretación biológica porque van de 0 a 1 y aproximan la fracción de moléculas metiladas en un CpG. Los M-values son log2 ratios de señal methylated frente a unmethylated y suelen ser más apropiados para modelado estadístico porque no se comprimen en los extremos.", fa: "beta برای تفسیر زیستی مناسب‌تر است چون بین ۰ و ۱ است و fraction مولکول‌های methylated در CpG را تقریب می‌زند. M-value log2 ratio سیگنال methylated به unmethylated است و برای مدل‌سازی آماری مناسب‌تر است چون در extremeها فشرده نمی‌شود." }
    },
    codeSteps: ["setup", "extractBetaM", "densityBetaM"]
  },
  {
    id: "why-normalize",
    eyebrow: { en: "2 · visualization before methods", es: "2 · visualización antes del método", fa: "۲ · visualization قبل از روش" },
    title: { en: "Normalization is justified by distribution diagnostics", es: "La normalización se justifica con diagnósticos de distribución", fa: "normalization با diagnostic توزیع توجیه می‌شود" },
    body: { en: "Slides 5-9 connect the biological goal to plots. The professor repeatedly says the aim is to reveal biological variation while reducing unwanted technical variation. Boxplots, density curves and PCA-like reasoning are diagnostics, not decoration.", es: "Las slides 5-9 conectan el objetivo biológico con los plots. El profesor repite que el objetivo es revelar variación biológica reduciendo variación técnica no deseada. Boxplots, density curves y razonamiento tipo PCA son diagnósticos, no decoración.", fa: "اسلایدهای ۵ تا ۹ هدف زیستی را به plotها وصل می‌کنند. استاد بارها می‌گوید هدف آشکار کردن variation زیستی و کاهش variation فنی ناخواسته است. boxplot، density و منطق PCA diagnostic هستند، تزئین نیستند." },
    slides: [
      { n: 5, title: { en: "Normalization section", es: "Sección de normalización", fa: "بخش normalization" }, body: { en: "The lecture switches from value definition to preprocessing decisions.", es: "La clase pasa de definición de valores a decisiones de preprocesamiento.", fa: "درس از تعریف مقدارها به تصمیم preprocessing می‌رود." } },
      { n: 6, title: { en: "Why normalize?", es: "¿Por qué normalizar?", fa: "چرا normalization؟" }, body: { en: "Technical variation can hide the real biological signal.", es: "La variación técnica puede esconder la señal biológica real.", fa: "variation فنی می‌تواند signal زیستی واقعی را پنهان کند." } },
      { n: 7, title: { en: "Boxplot anatomy", es: "Anatomía del boxplot", fa: "ساختار boxplot" }, body: { en: "Median, IQR, whiskers and outliers are used to compare sample distributions.", es: "Mediana, IQR, whiskers y outliers se usan para comparar distribuciones de muestras.", fa: "median، IQR، whisker و outlier برای مقایسه distribution sampleها استفاده می‌شوند." } },
      { n: 8, title: { en: "Before/after distributions", es: "Distribuciones antes/después", fa: "قبل/بعد از distribution" }, body: { en: "After normalization, distributions become more comparable, but that can be good or dangerous depending on biology.", es: "Después de normalizar, las distribuciones se vuelven más comparables, pero eso puede ser bueno o peligroso según la biología.", fa: "بعد از normalization توزیع‌ها قابل مقایسه‌تر می‌شوند، اما این بسته به biology می‌تواند خوب یا خطرناک باشد." } },
      { n: 9, title: { en: "Within versus between array", es: "Within vs between array", fa: "within در برابر between array" }, body: { en: "Within-array: background, color, Infinium type. Between-array: array-to-array differences.", es: "Within-array: background, color, tipo Infinium. Between-array: diferencias array-to-array.", fa: "within-array: background، color، Infinium type. between-array: تفاوت array-to-array." } }
    ],
    watch: {
      title: { en: "Report watch: state what variation you are trying to remove", es: "Report watch: di qué variación intentas eliminar", fa: "نکته گزارش: بگو چه variationای را حذف می‌کنی" },
      include: { en: ["Systematic technical bias is the main normalization target.", "Batch effects may remain and need separate assessment.", "Random noise is not the primary target of these methods."], es: ["El sesgo técnico sistemático es el objetivo principal de la normalización.", "Batch effects pueden permanecer y requieren evaluación separada.", "El ruido aleatorio no es el objetivo principal de estos métodos."], fa: ["bias فنی سیستماتیک هدف اصلی normalization است.", "batch effect ممکن است باقی بماند و بررسی جداگانه می‌خواهد.", "noise تصادفی هدف اصلی این روش‌ها نیست."] },
      trap: { en: "Do not say normalization guarantees biological truth. It improves comparability under assumptions.", es: "No digas que la normalización garantiza verdad biológica. Mejora comparabilidad bajo asunciones.", fa: "نگویید normalization حقیقت زیستی را تضمین می‌کند؛ تحت فرض‌ها comparability را بهتر می‌کند." },
      model: { en: "Normalization was evaluated because sample distributions suggested potential technical variation. The goal was not to erase all differences, but to reduce unwanted systematic effects while preserving biologically meaningful methylation differences.", es: "La normalización se evaluó porque las distribuciones de las muestras sugerían posible variación técnica. El objetivo no fue borrar todas las diferencias, sino reducir efectos sistemáticos no deseados conservando diferencias de metilación biológicamente relevantes.", fa: "normalization ارزیابی شد چون distribution sampleها variation فنی احتمالی را نشان می‌داد. هدف حذف همه تفاوت‌ها نبود، بلکه کاهش effectهای سیستماتیک ناخواسته همراه با حفظ تفاوت methylation زیستی بود." }
    },
    codeSteps: ["boxplot", "savePlots"]
  },
  {
    id: "background",
    eyebrow: { en: "3 · background correction", es: "3 · corrección de background", fa: "۳ · تصحیح background" },
    title: { en: "Noob uses out-of-band probes to avoid truncating weak signals", es: "Noob usa out-of-band probes para evitar truncar señales débiles", fa: "Noob از out-of-band probeها برای جلوگیری از truncation سیگنال ضعیف استفاده می‌کند" },
    body: { en: "Slides 10-13 compare GenomeStudio background correction with Noob. The professor stresses that negative controls are far fewer than out-of-band signals, and that subtracting background then setting negative intensities to zero can truncate low-signal data.", es: "Las slides 10-13 comparan la corrección de background de GenomeStudio con Noob. El profesor remarca que negative controls son muchos menos que las señales out-of-band, y que restar background y convertir intensidades negativas a cero puede truncar datos de baja señal.", fa: "اسلایدهای ۱۰ تا ۱۳ background correction در GenomeStudio را با Noob مقایسه می‌کنند. استاد تأکید می‌کند negative control بسیار کمتر از out-of-band signal است و کم کردن background و صفر کردن intensity منفی می‌تواند داده low-signal را truncate کند." },
    slides: [
      { n: 10, title: { en: "GenomeStudio background", es: "Background en GenomeStudio", fa: "background در GenomeStudio" }, body: { en: "Uses channel-specific negative-control percentiles and can truncate low intensities at zero.", es: "Usa percentiles de negative controls por canal y puede truncar intensidades bajas a cero.", fa: "از percentile negative control در هر channel استفاده می‌کند و intensityهای پایین را صفر می‌کند." } },
      { n: 11, title: { en: "Noob paper", es: "Paper de Noob", fa: "مقاله Noob" }, body: { en: "Introduces low-level processing with out-of-band probes.", es: "Introduce low-level processing con out-of-band probes.", fa: "low-level processing با out-of-band probe را معرفی می‌کند." } },
      { n: 12, title: { en: "Out-of-band logic", es: "Lógica out-of-band", fa: "منطق out-of-band" }, body: { en: "Wrong color channel signals are background, not useful methylation signal.", es: "Las señales en el color equivocado son background, no señal de metilación útil.", fa: "سیگنال color اشتباه background است، نه methylation signal مفید." } },
      { n: 13, title: { en: "Noob advantages", es: "Ventajas de Noob", fa: "مزیت‌های Noob" }, body: { en: "OOB gives tens of thousands of background features and also helps with color bias.", es: "OOB aporta decenas de miles de features de background y también ayuda con color bias.", fa: "OOB ده‌ها هزار feature برای background می‌دهد و به color bias هم کمک می‌کند." } }
    ],
    watch: {
      title: { en: "Report watch: Noob is not the same as global normalization", es: "Report watch: Noob no es lo mismo que normalización global", fa: "نکته گزارش: Noob با normalization global یکی نیست" },
      include: { en: ["Noob corrects background using out-of-band signals.", "It is a conservative baseline choice when you are not confident about stronger assumptions.", "It may not fully align sample distributions like quantile normalization."], es: ["Noob corrige background usando señales out-of-band.", "Es una opción basal conservadora cuando no tienes confianza en asunciones más fuertes.", "Puede no alinear distribuciones de muestras tanto como quantile normalization."], fa: ["Noob با out-of-band signalها background را اصلاح می‌کند.", "وقتی به فرض‌های قوی‌تر مطمئن نیستید، baseline محافظه‌کارانه است.", "ممکن است مثل quantile normalization توزیع sampleها را کاملاً align نکند."] },
      trap: { en: "Do not claim Noob removes every source of technical variation. It mainly targets background and dye/color bias.", es: "No digas que Noob elimina toda variación técnica. Principalmente trata background y dye/color bias.", fa: "نگویید Noob همه variation فنی را حذف می‌کند؛ عمدتاً background و dye/color bias را هدف می‌گیرد." },
      model: { en: "Noob was considered because it estimates non-specific fluorescence using out-of-band signals from Infinium I probes. This is more robust than relying only on negative controls and avoids hard truncation of weak intensities to zero.", es: "Noob se consideró porque estima fluorescencia no específica usando señales out-of-band de probes Infinium I. Esto es más robusto que depender solo de negative controls y evita truncar señales débiles a cero.", fa: "Noob بررسی شد چون fluorescence غیر اختصاصی را با out-of-band signalهای probeهای Infinium I تخمین می‌زند. این از تکیه صرف بر negative control قوی‌تر است و از صفر شدن hard-truncation intensityهای ضعیف جلوگیری می‌کند." }
    },
    codeSteps: ["noobSwap"]
  },
  {
    id: "infinium-bias",
    eyebrow: { en: "4 · probe chemistry bias", es: "4 · sesgo por química de probe", fa: "۴ · bias شیمی probe" },
    title: { en: "Infinium I and II distributions differ for biological and technical reasons", es: "Infinium I y II tienen distribuciones distintas por razones biológicas y técnicas", fa: "توزیع Infinium I و II به دلایل زیستی و فنی فرق دارد" },
    body: { en: "Slides 14-16 explain Infinium I/II-type bias and peak-based correction. The professor highlights two causes: Type I probes are enriched in CpG-rich/promoter-like regions, while Type II probes have degenerate bases that weaken binding and increase variability.", es: "Las slides 14-16 explican el bias Infinium I/II y peak-based correction. El profesor remarca dos causas: Type I se enriquecen en regiones CpG-rich/promoter-like, mientras Type II tienen bases degeneradas que debilitan el binding y aumentan variabilidad.", fa: "اسلایدهای ۱۴ تا ۱۶ bias نوع Infinium I/II و peak-based correction را توضیح می‌دهند. استاد دو علت را برجسته می‌کند: Type I در regionهای CpG-rich/promoter-like غنی است، و Type II baseهای degenerative دارد که binding را ضعیف و variability را زیاد می‌کند." },
    slides: [
      { n: 14, title: { en: "Infinium I/II bias", es: "Bias Infinium I/II", fa: "bias Infinium I/II" }, body: { en: "The same methylation biology is measured through two probe chemistries with different distributions.", es: "La misma biología de metilación se mide con dos químicas de probe con distribuciones distintas.", fa: "یک biology methylation از دو chemistry متفاوت با distributionهای متفاوت اندازه‌گیری می‌شود." } },
      { n: 15, title: { en: "Peak-based correction", es: "Peak-based correction", fa: "peak-based correction" }, body: { en: "PBC aligns peaks, but depends on a clearly bimodal distribution.", es: "PBC alinea picos, pero depende de una distribución claramente bimodal.", fa: "PBC peakها را align می‌کند، اما به distribution واضحاً bimodal وابسته است." } },
      { n: 16, title: { en: "PBC limitation", es: "Limitación PBC", fa: "محدودیت PBC" }, body: { en: "Cancer or other altered samples may not show clean bimodal peaks.", es: "Cáncer u otras muestras alteradas pueden no mostrar picos bimodales limpios.", fa: "cancer یا sampleهای altered ممکن است peak bimodal تمیز نداشته باشند." } }
    ],
    watch: {
      title: { en: "Report watch: chemistry bias is not just a technical nuisance", es: "Report watch: chemistry bias no es solo molestia técnica", fa: "نکته گزارش: chemistry bias فقط مزاحمت فنی نیست" },
      include: { en: ["Mention biological enrichment: Type I and Type II probes are not distributed identically across genomic contexts.", "Mention technical binding differences: Type II degenerate bases can shift peaks inward and increase variance.", "Justify why comparing Type I and Type II without correction can create false interpretation."], es: ["Menciona enriquecimiento biológico: Type I y Type II no se distribuyen igual en contextos genómicos.", "Menciona diferencias técnicas de binding: bases degeneradas en Type II desplazan picos hacia el centro y aumentan varianza.", "Justifica por qué comparar Type I y Type II sin corrección puede generar falsa interpretación."], fa: ["غنای زیستی را ذکر کنید: Type I و Type II در contextهای ژنومی یکسان توزیع نشده‌اند.", "تفاوت فنی binding را ذکر کنید: baseهای degenerate در Type II peakها را به داخل جابه‌جا و variance را بیشتر می‌کنند.", "توضیح دهید چرا مقایسه بدون correction ممکن است interpretation غلط بسازد."] },
      trap: { en: "Do not call every Type I/II difference an artifact: part is biological genomic-context enrichment.", es: "No llames artifact a toda diferencia Type I/II: una parte es enriquecimiento biológico por contexto genómico.", fa: "هر تفاوت Type I/II را artifact ننامید؛ بخشی غنای زیستی context ژنومی است." },
      model: { en: "Infinium probe-type bias combines biological context and technical design. Type I probes are more represented in CpG-rich regions, while Type II probes have design constraints that can reduce binding specificity and increase variability. Therefore, Type I and Type II beta distributions should be inspected separately before choosing normalization.", es: "El probe-type bias de Infinium combina contexto biológico y diseño técnico. Type I están más representadas en regiones CpG-rich, mientras Type II tienen restricciones de diseño que pueden reducir especificidad de binding y aumentar variabilidad. Por tanto, las distribuciones beta de Type I y Type II deben inspeccionarse por separado antes de elegir normalización.", fa: "probe-type bias در Infinium ترکیبی از context زیستی و طراحی فنی است. Type I در regionهای CpG-rich بیشتر حضور دارد، در حالی که Type II محدودیت طراحی دارد که می‌تواند specificity binding را کم و variability را زیاد کند. بنابراین distribution beta برای Type I و Type II باید جداگانه بررسی شود." }
    },
    codeSteps: ["splitTypes", "typeDensities"]
  },
  {
    id: "quantile",
    eyebrow: { en: "5 · quantile logic", es: "5 · lógica quantile", fa: "۵ · منطق quantile" },
    title: { en: "Quantile normalization is powerful only when its assumption is plausible", es: "Quantile normalization es potente solo si su asunción es plausible", fa: "quantile normalization فقط وقتی قوی است که فرضش قابل قبول باشد" },
    body: { en: "Slides 17-24 show rank-based quantile normalization, subset quantile logic and the key warning: if real genome-wide differences are expected, a global distribution-forcing method can create misleading results.", es: "Las slides 17-24 muestran normalización quantile basada en ranks, lógica de subset quantile y la advertencia clave: si esperas diferencias genome-wide reales, forzar distribuciones globales puede crear resultados engañosos.", fa: "اسلایدهای ۱۷ تا ۲۴ quantile normalization بر اساس rank، subset quantile و هشدار اصلی را نشان می‌دهند: اگر تفاوت‌های واقعی genome-wide انتظار می‌رود، forcing توزیع‌های global می‌تواند نتیجه گمراه‌کننده بسازد." },
    slides: [
      { n: 17, title: { en: "Quantile algorithm", es: "Algoritmo quantile", fa: "الگوریتم quantile" }, body: { en: "Sort each sample, average ranks, then restore original order.", es: "Ordena cada muestra, promedia ranks y restaura el orden original.", fa: "هر sample را sort کن، rankها را average کن، سپس order اصلی را برگردان." } },
      { n: 18, title: { en: "Can normalize probe type", es: "Puede normalizar tipo de probe", fa: "می‌تواند probe type را normalize کند" }, body: { en: "Used to align Type I/II distributions within arrays.", es: "Se usa para alinear distribuciones Type I/II dentro de arrays.", fa: "برای align کردن Type I/II distribution درون array استفاده می‌شود." } },
      { n: 19, title: { en: "Global assumption", es: "Asunción global", fa: "فرض global" }, body: { en: "Assumes sample distributions should be statistically similar.", es: "Asume que las distribuciones de las muestras deben ser estadísticamente similares.", fa: "فرض می‌کند distribution sampleها باید آماری مشابه باشند." } },
      { n: 20, title: { en: "True regional differences", es: "Diferencias regionales reales", fa: "تفاوت‌های regional واقعی" }, body: { en: "CpG-rich and CpG-poor regions can have real biological differences.", es: "Regiones CpG-rich y CpG-poor pueden tener diferencias biológicas reales.", fa: "regionهای CpG-rich و CpG-poor می‌توانند تفاوت زیستی واقعی داشته باشند." } },
      { n: 21, title: { en: "Subset quantile", es: "Subset quantile", fa: "subset quantile" }, body: { en: "Anchor probes are selected to satisfy the assumption better.", es: "Anchor probes se seleccionan para cumplir mejor la asunción.", fa: "anchor probeها برای برآورده کردن بهتر فرض انتخاب می‌شوند." } },
      { n: 22, title: { en: "Probe-type anchors", es: "Anchors por probe type", fa: "anchor بر اساس probe type" }, body: { en: "SWAN-like logic uses biologically comparable subsets.", es: "La lógica tipo SWAN usa subconjuntos biológicamente comparables.", fa: "منطق SWAN-like از subsetهای زیستی قابل مقایسه استفاده می‌کند." } },
      { n: 23, title: { en: "Large biological differences", es: "Grandes diferencias biológicas", fa: "تفاوت زیستی بزرگ" }, body: { en: "If tumor versus normal is expected to be globally different, forcing equality may erase signal.", es: "Si tumor vs normal debería diferir globalmente, forzar igualdad puede borrar señal.", fa: "اگر tumor vs normal باید globally متفاوت باشد، forced equality می‌تواند signal را حذف کند." } },
      { n: 24, title: { en: "Misleading results", es: "Resultados engañosos", fa: "نتایج گمراه‌کننده" }, body: { en: "The warning slide: subset quantile can mislead when applied under wrong assumptions.", es: "Slide de advertencia: subset quantile puede engañar si se aplica bajo asunciones incorrectas.", fa: "اسلاید هشدار: اگر فرض‌ها غلط باشد، subset quantile می‌تواند گمراه‌کننده باشد." } }
    ],
    watch: {
      title: { en: "Report watch: justify quantile by expected biology", es: "Report watch: justifica quantile con biología esperada", fa: "نکته گزارش: quantile را با biology مورد انتظار توجیه کن" },
      include: { en: ["Quantile forces distributions to be more similar.", "Use it when differences are expected to be subtle or sparse, not global.", "Avoid or be cautious for tumor/normal or demethylating-treatment designs."], es: ["Quantile fuerza distribuciones más similares.", "Úsala cuando esperas diferencias sutiles o dispersas, no globales.", "Evítala o ten cautela en diseños tumor/normal o tratamientos demethylating."], fa: ["quantile توزیع‌ها را بیشتر شبیه هم می‌کند.", "وقتی تفاوت‌ها subtle یا sparse هستند استفاده کن، نه global.", "در tumor/normal یا demethylating treatment احتیاط کن یا استفاده نکن."] },
      trap: { en: "Do not choose quantile only because the after-plot looks prettier. Ask whether the removed difference could be biology.", es: "No elijas quantile solo porque el plot después se ve más bonito. Pregunta si la diferencia removida podía ser biología.", fa: "فقط چون after-plot قشنگ‌تر است quantile انتخاب نکنید؛ بپرسید تفاوت حذف‌شده ممکن است biology باشد؟" },
      model: { en: "Quantile normalization was selected only after considering the expected methylation biology. Because the expected effects were subtle and not genome-wide, the assumption of similar global distributions was considered acceptable; otherwise, functional normalization or Noob would be safer.", es: "Quantile normalization se seleccionó solo después de considerar la biología de metilación esperada. Como los efectos esperados eran sutiles y no genome-wide, la asunción de distribuciones globales similares se consideró aceptable; de lo contrario, functional normalization o Noob serían más seguros.", fa: "quantile normalization فقط پس از بررسی biology مورد انتظار انتخاب شد. چون effectها subtle و نه genome-wide بودند، فرض distribution global مشابه قابل قبول در نظر گرفته شد؛ در غیر این صورت functional normalization یا Noob امن‌تر بود." }
    },
    codeSteps: ["preprocessQuantile", "comparePlots"]
  },
  {
    id: "method-choice",
    eyebrow: { en: "6 · choosing and reporting", es: "6 · elegir y reportar", fa: "۶ · انتخاب و گزارش" },
    title: { en: "The final report needs a normalization decision, not a list of functions", es: "El report necesita una decisión de normalización, no una lista de funciones", fa: "report به تصمیم normalization نیاز دارد، نه فقط لیست functionها" },
    body: { en: "Slides 25-30 and the end of the transcript are very practical: inspect the raw data, try the relevant methods, compare density/SD/boxplots, and choose the method that removes unwanted variation without contradicting expected biology.", es: "Las slides 25-30 y el final de la transcripción son muy prácticos: inspecciona datos raw, prueba métodos relevantes, compara density/SD/boxplots y elige el método que remueve variación no deseada sin contradecir la biología esperada.", fa: "اسلایدهای ۲۵ تا ۳۰ و پایان رونوشت بسیار عملی هستند: داده خام را inspect کن، روش‌های مرتبط را امتحان کن، density/SD/boxplot را مقایسه کن، و روشی را انتخاب کن که variation ناخواسته را بدون تضاد با biology مورد انتظار حذف کند." },
    slides: [
      { n: 25, title: { en: "Bad quantile example", es: "Ejemplo malo de quantile", fa: "مثال بد quantile" }, body: { en: "5-aza treatment should demethylate; symmetric hyper/hypo volcano results are suspicious.", es: "5-aza debería demetilar; resultados volcano simétricos hyper/hypo son sospechosos.", fa: "5-aza باید demethylate کند؛ نتیجه volcano متقارن hyper/hypo مشکوک است." } },
      { n: 26, title: { en: "Functional normalization", es: "Functional normalization", fa: "functional normalization" }, body: { en: "Uses control probes and OOB to normalize while being safer for complex biology.", es: "Usa control probes y OOB para normalizar siendo más segura ante biología compleja.", fa: "از control probe و OOB برای normalization استفاده می‌کند و برای biology پیچیده امن‌تر است." } },
      { n: 27, title: { en: "Practical guide", es: "Guía práctica", fa: "راهنمای عملی" }, body: { en: "No normalization first; if normalizing, use functional or quantile depending on assumptions.", es: "Primero mira sin normalización; si normalizas, usa functional o quantile según asunciones.", fa: "اول بدون normalization بررسی کن؛ اگر normalize می‌کنی بسته به فرض‌ها functional یا quantile را بزن." } },
      { n: 28, title: { en: "Effects to inspect", es: "Efectos a inspeccionar", fa: "effectهایی برای بررسی" }, body: { en: "Compare density of mean beta, density of SD, and boxplots.", es: "Compara density de media beta, density de SD y boxplots.", fa: "density میانگین beta، density SD و boxplotها را مقایسه کن." } },
      { n: 29, title: { en: "minfi functions", es: "Funciones minfi", fa: "functionهای minfi" }, body: { en: "preprocessNoob, preprocessQuantile, preprocessSWAN and preprocessFunnorm produce different object classes.", es: "preprocessNoob, preprocessQuantile, preprocessSWAN y preprocessFunnorm producen clases de objeto distintas.", fa: "preprocessNoob، preprocessQuantile، preprocessSWAN و preprocessFunnorm classهای متفاوتی می‌دهند." } },
      { n: 30, title: { en: "Plot comparison", es: "Comparación de plots", fa: "مقایسه plotها" }, body: { en: "The practical output is the visual evidence for the report choice.", es: "La salida práctica es la evidencia visual para elegir en el report.", fa: "خروجی عملی evidence بصری برای انتخاب در report است." } }
    ],
    watch: {
      title: { en: "Report watch: the professor's decision rule", es: "Report watch: regla de decisión del profesor", fa: "نکته گزارش: rule تصمیم استاد" },
      include: { en: ["If confident and expected differences are subtle/sparse: quantile can be strong and sensitive.", "If biology may be globally different or samples are complex: functional normalization is safer.", "If data quality is uncertain and you want a conservative baseline: Noob/background correction is broadly accepted."], es: ["Si tienes confianza y esperas diferencias sutiles/dispersas: quantile puede ser fuerte y sensible.", "Si la biología puede ser globalmente distinta o las muestras son complejas: functional normalization es más segura.", "Si la calidad es incierta y quieres una base conservadora: Noob/background correction es ampliamente aceptada."], fa: ["اگر مطمئن هستی و تفاوت‌ها subtle/sparse هستند: quantile قوی و حساس است.", "اگر biology ممکن است globally متفاوت باشد یا sampleها پیچیده باشند: functional normalization امن‌تر است.", "اگر کیفیت داده نامطمئن است و baseline محافظه‌کارانه می‌خواهی: Noob/background correction پذیرفته‌شده است."] },
      trap: { en: "Do not report only 'we normalized'. Name the function, input object, output object, plots inspected and why the method fits the expected biology.", es: "No reportes solo 'normalizamos'. Nombra función, objeto input, objeto output, plots inspeccionados y por qué el método encaja con la biología esperada.", fa: "فقط ننویسید 'normalize کردیم'. function، input object، output object، plotهای بررسی‌شده و دلیل سازگاری روش با biology را نام ببرید." },
      model: { en: "We compared raw and normalized distributions using mean-beta densities, standard-deviation densities and boxplots. Quantile normalization was retained because the dataset did not show expected genome-wide biological shifts and the method reduced probe-type and sample-distribution differences without producing an implausible biological pattern.", es: "Comparamos distribuciones raw y normalizadas usando densities de media beta, densities de desviación estándar y boxplots. Se retuvo quantile normalization porque el dataset no mostraba shifts biológicos genome-wide esperados y el método redujo diferencias por tipo de probe y distribución de muestras sin producir un patrón biológico implausible.", fa: "ما distribution خام و normalized را با density میانگین beta، density انحراف معیار و boxplot مقایسه کردیم. quantile normalization نگه داشته شد چون dataset تغییرات زیستی genome-wide مورد انتظار نشان نمی‌داد و روش تفاوت‌های probe-type و sample-distribution را بدون ساختن الگوی زیستی نامعقول کاهش داد." }
    },
    codeSteps: ["methodSwap", "finalReportFigure"]
  }
];

const codeStepMap = {
  setup: {
    label: { en: "1 · load objects", es: "1 · cargar objetos", fa: "۱ · load objectها" },
    title: { en: "Start from the raw MethylSet", es: "Empezar desde MethylSet raw", fa: "شروع از MethylSet خام" },
    code: `rm(list=ls())\nsetwd("~/Dropbox/DRD_2026/4")\nsuppressMessages(library(minfi))\nload("~/Dropbox/DRD_2026/3/MSet_raw.RData")\nMSet.raw`,
    interpretation: { en: "The practical begins with MSet.raw generated previously by preprocessRaw(). This object has 485,512 CpG loci and 8 samples, and it has no normalization or background correction yet.", es: "La práctica empieza con MSet.raw generado antes con preprocessRaw(). Este objeto tiene 485,512 loci CpG y 8 muestras, y todavía no tiene normalización ni background correction.", fa: "practical با MSet.raw شروع می‌شود که قبلاً با preprocessRaw ساخته شده. این object شامل 485,512 locus CpG و ۸ sample است و هنوز normalization یا background correction ندارد." },
    report: { en: "State that beta/M values were extracted from the raw MethylSet before normalization.", es: "Indica que beta/M values se extrajeron del MethylSet raw antes de normalizar.", fa: "بگویید beta/M values از MethylSet خام قبل از normalization استخراج شدند." }
  },
  extractBetaM: {
    label: { en: "2 · beta and M", es: "2 · beta y M", fa: "۲ · beta و M" },
    title: { en: "Extract methylation values with accessors", es: "Extraer valores de metilación con accessors", fa: "استخراج methylation value با accessor" },
    code: `beta <- getBeta(MSet.raw)\nclass(beta)\ndim(beta)\nM <- getM(MSet.raw)\ndim(M)\nsummary(beta)\nsummary(M)`,
    interpretation: { en: "getBeta() and getM() return matrices: CpG loci in rows and samples in columns. Beta values range from 0 to 1; M-values can include -Inf/Inf when one channel is zero.", es: "getBeta() y getM() devuelven matrices: loci CpG en filas y muestras en columnas. Beta va de 0 a 1; M puede incluir -Inf/Inf cuando un canal es cero.", fa: "getBeta و getM ماتریس برمی‌گردانند: locusهای CpG در ردیف و sampleها در ستون. beta بین ۰ و ۱ است؛ M وقتی یکی از channelها صفر باشد می‌تواند -Inf/Inf داشته باشد." },
    report: { en: "Use accessors; do not manually recompute from slots in the report workflow.", es: "Usa accessors; no recomputes manualmente desde slots en el workflow del report.", fa: "از accessorها استفاده کنید؛ در workflow گزارش از slotها دستی محاسبه نکنید." }
  },
  densityBetaM: {
    label: { en: "3 · density plots", es: "3 · density plots", fa: "۳ · density plot" },
    title: { en: "Use apply() row-wise and density()", es: "Usar apply() por filas y density()", fa: "استفاده row-wise از apply و density" },
    code: `mean_of_beta <- apply(beta, 1, mean, na.rm = TRUE)\nd_mean_of_beta <- density(mean_of_beta)\nplot(d_mean_of_beta, main = "Density of Beta Values", col = "orange")\nmean_of_M <- apply(M, 1, mean, na.rm = TRUE)\nd_mean_of_M <- density(mean_of_M)\nplot(d_mean_of_M, main = "Density of M Values", col = "purple")`,
    interpretation: { en: "apply(beta, 1, mean) computes one mean per CpG across samples. density() turns that vector into a distribution object that can be plotted.", es: "apply(beta, 1, mean) calcula una media por CpG a través de las muestras. density() convierte ese vector en un objeto de distribución que se puede plotear.", fa: "apply(beta, 1, mean) برای هر CpG میانگین بین sampleها را می‌سازد. density آن vector را به object توزیع قابل plot تبدیل می‌کند." },
    report: { en: "The density shape is used to inspect global methylation distribution before selecting normalization.", es: "La forma de la density se usa para inspeccionar la distribución global de metilación antes de elegir normalización.", fa: "شکل density برای بررسی distribution کلی methylation قبل از انتخاب normalization استفاده می‌شود." }
  },
  boxplot: {
    label: { en: "4 · boxplots", es: "4 · boxplots", fa: "۴ · boxplotها" },
    title: { en: "Boxplots compare sample distributions", es: "Boxplots comparan distribuciones de muestras", fa: "boxplotها distribution sampleها را مقایسه می‌کنند" },
    code: `boxplot(beta, main = "beta values")\npar(mfrow = c(1, 2))\nplot(d_mean_of_beta, main = "Density of Beta Values", col = "blue")\nboxplot(beta)`,
    interpretation: { en: "For each sample, inspect median, interquartile range and outliers. Differences can suggest technical variability, but do not identify the cause by themselves.", es: "Para cada muestra, inspecciona mediana, rango intercuartílico y outliers. Las diferencias pueden sugerir variabilidad técnica, pero no identifican la causa por sí solas.", fa: "برای هر sample، median، IQR و outlierها را بررسی کن. تفاوت‌ها می‌توانند technical variability را نشان دهند، اما علت را به‌تنهایی مشخص نمی‌کنند." },
    report: { en: "Report what changed after normalization: medians, IQRs, outlier pattern and density shifts.", es: "Reporta qué cambió tras normalizar: medianas, IQRs, patrón de outliers y shifts de density.", fa: "گزارش کنید بعد از normalization چه تغییر کرد: medianها، IQRها، outlierها و shiftهای density." }
  },
  savePlots: {
    label: { en: "5 · save figures", es: "5 · guardar figuras", fa: "۵ · ذخیره figure" },
    title: { en: "Save the diagnostic plot for the report", es: "Guardar el plot diagnóstico para el report", fa: "ذخیره diagnostic plot برای report" },
    code: `pdf("Picture1.pdf", width = 10, height = 5)\npar(mfrow = c(1, 2))\nplot(d_mean_of_beta, main = "Density of Beta Values", col = "blue")\nboxplot(beta)\ndev.off()`,
    interpretation: { en: "pdf() opens a graphics device; dev.off() closes it. If you forget dev.off(), the file may remain incomplete.", es: "pdf() abre un dispositivo gráfico; dev.off() lo cierra. Si olvidas dev.off(), el archivo puede quedar incompleto.", fa: "pdf یک graphics device باز می‌کند؛ dev.off آن را می‌بندد. اگر dev.off فراموش شود، فایل ممکن است ناقص بماند." },
    report: { en: "Save one compact multi-panel figure comparing raw and normalized data.", es: "Guarda una figura multipanel compacta comparando raw y normalized.", fa: "یک figure چندپنلی فشرده برای مقایسه raw و normalized ذخیره کنید." },
    figures: [
      {
        src: plotPicture1,
        title: { en: "Picture1.pdf diagnostic output", es: "Salida diagnóstica Picture1.pdf", fa: "خروجی diagnostic فایل Picture1.pdf" },
        caption: { en: "The saved plot combines the beta-density curve with the per-sample beta boxplots generated by the code in this step.", es: "El plot guardado combina la curva de densidad beta con los boxplots de beta por muestra generados por el código de este paso.", fa: "این plot ذخیره‌شده density curve مربوط به beta را با boxplotهای beta برای sampleها که همین کد تولید می‌کند ترکیب می‌کند." }
      }
    ]
  },
  noobSwap: {
    label: { en: "6 · noob option", es: "6 · opción noob", fa: "۶ · گزینه noob" },
    title: { en: "Use preprocessNoob for background correction", es: "Usar preprocessNoob para background correction", fa: "استفاده از preprocessNoob برای background correction" },
    code: `load("~/Dropbox/DRD_2026/3/RGset.RData")\nnoob_results <- preprocessNoob(RGset)\nbeta_noob <- getBeta(noob_results)`,
    interpretation: { en: "This code mirrors the quantile workflow but swaps the normalization function. In the transcript, the professor asks students to replace preprocessQuantile with preprocessNoob and compare the plots.", es: "Este código replica el workflow de quantile pero cambia la función de normalización. En la transcripción, el profesor pide reemplazar preprocessQuantile por preprocessNoob y comparar plots.", fa: "این کد workflow quantile را تکرار می‌کند اما function normalization را عوض می‌کند. در رونوشت، استاد از دانشجوها می‌خواهد preprocessQuantile را با preprocessNoob جایگزین کنند و plotها را مقایسه کنند." },
    report: { en: "Noob should be discussed as background correction, not as a full distribution-forcing method.", es: "Noob debe discutirse como background correction, no como método que fuerza toda la distribución.", fa: "Noob را به عنوان background correction توضیح دهید، نه methodی که کل distribution را force می‌کند." }
  },
  splitTypes: {
    label: { en: "7 · split probe types", es: "7 · separar tipos de probe", fa: "۷ · جداسازی probe type" },
    title: { en: "Use the manifest to split Type I and Type II probes", es: "Usar el manifest para separar Type I y Type II", fa: "استفاده از manifest برای جداسازی Type I و Type II" },
    code: `load("~/Dropbox/DRD_2026/2/Illumina450Manifest_clean.RData")\ndfI <- Illumina450Manifest_clean[Illumina450Manifest_clean$Infinium_Design_Type == "I", ]\ndfI <- droplevels(dfI)\ndfII <- Illumina450Manifest_clean[Illumina450Manifest_clean$Infinium_Design_Type == "II", ]\ndfII <- droplevels(dfII)\nbeta_I <- beta[rownames(beta) %in% dfI$IlmnID, ]\nbeta_II <- beta[rownames(beta) %in% dfII$IlmnID, ]`,
    interpretation: { en: "The rownames of beta are CpG/IlmnID values, so %in% connects the beta matrix to the manifest classification.", es: "Los rownames de beta son valores CpG/IlmnID, por eso %in% conecta la matriz beta con la clasificación del manifest.", fa: "rownames ماتریس beta همان CpG/IlmnID است؛ بنابراین %in% ماتریس beta را به classification در manifest وصل می‌کند." },
    report: { en: "This is the key step for probe-type-bias plots.", es: "Este es el paso clave para plots de probe-type bias.", fa: "این قدم اصلی برای plotهای probe-type bias است." }
  },
  typeDensities: {
    label: { en: "8 · Type I/II densities", es: "8 · densities Type I/II", fa: "۸ · density نوع I/II" },
    title: { en: "Overlay Type I and Type II distributions", es: "Superponer distribuciones Type I y Type II", fa: "روی‌هم انداختن distribution نوع I و II" },
    code: `mean_of_beta_I <- apply(beta_I, 1, mean)\nmean_of_beta_II <- apply(beta_II, 1, mean)\nd_mean_of_beta_I <- density(mean_of_beta_I, na.rm = TRUE)\nd_mean_of_beta_II <- density(mean_of_beta_II, na.rm = TRUE)\nplot(d_mean_of_beta_I, col = "blue")\nlines(d_mean_of_beta_II, col = "red")`,
    interpretation: { en: "plot() creates the base density; lines() overlays the second density. The professor says overlapping curves is more informative than separate plots.", es: "plot() crea la density base; lines() superpone la segunda. El profesor dice que curvas superpuestas son más informativas que plots separados.", fa: "plot density پایه را می‌سازد؛ lines density دوم را روی آن می‌اندازد. استاد می‌گوید curveهای overlap شده از plotهای جدا informativeترند." },
    report: { en: "Describe both peak height and peak position differences.", es: "Describe diferencias de altura y posición de picos.", fa: "هم تفاوت peak height و هم peak position را توصیف کنید." }
  },
  preprocessQuantile: {
    label: { en: "9 · preprocessQuantile", es: "9 · preprocessQuantile", fa: "۹ · preprocessQuantile" },
    title: { en: "Run quantile normalization from the RGSet", es: "Ejecutar quantile normalization desde RGSet", fa: "اجرای quantile normalization از RGSet" },
    code: `load("~/Dropbox/DRD_2026/3/RGset.RData")\npreprocessQuantile_results <- preprocessQuantile(RGset)\nclass(preprocessQuantile_results)\npreprocessQuantile_results\nbeta_preprocessQuantile <- getBeta(preprocessQuantile_results)`,
    interpretation: { en: "The output is a GenomicRatioSet, closer to downstream statistical analysis. The same getBeta() accessor extracts normalized beta values.", es: "La salida es un GenomicRatioSet, más cercano al análisis estadístico downstream. El mismo accessor getBeta() extrae beta values normalizados.", fa: "خروجی GenomicRatioSet است، نزدیک‌تر به تحلیل آماری downstream. همان accessor یعنی getBeta مقادیر beta normalized را استخراج می‌کند." },
    report: { en: "Name the function and output object class in methods.", es: "Nombra la función y la clase de objeto output en métodos.", fa: "در methods نام function و class خروجی را بگویید." }
  },
  comparePlots: {
    label: { en: "10 · compare raw/normalized", es: "10 · comparar raw/normalized", fa: "۱۰ · مقایسه raw/normalized" },
    title: { en: "Build the six-panel comparison", es: "Construir comparación de seis paneles", fa: "ساخت مقایسه شش‌پنلی" },
    code: `beta_preprocessQuantile_I <- beta_preprocessQuantile[rownames(beta_preprocessQuantile) %in% dfI$IlmnID, ]\nbeta_preprocessQuantile_II <- beta_preprocessQuantile[rownames(beta_preprocessQuantile) %in% dfII$IlmnID, ]\nmean_of_beta_preprocessQuantile_I <- apply(beta_preprocessQuantile_I, 1, mean)\nmean_of_beta_preprocessQuantile_II <- apply(beta_preprocessQuantile_II, 1, mean)\nd_mean_of_beta_preprocessQuantile_I <- density(mean_of_beta_preprocessQuantile_I, na.rm = TRUE)\nd_mean_of_beta_preprocessQuantile_II <- density(mean_of_beta_preprocessQuantile_II, na.rm = TRUE)\nsd_of_beta_preprocessQuantile_I <- apply(beta_preprocessQuantile_I, 1, sd)\nsd_of_beta_preprocessQuantile_II <- apply(beta_preprocessQuantile_II, 1, sd)`,
    interpretation: { en: "The same diagnostic statistics are computed for raw and normalized beta values so the comparison is fair.", es: "Las mismas estadísticas diagnósticas se calculan para beta raw y normalizada para que la comparación sea justa.", fa: "همان statisticهای diagnostic برای beta خام و normalized محاسبه می‌شوند تا مقایسه منصفانه باشد." },
    report: { en: "Report whether Type I/II peaks and sample boxplots became more comparable.", es: "Reporta si los picos Type I/II y boxplots de muestras se volvieron más comparables.", fa: "گزارش کنید آیا peakهای Type I/II و boxplot sampleها قابل مقایسه‌تر شدند." }
  },
  methodSwap: {
    label: { en: "11 · swap methods", es: "11 · cambiar métodos", fa: "۱۱ · تعویض method" },
    title: { en: "Try another minfi normalization with the same plotting code", es: "Probar otra normalización minfi con el mismo código de plots", fa: "امتحان method دیگر minfi با همان کد plot" },
    code: `noob_results <- preprocessNoob(RGset)\nfun_results <- preprocessFunnorm(RGset)\n# Then reuse getBeta(), Type I/II subsetting, density(), sd(), and boxplot()`,
    interpretation: { en: "The professor explicitly tells students that the code is the same: change the preprocessing function, regenerate beta values and interpret the final plots.", es: "El profesor dice explícitamente que el código es el mismo: cambia la función de preprocesamiento, regenera beta values e interpreta los plots finales.", fa: "استاد صریح می‌گوید کد همان است: function preprocessing را عوض کن، beta را دوباره بساز و plotهای نهایی را تفسیر کن." },
    report: { en: "The method comparison is part of the reasoning, not just extra code.", es: "La comparación de métodos es parte del razonamiento, no solo código extra.", fa: "مقایسه method بخشی از reasoning است، نه فقط کد اضافه." },
    figures: [
      {
        src: plotComparisonNoob,
        title: { en: "Raw vs preprocessNoob", es: "Raw vs preprocessNoob", fa: "raw در برابر preprocessNoob" },
        caption: { en: "Same six-panel diagnostic layout after swapping the preprocessing function to preprocessNoob.", es: "Mismo layout diagnóstico de seis paneles después de cambiar la función de preprocesamiento a preprocessNoob.", fa: "همان layout diagnostic شش‌پنلی بعد از جایگزینی function preprocessing با preprocessNoob." }
      },
      {
        src: plotComparisonSwan,
        title: { en: "Raw vs preprocessSWAN", es: "Raw vs preprocessSWAN", fa: "raw در برابر preprocessSWAN" },
        caption: { en: "Use this to compare how SWAN affects Type I/II beta-density and variability patterns.", es: "Úsalo para comparar cómo SWAN afecta los patrones de densidad beta y variabilidad Type I/II.", fa: "از این برای مقایسه اثر SWAN روی patternهای beta-density و variability نوع I/II استفاده کنید." }
      },
      {
        src: plotComparisonFunnorm,
        title: { en: "Raw vs preprocessFunnorm", es: "Raw vs preprocessFunnorm", fa: "raw در برابر preprocessFunnorm" },
        caption: { en: "Functional normalization is shown as an alternative method comparison for the same raw dataset.", es: "Functional normalization se muestra como comparación metodológica alternativa para el mismo dataset raw.", fa: "functional normalization به‌عنوان comparison method جایگزین برای همان dataset خام نشان داده می‌شود." }
      }
    ]
  },
  finalReportFigure: {
    label: { en: "12 · final figure", es: "12 · figura final", fa: "۱۲ · figure نهایی" },
    title: { en: "Save one final comparison figure", es: "Guardar una figura final comparativa", fa: "ذخیره یک figure نهایی مقایسه‌ای" },
    code: `pdf("Plot_comparison_raw_preprocessQuantile.pdf", height = 7, width = 15)\npar(mfrow = c(2, 3))\nplot(d_mean_of_beta_I, col = "blue", main = "raw beta", xlim = c(0, 1), ylim = c(0, 5))\nlines(d_mean_of_beta_II, col = "red")\nplot(d_sd_of_beta_I, col = "blue", main = "raw sd", xlim = c(0, 0.6), ylim = c(0, 60))\nlines(d_sd_of_beta_II, col = "red")\nboxplot(beta, ylim = c(0, 1))\nplot(d_mean_of_beta_preprocessQuantile_I, col = "blue", main = "preprocessQuantile beta", xlim = c(0, 1), ylim = c(0, 5))\nlines(d_mean_of_beta_preprocessQuantile_II, col = "red")\nplot(d_sd_of_beta_preprocessQuantile_I, col = "blue", main = "preprocessQuantile sd", xlim = c(0, 0.6), ylim = c(0, 60))\nlines(d_sd_of_beta_preprocessQuantile_II, col = "red")\nboxplot(beta_preprocessQuantile, ylim = c(0, 1))\ndev.off()`,
    interpretation: { en: "This is the report-ready evidence: raw versus normalized Type I/II mean beta, Type I/II variability, and sample distributions.", es: "Esta es la evidencia lista para report: raw vs normalizado para media beta Type I/II, variabilidad Type I/II y distribuciones de muestras.", fa: "این evidence آماده report است: raw در برابر normalized برای mean beta نوع I/II، variability نوع I/II و distribution sampleها." },
    report: { en: "Explain the plot, do not just paste it.", es: "Explica el plot, no solo lo pegues.", fa: "plot را توضیح بدهید، فقط paste نکنید." },
    figures: [
      {
        src: plotComparisonQuantile,
        title: { en: "Raw vs preprocessQuantile", es: "Raw vs preprocessQuantile", fa: "raw در برابر preprocessQuantile" },
        caption: { en: "The final report figure compares raw beta density, raw SD density and raw boxplots against the same diagnostics after preprocessQuantile.", es: "La figura final del report compara density beta raw, density SD raw y boxplots raw contra los mismos diagnósticos después de preprocessQuantile.", fa: "figure نهایی report، density beta خام، density SD خام و boxplotهای خام را با همان diagnosticها پس از preprocessQuantile مقایسه می‌کند." }
      }
    ]
  }
};

const checks = [
  { q: { en: "Which value is bounded between 0 and 1?", es: "¿Qué valor está acotado entre 0 y 1?", fa: "کدام مقدار بین ۰ و ۱ محدود است؟" }, options: ["Beta", "M-value", "Both"], answer: "Beta", why: { en: "Beta is a ratio-like methylation level; M is a log2 ratio.", es: "Beta es un nivel de metilación tipo ratio; M es un log2 ratio.", fa: "beta سطح methylation شبیه ratio است؛ M یک log2 ratio است." } },
  { q: { en: "What is the key assumption of global quantile normalization?", es: "¿Cuál es la asunción clave de quantile normalization global?", fa: "فرض کلیدی quantile normalization global چیست؟" }, options: ["Samples should have similar global distributions", "All samples must be tumor", "Only Type I probes are used"], answer: "Samples should have similar global distributions", why: { en: "Quantile replaces observed distributions with a shared rank-based reference.", es: "Quantile reemplaza distribuciones observadas con una referencia compartida basada en ranks.", fa: "quantile distribution مشاهده‌شده را با reference مشترک rank-based جایگزین می‌کند." } },
  { q: { en: "Which method mainly uses out-of-band probes for background correction?", es: "¿Qué método usa sobre todo out-of-band probes para background correction?", fa: "کدام روش عمدتاً از out-of-band probe برای background correction استفاده می‌کند؟" }, options: ["Noob", "PBC", "Raw preprocess"], answer: "Noob", why: { en: "Noob estimates non-specific fluorescence from OOB signals.", es: "Noob estima fluorescencia no específica desde señales OOB.", fa: "Noob fluorescence غیر اختصاصی را از signalهای OOB تخمین می‌زند." } }
];

const trainer = {
  prompt: { en: "Write a report paragraph justifying a normalization choice for this dataset.", es: "Escribe un párrafo de report justificando la elección de normalización para este dataset.", fa: "یک پاراگراف report بنویسید که انتخاب normalization برای این dataset را توجیه کند." },
  model: { en: "Before normalization, we inspected beta-value distributions using density plots and boxplots, and we also compared Type I and Type II probe distributions using manifest-based subsetting. Because the expected biological differences were not genome-wide and the raw plots showed probe-type and sample-distribution differences consistent with technical bias, preprocessQuantile was retained. We verified its effect by comparing raw and normalized mean-beta densities, standard-deviation densities and boxplots. If the design had included tumor/normal samples or a demethylating treatment with expected global shifts, functional normalization or Noob would have been safer.", es: "Antes de normalizar, inspeccionamos las distribuciones de beta values usando density plots y boxplots, y también comparamos distribuciones Type I y Type II mediante subsetting basado en el manifest. Como las diferencias biológicas esperadas no eran genome-wide y los plots raw mostraban diferencias por tipo de probe y por distribución de muestras compatibles con sesgo técnico, se retuvo preprocessQuantile. Verificamos su efecto comparando densities de media beta, densities de desviación estándar y boxplots en raw vs normalizado. Si el diseño hubiera incluido tumor/normal o un tratamiento demetilante con shifts globales esperados, functional normalization o Noob habrían sido opciones más seguras.", fa: "قبل از normalization، توزیع beta را با density plot و boxplot بررسی کردیم و distribution probeهای Type I و Type II را با subsetting بر اساس manifest مقایسه کردیم. چون تفاوت‌های زیستی مورد انتظار genome-wide نبود و plotهای raw تفاوت‌های سازگار با technical bias در probe-type و sample-distribution نشان می‌دادند، preprocessQuantile نگه داشته شد. اثر آن را با مقایسه density میانگین beta، density انحراف معیار و boxplot در raw و normalized بررسی کردیم. اگر طراحی شامل tumor/normal یا demethylating treatment با shiftهای global مورد انتظار بود، functional normalization یا Noob امن‌تر می‌بود." }
};

function tr(value, lang) {
  return typeof value === "string" ? value : (value?.[lang] || value?.es || value?.en || "");
}

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children, tone = "green", className = "" }) {
  const styles = tone === "stone"
    ? "border-stone-200 bg-white px-3 py-1 text-stone-700"
    : "border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700";
  return <span className={cx("inline-flex items-center rounded-full border text-xs font-black uppercase tracking-[0.16em]", styles, className)}>{children}</span>;
}

function StatCard({ label, value, tone = "stone" }) {
  return <div className={cx("rounded-3xl border p-4", tone === "green" ? "border-emerald-200 bg-emerald-50" : "border-stone-200 bg-stone-50")}>
    <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{label}</div>
    <div className="mt-2 text-3xl font-black text-stone-950">{value}</div>
  </div>;
}

function ResourceLinks({ lang }) {
  const labels = ui[lang] || ui.es;
  const linkBase = "rounded-full border px-4 py-2 text-center text-sm font-black transition hover:-translate-y-0.5 hover:shadow-md";
  return <div className="mt-4 rounded-3xl border border-stone-200 bg-stone-50 p-4">
    <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.resources}</div>
    <div className="grid gap-2 sm:grid-cols-4">
      <a href={SLIDES_URL} target="_blank" rel="noreferrer" className={cx(linkBase, "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-white")}>{labels.slides}</a>
      <a href={CODE_URL} target="_blank" rel="noreferrer" className={cx(linkBase, "border-stone-200 bg-white text-stone-800 hover:bg-stone-50")}>{labels.code}</a>
      <a href={TRANSCRIPT_URL} target="_blank" rel="noreferrer" className={cx(linkBase, "border-stone-200 bg-white text-stone-800 hover:bg-stone-50")}>{labels.transcript}</a>
      <a href={RECORDING_URL} target="_blank" rel="noreferrer" className={cx(linkBase, "border-stone-800 bg-stone-950 text-white hover:bg-emerald-700")}>{labels.recording}</a>
    </div>
  </div>;
}

function LessonNav({ lang, isDone, toggle, bottom = false }) {
  const labels = ui[lang] || ui.es;
  return <nav className={cx("rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm", bottom ? "mt-10" : "mb-6")} aria-label="Lesson navigation">
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <a href="#/lesson/m2-import-qc" className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">← {labels.previous}: {labels.previousTitle}</a>
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center">
        <a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500 transition hover:bg-stone-50">{labels.current} · {labels.dashboard}</a>
        <button type="button" onClick={toggle} className={cx("rounded-full px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5", isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white hover:bg-emerald-700")}>{isDone ? labels.done : labels.mark}</button>
      </div>
      <a href="#/lesson/m2-normalization-2" className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md">{labels.next}: {labels.nextTitle} →</a>
    </div>
  </nav>;
}

function Hero({ lang }) {
  return <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#f3fff7]/95 shadow-xl shadow-stone-900/5">
    <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="p-7 md:p-10 lg:p-12">
        <Pill>{tr(copy.hero.eyebrow, lang)}</Pill>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{tr(copy.hero.title, lang)}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{tr(copy.hero.subtitle, lang)}</p>
        <div className="mt-6 flex flex-wrap gap-2">{tr(copy.hero.tags, lang).map(tag => <Pill key={tag} tone="stone">{tag}</Pill>)}</div>
      </div>
      <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
        <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
          <div className="grid grid-cols-2 gap-3">
            {copy.stats.map(item => <StatCard key={tr(item.label, lang)} label={tr(item.label, lang)} value={item.value} tone={item.tone}/>) }
          </div>
          <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">{lang === "es" ? "Pipeline mindset" : lang === "fa" ? "ذهنیت pipeline" : "Pipeline mindset"}</div>
            <p className="mt-2 text-lg font-bold leading-7">{tr(copy.hero.bigIdea, lang)}</p>
          </div>
          <ResourceLinks lang={lang}/>
        </div>
      </div>
    </div>
  </section>;
}

function SectionHeader({ eyebrow, title, children }) {
  return <div>
    <Pill>{eyebrow}</Pill>
    <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-stone-950 md:text-4xl">{title}</h2>
    {children && <p className="mt-4 max-w-4xl text-base font-semibold leading-8 text-stone-700">{children}</p>}
  </div>;
}

function ReportWatch({ lang, watch }) {
  const labels = ui[lang] || ui.es;
  const [open, setOpen] = useState(false);
  return <aside className="mt-6 rounded-[2rem] border border-emerald-200 bg-emerald-50/70 p-5">
    <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.reportWatch}</div>
    <p className="mt-2 text-base font-black text-emerald-950">{tr(watch.title, lang)}</p>
    <button type="button" onClick={() => setOpen(!open)} className="mt-4 rounded-full border border-emerald-300 bg-white px-4 py-2 text-sm font-black text-emerald-800 hover:bg-emerald-100">{open ? labels.hideAnswer : labels.openAnswer}</button>
    {open && <div className="mt-5 space-y-4">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.include}</div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-bold leading-6 text-stone-800">{tr(watch.include, lang).map(item => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">{labels.trap}</div>
        <p className="mt-2 text-sm font-black leading-6 text-amber-950">{tr(watch.trap, lang)}</p>
      </div>
      <div className="rounded-2xl border border-stone-200 bg-white p-4">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.model}</div>
        <p className="mt-2 text-sm font-bold leading-7 text-stone-800">{tr(watch.model, lang)}</p>
      </div>
    </div>}
  </aside>;
}

function SlideCard({ item, lang, onZoom, full }) {
  const labels = ui[lang] || ui.es;
  return <article className={cx("rounded-[2rem] border border-stone-200 bg-stone-50 p-4", full && "md:col-span-2")}>
    <button type="button" onClick={() => onZoom(item)} className="group block w-full text-left">
      <div className="overflow-hidden rounded-[1.25rem] border border-stone-200 bg-white">
        <img src={slideImages[item.n - 1]} alt={`${labels.slide} ${item.n}`} className="aspect-video w-full object-contain transition duration-300 group-hover:scale-[1.02]"/>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Pill className="bg-white">{labels.slide} {item.n}</Pill>
        <span className="text-xs font-bold text-stone-500">{labels.zoom}</span>
      </div>
      <h3 className="mt-3 text-xl font-black text-stone-950">{tr(item.title, lang)}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{tr(item.body, lang)}</p>
    </button>
  </article>;
}

function FigureCard({ figure, lang, full }) {
  return <article className={cx("rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-sm", full && "lg:col-span-2")}>
    <div className="overflow-hidden rounded-[1.25rem] border border-stone-200 bg-stone-50">
      <img src={figure.src} alt={tr(figure.title, lang)} className="w-full object-contain"/>
    </div>
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <Pill tone="stone">{ui[lang]?.generatedFigure || ui.es.generatedFigure}</Pill>
    </div>
    <h4 className="mt-3 text-lg font-black text-stone-950">{tr(figure.title, lang)}</h4>
    <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{tr(figure.caption, lang)}</p>
  </article>;
}

function StepFigures({ figures, lang }) {
  if (!figures?.length) return null;
  return <div className="mt-5 grid gap-4 lg:grid-cols-2">
    {figures.map((figure, index) => <FigureCard key={tr(figure.title, "en")} figure={figure} lang={lang} full={figures.length === 1 || (figures.length % 2 === 1 && index === figures.length - 1)} />)}
  </div>;
}

function CodeStepArticle({ step, lang, index }) {
  const labels = ui[lang] || ui.es;
  return <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5 shadow-sm md:p-6">
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div>
        <Pill tone="green">{tr(step.label, lang)}</Pill>
        <h3 className="mt-3 text-2xl font-black tracking-[-0.02em] text-stone-950">{tr(step.title, lang)}</h3>
      </div>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{index + 1}</div>
    </div>
    <div className="mt-5 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
      <div className="rounded-[1.5rem] bg-stone-950 p-5 text-white">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">{labels.rcode}</div>
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm font-bold leading-7"><code>{step.code}</code></pre>
      </div>
      <div className="space-y-4">
        <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.interpretation}</div>
          <p className="mt-3 text-base font-bold leading-8 text-stone-800">{tr(step.interpretation, lang)}</p>
        </div>
        <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.reportMove}</div>
          <p className="mt-3 text-sm font-black leading-7 text-emerald-950">{tr(step.report, lang)}</p>
        </div>
      </div>
    </div>
    <StepFigures figures={step.figures} lang={lang}/>
  </article>;
}

function LearningBlock({ block, lang, onZoom }) {
  const labels = ui[lang] || ui.es;
  const steps = block.codeSteps.map(key => codeStepMap[key]);
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
    <SectionHeader eyebrow={tr(block.eyebrow, lang)} title={tr(block.title, lang)}>{tr(block.body, lang)}</SectionHeader>
    <ReportWatch lang={lang} watch={block.watch}/>
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {block.slides.map((item, index) => <SlideCard key={item.n} item={item} lang={lang} onZoom={onZoom} full={block.slides.length % 2 === 1 && index === block.slides.length - 1} />)}
    </div>
    <div className="mt-8 rounded-[2rem] border border-emerald-200 bg-[#f3fff7] p-5 md:p-6">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.professor}</div>
      <p className="mt-2 text-sm font-black leading-7 text-emerald-950">{lang === "es" ? "Estos bloques de código aparecen aquí porque corresponden exactamente al concepto de las diapositivas anteriores, no como una segunda parte separada." : lang === "fa" ? "این بلوک‌های کد اینجا آمده‌اند چون دقیقاً به مفهوم اسلایدهای قبلی مربوط‌اند، نه به‌عنوان بخش جدا." : "These code blocks are placed here because they correspond directly to the slides above, not as a separate second half."}</p>
    </div>
    <div className="mt-6 space-y-6">{steps.map((step, index) => <CodeStepArticle key={tr(step.label, "en")} step={step} lang={lang} index={index} />)}</div>
  </section>;
}

function BetaMLab({ lang }) {
  const [meth, setMeth] = useState(800);
  const [unmeth, setUnmeth] = useState(200);
  const beta = meth + unmeth === 0 ? 0 : meth / (meth + unmeth);
  const m = Math.log2((meth + 1) / (unmeth + 1));
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
    <SectionHeader eyebrow={ui[lang]?.quickLab || ui.es.quickLab} title={lang === "es" ? "Mini-lab beta ↔ M-value" : lang === "fa" ? "مینی‌لب beta ↔ M-value" : "Beta ↔ M-value mini-lab"}>{lang === "es" ? "Modifica las intensidades para ver cómo beta queda acotado y M cambia como log-ratio." : lang === "fa" ? "intensityها را تغییر دهید تا ببینید beta محدود می‌ماند اما M مثل log-ratio تغییر می‌کند." : "Edit the intensities to see beta stay bounded while M changes as a log-ratio."}</SectionHeader>
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <label className="rounded-3xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">Methylated intensity<input type="number" value={meth} onChange={event => setMeth(Number(event.target.value))} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white p-3 text-base outline-none focus:border-emerald-300"/></label>
      <label className="rounded-3xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">Unmethylated intensity<input type="number" value={unmeth} onChange={event => setUnmeth(Number(event.target.value))} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white p-3 text-base outline-none focus:border-emerald-300"/></label>
    </div>
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      <div className="rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Beta</div><div className="mt-2 text-4xl font-black">{beta.toFixed(3)}</div><p className="mt-2 text-sm font-bold leading-6 text-stone-200">{beta < 0.33 ? (lang === "es" ? "hipometilado" : lang === "fa" ? "hypomethylated" : "hypomethylated") : beta > 0.66 ? (lang === "es" ? "hipermetilado" : lang === "fa" ? "hypermethylated" : "hypermethylated") : (lang === "es" ? "intermedio / hemi-like" : lang === "fa" ? "میانی / hemi-like" : "intermediate / hemi-like")}</p></div>
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">M-value</div><div className="mt-2 text-4xl font-black text-emerald-950">{Number.isFinite(m) ? m.toFixed(3) : "NA"}</div><p className="mt-2 text-sm font-bold leading-6 text-emerald-900">{m > 0 ? (lang === "es" ? "más methylated que unmethylated" : lang === "fa" ? "methylated بیشتر از unmethylated" : "more methylated than unmethylated") : m < 0 ? (lang === "es" ? "más unmethylated que methylated" : lang === "fa" ? "unmethylated بیشتر از methylated" : "more unmethylated than methylated") : (lang === "es" ? "señales similares" : lang === "fa" ? "signalها مشابه‌اند" : "similar signals")}</p></div>
    </div>
  </section>;
}

function MethodChoiceLab({ lang }) {
  const [choice, setChoice] = useState("subtle");
  const scenarios = {
    subtle: { label: { en: "Subtle disease marker study", es: "Estudio de marcador sutil", fa: "مطالعه marker ظریف" }, method: "preprocessQuantile / preprocessFunnorm", reason: { en: "Quantile may be appropriate if global distributions should be similar; functional is safer if unsure.", es: "Quantile puede ser apropiada si las distribuciones globales deberían ser similares; functional es más segura si hay duda.", fa: "اگر distributionهای global باید مشابه باشند quantile مناسب است؛ اگر شک دارید functional امن‌تر است." } },
    tumor: { label: { en: "Tumor vs normal with genome-wide shifts", es: "Tumor vs normal con shifts genome-wide", fa: "tumor vs normal با shiftهای genome-wide" }, method: "preprocessFunnorm or Noob", reason: { en: "Avoid forcing tumor and normal distributions to be the same when the difference may be biology.", es: "Evita forzar tumor y normal a tener la misma distribución cuando la diferencia puede ser biología.", fa: "وقتی تفاوت ممکن است biology باشد، tumor و normal را مجبور به distribution مشابه نکنید." } },
    lowq: { label: { en: "Low-confidence data quality", es: "Calidad de datos incierta", fa: "کیفیت داده نامطمئن" }, method: "preprocessNoob / background correction", reason: { en: "A conservative correction removes background without strong global distribution assumptions.", es: "Una corrección conservadora elimina background sin asunciones globales fuertes.", fa: "یک correction محافظه‌کارانه background را بدون فرض global قوی حذف می‌کند." } }
  };
  const current = scenarios[choice];
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
    <SectionHeader eyebrow={ui[lang]?.quickLab || ui.es.quickLab} title={lang === "es" ? "Mini-lab de elección de normalización" : lang === "fa" ? "مینی‌لب انتخاب normalization" : "Normalization-choice mini-lab"}>{lang === "es" ? "Elige un escenario y observa cómo cambia la recomendación metodológica." : lang === "fa" ? "یک scenario انتخاب کنید و ببینید recommendation method چطور تغییر می‌کند." : "Choose a scenario and see how the methodological recommendation changes."}</SectionHeader>
    <div className="mt-6 flex flex-wrap gap-2">{Object.entries(scenarios).map(([key, item]) => <button key={key} type="button" onClick={() => setChoice(key)} className={cx("rounded-full border px-4 py-2 text-sm font-black transition", choice === key ? "border-emerald-500 bg-emerald-100 text-emerald-900" : "border-stone-200 bg-white text-stone-700 hover:border-emerald-300")}>{tr(item.label, lang)}</button>)}</div>
    <div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{lang === "es" ? "Recomendación" : lang === "fa" ? "پیشنهاد" : "Recommendation"}</div><h3 className="mt-2 text-2xl font-black text-emerald-950">{current.method}</h3><p className="mt-2 text-sm font-bold leading-7 text-emerald-900">{tr(current.reason, lang)}</p></div>
  </section>;
}

function Checkpoints({ lang }) {
  const labels = ui[lang] || ui.es;
  const [selected, setSelected] = useState({});
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
    <SectionHeader eyebrow={labels.checkpoint} title={lang === "es" ? "Preguntas rápidas de comprensión" : lang === "fa" ? "پرسش‌های سریع فهم" : "Quick understanding checks"}>{lang === "es" ? "La opción seleccionada queda remarcada." : lang === "fa" ? "گزینه انتخاب‌شده مشخص می‌ماند." : "The selected option stays highlighted."}</SectionHeader>
    <div className="mt-6 grid gap-4 lg:grid-cols-3">{checks.map((item, idx) => <article key={tr(item.q, lang)} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5"><p className="font-black leading-7 text-stone-950">{tr(item.q, lang)}</p><div className="mt-4 flex flex-col gap-2">{item.options.map(option => <button key={option} type="button" onClick={() => setSelected({ ...selected, [idx]: option })} className={cx("rounded-2xl border px-3 py-2 text-left text-sm font-bold", selected[idx] === option ? (option === item.answer ? "border-emerald-400 bg-emerald-100 text-emerald-900" : "border-red-300 bg-red-100 text-red-900") : "border-stone-200 bg-white text-stone-700")}>{option}</button>)}</div>{selected[idx] && <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-stone-700"><span className="font-black">{selected[idx] === item.answer ? labels.correct : labels.notQuite}.</span> {tr(item.why, lang)}</p>}</article>)}</div>
  </section>;
}

function Trainer({ lang }) {
  const labels = ui[lang] || ui.es;
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const words = useMemo(() => text.trim() ? text.trim().split(/\s+/).length : 0, [text]);
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
    <SectionHeader eyebrow="Report" title={labels.trainer}>{tr(trainer.prompt, lang)}</SectionHeader>
    <textarea value={text} onChange={event => setText(event.target.value)} placeholder={labels.placeholder} className="mt-5 min-h-44 w-full rounded-3xl border border-stone-200 bg-white p-4 text-sm font-semibold leading-7 outline-none focus:border-emerald-300"/>
    <div className="mt-3 flex flex-wrap items-center justify-between gap-3"><span className="text-sm font-bold text-stone-500">{words} {labels.words}</span><button type="button" onClick={() => setShow(!show)} className="rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white hover:bg-emerald-700">{show ? labels.hideAnswer : labels.showAnswer}</button></div>
    {show && <div className="mt-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.model}</div><p className="mt-3 text-sm font-bold leading-7 text-emerald-950">{tr(trainer.model, lang)}</p></div>}
  </section>;
}

function ZoomModal({ item, lang, onClose }) {
  const labels = ui[lang] || ui.es;
  if (!item) return null;
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/80 p-4" role="dialog" aria-modal="true" onClick={onClose}>
    <div className="max-h-[94vh] w-[min(1100px,96vw)] overflow-auto rounded-[2rem] bg-white p-4 shadow-2xl" onClick={event => event.stopPropagation()}>
      <div className="mb-3 flex items-center justify-between gap-3"><div><Pill>{labels.slide} {item.n}</Pill><h3 className="mt-2 text-xl font-black text-stone-950">{tr(item.title, lang)}</h3></div><button type="button" onClick={onClose} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white hover:bg-emerald-700">{labels.close}</button></div>
      <img src={slideImages[item.n - 1]} alt={`${labels.slide} ${item.n}`} className="w-full rounded-[1.5rem] object-contain"/>
      <p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{tr(item.body, lang)}</p>
    </div>
  </div>;
}

export default function DRDLesson10({ lang = "es", isDone = false, toggle = () => {} }) {
  const [zoom, setZoom] = useState(null);
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
    <LessonNav lang={lang} isDone={isDone} toggle={toggle}/>
    <Hero lang={lang}/>
    {learningBlocks.slice(0, 1).map(block => <LearningBlock key={block.id} block={block} lang={lang} onZoom={setZoom} />)}
    <BetaMLab lang={lang}/>
    {learningBlocks.slice(1).map(block => <LearningBlock key={block.id} block={block} lang={lang} onZoom={setZoom} />)}
    <MethodChoiceLab lang={lang}/>
    <Checkpoints lang={lang}/>
    <Trainer lang={lang}/>
    <LessonNav lang={lang} isDone={isDone} toggle={toggle} bottom/>
    <ZoomModal item={zoom} lang={lang} onClose={() => setZoom(null)}/>
  </main>;
}
