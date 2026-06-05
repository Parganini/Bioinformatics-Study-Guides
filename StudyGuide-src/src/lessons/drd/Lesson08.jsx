import React, { useMemo, useState } from "react";
import slide01 from "../../assets/drd/lesson08/slide-01.png";
import slide02 from "../../assets/drd/lesson08/slide-02.png";
import slide03 from "../../assets/drd/lesson08/slide-03.png";
import slide04 from "../../assets/drd/lesson08/slide-04.png";
import slide05 from "../../assets/drd/lesson08/slide-05.png";
import slide06 from "../../assets/drd/lesson08/slide-06.png";
import slide07 from "../../assets/drd/lesson08/slide-07.png";
import slide08 from "../../assets/drd/lesson08/slide-08.png";
import slide09 from "../../assets/drd/lesson08/slide-09.png";
import slide10 from "../../assets/drd/lesson08/slide-10.png";
import slide11 from "../../assets/drd/lesson08/slide-11.png";
import slide12 from "../../assets/drd/lesson08/slide-12.png";
import slide13 from "../../assets/drd/lesson08/slide-13.png";
import slide14 from "../../assets/drd/lesson08/slide-14.png";
import slide15 from "../../assets/drd/lesson08/slide-15.png";
import slide16 from "../../assets/drd/lesson08/slide-16.png";
import slide17 from "../../assets/drd/lesson08/slide-17.png";

const SLIDES_URL = "https://drive.google.com/file/d/1sN2mGi86239wfQ8w8K-PYtKeF4pWQXAR/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1StKS_UrrCBaIIvwsyz-vhmfrFQoxWy5HiAo8JFN3kHs/edit?usp=drivesdk";
const RECORDING_URL = "https://www.youtube.com/watch?v=prqxPH0DZ_s&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=6";

const slideImages = [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10, slide11, slide12, slide13, slide14, slide15, slide16, slide17];

const ui = {
  en: {
    mark: "Mark completed", done: "Completed", dashboard: "DRD dashboard", previous: "Previous", next: "Next", previousTitle: "M2.1 R/Bioconductor intro", nextTitle: "M2.3 Data import + QC", current: "M2.2", resources: "Class resources", slides: "Slides", transcript: "Transcript", recording: "Recording", open: "Open", zoom: "Click to zoom", close: "Close zoom", slide: "Slide", reportWatch: "Report watch", openAnswer: "Open expanded answer", include: "What to include", trap: "Common trap", model: "Report-ready wording", code: "R code", interpretation: "Interpretation", checkpoint: "Checkpoint", correct: "Correct", notQuite: "Not quite", showAnswer: "Show answer", hideAnswer: "Hide answer", words: "words", trainer: "Report paragraph trainer", placeholder: "Write a report-style paragraph here...", quiz: "Quick checkpoint quiz"
  },
  es: {
    mark: "Marcar completada", done: "Completada", dashboard: "Dashboard DRD", previous: "Anterior", next: "Siguiente", previousTitle: "M2.1 Intro R/Bioconductor", nextTitle: "M2.3 Importación + QC", current: "M2.2", resources: "Recursos de clase", slides: "Slides", transcript: "Transcripción", recording: "Recording", open: "Abrir", zoom: "Click para ampliar", close: "Cerrar zoom", slide: "Diapositiva", reportWatch: "Report watch", openAnswer: "Abrir respuesta desarrollada", include: "Qué incluir", trap: "Trampa común", model: "Redacción lista para report", code: "Código R", interpretation: "Interpretación", checkpoint: "Checkpoint", correct: "Correcto", notQuite: "Casi", showAnswer: "Mostrar respuesta", hideAnswer: "Ocultar respuesta", words: "palabras", trainer: "Entrenador de párrafo de report", placeholder: "Escribe aquí un párrafo estilo report...", quiz: "Quiz rápido de checkpoint"
  },
  fa: {
    mark: "علامت کامل‌شده", done: "کامل شد", dashboard: "داشبورد DRD", previous: "قبلی", next: "بعدی", previousTitle: "M2.1 معرفی R/Bioconductor", nextTitle: "M2.3 ورود داده + QC", current: "M2.2", resources: "منابع کلاس", slides: "اسلایدها", transcript: "رونوشت", recording: "Recording", open: "باز کردن", zoom: "برای بزرگ‌نمایی کلیک کن", close: "بستن بزرگ‌نمایی", slide: "اسلاید", reportWatch: "نکته برای گزارش", openAnswer: "باز کردن پاسخ کامل", include: "چه چیزهایی باید بیاید", trap: "دام رایج", model: "عبارت آماده برای گزارش", code: "کد R", interpretation: "تفسیر", checkpoint: "Checkpoint", correct: "درست", notQuite: "نه کاملاً", showAnswer: "نمایش پاسخ", hideAnswer: "پنهان کردن پاسخ", words: "کلمه", trainer: "تمرین پاراگراف گزارش", placeholder: "یک پاراگراف به سبک گزارش بنویسید...", quiz: "کوئیز سریع"
  }
};

const copy = {
  hero: {
    eyebrow: { en: "Module 2 · May 13/14 · DNA methylation + manifest practice", es: "Módulo 2 · 13/14 de mayo · Metilación + práctica de manifest", fa: "ماژول ۲ · ۱۳/۱۴ مه · متیلاسیون + تمرین manifest" },
    title: { en: "From Infinium chemistry to manifest-file analysis", es: "De la química Infinium al análisis del manifest file", fa: "از شیمی Infinium تا تحلیل manifest file" },
    subtitle: { en: "A practical lesson that first follows the PDF slides and then walks line by line through the R HTML code used to inspect the Illumina 450K manifest.", es: "Una lección práctica que primero sigue las diapositivas reales del PDF y después recorre, paso a paso, el HTML de código R para inspeccionar el manifest Illumina 450K.", fa: "این درس ابتدا اسلایدهای واقعی PDF را دنبال می‌کند و سپس کد R داخل HTML را مرحله‌به‌مرحله برای بررسی manifest 450K توضیح می‌دهد." },
    tags: { en: ["methylation", "CpG context", "bisulfite", "Infinium I/II", "manifest", "R walkthrough"], es: ["metilación", "contexto CpG", "bisulfito", "Infinium I/II", "manifest", "walkthrough R"], fa: ["متیلاسیون", "CpG context", "bisulfite", "Infinium I/II", "manifest", "R walkthrough"] },
    bigIdea: { en: "The manifest is the bridge between wet-lab chemistry and analysis code: every probe row tells you what was measured, where it maps, how it was designed, and how its signal should be interpreted.", es: "El manifest es el puente entre la química de laboratorio y el código de análisis: cada fila de probe te dice qué se midió, dónde mapea, cómo se diseñó y cómo debe interpretarse su señal.", fa: "manifest پل بین شیمی آزمایشگاهی و کد تحلیل است: هر ردیف probe می‌گوید چه چیزی سنجیده شده، کجا map می‌شود، چگونه طراحی شده و سیگنال آن چگونه باید تفسیر شود." }
  },
  stats: [
    { label: { en: "Module", es: "Módulo", fa: "ماژول" }, value: "2" },
    { label: { en: "Assessment", es: "Evaluación", fa: "ارزیابی" }, value: "Report" },
    { label: { en: "Source", es: "Fuente", fa: "منبع" }, value: "PDF + HTML" },
    { label: { en: "Core idea", es: "Idea central", fa: "ایده اصلی" }, value: "manifest" }
  ],
  introSections: [
    {
      eyebrow: { en: "Part 1 · Source-slide flow", es: "Parte 1 · Flujo de diapositivas fuente", fa: "بخش ۱ · جریان اسلایدهای منبع" },
      title: { en: "First: follow the PDF exactly, from methylation biology to Infinium design", es: "Primero: seguir el PDF exactamente, desde la biología de metilación hasta el diseño Infinium", fa: "ابتدا PDF را دقیق دنبال می‌کنیم، از زیست‌شناسی متیلاسیون تا طراحی Infinium" },
      body: { en: "This section uses images extracted directly from the PDF you uploaded. It does not recreate slides. Each slide card sits in the same lesson flow and adds the interpretation that matters for the practical report.", es: "Esta sección usa imágenes extraídas directamente del PDF que subiste. No recrea diapositivas. Cada tarjeta de slide sigue el flujo de la clase y añade la interpretación útil para el report práctico.", fa: "این بخش از تصاویر استخراج‌شده مستقیم از PDF استفاده می‌کند و اسلاید جدید نمی‌سازد. هر کارت اسلاید در جریان درس قرار دارد و تفسیر لازم برای گزارش عملی را اضافه می‌کند." },
      watch: {
        title: { en: "What the professor is emphasizing", es: "Qué está remarcando el profesor", fa: "تأکید استاد" },
        include: {
          en: ["Methylation is binary at the single-molecule level, but a bulk sample produces a continuous beta-like percentage.", "450K is a teaching-friendly platform because it has broad public use and a manageable manifest, even if EPIC/EPIC v2 are newer.", "Infinium I and II are not separate whole arrays in 450K; both probe designs coexist on the same array."],
          es: ["La metilación es binaria a nivel de molécula, pero una muestra bulk produce un porcentaje continuo tipo beta.", "450K es útil para enseñar porque tiene mucho uso público y un manifest manejable, aunque EPIC/EPIC v2 sean más nuevos.", "Infinium I y II no son arrays completos separados en 450K; ambos diseños de probe coexisten en el mismo array."],
          fa: ["در سطح تک‌مولکولی متیلاسیون دودویی است، اما نمونه bulk یک مقدار پیوسته شبیه beta می‌دهد.", "450K برای آموزش مناسب است چون داده عمومی زیاد و manifest قابل‌مدیریت دارد، حتی اگر EPIC/EPIC v2 جدیدتر باشند.", "در 450K، Infinium I و II آرایه‌های جداگانه نیستند؛ هر دو نوع probe در یک آرایه وجود دارند."]
        },
        trap: { en: "Do not say that beta means a single molecule is 50% methylated. It is a population average.", es: "No digas que beta significa que una molécula individual está 50% metilada. Es un promedio poblacional.", fa: "نگویید beta یعنی یک مولکول منفرد ۵۰٪ متیله است. این یک میانگین جمعیتی است." },
        model: { en: "The PDF moves from biology to computation: CpG methylation is converted into a measurable C/T problem by bisulfite chemistry, and the Infinium manifest later records how each CpG probe is designed and annotated.", es: "El PDF va de la biología al cómputo: la metilación CpG se convierte en un problema medible C/T por la química de bisulfito, y el manifest Infinium registra después cómo se diseña y anota cada probe CpG.", fa: "PDF از زیست‌شناسی به محاسبات حرکت می‌کند: شیمی bisulfite متیلاسیون CpG را به مسئله قابل سنجش C/T تبدیل می‌کند و manifest نشان می‌دهد هر probe چگونه طراحی و annotate شده است." }
      }
    },
    {
      eyebrow: { en: "Part 2 · R HTML walkthrough", es: "Parte 2 · Walkthrough del HTML de R", fa: "بخش ۲ · walkthrough کد R در HTML" },
      title: { en: "Then: explain what each code block is doing and why", es: "Después: explicar qué hace cada bloque de código y por qué", fa: "سپس توضیح می‌دهیم هر بلوک کد چه می‌کند و چرا" },
      body: { en: "The second half is not a fake slide deck. It is a guided walkthrough of the HTML notebook: controlled import, debugging with readLines(), cleaning the manifest, extracting annotation, checking Infinium I/II distributions, and building barplots.", es: "La segunda mitad no es un deck falso. Es un walkthrough guiado del notebook HTML: importación controlada, depuración con readLines(), limpieza del manifest, extracción de anotación, revisión de Infinium I/II y construcción de barplots.", fa: "نیمه دوم اسلاید ساختگی نیست؛ یک walkthrough از notebook HTML است: import کنترل‌شده، debug با readLines، پاک‌سازی manifest، استخراج annotation، بررسی Infinium I/II و ساخت barplot." },
      watch: {
        title: { en: "Report logic", es: "Lógica de report", fa: "منطق گزارش" },
        include: {
          en: ["Explain why the code is run, not only what function appears.", "State what object is produced at each step.", "Connect every table or plot to a biological or technical question."],
          es: ["Explica por qué se ejecuta el código, no solo qué función aparece.", "Indica qué objeto se produce en cada paso.", "Conecta cada tabla o gráfico con una pregunta biológica o técnica."],
          fa: ["توضیح بده چرا کد اجرا می‌شود، نه فقط نام تابع را بگو.", "در هر مرحله بگو چه object ساخته می‌شود.", "هر table یا plot را به یک سؤال زیستی یا فنی وصل کن."]
        },
        trap: { en: "Do not paste code without interpretation. The report must translate R actions into analysis decisions.", es: "No pegues código sin interpretación. El report debe traducir acciones de R en decisiones de análisis.", fa: "کد را بدون تفسیر نگذارید؛ گزارش باید کارهای R را به تصمیم‌های تحلیلی ترجمه کند." },
        model: { en: "The HTML demonstrates a defensive workflow: test a small import, inspect the file after an error, correct the import arguments, clean non-genomic rows, and then summarize the manifest with tables and plots.", es: "El HTML demuestra un flujo defensivo: probar una importación pequeña, inspeccionar el archivo tras un error, corregir argumentos de importación, limpiar filas no genómicas y luego resumir el manifest con tablas y gráficos.", fa: "HTML یک workflow محافظه‌کارانه نشان می‌دهد: import کوچک، بررسی فایل بعد از خطا، اصلاح argumentها، حذف ردیف‌های غیرژنومی و سپس خلاصه کردن manifest با table و plot." }
      }
    }
  ],
  slideNotes: [
    { title: { en: "DNA methylation state", es: "Estado de metilación del DNA", fa: "وضعیت متیلاسیون DNA" }, body: { en: "Cytosine is methylated at carbon 5. The slide also distinguishes fully methylated CpG DNA from hemimethylated DNA.", es: "La citosina se metila en el carbono 5. La diapositiva también diferencia DNA CpG completamente metilado de DNA hemimetilado.", fa: "سیتوزین در کربن ۵ متیله می‌شود و اسلاید DNA کاملاً متیله و hemimethylated را جدا می‌کند." } },
    { title: { en: "CpG genomic context", es: "Contexto genómico CpG", fa: "زمینه ژنومی CpG" }, body: { en: "Islands, shores, shelves and open sea become manifest annotations later. The PDF states the UCSC island criteria and reminds us that the human genome has about 28 million CpGs.", es: "Islands, shores, shelves y open sea después aparecen como anotaciones del manifest. El PDF da los criterios UCSC de CpG island y recuerda que el genoma humano tiene unos 28 millones de CpGs.", fa: "island، shore، shelf و open sea بعداً در manifest به صورت annotation می‌آیند. PDF معیارهای UCSC و حدود ۲۸ میلیون CpG را نشان می‌دهد." } },
    { title: { en: "Methylation as percentages", es: "Metilación como porcentajes", fa: "متیلاسیون به صورت درصد" }, body: { en: "At one locus, molecules can be methylated or unmethylated; across molecules the sample becomes 0%, 50%, 100%, etc.", es: "En un locus, las moléculas pueden estar metiladas o no; al promediar muchas moléculas, la muestra puede verse como 0%, 50%, 100%, etc.", fa: "در یک locus، مولکول‌ها یا متیله‌اند یا نه؛ اما در جمعیت مولکول‌ها درصدهایی مانند ۰، ۵۰ یا ۱۰۰٪ دیده می‌شود." } },
    { title: { en: "Bulk sample average", es: "Promedio de muestra bulk", fa: "میانگین نمونه bulk" }, body: { en: "This is the key beta-value intuition: the observed value is the mean methylation status of a population of DNA molecules.", es: "Esta es la intuición clave de beta value: el valor observado es el promedio del estado de metilación de una población de moléculas de DNA.", fa: "اینجا مفهوم اصلی beta است: مقدار مشاهده‌شده میانگین متیلاسیون جمعیتی از مولکول‌های DNA است." } },
    { title: { en: "HumanMethylation family", es: "Familia HumanMethylation", fa: "خانواده HumanMethylation" }, body: { en: "The platform expands from 27K to 450K, EPIC and EPIC v2, increasing probe counts from 27,578 to 937,691.", es: "La plataforma crece de 27K a 450K, EPIC y EPIC v2, aumentando de 27,578 a 937,691 probes.", fa: "پلتفرم از 27K به 450K، EPIC و EPIC v2 گسترش یافته و تعداد probeها از ۲۷٬۵۷۸ به ۹۳۷٬۶۹۱ رسیده است." } },
    { title: { en: "450K coverage", es: "Cobertura 450K", fa: "پوشش 450K" }, body: { en: "450K covers more than 485,000 methylation sites, many RefSeq genes and CpG islands, with additional content outside islands.", es: "450K cubre más de 485,000 sitios de metilación, muchos genes RefSeq e islas CpG, además de contenido fuera de islas.", fa: "450K بیش از ۴۸۵ هزار محل متیلاسیون، بسیاری از ژن‌های RefSeq و جزایر CpG را پوشش می‌دهد." } },
    { title: { en: "12 arrays per slide", es: "12 arrays por slide", fa: "۱۲ آرایه در هر slide" }, body: { en: "One array equals one sample. Probe sequences are represented by multiple beads randomly distributed across the array.", es: "Un array equivale a una muestra. Cada probe sequence está representada por múltiples beads distribuidas aleatoriamente.", fa: "هر array برابر یک نمونه است و هر probe sequence با چندین bead در آرایه توزیع می‌شود." } },
    { title: { en: "Bisulfite and extension", es: "Bisulfito y extensión", fa: "bisulfite و extension" }, body: { en: "Sample prep turns methylated versus unmethylated cytosines into a sequence and fluorescence readout through single-base extension.", es: "La preparación de muestra convierte citosinas metiladas/no metiladas en una lectura de secuencia y fluorescencia mediante single-base extension.", fa: "آماده‌سازی نمونه وضعیت متیله/غیرمتیله را با single-base extension به خوانش توالی و fluorescence تبدیل می‌کند." } },
    { title: { en: "Infinium I versus II", es: "Infinium I versus II", fa: "Infinium I در برابر II" }, body: { en: "Infinium I: two bead types, one colour logic. Infinium II: one bead type, two-colour readout.", es: "Infinium I: dos bead types y lógica de un color. Infinium II: un bead type y lectura de dos colores.", fa: "Infinium I: دو bead type و منطق یک رنگ. Infinium II: یک bead type و خوانش دو رنگ." } },
    { title: { en: "Signal cartoon", es: "Cartoon de señal", fa: "طرح سیگنال" }, body: { en: "This visual reinforces that methylated and unmethylated signals come from different bead/color logic depending on probe design.", es: "El visual refuerza que las señales metilada y no metilada dependen de la lógica bead/color del diseño de probe.", fa: "این تصویر نشان می‌دهد سیگنال متیله و غیرمتیله به طراحی probe و منطق رنگ/bead وابسته است." } },
    { title: { en: "Probe-design assumptions", es: "Supuestos de diseño de probes", fa: "فرض‌های طراحی probe" }, body: { en: "Type I assumes neighbouring CpGs in the 50 bp probe region behave in phase; Type II uses degenerate bases to tolerate nearby CpGs.", es: "Type I asume que CpGs vecinos dentro de 50 bp están en fase; Type II usa bases degeneradas para tolerar CpGs cercanos.", fa: "Type I فرض می‌کند CpGهای نزدیک در ۵۰bp هم‌فازند؛ Type II از bases degenerate برای تحمل CpGهای نزدیک استفاده می‌کند." } },
    { title: { en: "Infinium I example", es: "Ejemplo Infinium I", fa: "مثال Infinium I" }, body: { en: "cg00050873 has AddressA for the unmethylated probe and AddressB for the methylated probe.", es: "cg00050873 tiene AddressA para la probe no metilada y AddressB para la probe metilada.", fa: "cg00050873 دارای AddressA برای probe غیرمتیله و AddressB برای probe متیله است." } },
    { title: { en: "Infinium I extension", es: "Extensión Infinium I", fa: "extension در Infinium I" }, body: { en: "Single-base extension is added after the probe; for Type I, the colour is not the methylation-status code by itself.", es: "La single-base extension se añade después de la probe; en Type I el color no codifica por sí solo el estado de metilación.", fa: "در Type I رنگ به تنهایی کد وضعیت متیلاسیون نیست؛ جایگاه bead نیز مهم است." } },
    { title: { en: "Infinium II example", es: "Ejemplo Infinium II", fa: "مثال Infinium II" }, body: { en: "cg00063477 uses one probe independent of methylation state; the extension base differentiates C versus T.", es: "cg00063477 usa una probe independiente del estado de metilación; la base extendida diferencia C versus T.", fa: "cg00063477 از یک probe مستقل از وضعیت متیلاسیون استفاده می‌کند؛ base اضافه‌شده C/T را تفکیک می‌کند." } },
    { title: { en: "Infinium II extension", es: "Extensión Infinium II", fa: "extension در Infinium II" }, body: { en: "For Type II, the added base/colour is directly tied to methylated versus unmethylated readout.", es: "En Type II, la base/color añadida se vincula directamente con la lectura metilada/no metilada.", fa: "در Type II، base/رنگ افزوده‌شده مستقیماً با خوانش متیله/غیرمتیله مرتبط است." } },
    { title: { en: "Annotation can change", es: "La anotación puede cambiar", fa: "annotation ممکن است تغییر کند" }, body: { en: "Probe design is fixed, but annotation can differ between Illumina files and Bioconductor packages or genome builds.", es: "El diseño de probe es fijo, pero la anotación puede cambiar entre archivos Illumina, paquetes Bioconductor o genome builds.", fa: "طراحی probe ثابت است، اما annotation بین فایل Illumina، بسته‌های Bioconductor یا genome buildها می‌تواند فرق کند." } },
    { title: { en: "450K manifest rows", es: "Filas del manifest 450K", fa: "ردیف‌های manifest 450K" }, body: { en: "The manifest has 486,428 rows and 33 columns: CpG probes, SNP probes, control probes and a [Controls] marker line.", es: "El manifest tiene 486,428 filas y 33 columnas: probes CpG, probes SNP, controles y una línea [Controls].", fa: "manifest دارای ۴۸۶٬۴۲۸ ردیف و ۳۳ ستون است: CpG probe، SNP probe، control probe و خط [Controls]." } }
  ],
  codeSteps: [
    {
      id: "setup",
      label: { en: "0 · workspace", es: "0 · workspace", fa: "۰ · workspace" },
      title: { en: "Clean workspace and set directory", es: "Limpiar workspace y fijar directorio", fa: "پاک‌سازی workspace و تنظیم directory" },
      code: `rm(list=ls())
setwd("~/Dropbox/DRD_2026/2")`,
      interpretation: { en: "Start from a known environment and make file paths predictable.", es: "Empieza desde un entorno conocido y hace que las rutas de archivos sean predecibles.", fa: "از یک محیط مشخص شروع می‌کند و مسیر فایل‌ها را قابل پیش‌بینی می‌سازد." },
      report: { en: "State where files were read from and that the script starts from a clean R session.", es: "Indica de dónde se leyeron los archivos y que el script parte de una sesión R limpia.", fa: "بگویید فایل‌ها از کجا خوانده شدند و اسکریپت از یک نشست تمیز R شروع شده است." }
    },
    {
      id: "test",
      label: { en: "1 · test import", es: "1 · importación prueba", fa: "۱ · import آزمایشی" },
      title: { en: "Try a small import before loading a 200 MB CSV", es: "Probar una importación pequeña antes de cargar un CSV de 200 MB", fa: "قبل از خواندن CSV بزرگ، یک import کوچک انجام دهید" },
      code: `Illumina450Manifest <- read.table(
  "HumanMethylation450_15017482_v1-2.csv",
  sep=",", header=TRUE, nrows=20
)
# Error: line 7 did not have 27 elements`,
      interpretation: { en: "nrows=20 is a safe diagnostic step. The error means the first lines do not form the real rectangular table.", es: "nrows=20 es un paso diagnóstico seguro. El error indica que las primeras líneas no forman la tabla rectangular real.", fa: "nrows=20 یک مرحله تشخیصی امن است. خطا یعنی خطوط اول ساختار جدول واقعی را ندارند." },
      report: { en: "The professor stresses using small imports to debug file structure before reading the full manifest.", es: "El profesor recalca usar importaciones pequeñas para depurar la estructura antes de leer el manifest completo.", fa: "استاد تأکید می‌کند قبل از خواندن کل manifest، با import کوچک ساختار فایل را debug کنید." }
    },
    {
      id: "readlines",
      label: { en: "2 · inspect", es: "2 · inspeccionar", fa: "۲ · بررسی" },
      title: { en: "Use readLines() to see why the import failed", es: "Usar readLines() para ver por qué falló la importación", fa: "با readLines علت خطا را ببینید" },
      code: `readLines("HumanMethylation450_15017482_v1-2.csv", n=20)
# Lines 1-7: Illumina heading metadata
# Line 8: IlmnID, Name, AddressA_ID, ...`,
      interpretation: { en: "The actual table starts on line 8, so the first 7 lines must be skipped.", es: "La tabla real empieza en la línea 8, por lo que deben saltarse las primeras 7 líneas.", fa: "جدول واقعی از خط ۸ شروع می‌شود؛ پس باید ۷ خط اول skip شوند." },
      report: { en: "readLines() is not the final import. It is a file-inspection tool used to diagnose irregular headers.", es: "readLines() no es la importación final; es una herramienta de inspección para diagnosticar encabezados irregulares.", fa: "readLines import نهایی نیست؛ ابزاری برای دیدن headerهای نامنظم است." }
    },
    {
      id: "skip",
      label: { en: "3 · skip=7", es: "3 · skip=7", fa: "۳ · skip=7" },
      title: { en: "Import the real manifest table", es: "Importar la tabla real del manifest", fa: "وارد کردن جدول واقعی manifest" },
      code: `Illumina450Manifest <- read.csv(
  "HumanMethylation450_15017482_v1-2.csv",
  header=TRUE, skip=7, stringsAsFactors=TRUE
)
dim(Illumina450Manifest)`,
      interpretation: { en: "skip=7 ignores the Illumina metadata header. stringsAsFactors=TRUE makes categorical columns usable for table(), levels() and droplevels().", es: "skip=7 ignora el header de metadata de Illumina. stringsAsFactors=TRUE hace que columnas categóricas funcionen con table(), levels() y droplevels().", fa: "skip=7 header متادیتای Illumina را نادیده می‌گیرد. stringsAsFactors=TRUE ستون‌های طبقه‌ای را برای table و levels و droplevels آماده می‌کند." },
      report: { en: "After this step the object should contain the manifest columns such as IlmnID, AddressA_ID, AddressB_ID, CHR and Infinium_Design_Type.", es: "Tras este paso el objeto debe contener columnas del manifest como IlmnID, AddressA_ID, AddressB_ID, CHR e Infinium_Design_Type.", fa: "بعد از این مرحله object باید ستون‌هایی مثل IlmnID، AddressA_ID، AddressB_ID، CHR و Infinium_Design_Type داشته باشد." }
    },
    {
      id: "rdata",
      label: { en: "4 · save/load", es: "4 · save/load", fa: "۴ · ذخیره/خواندن" },
      title: { en: "Use RData for large manifest objects", es: "Usar RData para objetos grandes del manifest", fa: "برای objectهای بزرگ manifest از RData استفاده کنید" },
      code: `save(Illumina450Manifest, file="Illumina450Manifest.RData")
rm(list=ls())
load("Illumina450Manifest.RData")
ls()`,
      interpretation: { en: "The transcript notes that load() is much faster than reading the CSV again and restores the object name stored in the RData file.", es: "La transcripción remarca que load() es mucho más rápido que volver a leer el CSV y restaura el nombre del objeto guardado en el RData.", fa: "در رونوشت گفته می‌شود load از خواندن دوباره CSV سریع‌تر است و نام object ذخیره‌شده در RData را برمی‌گرداند." },
      report: { en: "Mention that RData preserves object names, whereas readRDS() requires assignment to a new object.", es: "Menciona que RData conserva nombres de objetos, mientras que readRDS() requiere asignar el resultado a un objeto nuevo.", fa: "بگویید RData نام object را حفظ می‌کند اما readRDS نیاز به assignment دارد." }
    },
    {
      id: "explore",
      label: { en: "5 · explore", es: "5 · explorar", fa: "۵ · کاوش" },
      title: { en: "Explore structure before analysis", es: "Explorar la estructura antes del análisis", fa: "قبل از تحلیل، ساختار را بررسی کنید" },
      code: `dim(Illumina450Manifest)
head(Illumina450Manifest)
str(Illumina450Manifest)
colnames(Illumina450Manifest)`,
      interpretation: { en: "These functions verify dimensions, example rows, column types and available variables.", es: "Estas funciones verifican dimensiones, filas ejemplo, tipos de columna y variables disponibles.", fa: "این توابع ابعاد، ردیف‌های نمونه، نوع ستون‌ها و متغیرهای موجود را بررسی می‌کنند." },
      report: { en: "Do not jump from import to statistics. First check that the object structure matches expectations.", es: "No saltes de importación a estadística. Primero verifica que la estructura del objeto coincide con lo esperado.", fa: "از import مستقیم به آمار نروید؛ اول ساختار object را بررسی کنید." }
    },
    {
      id: "clean",
      label: { en: "6 · clean", es: "6 · limpiar", fa: "۶ · پاک‌سازی" },
      title: { en: "Remove non-genomic/control rows", es: "Eliminar filas no genómicas/control", fa: "حذف ردیف‌های control/non-genomic" },
      code: `table(Illumina450Manifest$CHR)
notMapped <- Illumina450Manifest$CHR == ""
Illumina450Manifest_clean <- Illumina450Manifest[!notMapped, ]
Illumina450Manifest_clean <- droplevels(Illumina450Manifest_clean)
dim(Illumina450Manifest_clean)`,
      interpretation: { en: "The empty CHR level identifies rows without chromosomal mapping, including control and SNP tracking probes. After filtering, droplevels() removes unused factor levels.", es: "El nivel CHR vacío identifica filas sin mapeo cromosómico, incluyendo controles y SNP tracking probes. Después de filtrar, droplevels() elimina niveles de factor no usados.", fa: "CHR خالی ردیف‌های بدون map کروموزومی، شامل control و SNP tracking probe، را مشخص می‌کند. بعد از فیلتر، droplevels سطح‌های بلااستفاده را حذف می‌کند." },
      report: { en: "The clean manifest contains the mapped CpG probes used for genomic interpretation.", es: "El manifest limpio contiene las probes CpG mapeadas que se usan para interpretación genómica.", fa: "manifest پاک‌سازی‌شده شامل CpG probeهای map شده برای تفسیر ژنومی است." }
    },
    {
      id: "context",
      label: { en: "7 · context", es: "7 · contexto", fa: "۷ · context" },
      title: { en: "Summarize CpG island/shore/shelf/open-sea context", es: "Resumir contexto island/shore/shelf/open-sea", fa: "خلاصه کردن contextهای CpG" },
      code: `table(Illumina450Manifest_clean$Relation_to_UCSC_CpG_Island)
Island <- Illumina450Manifest_clean[
  Illumina450Manifest_clean$Relation_to_UCSC_CpG_Island == "Island", ]
Island_chr1 <- Illumina450Manifest_clean[
  Illumina450Manifest_clean$Relation_to_UCSC_CpG_Island == "Island" &
  Illumina450Manifest_clean$CHR == "1", ]`,
      interpretation: { en: "table() counts contexts; subsetting creates new objects for biologically specific questions such as island probes on chromosome 1.", es: "table() cuenta contextos; el subsetting crea objetos nuevos para preguntas biológicas específicas, como probes en islands del cromosoma 1.", fa: "table تعداد contextها را می‌شمارد؛ subsetting برای پرسش‌هایی مثل island probe در کروموزوم ۱ object جدید می‌سازد." },
      report: { en: "The blank Relation_to_UCSC_CpG_Island level means open sea after the manifest has been cleaned.", es: "El nivel vacío de Relation_to_UCSC_CpG_Island significa open sea después de limpiar el manifest.", fa: "بعد از cleaning، سطح خالی Relation_to_UCSC_CpG_Island یعنی open sea." }
    },
    {
      id: "genes",
      label: { en: "8 · genes", es: "8 · genes", fa: "۸ · genes" },
      title: { en: "Handle gene annotation carefully", es: "Manejar la anotación génica con cuidado", fa: "با annotation ژنی با احتیاط کار کنید" },
      code: `str(Illumina450Manifest_clean$UCSC_RefGene_Name)
nlevels(Illumina450Manifest_clean$UCSC_RefGene_Name)
# Avoid printing table(UCSC_RefGene_Name) when there are thousands of levels`,
      interpretation: { en: "Some probes map to no gene, one gene or multiple genes separated by semicolons. table() can become enormous because the column has many unique values.", es: "Algunas probes mapean a ningún gen, a un gen o a varios genes separados por punto y coma. table() puede volverse enorme porque la columna tiene muchos valores únicos.", fa: "برخی probeها به هیچ ژن، یک ژن یا چند ژن با semicolon map می‌شوند؛ table ممکن است به‌خاطر ارزش‌های یکتا بسیار بزرگ شود." },
      report: { en: "For gene interpretation, use the gene column as annotation and validate important genes with external genome browsers when needed.", es: "Para interpretar genes, usa la columna como anotación y valida genes importantes con genome browsers cuando haga falta.", fa: "برای تفسیر ژن، از ستون به عنوان annotation استفاده کنید و در موارد مهم با genome browser بررسی کنید." }
    },
    {
      id: "design",
      label: { en: "9 · Infinium design", es: "9 · diseño Infinium", fa: "۹ · طراحی Infinium" },
      title: { en: "Count Infinium I and II probes", es: "Contar probes Infinium I y II", fa: "شمارش probeهای Infinium I و II" },
      code: `table(Illumina450Manifest_clean$Infinium_Design_Type)
table(Illumina450Manifest_clean$Color_Channel)
TypeI <- Illumina450Manifest_clean[Illumina450Manifest_clean$Infinium_Design_Type == "I", ]
TypeII <- Illumina450Manifest_clean[Illumina450Manifest_clean$Infinium_Design_Type == "II", ]`,
      interpretation: { en: "The HTML output reports 135,476 Type I and 350,036 Type II probes. Empty Color_Channel corresponds to Type II because Type II can be read in both red and green.", es: "El HTML reporta 135,476 probes Type I y 350,036 Type II. Color_Channel vacío corresponde a Type II porque Type II puede leerse en rojo y verde.", fa: "HTML تعداد ۱۳۵٬۴۷۶ Type I و ۳۵۰٬۰۳۶ Type II را نشان می‌دهد. Color_Channel خالی مربوط به Type II است چون در هر دو رنگ خوانده می‌شود." },
      report: { en: "Connect this table back to the chemistry: Type II uses one bead and two-colour readout, so it is more space-efficient.", es: "Conecta esta tabla con la química: Type II usa un bead y lectura de dos colores, por eso ocupa menos espacio.", fa: "این table را به شیمی وصل کنید: Type II یک bead و خوانش دو رنگ دارد، پس space-efficientتر است." }
    },
    {
      id: "distribution",
      label: { en: "10 · design by context", es: "10 · diseño por contexto", fa: "۱۰ · design بر اساس context" },
      title: { en: "Compare Infinium design by CpG context", es: "Comparar diseño Infinium por contexto CpG", fa: "مقایسه طراحی Infinium بر اساس CpG context" },
      code: `table(Illumina450Manifest_clean$Relation_to_UCSC_CpG_Island,
      Illumina450Manifest_clean$Infinium_Design_Type)`,
      interpretation: { en: "The result checks the lecture claim: Type I is relatively enriched in CpG-rich contexts, whereas Type II is especially abundant in open-sea regions.", es: "El resultado comprueba la idea de clase: Type I está relativamente enriquecido en regiones CpG-rich, mientras Type II abunda especialmente en open sea.", fa: "نتیجه ادعای درس را بررسی می‌کند: Type I در contextهای CpG-rich نسبی‌تر زیاد است و Type II در open sea فراوان‌تر است." },
      report: { en: "This is the moment where chemistry becomes biology: probe design distribution reflects CpG density constraints.", es: "Aquí la química se vuelve biología: la distribución del diseño refleja restricciones de densidad CpG.", fa: "اینجا شیمی به زیست‌شناسی وصل می‌شود: توزیع design محدودیت‌های تراکم CpG را نشان می‌دهد." }
    },
    {
      id: "barplot",
      label: { en: "11 · barplots", es: "11 · barplots", fa: "۱۱ · barplot" },
      title: { en: "Plot counts and fix factor order", es: "Graficar conteos y corregir orden de factores", fa: "رسم count و اصلاح ترتیب factor" },
      code: `counts <- table(Illumina450Manifest_clean$CHR)
barplot(counts)
Illumina450Manifest_clean$CHR <- factor(
  Illumina450Manifest_clean$CHR,
  levels=c(as.character(1:22), "X", "Y")
)
barplot(table(Illumina450Manifest_clean$CHR), main="Probes per chromosome")`,
      interpretation: { en: "R orders factor levels alphabetically by default, so chromosomes appear as 1,10,11,... Explicit levels restore biological order.", es: "R ordena niveles de factor alfabéticamente por defecto, así que los cromosomas aparecen como 1,10,11,... Los niveles explícitos restauran el orden biológico.", fa: "R سطح‌های factor را به طور پیش‌فرض الفبایی مرتب می‌کند؛ با levels صریح، ترتیب زیستی کروموزوم‌ها برمی‌گردد." },
      report: { en: "Explain both what the plot shows and what data-preparation step was needed before plotting.", es: "Explica tanto qué muestra el gráfico como qué preparación de datos fue necesaria antes de graficar.", fa: "هم بگویید plot چه نشان می‌دهد و هم چه آماده‌سازی داده‌ای قبل از plot لازم بود." }
    },
    {
      id: "ratio",
      label: { en: "12 · supplementary", es: "12 · suplementario", fa: "۱۲ · تکمیلی" },
      title: { en: "Check the Type I / Type II ratio by chromosome", es: "Revisar ratio Type I / Type II por cromosoma", fa: "بررسی نسبت Type I/Type II در کروموزوم‌ها" },
      code: `df_table <- data.frame(table(
  Illumina450Manifest_clean$Infinium_Design_Type,
  Illumina450Manifest_clean$CHR
))
ratio_I_II <- df_table_I$Freq / df_table_II$Freq
names(ratio_I_II) <- levels(df_table_I$Var2)
barplot(ratio_I_II)`,
      interpretation: { en: "The supplementary code converts a table into a data frame, separates I and II rows, checks chromosome alignment, and plots ratios.", es: "El código suplementario convierte table en data frame, separa filas I y II, verifica alineación de cromosomas y grafica ratios.", fa: "کد تکمیلی table را به data frame تبدیل می‌کند، I و II را جدا می‌کند، alignment کروموزوم‌ها را بررسی می‌کند و نسبت‌ها را plot می‌کند." },
      report: { en: "This is a compact example of transforming an exploratory table into a derived quantity for interpretation.", es: "Este es un ejemplo compacto de transformar una tabla exploratoria en una cantidad derivada para interpretación.", fa: "این نمونه‌ای فشرده از تبدیل table اکتشافی به یک مقدار مشتق‌شده برای تفسیر است." }
    }
  ],
  checks: [
    {
      q: { en: "A beta value of 0.25 mainly means...", es: "Un beta value de 0.25 principalmente significa...", fa: "beta value برابر ۰.۲۵ یعنی..." },
      options: [
        { key: "molecule", en: "one molecule is 25% methylated", es: "una molécula está 25% metilada", fa: "یک مولکول ۲۵٪ متیله است" },
        { key: "population", en: "about 25% of molecules/cells contribute methylated signal", es: "aprox. 25% de moléculas/células aportan señal metilada", fa: "حدود ۲۵٪ مولکول‌ها/سلول‌ها سیگنال methylated می‌دهند" }
      ],
      correct: "population",
      why: { en: "Bulk methylation values are population averages, not partial methylation of one molecule.", es: "Los valores bulk son promedios poblacionales, no metilación parcial de una molécula.", fa: "مقادیر bulk میانگین جمعیتی‌اند، نه متیلاسیون جزئی یک مولکول." }
    },
    {
      q: { en: "In 450K, Infinium I and II are...", es: "En 450K, Infinium I y II son...", fa: "در 450K، Infinium I و II ..." },
      options: [
        { key: "separate", en: "separate whole arrays", es: "arrays completos separados", fa: "آرایه‌های کاملاً جدا هستند" },
        { key: "same", en: "probe designs coexisting on the same array", es: "diseños de probe que coexisten en el mismo array", fa: "طراحی‌های probe هستند که در یک آرایه coexist دارند" }
      ],
      correct: "same",
      why: { en: "A single 450K array contains rows/probes with different Infinium_Design_Type values.", es: "Un mismo array 450K contiene filas/probes con distintos valores de Infinium_Design_Type.", fa: "یک 450K array ردیف/probeهایی با Infinium_Design_Type متفاوت دارد." }
    },
    {
      q: { en: "After filtering rows from a factor column, droplevels()...", es: "Después de filtrar filas de una columna factor, droplevels()...", fa: "بعد از فیلتر کردن ردیف‌های یک factor، droplevels..." },
      options: [
        { key: "remove", en: "removes unused levels", es: "elimina niveles no usados", fa: "سطح‌های بلااستفاده را حذف می‌کند" },
        { key: "delete", en: "deletes rows with NA", es: "borra filas con NA", fa: "ردیف‌های NA را حذف می‌کند" }
      ],
      correct: "remove",
      why: { en: "Subsetting keeps old levels unless you explicitly drop them.", es: "El subsetting conserva niveles antiguos salvo que los elimines explícitamente.", fa: "subsetting سطح‌های قدیمی را نگه می‌دارد مگر این‌که آن‌ها را drop کنید." }
    }
  ],
  trainerPrompt: { en: "Prompt: Write a report paragraph explaining how the M2.2 workflow connects bisulfite/Infinium chemistry with the R manifest walkthrough.", es: "Prompt: Escribe un párrafo de report explicando cómo el flujo de M2.2 conecta la química bisulfito/Infinium con el walkthrough del manifest en R.", fa: "Prompt: یک پاراگراف گزارش بنویسید که توضیح دهد workflow M2.2 چگونه شیمی bisulfite/Infinium را به walkthrough manifest در R وصل می‌کند." },
  trainerModel: {
    en: "This lesson connects the wet-lab principle of methylation arrays with the computational structure of the manifest. Bisulfite conversion changes unmethylated cytosines into U/T while methylated cytosines remain C, allowing the array to read methylation as a C/T problem. Infinium I and II use different probe designs: Type I uses two bead types and two addresses, whereas Type II uses one bead type and two-colour extension. In R, the manifest records this information in columns such as IlmnID, AddressA_ID, AddressB_ID, Infinium_Design_Type, Color_Channel, CHR and Relation_to_UCSC_CpG_Island. The HTML workflow first imports the manifest carefully, fixes the irregular Illumina header with skip=7, inspects structure with dim(), head(), str() and colnames(), removes non-genomic/control rows, drops unused factor levels, then summarizes CpG context and Infinium design with table() and barplot(). Therefore the code is not just data handling; it translates array chemistry into interpretable genomic annotations for the report.",
    es: "Esta lección conecta el principio wet-lab de los methylation arrays con la estructura computacional del manifest. La conversión con bisulfito transforma citosinas no metiladas en U/T, mientras que las citosinas metiladas permanecen como C, permitiendo que el array lea la metilación como un problema C/T. Infinium I y II usan diseños de probe distintos: Type I usa dos bead types y dos addresses, mientras que Type II usa un bead type y extensión en dos colores. En R, el manifest guarda esta información en columnas como IlmnID, AddressA_ID, AddressB_ID, Infinium_Design_Type, Color_Channel, CHR y Relation_to_UCSC_CpG_Island. El workflow del HTML primero importa el manifest con cuidado, corrige el header irregular de Illumina con skip=7, inspecciona la estructura con dim(), head(), str() y colnames(), elimina filas no genómicas/control, limpia niveles de factores y luego resume contexto CpG y diseño Infinium con table() y barplot(). Por tanto, el código no es solo manejo de datos; traduce la química del array en anotaciones genómicas interpretables para el report.",
    fa: "این درس اصل wet-lab در methylation array را به ساختار محاسباتی manifest وصل می‌کند. bisulfite conversion سیتوزین‌های غیرمتیله را به U/T تبدیل می‌کند، در حالی که سیتوزین‌های متیله C باقی می‌مانند؛ بنابراین array متیلاسیون را به صورت مسئله C/T می‌خواند. Infinium I و II طراحی متفاوت دارند: Type I دو bead type و دو address دارد، اما Type II یک bead type و extension دو رنگ دارد. در R، manifest این اطلاعات را در ستون‌هایی مثل IlmnID، AddressA_ID، AddressB_ID، Infinium_Design_Type، Color_Channel، CHR و Relation_to_UCSC_CpG_Island نگه می‌دارد. workflow HTML ابتدا manifest را با احتیاط import می‌کند، header نامنظم Illumina را با skip=7 اصلاح می‌کند، ساختار را با dim، head، str و colnames بررسی می‌کند، ردیف‌های control/non-genomic را حذف می‌کند، سطح‌های factor را drop می‌کند و سپس CpG context و Infinium design را با table و barplot خلاصه می‌کند. پس کد فقط data handling نیست؛ شیمی array را به annotation ژنومی قابل تفسیر برای گزارش تبدیل می‌کند."
  },
  quiz: [
    { q: { en: "Why does the code first use nrows=20?", es: "¿Por qué el código usa primero nrows=20?", fa: "چرا کد اول از nrows=20 استفاده می‌کند؟" }, a: { en: "To test the file structure quickly before loading the full 200 MB CSV.", es: "Para probar rápidamente la estructura del archivo antes de cargar el CSV completo de 200 MB.", fa: "برای آزمون سریع ساختار فایل قبل از خواندن CSV کامل بزرگ." } },
    { q: { en: "What does skip=7 fix?", es: "¿Qué corrige skip=7?", fa: "skip=7 چه چیزی را اصلاح می‌کند؟" }, a: { en: "It skips Illumina metadata/header lines so R starts reading at the real table header.", es: "Salta líneas de metadata/header de Illumina para que R lea desde el header real de la tabla.", fa: "خطوط metadata/header مربوط به Illumina را رد می‌کند تا R از header واقعی جدول بخواند." } },
    { q: { en: "Why can Color_Channel be empty for Type II probes?", es: "¿Por qué Color_Channel puede estar vacío para Type II?", fa: "چرا Color_Channel برای Type II می‌تواند خالی باشد؟" }, a: { en: "Because Type II probes are read in both red and green; the colour is tied to methylation status after extension.", es: "Porque las probes Type II se leen en rojo y verde; el color se vincula al estado de metilación tras la extensión.", fa: "چون probeهای Type II در هر دو رنگ red/green خوانده می‌شوند و رنگ با وضعیت متیلاسیون مرتبط است." } },
    { q: { en: "What does table(x, y) produce?", es: "¿Qué produce table(x, y)?", fa: "table(x, y) چه می‌سازد؟" }, a: { en: "A co-occurrence table that counts combinations of levels from x and y.", es: "Una tabla de co-ocurrencias que cuenta combinaciones de niveles de x e y.", fa: "یک جدول co-occurrence که ترکیب سطح‌های x و y را می‌شمارد." } },
    { q: { en: "Why reorder CHR factor levels before plotting?", es: "¿Por qué reordenar niveles de CHR antes de graficar?", fa: "چرا قبل از plot، سطح‌های CHR را مرتب می‌کنیم؟" }, a: { en: "Because alphabetical factor order gives 1,10,11,...; explicit levels restore 1,2,3,...,X,Y.", es: "Porque el orden alfabético da 1,10,11,...; niveles explícitos restauran 1,2,3,...,X,Y.", fa: "چون ترتیب الفبایی 1,10,11,... می‌دهد؛ levels صریح 1,2,3,...,X,Y را برمی‌گرداند." } }
  ]
};

function cx(...classes) { return classes.filter(Boolean).join(" "); }
function t(value, lang) { return typeof value === "object" && value !== null ? (value[lang] || value.es || value.en || value.fa || "") : value; }
function Pill({ children, className = "" }) { return <span className={cx("inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-emerald-700", className)}>{children}</span>; }
function ResourceButton({ href, children, active = false }) { return <a href={href} target="_blank" rel="noreferrer" className={cx("flex-1 rounded-2xl border px-5 py-3 text-center text-sm font-black shadow-sm transition hover:-translate-y-0.5", active ? "border-emerald-500 bg-emerald-600 text-white" : "border-stone-200 bg-white text-stone-900 hover:border-emerald-200")}>{children}</a>; }

function LessonNav({ lang, isDone, toggle, bottom = false }) {
  const labels = ui[lang] || ui.es;
  return <nav className={cx("rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm", bottom ? "mt-10" : "mb-6")} aria-label="Lesson navigation">
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <a href="#/lesson/m2-r" className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">← {labels.previous}: {labels.previousTitle}</a>
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center">
        <a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500 transition hover:bg-stone-50">{labels.current} · {labels.dashboard}</a>
        <button type="button" onClick={toggle} className={cx("rounded-full px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5", isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white hover:bg-emerald-700")}>{isDone ? labels.done : labels.mark}</button>
      </div>
      <a href="#/lesson/m2-3" className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md">{labels.next}: {labels.nextTitle} →</a>
    </div>
  </nav>;
}

function Hero({ lang }) {
  const labels = ui[lang] || ui.es;
  return <header className="grid overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
    <div className="bg-emerald-50/60 p-8 md:p-12">
      <Pill>{t(copy.hero.eyebrow, lang)}</Pill>
      <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-stone-950 md:text-7xl">{t(copy.hero.title, lang)}</h1>
      <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-stone-700">{t(copy.hero.subtitle, lang)}</p>
      <div className="mt-7 flex flex-wrap gap-2">{t(copy.hero.tags, lang).map(tag => <span key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-stone-700">{tag}</span>)}</div>
    </div>
    <aside className="bg-white p-6 md:p-8">
      <div className="grid grid-cols-2 gap-3">{copy.stats.map(item => <div key={t(item.label, lang)} className="rounded-3xl border border-stone-200 bg-stone-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{t(item.label, lang)}</div><div className="mt-2 text-3xl font-black text-stone-950">{item.value}</div></div>)}</div>
      <div className="mt-4 rounded-[1.5rem] bg-stone-950 p-6 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Big idea</div><p className="mt-3 text-lg font-black leading-7">{t(copy.hero.bigIdea, lang)}</p></div>
      <div className="mt-4 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.resources}</div>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row"><ResourceButton href={SLIDES_URL} active>{labels.slides} ↗</ResourceButton><ResourceButton href={TRANSCRIPT_URL}>{labels.transcript} ↗</ResourceButton><ResourceButton href={RECORDING_URL}>{labels.recording} ↗</ResourceButton></div>
      </div>
    </aside>
  </header>;
}

function SectionHeader({ eyebrow, title, children }) {
  return <div><Pill>{eyebrow}</Pill><h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-stone-950 md:text-4xl">{title}</h2>{children && <p className="mt-4 max-w-4xl text-base font-semibold leading-8 text-stone-700">{children}</p>}</div>;
}

function ReportWatch({ lang, watch }) {
  const labels = ui[lang] || ui.es;
  const [open, setOpen] = useState(false);
  return <aside className="mt-6 rounded-[2rem] border border-emerald-200 bg-emerald-50/70 p-5">
    <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.reportWatch}</div>
    <p className="mt-2 text-base font-black text-emerald-950">{t(watch.title, lang)}</p>
    <button type="button" onClick={() => setOpen(!open)} className="mt-4 rounded-full border border-emerald-300 bg-white px-4 py-2 text-sm font-black text-emerald-800 hover:bg-emerald-100">{open ? labels.hideAnswer : labels.openAnswer}</button>
    {open && <div className="mt-5 space-y-4">
      <div><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.include}</div><ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-bold leading-6 text-stone-800">{t(watch.include, lang).map(item => <li key={item}>{item}</li>)}</ul></div>
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">{labels.trap}</div><p className="mt-2 text-sm font-black leading-6 text-amber-950">{t(watch.trap, lang)}</p></div>
      <div className="rounded-2xl border border-stone-200 bg-white p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.model}</div><p className="mt-2 text-sm font-bold leading-7 text-stone-800">{t(watch.model, lang)}</p></div>
    </div>}
  </aside>;
}

function IntroBlocks({ lang }) {
  return <div className="mt-8 grid gap-6 lg:grid-cols-2">{copy.introSections.map(section => <section key={t(section.eyebrow, lang)} className="rounded-[2rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={t(section.eyebrow, lang)} title={t(section.title, lang)}>{t(section.body, lang)}</SectionHeader><ReportWatch lang={lang} watch={section.watch}/></section>)}</div>;
}

function SlideDeck({ lang, onZoom }) {
  const labels = ui[lang] || ui.es;
  const slides = copy.slideNotes.map((note, index) => ({ ...note, src: slideImages[index], n: index + 1 }));
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-5 shadow-sm md:p-8">
    <SectionHeader eyebrow="PDF slides" title={lang === "es" ? "Diapositivas reales extraídas del PDF" : lang === "fa" ? "اسلایدهای واقعی استخراج‌شده از PDF" : "Real slides extracted from the PDF"}>{lang === "es" ? "Las tarjetas mantienen el flujo de la clase. Haz click para ampliar la slide original." : lang === "fa" ? "کارت‌ها جریان کلاس را حفظ می‌کنند. برای بزرگ‌نمایی اسلاید اصلی کلیک کنید." : "The cards preserve the class flow. Click to zoom into the original slide."}</SectionHeader>
    <div className="mt-6 grid gap-6 md:grid-cols-2">{slides.map((item, index) => <article key={item.n} className={cx("rounded-[2rem] border border-stone-200 bg-stone-50 p-4", slides.length % 2 === 1 && index === slides.length - 1 && "md:col-span-2")}>
      <button type="button" onClick={() => onZoom(item)} className="group block w-full text-left">
        <div className="overflow-hidden rounded-[1.25rem] border border-stone-200 bg-white"><img src={item.src} alt={`${labels.slide} ${item.n}`} className="aspect-video w-full object-contain transition duration-300 group-hover:scale-[1.02]"/></div>
        <div className="mt-4 flex flex-wrap items-center gap-2"><Pill className="bg-white">{labels.slide} {item.n}</Pill><span className="text-xs font-bold text-stone-500">{labels.zoom}</span></div>
        <h3 className="mt-3 text-xl font-black text-stone-950">{t(item.title, lang)}</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{t(item.body, lang)}</p>
      </button>
    </article>)}</div>
  </section>;
}

function CodeResult({ step, lang }) {
  const labels = ui[lang] || ui.es;
  return <div className="mt-6 grid gap-4 lg:grid-cols-2">
    <div className="rounded-[1.5rem] bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">{labels.code}</div><pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm font-bold leading-7"><code>{step.code}</code></pre></div>
    <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.interpretation}</div><p className="mt-3 text-base font-bold leading-8 text-stone-800">{t(step.interpretation, lang)}</p><div className="mt-4 rounded-2xl border border-emerald-200 bg-white p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Report</div><p className="mt-2 text-sm font-bold leading-7 text-emerald-950">{t(step.report, lang)}</p></div></div>
  </div>;
}

function CodeWalkthrough({ lang }) {
  const labels = ui[lang] || ui.es;
  const [active, setActive] = useState(copy.codeSteps[0].id);
  const step = copy.codeSteps.find(item => item.id === active) || copy.codeSteps[0];
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-5 shadow-sm md:p-8">
    <SectionHeader eyebrow="R HTML" title={lang === "es" ? "Walkthrough explicativo del código" : lang === "fa" ? "walkthrough توضیحی کد" : "Explanatory code walkthrough"}>{lang === "es" ? "Esta segunda parte sigue los chunks del HTML, pero los traduce a decisiones de análisis y frases que puedes usar en el report." : lang === "fa" ? "این بخش chunkهای HTML را دنبال می‌کند و آن‌ها را به تصمیم‌های تحلیلی و جملات مناسب گزارش تبدیل می‌کند." : "This second part follows the HTML chunks but translates them into analysis decisions and report-ready phrasing."}</SectionHeader>
    <div className="mt-6 flex gap-2 overflow-x-auto pb-2">{copy.codeSteps.map(item => <button key={item.id} type="button" onClick={() => setActive(item.id)} className={cx("shrink-0 rounded-full border px-4 py-2 text-sm font-black transition", active === item.id ? "border-emerald-500 bg-emerald-600 text-white" : "border-stone-200 bg-white text-stone-700 hover:border-emerald-200")}>{t(item.label, lang)}</button>)}</div>
    <div className="mt-6 rounded-[2rem] border border-stone-200 bg-stone-50 p-5"><Pill>{labels.checkpoint}</Pill><h3 className="mt-3 text-2xl font-black text-stone-950">{t(step.title, lang)}</h3><CodeResult step={step} lang={lang}/></div>
  </section>;
}

function Checkpoints({ lang }) {
  const labels = ui[lang] || ui.es;
  const [selected, setSelected] = useState({});
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-5 shadow-sm md:p-8">
    <SectionHeader eyebrow={labels.checkpoint} title={lang === "es" ? "Comprobaciones rápidas de comprensión" : lang === "fa" ? "بررسی سریع فهم" : "Quick understanding checks"}>{lang === "es" ? "La opción seleccionada queda remarcada para que recuerdes qué respondiste." : lang === "fa" ? "گزینه انتخاب‌شده مشخص می‌ماند تا پاسخ خود را ببینید." : "The selected option stays highlighted so you can see what you chose."}</SectionHeader>
    <div className="mt-6 grid gap-4 lg:grid-cols-3">{copy.checks.map((item, idx) => <article key={t(item.q, lang)} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5"><p className="font-black leading-7 text-stone-950">{t(item.q, lang)}</p><div className="mt-4 flex flex-col gap-2">{item.options.map(option => <button key={option.key} type="button" onClick={() => setSelected({ ...selected, [idx]: option.key })} className={cx("rounded-2xl border px-3 py-2 text-left text-sm font-bold", selected[idx] === option.key ? (option.key === item.correct ? "border-emerald-400 bg-emerald-100 text-emerald-900" : "border-red-300 bg-red-100 text-red-900") : "border-stone-200 bg-white text-stone-700")}>{t(option, lang)}</button>)}</div>{selected[idx] && <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-stone-700"><span className="font-black">{selected[idx] === item.correct ? labels.correct : labels.notQuite}.</span> {t(item.why, lang)}</p>}</article>)}</div>
  </section>;
}

function Quiz({ lang }) {
  const labels = ui[lang] || ui.es;
  const [open, setOpen] = useState({});
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-5 shadow-sm md:p-8">
    <SectionHeader eyebrow="Quiz" title={labels.quiz}>{lang === "es" ? "Preguntas cortas para repasar antes de pasar a M2.3." : lang === "fa" ? "پرسش‌های کوتاه برای مرور قبل از M2.3." : "Short questions to review before moving to M2.3."}</SectionHeader>
    <div className="mt-6 grid gap-3">{copy.quiz.map((item, idx) => <article key={t(item.q, lang)} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="flex gap-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{idx + 1}</div><div className="min-w-0 flex-1"><p className="font-bold text-stone-900">{t(item.q, lang)}</p><button type="button" onClick={() => setOpen({ ...open, [idx]: !open[idx] })} className="mt-4 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 hover:bg-emerald-100">{open[idx] ? labels.hideAnswer : labels.showAnswer}</button>{open[idx] && <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-semibold leading-6 text-stone-700">{t(item.a, lang)}</p>}</div></div></article>)}</div>
  </section>;
}

function Trainer({ lang }) {
  const labels = ui[lang] || ui.es;
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const words = useMemo(() => (text.trim() ? text.trim().split(/\s+/).length : 0), [text]);
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-5 shadow-sm md:p-8">
    <SectionHeader eyebrow="Report" title={labels.trainer}>{t(copy.trainerPrompt, lang)}</SectionHeader>
    <textarea value={text} onChange={event => setText(event.target.value)} placeholder={labels.placeholder} className="mt-5 min-h-44 w-full rounded-3xl border border-stone-200 bg-white p-4 text-sm font-semibold leading-7 outline-none focus:border-emerald-300"/>
    <div className="mt-3 flex flex-wrap items-center justify-between gap-3"><span className="text-sm font-bold text-stone-500">{words} {labels.words}</span><button type="button" onClick={() => setShow(!show)} className="rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white hover:bg-emerald-700">{show ? labels.hideAnswer : labels.showAnswer}</button></div>
    {show && <div className="mt-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{labels.model}</div><p className="mt-3 text-sm font-bold leading-7 text-emerald-950">{t(copy.trainerModel, lang)}</p></div>}
  </section>;
}

function ZoomModal({ item, lang, onClose }) {
  const labels = ui[lang] || ui.es;
  if (!item) return null;
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/80 p-4" role="dialog" aria-modal="true" onClick={onClose}>
    <div className="max-h-[94vh] w-[min(1100px,96vw)] overflow-auto rounded-[2rem] bg-white p-4 shadow-2xl" onClick={event => event.stopPropagation()}>
      <div className="mb-3 flex items-center justify-between gap-3"><div><Pill>{labels.slide} {item.n}</Pill><h3 className="mt-2 text-xl font-black text-stone-950">{t(item.title, lang)}</h3></div><button type="button" onClick={onClose} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white hover:bg-emerald-700">{labels.close}</button></div>
      <img src={item.src} alt={`${labels.slide} ${item.n}`} className="w-full rounded-[1.5rem] object-contain"/>
      <p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{t(item.body, lang)}</p>
    </div>
  </div>;
}

export default function DRDLesson08({ lang = "es", isDone = false, toggle = () => {} }) {
  const [zoom, setZoom] = useState(null);
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
    <LessonNav lang={lang} isDone={isDone} toggle={toggle}/>
    <Hero lang={lang}/>
    <IntroBlocks lang={lang}/>
    <SlideDeck lang={lang} onZoom={setZoom}/>
    <CodeWalkthrough lang={lang}/>
    <Checkpoints lang={lang}/>
    <Quiz lang={lang}/>
    <Trainer lang={lang}/>
    <LessonNav lang={lang} isDone={isDone} toggle={toggle} bottom/>
    <ZoomModal item={zoom} lang={lang} onClose={() => setZoom(null)}/>
  </main>;
}
