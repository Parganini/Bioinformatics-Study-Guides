import React, { useMemo, useState } from "react";
import slide01 from "../../assets/drd/lesson13/slide-01.png";
import slide02 from "../../assets/drd/lesson13/slide-02.png";
import slide03 from "../../assets/drd/lesson13/slide-03.png";
import slide04 from "../../assets/drd/lesson13/slide-04.png";
import slide05 from "../../assets/drd/lesson13/slide-05.png";
import slide06 from "../../assets/drd/lesson13/slide-06.png";
import slide07 from "../../assets/drd/lesson13/slide-07.png";
import slide08 from "../../assets/drd/lesson13/slide-08.png";
import slide09 from "../../assets/drd/lesson13/slide-09.png";
import slide10 from "../../assets/drd/lesson13/slide-10.png";
import slide11 from "../../assets/drd/lesson13/slide-11.png";
import slide12 from "../../assets/drd/lesson13/slide-12.png";
import slide13 from "../../assets/drd/lesson13/slide-13.png";
import slide14 from "../../assets/drd/lesson13/slide-14.png";
import slide15 from "../../assets/drd/lesson13/slide-15.png";
import slide16 from "../../assets/drd/lesson13/slide-16.png";
import slide17 from "../../assets/drd/lesson13/slide-17.png";
import { cx, tr, DRDPill as Pill, DRDStatCard as StatCard, DRDSectionHeader as SectionHeader, DRDResourceLinks } from "./shared.jsx";


const SLIDES_URL = "#";
const CODE_URL = "#";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/19sBK8F7QXrdj3T2o_be2Fc9c7cA760qToVHukmiFuzw/edit";
const RECORDING_URL = "#";
const slideImages = [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10, slide11, slide12, slide13, slide14, slide15, slide16, slide17];

const ui = {
  en: { mark: "Mark completed", done: "Completed", dashboard: "DRD dashboard", previous: "Previous", next: "Next", previousTitle: "M2.5 Normalization II", nextTitle: "M2.7 Batch + clustering", current: "M2.6", resources: "Class resources", slides: "Slides", code: "R script", transcript: "Transcript", recording: "Recording", slide: "Slide", zoom: "Click to zoom", close: "Close zoom", reportWatch: "Report watch", openAnswer: "Open expanded answer", hideAnswer: "Hide answer", include: "What to include", trap: "Common trap", model: "Report-ready wording", rcode: "R code", interpretation: "Interpretation", professor: "Professor emphasis", reportMove: "Report move", checkpoint: "Checkpoint", correct: "Correct", notQuite: "Not quite", trainer: "Report paragraph trainer", placeholder: "Write a report-style paragraph here...", words: "words", showAnswer: "Show answer", quickLab: "Mini-lab" },
  es: { mark: "Marcar completada", done: "Completada", dashboard: "Dashboard DRD", previous: "Anterior", next: "Siguiente", previousTitle: "M2.5 Normalización II", nextTitle: "M2.7 Batch + clustering", current: "M2.6", resources: "Recursos de clase", slides: "Slides", code: "Script R", transcript: "Transcripción", recording: "Recording", slide: "Diapositiva", zoom: "Click para ampliar", close: "Cerrar zoom", reportWatch: "Report watch", openAnswer: "Abrir respuesta desarrollada", hideAnswer: "Ocultar respuesta", include: "Qué incluir", trap: "Trampa común", model: "Redacción lista para report", rcode: "Código R", interpretation: "Interpretación", professor: "Énfasis del profesor", reportMove: "Movimiento para report", checkpoint: "Checkpoint", correct: "Correcto", notQuite: "Casi", trainer: "Entrenador de párrafo de report", placeholder: "Escribe aquí un párrafo estilo report...", words: "palabras", showAnswer: "Mostrar respuesta", quickLab: "Mini-lab" },
  fa: { mark: "علامت کامل‌شده", done: "کامل شد", dashboard: "داشبورد DRD", previous: "قبلی", next: "بعدی", previousTitle: "M2.5 نرمال‌سازی II", nextTitle: "M2.7 batch + clustering", current: "M2.6", resources: "منابع کلاس", slides: "اسلایدها", code: "R script", transcript: "رونوشت", recording: "Recording", slide: "اسلاید", zoom: "برای بزرگ‌نمایی کلیک کن", close: "بستن بزرگ‌نمایی", reportWatch: "نکته برای گزارش", openAnswer: "باز کردن پاسخ کامل", hideAnswer: "پنهان کردن پاسخ", include: "چه چیزهایی باید بیاید", trap: "دام رایج", model: "عبارت آماده برای گزارش", rcode: "کد R", interpretation: "تفسیر", professor: "تأکید استاد", reportMove: "حرکت مناسب گزارش", checkpoint: "Checkpoint", correct: "درست", notQuite: "نه کاملاً", trainer: "تمرین پاراگراف گزارش", placeholder: "یک پاراگراف به سبک گزارش بنویسید...", words: "کلمه", showAnswer: "نمایش پاسخ", quickLab: "مینی‌لب" }
};

const copy = {
  hero: {
    eyebrow: { en: "Module 2 · June 4 · multiple testing + visualization", es: "Módulo 2 · 4 de junio · multiple testing + visualización", fa: "ماژول ۲ · ۴ ژوئن · multiple testing + visualization" },
    title: { en: "Correct p-values and visualize differential methylation", es: "Corregir p-values y visualizar metilación diferencial", fa: "تصحیح p-value و نمایش methylation افتراقی" },
    subtitle: { en: "A practical lesson built from Lesson 6: correct thousands of CpG tests, interpret FWER versus FDR, build volcano and Manhattan plots, and use heatmaps with hierarchical clustering for report-ready visualization.", es: "Una lección práctica basada en Lesson 6: corregir miles de tests CpG, interpretar FWER frente a FDR, construir volcano y Manhattan plots, y usar heatmaps con clustering jerárquico para visualización lista para report.", fa: "یک درس عملی بر اساس Lesson 6: تصحیح هزاران آزمون CpG، تفسیر FWER در برابر FDR، ساخت volcano و Manhattan plot، و استفاده از heatmap با hierarchical clustering برای visualization مناسب گزارش." },
    tags: { en: ["p.adjust", "Bonferroni", "BH/FDR", "volcano", "Manhattan", "heatmap", "clustering"], es: ["p.adjust", "Bonferroni", "BH/FDR", "volcano", "Manhattan", "heatmap", "clustering"], fa: ["p.adjust", "Bonferroni", "BH/FDR", "volcano", "Manhattan", "heatmap", "clustering"] },
    bigIdea: { en: "With 485k CpGs, a nominal p-value is not enough: the report must say how significance was corrected and how results were visualized.", es: "Con 485k CpGs, un p-value nominal no basta: el report debe decir cómo se corrigió la significancia y cómo se visualizaron los resultados.", fa: "با ۴۸۵ هزار CpG، p-value اسمی کافی نیست: گزارش باید بگوید significance چگونه تصحیح شد و نتایج چگونه visualized شدند." }
  },
  stats: [
    { label: { en: "Module", es: "Módulo", fa: "ماژول" }, value: "2", tone: "green" },
    { label: { en: "Date", es: "Fecha", fa: "تاریخ" }, value: "Jun 4" },
    { label: { en: "Core", es: "Core", fa: "محور" }, value: "FDR", tone: "green" },
    { label: { en: "Output", es: "Output", fa: "خروجی" }, value: "Plots" }
  ]
};

const learningBlocks = [
  {
    id: "ordering-iteration",
    eyebrow: { en: "0 · bridge from M2.5", es: "0 · puente desde M2.5", fa: "۰ · پل از M2.5" },
    title: { en: "Before testing thousands of CpGs, verify sample order", es: "Antes de testear miles de CpGs, verifica el orden de las muestras", fa: "قبل از آزمون هزاران CpG، ترتیب sampleها را بررسی کن" },
    body: { en: "The June 4 transcript begins by returning to the May 22 exercise: beta matrices have CpGs on rows and samples on columns, while the sample sheet stores metadata separately. The grouping vector must match the column order before using formula syntax such as beta ~ Group.", es: "La transcripción del 4 de junio empieza volviendo al ejercicio del 22 de mayo: las matrices beta tienen CpGs en filas y muestras en columnas, mientras la SampleSheet guarda metadata por separado. El vector de grupos debe coincidir con el orden de columnas antes de usar sintaxis tipo beta ~ Group.", fa: "رونوشت ۴ ژوئن با بازگشت به تمرین ۲۲ مه شروع می‌شود: ماتریس beta، CpGها را در ردیف و sampleها را در ستون دارد، در حالی که SampleSheet metadata را جدا نگه می‌دارد. vector گروه‌بندی باید قبل از syntax مثل beta ~ Group با ترتیب ستون‌ها یکی باشد." },
    slides: [
      { n: 1, title: { en: "Multiple testing context", es: "Contexto de multiple testing", fa: "زمینه multiple testing" }, body: { en: "The slide deck starts from Type I and Type II errors before scaling to many CpGs.", es: "El deck parte de errores tipo I y II antes de escalar a muchos CpGs.", fa: "deck از خطاهای نوع I و II شروع می‌کند و سپس به CpGهای زیاد گسترش می‌دهد." } },
      { n: 2, title: { en: "485,512 comparisons", es: "485,512 comparaciones", fa: "۴۸۵٬۵۱۲ مقایسه" }, body: { en: "At α = 0.05, about 24,275 probes would be expected by chance alone.", es: "Con α = 0.05, esperaríamos unas 24,275 probes por puro azar.", fa: "با α = 0.05 حدود ۲۴٬۲۷۵ probe فقط بر اثر شانس انتظار می‌رود." } }
    ],
    watch: {
      title: { en: "Report watch: sample order is a hidden source of wrong results", es: "Report watch: el orden de muestras es una fuente oculta de errores", fa: "نکته گزارش: ترتیب sample منبع پنهان خطاست" },
      include: { en: ["How sample IDs were reconstructed from slide and array fields.", "How matrix column names were compared with SampleSheet sample names.", "Which phenotype column was used as the grouping variable."], es: ["Cómo se reconstruyeron sample IDs desde slide y array.", "Cómo se compararon colnames de la matriz con los sample names de la SampleSheet.", "Qué columna fenotípica se usó como variable de grupo."], fa: ["sample IDها چگونه از slide و array ساخته شدند.", "چگونه colnameهای matrix با sample nameهای SampleSheet مقایسه شدند.", "کدام ستون phenotype به‌عنوان variable گروه‌بندی استفاده شد."] },
      trap: { en: "Using %in% checks membership, not order. For model formulas, order matters.", es: "Usar %in% revisa pertenencia, no orden. Para fórmulas de modelo, el orden importa.", fa: "%in% membership را چک می‌کند، نه ترتیب را. در formulaهای مدل، ترتیب مهم است." },
      model: { en: "Before row-wise testing, sample identifiers were reconstructed from Slide and Array fields and compared with the beta-matrix column names to ensure that the phenotype vector matched the methylation matrix order.", es: "Antes del testing por filas, los identificadores de muestra se reconstruyeron desde Slide y Array y se compararon con los nombres de columna de la matriz beta para asegurar que el vector fenotípico coincidiera con el orden de la matriz de metilación.", fa: "قبل از آزمون ردیفی، شناسه‌های sample از فیلدهای Slide و Array بازسازی و با نام ستون‌های ماتریس beta مقایسه شدند تا vector phenotype با ترتیب ماتریس methylation هماهنگ باشد." }
    },
    codeSteps: ["orderCheck", "rowApply"]
  },
  {
    id: "multiple-testing",
    eyebrow: { en: "1 · p-value correction", es: "1 · corrección de p-values", fa: "۱ · تصحیح p-value" },
    title: { en: "FWER is stricter; FDR is more practical for omics discovery", es: "FWER es más estricto; FDR es más práctico para descubrimiento ómico", fa: "FWER سخت‌گیرتر است؛ FDR برای کشف omics عملی‌تر است" },
    body: { en: "The slides compare Bonferroni/FWER with Benjamini-Hochberg/FDR. Bonferroni protects against any false positive but can generate many false negatives. FDR allows a controlled proportion of false discoveries and is commonly used for high-dimensional methylation results.", es: "Las slides comparan Bonferroni/FWER con Benjamini-Hochberg/FDR. Bonferroni protege contra cualquier falso positivo pero puede generar muchos falsos negativos. FDR permite una proporción controlada de descubrimientos falsos y se usa comúnmente en resultados de metilación de alta dimensión.", fa: "اسلایدها Bonferroni/FWER را با Benjamini-Hochberg/FDR مقایسه می‌کنند. Bonferroni از هر false positive محافظت می‌کند اما false negative زیادی ایجاد می‌کند. FDR نسبت کنترل‌شده‌ای از false discovery را می‌پذیرد و برای نتایج methylation پرابعاد رایج است." },
    slides: [
      { n: 3, title: { en: "Nominal p-values", es: "p-values nominales", fa: "p-value اسمی" }, body: { en: "Five toy CpGs introduce the correction logic.", es: "Cinco CpGs de ejemplo introducen la lógica de corrección.", fa: "پنج CpG آموزشی منطق correction را معرفی می‌کنند." } },
      { n: 4, title: { en: "Bonferroni threshold", es: "Threshold Bonferroni", fa: "threshold بونفرونی" }, body: { en: "Correct the significance threshold by m tests, or equivalently adjust p-values.", es: "Corrige el threshold por m tests, o ajusta los p-values de forma equivalente.", fa: "آستانه significance را با تعداد m آزمون تصحیح کن، یا p-valueها را معادل آن adjust کن." } },
      { n: 5, title: { en: "Adjusted p-values", es: "p-values ajustados", fa: "p-value تنظیم‌شده" }, body: { en: "The same decision can be expressed as adjusted p < 0.05.", es: "La misma decisión puede expresarse como p ajustado < 0.05.", fa: "همان تصمیم می‌تواند به‌صورت adjusted p < 0.05 بیان شود." } },
      { n: 6, title: { en: "BH/FDR ranking", es: "Ranking BH/FDR", fa: "رتبه‌بندی BH/FDR" }, body: { en: "Benjamini-Hochberg ranks p-values and compares them with rank-dependent critical values.", es: "Benjamini-Hochberg ordena p-values y los compara con valores críticos dependientes del ranking.", fa: "Benjamini-Hochberg p-valueها را رتبه‌بندی کرده و با critical value وابسته به رتبه مقایسه می‌کند." } },
      { n: 8, title: { en: "Choosing FWER or FDR", es: "Elegir FWER o FDR", fa: "انتخاب FWER یا FDR" }, body: { en: "FWER gives a cleaner but shorter list; FDR is better when discovery is the goal.", es: "FWER da una lista más limpia pero más corta; FDR es mejor cuando el objetivo es descubrimiento.", fa: "FWER لیستی تمیزتر اما کوتاه‌تر می‌دهد؛ FDR وقتی هدف discovery است بهتر است." } }
    ],
    watch: {
      title: { en: "Report watch: never report only nominal p-values", es: "Report watch: nunca reportes solo p-values nominales", fa: "نکته گزارش: فقط p-value اسمی گزارش نکنید" },
      include: { en: ["Number of CpGs/tests included in the correction.", "Correction method: BH/FDR and/or Bonferroni.", "How many probes remain significant after correction."], es: ["Número de CpGs/tests incluidos en la corrección.", "Método de corrección: BH/FDR y/o Bonferroni.", "Cuántas probes permanecen significativas después de corregir."], fa: ["تعداد CpG/testهای واردشده در correction.", "روش correction: BH/FDR و/یا Bonferroni.", "چند probe بعد از correction significant می‌مانند."] },
      trap: { en: "Saying p < 0.05 without correction is misleading in methylation arrays.", es: "Decir p < 0.05 sin corrección es engañoso en methylation arrays.", fa: "گفتن p < 0.05 بدون correction در methylation array گمراه‌کننده است." },
      model: { en: "P-values from row-wise tests were adjusted using Benjamini-Hochberg FDR, with Bonferroni used as a conservative reference. Differentially methylated probes were interpreted only after multiple-testing correction.", es: "Los p-values de tests por filas se ajustaron usando Benjamini-Hochberg FDR, con Bonferroni como referencia conservadora. Las probes diferencialmente metiladas se interpretaron solo después de corregir por multiple testing.", fa: "p-valueهای آزمون‌های ردیفی با Benjamini-Hochberg FDR تنظیم شدند و Bonferroni به‌عنوان مرجع محافظه‌کارانه استفاده شد. probeهای differential methylation فقط بعد از correction multiple testing تفسیر شدند." }
    },
    codeSteps: ["pAdjust"]
  },
  {
    id: "visualization",
    eyebrow: { en: "2 · result visualization", es: "2 · visualización de resultados", fa: "۲ · visualization نتایج" },
    title: { en: "Volcano and Manhattan plots summarize effect, significance and genomic position", es: "Volcano y Manhattan resumen efecto, significancia y posición genómica", fa: "volcano و Manhattan اثر، significance و موقعیت ژنومی را خلاصه می‌کنند" },
    body: { en: "After correction, the pipeline turns test outputs into interpretable graphics. Volcano plots combine methylation difference with −log10(p-value); Manhattan plots require annotation with chromosome and genomic position.", es: "Después de corregir, el pipeline convierte outputs estadísticos en gráficas interpretables. Los volcano plots combinan diferencia de metilación con −log10(p-value); los Manhattan plots requieren anotación con cromosoma y posición genómica.", fa: "پس از correction، pipeline خروجی‌های آماری را به نمودارهای قابل تفسیر تبدیل می‌کند. volcano plot تفاوت methylation را با −log10(p-value) ترکیب می‌کند؛ Manhattan plot به annotation شامل chromosome و موقعیت ژنومی نیاز دارد." },
    slides: [
      { n: 9, title: { en: "Visualization section", es: "Sección de visualización", fa: "بخش visualization" }, body: { en: "The lesson shifts from statistical decision to graphical reporting.", es: "La lección pasa de decisión estadística a reporte gráfico.", fa: "درس از تصمیم آماری به گزارش تصویری می‌رود." } },
      { n: 10, title: { en: "Volcano plot", es: "Volcano plot", fa: "volcano plot" }, body: { en: "X-axis: methylation difference. Y-axis: −log10(p-value).", es: "Eje X: diferencia de metilación. Eje Y: −log10(p-value).", fa: "محور X: تفاوت methylation. محور Y: −log10(p-value)." } },
      { n: 11, title: { en: "Manhattan plot", es: "Manhattan plot", fa: "Manhattan plot" }, body: { en: "The x-axis follows genome position; peaks highlight loci with low p-values.", es: "El eje X sigue posición genómica; los picos resaltan loci con p-values bajos.", fa: "محور X موقعیت ژنومی را دنبال می‌کند؛ قله‌ها loci با p-value پایین را نشان می‌دهند." } }
    ],
    watch: {
      title: { en: "Report watch: plots are not decoration", es: "Report watch: los plots no son decoración", fa: "نکته گزارش: plot تزئین نیست" },
      include: { en: ["What each axis represents.", "Which p-value threshold or annotation threshold was drawn.", "Whether plotted p-values were raw or adjusted."], es: ["Qué representa cada eje.", "Qué threshold de p-value o anotación se dibujó.", "Si los p-values graficados eran raw o ajustados."], fa: ["هر محور چه چیزی را نشان می‌دهد.", "کدام threshold برای p-value یا annotation رسم شد.", "p-valueهای رسم‌شده raw بودند یا adjusted."] },
      trap: { en: "A volcano plot with raw p-values should not be described as final corrected evidence.", es: "Un volcano con p-values raw no debe describirse como evidencia corregida final.", fa: "volcano با p-value raw نباید evidence نهایی corrected توصیف شود." },
      model: { en: "Volcano plots were used to visualize both effect size and statistical evidence, while Manhattan plots mapped probe-level evidence along genomic coordinates after merging CpG identifiers with manifest annotation.", es: "Los volcano plots se usaron para visualizar tanto tamaño de efecto como evidencia estadística, mientras los Manhattan plots mapearon evidencia probe-level sobre coordenadas genómicas tras unir CpG IDs con la anotación del manifest.", fa: "volcano plot برای نمایش effect size و evidence آماری استفاده شد، در حالی که Manhattan plot evidence در سطح probe را پس از merge شناسه CpG با annotation manifest روی مختصات ژنومی نشان داد." }
    },
    codeSteps: ["volcano", "manhattan"]
  },
  {
    id: "heatmap-clustering",
    eyebrow: { en: "3 · heatmap + clustering", es: "3 · heatmap + clustering", fa: "۳ · heatmap + clustering" },
    title: { en: "Heatmaps translate top CpGs into sample-level structure", es: "Los heatmaps traducen top CpGs en estructura entre muestras", fa: "heatmapها top CpGها را به ساختار sample-level تبدیل می‌کنند" },
    body: { en: "The final part uses the top 100 significant CpGs to build heatmaps with hierarchical clustering. Complete, single and average linkage are compared, and the side color bar marks group membership.", es: "La parte final usa los top 100 CpGs significativos para construir heatmaps con clustering jerárquico. Se comparan complete, single y average linkage, y la barra lateral de color marca la pertenencia a grupos.", fa: "بخش نهایی از ۱۰۰ CpG برتر significant برای ساخت heatmap با hierarchical clustering استفاده می‌کند. complete، single و average linkage مقایسه می‌شوند و نوار رنگی کنار نمودار membership گروه را نشان می‌دهد." },
    slides: [
      { n: 12, title: { en: "Heatmap definition", es: "Definición de heatmap", fa: "تعریف heatmap" }, body: { en: "Values in a matrix are represented as colors.", es: "Los valores de una matriz se representan como colores.", fa: "مقادیر یک matrix به‌صورت رنگ نمایش داده می‌شوند." } },
      { n: 13, title: { en: "AGNES vs DIANA", es: "AGNES vs DIANA", fa: "AGNES در برابر DIANA" }, body: { en: "Agglomerative clustering is bottom-up; divisive clustering is top-down.", es: "El clustering aglomerativo es bottom-up; el divisivo es top-down.", fa: "clustering agglomerative از پایین به بالا است؛ divisive از بالا به پایین." } },
      { n: 14, title: { en: "Hierarchical steps", es: "Pasos jerárquicos", fa: "مراحل hierarchical" }, body: { en: "Compute distances, choose closest clusters, fuse, and recalculate distances.", es: "Calcular distancias, elegir clusters más cercanos, fusionar y recalcular distancias.", fa: "distance را محاسبه، نزدیک‌ترین clusterها را انتخاب، fuse و distance را بازحساب کن." } },
      { n: 15, title: { en: "Distance metrics", es: "Métricas de distancia", fa: "metricهای distance" }, body: { en: "Euclidean, Manhattan and maximum distance emphasize different aspects of dissimilarity.", es: "Euclidean, Manhattan y maximum distance enfatizan distintos aspectos de disimilitud.", fa: "Euclidean، Manhattan و maximum distance جنبه‌های متفاوت dissimilarity را برجسته می‌کنند." } },
      { n: 16, title: { en: "Linkage methods", es: "Métodos de linkage", fa: "روش‌های linkage" }, body: { en: "Single, complete and average linkage define distance between clusters differently.", es: "Single, complete y average linkage definen la distancia entre clusters de forma distinta.", fa: "single، complete و average linkage فاصله بین clusterها را متفاوت تعریف می‌کنند." } },
      { n: 17, title: { en: "Shape of clusters", es: "Forma de clusters", fa: "شکل clusterها" }, body: { en: "Single can chain, complete is compact, average is intermediate.", es: "Single puede formar cadenas, complete es compacto, average queda intermedio.", fa: "single می‌تواند chain بسازد، complete compact است و average حالت میانی دارد." } }
    ],
    watch: {
      title: { en: "Report watch: specify heatmap inputs and clustering settings", es: "Report watch: especifica inputs y settings del heatmap", fa: "نکته گزارش: input و settingهای heatmap را مشخص کنید" },
      include: { en: ["How many CpGs were selected and by which ranking.", "Whether values were scaled or unscaled.", "Distance and linkage methods used for row/column clustering."], es: ["Cuántos CpGs se seleccionaron y con qué ranking.", "Si los valores estaban scaled o no scaled.", "Distancia y linkage usados para clustering de filas/columnas."], fa: ["چند CpG و بر اساس کدام ranking انتخاب شدند.", "مقادیر scaled بودند یا unscaled.", "روش distance و linkage برای clustering ردیف/ستون." ] },
      trap: { en: "A heatmap without explaining the color scale and clustering method is hard to interpret.", es: "Un heatmap sin explicar escala de color y método de clustering es difícil de interpretar.", fa: "heatmap بدون توضیح scale رنگ و روش clustering سخت تفسیر می‌شود." },
      model: { en: "Heatmaps were generated from the top 100 CpGs using beta values and hierarchical clustering. The column side bar encoded group membership, allowing visual assessment of whether methylation profiles separated samples according to phenotype.", es: "Los heatmaps se generaron desde los top 100 CpGs usando beta values y clustering jerárquico. La barra lateral de columnas codificó la pertenencia a grupo, permitiendo evaluar visualmente si los perfiles de metilación separaban las muestras según fenotipo.", fa: "heatmapها از ۱۰۰ CpG برتر با beta value و hierarchical clustering ساخته شدند. نوار رنگی ستون‌ها membership گروه را کدگذاری کرد و امکان بررسی بصری جدایی نمونه‌ها بر اساس phenotype را داد." }
    },
    codeSteps: ["heatmap"]
  }
];

const codeStepMap = {
  orderCheck: {
    label: { en: "1 · sample order", es: "1 · orden de muestras", fa: "۱ · ترتیب sample" },
    title: { en: "Rebuild sample names and test identity", es: "Reconstruir nombres de muestra y comprobar identidad", fa: "بازسازی sample name و بررسی identity" },
    code: `pheno <- read.csv("../Lesson3/Input_data/SampleSheet.csv", header = TRUE, stringsAsFactors = TRUE)
pheno$sample_name <- paste0(pheno$Slide, "_", pheno$Array)

table(colnames(beta_preprocessQuantile) == pheno$sample_name)`,
    interpretation: { en: "The model formula does not automatically match sample IDs. This check verifies element-wise and order-wise identity before assigning groups.", es: "La fórmula del modelo no empareja sample IDs automáticamente. Este chequeo verifica identidad elemento por elemento y en orden antes de asignar grupos.", fa: "formula مدل sample IDها را خودکار match نمی‌کند. این check قبل از assign کردن گروه‌ها، identity عنصر به عنصر و به ترتیب را بررسی می‌کند." },
    report: { en: "State that sample order was checked before row-wise testing.", es: "Indica que el orden de muestras se verificó antes del testing por filas.", fa: "بنویسید که ترتیب sampleها قبل از آزمون ردیفی بررسی شد." }
  },
  rowApply: {
    label: { en: "2 · row-wise tests", es: "2 · tests por filas", fa: "۲ · آزمون‌های ردیفی" },
    title: { en: "Apply t-test/Wilcoxon to many CpGs", es: "Aplicar t-test/Wilcoxon a muchos CpGs", fa: "اجرای t-test/Wilcoxon روی CpGهای زیاد" },
    code: `My_ttest_function <- function(x) {
  t_test <- t.test(x ~ pheno$Group)
  return(t_test$p.value)
}

My_wilcox_function <- function(x) {
  wilcox <- wilcox.test(x ~ pheno$Group)
  return(wilcox$p.value)
}

pValues_ttest_first20k <- apply(first20k_beta_preprocessQuantile, 1, My_ttest_function)
pValues_wilcox_first20k <- apply(first20k_beta_preprocessQuantile, 1, My_wilcox_function)`,
    interpretation: { en: "apply(..., 1, ...) repeats the function row-wise, returning one p-value per CpG probe.", es: "apply(..., 1, ...) repite la función por filas, devolviendo un p-value por probe CpG.", fa: "apply(..., 1, ...) تابع را روی ردیف‌ها تکرار می‌کند و برای هر probe CpG یک p-value برمی‌گرداند." },
    report: { en: "Mention whether the analysis used a teaching subset or the full probe set.", es: "Menciona si el análisis usó un subset didáctico o todo el set de probes.", fa: "ذکر کنید analysis از subset آموزشی استفاده کرد یا کل probe set." }
  },
  pAdjust: {
    label: { en: "3 · p.adjust", es: "3 · p.adjust", fa: "۳ · p.adjust" },
    title: { en: "Correct p-values with BH and Bonferroni", es: "Corregir p-values con BH y Bonferroni", fa: "تصحیح p-value با BH و Bonferroni" },
    code: `corrected_pValues_BH <- p.adjust(final_ttest_first20k$pValues_ttest_first20k, "BH")
corrected_pValues_Bonf <- p.adjust(final_ttest_first20k$pValues_ttest_first20k, "bonferroni")

final_ttest_first20k_corrected <- data.frame(
  final_ttest_first20k,
  corrected_pValues_BH,
  corrected_pValues_Bonf
)

boxplot(final_ttest_first20k_corrected[, 9:11])
dim(final_ttest_first20k_corrected[final_ttest_first20k_corrected$corrected_pValues_BH <= 0.05,])`,
    interpretation: { en: "p.adjust() transforms a vector of nominal p-values into adjusted p-values. The boxplot helps compare raw, BH and Bonferroni distributions.", es: "p.adjust() transforma un vector de p-values nominales en p-values ajustados. El boxplot ayuda a comparar distribuciones raw, BH y Bonferroni.", fa: "p.adjust() vector p-valueهای اسمی را به p-valueهای adjusted تبدیل می‌کند. boxplot توزیع raw، BH و Bonferroni را مقایسه می‌کند." },
    report: { en: "Report the correction method and the number of CpGs surviving each threshold.", es: "Reporta el método de corrección y el número de CpGs que sobreviven cada threshold.", fa: "روش correction و تعداد CpGهای باقی‌مانده در هر threshold را گزارش کنید." }
  },
  volcano: {
    label: { en: "4 · volcano", es: "4 · volcano", fa: "۴ · volcano" },
    title: { en: "Combine delta beta and −log10(p-value)", es: "Combinar delta beta y −log10(p-value)", fa: "ترکیب delta beta و −log10(p-value)" },
    code: `beta_first20k_groupA <- beta_first20k[, pheno$Group == "A"]
mean_beta_first20k_groupA <- apply(beta_first20k_groupA, 1, mean)

beta_first20k_groupB <- beta_first20k[, pheno$Group == "B"]
mean_beta_first20k_groupB <- apply(beta_first20k_groupB, 1, mean)

delta_first20k <- mean_beta_first20k_groupB - mean_beta_first20k_groupA
toVolcPlot <- data.frame(delta_first20k, -log10(final_ttest_first20k_corrected$pValues_ttest))

plot(toVolcPlot[,1], toVolcPlot[,2], pch = 16, cex = 0.5)
abline(h = -log10(0.01), col = "red")`,
    interpretation: { en: "The x-axis is methylation difference between groups; the y-axis is statistical evidence. The horizontal line marks a nominal p-value threshold.", es: "El eje X es la diferencia de metilación entre grupos; el eje Y es evidencia estadística. La línea horizontal marca un threshold nominal de p-value.", fa: "محور X تفاوت methylation بین گروه‌هاست؛ محور Y evidence آماری است. خط افقی threshold اسمی p-value را نشان می‌دهد." },
    report: { en: "Specify whether the threshold is nominal or adjusted.", es: "Especifica si el threshold es nominal o ajustado.", fa: "مشخص کنید threshold اسمی است یا adjusted." }
  },
  manhattan: {
    label: { en: "5 · Manhattan", es: "5 · Manhattan", fa: "۵ · Manhattan" },
    title: { en: "Merge statistics with manifest annotation", es: "Unir estadísticas con anotación del manifest", fa: "merge آمار با annotation manifest" },
    code: `library(qqman)
load("final_ttest_reduced.RData")
load("../Lesson2/Illumina450Manifest_clean.RData")

final_ttest_reduced <- data.frame(rownames(final_ttest_reduced), final_ttest_reduced)
colnames(final_ttest_reduced)[1] <- "IlmnID"

final_ttest_reduced_annotated <- merge(final_ttest_reduced, Illumina450Manifest_clean, by = "IlmnID")
input_Manhattan <- final_ttest_reduced_annotated[colnames(final_ttest_reduced_annotated) %in% c("IlmnID", "CHR", "MAPINFO", "pValues_ttest")]
input_Manhattan$CHR <- as.numeric(factor(input_Manhattan$CHR, levels = c(1:22, "X", "Y")))

manhattan(input_Manhattan, snp = "IlmnID", chr = "CHR", bp = "MAPINFO", p = "pValues_ttest")`,
    interpretation: { en: "Manhattan plots require probe IDs, chromosome, genomic coordinate and p-value. The manifest supplies genomic annotation.", es: "Los Manhattan plots requieren probe ID, cromosoma, coordenada genómica y p-value. El manifest aporta la anotación genómica.", fa: "Manhattan plot به probe ID، chromosome، coordinate ژنومی و p-value نیاز دارد. manifest annotation ژنومی را فراهم می‌کند." },
    report: { en: "Describe how genomic coordinates were obtained before interpreting peaks.", es: "Describe cómo se obtuvieron coordenadas genómicas antes de interpretar picos.", fa: "قبل از تفسیر peaks توضیح دهید مختصات ژنومی چگونه به‌دست آمد." }
  },
  heatmap: {
    label: { en: "6 · heatmap", es: "6 · heatmap", fa: "۶ · heatmap" },
    title: { en: "Cluster the top 100 CpGs", es: "Clusterizar los top 100 CpGs", fa: "clustering صد CpG برتر" },
    code: `library(gplots)
input_heatmap <- as.matrix(final_ttest_first20k[1:100, 1:8])
colorbar <- c("green", "green", "orange", "orange", "green", "green", "orange", "orange")

heatmap.2(
  input_heatmap,
  col = terrain.colors(100),
  Rowv = TRUE,
  Colv = TRUE,
  dendrogram = "both",
  key = TRUE,
  ColSideColors = colorbar,
  density.info = "none",
  trace = "none",
  scale = "none",
  symm = FALSE,
  main = "Complete linkage"
)`,
    interpretation: { en: "The heatmap shows whether the top CpGs separate samples into the expected groups. Linkage methods can be swapped to compare clustering stability.", es: "El heatmap muestra si los top CpGs separan las muestras en los grupos esperados. Los métodos de linkage pueden cambiarse para comparar estabilidad del clustering.", fa: "heatmap نشان می‌دهد top CpGها sampleها را به گروه‌های مورد انتظار جدا می‌کنند یا نه. روش‌های linkage قابل تغییرند تا stability clustering مقایسه شود." },
    report: { en: "Report the CpG selection rule, value scale, color bar and clustering method.", es: "Reporta la regla de selección de CpGs, escala de valores, barra de color y método de clustering.", fa: "قانون انتخاب CpG، scale مقدار، color bar و روش clustering را گزارش کنید." }
  }
};

const checks = [
  { q: { en: "Why is p < 0.05 not enough for 485k CpGs?", es: "¿Por qué p < 0.05 no basta para 485k CpGs?", fa: "چرا p < 0.05 برای ۴۸۵ هزار CpG کافی نیست؟" }, options: ["Too many false positives", "Because beta values are colors", "Because PCA replaces p-values"], answer: "Too many false positives", why: { en: "At α = 0.05, thousands of CpGs may appear significant by chance.", es: "Con α = 0.05, miles de CpGs pueden parecer significativos por azar.", fa: "با α = 0.05 هزاران CpG ممکن است صرفاً با شانس significant شوند." } },
  { q: { en: "Which method is usually more conservative?", es: "¿Qué método suele ser más conservador?", fa: "کدام روش معمولاً محافظه‌کارتر است؟" }, options: ["Bonferroni", "BH/FDR", "No correction"], answer: "Bonferroni", why: { en: "Bonferroni controls the probability of any false positive.", es: "Bonferroni controla la probabilidad de cualquier falso positivo.", fa: "Bonferroni احتمال هر false positive را کنترل می‌کند." } },
  { q: { en: "What does a Manhattan plot need besides p-values?", es: "¿Qué necesita un Manhattan plot además de p-values?", fa: "Manhattan plot علاوه بر p-value به چه نیاز دارد؟" }, options: ["Chromosome and genomic position", "Only sample age", "Only beta density"], answer: "Chromosome and genomic position", why: { en: "The x-axis follows genomic coordinates, so annotation is required.", es: "El eje X sigue coordenadas genómicas, así que se requiere anotación.", fa: "محور X مختصات ژنومی را دنبال می‌کند، پس annotation لازم است." } }
];

const trainer = {
  prompt: { en: "Write a short report paragraph justifying multiple-testing correction and one visualization choice.", es: "Escribe un párrafo corto de report justificando la corrección por multiple testing y una elección de visualización.", fa: "یک پاراگراف کوتاه گزارش بنویسید که correction multiple testing و یک انتخاب visualization را توجیه کند." },
  model: { en: "Because the analysis tested thousands of CpG probes, nominal p-values were adjusted to control false discoveries. Benjamini-Hochberg FDR was used as the main discovery-oriented correction, with Bonferroni considered as a stricter reference. Volcano plots summarized effect size and significance, while heatmaps of the top CpGs were used to evaluate whether methylation profiles separated the samples according to group.", es: "Como el análisis testeó miles de probes CpG, los p-values nominales se ajustaron para controlar falsos descubrimientos. Benjamini-Hochberg FDR se usó como corrección principal orientada a descubrimiento, con Bonferroni como referencia más estricta. Los volcano plots resumieron tamaño de efecto y significancia, mientras los heatmaps de top CpGs se usaron para evaluar si los perfiles de metilación separaban las muestras según grupo.", fa: "چون analysis هزاران probe CpG را آزمون کرد، p-valueهای اسمی برای کنترل false discovery تنظیم شدند. Benjamini-Hochberg FDR به‌عنوان correction اصلی discovery-oriented استفاده شد و Bonferroni به‌عنوان مرجع سخت‌گیرتر در نظر گرفته شد. volcano plotها effect size و significance را خلاصه کردند و heatmapهای top CpG برای ارزیابی جداسازی sampleها بر اساس گروه استفاده شدند." }
};

function ResourceLinks({ lang }) {
  const labels = ui[lang] || ui.es;
  const links = [
    { label: labels.slides, href: SLIDES_URL, tone: "accent" },
    { label: labels.code, href: CODE_URL },
    { label: labels.transcript, href: TRANSCRIPT_URL },
    { label: labels.recording, href: RECORDING_URL, tone: "dark" }
  ];
  return <DRDResourceLinks title={labels.resources} links={links} />;
}
function LessonNav({ lang, isDone, toggle, bottom = false }) {
  const labels = ui[lang] || ui.es;
  return <nav className={cx("rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm", bottom ? "mt-10" : "mb-6")} aria-label="Lesson navigation"><div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"><a href="#/lesson/m2-normalization-2" className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">← {labels.previous}: {labels.previousTitle}</a><div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center"><a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500 transition hover:bg-stone-50">{labels.current} · {labels.dashboard}</a><button type="button" onClick={toggle} className={cx("rounded-full px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5", isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white hover:bg-emerald-700")}>{isDone ? labels.done : labels.mark}</button></div><a href="#/lesson/m2-batch-clustering" className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md">{labels.next}: {labels.nextTitle} →</a></div></nav>;
}
function Hero({ lang }) { return <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#f3fff7]/95 shadow-xl shadow-stone-900/5"><div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"><div className="p-7 md:p-10 lg:p-12"><Pill>{tr(copy.hero.eyebrow, lang)}</Pill><h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{tr(copy.hero.title, lang)}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{tr(copy.hero.subtitle, lang)}</p><div className="mt-6 flex flex-wrap gap-2">{tr(copy.hero.tags, lang).map(tag => <Pill key={tag} tone="stone">{tag}</Pill>)}</div></div><div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0"><div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner"><div className="grid grid-cols-2 gap-3">{copy.stats.map(item => <StatCard key={tr(item.label, lang)} label={tr(item.label, lang)} value={item.value} tone={item.tone}/>)}</div><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">{lang === "es" ? "Pipeline mindset" : lang === "fa" ? "ذهنیت pipeline" : "Pipeline mindset"}</div><p className="mt-2 text-lg font-bold leading-7">{tr(copy.hero.bigIdea, lang)}</p></div><ResourceLinks lang={lang}/></div></div></div></section>; }
function ReportWatch({ lang, watch }) {
  const labels = ui[lang] || ui.es;
  const [open, setOpen] = useState(false);
  return <aside className="mt-6 rounded-[2rem] border border-emerald-200 bg-emerald-50/70 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.reportWatch}</div><p className="mt-2 text-base font-black text-emerald-950">{tr(watch.title, lang)}</p><button type="button" onClick={() => setOpen(!open)} className="mt-4 rounded-full border border-emerald-300 bg-white px-4 py-2 text-sm font-black text-emerald-800 hover:bg-emerald-100">{open ? labels.hideAnswer : labels.openAnswer}</button>{open && <div className="mt-5 space-y-4"><div><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.include}</div><ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-bold leading-6 text-stone-800">{tr(watch.include, lang).map(item => <li key={item}>{item}</li>)}</ul></div><div className="rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">{labels.trap}</div><p className="mt-2 text-sm font-black leading-6 text-amber-950">{tr(watch.trap, lang)}</p></div><div className="rounded-2xl border border-stone-200 bg-white p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.model}</div><p className="mt-2 text-sm font-bold leading-7 text-stone-800">{tr(watch.model, lang)}</p></div></div>}</aside>;
}
function SlideCard({ item, lang, onZoom, full }) {
  const labels = ui[lang] || ui.es;
  return <article className={cx("rounded-[2rem] border border-stone-200 bg-stone-50 p-4", full && "md:col-span-2")}><button type="button" onClick={() => onZoom(item)} className="group block w-full text-left"><div className="overflow-hidden rounded-[1.25rem] border border-stone-200 bg-white"><img src={slideImages[item.n - 1]} alt={`${labels.slide} ${item.n}`} className="aspect-video w-full object-contain transition duration-300 group-hover:scale-[1.02]"/></div><div className="mt-4 flex flex-wrap items-center gap-2"><Pill className="bg-white">{labels.slide} {item.n}</Pill><span className="text-xs font-bold text-stone-500">{labels.zoom}</span></div><h3 className="mt-3 text-xl font-black text-stone-950">{tr(item.title, lang)}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{tr(item.body, lang)}</p></button></article>;
}
function CodeStepArticle({ step, lang, index }) {
  const labels = ui[lang] || ui.es;
  return <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5 shadow-sm md:p-6"><div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"><div><Pill tone="green">{tr(step.label, lang)}</Pill><h3 className="mt-3 text-2xl font-black tracking-[-0.02em] text-stone-950">{tr(step.title, lang)}</h3></div><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{index + 1}</div></div><div className="mt-5 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]"><div className="rounded-[1.5rem] bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">{labels.rcode}</div><pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm font-bold leading-7"><code>{step.code}</code></pre></div><div className="space-y-4"><div className="rounded-[1.5rem] border border-stone-200 bg-white p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.interpretation}</div><p className="mt-3 text-base font-bold leading-8 text-stone-800">{tr(step.interpretation, lang)}</p></div><div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.reportMove}</div><p className="mt-3 text-sm font-black leading-7 text-emerald-950">{tr(step.report, lang)}</p></div></div></div></article>;
}
function LearningBlock({ block, lang, onZoom }) {
  const labels = ui[lang] || ui.es;
  const steps = (block.codeSteps || []).map(key => codeStepMap[key]);
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={tr(block.eyebrow, lang)} title={tr(block.title, lang)}>{tr(block.body, lang)}</SectionHeader><ReportWatch lang={lang} watch={block.watch}/><div className="mt-6 grid gap-6 md:grid-cols-2">{block.slides.map((item, index) => <SlideCard key={item.n} item={item} lang={lang} onZoom={onZoom} full={block.slides.length % 2 === 1 && index === block.slides.length - 1} />)}</div><div className="mt-8 rounded-[2rem] border border-emerald-200 bg-[#f3fff7] p-5 md:p-6"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.professor}</div><p className="mt-2 text-sm font-black leading-7 text-emerald-950">{lang === "es" ? "La lección insiste en convertir cada output en una decisión de report: corrección, threshold, gráfico y lectura biológica deben quedar conectados." : lang === "fa" ? "درس تأکید می‌کند هر output باید به تصمیم گزارش تبدیل شود: correction، threshold، نمودار و تفسیر زیستی باید به هم وصل شوند." : "The lesson emphasizes turning each output into a report decision: correction, threshold, plot and biological reading must be connected."}</p></div>{steps.length > 0 && <div className="mt-6 space-y-6">{steps.map((step, index) => <CodeStepArticle key={tr(step.label, "en")} step={step} lang={lang} index={index} />)}</div>}</section>;
}
function CorrectionLab({ lang }) {
  const [tests, setTests] = useState(485512);
  const expected = Math.round(tests * 0.05);
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={ui[lang]?.quickLab || ui.es.quickLab} title={lang === "es" ? "Mini-lab: falsos positivos esperados" : lang === "fa" ? "مینی‌لب: false positive مورد انتظار" : "Mini-lab: expected false positives"}>{lang === "es" ? "Cambia el número de tests y observa cuántos hits esperas por azar con α = 0.05." : lang === "fa" ? "تعداد testها را تغییر دهید و ببینید با α = 0.05 چند hit صرفاً شانسی انتظار می‌رود." : "Change the number of tests and see how many hits are expected by chance at α = 0.05."}</SectionHeader><input type="range" min="5" max="485512" step="5000" value={tests} onChange={e => setTests(Number(e.target.value))} className="mt-6 w-full accent-emerald-600"/><div className="mt-5 grid gap-4 md:grid-cols-2"><StatCard label={lang === "es" ? "Tests" : lang === "fa" ? "تعداد test" : "Tests"} value={tests.toLocaleString()} tone="green"/><StatCard label={lang === "es" ? "Falsos positivos esperados" : lang === "fa" ? "false positive مورد انتظار" : "Expected false positives"} value={expected.toLocaleString()}/></div></section>;
}
function PlotChoiceLab({ lang }) {
  const [choice, setChoice] = useState("volcano");
  const scenarios = {
    volcano: { label: { en: "Effect + p-value", es: "Efecto + p-value", fa: "اثر + p-value" }, result: { en: "Use a volcano plot: delta beta on x, −log10(p-value) on y.", es: "Usa volcano plot: delta beta en x, −log10(p-value) en y.", fa: "از volcano plot استفاده کن: delta beta روی x و −log10(p-value) روی y." } },
    manhattan: { label: { en: "Genomic position", es: "Posición genómica", fa: "موقعیت ژنومی" }, result: { en: "Use a Manhattan plot after merging p-values with CHR and MAPINFO.", es: "Usa Manhattan plot tras unir p-values con CHR y MAPINFO.", fa: "بعد از merge کردن p-value با CHR و MAPINFO از Manhattan plot استفاده کن." } },
    heatmap: { label: { en: "Sample separation", es: "Separación de muestras", fa: "جدایی sampleها" }, result: { en: "Use a heatmap with clustering on selected top CpGs.", es: "Usa heatmap con clustering sobre top CpGs seleccionados.", fa: "از heatmap با clustering روی top CpGهای انتخاب‌شده استفاده کن." } }
  };
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={ui[lang]?.quickLab || ui.es.quickLab} title={lang === "es" ? "Mini-lab: elegir gráfico" : lang === "fa" ? "مینی‌لب: انتخاب نمودار" : "Mini-lab: choose the plot"}>{lang === "es" ? "Elige qué quieres comunicar en el report." : lang === "fa" ? "انتخاب کنید در گزارش چه چیزی را می‌خواهید منتقل کنید." : "Choose what you want to communicate in the report."}</SectionHeader><div className="mt-6 flex flex-wrap gap-2">{Object.entries(scenarios).map(([key, item]) => <button key={key} type="button" onClick={() => setChoice(key)} className={cx("rounded-full border px-4 py-2 text-sm font-black transition", choice === key ? "border-emerald-500 bg-emerald-100 text-emerald-900" : "border-stone-200 bg-white text-stone-700 hover:border-emerald-300")}>{tr(item.label, lang)}</button>)}</div><div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{lang === "es" ? "Elección" : lang === "fa" ? "انتخاب" : "Choice"}</div><p className="mt-2 text-sm font-black leading-7 text-emerald-950">{tr(scenarios[choice].result, lang)}</p></div></section>;
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
export default function DRDLesson13({ lang = "es", isDone = false, toggle = () => {} }) {
  const [zoom, setZoom] = useState(null);
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><LessonNav lang={lang} isDone={isDone} toggle={toggle}/><Hero lang={lang}/><LearningBlock block={learningBlocks[0]} lang={lang} onZoom={setZoom}/><CorrectionLab lang={lang}/><LearningBlock block={learningBlocks[1]} lang={lang} onZoom={setZoom}/><PlotChoiceLab lang={lang}/><LearningBlock block={learningBlocks[2]} lang={lang} onZoom={setZoom}/><LearningBlock block={learningBlocks[3]} lang={lang} onZoom={setZoom}/><Checkpoints lang={lang}/><Trainer lang={lang}/><LessonNav lang={lang} isDone={isDone} toggle={toggle} bottom/><ZoomModal item={zoom} lang={lang} onClose={() => setZoom(null)}/></main>;
}
