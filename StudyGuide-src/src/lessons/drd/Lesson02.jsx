import React, { useMemo, useState } from "react";
import workflowSlide from "../../assets/drd/lesson02/competitive-workflow.jpg";
import mergedScanSlide from "../../assets/drd/lesson02/merged-scan.jpg";
import maPlotSlide from "../../assets/drd/lesson02/ma-plot.jpg";

const SLIDES_URL = "https://drive.google.com/file/d/1dZoiMM4jpg6J_1Ty_Pwd-kiInbBZS2nX/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1JLwo7lsvMAB2sCSC2wfyHYyh9wQWUoDoO9QYqnfvLoM/edit?usp=drivesdk";
const CLASS_RECORDING_URL = "https://www.youtube.com/watch?v=UqIn_t1T_RU&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=2";

const LESSON2_SLIDES = [
  { src: workflowSlide, slide: 11 },
  { src: mergedScanSlide, slide: 15 },
  { src: maPlotSlide, slide: 33 }
];

const LESSON2_SLIDE_COPY = {
  en: {
    eyebrow: "Slide snapshots",
    title: "Original lecture images for the Stanford array workflow",
    intro: "These images from the real slides make the platform easier to visualize: the lab workflow, the merged scan and the MA-plot logic used downstream.",
    open: "Open slides PDF",
    figures: [
      { title: "The competitive workflow on one slide", body: "This diagram shows the full logic: label the two samples separately, mix them, hybridize them on the same array and read relative abundance from shared probes." },
      { title: "How the merged Cy3/Cy5 scan looks", body: "The overlaid image turns raw fluorescence into an intuitive signal: greener spots favour Cy3, redder spots favour Cy5 and yellow suggests similar abundance." },
      { title: "MA-plot as the bridge to normalization", body: "The slide formalizes M and A so students can see why raw intensities are transformed into log-ratios before assessing bias and performing normalization." }
    ]
  },
  es: {
    eyebrow: "Imágenes de las diapositivas",
    title: "Capturas originales para entender el workflow Stanford",
    intro: "Estas imágenes de las slides reales hacen más visual la plataforma: el flujo experimental, el escaneo fusionado y la lógica del MA-plot que se usa después.",
    open: "Abrir PDF de slides",
    figures: [
      { title: "El workflow competitivo resumido en una slide", body: "Este esquema muestra toda la lógica: marcar por separado las dos muestras, mezclarlas, hibridarlas sobre el mismo array y leer la abundancia relativa usando probes compartidos." },
      { title: "Cómo se ve el escaneo fusionado Cy3/Cy5", body: "La imagen superpuesta convierte la fluorescencia cruda en una señal intuitiva: los spots verdosos favorecen Cy3, los rojizos favorecen Cy5 y el amarillo sugiere abundancia similar." },
      { title: "El MA-plot como puente hacia la normalización", body: "La slide formaliza M y A para que se vea por qué las intensidades crudas se transforman en log-ratios antes de evaluar sesgos y aplicar la normalización." }
    ]
  },
  fa: {
    eyebrow: "تصاویر اسلایدها",
    title: "تصاویر اصلی برای فهم workflow آرایهٔ Stanford",
    intro: "این تصاویر از اسلایدهای واقعی، پلتفرم را دیداری‌تر می‌کنند: workflow آزمایشگاهی، تصویر اسکن ادغام‌شده و منطق MA-plot که در ادامه استفاده می‌شود.",
    open: "باز کردن PDF اسلایدها",
    figures: [
      { title: "workflow رقابتی در یک اسلاید", body: "این نمودار کل منطق را نشان می‌دهد: دو نمونه جداگانه label می‌شوند، با هم مخلوط می‌شوند، روی یک آرایه hybridize می‌شوند و abundance نسبی از probeهای مشترک خوانده می‌شود." },
      { title: "ظاهر اسکن ادغام‌شدهٔ Cy3/Cy5", body: "تصویر روی‌هم‌افتاده fluorescence خام را به یک سیگنال شهودی تبدیل می‌کند: spotهای سبزتر به نفع Cy3 هستند، spotهای قرمزتر به نفع Cy5 و زرد یعنی abundance تقریباً مشابه." },
      { title: "MA-plot به‌عنوان پلِ نرمال‌سازی", body: "این اسلاید M و A را رسمی می‌کند تا روشن شود چرا intensityهای خام پیش از بررسی bias و انجام نرمال‌سازی به log-ratio تبدیل می‌شوند." }
    ]
  }
};

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
    resources: "Class resources", recording: "Class recording",
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
    resources: "Recursos de clase", recording: "Grabación de la clase",
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
    resources: "منابع کلاس", recording: "ضبط کلاس",
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
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><LessonNav lang={lang} position="top" isDone={isDone} toggle={toggle} copy={copy}/><section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5"><div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"><div className="p-7 md:p-10 lg:p-12"><div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.eyebrow}</div><h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{copy.subtitle}</p><div className="mt-6 flex flex-wrap gap-2">{copy.tags.map(tag => <Pill key={tag} tone={tag.includes("Cy") || tag.includes("dye") ? "red" : "stone"}>{tag}</Pill>)}</div></div><div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0"><div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner"><div className="grid grid-cols-2 gap-3"><StatCard label={copy.module} value="1" tone="red"/><StatCard label={copy.exam} value="4Q"/><StatCard label={copy.answer} value="10–12"/><StatCard label={copy.core} value="Cy3/Cy5" tone="red"/></div><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{copy.bigIdea}</div><p className="mt-2 text-lg font-bold leading-7">{copy.bigIdeaText}</p></div><ResourceLinks copy={copy}/></div></div></div></section><Workflow copy={copy}/><ConceptCards copy={copy}/><SlideVisualNotes lang={lang}/><section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1fr]"><SignalInterpreter copy={copy}/><Checkpoint copy={copy}/></section><MAMiniLab copy={copy}/><section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1fr]"><NormalizationExercise copy={copy}/><DesignClarifier copy={copy}/></section><QuizBlock copy={copy}/><ExamTrainer copy={copy}/><LessonNav lang={lang} position="bottom" isDone={isDone} toggle={toggle} copy={copy}/></main>;
}
