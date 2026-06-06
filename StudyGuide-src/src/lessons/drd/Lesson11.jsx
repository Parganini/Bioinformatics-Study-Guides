import React, { useMemo, useState } from "react";

const SLIDES_URL = "https://drive.google.com/file/d/1JSN_XP7mF2r39TUzdiSOMW2Rum5Ij7ya/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/13Wu08yLvUaTITj3PmAC8yupFHzC6g8_zXbmVaGxAsUA/edit?usp=drivesdk";
const RECORDING_URL = "https://www.youtube.com/playlist?list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV";

const ui = {
  en: {
    current: "M1.7",
    dashboard: "DRD dashboard",
    previous: "Previous",
    next: "Next",
    previousTitle: "M1.6 DE genes II",
    nextTitle: "M1.8 Samples and genes II",
    mark: "Mark completed",
    done: "Completed",
    resources: "Class resources",
    slides: "Slides",
    transcript: "Transcript",
    recording: "Recording",
    slide: "Source slide",
    zoom: "Open detail",
    close: "Close",
    professor: "Professor emphasis",
    exam: "Exam watch",
    expand: "Open expanded answer",
    hide: "Hide",
    include: "What to include",
    trap: "Common trap",
    model: "Sample answer",
    checkpoint: "Checkpoint",
    written: "Written exam trainer",
    yourAnswer: "Your answer",
    reveal: "Reveal model answer",
    module: "Module",
    writtenExam: "Written test",
    answerLines: "Answer lines",
    core: "Core idea",
    bigIdea: "Big idea",
    lab: "Mini-lab",
    compare: "Compare",
    interpretation: "Interpretation",
    formula: "Formula",
    source: "Source-based slide guide"
  },
  es: {
    current: "M1.7",
    dashboard: "Dashboard DRD",
    previous: "Anterior",
    next: "Siguiente",
    previousTitle: "M1.6 Genes DE II",
    nextTitle: "M1.8 Muestras y genes II",
    mark: "Marcar completada",
    done: "Completada",
    resources: "Recursos de clase",
    slides: "Slides",
    transcript: "Transcripción",
    recording: "Grabación",
    slide: "Diapo fuente",
    zoom: "Abrir detalle",
    close: "Cerrar",
    professor: "Énfasis de la profesora",
    exam: "Ojo para examen",
    expand: "Abrir respuesta desarrollada",
    hide: "Ocultar",
    include: "Qué incluir",
    trap: "Trampa frecuente",
    model: "Respuesta modelo",
    checkpoint: "Checkpoint",
    written: "Entrenador de examen escrito",
    yourAnswer: "Tu respuesta",
    reveal: "Mostrar respuesta modelo",
    module: "Módulo",
    writtenExam: "Examen escrito",
    answerLines: "Líneas",
    core: "Idea clave",
    bigIdea: "Idea central",
    lab: "Mini-lab",
    compare: "Comparar",
    interpretation: "Interpretación",
    formula: "Fórmula",
    source: "Guía basada en las slides"
  },
  fa: {
    current: "M1.7",
    dashboard: "داشبورد DRD",
    previous: "قبلی",
    next: "بعدی",
    previousTitle: "M1.6 ژن‌های DE II",
    nextTitle: "M1.8 نمونه‌ها و ژن‌ها II",
    mark: "علامت‌گذاری به‌عنوان کامل",
    done: "کامل شد",
    resources: "منابع کلاس",
    slides: "اسلایدها",
    transcript: "رونوشت",
    recording: "ضبط",
    slide: "اسلاید منبع",
    zoom: "جزئیات",
    close: "بستن",
    professor: "تأکید استاد",
    exam: "نکتهٔ امتحان",
    expand: "باز کردن پاسخ کامل",
    hide: "پنهان کردن",
    include: "چه چیزهایی بیاوریم",
    trap: "اشتباه رایج",
    model: "پاسخ نمونه",
    checkpoint: "چک‌پوینت",
    written: "تمرین امتحان کتبی",
    yourAnswer: "پاسخ شما",
    reveal: "نمایش پاسخ نمونه",
    module: "ماژول",
    writtenExam: "آزمون کتبی",
    answerLines: "خط پاسخ",
    core: "ایدهٔ اصلی",
    bigIdea: "ایدهٔ مرکزی",
    lab: "مینی‌لب",
    compare: "مقایسه",
    interpretation: "تفسیر",
    formula: "فرمول",
    source: "راهنمای مبتنی بر اسلاید"
  }
};

const copy = {
  hero: {
    eyebrow: {
      en: "Module 1 · June 5 · Relationship between samples and genes I",
      es: "Módulo 1 · 5 de junio · Relación entre muestras y genes I",
      fa: "Module 1 · June 5 · Relationship between samples and genes I"
    },
    title: {
      en: "From gene lists to sample-and-gene relationships",
      es: "De listas de genes a relaciones entre muestras y genes",
      fa: "از فهرست ژن‌ها تا رابطهٔ بین نمونه‌ها و ژن‌ها"
    },
    subtitle: {
      en: "A theoretical Module 1 lesson on unsupervised analysis, similarity, distance metrics, Pearson and Spearman correlation, MDS, hierarchical clustering, bootstrap validation and heatmaps.",
      es: "Lección teórica del Módulo 1 sobre análisis no supervisado, similitud, métricas de distancia, correlación Pearson y Spearman, MDS, clustering jerárquico, validación bootstrap y heatmaps.",
      fa: "درسی نظری دربارهٔ تحلیل بدون‌ناظر، شباهت، distance metrics، Pearson/Spearman، MDS، hierarchical clustering، bootstrap validation و heatmap."
    },
    tags: {
      en: ["matrix", "similarity", "Pearson", "Spearman", "MDS", "heatmap"],
      es: ["matriz", "similitud", "Pearson", "Spearman", "MDS", "heatmap"],
      fa: ["matrix", "similarity", "Pearson", "Spearman", "MDS", "heatmap"]
    },
    bigIdea: {
      en: "After differential analysis, the question changes: not only which feature is significant, but whether samples and genes form coherent global patterns in the data matrix.",
      es: "Después del análisis diferencial cambia la pregunta: no solo qué feature es significativo, sino si muestras y genes forman patrones globales coherentes dentro de la matriz.",
      fa: "پس از تحلیل افتراقی، پرسش عوض می‌شود: فقط کدام feature معنی‌دار است مهم نیست؛ باید دید نمونه‌ها و ژن‌ها در ماتریس الگوهای کلی می‌سازند یا نه."
    }
  },
  stats: [
    { label: { en: "module", es: "módulo", fa: "ماژول" }, value: "1", tone: "red" },
    { label: { en: "exam", es: "examen", fa: "آزمون" }, value: "4Q" },
    { label: { en: "answer", es: "respuesta", fa: "پاسخ" }, value: "10–12" },
    { label: { en: "core", es: "núcleo", fa: "هسته" }, value: "DIST", tone: "red" }
  ],
  sections: [
    {
      eyebrow: { en: "Bridge", es: "Puente", fa: "پل مفهومی" },
      title: { en: "Why this lesson comes after differential expression", es: "Por qué esta lección viene después de expresión diferencial", fa: "چرا این درس بعد از differential expression می‌آید" },
      body: {
        en: "Differential analysis gives lists of genes or probes with p-values and adjusted p-values. This lesson asks a different, exploratory question: what relationships are already present in the whole matrix before we impose a supervised label?",
        es: "El análisis diferencial produce listas de genes o probes con p-values y p-values ajustados. Esta lección hace otra pregunta, exploratoria: ¿qué relaciones existen en toda la matriz antes de imponer una etiqueta supervisada?",
        fa: "تحلیل افتراقی فهرستی از ژن‌ها یا probeها با p-value و adjusted p-value می‌دهد. این درس پرسش اکتشافی دیگری دارد: چه روابطی در کل ماتریس وجود دارد؟"
      },
      slides: [
        { n: 1, title: { en: "Unsupervised analysis", es: "Análisis no supervisado", fa: "تحلیل بدون‌ناظر" }, text: { en: "The slides define this block as understanding intrinsic characteristics and relationships within the data itself.", es: "Las slides definen este bloque como entender características intrínsecas y relaciones dentro de los datos mismos.", fa: "اسلایدها این بخش را شناخت ویژگی‌ها و روابط درونی خود داده معرفی می‌کنند." } },
        { n: 1, title: { en: "Data visualization", es: "Visualización de datos", fa: "visualization" }, text: { en: "Visualization is not decorative: it reveals sample groups, gene patterns, outliers and possible technical structure.", es: "La visualización no es decorativa: revela grupos de muestras, patrones de genes, outliers y posible estructura técnica.", fa: "visualization تزئینی نیست؛ گروه‌ها، الگوها، outlier و ساختار فنی را آشکار می‌کند." } }
      ],
      emphasis: {
        en: "Do not present clustering as a replacement for hypothesis testing. It answers a complementary question: structure, similarity and pattern.",
        es: "No presentes el clustering como reemplazo del test estadístico. Responde una pregunta complementaria: estructura, similitud y patrón.",
        fa: "clustering جایگزین آزمون آماری نیست؛ پرسش مکملی دربارهٔ ساختار، شباهت و الگو پاسخ می‌دهد."
      },
      exam: {
        q: { en: "Why do we study relationships between samples and genes after differential analysis?", es: "¿Por qué estudiamos relaciones entre muestras y genes después del análisis diferencial?", fa: "چرا بعد از تحلیل افتراقی رابطهٔ نمونه‌ها و ژن‌ها را بررسی می‌کنیم؟" },
        include: {
          en: ["Mention the feature × sample matrix.", "Separate feature significance from global structure.", "Explain unsupervised analysis as exploratory and descriptive.", "Connect patterns to biology, outliers or batch effects."],
          es: ["Menciona la matriz feature × muestra.", "Separa significancia de features de estructura global.", "Explica el análisis no supervisado como exploratorio y descriptivo.", "Conecta patrones con biología, outliers o batch effects."],
          fa: ["ماتریس feature × sample را ذکر کن.", "معنی‌داری feature را از ساختار کلی جدا کن.", "تحلیل بدون‌ناظر را اکتشافی توضیح بده.", "الگوها را به biology/outlier/batch وصل کن."]
        },
        trap: { en: "Do not say unsupervised analysis proves differential expression.", es: "No digas que el análisis no supervisado prueba expresión diferencial.", fa: "نگو تحلیل بدون‌ناظر differential expression را ثابت می‌کند." },
        sample: {
          en: "After normalization and statistical testing we usually have a matrix with genes or probes in rows and samples in columns. Differential tests identify individual features associated with conditions, but they do not fully describe the global organization of the dataset. Unsupervised analysis lets the data organize itself and helps us detect whether samples cluster by phenotype, treatment, tissue, outlier status or technical batch. It also shows whether genes have similar expression profiles across samples. Therefore it complements, rather than replaces, differential analysis.",
          es: "Después de normalizar y aplicar tests estadísticos normalmente tenemos una matriz con genes o probes en filas y muestras en columnas. Los tests diferenciales identifican features individuales asociadas a condiciones, pero no describen por completo la organización global del dataset. El análisis no supervisado deja que los datos se organicen y ayuda a detectar si las muestras se agrupan por fenotipo, tratamiento, tejido, outliers o batch técnico. También muestra si los genes tienen perfiles similares a través de las muestras. Por eso complementa, no reemplaza, el análisis diferencial.",
          fa: "پس از normalization و آزمون آماری معمولاً ماتریسی از gene/probe در ردیف‌ها و sample در ستون‌ها داریم. آزمون‌های افتراقی featureهای منفرد را پیدا می‌کنند، اما ساختار کلی dataset را کامل توضیح نمی‌دهند. تحلیل بدون‌ناظر نشان می‌دهد نمونه‌ها بر اساس phenotype، treatment، tissue، outlier یا batch گروه‌بندی می‌شوند یا نه و ژن‌ها الگوهای مشابه دارند یا نه. بنابراین مکمل differential analysis است."
        }
      }
    },
    {
      eyebrow: { en: "Matrix logic", es: "Lógica de matriz", fa: "منطق ماتریس" },
      title: { en: "Two directions: samples across genes, genes across samples", es: "Dos direcciones: muestras a través de genes, genes a través de muestras", fa: "دو جهت: نمونه‌ها روی ژن‌ها و ژن‌ها روی نمونه‌ها" },
      body: {
        en: "In omics, each sample is a vector of many genes/probes, and each gene is a vector across many samples. Similarity can therefore be studied sample-wise or gene-wise.",
        es: "En ómicas, cada muestra es un vector de muchos genes/probes, y cada gen es un vector a través de muchas muestras. Por eso la similitud puede estudiarse entre muestras o entre genes.",
        fa: "در omics هر sample برداری از تعداد زیادی gene/probe است و هر gene برداری روی sampleهاست. پس شباهت را می‌توان بین samples یا بین genes بررسی کرد."
      },
      slides: [
        { n: 2, title: { en: "Relationships among genes", es: "Relaciones entre genes", fa: "رابطهٔ بین ژن‌ها" }, text: { en: "Pairwise genes are compared using their measurements across all samples.", es: "Los genes por pares se comparan usando sus mediciones a través de todas las muestras.", fa: "ژن‌ها جفت‌جفت با اندازه‌گیری‌هایشان در همهٔ نمونه‌ها مقایسه می‌شوند." } },
        { n: 2, title: { en: "Relationships among samples", es: "Relaciones entre muestras", fa: "رابطهٔ بین نمونه‌ها" }, text: { en: "Pairwise samples are compared using all measured genes or probes.", es: "Las muestras por pares se comparan usando todos los genes o probes medidos.", fa: "نمونه‌ها جفت‌جفت با همهٔ gene/probeهای اندازه‌گیری‌شده مقایسه می‌شوند." } }
      ],
      emphasis: {
        en: "Always say what the rows and columns are before interpreting any distance, heatmap or dendrogram.",
        es: "Di siempre qué son filas y columnas antes de interpretar cualquier distancia, heatmap o dendrograma.",
        fa: "قبل از تفسیر distance، heatmap یا dendrogram حتماً بگو ردیف‌ها و ستون‌ها چه هستند."
      },
      exam: {
        q: { en: "How do you define similarity in a gene/sample matrix?", es: "¿Cómo defines similitud en una matriz gen/muestra?", fa: "در ماتریس gene/sample شباهت را چگونه تعریف می‌کنی؟" },
        include: {
          en: ["Define rows and columns.", "Describe vectors/profiles.", "Explain near/far as similar/dissimilar.", "Mention the metric choice."],
          es: ["Define filas y columnas.", "Describe vectores/perfiles.", "Explica cerca/lejos como similar/disimilar.", "Menciona la elección de métrica."],
          fa: ["ردیف و ستون را تعریف کن.", "profile/vector را توضیح بده.", "نزدیک/دور را به similarity/dissimilarity وصل کن.", "metric choice را ذکر کن."]
        },
        trap: { en: "The same data matrix can be transposed depending on whether you cluster samples or features.", es: "La misma matriz puede transponerse según si clusterizas muestras o features.", fa: "همان ماتریس بسته به clustering نمونه یا feature می‌تواند transpose شود." },
        sample: {
          en: "A gene/sample matrix can be read in two directions. If columns are samples and rows are genes, each sample can be represented as a vector of values across genes. Two samples are similar when their vectors are close according to a chosen distance or correlation measure. Conversely, each gene can be represented by its expression profile across samples, and genes with close profiles may be co-regulated or share biological behavior. Similarity is therefore not an absolute property; it depends on the selected metric and on whether we are comparing samples or features.",
          es: "Una matriz gen/muestra puede leerse en dos direcciones. Si las columnas son muestras y las filas genes, cada muestra se representa como un vector de valores a través de genes. Dos muestras son similares cuando sus vectores están cerca según una distancia o correlación elegida. A la inversa, cada gen se representa por su perfil de expresión a través de muestras, y genes con perfiles cercanos pueden estar co-regulados o compartir comportamiento biológico. La similitud no es una propiedad absoluta: depende de la métrica seleccionada y de si comparamos muestras o features.",
          fa: "ماتریس gene/sample دو جهت دارد. اگر ستون‌ها samples و ردیف‌ها genes باشند، هر sample برداری از مقادیر روی ژن‌هاست. دو sample وقتی مشابه‌اند که بردارهایشان طبق distance/correlation انتخاب‌شده نزدیک باشد. هر gene هم profileی روی sampleها دارد و ژن‌های با profile نزدیک ممکن است رفتار زیستی مشترک داشته باشند. بنابراین similarity مطلق نیست و به metric و جهت مقایسه بستگی دارد."
        }
      }
    },
    {
      eyebrow: { en: "Distance", es: "Distancia", fa: "فاصله" },
      title: { en: "Similarity becomes a geometrical problem", es: "La similitud se convierte en un problema geométrico", fa: "شباهت به مسئله‌ای هندسی تبدیل می‌شود" },
      body: {
        en: "A distance formalizes dissimilarity. The slides stress the geometrical rules: non-negativity, identity, symmetry and the triangle inequality.",
        es: "Una distancia formaliza la disimilitud. Las slides enfatizan las reglas geométricas: no negatividad, identidad, simetría y desigualdad triangular.",
        fa: "distance یعنی formal کردن dissimilarity. اسلایدها non-negativity، identity، symmetry و triangle inequality را تأکید می‌کنند."
      },
      slides: [
        { n: 3, title: { en: "Geometrical properties", es: "Propiedades geométricas", fa: "ویژگی‌های هندسی" }, text: { en: "A valid distance is non-negative, zero for identical objects, symmetric and respects the triangle inequality.", es: "Una distancia válida es no negativa, cero para objetos idénticos, simétrica y respeta la desigualdad triangular.", fa: "distance معتبر منفی نیست، برای object یکسان صفر است، متقارن است و triangle inequality دارد." } },
        { n: 3, title: { en: "Near means similar", es: "Cerca significa similar", fa: "نزدیک یعنی مشابه" }, text: { en: "Low distance means profiles are close; high distance means they are dissimilar.", es: "Distancia baja significa perfiles cercanos; distancia alta significa perfiles disimilares.", fa: "فاصلهٔ کم یعنی profile نزدیک؛ فاصلهٔ زیاد یعنی نامشابه." } }
      ],
      emphasis: {
        en: "This is why distance matrices are central: they convert thousands of molecular measurements into pairwise relationships.",
        es: "Por eso las matrices de distancia son centrales: convierten miles de mediciones moleculares en relaciones por pares.",
        fa: "به همین دلیل distance matrix مرکزی است: هزاران اندازه‌گیری را به روابط جفتی تبدیل می‌کند."
      },
      exam: {
        q: { en: "What is a distance metric and why is it useful in omics?", es: "¿Qué es una métrica de distancia y por qué es útil en ómicas?", fa: "distance metric چیست و چرا در omics مفید است؟" },
        include: {
          en: ["Define it as dissimilarity.", "List the basic metric properties.", "Connect it to gene/sample profiles.", "Mention distance matrices and clustering."],
          es: ["Defínela como disimilitud.", "Lista propiedades básicas de métrica.", "Conéctala con perfiles de genes/muestras.", "Menciona matrices de distancia y clustering."],
          fa: ["آن را dissimilarity تعریف کن.", "ویژگی‌های metric را بگو.", "به profile ژن/نمونه وصل کن.", "distance matrix و clustering را ذکر کن."]
        },
        trap: { en: "A negative correlation is not a negative distance; it must be transformed if used as distance.", es: "Una correlación negativa no es una distancia negativa; debe transformarse si se usa como distancia.", fa: "correlation منفی distance منفی نیست؛ باید تبدیل شود." },
        sample: {
          en: "A distance metric quantifies how dissimilar two profiles are. In omics, a profile can be a sample described by many genes or a gene described across many samples. A proper distance is non-negative, is zero for identical profiles, is symmetric and satisfies the triangle inequality. Once distances are computed for all pairs, they can be organized in a distance matrix. This matrix is the input for exploratory methods such as hierarchical clustering, MDS and heatmap dendrograms.",
          es: "Una métrica de distancia cuantifica cuán disimilares son dos perfiles. En ómicas, un perfil puede ser una muestra descrita por muchos genes o un gen descrito a través de muchas muestras. Una distancia correcta es no negativa, vale cero para perfiles idénticos, es simétrica y cumple la desigualdad triangular. Cuando se calculan distancias para todos los pares, se organizan en una matriz de distancia. Esa matriz alimenta métodos exploratorios como clustering jerárquico, MDS y dendrogramas de heatmap.",
          fa: "distance metric میزان dissimilarity دو profile را می‌سنجد. در omics profile می‌تواند sample بر اساس چندین gene یا gene بر اساس چندین sample باشد. distance درست non-negative، برای profile یکسان صفر، symmetric و دارای triangle inequality است. distanceهای pairwise در distance matrix قرار می‌گیرند و ورودی hierarchical clustering، MDS و heatmap dendrogram هستند."
        }
      }
    },
    {
      eyebrow: { en: "Pearson", es: "Pearson", fa: "Pearson" },
      title: { en: "Pearson r measures linear relationship, not causality", es: "Pearson r mide relación lineal, no causalidad", fa: "Pearson r رابطهٔ خطی را می‌سنجد، نه causality" },
      body: {
        en: "Pearson correlation quantifies the relationship between two sets of measurements under a linearity assumption. It ranges from -1 to +1, where strong positive and strong negative correlation can both represent strong patterned relationship.",
        es: "La correlación de Pearson cuantifica la relación entre dos conjuntos de mediciones bajo un supuesto de linealidad. Va de -1 a +1, y tanto la correlación positiva fuerte como la negativa fuerte pueden representar una relación de patrón fuerte.",
        fa: "Pearson correlation رابطهٔ دو مجموعه measurement را با فرض linearity می‌سنجد. از -1 تا +1 است و correlation مثبت یا منفی قوی هر دو نشان‌دهندهٔ pattern قوی هستند."
      },
      slides: [
        { n: 4, title: { en: "r = +1, 0, -1", es: "r = +1, 0, -1", fa: "r = +1, 0, -1" }, text: { en: "+1 means strong positive correlation; -1 means strong negative correlation; 0 means no linear correlation.", es: "+1 significa correlación positiva fuerte; -1 correlación negativa fuerte; 0 ausencia de correlación lineal.", fa: "+1 correlation مثبت قوی، -1 correlation منفی قوی، و 0 نبود correlation خطی است." } },
        { n: 5, title: { en: "Correlation distance", es: "Distancia de correlación", fa: "correlation distance" }, text: { en: "The slides convert Pearson into distance as d = 1 - |r|: perfect correlation gives d = 0, uncorrelated profiles give d = 1.", es: "Las slides convierten Pearson en distancia como d = 1 - |r|: correlación perfecta da d = 0, perfiles no correlacionados dan d = 1.", fa: "اسلایدها Pearson را به distance تبدیل می‌کنند: d = 1 - |r|؛ correlation کامل distance صفر می‌دهد." } },
        { n: 6, title: { en: "DLBCL example", es: "Ejemplo DLBCL", fa: "مثال DLBCL" }, text: { en: "In the Alizadeh DLBCL data, IGKC and NKG7 have r ≈ 0.97, therefore d ≈ 0.03: very similar profiles across 38 patients.", es: "En el dataset DLBCL de Alizadeh, IGKC y NKG7 tienen r ≈ 0.97, por tanto d ≈ 0.03: perfiles muy similares a través de 38 pacientes.", fa: "در دادهٔ DLBCL، IGKC و NKG7 مقدار r≈0.97 دارند؛ بنابراین d≈0.03 و profileها بسیار مشابه‌اند." } }
      ],
      emphasis: {
        en: "The professor explicitly warns: correlation is not causality, and r can be distorted by outliers.",
        es: "La profesora advierte explícitamente: correlación no es causalidad, y r puede distorsionarse por outliers.",
        fa: "استاد تأکید می‌کند: correlation به معنی causality نیست و outlier می‌تواند r را منحرف کند."
      },
      exam: {
        q: { en: "Explain Pearson correlation and how it can be used as a distance.", es: "Explica la correlación de Pearson y cómo puede usarse como distancia.", fa: "Pearson correlation و تبدیل آن به distance را توضیح بده." },
        include: {
          en: ["r ranges from -1 to +1.", "It measures linear relationship, not causality.", "d = 1 - |r| transforms it into non-negative distance.", "Mention outlier sensitivity and significance with t-test/df n-2."],
          es: ["r va de -1 a +1.", "Mide relación lineal, no causalidad.", "d = 1 - |r| lo transforma en distancia no negativa.", "Menciona sensibilidad a outliers y significancia con t-test/df n-2."],
          fa: ["r از -1 تا +1 است.", "رابطهٔ خطی را می‌سنجد نه causality.", "d = 1 - |r| آن را به distance تبدیل می‌کند.", "outlier sensitivity و t-test با df=n-2 را ذکر کن."]
        },
        trap: { en: "Do not interpret r = -1 as far away if the course uses d = 1 - |r|; perfect anticorrelation also gives distance 0.", es: "No interpretes r = -1 como lejos si el curso usa d = 1 - |r|; la anticorrelación perfecta también da distancia 0.", fa: "اگر d=1-|r| استفاده شود، r=-1 دور نیست؛ anticorrelation کامل هم distance صفر می‌دهد." },
        sample: {
          en: "Pearson r measures the strength of a linear relationship between two profiles and ranges from -1 to +1. A value near +1 means strong positive correlation, near -1 strong negative correlation, and near 0 no linear correlation. In this course it can be converted to a distance using 1 - |r|, so strong positive and strong negative correlations both become small distances. This is useful for clustering genes with similar pattern shapes, but it has limitations: it does not prove causality, it is sensitive to outliers, and its statistical significance can be assessed using a t distribution with n - 2 degrees of freedom.",
          es: "Pearson r mide la fuerza de una relación lineal entre dos perfiles y va de -1 a +1. Un valor cerca de +1 indica correlación positiva fuerte, cerca de -1 correlación negativa fuerte, y cerca de 0 ausencia de correlación lineal. En este curso puede convertirse en distancia usando 1 - |r|, por lo que correlaciones positivas y negativas fuertes dan distancias pequeñas. Esto sirve para clusterizar genes con formas de patrón similares, pero tiene límites: no prueba causalidad, es sensible a outliers y su significancia puede evaluarse con una distribución t con n - 2 grados de libertad.",
          fa: "Pearson r قدرت رابطهٔ خطی بین دو profile را می‌سنجد و از -1 تا +1 است. نزدیک +1 یعنی correlation مثبت قوی، نزدیک -1 یعنی correlation منفی قوی، و نزدیک 0 یعنی عدم رابطهٔ خطی. در این درس با 1 - |r| به distance تبدیل می‌شود؛ بنابراین correlation مثبت و منفی قوی هر دو distance کوچک دارند. اما causality را ثابت نمی‌کند، به outlier حساس است و significance آن با t distribution و df=n-2 بررسی می‌شود."
        }
      }
    },
    {
      eyebrow: { en: "Spearman", es: "Spearman", fa: "Spearman" },
      title: { en: "Spearman uses ranks: robust, but it changes what information is kept", es: "Spearman usa rangos: robusto, pero cambia qué información se conserva", fa: "Spearman از rank استفاده می‌کند: robust است اما اطلاعات را تغییر می‌دهد" },
      body: {
        en: "Spearman correlation is a non-parametric measure. True measurements are replaced by ranks, which makes it robust to large outliers and scale invariant, but it may lose magnitude and direction details important in time-series data.",
        es: "La correlación de Spearman es una medida no paramétrica. Las mediciones reales se reemplazan por rangos, lo que la hace robusta frente a outliers grandes y scale invariant, pero puede perder detalles de magnitud y dirección importantes en time-series.",
        fa: "Spearman یک measure غیرپارامتریک است. اندازه‌گیری واقعی با rank جایگزین می‌شود؛ پس نسبت به outlier robust و scale invariant است، اما magnitude و direction را ممکن است از دست بدهد."
      },
      slides: [
        { n: 9, title: { en: "Outlier problem", es: "Problema de outliers", fa: "مشکل outlier" }, text: { en: "The yeast time-series example shows Pearson can change strongly if one point is deleted.", es: "El ejemplo de time-series en levadura muestra que Pearson puede cambiar mucho si se elimina un punto.", fa: "مثال time-series مخمر نشان می‌دهد Pearson با حذف یک نقطه می‌تواند خیلی تغییر کند." } },
        { n: 10, title: { en: "Ranked plot", es: "Ranked plot", fa: "ranked plot" }, text: { en: "Spearman replaces log ratios or true measurements with ranks from smallest to largest.", es: "Spearman reemplaza log ratios o mediciones reales por rangos de menor a mayor.", fa: "Spearman مقدار واقعی یا log ratio را با rank از کوچک به بزرگ جایگزین می‌کند." } },
        { n: 10, title: { en: "Direction caveat", es: "Caveat de dirección", fa: "هشدار direction" }, text: { en: "Because ranks are used, up/down regulation direction can be lost in some competitive-array time-series interpretations.", es: "Como se usan rangos, la dirección up/down puede perderse en algunas interpretaciones de time-series con competitive arrays.", fa: "چون rank استفاده می‌شود، direction up/down در برخی time-seriesها ممکن است از بین برود." } }
      ],
      emphasis: {
        en: "The point is not to choose Spearman always; choose it when rank-based robustness matches the biological question.",
        es: "La idea no es elegir Spearman siempre; úsalo cuando la robustez basada en rangos encaje con la pregunta biológica.",
        fa: "هدف این نیست Spearman همیشه انتخاب شود؛ وقتی rank-based robustness مناسب سؤال زیستی است استفاده کن."
      },
      exam: {
        q: { en: "Compare Pearson and Spearman in this lesson.", es: "Compara Pearson y Spearman en esta lección.", fa: "Pearson و Spearman را در این درس مقایسه کن." },
        include: {
          en: ["Pearson uses actual values and assumes linearity.", "Spearman uses ranks and is non-parametric.", "Spearman is more robust to outliers.", "Rank transformation may lose magnitude/direction information."],
          es: ["Pearson usa valores reales y asume linealidad.", "Spearman usa rangos y es no paramétrico.", "Spearman es más robusto a outliers.", "La transformación a rangos puede perder magnitud/dirección."],
          fa: ["Pearson از values واقعی و linearity استفاده می‌کند.", "Spearman از rank و روش غیرپارامتریک استفاده می‌کند.", "Spearman نسبت به outlier robustتر است.", "rank transformation ممکن است magnitude/direction را از دست بدهد."]
        },
        trap: { en: "Robust does not mean always better; it means less sensitive to certain problems.", es: "Robusto no significa siempre mejor; significa menos sensible a ciertos problemas.", fa: "robust یعنی همیشه بهتر نیست؛ یعنی نسبت به بعضی مشکلات حساسیت کمتر دارد." },
        sample: {
          en: "Pearson correlation uses the actual quantitative measurements and measures linear association between two profiles. It can be converted into distance, but it is sensitive to outliers. Spearman is non-parametric: it replaces the original values by ranks and then measures correlation on those ranks. This makes it more robust to large outliers and independent of scale. However, by using ranks it can lose information about magnitude and, in some time-series competitive-array settings, about the biological direction of up- or down-regulation. Therefore the choice depends on the dataset and the question.",
          es: "La correlación de Pearson usa las mediciones cuantitativas reales y mide asociación lineal entre dos perfiles. Puede convertirse en distancia, pero es sensible a outliers. Spearman es no paramétrico: reemplaza los valores originales por rangos y luego mide correlación sobre esos rangos. Esto lo hace más robusto a outliers grandes e independiente de la escala. Sin embargo, al usar rangos puede perder información sobre magnitud y, en algunos contextos time-series de competitive arrays, sobre la dirección biológica de up- o down-regulation. Por eso la elección depende del dataset y de la pregunta.",
          fa: "Pearson از measurements واقعی استفاده می‌کند و association خطی را می‌سنجد، اما به outlier حساس است. Spearman غیرپارامتریک است: values اصلی را به rank تبدیل می‌کند و correlation را روی rankها می‌سنجد. این کار آن را نسبت به outlier robust و نسبت به scale مستقل‌تر می‌کند. اما rankها می‌توانند magnitude و در بعضی time-seriesها direction زیستی up/down را کم‌رنگ کنند. پس انتخاب به dataset و سؤال بستگی دارد."
        }
      }
    },
    {
      eyebrow: { en: "Euclidean", es: "Euclídea", fa: "Euclidean" },
      title: { en: "Euclidean distance preserves magnitude and is strongly affected by scaling", es: "La distancia Euclídea conserva magnitud y depende mucho del escalado", fa: "Euclidean magnitude را نگه می‌دارد و به scaling حساس است" },
      body: {
        en: "Euclidean distance is the straight-line distance. It can capture magnitude differences that correlation ignores, but the slides show that scaled versus unscaled data can produce very different distances.",
        es: "La distancia Euclídea es la distancia en línea recta. Puede capturar diferencias de magnitud que la correlación ignora, pero las slides muestran que datos escalados y no escalados pueden producir distancias muy distintas.",
        fa: "Euclidean distance همان فاصلهٔ مستقیم است. magnitude differences را که correlation گاهی نادیده می‌گیرد نشان می‌دهد، اما scaled/unscaled نتایج متفاوت می‌دهد."
      },
      slides: [
        { n: 11, title: { en: "Pythagorean idea", es: "Idea pitagórica", fa: "ایدهٔ فیثاغورس" }, text: { en: "In two dimensions it is the Pythagorean distance; in many dimensions it generalizes across all coordinates.", es: "En dos dimensiones es la distancia pitagórica; en muchas dimensiones se generaliza a todas las coordenadas.", fa: "در دو بعد فاصلهٔ فیثاغورسی است و در ابعاد بیشتر روی همهٔ مختصات تعمیم می‌یابد." } },
        { n: 11, title: { en: "Scaling matters", es: "El escalado importa", fa: "scaling مهم است" }, text: { en: "The slides compare unscaled and scaled data: the numerical Euclidean distance can change dramatically after scaling.", es: "Las slides comparan datos no escalados y escalados: la distancia Euclídea numérica puede cambiar mucho tras escalar.", fa: "اسلایدها نشان می‌دهند با scaling مقدار Euclidean distance می‌تواند شدیداً تغییر کند." } }
      ],
      emphasis: {
        en: "Before comparing distances, ask whether the data are centered, normalized or scaled.",
        es: "Antes de comparar distancias, pregunta si los datos están centrados, normalizados o escalados.",
        fa: "قبل از مقایسهٔ distance بپرس داده‌ها centered، normalized یا scaled هستند یا نه."
      },
      exam: {
        q: { en: "Why can Euclidean distance and correlation distance give different clustering results?", es: "¿Por qué la distancia Euclídea y la distancia de correlación pueden dar resultados de clustering distintos?", fa: "چرا Euclidean distance و correlation distance clustering متفاوت می‌دهند؟" },
        include: {
          en: ["Euclidean includes magnitude differences.", "Correlation focuses on profile shape/pattern.", "Scaling affects Euclidean distance strongly.", "Opposite profiles may be close by |correlation| but far by Euclidean distance."],
          es: ["Euclídea incluye diferencias de magnitud.", "Correlación se centra en forma/patrón del perfil.", "El escalado afecta mucho a Euclídea.", "Perfiles opuestos pueden estar cerca por |correlación| pero lejos por Euclídea."],
          fa: ["Euclidean magnitude differences را نگه می‌دارد.", "correlation روی shape/pattern تمرکز دارد.", "scaling روی Euclidean اثر زیاد دارد.", "opposite profiles ممکن است با |correlation| نزدیک ولی با Euclidean دور باشند."]
        },
        trap: { en: "Do not report a distance without saying which metric and preprocessing were used.", es: "No reportes una distancia sin decir qué métrica y preprocessing se usaron.", fa: "distance را بدون metric و preprocessing گزارش نکن." },
        sample: {
          en: "Euclidean distance measures straight-line distance between profiles and therefore preserves differences in magnitude. Correlation distance instead focuses mainly on similarity of shape or pattern. As a result, two genes with opposite but strong profiles may be considered close with 1 - |r|, while Euclidean distance can place them far apart because their coordinates differ strongly. Euclidean distance is also affected by scaling, centering and normalization. Therefore different metrics can produce different dendrograms and biological interpretations.",
          es: "La distancia Euclídea mide distancia en línea recta entre perfiles y por tanto conserva diferencias de magnitud. La distancia de correlación se centra sobre todo en similitud de forma o patrón. Por eso dos genes con perfiles opuestos pero fuertes pueden considerarse cercanos con 1 - |r|, mientras que Euclídea puede colocarlos lejos porque sus coordenadas difieren mucho. Además, Euclídea se ve afectada por escalado, centrado y normalización. Por tanto, distintas métricas pueden producir dendrogramas e interpretaciones biológicas distintas.",
          fa: "Euclidean distance فاصلهٔ مستقیم بین profileها را می‌سنجد و magnitude را حفظ می‌کند. correlation distance بیشتر روی shape/pattern تمرکز دارد. بنابراین دو ژن با pattern قوی اما مخالف ممکن است با 1-|r| نزدیک باشند، اما با Euclidean دور شوند چون مختصاتشان متفاوت است. Euclidean به scaling/centering/normalization حساس است. پس metricهای مختلف dendrogram و تفسیر متفاوت می‌دهند."
        }
      }
    },
    {
      eyebrow: { en: "Unsupervised methods", es: "Métodos no supervisados", fa: "روش‌های بدون‌ناظر" },
      title: { en: "The toolbox: MDS, hierarchical clustering, k-means and PCA", es: "La caja de herramientas: MDS, clustering jerárquico, k-means y PCA", fa: "ابزارها: MDS، hierarchical clustering، k-means و PCA" },
      body: {
        en: "The slides define unsupervised techniques as exploratory: let the data organize itself, then try to find biological meaning. The listed methods include MDS, hierarchical clustering, k-means clustering and PCA.",
        es: "Las slides definen las técnicas no supervisadas como exploratorias: dejar que los datos se organicen y luego intentar encontrar significado biológico. Los métodos listados incluyen MDS, clustering jerárquico, k-means y PCA.",
        fa: "اسلایدها روش‌های بدون‌ناظر را اکتشافی تعریف می‌کنند: بگذار داده خودش سازمان پیدا کند و سپس معنی زیستی پیدا کن. روش‌ها شامل MDS، hierarchical clustering، k-means و PCA هستند."
      },
      slides: [
        { n: 12, title: { en: "Exploratory mindset", es: "Mentalidad exploratoria", fa: "ذهنیت اکتشافی" }, text: { en: "Unsupervised methods make no assumptions about how the data should behave.", es: "Los métodos no supervisados no asumen de antemano cómo deberían comportarse los datos.", fa: "روش بدون‌ناظر از قبل فرض نمی‌کند داده چگونه باید رفتار کند." } },
        { n: 13, title: { en: "MDS goal", es: "Objetivo de MDS", fa: "هدف MDS" }, text: { en: "MDS maps high-dimensional distances into lower-dimensional space while preserving distances as well as possible.", es: "MDS mapea distancias de alta dimensión a un espacio de menor dimensión preservando las distancias lo mejor posible.", fa: "MDS فاصله‌های high-dimensional را به فضای lower-dimensional می‌برد و تا حد ممکن حفظ می‌کند." } },
        { n: 14, title: { en: "Triangular distance matrix", es: "Matriz triangular de distancias", fa: "ماتریس فاصلهٔ مثلثی" }, text: { en: "The same pairwise distances can feed MDS or hierarchical clustering.", es: "Las mismas distancias por pares pueden alimentar MDS o clustering jerárquico.", fa: "همان pairwise distances می‌توانند ورودی MDS یا hierarchical clustering باشند." } }
      ],
      emphasis: {
        en: "MDS and PCA are not the same, but both help compress high-dimensional variation into interpretable low-dimensional views.",
        es: "MDS y PCA no son lo mismo, pero ambos ayudan a comprimir variación de alta dimensión en vistas interpretables de baja dimensión.",
        fa: "MDS و PCA یکی نیستند، اما هر دو variation high-dimensional را به نمای low-dimensional قابل تفسیر تبدیل می‌کنند."
      },
      exam: {
        q: { en: "What does unsupervised analysis mean in this course?", es: "¿Qué significa análisis no supervisado en esta materia?", fa: "در این درس unsupervised analysis یعنی چه؟" },
        include: {
          en: ["Exploratory analysis without predefined behavior assumptions.", "Let data organize itself.", "Use whole-data approaches and visualization.", "Examples: MDS, hierarchical clustering, k-means, PCA."],
          es: ["Análisis exploratorio sin asumir comportamiento previo.", "Dejar que los datos se organicen.", "Usar enfoques globales y visualización.", "Ejemplos: MDS, clustering jerárquico, k-means, PCA."],
          fa: ["تحلیل اکتشافی بدون فرض رفتار از پیش تعیین‌شده.", "داده خودش سازمان پیدا کند.", "whole-data approaches و visualization.", "مثال‌ها: MDS، hierarchical clustering، k-means، PCA."]
        },
        trap: { en: "Unsupervised does not mean objective without decisions; metric and preprocessing are choices.", es: "No supervisado no significa objetivo sin decisiones; métrica y preprocessing son elecciones.", fa: "بدون‌ناظر یعنی بدون تصمیم نیست؛ metric و preprocessing انتخاب هستند." },
        sample: {
          en: "Unsupervised analysis is an exploratory approach in which we do not impose predefined class labels as the main organizing principle. Instead, the data are allowed to organize themselves according to distances, correlations or variance structure. In omics it is used to study the whole matrix and visualize sample groups, gene modules, outliers and technical effects. The lesson lists methods such as MDS, hierarchical clustering, k-means and PCA. These methods are powerful but still depend on preprocessing, normalization and the chosen distance metric.",
          es: "El análisis no supervisado es un enfoque exploratorio en el que no imponemos etiquetas de clase predefinidas como principio principal de organización. En cambio, dejamos que los datos se organicen según distancias, correlaciones o estructura de varianza. En ómicas se usa para estudiar toda la matriz y visualizar grupos de muestras, módulos de genes, outliers y efectos técnicos. La lección lista métodos como MDS, clustering jerárquico, k-means y PCA. Son métodos potentes, pero dependen de preprocessing, normalización y de la métrica de distancia elegida.",
          fa: "تحلیل بدون‌ناظر رویکردی اکتشافی است که در آن برچسب‌های از پیش تعیین‌شده را اصل سازمان‌دهی قرار نمی‌دهیم. داده‌ها بر اساس distance، correlation یا variance structure سازمان می‌یابند. در omics برای دیدن کل ماتریس، sample groups، gene modules، outliers و technical effects استفاده می‌شود. روش‌ها شامل MDS، hierarchical clustering، k-means و PCA هستند. اما به preprocessing، normalization و metric انتخابی وابسته‌اند."
        }
      }
    },
    {
      eyebrow: { en: "Hierarchical clustering", es: "Clustering jerárquico", fa: "Hierarchical clustering" },
      title: { en: "Dendrograms summarize proximity between genes or samples", es: "Los dendrogramas resumen proximidad entre genes o muestras", fa: "dendrogram نزدیکی بین ژن‌ها یا نمونه‌ها را خلاصه می‌کند" },
      body: {
        en: "Hierarchical clustering turns a distance matrix into a tree. Similar profiles appear close together with shorter branches; the algorithm can be agglomerative, starting from single objects, or divisive.",
        es: "El clustering jerárquico convierte una matriz de distancias en un árbol. Perfiles similares aparecen cerca con ramas más cortas; el algoritmo puede ser aglomerativo, empezando por objetos individuales, o divisivo.",
        fa: "hierarchical clustering ماتریس distance را به درخت تبدیل می‌کند. profileهای مشابه با branchهای کوتاه نزدیک‌تر می‌آیند؛ الگوریتم می‌تواند agglomerative یا divisive باشد."
      },
      slides: [
        { n: 15, title: { en: "AGNES", es: "AGNES", fa: "AGNES" }, text: { en: "Agglomerative clustering starts with individual genes/samples and joins the closest clusters step by step.", es: "El clustering aglomerativo empieza con genes/muestras individuales y une paso a paso los clusters más cercanos.", fa: "روش agglomerative از objectهای منفرد شروع می‌کند و نزدیک‌ترین clusterها را ادغام می‌کند." } },
        { n: 15, title: { en: "Dendrogram", es: "Dendrograma", fa: "dendrogram" }, text: { en: "Branch length and node height depend on the metric and linkage method.", es: "La longitud de ramas y altura de nodos dependen de la métrica y del método de linkage.", fa: "طول branch و height node به metric و linkage method بستگی دارد." } },
        { n: 20, title: { en: "Tree interpretation", es: "Interpretación del árbol", fa: "تفسیر درخت" }, text: { en: "For n genes, the tree has n - 1 internal nodes; always inspect branch lengths, not only left-right order.", es: "Para n genes, el árbol tiene n - 1 nodos internos; mira siempre la longitud de ramas, no solo el orden izquierda-derecha.", fa: "برای n ژن، tree دارای n-1 node داخلی است؛ فقط ترتیب چپ/راست را نگاه نکن، branch length مهم است." } }
      ],
      emphasis: {
        en: "A dendrogram can be redrawn with different rotations: proximity is about branch structure and height, not the visual left-right order alone.",
        es: "Un dendrograma puede rotarse: la proximidad depende de estructura y altura de ramas, no solo del orden visual izquierda-derecha.",
        fa: "dendrogram می‌تواند rotate شود؛ proximity به branch structure و height مربوط است، نه فقط ترتیب چپ/راست."
      },
      exam: {
        q: { en: "Explain hierarchical clustering and dendrogram interpretation.", es: "Explica clustering jerárquico e interpretación del dendrograma.", fa: "hierarchical clustering و تفسیر dendrogram را توضیح بده." },
        include: {
          en: ["Starts from a distance matrix.", "Agglomerative/bottom-up joins closest clusters.", "Dendrogram branches summarize proximity.", "Metric and linkage change the result."],
          es: ["Parte de una matriz de distancias.", "El aglomerativo/bottom-up une clusters cercanos.", "Las ramas del dendrograma resumen proximidad.", "Métrica y linkage cambian el resultado."],
          fa: ["از distance matrix شروع می‌کند.", "agglomerative نزدیک‌ترین clusterها را ادغام می‌کند.", "dendrogram proximity را خلاصه می‌کند.", "metric و linkage نتیجه را عوض می‌کنند."]
        },
        trap: { en: "Do not overinterpret clusters without validation; the tree is algorithm-dependent.", es: "No sobreinterpretes clusters sin validación; el árbol depende del algoritmo.", fa: "بدون validation clusterها را زیاد تفسیر نکن؛ tree به الگوریتم وابسته است." },
        sample: {
          en: "Hierarchical clustering uses a distance matrix to build a tree of similarity relationships among genes or samples. In agglomerative clustering, each profile starts as its own cluster and the closest clusters are joined step by step until one tree is produced. The dendrogram represents this process: shorter branches and lower joining heights indicate greater similarity. However, the result depends on the distance metric and linkage method, so different choices can produce different trees. For interpretation, we should inspect branch lengths and validate the stability of clusters.",
          es: "El clustering jerárquico usa una matriz de distancias para construir un árbol de relaciones de similitud entre genes o muestras. En el clustering aglomerativo, cada perfil empieza como su propio cluster y los clusters más cercanos se unen paso a paso hasta formar un árbol. El dendrograma representa este proceso: ramas más cortas y alturas de unión más bajas indican mayor similitud. Sin embargo, el resultado depende de la métrica de distancia y del método de linkage, por lo que elecciones distintas pueden producir árboles distintos. Para interpretar, hay que mirar longitudes de ramas y validar la estabilidad de los clusters.",
          fa: "hierarchical clustering از distance matrix برای ساخت درخت شباهت بین genes یا samples استفاده می‌کند. در روش agglomerative هر profile ابتدا cluster جداست و نزدیک‌ترین clusterها مرحله‌به‌مرحله ادغام می‌شوند. dendrogram این فرایند را نشان می‌دهد: branch کوتاه‌تر و joining height پایین‌تر یعنی similarity بیشتر. اما نتیجه به metric و linkage وابسته است؛ پس باید branch length و cluster stability بررسی شود."
        }
      }
    },
    {
      eyebrow: { en: "Linkage", es: "Linkage", fa: "Linkage" },
      title: { en: "Single, complete, average and Ward linkage answer different questions", es: "Single, complete, average y Ward responden preguntas distintas", fa: "single، complete، average و Ward پرسش‌های متفاوتی پاسخ می‌دهند" },
      body: {
        en: "When comparing two clusters, linkage defines which pairwise distances count: nearest neighbors, farthest neighbors, the average of all pairs, or increase in variance.",
        es: "Al comparar dos clusters, el linkage define qué distancias por pares cuentan: vecinos más cercanos, vecinos más lejanos, promedio de todos los pares o aumento de varianza.",
        fa: "هنگام مقایسهٔ دو cluster، linkage تعیین می‌کند کدام pairwise distances مهم‌اند: nearest، farthest، average یا افزایش variance."
      },
      slides: [
        { n: 17, title: { en: "Single linkage", es: "Single linkage", fa: "Single linkage" }, text: { en: "Uses the minimum distance; can create chaining and is not recommended except for natural irregular clusters.", es: "Usa la distancia mínima; puede producir chaining y no se recomienda salvo clusters naturales irregulares.", fa: "minimum distance را استفاده می‌کند؛ ممکن است chaining بدهد و معمولاً جز برای clusters نامنظم توصیه نمی‌شود." } },
        { n: 17, title: { en: "Complete linkage", es: "Complete linkage", fa: "Complete linkage" }, text: { en: "Uses maximum distance; tends to produce compact, well-defined clusters and avoids chaining.", es: "Usa la distancia máxima; tiende a producir clusters compactos y definidos, evitando chaining.", fa: "maximum distance را می‌گیرد؛ clusterهای compact می‌دهد و chaining را کاهش می‌دهد." } },
        { n: 17, title: { en: "Average linkage", es: "Average linkage", fa: "Average linkage" }, text: { en: "Uses average pairwise distance; the slides mark it as useful in many applications.", es: "Usa la distancia promedio por pares; las slides lo marcan como útil en muchas aplicaciones.", fa: "average pairwise distance را استفاده می‌کند و در بسیاری کاربردها خوب است." } },
        { n: 17, title: { en: "Ward", es: "Ward", fa: "Ward" }, text: { en: "Uses increase in variance and is often best for Euclidean data with compact, spherical clusters.", es: "Usa aumento de varianza y suele funcionar bien con datos Euclídeos y clusters compactos/esféricos.", fa: "increase in variance را می‌سنجد و برای Euclidean data و clusterهای compact مناسب است." } }
      ],
      emphasis: {
        en: "Always report both: the distance metric and the linkage method.",
        es: "Reporta siempre ambas cosas: métrica de distancia y método de linkage.",
        fa: "همیشه هر دو را گزارش کن: distance metric و linkage method."
      },
      exam: {
        q: { en: "Compare single, complete and average linkage.", es: "Compara single, complete y average linkage.", fa: "single، complete و average linkage را مقایسه کن." },
        include: {
          en: ["Single = minimum distance / nearest neighbor.", "Complete = maximum distance / farthest neighbor.", "Average = mean of pairwise distances.", "Different linkage choices produce different dendrograms."],
          es: ["Single = distancia mínima / vecino más cercano.", "Complete = distancia máxima / vecino más lejano.", "Average = promedio de distancias por pares.", "Distintos linkages producen dendrogramas distintos."],
          fa: ["Single یعنی minimum distance.", "Complete یعنی maximum distance.", "Average یعنی mean pairwise distances.", "linkageهای مختلف dendrogram متفاوت می‌دهند."]
        },
        trap: { en: "Do not call a cluster biologically real only because one linkage method found it.", es: "No llames biológicamente real a un cluster solo porque un método de linkage lo encontró.", fa: "فقط چون یک linkage cluster پیدا کرده، آن را real biology ندان." },
        sample: {
          en: "Linkage determines how distance is computed between clusters during hierarchical clustering. Single linkage uses the minimum distance between objects in two clusters, so it can connect elongated clusters and cause chaining. Complete linkage uses the maximum distance and tends to produce compact clusters, avoiding chaining. Average linkage uses the mean of all pairwise distances between clusters and is often a good general-purpose choice. Because the same distance matrix can yield different dendrograms with different linkage methods, the method must be reported and results should be compared or validated.",
          es: "El linkage determina cómo se calcula la distancia entre clusters durante el clustering jerárquico. Single linkage usa la distancia mínima entre objetos de dos clusters, por lo que puede conectar clusters alargados y causar chaining. Complete linkage usa la distancia máxima y tiende a producir clusters compactos, evitando chaining. Average linkage usa la media de todas las distancias por pares entre clusters y suele ser una opción general útil. Como la misma matriz de distancias puede producir dendrogramas distintos con distintos métodos de linkage, el método debe reportarse y los resultados deben compararse o validarse.",
          fa: "linkage تعیین می‌کند distance بین دو cluster چگونه محاسبه شود. Single linkage از minimum distance استفاده می‌کند و ممکن است chaining ایجاد کند. Complete linkage از maximum distance استفاده می‌کند و clusterهای compact می‌سازد. Average linkage میانگین همهٔ pairwise distanceها را می‌گیرد و انتخاب عمومی خوبی است. چون یک distance matrix با linkageهای مختلف dendrogram متفاوت می‌دهد، باید روش گزارش و validate شود."
        }
      }
    },
    {
      eyebrow: { en: "Metric choice", es: "Elección de métrica", fa: "انتخاب metric" },
      title: { en: "Different metrics and linkages can change the biological story", es: "Distintas métricas y linkages pueden cambiar la historia biológica", fa: "metric و linkage مختلف می‌توانند تفسیر زیستی را عوض کنند" },
      body: {
        en: "The yeast time-series example is a warning: Pearson, Spearman and Euclidean distance can cluster the same genes differently, especially when profiles are opposite, ranked or magnitude-separated.",
        es: "El ejemplo de time-series en levadura es una advertencia: Pearson, Spearman y Euclídea pueden clusterizar los mismos genes de formas distintas, sobre todo cuando los perfiles son opuestos, rankeados o separados por magnitud.",
        fa: "مثال time-series مخمر هشدار می‌دهد: Pearson، Spearman و Euclidean ممکن است همان ژن‌ها را متفاوت cluster کنند، مخصوصاً با profiles مخالف، rank شده یا magnitude متفاوت."
      },
      slides: [
        { n: 21, title: { en: "Pearson/Spearman can place opposite profiles close", es: "Pearson/Spearman pueden acercar perfiles opuestos", fa: "Pearson/Spearman profiles مخالف را نزدیک می‌کنند" }, text: { en: "Because |correlation| is used as distance, opposite profiles can become close.", es: "Como se usa |correlación| como distancia, perfiles opuestos pueden volverse cercanos.", fa: "چون |correlation| استفاده می‌شود، profiles مخالف هم نزدیک می‌شوند." } },
        { n: 21, title: { en: "Spearman may erase fine structure", es: "Spearman puede borrar estructura fina", fa: "Spearman ممکن است fine structure را حذف کند" }, text: { en: "If profiles have the same rank shape, Spearman can produce distance zero and hide fine quantitative differences.", es: "Si los perfiles tienen la misma forma de rangos, Spearman puede producir distancia cero y ocultar diferencias cuantitativas finas.", fa: "اگر profileها rank shape مشابه داشته باشند، Spearman distance صفر می‌دهد و تفاوت کمی پنهان می‌شود." } },
        { n: 21, title: { en: "Euclidean makes looser clusters", es: "Euclídea genera clusters más sueltos", fa: "Euclidean clusters looser می‌دهد" }, text: { en: "Euclidean distance often produces larger distances and looser clusters because magnitude differences remain visible.", es: "La distancia Euclídea suele producir distancias mayores y clusters más sueltos porque las diferencias de magnitud siguen visibles.", fa: "Euclidean اغلب distance بزرگ‌تر و clusterهای loose می‌دهد چون magnitude باقی می‌ماند." } }
      ],
      emphasis: {
        en: "The course take-home message is explicit: always try different linkage methods and distance metrics.",
        es: "El take-home message del curso es explícito: prueba siempre distintos métodos de linkage y métricas de distancia.",
        fa: "پیام اصلی درس: همیشه metricها و linkageهای مختلف را امتحان کن."
      },
      exam: {
        q: { en: "Why should clustering results be checked with different metrics and linkage methods?", es: "¿Por qué hay que revisar clustering con distintas métricas y linkage methods?", fa: "چرا باید clustering را با metric و linkage متفاوت بررسی کرد؟" },
        include: {
          en: ["Different choices can produce different dendrograms.", "Correlation and Euclidean distance capture different aspects.", "Spearman rank transformation can remove fine structure.", "Biological interpretation depends on method robustness."],
          es: ["Distintas elecciones pueden producir dendrogramas distintos.", "Correlación y Euclídea capturan aspectos diferentes.", "Spearman por rangos puede eliminar estructura fina.", "La interpretación biológica depende de robustez del método."],
          fa: ["انتخاب‌های مختلف dendrogram متفاوت می‌دهند.", "correlation و Euclidean جنبه‌های مختلف می‌گیرند.", "Spearman fine structure را کم می‌کند.", "تفسیر زیستی به robustness روش وابسته است."]
        },
        trap: { en: "A cluster can be an algorithmic artifact if it disappears when the metric changes.", es: "Un cluster puede ser artefacto algorítmico si desaparece al cambiar la métrica.", fa: "اگر cluster با تغییر metric ناپدید شود، ممکن است artifact باشد." },
        sample: {
          en: "Clustering results depend on methodological choices. Pearson or Spearman correlation distance focuses on pattern shape and, when using absolute correlation, can place opposite profiles close together. Spearman uses ranks and can be robust to outliers, but may remove fine quantitative structure. Euclidean distance preserves magnitude and often produces larger, looser distances. Linkage methods also change how clusters are joined. Therefore we should compare metrics and linkage methods and validate clusters before building a biological interpretation.",
          es: "Los resultados de clustering dependen de decisiones metodológicas. La distancia de correlación Pearson o Spearman se centra en la forma del patrón y, al usar correlación absoluta, puede colocar perfiles opuestos cerca. Spearman usa rangos y puede ser robusto a outliers, pero puede eliminar estructura cuantitativa fina. Euclídea conserva magnitud y suele producir distancias mayores y clusters más sueltos. Los métodos de linkage también cambian cómo se unen los clusters. Por eso hay que comparar métricas y linkages y validar los clusters antes de construir una interpretación biológica.",
          fa: "clustering به انتخاب روش وابسته است. Pearson/Spearman correlation distance روی shape تمرکز دارد و با absolute correlation حتی profiles مخالف را نزدیک می‌کند. Spearman rank-based است و robust است اما fine quantitative structure را کم می‌کند. Euclidean magnitude را حفظ می‌کند و distanceهای بزرگ‌تر و clusterهای looser می‌دهد. linkage هم نتیجه را تغییر می‌دهد. پس قبل از تفسیر زیستی باید روش‌ها مقایسه و clusterها validate شوند."
        }
      }
    },
    {
      eyebrow: { en: "Validation", es: "Validación", fa: "Validation" },
      title: { en: "Bootstrap checks whether clusters are stable", es: "Bootstrap comprueba si los clusters son estables", fa: "Bootstrap پایداری cluster را بررسی می‌کند" },
      body: {
        en: "The slides extend the bootstrap idea from statistical testing to clustering. Resample the data, recluster many times, and count how often the same cluster is recovered.",
        es: "Las slides extienden la idea de bootstrap desde tests estadísticos al clustering. Re-muestrea los datos, vuelve a clusterizar muchas veces y cuenta con qué frecuencia se recupera el mismo cluster.",
        fa: "اسلایدها ایدهٔ bootstrap را از آزمون آماری به clustering می‌برند: داده را resample کن، دوباره cluster کن، و recovery cluster را بشمار."
      },
      slides: [
        { n: 22, title: { en: "Bootstrap workflow", es: "Workflow de bootstrap", fa: "workflow bootstrap" }, text: { en: "Generate bootstrap datasets with replacement, perform clustering, repeat many times and calculate support.", es: "Genera datasets bootstrap con reemplazo, realiza clustering, repite muchas veces y calcula soporte.", fa: "dataset bootstrap با replacement بساز، cluster کن، تکرار کن و support را حساب کن." } },
        { n: 22, title: { en: "Support thresholds", es: "Umbrales de soporte", fa: "آستانهٔ support" }, text: { en: "The slides classify support: >95% very strong, 80–95% good, 70–80% moderate, <70% weak.", es: "Las slides clasifican soporte: >95% muy fuerte, 80–95% bueno, 70–80% moderado, <70% débil.", fa: "اسلایدها support را طبقه‌بندی می‌کنند: >95% بسیار قوی، 80–95% خوب، 70–80% متوسط، <70% ضعیف." } },
        { n: 22, title: { en: "pvclust", es: "pvclust", fa: "pvclust" }, text: { en: "The R package pvclust reports BP and AU p-values; AU > 95% is generally considered strong support.", es: "El paquete R pvclust reporta BP y AU p-values; AU > 95% suele considerarse soporte fuerte.", fa: "پکیج R به نام pvclust مقدار BP و AU می‌دهد؛ AU>95% معمولاً support قوی است." } }
      ],
      emphasis: {
        en: "A beautiful dendrogram is not enough; stable clusters are more convincing than visually attractive clusters.",
        es: "Un dendrograma bonito no basta; clusters estables convencen más que clusters visualmente atractivos.",
        fa: "dendrogram زیبا کافی نیست؛ cluster پایدار مهم‌تر است."
      },
      exam: {
        q: { en: "How does bootstrap validate hierarchical clustering?", es: "¿Cómo valida bootstrap el clustering jerárquico?", fa: "bootstrap چگونه hierarchical clustering را validate می‌کند؟" },
        include: {
          en: ["Resample observations or variables with replacement.", "Repeat clustering many times.", "Count cluster recovery frequency.", "Interpret high bootstrap support as stability, not absolute truth."],
          es: ["Re-muestrea observaciones o variables con reemplazo.", "Repite clustering muchas veces.", "Cuenta frecuencia de recuperación del cluster.", "Interpreta soporte alto como estabilidad, no verdad absoluta."],
          fa: ["observations/variables را با replacement resample کن.", "clustering را چندین بار تکرار کن.", "frequency recovery را بشمار.", "support بالا یعنی stability، نه حقیقت مطلق."]
        },
        trap: { en: "Bootstrap support validates stability under resampling, not biological mechanism by itself.", es: "Bootstrap valida estabilidad bajo re-muestreo, no mecanismo biológico por sí solo.", fa: "bootstrap stability را validate می‌کند، نه mechanism زیستی را به تنهایی." },
        sample: {
          en: "Bootstrap validation assesses the stability and reproducibility of clusters. A bootstrap dataset is generated by sampling observations or variables with replacement. Hierarchical clustering is performed again, and this process is repeated many times, for example 1000 replicates. For each cluster, we calculate how often it is recovered. High support, such as above 95%, suggests very strong stability, while low support suggests the cluster may be sensitive to sampling variation. This does not prove a biological mechanism, but it makes the cluster more reliable for interpretation.",
          es: "La validación bootstrap evalúa la estabilidad y reproducibilidad de los clusters. Se genera un dataset bootstrap muestreando observaciones o variables con reemplazo. Se realiza de nuevo el clustering jerárquico y el proceso se repite muchas veces, por ejemplo 1000 réplicas. Para cada cluster se calcula con qué frecuencia se recupera. Un soporte alto, por ejemplo mayor del 95%, sugiere estabilidad muy fuerte; soporte bajo sugiere que el cluster puede ser sensible a la variación de muestreo. Esto no prueba un mecanismo biológico, pero hace el cluster más fiable para interpretar.",
          fa: "bootstrap validation پایداری و reproducibility clusterها را بررسی می‌کند. یک bootstrap dataset با sampling with replacement ساخته می‌شود، hierarchical clustering دوباره انجام می‌شود و این فرایند مثلاً 1000 بار تکرار می‌شود. برای هر cluster محاسبه می‌کنیم چند بار recovery شده است. support بالای 95% پایداری بسیار قوی را نشان می‌دهد؛ support کم یعنی cluster به sampling variation حساس است. این mechanism زیستی را ثابت نمی‌کند اما تفسیر را قابل اعتمادتر می‌کند."
        }
      }
    },
    {
      eyebrow: { en: "Heatmap", es: "Heatmap", fa: "Heatmap" },
      title: { en: "Heatmaps combine matrix values with dendrograms", es: "Los heatmaps combinan valores de matriz con dendrogramas", fa: "heatmap مقدار ماتریس و dendrogram را ترکیب می‌کند" },
      body: {
        en: "A heatmap displays rows as genes, columns as samples and colors as relative expression or statistics. It is usually paired with dendrograms for better visualization of clustering results.",
        es: "Un heatmap muestra filas como genes, columnas como muestras y colores como expresión relativa o estadísticos. Normalmente se combina con dendrogramas para visualizar mejor resultados de clustering.",
        fa: "heatmap ردیف‌ها را genes، ستون‌ها را samples و رنگ‌ها را relative expression/statistics نشان می‌دهد و معمولاً همراه dendrogram است."
      },
      slides: [
        { n: 23, title: { en: "Rows and columns", es: "Filas y columnas", fa: "ردیف و ستون" }, text: { en: "Rows usually represent genes and columns samples; colors encode expression or up/down regulation statistics.", es: "Las filas suelen representar genes y las columnas muestras; los colores codifican expresión o estadísticos de up/down regulation.", fa: "ردیف‌ها معمولاً genes و ستون‌ها samples هستند؛ رنگ expression یا up/down را نشان می‌دهد." } },
        { n: 23, title: { en: "Relative, not absolute", es: "Relativo, no absoluto", fa: "نسبی، نه مطلق" }, text: { en: "Heatmap colors represent relative expression for each gene across samples, not absolute expression levels.", es: "Los colores de heatmap representan expresión relativa de cada gen a través de muestras, no niveles absolutos de expresión.", fa: "رنگ‌های heatmap expression نسبی هر gene در samples را نشان می‌دهند، نه absolute expression." } },
        { n: 24, title: { en: "Z-score", es: "Z-score", fa: "Z-score" }, text: { en: "The slides define Zij = (xij - μi) / σi: how many standard deviations a sample is above or below the gene mean.", es: "Las slides definen Zij = (xij - μi) / σi: cuántas desviaciones estándar está una muestra por encima o debajo de la media del gen.", fa: "اسلایدها Zij = (xij - μi) / σi را تعریف می‌کنند: چند SD بالاتر/پایین‌تر از میانگین gene است." } },
        { n: 25, title: { en: "Legend matters", es: "La leyenda importa", fa: "legend مهم است" }, text: { en: "The take-home message warns: heatmaps are relevant for visualization, but always pay attention to legends.", es: "El take-home message advierte: los heatmaps son relevantes para visualizar, pero siempre hay que mirar la leyenda.", fa: "پیام اصلی می‌گوید heatmap برای visualization مهم است، اما legend را همیشه ببین." } }
      ],
      emphasis: {
        en: "Never interpret heatmap color without knowing whether it is raw expression, log expression, fold change, z-score or another statistic.",
        es: "Nunca interpretes el color de un heatmap sin saber si es expresión cruda, log expression, fold change, z-score u otro estadístico.",
        fa: "رنگ heatmap را بدون دانستن raw/log/fold change/z-score/statistic تفسیر نکن."
      },
      exam: {
        q: { en: "How should a heatmap with clustering be interpreted?", es: "¿Cómo debe interpretarse un heatmap con clustering?", fa: "heatmap همراه clustering را چگونه تفسیر کنیم؟" },
        include: {
          en: ["Rows are genes/features, columns samples.", "Colors encode relative expression or statistics.", "Dendrograms summarize similarity.", "Legends and scaling are essential."],
          es: ["Filas son genes/features, columnas muestras.", "Los colores codifican expresión relativa o estadísticos.", "Los dendrogramas resumen similitud.", "Leyenda y escalado son esenciales."],
          fa: ["ردیف‌ها genes/features و ستون‌ها samples هستند.", "رنگ relative expression/statistic را نشان می‌دهد.", "dendrogram similarity را خلاصه می‌کند.", "legend و scaling ضروری‌اند."]
        },
        trap: { en: "A heatmap is a visualization of patterns; it is not by itself a statistical test.", es: "Un heatmap visualiza patrones; por sí solo no es un test estadístico.", fa: "heatmap فقط visualization است؛ به تنهایی آزمون آماری نیست." },
        sample: {
          en: "A heatmap displays a data matrix using colors, usually with genes or probes in rows and samples in columns. The color intensity represents relative expression or another statistic, often after scaling such as z-score transformation, so it should not be read as absolute expression unless specified. Dendrograms can be added to show hierarchical clustering of rows and/or columns. Biologically, clusters may suggest similar expression patterns, sample subgroups, outliers or technical batch effects. The legend, scaling method and distance/linkage choices must be checked before interpretation.",
          es: "Un heatmap muestra una matriz de datos usando colores, normalmente con genes o probes en filas y muestras en columnas. La intensidad del color representa expresión relativa u otro estadístico, a menudo tras escalado como z-score, así que no debe leerse como expresión absoluta salvo que se especifique. Pueden añadirse dendrogramas para mostrar clustering jerárquico de filas y/o columnas. Biológicamente, los clusters pueden sugerir patrones de expresión similares, subgrupos de muestras, outliers o batch effects técnicos. Antes de interpretar hay que revisar la leyenda, el método de escalado y las elecciones de distancia/linkage.",
          fa: "heatmap ماتریس داده را با رنگ نشان می‌دهد، معمولاً genes/probes در ردیف و samples در ستون. شدت رنگ relative expression یا statistic دیگری است، اغلب پس از z-score؛ پس نباید absolute expression تفسیر شود مگر مشخص باشد. dendrogram می‌تواند clustering ردیف/ستون را نشان دهد. از نظر زیستی clusterها ممکن است pattern مشابه، sample subgroup، outlier یا batch effect را نشان دهند. legend، scaling و distance/linkage باید بررسی شوند."
        }
      }
    }
  ],
  labs: {
    pearsonTitle: { en: "Pearson distance", es: "Distancia Pearson", fa: "Pearson distance" },
    pearsonBody: { en: "Move r and see how d = 1 - |r| changes.", es: "Mueve r y observa cómo cambia d = 1 - |r|.", fa: "r را تغییر بده و d=1-|r| را ببین." },
    r: { en: "Pearson r", es: "Pearson r", fa: "Pearson r" },
    distance: { en: "Distance", es: "Distancia", fa: "Distance" },
    near: { en: "very similar", es: "muy similar", fa: "بسیار مشابه" },
    mid: { en: "moderately distant", es: "distancia moderada", fa: "فاصلهٔ متوسط" },
    far: { en: "dissimilar", es: "disimilar", fa: "نامشابه" },
    zTitle: { en: "Heatmap z-score", es: "Z-score de heatmap", fa: "Z-score heatmap" },
    zBody: { en: "Type one gene profile across samples and standardize it.", es: "Escribe el perfil de un gen a través de muestras y estandarízalo.", fa: "profile یک gene را وارد کن و standardize کن." },
    values: { en: "Values", es: "Valores", fa: "Values" },
    mean: { en: "Mean", es: "Media", fa: "Mean" },
    sd: { en: "SD", es: "SD", fa: "SD" },
    zscores: { en: "Z-scores", es: "Z-scores", fa: "Z-scores" },
    supportTitle: { en: "Bootstrap support", es: "Soporte bootstrap", fa: "Bootstrap support" },
    supportBody: { en: "Compute cluster support from recovered bootstrap replicates.", es: "Calcula soporte del cluster a partir de réplicas bootstrap recuperadas.", fa: "از bootstrap replicates بازیابی‌شده support را حساب کن." },
    recovered: { en: "Recovered", es: "Recuperadas", fa: "Recovered" },
    total: { en: "Total replicates", es: "Réplicas totales", fa: "Total" },
    support: { en: "Support", es: "Soporte", fa: "Support" },
    linkTitle: { en: "Linkage quick check", es: "Chequeo rápido de linkage", fa: "Linkage quick check" },
    linkBody: { en: "Match each linkage to its rule.", es: "Relaciona cada linkage con su regla.", fa: "هر linkage را به rule وصل کن." },
    single: { en: "single", es: "single", fa: "single" },
    complete: { en: "complete", es: "complete", fa: "complete" },
    average: { en: "average", es: "average", fa: "average" },
    correct: { en: "correct", es: "correcto", fa: "درست" },
    wrong: { en: "try again", es: "intenta otra vez", fa: "دوباره تلاش کن" }
  },
  metricCards: [
    { metric: "Pearson d = 1 - |r|", best: { en: "Pattern shape and linear co-variation", es: "Forma del patrón y covariación lineal", fa: "pattern shape و co-variation خطی" }, caveat: { en: "Sensitive to outliers; negative and positive strong correlations both become close", es: "Sensible a outliers; correlaciones fuertes positivas y negativas quedan cerca", fa: "به outlier حساس؛ correlation مثبت/منفی قوی هر دو نزدیک می‌شوند" } },
    { metric: "Spearman", best: { en: "Rank-based robustness", es: "Robustez basada en rangos", fa: "rank-based robustness" }, caveat: { en: "Can lose magnitude, direction and fine structure", es: "Puede perder magnitud, dirección y estructura fina", fa: "ممکن است magnitude/direction/fine structure را از دست بدهد" } },
    { metric: "Euclidean", best: { en: "Magnitude and coordinate differences", es: "Magnitud y diferencias por coordenada", fa: "magnitude و coordinate differences" }, caveat: { en: "Strongly affected by scaling and normalization", es: "Muy afectada por escalado y normalización", fa: "شدیداً تحت تأثیر scaling و normalization" } }
  ],
  questions: [
    [
      { en: "Explain unsupervised analysis in the context of gene/sample matrices.", es: "Explica el análisis no supervisado en el contexto de matrices gen/muestra.", fa: "تحلیل بدون‌ناظر را در ماتریس gene/sample توضیح بده." },
      { en: "Unsupervised analysis explores intrinsic structure without using predefined class labels as the main guide. In a gene/sample matrix, genes or probes are usually rows and samples are columns. The analysis asks whether samples or genes show global patterns of similarity, clusters, outliers or technical structure. Methods include MDS, hierarchical clustering, k-means and PCA. These methods do not replace differential testing; they complement it by revealing whole-dataset organization and helping biological interpretation.", es: "El análisis no supervisado explora la estructura intrínseca sin usar etiquetas de clase predefinidas como guía principal. En una matriz gen/muestra, los genes o probes suelen estar en filas y las muestras en columnas. El análisis pregunta si muestras o genes muestran patrones globales de similitud, clusters, outliers o estructura técnica. Los métodos incluyen MDS, clustering jerárquico, k-means y PCA. No reemplazan los tests diferenciales; los complementan revelando la organización global del dataset y ayudando a la interpretación biológica.", fa: "تحلیل بدون‌ناظر ساختار درونی داده را بدون class label از پیش تعیین‌شده بررسی می‌کند. در ماتریس gene/sample، ژن‌ها یا probes معمولاً ردیف و samples ستون‌اند. این تحلیل similarity، clusters، outliers و technical structure را در کل dataset نشان می‌دهد. روش‌ها شامل MDS، hierarchical clustering، k-means و PCA هستند و جایگزین differential testing نیستند؛ آن را تکمیل می‌کنند." }
    ],
    [
      { en: "Compare Pearson, Spearman and Euclidean distance for clustering.", es: "Compara Pearson, Spearman y distancia Euclídea para clustering.", fa: "Pearson، Spearman و Euclidean را برای clustering مقایسه کن." },
      { en: "Pearson measures linear correlation using the original values and can be converted to distance as 1 - |r|. It captures profile shape but is sensitive to outliers and can place opposite strong profiles close together. Spearman uses ranks, so it is more robust to outliers and scale differences, but it may lose magnitude, direction and fine structure. Euclidean distance measures straight-line coordinate distance, preserving magnitude differences, but it is strongly affected by scaling and normalization. Therefore each metric can produce a different dendrogram.", es: "Pearson mide correlación lineal usando los valores originales y puede convertirse en distancia como 1 - |r|. Captura la forma del perfil, pero es sensible a outliers y puede colocar perfiles opuestos fuertes cerca. Spearman usa rangos, por lo que es más robusto a outliers y diferencias de escala, pero puede perder magnitud, dirección y estructura fina. La distancia Euclídea mide distancia directa por coordenadas, conservando diferencias de magnitud, pero se ve muy afectada por escalado y normalización. Por eso cada métrica puede producir un dendrograma distinto.", fa: "Pearson correlation خطی را با values اصلی می‌سنجد و به 1-|r| تبدیل می‌شود. shape را می‌گیرد اما به outlier حساس است و profiles مخالف قوی را نزدیک می‌کند. Spearman از rank استفاده می‌کند و robustتر است اما magnitude/direction/fine structure را کم می‌کند. Euclidean distance فاصلهٔ مستقیم مختصات را می‌سنجد و magnitude را حفظ می‌کند اما به scaling/normalization حساس است. بنابراین dendrogramها می‌توانند متفاوت باشند." }
    ],
    [
      { en: "Explain hierarchical clustering and the role of linkage methods.", es: "Explica clustering jerárquico y el papel de los métodos de linkage.", fa: "hierarchical clustering و نقش linkage methods را توضیح بده." },
      { en: "Hierarchical clustering starts from a distance matrix and builds a dendrogram of relationships among genes or samples. In agglomerative clustering, each object begins as its own cluster and the closest clusters are joined step by step. Linkage defines how distance between clusters is computed. Single linkage uses the minimum distance and may produce chaining; complete linkage uses maximum distance and tends to make compact clusters; average linkage uses mean pairwise distance and is often useful. Metric and linkage choices must be reported because they affect the final tree.", es: "El clustering jerárquico parte de una matriz de distancias y construye un dendrograma de relaciones entre genes o muestras. En el clustering aglomerativo, cada objeto empieza como su propio cluster y los clusters más cercanos se unen paso a paso. El linkage define cómo se calcula la distancia entre clusters. Single usa distancia mínima y puede producir chaining; complete usa distancia máxima y tiende a formar clusters compactos; average usa distancia media por pares y suele ser útil. Hay que reportar métrica y linkage porque afectan el árbol final.", fa: "hierarchical clustering از distance matrix شروع می‌کند و dendrogram روابط بین genes/samples می‌سازد. در agglomerative clustering هر object ابتدا cluster جداست و نزدیک‌ترین clusterها ادغام می‌شوند. linkage تعیین می‌کند distance بین clusterها چگونه محاسبه شود: single minimum distance، complete maximum distance، average mean pairwise distance. metric و linkage باید گزارش شوند چون tree را تغییر می‌دهند." }
    ],
    [
      { en: "How does bootstrap validation support cluster interpretation?", es: "¿Cómo apoya bootstrap validation la interpretación de clusters?", fa: "bootstrap validation چگونه تفسیر cluster را پشتیبانی می‌کند؟" },
      { en: "Bootstrap validation assesses cluster stability. A bootstrap dataset is generated by sampling with replacement; hierarchical clustering is repeated on the resampled data many times; then we calculate how often each cluster is recovered. A cluster recovered in more than 95% of replicates has very strong support, while less than 70% is weak. This makes the cluster more trustworthy, but it does not prove a biological mechanism by itself. It validates reproducibility under resampling.", es: "La validación bootstrap evalúa estabilidad de clusters. Se genera un dataset bootstrap por muestreo con reemplazo; se repite el clustering jerárquico sobre datos remuestreados muchas veces; luego se calcula con qué frecuencia se recupera cada cluster. Un cluster recuperado en más del 95% de réplicas tiene soporte muy fuerte, mientras que menos del 70% es débil. Esto hace el cluster más fiable, pero no prueba por sí solo un mecanismo biológico. Valida reproducibilidad bajo remuestreo.", fa: "bootstrap validation پایداری cluster را می‌سنجد. dataset با sampling with replacement ساخته می‌شود؛ hierarchical clustering چندین بار روی resampled data تکرار می‌شود؛ سپس frequency recovery هر cluster محاسبه می‌شود. بیش از 95% support بسیار قوی و کمتر از 70% ضعیف است. این cluster را قابل اعتمادتر می‌کند اما به تنهایی mechanism زیستی را ثابت نمی‌کند." }
    ],
    [
      { en: "How should a heatmap be interpreted in this lesson?", es: "¿Cómo debe interpretarse un heatmap en esta lección?", fa: "heatmap را در این درس چگونه تفسیر کنیم؟" },
      { en: "A heatmap visualizes a matrix using color intensity. Rows usually represent genes or probes, columns represent samples, and the color scale represents relative expression or statistics such as z-scores. Dendrograms may be added to summarize similarity among rows or columns. The key is to read the legend: colors may not represent absolute expression. A heatmap helps identify patterns, sample subgroups, outliers and potential batch effects, but it is a visualization and not a statistical test by itself.", es: "Un heatmap visualiza una matriz usando intensidad de color. Las filas suelen representar genes o probes, las columnas muestras y la escala de color expresión relativa o estadísticos como z-scores. Se pueden añadir dendrogramas para resumir similitud entre filas o columnas. La clave es leer la leyenda: los colores pueden no representar expresión absoluta. Un heatmap ayuda a identificar patrones, subgrupos de muestras, outliers y posibles batch effects, pero es una visualización y no un test estadístico por sí solo.", fa: "heatmap ماتریس را با شدت رنگ نشان می‌دهد. ردیف‌ها معمولاً genes/probes و ستون‌ها samples هستند و رنگ relative expression یا z-score را نشان می‌دهد. dendrogram similarity را خلاصه می‌کند. باید legend را خواند چون رنگ لزوماً absolute expression نیست. heatmap pattern، subgroup، outlier و batch effect را نشان می‌دهد اما به تنهایی آزمون آماری نیست." }
    ]
  ]
};

function getUi(lang) { return ui[lang] || ui.es; }
function tr(value, lang) {
  if (Array.isArray(value)) return value.map((item) => tr(item, lang));
  if (value && typeof value === "object") return value[lang] || value.es || value.en || value.fa || "";
  return value ?? "";
}
function parseNums(text) { return String(text || "").split(/[\s,;]+/).map(Number).filter(Number.isFinite); }
function mean(values) { return values.length ? values.reduce((a, b) => a + b, 0) / values.length : NaN; }
function sd(values) { const m = mean(values); if (!values.length) return NaN; return Math.sqrt(values.reduce((a, b) => a + (b - m) ** 2, 0) / values.length); }
function fmt(x, digits = 2) { return Number.isFinite(x) ? x.toFixed(digits).replace(/\.00$/, "") : "—"; }
function supportLabel(p, lang) {
  if (p >= 95) return tr({ en: "very strong", es: "muy fuerte", fa: "بسیار قوی" }, lang);
  if (p >= 80) return tr({ en: "good", es: "bueno", fa: "خوب" }, lang);
  if (p >= 70) return tr({ en: "moderate", es: "moderado", fa: "متوسط" }, lang);
  return tr({ en: "weak", es: "débil", fa: "ضعیف" }, lang);
}

export default function DRDLesson11({ lang = "es", isDone = false, toggle = () => {} }) {
  const labels = getUi(lang);
  const [zoom, setZoom] = useState(null);
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-6 text-stone-950">
    <Navigation labels={labels} isDone={isDone} toggle={toggle} />
    <Hero labels={labels} lang={lang} />

    <section className="mt-8 grid gap-6">
      {copy.sections.map((section, idx) => <FlowBlock key={tr(section.title, lang)} labels={labels} section={section} idx={idx} lang={lang} setZoom={setZoom} />)}
    </section>

    <MetricCompare labels={labels} lang={lang} />
    <LabSuite labels={labels} lang={lang} />
    <WrittenTrainer labels={labels} lang={lang} />
    <Navigation labels={labels} isDone={isDone} toggle={toggle} position="bottom" />
    {zoom ? <ZoomModal labels={labels} slide={zoom} lang={lang} onClose={() => setZoom(null)} /> : null}
  </main>;
}

function Navigation({ labels, isDone, toggle, position = "top" }) {
  return <nav className={`${position === "bottom" ? "mt-10" : "mb-6"} rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm`} aria-label="Lesson navigation">
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <a href="#/lesson/m1-deg-ii" className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">← {labels.previous}: {labels.previousTitle}</a>
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center">
        <a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500 transition hover:bg-stone-50">{labels.current} · {labels.dashboard}</a>
        <button onClick={toggle} className={`rounded-full px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5 ${isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white"}`}>{isDone ? labels.done : labels.mark}</button>
      </div>
      <a href="#/lesson/m1-samples-genes-ii" className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md">{labels.next}: {labels.nextTitle} →</a>
    </div>
  </nav>;
}

function Hero({ labels, lang }) {
  const tags = tr(copy.hero.tags, lang);
  return <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white shadow-sm">
    <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
      <div className="bg-[#fff8ee] p-8 md:p-12">
        <HeroEyebrow>{tr(copy.hero.eyebrow, lang)}</HeroEyebrow>
        <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.06em] md:text-6xl lg:text-7xl">{tr(copy.hero.title, lang)}</h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-stone-700 md:text-xl">{tr(copy.hero.subtitle, lang)}</p>
        <div className="mt-7 flex flex-wrap gap-2">{tags.map((tag, i) => <Pill key={tag} tone={i === 2 ? "red" : "stone"}>{tag}</Pill>)}</div>
      </div>
      <aside className="border-t border-stone-200 bg-white p-8 lg:border-l lg:border-t-0">
        <div className="grid grid-cols-2 gap-3">
          {copy.stats.map((stat) => <StatCard key={tr(stat.label, lang)} label={tr(stat.label, lang)} value={stat.value} tone={stat.tone} />)}
        </div>
        <div className="mt-5 rounded-3xl bg-stone-950 p-6 text-white">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-red-200">{labels.bigIdea}</div>
          <p className="mt-3 text-lg font-black leading-7">{tr(copy.hero.bigIdea, lang)}</p>
        </div>
        <ResourceLinks labels={labels} />
      </aside>
    </div>
  </section>;
}

function HeroEyebrow({ children }) { return <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{children}</div>; }
function Pill({ children, tone = "stone" }) { const cls = tone === "red" ? "border-red-200 bg-red-50 text-red-700" : "border-stone-200 bg-white/80 text-stone-700"; return <span className={`rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${cls}`}>{children}</span>; }
function StatCard({ label, value, tone = "stone" }) { return <div className={`rounded-2xl border p-4 ${tone === "red" ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}><div className="text-xs font-black uppercase tracking-[0.2em] text-stone-500">{label}</div><div className="mt-2 text-2xl font-black text-stone-950">{value}</div></div>; }
function ResourceLinks({ labels }) { const linkBase = "rounded-2xl border px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-sm"; return <div className="mt-4 rounded-3xl border border-stone-200 bg-stone-50 p-4"><div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.resources}</div><div className="grid gap-2 sm:grid-cols-3"><a href={SLIDES_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-red-200 bg-red-50 text-red-800 hover:bg-white`}>{labels.slides}</a><a href={TRANSCRIPT_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-stone-200 bg-white text-stone-800 hover:bg-stone-50`}>{labels.transcript}</a><a href={RECORDING_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-stone-800 bg-stone-950 text-white hover:bg-red-700`}>{labels.recording}</a></div></div>; }
function SectionHeader({ eyebrow, title, children }) { return <div className="mb-6"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div><h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>{children ? <p className="mt-3 max-w-4xl text-base font-semibold leading-7 text-stone-600">{children}</p> : null}</div>; }
function NoteBox({ labels, type, children }) { const isExam = type === "exam"; return <div className={`mt-4 rounded-2xl border p-4 ${isExam ? "border-red-200 bg-red-50" : "border-amber-200 bg-amber-50"}`}><div className={`text-xs font-black uppercase tracking-[0.2em] ${isExam ? "text-red-700" : "text-amber-800"}`}>{isExam ? labels.exam : labels.professor}</div><div className="mt-2 text-sm font-bold leading-6 text-stone-800">{children}</div></div>; }

function FlowBlock({ labels, section, idx, lang, setZoom }) {
  const full = idx % 3 === 0;
  return <article className="rounded-[2.5rem] border border-stone-200 bg-white/90 p-5 shadow-sm md:p-6">
    <SectionHeader eyebrow={tr(section.eyebrow, lang)} title={tr(section.title, lang)}>{tr(section.body, lang)}</SectionHeader>
    <div className={`grid gap-5 ${full ? "lg:grid-cols-1" : "lg:grid-cols-2"}`}>
      {section.slides.map((slide) => <SlideTextCard key={`${slide.n}-${tr(slide.title, lang)}`} labels={labels} slide={slide} lang={lang} setZoom={setZoom} />)}
    </div>
    <NoteBox labels={labels}>{tr(section.emphasis, lang)}</NoteBox>
    <ExamWatch labels={labels} exam={section.exam} lang={lang} />
  </article>;
}
function SlideTextCard({ labels, slide, lang, setZoom }) {
  return <button onClick={() => setZoom(slide)} className="group rounded-[2rem] border border-stone-200 bg-[#fffaf0] p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="rounded-[1.4rem] border border-stone-200 bg-white p-5">
      <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">{labels.slide} {slide.n}</div>
      <h3 className="mt-4 text-2xl font-black tracking-tight text-stone-950">{tr(slide.title, lang)}</h3>
      <p className="mt-3 text-sm font-bold leading-6 text-stone-700">{tr(slide.text, lang)}</p>
      <div className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-stone-400">{labels.zoom}</div>
    </div>
  </button>;
}
function ZoomModal({ labels, slide, lang, onClose }) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/75 p-4" onClick={onClose}>
    <div className="w-[min(900px,95vw)] rounded-[2rem] border border-white/20 bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center justify-between gap-4"><div className="inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">{labels.slide} {slide.n}</div><button onClick={onClose} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white">{labels.close}</button></div>
      <h3 className="mt-5 text-4xl font-black tracking-tight text-stone-950">{tr(slide.title, lang)}</h3>
      <p className="mt-4 text-lg font-bold leading-8 text-stone-700">{tr(slide.text, lang)}</p>
      <a href={SLIDES_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-black text-red-700">{labels.slides} ↗</a>
    </div>
  </div>;
}
function ExamWatch({ labels, exam, lang }) {
  const [open, setOpen] = useState(false);
  const include = tr(exam.include, lang);
  return <div className="mt-5 rounded-[2rem] border border-red-200 bg-red-50 p-5">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{labels.exam}</div>
    <p className="mt-2 text-base font-black leading-7 text-stone-900">{tr(exam.q, lang)}</p>
    <button onClick={() => setOpen(!open)} className="mt-4 rounded-2xl border border-red-200 bg-white px-4 py-3 text-sm font-black text-red-800 shadow-sm">{open ? labels.hide : labels.expand}</button>
    {open ? <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
      <div className="rounded-2xl border border-red-100 bg-white p-4">
        <div className="text-xs font-black uppercase tracking-[0.2em] text-stone-500">{labels.include}</div>
        <ul className="mt-3 space-y-2 text-sm font-bold leading-6 text-stone-700">{include.map((item) => <li key={item}>• {item}</li>)}</ul>
        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="text-xs font-black uppercase tracking-[0.2em] text-amber-800">{labels.trap}</div><p className="mt-2 text-sm font-black leading-6 text-stone-800">{tr(exam.trap, lang)}</p></div>
      </div>
      <div className="rounded-2xl border border-stone-200 bg-white p-4"><div className="text-xs font-black uppercase tracking-[0.2em] text-stone-500">{labels.model}</div><p className="mt-3 text-sm font-black leading-7 text-stone-900">{tr(exam.sample, lang)}</p></div>
    </div> : null}
  </div>;
}

function MetricCompare({ labels, lang }) {
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/90 p-6 shadow-sm md:p-8">
    <SectionHeader eyebrow={labels.compare} title={tr({ en: "Metric choice changes interpretation", es: "La elección de métrica cambia la interpretación", fa: "انتخاب metric تفسیر را عوض می‌کند" }, lang)}>{tr({ en: "Use this as a quick exam table: each metric highlights a different aspect of the same matrix.", es: "Úsalo como tabla rápida de examen: cada métrica resalta un aspecto distinto de la misma matriz.", fa: "این یک جدول سریع امتحانی است: هر metric جنبهٔ متفاوتی از ماتریس را برجسته می‌کند." }, lang)}</SectionHeader>
    <div className="grid gap-4 lg:grid-cols-3">
      {copy.metricCards.map((card) => <div key={card.metric} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
        <div className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-red-700">{card.metric}</div>
        <div className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-stone-500">{tr({ en: "Best for", es: "Sirve para", fa: "مناسب برای" }, lang)}</div>
        <p className="mt-2 text-sm font-black leading-6 text-stone-900">{tr(card.best, lang)}</p>
        <div className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-stone-500">Caveat</div>
        <p className="mt-2 text-sm font-bold leading-6 text-stone-700">{tr(card.caveat, lang)}</p>
      </div>)}
    </div>
  </section>;
}

function LabSuite({ labels, lang }) {
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/90 p-6 shadow-sm md:p-8">
    <SectionHeader eyebrow={labels.lab} title={tr({ en: "Three small checks for the concepts", es: "Tres chequeos pequeños para fijar conceptos", fa: "سه تمرین کوچک برای تثبیت مفاهیم" }, lang)}>{tr({ en: "They are not meant to replace R, only to make the logic memorable for the written exam.", es: "No reemplazan R; solo fijan la lógica para el examen escrito.", fa: "جایگزین R نیستند؛ فقط منطق را برای امتحان تثبیت می‌کنند." }, lang)}</SectionHeader>
    <div className="grid gap-5 lg:grid-cols-3">
      <PearsonLab labels={labels} lang={lang} />
      <ZScoreLab labels={labels} lang={lang} />
      <BootstrapSupportLab labels={labels} lang={lang} />
    </div>
    <div className="mt-5"><LinkageLab labels={labels} lang={lang} /></div>
  </section>;
}
function PearsonLab({ labels, lang }) {
  const [r, setR] = useState(0.97);
  const dist = 1 - Math.abs(Number(r));
  const label = dist < 0.1 ? tr(copy.labs.near, lang) : dist < 0.6 ? tr(copy.labs.mid, lang) : tr(copy.labs.far, lang);
  return <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
    <h3 className="text-xl font-black">{tr(copy.labs.pearsonTitle, lang)}</h3>
    <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{tr(copy.labs.pearsonBody, lang)}</p>
    <input type="range" min="-1" max="1" step="0.01" value={r} onChange={(e) => setR(Number(e.target.value))} className="mt-4 w-full" />
    <div className="mt-4 grid grid-cols-2 gap-3"><StatCard label={tr(copy.labs.r, lang)} value={fmt(Number(r), 2)} /><StatCard label={tr(copy.labs.distance, lang)} value={fmt(dist, 2)} tone="red" /></div>
    <div className="mt-4 rounded-2xl bg-stone-950 p-4 text-white"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-200">{labels.interpretation}</div><div className="mt-2 text-2xl font-black">{label}</div></div>
  </div>;
}
function ZScoreLab({ lang }) {
  const [values, setValues] = useState("10, 20, 30");
  const nums = parseNums(values);
  const m = mean(nums);
  const s = sd(nums);
  const z = nums.map((x) => s ? (x - m) / s : 0);
  return <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
    <h3 className="text-xl font-black">{tr(copy.labs.zTitle, lang)}</h3>
    <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{tr(copy.labs.zBody, lang)}</p>
    <label className="mt-4 block text-xs font-black uppercase tracking-[0.18em] text-stone-500">{tr(copy.labs.values, lang)}</label>
    <input value={values} onChange={(e) => setValues(e.target.value)} className="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm font-bold outline-none focus:border-red-300" />
    <div className="mt-4 grid grid-cols-2 gap-3"><StatCard label={tr(copy.labs.mean, lang)} value={fmt(m)} /><StatCard label={tr(copy.labs.sd, lang)} value={fmt(s)} tone="red" /></div>
    <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{tr(copy.labs.zscores, lang)}</div><p className="mt-2 break-words text-sm font-black text-stone-900">{z.map((x) => fmt(x, 2)).join(", ") || "—"}</p></div>
  </div>;
}
function BootstrapSupportLab({ lang }) {
  const [recovered, setRecovered] = useState(955);
  const [total, setTotal] = useState(1000);
  const pct = Number(total) > 0 ? (Number(recovered) / Number(total)) * 100 : NaN;
  return <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
    <h3 className="text-xl font-black">{tr(copy.labs.supportTitle, lang)}</h3>
    <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{tr(copy.labs.supportBody, lang)}</p>
    <label className="mt-4 block text-xs font-black uppercase tracking-[0.18em] text-stone-500">{tr(copy.labs.recovered, lang)}</label>
    <input type="number" value={recovered} onChange={(e) => setRecovered(e.target.value)} className="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm font-bold outline-none focus:border-red-300" />
    <label className="mt-3 block text-xs font-black uppercase tracking-[0.18em] text-stone-500">{tr(copy.labs.total, lang)}</label>
    <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} className="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm font-bold outline-none focus:border-red-300" />
    <div className="mt-4 grid grid-cols-2 gap-3"><StatCard label={tr(copy.labs.support, lang)} value={`${fmt(pct, 1)}%`} tone="red" /><StatCard label="class" value={supportLabel(pct, lang)} /></div>
  </div>;
}
function LinkageLab({ lang }) {
  const labels = [tr(copy.labs.single, lang), tr(copy.labs.complete, lang), tr(copy.labs.average, lang)];
  const questions = useMemo(() => [
    { q: tr({ en: "minimum distance / nearest neighbor", es: "distancia mínima / vecino más cercano", fa: "minimum distance / nearest neighbor" }, lang), a: labels[0] },
    { q: tr({ en: "maximum distance / farthest neighbor", es: "distancia máxima / vecino más lejano", fa: "maximum distance / farthest neighbor" }, lang), a: labels[1] },
    { q: tr({ en: "mean of all pairwise distances", es: "media de todas las distancias por pares", fa: "mean of pairwise distances" }, lang), a: labels[2] }
  ], [lang]);
  const [ans, setAns] = useState({});
  return <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
    <h3 className="text-xl font-black">{tr(copy.labs.linkTitle, lang)}</h3>
    <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{tr(copy.labs.linkBody, lang)}</p>
    <div className="mt-4 grid gap-3 md:grid-cols-3">{questions.map((item, idx) => <div key={item.q} className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><div className="text-sm font-black text-stone-900">{item.q}</div><div className="mt-3 flex flex-wrap gap-2">{labels.map((opt) => <button key={opt} onClick={() => setAns({ ...ans, [idx]: opt })} className={`rounded-full border px-3 py-1 text-xs font-black ${ans[idx] === opt ? (opt === item.a ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-white text-stone-700"}`}>{opt}</button>)}</div>{ans[idx] ? <div className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-stone-500">{ans[idx] === item.a ? tr(copy.labs.correct, lang) : tr(copy.labs.wrong, lang)}</div> : null}</div>)}</div>
  </div>;
}

function WrittenTrainer({ labels, lang }) {
  const [open, setOpen] = useState({});
  const [answers, setAnswers] = useState({});
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/90 p-6 shadow-sm md:p-8">
    <SectionHeader eyebrow={labels.written} title={labels.written}>{tr({ en: "Write a 10–12 line answer first, then open the model answer.", es: "Escribe primero una respuesta de 10–12 líneas y luego abre la respuesta modelo.", fa: "ابتدا پاسخ ۱۰ تا ۱۲ خطی بنویس، سپس پاسخ نمونه را باز کن." }, lang)}</SectionHeader>
    <div className="grid gap-5">{copy.questions.map(([q, a], idx) => <div key={tr(q, lang)} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
      <h3 className="text-xl font-black text-stone-950">{idx + 1}. {tr(q, lang)}</h3>
      <label className="mt-4 block text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.yourAnswer}</label>
      <textarea value={answers[idx] || ""} onChange={(e) => setAnswers({ ...answers, [idx]: e.target.value })} className="mt-2 min-h-32 w-full rounded-2xl border border-stone-200 bg-white p-4 text-sm font-semibold leading-6 outline-none focus:border-red-300" />
      <button onClick={() => setOpen({ ...open, [idx]: !open[idx] })} className="mt-3 rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white">{open[idx] ? labels.hide : labels.reveal}</button>
      {open[idx] ? <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{labels.model}</div><p className="mt-2 text-sm font-black leading-7 text-stone-900">{tr(a, lang)}</p></div> : null}
    </div>)}</div>
  </section>;
}
