import React, { useMemo, useState } from "react";
import slide01 from "../../assets/drd/lesson12/slide-01.png";
import slide02 from "../../assets/drd/lesson12/slide-02.png";
import slide03 from "../../assets/drd/lesson12/slide-03.png";
import slide04 from "../../assets/drd/lesson12/slide-04.png";
import slide05 from "../../assets/drd/lesson12/slide-05.png";
import slide06 from "../../assets/drd/lesson12/slide-06.png";
import slide07 from "../../assets/drd/lesson12/slide-07.png";
import slide08 from "../../assets/drd/lesson12/slide-08.png";
import slide09 from "../../assets/drd/lesson12/slide-09.png";
import slide10 from "../../assets/drd/lesson12/slide-10.png";
import slide11 from "../../assets/drd/lesson12/slide-11.png";
import slide12 from "../../assets/drd/lesson12/slide-12.png";
import slide13 from "../../assets/drd/lesson12/slide-13.png";
import slide14 from "../../assets/drd/lesson12/slide-14.png";
import slide15 from "../../assets/drd/lesson12/slide-15.png";
import slide16 from "../../assets/drd/lesson12/slide-16.png";
import slide17 from "../../assets/drd/lesson12/slide-17.png";
import slide18 from "../../assets/drd/lesson12/slide-18.png";
import slide19 from "../../assets/drd/lesson12/slide-19.png";
import slide20 from "../../assets/drd/lesson12/slide-20.png";
import slide21 from "../../assets/drd/lesson12/slide-21.png";
import slide22 from "../../assets/drd/lesson12/slide-22.png";
import slide23 from "../../assets/drd/lesson12/slide-23.png";
import slide24 from "../../assets/drd/lesson12/slide-24.png";
import slide25 from "../../assets/drd/lesson12/slide-25.png";
import betaMHetero from "../../assets/drd/lesson12/beta-m-heteroscedasticity.png";
import vennDmp from "../../assets/drd/lesson12/venn-dmp.png";
import { cx, tr, DRDPill as Pill, DRDStatCard as StatCard, DRDSectionHeader as SectionHeader, DRDResourceLinks, DRDLessonHero, DRDLessonNav } from "./shared.jsx";

const SLIDES_URL = "https://drive.google.com/file/d/1wrmgaByWIWoyTD9XCB_bRCbl3Q_wr6sH/view?usp=drivesdk";
const CODE_URL = "https://drive.google.com/file/d/1wiTpYVtVZdVUXTGEF-eMdZFThyOziuaj/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1TTRiPgi9LakpSVHeghxpKaZOyLACQ3bzcOZrIsFHMHk/edit";
const RECORDING_URL = "https://www.youtube.com/watch?v=zpHD8CYhF48&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=9";
const CODE_LABEL = "Code";

const slideImages = [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10, slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20, slide21, slide22, slide23, slide24, slide25];

const ui = {
  en: { mark: "Mark completed", done: "Completed", dashboard: "DRD dashboard", previous: "Previous", next: "Next", previousTitle: "M2.4 Normalization I", nextTitle: "M2.6 DMP/DMR + PCA", current: "M2.5", resources: "Class resources", slides: "Slides", code: "Code", transcript: "Transcript", recording: "Recording", slide: "Slide", zoom: "Click to zoom", close: "Close zoom", reportWatch: "Report watch", openAnswer: "Open expanded answer", hideAnswer: "Hide answer", include: "What to include", trap: "Common trap", model: "Report-ready wording", rcode: "R code", interpretation: "Interpretation", professor: "Professor emphasis", reportMove: "Report move", checkpoint: "Checkpoint", correct: "Correct", notQuite: "Not quite", trainer: "Report paragraph trainer", placeholder: "Write a report-style paragraph here...", words: "words", showAnswer: "Show answer", quickLab: "Mini-lab", generatedFigure: "Generated figure" },
  es: { mark: "Marcar completada", done: "Completada", dashboard: "Dashboard DRD", previous: "Anterior", next: "Siguiente", previousTitle: "M2.4 Normalización I", nextTitle: "M2.6 DMP/DMR + PCA", current: "M2.5", resources: "Recursos de clase", slides: "Slides", code: "Code", transcript: "Transcripción", recording: "Recording", slide: "Diapositiva", zoom: "Click para ampliar", close: "Cerrar zoom", reportWatch: "Report watch", openAnswer: "Abrir respuesta desarrollada", hideAnswer: "Ocultar respuesta", include: "Qué incluir", trap: "Trampa común", model: "Redacción lista para report", rcode: "Código R", interpretation: "Interpretación", professor: "Énfasis del profesor", reportMove: "Movimiento para report", checkpoint: "Checkpoint", correct: "Correcto", notQuite: "Casi", trainer: "Entrenador de párrafo de report", placeholder: "Escribe aquí un párrafo estilo report...", words: "palabras", showAnswer: "Mostrar respuesta", quickLab: "Mini-lab", generatedFigure: "Figura generada" },
  fa: { mark: "علامت کامل‌شده", done: "کامل شد", dashboard: "داشبورد DRD", previous: "قبلی", next: "بعدی", previousTitle: "M2.4 نرمال‌سازی I", nextTitle: "M2.6 DMP/DMR + PCA", current: "M2.5", resources: "منابع کلاس", slides: "اسلایدها", code: "Code", transcript: "رونوشت", recording: "Recording", slide: "اسلاید", zoom: "برای بزرگ‌نمایی کلیک کن", close: "بستن بزرگ‌نمایی", reportWatch: "نکته برای گزارش", openAnswer: "باز کردن پاسخ کامل", hideAnswer: "پنهان کردن پاسخ", include: "چه چیزهایی باید بیاید", trap: "دام رایج", model: "عبارت آماده برای گزارش", rcode: "کد R", interpretation: "تفسیر", professor: "تأکید استاد", reportMove: "حرکت مناسب گزارش", checkpoint: "Checkpoint", correct: "درست", notQuite: "نه کاملاً", trainer: "تمرین پاراگراف گزارش", placeholder: "یک پاراگراف به سبک گزارش بنویسید...", words: "کلمه", showAnswer: "نمایش پاسخ", quickLab: "مینی‌لب", generatedFigure: "شکل تولیدشده" }
};

const copy = {
  hero: {
    eyebrow: { en: "Module 2 · May 22 · normalization II + DMP/DMR", es: "Módulo 2 · 22 de mayo · normalización II + DMP/DMR", fa: "ماژول ۲ · ۲۲ مه · normalization II + DMP/DMR" },
    title: { en: "Batch effects, beta/M choice and differential methylation", es: "Batch effects, elección beta/M y metilación diferencial", fa: "batch effect، انتخاب beta/M و methylation افتراقی" },
    subtitle: { en: "A practical lesson following the May 22 slides, R script and transcript: use PCA to inspect batch effects, choose beta or M values for statistics, apply t-test and Mann-Whitney row-wise, compare with dmpFinder, and interpret DMPs versus DMRs.", es: "Una lección práctica siguiendo las slides, el script R y la transcripción del 22 de mayo: usar PCA para inspeccionar batch effects, elegir beta o M para estadística, aplicar t-test y Mann-Whitney por filas, comparar con dmpFinder e interpretar DMPs versus DMRs.", fa: "یک درس عملی بر اساس اسلایدها، script R و رونوشت ۲۲ مه: استفاده از PCA برای بررسی batch effect، انتخاب beta یا M برای آمار، اجرای t-test و Mann-Whitney به‌صورت row-wise، مقایسه با dmpFinder و تفسیر DMP در برابر DMR." },
    tags: { en: ["batch effect", "PCA", "beta/M", "t-test", "Wilcoxon", "dmpFinder", "DMR"], es: ["batch effect", "PCA", "beta/M", "t-test", "Wilcoxon", "dmpFinder", "DMR"], fa: ["batch effect", "PCA", "beta/M", "t-test", "Wilcoxon", "dmpFinder", "DMR"] },
    bigIdea: { en: "The pipeline moves from preprocessing to inference: first remove/inspect unwanted variation, then decide the measurement scale and statistical test.", es: "El pipeline pasa de preprocesamiento a inferencia: primero inspecciona/remueve variación no deseada, luego decide escala de medición y test estadístico.", fa: "pipeline از preprocessing به inference می‌رود: اول variation ناخواسته را بررسی/حذف کن، بعد scale و آزمون آماری را انتخاب کن." }
  },
  stats: [
    { label: { en: "Module", es: "Módulo", fa: "ماژول" }, value: "2", tone: "green" },
    { label: { en: "Date", es: "Fecha", fa: "تاریخ" }, value: "May 22" },
    { label: { en: "Core", es: "Core", fa: "محور" }, value: "DMP", tone: "green" },
    { label: { en: "Output", es: "Output", fa: "خروجی" }, value: "Venn/Report" }
  ]
};

const learningBlocks = [
  {
    id: "batch-pca",
    eyebrow: { en: "1 · unwanted variation", es: "1 · variación no deseada", fa: "۱ · variation ناخواسته" },
    title: { en: "Normalization reduces systematic bias, but batch effects require extra inspection", es: "La normalización reduce sesgo sistemático, pero los batch effects requieren inspección extra", fa: "normalization bias سیستماتیک را کم می‌کند، اما batch effect بررسی جدا می‌خواهد" },
    body: { en: "The transcript starts by reviewing the previous normalization lesson: normalization helps remove systematic bias, but batch effects can act on subsets of samples or probes and may remain after normalization. PCA is introduced as a stronger exploratory view than boxplots for detecting outliers and structured variability.", es: "La transcripción empieza revisando la normalización anterior: la normalización ayuda a remover sesgos sistemáticos, pero los batch effects pueden actuar sobre subconjuntos de muestras o probes y permanecer tras normalizar. PCA se introduce como una vista exploratoria más potente que boxplots para detectar outliers y variabilidad estructurada.", fa: "رونوشت با مرور درس normalization شروع می‌شود: normalization bias سیستماتیک را کاهش می‌دهد، اما batch effect می‌تواند روی زیرمجموعه‌ای از sampleها یا probeها اثر بگذارد و بعد از normalization باقی بماند. PCA به‌عنوان دید explorative قوی‌تر از boxplot برای outlier و variability ساختاری معرفی می‌شود." },
    slides: [
      { n: 1, title: { en: "Why normalize?", es: "¿Por qué normalizar?", fa: "چرا normalize کنیم؟" }, body: { en: "Technical variation can hide biological signal; normalization targets systematic bias.", es: "La variación técnica puede ocultar señal biológica; la normalización apunta al sesgo sistemático.", fa: "technical variation می‌تواند signal زیستی را پنهان کند؛ normalization bias سیستماتیک را هدف می‌گیرد." } },
      { n: 2, title: { en: "Batch effects", es: "Batch effects", fa: "batch effect" }, body: { en: "Subgroups behave differently for non-biological reasons.", es: "Subgrupos se comportan distinto por razones no biológicas.", fa: "زیرگروه‌ها به دلایل غیرزیستی رفتار متفاوتی دارند." } },
      { n: 5, title: { en: "PCA objective", es: "Objetivo de PCA", fa: "هدف PCA" }, body: { en: "Project high-dimensional methylation profiles into fewer dimensions.", es: "Proyectar perfiles de metilación de alta dimensión a menos dimensiones.", fa: "پروفایل‌های methylation پرابعاد را به ابعاد کمتر project می‌کند." } },
      { n: 8, title: { en: "Biological vs technical variation", es: "Variación biológica vs técnica", fa: "variation زیستی در برابر فنی" }, body: { en: "Principal components may capture biology or technical structure, so labels matter.", es: "Los componentes principales pueden capturar biología o estructura técnica, así que las etiquetas importan.", fa: "principal componentها می‌توانند biology یا ساختار فنی را بگیرند، پس labelها مهم‌اند." } },
      { n: 10, title: { en: "How to reduce batch effects", es: "Cómo reducir batch effects", fa: "چگونه batch effect را کاهش دهیم" }, body: { en: "Randomization is prevention; ComBat/SVA/covariates are downstream fixes.", es: "La randomización es prevención; ComBat/SVA/covariables son correcciones downstream.", fa: "randomization پیشگیری است؛ ComBat/SVA/covariateها correction downstream هستند." } }
    ],
    watch: {
      title: { en: "Report watch: PCA is not only decoration", es: "Report watch: PCA no es solo decoración", fa: "نکته گزارش: PCA فقط تزئینی نیست" },
      include: { en: ["State whether samples cluster by biological group, batch, sex or obvious outlier behavior.", "If a sample is removed, justify the power/sensitivity trade-off.", "Mention that ComBat requires a known batch variable; it is not a blind magic correction."], es: ["Indica si las muestras agrupan por grupo biológico, batch, sexo u outlier claro.", "Si se elimina una muestra, justifica el trade-off entre poder y sensibilidad.", "Menciona que ComBat requiere una variable batch conocida; no es una corrección mágica ciega."], fa: ["بگویید sampleها بر اساس گروه زیستی، batch، sex یا outlier بودن cluster می‌شوند یا نه.", "اگر sample حذف شد، trade-off بین power و sensitivity را توضیح دهید.", "ذکر کنید ComBat به batch variable شناخته‌شده نیاز دارد؛ magic correction نیست."] },
      trap: { en: "Do not conclude biology from PCA without checking possible technical labels.", es: "No concluyas biología desde PCA sin revisar etiquetas técnicas posibles.", fa: "از PCA بدون بررسی labelهای تکنیکی نتیجه زیستی نگیرید." },
      model: { en: "PCA was used after normalization to inspect residual unwanted variation. Samples were evaluated with respect to biological group and technical metadata; no correction was applied blindly because batch-adjustment methods such as ComBat require an explicit batch variable.", es: "PCA se usó después de la normalización para inspeccionar variación no deseada residual. Las muestras se evaluaron respecto al grupo biológico y metadata técnica; no se aplicó corrección a ciegas porque métodos como ComBat requieren una variable batch explícita.", fa: "PCA بعد از normalization برای بررسی variation ناخواسته باقی‌مانده استفاده شد. sampleها بر اساس گروه زیستی و metadata فنی ارزیابی شدند؛ correction کورکورانه اعمال نشد چون روش‌هایی مثل ComBat به batch variable مشخص نیاز دارند." }
    },
    codeSteps: []
  },
  {
    id: "beta-m-scale",
    eyebrow: { en: "2 · measurement scale", es: "2 · escala de medición", fa: "۲ · مقیاس اندازه‌گیری" },
    title: { en: "Beta values are interpretable; M-values are statistically more stable", es: "Beta values son interpretables; M-values son estadísticamente más estables", fa: "beta قابل تفسیر است؛ M-value از نظر آماری پایدارتر است" },
    body: { en: "The May 22 practical begins differential analysis by choosing the value scale. Beta is bounded and intuitive, but can be heteroscedastic. M-values are log-ratios and tend to be homoscedastic, so they are often preferred for testing, especially in small datasets.", es: "La práctica del 22 de mayo inicia el análisis diferencial eligiendo la escala de valores. Beta es acotado e intuitivo, pero puede ser heteroscedástico. M-values son log-ratios y tienden a ser homoscedásticos, por eso suelen preferirse para tests, especialmente en datasets pequeños.", fa: "practical ۲۲ مه analysis افتراقی را با انتخاب scale شروع می‌کند. beta محدود و شهودی است اما می‌تواند heteroscedastic باشد. M-valueها log-ratio هستند و معمولاً homoscedastic، پس مخصوصاً در dataset کوچک برای test ترجیح داده می‌شوند." },
    slides: [
      { n: 12, title: { en: "DMP/DMR lesson frame", es: "Marco DMP/DMR", fa: "چارچوب DMP/DMR" }, body: { en: "The lesson shifts toward identifying differentially methylated probes and regions.", es: "La lección pasa a identificar probes y regiones diferencialmente metiladas.", fa: "درس به سمت شناسایی probeها و regionهای differential methylation می‌رود." } },
      { n: 13, title: { en: "What to use?", es: "¿Qué usar?", fa: "از چه چیزی استفاده کنیم؟" }, body: { en: "Beta values and M-values answer the same methylation question with different statistical behavior.", es: "Beta y M responden la misma pregunta de metilación con comportamiento estadístico distinto.", fa: "beta و M یک پرسش methylation را با رفتار آماری متفاوت پاسخ می‌دهند." } },
      { n: 14, title: { en: "Heteroscedastic beta", es: "Beta heteroscedástico", fa: "beta heteroscedastic" }, body: { en: "Beta is compressed near 0 and 1; M is a log-ratio and tends to be homoscedastic.", es: "Beta se comprime cerca de 0 y 1; M es log-ratio y tiende a homoscedasticidad.", fa: "beta نزدیک ۰ و ۱ فشرده می‌شود؛ M یک log-ratio است و به homoscedasticity تمایل دارد." } },
      { n: 15, title: { en: "Practical suggestion", es: "Sugerencia práctica", fa: "پیشنهاد عملی" }, body: { en: "For small datasets, prefer M-values; for larger datasets, beta or M can be justified.", es: "Para datasets pequeños, prefiere M-values; para grandes, beta o M pueden justificarse.", fa: "برای dataset کوچک M-value ترجیح دارد؛ برای dataset بزرگ beta یا M قابل دفاع است." } }
    ],
    watch: {
      title: { en: "Report watch: separate testing scale from reporting scale", es: "Report watch: separa escala de test y escala de reporte", fa: "نکته گزارش: scale تست را از scale گزارش جدا کنید" },
      include: { en: ["Name whether the statistical tests were run on beta or M values.", "Explain heteroscedasticity if beta values are used for testing.", "Report beta-level changes when biological interpretation is needed."], es: ["Nombra si los tests estadísticos se hicieron sobre beta o M values.", "Explica heteroscedasticidad si se usan beta values para testing.", "Reporta cambios en beta cuando necesites interpretación biológica."], fa: ["بگویید testهای آماری روی beta یا M انجام شدند.", "اگر beta برای testing استفاده شد heteroscedasticity را توضیح دهید.", "برای تفسیر زیستی تغییرات beta را گزارش کنید."] },
      trap: { en: "Do not say M-values are more biological. They are usually more statistically convenient, while beta is easier to interpret.", es: "No digas que M-values son más biológicos. Suelen ser más convenientes estadísticamente, mientras beta se interpreta más fácil.", fa: "نگویید M-value زیستی‌تر است. معمولاً از نظر آماری مناسب‌تر است، اما beta تفسیر زیستی آسان‌تری دارد." },
      model: { en: "We inspected beta and M-value mean–standard deviation relationships. Because beta values are bounded and can be heteroscedastic, M-values were considered more appropriate for formal testing, while beta values were retained for effect-size interpretation.", es: "Inspeccionamos la relación media–desviación estándar de beta y M-values. Como beta está acotado y puede ser heteroscedástico, M-values se consideraron más apropiados para testing formal, mientras beta se retuvo para interpretar el tamaño de efecto.", fa: "رابطه mean–SD برای beta و M-value بررسی شد. چون beta محدود است و می‌تواند heteroscedastic باشد، M-value برای testing رسمی مناسب‌تر در نظر گرفته شد، در حالی که beta برای تفسیر effect size نگه داشته شد." }
    },
    codeSteps: ["setup", "hetero"]
  },
  {
    id: "dmp-tests",
    eyebrow: { en: "3 · DMP testing", es: "3 · testing de DMP", fa: "۳ · آزمون DMP" },
    title: { en: "Run row-wise tests, extract p-values, and compare methods", es: "Corre tests por filas, extrae p-values y compara métodos", fa: "testها را row-wise اجرا، p-valueها را استخراج و روش‌ها را مقایسه کن" },
    body: { en: "The script intentionally starts with simple tests to teach how R objects work: a t-test and a Mann–Whitney test return lists, so a custom function extracts only p.value before applying the test to many CpG rows.", es: "El script empieza intencionalmente con tests simples para enseñar cómo funcionan los objetos de R: t-test y Mann–Whitney devuelven listas, así que una función personalizada extrae solo p.value antes de aplicar el test a muchas filas CpG.", fa: "script عمداً با testهای ساده شروع می‌کند تا objectهای R را یاد بدهد: t-test و Mann–Whitney list برمی‌گردانند، بنابراین یک function سفارشی فقط p.value را استخراج می‌کند و سپس test روی ردیف‌های CpG اعمال می‌شود." },
    slides: [
      { n: 16, title: { en: "Parametric or non-parametric?", es: "¿Paramétrico o no paramétrico?", fa: "parametric یا non-parametric؟" }, body: { en: "Parametric tests assume a distribution; non-parametric tests rank data.", es: "Los tests paramétricos asumen distribución; los no paramétricos rankean los datos.", fa: "parametric testها distribution فرض می‌کنند؛ non-parametric داده‌ها را rank می‌کنند." } },
      { n: 17, title: { en: "Distribution across samples", es: "Distribución entre muestras", fa: "distribution بین sampleها" }, body: { en: "For DMP testing, the distribution of one CpG across samples matters.", es: "Para testing DMP importa la distribución de un CpG entre muestras.", fa: "برای DMP testing، distribution یک CpG بین sampleها مهم است." } },
      { n: 19, title: { en: "Sample size matters", es: "El tamaño muestral importa", fa: "sample size مهم است" }, body: { en: "Large samples make parametric tests more robust; small samples make both choices difficult.", es: "Muestras grandes hacen los paramétricos más robustos; muestras pequeñas dificultan ambas opciones.", fa: "sample بزرگ parametric test را robustتر می‌کند؛ sample کوچک هر دو انتخاب را دشوار می‌کند." } },
      { n: 20, title: { en: "Testing workflow", es: "Workflow de testing", fa: "workflow تست" }, body: { en: "Compare groups A/B probe by probe and extract p-values.", es: "Compara grupos A/B probe por probe y extrae p-values.", fa: "گروه‌های A/B را probe به probe مقایسه و p-value استخراج کن." } }
    ],
    watch: {
      title: { en: "Report watch: basic tests are pedagogical, not the final gold standard", es: "Report watch: los tests básicos son pedagógicos, no el gold standard final", fa: "نکته گزارش: testهای ساده آموزشی‌اند، نه gold standard نهایی" },
      include: { en: ["Specify the matrix used and the grouping variable.", "State that p-values were extracted row-wise across CpG probes.", "Mention that simple t-test/Wilcoxon examples do not model covariates."], es: ["Especifica la matriz usada y la variable de grupo.", "Indica que los p-values se extrajeron por filas a través de CpG probes.", "Menciona que ejemplos simples t-test/Wilcoxon no modelan covariables."], fa: ["matrix استفاده‌شده و variable گروه‌بندی را مشخص کنید.", "بگویید p-valueها row-wise در CpG probeها استخراج شدند.", "ذکر کنید مثال‌های t-test/Wilcoxon covariateها را model نمی‌کنند."] },
      trap: { en: "A p-value cutoff on 20,000 CpGs is not enough without multiple-testing logic; this lesson prepares the object workflow.", es: "Un cutoff de p-value en 20,000 CpGs no basta sin lógica de multiple testing; esta lección prepara el workflow de objetos.", fa: "cutoff p-value روی ۲۰,۰۰۰ CpG بدون منطق multiple testing کافی نیست؛ این درس workflow objectها را آماده می‌کند." },
      model: { en: "Differential methylation was first explored with row-wise t-tests and Mann–Whitney tests across CpG probes. The analysis extracted the p.value element from each test result and ranked probes by significance, while recognizing that covariate-aware models are needed for a final analysis.", es: "La metilación diferencial se exploró primero con t-tests y Mann–Whitney por filas a través de CpG probes. El análisis extrajo el elemento p.value de cada resultado y ordenó probes por significancia, reconociendo que un análisis final requiere modelos con covariables.", fa: "differential methylation ابتدا با t-test و Mann–Whitney به‌صورت row-wise در CpG probeها بررسی شد. analysis عنصر p.value را از هر نتیجه استخراج و probeها را بر اساس significance مرتب کرد، با این نکته که analysis نهایی به مدل‌های دارای covariate نیاز دارد." }
    },
    codeSteps: ["singleTests", "applyTests", "filterIntersect"]
  },
  {
    id: "dmp-dmr",
    eyebrow: { en: "4 · DMP versus DMR", es: "4 · DMP versus DMR", fa: "۴ · DMP در برابر DMR" },
    title: { en: "Probe-level hits are useful; regions are often more biologically meaningful", es: "Los hits por probe son útiles; las regiones suelen ser más biológicamente relevantes", fa: "hitهای probe-level مفیدند؛ regionها اغلب زیستی‌تر معنی‌دارند" },
    body: { en: "The slides distinguish single-probe DMPs from region-centric DMRs. A region approach looks for adjacent CpGs changing together, which better fits chromatin biology and CpG-island methylation patterns.", es: "Las slides distinguen DMPs de probe único de DMRs centrados en regiones. El enfoque regional busca CpGs adyacentes que cambian juntas, lo cual encaja mejor con la biología de cromatina y patrones de metilación en CpG islands.", fa: "اسلایدها DMPهای تک-probe را از DMRهای region-centric جدا می‌کنند. رویکرد region به دنبال CpGهای مجاور است که باهم تغییر می‌کنند، که با biology کروماتین و الگوهای methylation در CpG island سازگارتر است." },
    slides: [
      { n: 21, title: { en: "Why regions matter", es: "Por qué importan las regiones", fa: "چرا regionها مهم‌اند" }, body: { en: "Adjacent CpGs may change together and affect chromatin structure.", es: "CpGs adyacentes pueden cambiar juntas y afectar estructura de cromatina.", fa: "CpGهای مجاور می‌توانند باهم تغییر کنند و chromatin structure را تحت اثر قرار دهند." } },
      { n: 22, title: { en: "DMP versus DMR", es: "DMP versus DMR", fa: "DMP در برابر DMR" }, body: { en: "DMP means differentially methylated probe; DMR means differentially methylated region.", es: "DMP significa probe diferencialmente metilada; DMR significa región diferencialmente metilada.", fa: "DMP یعنی probe با methylation متفاوت؛ DMR یعنی region با methylation متفاوت." } },
      { n: 23, title: { en: "Single-probe vs region-centric", es: "Single-probe vs region-centric", fa: "single-probe در برابر region-centric" }, body: { en: "minfi bump hunting, DMRcate and comb-p are examples of regional approaches.", es: "minfi bump hunting, DMRcate y comb-p son ejemplos de enfoques regionales.", fa: "minfi bump hunting، DMRcate و comb-p مثال‌های approachهای region هستند." } },
      { n: 24, title: { en: "Bump hunting", es: "Bump hunting", fa: "bump hunting" }, body: { en: "Candidate DMRs are intervals where smoothed group differences exceed a threshold.", es: "DMRs candidatas son intervalos donde diferencias suavizadas entre grupos superan un threshold.", fa: "DMR candidate intervalهایی هستند که تفاوت smoothed بین گروه‌ها از threshold عبور می‌کند." } },
      { n: 25, title: { en: "comb-p", es: "comb-p", fa: "comb-p" }, body: { en: "Regional p-value correction uses spatial correlation among neighboring CpGs.", es: "La corrección regional de p-values usa correlación espacial entre CpGs vecinos.", fa: "تصحیح region-level p-value از همبستگی فضایی CpGهای مجاور استفاده می‌کند." } }
    ],
    watch: {
      title: { en: "Report watch: do not confuse probes and regions", es: "Report watch: no confundas probes y regiones", fa: "نکته گزارش: probe و region را قاطی نکنید" },
      include: { en: ["Report DMPs as individual CpG/probe-level findings.", "Report DMRs as contiguous genomic intervals with coordinated changes.", "Connect DMR interpretation to CpG island/shore/shelf/gene-context annotation."], es: ["Reporta DMPs como hallazgos individuales CpG/probe-level.", "Reporta DMRs como intervalos genómicos contiguos con cambios coordinados.", "Conecta DMRs con anotación CpG island/shore/shelf/contexto génico."], fa: ["DMPها را به‌عنوان یافته‌های individual CpG/probe-level گزارش کنید.", "DMRها را به‌عنوان intervalهای genomic پیوسته با تغییرات coordinated گزارش کنید.", "تفسیر DMR را به annotation مثل CpG island/shore/shelf/gene context وصل کنید."] },
      trap: { en: "A DMP list is not automatically a DMR result. Regional methods add spatial information.", es: "Una lista de DMPs no es automáticamente un resultado DMR. Los métodos regionales añaden información espacial.", fa: "لیست DMP خودبه‌خود نتیجه DMR نیست. روش‌های region اطلاعات فضایی اضافه می‌کنند." },
      model: { en: "DMPs were interpreted as probe-level signals, while DMR analysis was considered for adjacent CpGs showing coordinated methylation changes. This distinction is important because regional methylation changes are often easier to connect to chromatin and regulatory biology.", es: "Los DMPs se interpretaron como señales probe-level, mientras que el análisis DMR se consideró para CpGs adyacentes con cambios coordinados de metilación. Esta distinción es importante porque los cambios regionales suelen conectarse mejor con cromatina y biología regulatoria.", fa: "DMPها به‌عنوان signalهای probe-level تفسیر شدند، در حالی که analysis DMR برای CpGهای مجاور با تغییرات coordinated methylation در نظر گرفته شد. این تفاوت مهم است چون تغییرات regional اغلب بهتر به chromatin و biology تنظیمی وصل می‌شوند." }
    },
    codeSteps: ["dmpFinder", "venn", "largeDataset"]
  }
];

const codeStepMap = {
  setup: {
    label: { en: "1 · setup", es: "1 · setup", fa: "۱ · setup" },
    title: { en: "Recalculate preprocessQuantile and extract beta/M", es: "Recalcular preprocessQuantile y extraer beta/M", fa: "preprocessQuantile را دوباره محاسبه و beta/M را استخراج کن" },
    code: `rm(list=ls())
library(minfi)
setwd("../Lesson5")
load("../Lesson3/RGset.RData")
preprocessQuantile_results <- preprocessQuantile(RGset)

beta_preprocessQuantile <- getBeta(preprocessQuantile_results)
M_preprocessQuantile <- getM(preprocessQuantile_results)`,
    interpretation: { en: "The May 22 analysis uses preprocessQuantile as the selected normalization method and then extracts beta and M matrices from the normalized object.", es: "El análisis del 22 de mayo usa preprocessQuantile como método de normalización seleccionado y luego extrae matrices beta y M del objeto normalizado.", fa: "analysis ۲۲ مه preprocessQuantile را به‌عنوان روش normalization انتخاب‌شده استفاده می‌کند و سپس ماتریس‌های beta و M را از object normalized استخراج می‌کند." },
    report: { en: "Name the normalization method before reporting downstream tests.", es: "Nombra el método de normalización antes de reportar tests downstream.", fa: "قبل از گزارش testهای downstream روش normalization را نام ببرید." }
  },
  hetero: {
    label: { en: "2 · heteroscedasticity", es: "2 · heteroscedasticity", fa: "۲ · heteroscedasticity" },
    title: { en: "Plot standard deviation against mean", es: "Graficar desviación estándar contra media", fa: "رسم SD در برابر mean" },
    code: `beta_preprocessQuantile_mean <- apply(beta_preprocessQuantile, 1, mean, na.rm = TRUE)
beta_preprocessQuantile_stdev <- apply(beta_preprocessQuantile, 1, sd, na.rm = TRUE)

M_preprocessQuantile_mean <- apply(M_preprocessQuantile, 1, mean, na.rm = TRUE)
M_preprocessQuantile_stdev <- apply(M_preprocessQuantile, 1, sd, na.rm = TRUE)

pdf("Beta_M_heteoschedasticity_omoscedasticity.pdf")
par(mfrow = c(1,2))
smoothScatter(beta_preprocessQuantile_mean, beta_preprocessQuantile_stdev)
lines(lowess(beta_preprocessQuantile_mean, beta_preprocessQuantile_stdev), col = "red")
smoothScatter(M_preprocessQuantile_mean, M_preprocessQuantile_stdev)
lines(lowess(M_preprocessQuantile_mean, M_preprocessQuantile_stdev), col = "red")
dev.off()`,
    interpretation: { en: "smoothScatter() is preferred because the plot contains hundreds of thousands of CpG points. The lowess line shows whether variability depends on the mean.", es: "smoothScatter() se prefiere porque el plot contiene cientos de miles de CpGs. La línea lowess muestra si la variabilidad depende de la media.", fa: "smoothScatter ترجیح دارد چون plot صدها هزار CpG دارد. خط lowess نشان می‌دهد variability به mean وابسته است یا نه." },
    report: { en: "Use this plot to justify whether beta or M values are used for statistical testing.", es: "Usa este plot para justificar si usas beta o M values para testing estadístico.", fa: "از این plot برای توجیه استفاده از beta یا M در testing آماری استفاده کنید." },
    figures: [{ src: betaMHetero, title: { en: "Beta/M heteroscedasticity check", es: "Chequeo de heteroscedasticity beta/M", fa: "بررسی heteroscedasticity برای beta/M" }, caption: { en: "The generated PDF compares mean–SD behavior for beta and M values after preprocessQuantile.", es: "El PDF generado compara comportamiento media–SD para beta y M tras preprocessQuantile.", fa: "PDF تولیدشده رفتار mean–SD را برای beta و M بعد از preprocessQuantile مقایسه می‌کند." } }]
  },
  singleTests: {
    label: { en: "3 · one CpG", es: "3 · un CpG", fa: "۳ · یک CpG" },
    title: { en: "Start with one probe to understand the output", es: "Empieza con un probe para entender el output", fa: "با یک probe شروع کن تا output را بفهمی" },
    code: `pheno <- read.csv("../Lesson3/Input_data/SampleSheet.csv", header = TRUE, stringsAsFactors = TRUE)
str(pheno)

t_test <- t.test(beta_preprocessQuantile[1,] ~ pheno$Group)
t_test
wilcox <- wilcox.test(beta_preprocessQuantile[1,] ~ pheno$Group)
wilcox

str(t_test)
str(wilcox)
t_test$p.value
wilcox$p.value`,
    interpretation: { en: "The first probe is used as a toy example. Both functions return list-like objects, and the pipeline extracts the p.value element.", es: "El primer probe se usa como ejemplo. Ambas funciones devuelven objetos tipo lista, y el pipeline extrae el elemento p.value.", fa: "اولین probe به‌عنوان مثال آموزشی استفاده می‌شود. هر دو function object شبیه list برمی‌گردانند و pipeline عنصر p.value را استخراج می‌کند." },
    report: { en: "Do not paste full test objects into the report; report the test, grouping variable and extracted p-value logic.", es: "No pegues objetos completos del test en el report; reporta test, variable de grupo y lógica de extracción de p-value.", fa: "object کامل test را در گزارش paste نکنید؛ test، variable گروه‌بندی و منطق استخراج p-value را گزارش کنید." }
  },
  applyTests: {
    label: { en: "4 · row-wise apply", es: "4 · apply por filas", fa: "۴ · apply ردیفی" },
    title: { en: "Build functions that return only p-values", es: "Construir funciones que devuelvan solo p-values", fa: "functionهایی بساز که فقط p-value برگردانند" },
    code: `My_ttest_function <- function(x) {
  t_test <- t.test(x ~ pheno$Group)
  return(t_test$p.value)
}
My_mannwhitney_function <- function(x) {
  wilcox <- wilcox.test(x ~ pheno$Group)
  return(wilcox$p.value)
}

first20k_beta_preprocessQuantile <- beta_preprocessQuantile[1:20000,]
pValues_ttest_first20k <- apply(first20k_beta_preprocessQuantile, 1, My_ttest_function)
pValues_wilcox_first20k <- apply(first20k_beta_preprocessQuantile, 1, My_mannwhitney_function)`,
    interpretation: { en: "apply(matrix, 1, function) runs the test on every CpG row. The lesson limits the run to the first 20,000 probes because the full array can take several minutes.", es: "apply(matrix, 1, function) corre el test en cada fila CpG. La lección limita la corrida a los primeros 20,000 probes porque todo el array puede tardar varios minutos.", fa: "apply(matrix, 1, function) test را روی هر ردیف CpG اجرا می‌کند. درس اجرا را به ۲۰,۰۰۰ probe اول محدود می‌کند چون کل array چند دقیقه طول می‌کشد." },
    report: { en: "Mention the subset size if a teaching subset, not the full array, was used.", es: "Menciona el tamaño del subset si se usó un subset pedagógico y no todo el array.", fa: "اگر به‌جای کل array از subset آموزشی استفاده شد، اندازه subset را ذکر کنید." }
  },
  filterIntersect: {
    label: { en: "5 · rank/filter", es: "5 · ordenar/filtrar", fa: "۵ · مرتب‌سازی/فیلتر" },
    title: { en: "Order p-values and compare significant probe sets", es: "Ordenar p-values y comparar sets significativos", fa: "p-valueها را مرتب و setهای significant را مقایسه کن" },
    code: `final_ttest_first20k <- data.frame(first20k_beta_preprocessQuantile, pValues_ttest_first20k)
final_wilcox_first20k <- data.frame(first20k_beta_preprocessQuantile, pValues_wilcox_first20k)

final_ttest_first20k <- final_ttest_first20k[order(final_ttest_first20k$pValues_ttest_first20k),]
final_wilcox_first20k <- final_wilcox_first20k[order(final_wilcox_first20k$pValues_wilcox_first20k),]

final_ttest_first20k_0.05 <- final_ttest_first20k[final_ttest_first20k$pValues_ttest_first20k <= 0.05,]
final_wilcox_first20k_0.05 <- final_wilcox_first20k[final_wilcox_first20k$pValues_wilcox_first20k <= 0.05,]

intersection <- intersect(rownames(final_ttest_first20k_0.05), rownames(final_wilcox_first20k_0.05))
length(intersection)`,
    interpretation: { en: "The p ≤ 0.05 filter is useful for learning object manipulation, but it is not yet a multiple-testing corrected result.", es: "El filtro p ≤ 0.05 es útil para aprender manipulación de objetos, pero todavía no es un resultado corregido por multiple testing.", fa: "فیلتر p ≤ 0.05 برای یادگیری manipulation object مفید است، اما هنوز نتیجه multiple-testing corrected نیست." },
    report: { en: "Report both the threshold and the fact that it is exploratory if no FDR correction is applied.", es: "Reporta el threshold y que es exploratorio si no se aplicó FDR.", fa: "threshold و exploratory بودن را ذکر کنید اگر FDR اعمال نشده است." }
  },
  dmpFinder: {
    label: { en: "6 · dmpFinder", es: "6 · dmpFinder", fa: "۶ · dmpFinder" },
    title: { en: "Compare simple tests with minfi dmpFinder", es: "Comparar tests simples con dmpFinder de minfi", fa: "testهای ساده را با dmpFinder از minfi مقایسه کن" },
    code: `pValues_dmpFinder_first20k <- dmpFinder(first20k_beta_preprocessQuantile,
                                            pheno = pheno$Group,
                                            type = "categorical")
head(pValues_dmpFinder_first20k)

final_dmpFinder_first20k <- merge(first20k_beta_preprocessQuantile,
                                  pValues_dmpFinder_first20k,
                                  by = "row.names")
rownames(final_dmpFinder_first20k) <- final_dmpFinder_first20k[,1]
final_dmpFinder_first20k <- final_dmpFinder_first20k[order(final_dmpFinder_first20k$pval),]
final_dmpFinder_first20k_0.05 <- final_dmpFinder_first20k[final_dmpFinder_first20k$pval <= 0.05,]`,
    interpretation: { en: "dmpFinder is based on limma and returns p-values and q-values. The merge step attaches the test output to beta values and restores CpG IDs as row names.", es: "dmpFinder se basa en limma y devuelve p-values y q-values. El merge une el output del test con los beta values y restaura IDs CpG como row names.", fa: "dmpFinder بر پایه limma است و p-value و q-value برمی‌گرداند. merge خروجی test را به beta values وصل می‌کند و IDهای CpG را به row name برمی‌گرداند." },
    report: { en: "For final reporting, prefer corrected q-values/FDR when available.", es: "Para el reporte final, prefiere q-values/FDR corregidos cuando estén disponibles.", fa: "برای گزارش نهایی، در صورت وجود q-value/FDR corrected را ترجیح دهید." }
  },
  venn: {
    label: { en: "7 · Venn diagram", es: "7 · diagrama de Venn", fa: "۷ · نمودار Venn" },
    title: { en: "Visualize overlap among approaches", es: "Visualizar solapamiento entre enfoques", fa: "هم‌پوشانی approachها را visualize کن" },
    code: `library(VennDiagram)
venn.diagram(
  list(A = rownames(final_dmpFinder_first20k_0.05),
       B = rownames(final_ttest_first20k_0.05),
       C = rownames(final_wilcox_first20k_0.05)),
  filename = "Venn_differentially_methylated_positions.png"
)`,
    interpretation: { en: "The Venn diagram highlights which CpGs are shared among dmpFinder, t-test and Mann–Whitney hits. This is a method-comparison visualization, not validation by itself.", es: "El Venn muestra qué CpGs comparten dmpFinder, t-test y Mann–Whitney. Es visualización de comparación metodológica, no validación por sí misma.", fa: "نمودار Venn نشان می‌دهد کدام CpGها بین dmpFinder، t-test و Mann–Whitney مشترک‌اند. این visualization مقایسه روش‌هاست، نه validation مستقل." },
    report: { en: "Use overlap language carefully: shared hits are consistent across methods, not automatically more true.", es: "Usa el lenguaje de overlap con cuidado: hits compartidos son consistentes entre métodos, no automáticamente más verdaderos.", fa: "زبان overlap را با دقت استفاده کنید: hitهای مشترک بین روش‌ها consistent هستند، نه الزاماً trueتر." },
    figures: [{ src: vennDmp, title: { en: "Venn of differentially methylated positions", es: "Venn de posiciones diferencialmente metiladas", fa: "Venn برای موقعیت‌های differential methylation" }, caption: { en: "Generated from the three exploratory probe-level approaches in the practical.", es: "Generado desde los tres enfoques exploratorios probe-level de la práctica.", fa: "از سه approach exploratory در سطح probe در practical تولید شده است." } }]
  },
  largeDataset: {
    label: { en: "8 · large dataset", es: "8 · dataset grande", fa: "۸ · dataset بزرگ" },
    title: { en: "Move from toy subset to chromosome 18 example", es: "Pasar del subset didáctico al ejemplo de cromosoma 18", fa: "از subset آموزشی به مثال chromosome 18 برو" },
    code: `pheno_large <- factor(c(rep("normal", 32), rep("cancer", 32)))
load("../Lesson5/chr18_large_example.RData")
head(chr18_large_example)

save(final_ttest_first20k, file = "final_ttest_first20k.RData")`,
    interpretation: { en: "The large object contains chromosome 18 beta values for 64 subjects, 32 normal and 32 cancer. The lesson stops at setup, preparing the same row-wise logic for a more realistic sample size.", es: "El objeto grande contiene beta values de cromosoma 18 para 64 sujetos, 32 normales y 32 con cáncer. La lección se detiene en setup, preparando la misma lógica por filas para un tamaño muestral más realista.", fa: "object بزرگ beta values کروموزوم ۱۸ برای ۶۴ فرد دارد: ۳۲ normal و ۳۲ cancer. درس در setup می‌ایستد و همان منطق row-wise را برای sample size واقعی‌تر آماده می‌کند." },
    report: { en: "Clearly separate teaching subsets from final datasets in the methods section.", es: "Separa claramente subsets didácticos de datasets finales en métodos.", fa: "در بخش methods، subset آموزشی و dataset نهایی را واضح جدا کنید." }
  }
};

const checks = [
  { q: { en: "Why can PCA reveal batch effects that boxplots miss?", es: "¿Por qué PCA puede revelar batch effects que boxplots no muestran?", fa: "چرا PCA می‌تواند batch effectهایی را نشان دهد که boxplot از دست می‌دهد؟" }, options: ["It summarizes multivariate variability", "It removes all batches automatically", "It converts beta to M", "It replaces statistical tests"], answer: "It summarizes multivariate variability", why: { en: "PCA projects high-dimensional methylation variability into a lower-dimensional view; it does not correct batches by itself.", es: "PCA proyecta variabilidad de metilación de alta dimensión a una vista menor; no corrige batches por sí misma.", fa: "PCA variability پرابعاد methylation را به نمای کم‌بعد project می‌کند؛ خود به خود batch را اصلاح نمی‌کند." } },
  { q: { en: "Which value scale is usually more stable for formal testing in small datasets?", es: "¿Qué escala suele ser más estable para testing formal en datasets pequeños?", fa: "کدام scale معمولاً برای testing رسمی در dataset کوچک پایدارتر است؟" }, options: ["M-values", "Raw red channel", "Sample ID", "Detection p-value"], answer: "M-values", why: { en: "M-values tend to be homoscedastic, while beta values are bounded and often heteroscedastic.", es: "M-values tienden a ser homoscedásticos, mientras beta está acotado y suele ser heteroscedástico.", fa: "M-valueها معمولاً homoscedastic هستند، در حالی که beta محدود و اغلب heteroscedastic است." } },
  { q: { en: "What does dmpFinder add in the practical?", es: "¿Qué añade dmpFinder en la práctica?", fa: "dmpFinder در practical چه اضافه می‌کند؟" }, options: ["A minfi/limma-based DMP workflow", "A regional bump hunter result", "A new SampleSheet", "A batch variable"], answer: "A minfi/limma-based DMP workflow", why: { en: "In this script dmpFinder is used for probe-level differential methylation and compared with simple tests.", es: "En este script dmpFinder se usa para metilación diferencial probe-level y se compara con tests simples.", fa: "در این script از dmpFinder برای differential methylation در سطح probe استفاده و با testهای ساده مقایسه می‌شود." } }
];

const trainer = {
  prompt: { en: "Write a report paragraph explaining the May 22 pipeline from normalized values to DMP/DMR interpretation.", es: "Escribe un párrafo de report explicando el pipeline del 22 de mayo desde valores normalizados hasta interpretación DMP/DMR.", fa: "یک پاراگراف گزارش بنویسید که pipeline ۲۲ مه را از values normalized تا تفسیر DMP/DMR توضیح دهد." },
  model: { en: "After preprocessQuantile normalization, beta and M-value matrices were extracted. Mean–standard deviation plots were used to evaluate heteroscedasticity and to justify the value scale for statistical testing. Probe-level differential methylation was explored with row-wise t-tests, Mann–Whitney tests and dmpFinder, extracting and ranking p-values for each CpG. The overlap among methods was visualized with a Venn diagram, while the biological interpretation distinguished DMPs, which are individual CpG/probe signals, from DMRs, which represent coordinated changes across adjacent CpGs.", es: "Tras preprocessQuantile normalization, se extrajeron matrices beta y M-value. Los plots media–desviación estándar se usaron para evaluar heteroscedasticity y justificar la escala para testing estadístico. La metilación diferencial probe-level se exploró con t-tests por filas, Mann–Whitney y dmpFinder, extrayendo y ordenando p-values para cada CpG. El solapamiento entre métodos se visualizó con un diagrama de Venn, mientras que la interpretación biológica distinguió DMPs, señales individuales CpG/probe, de DMRs, cambios coordinados en CpGs adyacentes.", fa: "پس از preprocessQuantile normalization، ماتریس‌های beta و M-value استخراج شدند. plotهای mean–SD برای ارزیابی heteroscedasticity و توجیه scale مناسب برای testing آماری استفاده شدند. differential methylation در سطح probe با t-testهای row-wise، Mann–Whitney و dmpFinder بررسی شد و p-value هر CpG استخراج و مرتب گردید. overlap بین روش‌ها با نمودار Venn نمایش داده شد، در حالی که تفسیر زیستی DMPها را به‌عنوان signalهای individual CpG/probe از DMRها، یعنی تغییرات coordinated در CpGهای مجاور، جدا کرد." }
};

function ResourceLinks({ lang }) {
  const labels = ui[lang] || ui.es;
  const links = [
    { label: labels.slides, href: SLIDES_URL, tone: "accent" },
    { label: "Code", href: CODE_URL },
    { label: labels.transcript, href: TRANSCRIPT_URL },
    { label: labels.recording, href: RECORDING_URL, tone: "dark" }
  ];
  return <DRDResourceLinks title={labels.resources} links={links} />;
}
function LessonNav({ lang, isDone, toggle, bottom = false }) {
  const labels = ui[lang] || ui.es;
  return <DRDLessonNav lessonId="m2-normalization-2" labels={labels} isDone={isDone} toggle={toggle} bottom={bottom} previousHref="#/lesson/m2-normalization-1" nextHref="#/lesson/m2-dmp-dmr" />;
}
function Hero({ lang }) { return <DRDLessonHero lessonId="m2-normalization-2" eyebrow={tr(copy.hero.eyebrow, lang)} title={tr(copy.hero.title, lang)} subtitle={tr(copy.hero.subtitle, lang)} tags={tr(copy.hero.tags, lang)} stats={copy.stats.map(item => ({ label: tr(item.label, lang), value: item.value, tone: item.tone }))} bigIdea={tr(copy.hero.bigIdea, lang)} pipelineLabel={lang === "es" ? "Pipeline mindset" : lang === "fa" ? "ذهنیت pipeline" : "Pipeline mindset"} resourcePanel={<ResourceLinks lang={lang}/>} />; }
function ReportWatch({ lang, watch }) {
  const labels = ui[lang] || ui.es;
  const [open, setOpen] = useState(false);
  return <aside className="mt-6 rounded-[2rem] border border-emerald-200 bg-emerald-50/70 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.reportWatch}</div><p className="mt-2 text-base font-black text-emerald-950">{tr(watch.title, lang)}</p><button type="button" onClick={() => setOpen(!open)} className="mt-4 rounded-full border border-emerald-300 bg-white px-4 py-2 text-sm font-black text-emerald-800 hover:bg-emerald-100">{open ? labels.hideAnswer : labels.openAnswer}</button>{open && <div className="mt-5 space-y-4"><div><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.include}</div><ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-bold leading-6 text-stone-800">{tr(watch.include, lang).map(item => <li key={item}>{item}</li>)}</ul></div><div className="rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">{labels.trap}</div><p className="mt-2 text-sm font-black leading-6 text-amber-950">{tr(watch.trap, lang)}</p></div><div className="rounded-2xl border border-stone-200 bg-white p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.model}</div><p className="mt-2 text-sm font-bold leading-7 text-stone-800">{tr(watch.model, lang)}</p></div></div>}</aside>;
}
function SlideCard({ item, lang, onZoom, full }) {
  const labels = ui[lang] || ui.es;
  return <article className={cx("rounded-[2rem] border border-stone-200 bg-stone-50 p-4", full && "md:col-span-2")}><button type="button" onClick={() => onZoom(item)} className="group block w-full text-left"><div className="overflow-hidden rounded-[1.25rem] border border-stone-200 bg-white"><img src={slideImages[item.n - 1]} alt={`${labels.slide} ${item.n}`} className="aspect-video w-full object-contain transition duration-300 group-hover:scale-[1.02]"/></div><div className="mt-4 flex flex-wrap items-center gap-2"><Pill className="bg-white">{labels.slide} {item.n}</Pill><span className="text-xs font-bold text-stone-500">{labels.zoom}</span></div><h3 className="mt-3 text-xl font-black text-stone-950">{tr(item.title, lang)}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{tr(item.body, lang)}</p></button></article>;
}
function FigureCard({ figure, lang, full }) { return <article className={cx("rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-sm", full && "lg:col-span-2")}><div className="overflow-hidden rounded-[1.25rem] border border-stone-200 bg-stone-50"><img src={figure.src} alt={tr(figure.title, lang)} className="w-full object-contain"/></div><div className="mt-4 flex flex-wrap items-center gap-2"><Pill tone="stone">{ui[lang]?.generatedFigure || ui.es.generatedFigure}</Pill></div><h4 className="mt-3 text-lg font-black text-stone-950">{tr(figure.title, lang)}</h4><p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{tr(figure.caption, lang)}</p></article>; }
function StepFigures({ figures, lang }) { if (!figures?.length) return null; return <div className="mt-5 grid gap-4 lg:grid-cols-2">{figures.map((figure, index) => <FigureCard key={tr(figure.title, "en")} figure={figure} lang={lang} full={figures.length === 1 || (figures.length % 2 === 1 && index === figures.length - 1)} />)}</div>; }
function CodeStepArticle({ step, lang, index }) {
  const labels = ui[lang] || ui.es;
  return <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5 shadow-sm md:p-6"><div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"><div><Pill tone="green">{tr(step.label, lang)}</Pill><h3 className="mt-3 text-2xl font-black tracking-[-0.02em] text-stone-950">{tr(step.title, lang)}</h3></div><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{index + 1}</div></div><div className="mt-5 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]"><div className="rounded-[1.5rem] bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">{labels.rcode}</div><pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm font-bold leading-7"><code>{step.code}</code></pre></div><div className="space-y-4"><div className="rounded-[1.5rem] border border-stone-200 bg-white p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.interpretation}</div><p className="mt-3 text-base font-bold leading-8 text-stone-800">{tr(step.interpretation, lang)}</p></div><div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.reportMove}</div><p className="mt-3 text-sm font-black leading-7 text-emerald-950">{tr(step.report, lang)}</p></div></div></div><StepFigures figures={step.figures} lang={lang}/></article>;
}
function LearningBlock({ block, lang, onZoom }) {
  const labels = ui[lang] || ui.es;
  const steps = (block.codeSteps || []).map(key => codeStepMap[key]);
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={tr(block.eyebrow, lang)} title={tr(block.title, lang)}>{tr(block.body, lang)}</SectionHeader><ReportWatch lang={lang} watch={block.watch}/><div className="mt-6 grid gap-6 md:grid-cols-2">{block.slides.map((item, index) => <SlideCard key={item.n} item={item} lang={lang} onZoom={onZoom} full={block.slides.length % 2 === 1 && index === block.slides.length - 1} />)}</div><div className="mt-8 rounded-[2rem] border border-emerald-200 bg-[#f3fff7] p-5 md:p-6"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.professor}</div><p className="mt-2 text-sm font-black leading-7 text-emerald-950">{lang === "es" ? "Cada bloque conecta una decisión del pipeline con el output que debe aparecer en el report: no basta ejecutar código, hay que justificar la elección." : lang === "fa" ? "هر بخش یک تصمیم pipeline را به خروجی مناسب گزارش وصل می‌کند: اجرای کد کافی نیست، باید انتخاب را توجیه کرد." : "Each block links a pipeline decision to the output that belongs in the report: running code is not enough; the choice must be justified."}</p></div>{steps.length > 0 && <div className="mt-6 space-y-6">{steps.map((step, index) => <CodeStepArticle key={tr(step.label, "en")} step={step} lang={lang} index={index} />)}</div>}</section>;
}
function PcaDecisionLab({ lang }) {
  const [choice, setChoice] = useState("group");
  const scenarios = {
    group: { label: { en: "Separation by biological group", es: "Separación por grupo biológico", fa: "جدایی بر اساس گروه زیستی" }, result: { en: "Expected downstream DMP signal, but still check metadata.", es: "Esperas señal DMP downstream, pero revisa metadata.", fa: "انتظار signal DMP downstream وجود دارد، اما metadata را بازبینی کن." } },
    batch: { label: { en: "Separation by slide/batch", es: "Separación por slide/batch", fa: "جدایی بر اساس slide/batch" }, result: { en: "Treat as unwanted variation; consider design, ComBat or covariates.", es: "Trátalo como variación no deseada; considera diseño, ComBat o covariables.", fa: "آن را variation ناخواسته بدانید؛ design، ComBat یا covariate را در نظر بگیرید." } },
    outlier: { label: { en: "One isolated sample", es: "Una muestra aislada", fa: "یک sample جداافتاده" }, result: { en: "Investigate QC and decide whether removal improves sensitivity more than it hurts power.", es: "Investiga QC y decide si removerla mejora sensibilidad más de lo que reduce poder.", fa: "QC را بررسی کنید و تصمیم بگیرید حذف آن sensitivity را بیش از کاهش power بهبود می‌دهد یا نه." } }
  };
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={ui[lang]?.quickLab || ui.es.quickLab} title={lang === "es" ? "Mini-lab de interpretación PCA" : lang === "fa" ? "مینی‌لب تفسیر PCA" : "PCA interpretation mini-lab"}>{lang === "es" ? "Elige el patrón que ves y formula la decisión de pipeline." : lang === "fa" ? "الگویی را که می‌بینید انتخاب و تصمیم pipeline را بیان کنید." : "Choose the pattern you see and formulate the pipeline decision."}</SectionHeader><div className="mt-6 flex flex-wrap gap-2">{Object.entries(scenarios).map(([key, item]) => <button key={key} type="button" onClick={() => setChoice(key)} className={cx("rounded-full border px-4 py-2 text-sm font-black transition", choice === key ? "border-emerald-500 bg-emerald-100 text-emerald-900" : "border-stone-200 bg-white text-stone-700 hover:border-emerald-300")}>{tr(item.label, lang)}</button>)}</div><div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{lang === "es" ? "Decisión" : lang === "fa" ? "تصمیم" : "Decision"}</div><p className="mt-2 text-sm font-black leading-7 text-emerald-950">{tr(scenarios[choice].result, lang)}</p></div></section>;
}
function TestChoiceLab({ lang }) {
  const [choice, setChoice] = useState("small");
  const scenarios = {
    small: { label: { en: "Small sample", es: "Muestra pequeña", fa: "sample کوچک" }, result: { en: "M-values are often preferred; non-parametric tests may lack power.", es: "M-values suelen preferirse; tests no paramétricos pueden perder poder.", fa: "M-value اغلب ترجیح دارد؛ test non-parametric ممکن است power کمی داشته باشد." } },
    large: { label: { en: "Large sample", es: "Muestra grande", fa: "sample بزرگ" }, result: { en: "Parametric tests are more robust to deviations; beta or M can be justified.", es: "Los paramétricos son más robustos a desviaciones; beta o M pueden justificarse.", fa: "parametric testها نسبت به deviation مقاوم‌ترند؛ beta یا M قابل توجیه‌اند." } },
    region: { label: { en: "Adjacent CpGs change", es: "CpGs adyacentes cambian", fa: "CpGهای مجاور تغییر می‌کنند" }, result: { en: "Move beyond DMPs and consider bump hunting, DMRcate or comb-p.", es: "Pasa de DMPs a bump hunting, DMRcate o comb-p.", fa: "از DMP فراتر بروید و bump hunting، DMRcate یا comb-p را در نظر بگیرید." } }
  };
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={ui[lang]?.quickLab || ui.es.quickLab} title={lang === "es" ? "Mini-lab de elección de test" : lang === "fa" ? "مینی‌لب انتخاب test" : "Test-choice mini-lab"}>{lang === "es" ? "Conecta tamaño muestral, escala y pregunta biológica." : lang === "fa" ? "sample size، scale و biological question را به هم وصل کنید." : "Connect sample size, scale and biological question."}</SectionHeader><div className="mt-6 flex flex-wrap gap-2">{Object.entries(scenarios).map(([key, item]) => <button key={key} type="button" onClick={() => setChoice(key)} className={cx("rounded-full border px-4 py-2 text-sm font-black transition", choice === key ? "border-emerald-500 bg-emerald-100 text-emerald-900" : "border-stone-200 bg-white text-stone-700 hover:border-emerald-300")}>{tr(item.label, lang)}</button>)}</div><div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{lang === "es" ? "Recomendación" : lang === "fa" ? "پیشنهاد" : "Recommendation"}</div><p className="mt-2 text-sm font-black leading-7 text-emerald-950">{tr(scenarios[choice].result, lang)}</p></div></section>;
}
function Checkpoints({ lang }) {
  const labels = ui[lang] || ui.es;
  const [selected, setSelected] = useState({});
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={labels.checkpoint} title={lang === "es" ? "Preguntas rápidas de comprensión" : lang === "fa" ? "پرسش‌های سریع فهم" : "Quick understanding checks"}>{lang === "es" ? "La opción seleccionada queda remarcada." : lang === "fa" ? "گزینه انتخاب‌شده مشخص می‌ماند." : "The selected option stays highlighted."}</SectionHeader><div className="mt-6 grid gap-4 lg:grid-cols-3">{checks.map((item, idx) => <article key={tr(item.q, lang)} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5"><p className="font-black leading-7 text-stone-950">{tr(item.q, lang)}</p><div className="mt-4 flex flex-col gap-2">{item.options.map(option => <button key={option} type="button" onClick={() => setSelected({ ...selected, [idx]: option })} className={cx("rounded-2xl border px-3 py-2 text-left text-sm font-bold", selected[idx] === option ? (option === item.answer ? "border-emerald-400 bg-emerald-100 text-emerald-900" : "border-red-300 bg-red-100 text-red-900") : "border-stone-200 bg-white text-stone-700")}>{option}</button>)}</div>{selected[idx] && <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-stone-700"><span className="font-black">{selected[idx] === item.answer ? labels.correct : labels.notQuite}.</span> {tr(item.why, lang)}</p>}</article>)}</div></section>;
}
function Trainer({ lang }) {
  const labels = ui[lang] || ui.es;
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const words = useMemo(() => text.trim() ? text.trim().split(/\s+/).length : 0, [text]);
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="Report" title={labels.trainer}>{tr(trainer.prompt, lang)}</SectionHeader><textarea value={text} onChange={event => setText(event.target.value)} placeholder={labels.placeholder} className="mt-5 min-h-44 w-full rounded-3xl border border-stone-200 bg-white p-4 text-sm font-semibold leading-7 outline-none focus:border-emerald-300"/><div className="mt-3 flex flex-wrap items-center justify-between gap-3"><span className="text-sm font-bold text-stone-500">{words} {labels.words}</span><button type="button" onClick={() => setShow(!show)} className="rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white hover:bg-emerald-700">{show ? labels.hideAnswer : labels.showAnswer}</button></div>{show && <div className="mt-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.model}</div><p className="mt-3 text-sm font-bold leading-7 text-emerald-950">{tr(trainer.model, lang)}</p></div>}</section>;
}
function ZoomModal({ item, lang, onClose }) {
  const labels = ui[lang] || ui.es;
  if (!item) return null;
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/80 p-4" role="dialog" aria-modal="true" onClick={onClose}><div className="max-h-[94vh] w-[min(1100px,96vw)] overflow-auto rounded-[2rem] bg-white p-4 shadow-2xl" onClick={event => event.stopPropagation()}><div className="mb-3 flex items-center justify-between gap-3"><div><Pill>{labels.slide} {item.n}</Pill><h3 className="mt-2 text-xl font-black text-stone-950">{tr(item.title, lang)}</h3></div><button type="button" onClick={onClose} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white hover:bg-emerald-700">{labels.close}</button></div><img src={slideImages[item.n - 1]} alt={`${labels.slide} ${item.n}`} className="w-full rounded-[1.5rem] object-contain"/><p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{tr(item.body, lang)}</p></div></div>;
}
export default function DRDLesson12({ lang = "es", isDone = false, toggle = () => {} }) {
  const [zoom, setZoom] = useState(null);
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><LessonNav lang={lang} isDone={isDone} toggle={toggle}/><Hero lang={lang}/><LearningBlock block={learningBlocks[0]} lang={lang} onZoom={setZoom}/><PcaDecisionLab lang={lang}/><LearningBlock block={learningBlocks[1]} lang={lang} onZoom={setZoom}/><TestChoiceLab lang={lang}/><LearningBlock block={learningBlocks[2]} lang={lang} onZoom={setZoom}/><LearningBlock block={learningBlocks[3]} lang={lang} onZoom={setZoom}/><Checkpoints lang={lang}/><Trainer lang={lang}/><LessonNav lang={lang} isDone={isDone} toggle={toggle} bottom/><ZoomModal item={zoom} lang={lang} onClose={() => setZoom(null)}/></main>;
}
