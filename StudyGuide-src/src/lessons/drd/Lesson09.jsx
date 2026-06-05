import React, { useMemo, useState } from "react";
import slide01 from "../../assets/drd/lesson09/slide-01.png";
import slide02 from "../../assets/drd/lesson09/slide-02.png";
import slide03 from "../../assets/drd/lesson09/slide-03.png";
import slide04 from "../../assets/drd/lesson09/slide-04.png";
import slide05 from "../../assets/drd/lesson09/slide-05.png";
import slide06 from "../../assets/drd/lesson09/slide-06.png";
import slide07 from "../../assets/drd/lesson09/slide-07.png";
import slide08 from "../../assets/drd/lesson09/slide-08.png";
import slide09 from "../../assets/drd/lesson09/slide-09.png";
import slide10 from "../../assets/drd/lesson09/slide-10.png";
import slide11 from "../../assets/drd/lesson09/slide-11.png";
import slide12 from "../../assets/drd/lesson09/slide-12.png";
import slide13 from "../../assets/drd/lesson09/slide-13.png";
import slide14 from "../../assets/drd/lesson09/slide-14.png";
import slide15 from "../../assets/drd/lesson09/slide-15.png";
import slide16 from "../../assets/drd/lesson09/slide-16.png";
import slide17 from "../../assets/drd/lesson09/slide-17.png";
import slide18 from "../../assets/drd/lesson09/slide-18.png";
import slide19 from "../../assets/drd/lesson09/slide-19.png";
import slide20 from "../../assets/drd/lesson09/slide-20.png";
import slide21 from "../../assets/drd/lesson09/slide-21.png";
import slide22 from "../../assets/drd/lesson09/slide-22.png";
import slide23 from "../../assets/drd/lesson09/slide-23.png";
import slide24 from "../../assets/drd/lesson09/slide-24.png";
import slide25 from "../../assets/drd/lesson09/slide-25.png";
import slide26 from "../../assets/drd/lesson09/slide-26.png";
import slide27 from "../../assets/drd/lesson09/slide-27.png";
import slide28 from "../../assets/drd/lesson09/slide-28.png";
import slide29 from "../../assets/drd/lesson09/slide-29.png";
import slide30 from "../../assets/drd/lesson09/slide-30.png";
import slide31 from "../../assets/drd/lesson09/slide-31.png";
import slide32 from "../../assets/drd/lesson09/slide-32.png";


const SLIDES_URL = "https://drive.google.com/file/d/18mE84-kSZ83x9t7B3Wrj_FfUN9-H5Ev_/view?usp=drivesdk";
const CODE_URL = "https://drive.google.com/file/d/1VeUyh13Un4Gger5-NAdYoY2LTvR0S1Ad/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1RR19_bNqZuU-KwOgeu3S2btB-_3X_M2lbskBlCTnU2o/edit?usp=drivesdk";
const RECORDING_URL = "https://www.youtube.com/watch?v=XddknpRmhQI&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=7";
const slideImages = [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10, slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20, slide21, slide22, slide23, slide24, slide25, slide26, slide27, slide28, slide29, slide30, slide31, slide32];


const ui = {
  en: {
    mark: "Mark completed", done: "Completed", dashboard: "DRD dashboard", previous: "Previous", next: "Next",
    previousTitle: "M2.2 DNA methylation + BeadChip chemistry", nextTitle: "M2.4 Normalization I", current: "M2.3",
    resources: "Class resources", slides: "Slides", code: "Code HTML", transcript: "Transcript", recording: "Recording",
    slide: "Slide", zoom: "Click to zoom", close: "Close zoom", reportWatch: "Report watch", openAnswer: "Open expanded answer",
    include: "What to include", trap: "Common trap", model: "Report-ready wording", rcode: "R code", interpretation: "Interpretation",
    reportMove: "Report move", checkpoint: "Checkpoint", correct: "Correct", notQuite: "Not quite", trainer: "Report paragraph trainer",
    placeholder: "Write a report-style paragraph here...", words: "words"
  },
  es: {
    mark: "Marcar completada", done: "Completada", dashboard: "Dashboard DRD", previous: "Anterior", next: "Siguiente",
    previousTitle: "M2.2 Metilación DNA + química BeadChip", nextTitle: "M2.4 Normalización I", current: "M2.3",
    resources: "Recursos de clase", slides: "Slides", code: "Código HTML", transcript: "Transcripción", recording: "Recording",
    slide: "Diapositiva", zoom: "Click para ampliar", close: "Cerrar zoom", reportWatch: "Report watch", openAnswer: "Abrir respuesta desarrollada",
    include: "Qué incluir", trap: "Trampa común", model: "Redacción lista para report", rcode: "Código R", interpretation: "Interpretación",
    reportMove: "Movimiento para report", checkpoint: "Checkpoint", correct: "Correcto", notQuite: "Casi", trainer: "Entrenador de párrafo de report",
    placeholder: "Escribe aquí un párrafo estilo report...", words: "palabras"
  },
  fa: {
    mark: "علامت کامل‌شده", done: "کامل شد", dashboard: "داشبورد DRD", previous: "قبلی", next: "بعدی",
    previousTitle: "M2.2 متیلاسیون DNA + شیمی BeadChip", nextTitle: "M2.4 نرمال‌سازی I", current: "M2.3",
    resources: "منابع کلاس", slides: "اسلایدها", code: "کد HTML", transcript: "رونوشت", recording: "Recording",
    slide: "اسلاید", zoom: "برای بزرگ‌نمایی کلیک کن", close: "بستن بزرگ‌نمایی", reportWatch: "نکته برای گزارش", openAnswer: "باز کردن پاسخ کامل",
    include: "چه چیزهایی باید بیاید", trap: "دام رایج", model: "عبارت آماده برای گزارش", rcode: "کد R", interpretation: "تفسیر",
    reportMove: "حرکت مناسب گزارش", checkpoint: "Checkpoint", correct: "درست", notQuite: "نه کاملاً", trainer: "تمرین پاراگراف گزارش",
    placeholder: "یک پاراگراف به سبک گزارش بنویسید...", words: "کلمه"
  }
};

const copy = {
  hero: {
    eyebrow: { en: "Module 2 · May 19 · data import + quality control", es: "Módulo 2 · 19 de mayo · importación de datos + control de calidad", fa: "ماژول ۲ · ۱۹ مه · ورود داده + کنترل کیفیت" },
    title: { en: "From IDAT files to quality-controlled methylation objects", es: "De archivos IDAT a objetos de metilación con control de calidad", fa: "از فایل‌های IDAT تا objectهای متیلاسیون با کنترل کیفیت" },
    subtitle: { en: "A practical lesson using the real PDF slides and the R HTML code to import raw Illumina 450K data, understand minfi objects, inspect out-of-band signals and apply QC/filtering decisions.", es: "Una lección práctica con las diapositivas reales del PDF y el HTML de código R para importar datos crudos Illumina 450K, entender objetos minfi, inspeccionar señales out-of-band y aplicar decisiones de QC/filtrado.", fa: "یک درس عملی با اسلایدهای واقعی PDF و کد R در HTML برای import داده خام Illumina 450K، فهم objectهای minfi، بررسی سیگنال out-of-band و تصمیم‌گیری QC/filtering." },
    tags: { en: ["IDAT", "minfi", "RGChannelSet", "MethylSet", "QC", "detection P"], es: ["IDAT", "minfi", "RGChannelSet", "MethylSet", "QC", "detection P"], fa: ["IDAT", "minfi", "RGChannelSet", "MethylSet", "QC", "detection P"] },
    bigIdea: { en: "IDAT → RGChannelSet → MethylSet → QC plot/control probes → detectionP → filter samples first → save bad probes", es: "IDAT → RGChannelSet → MethylSet → QC plot/control probes → detectionP → filtrar muestras primero → guardar probes malas", fa: "IDAT → RGChannelSet → MethylSet → QC plot/control probes → detectionP → اول sampleها را فیلتر کن → probeهای بد را ذخیره کن" }
  },
  stats: [
    { label: { en: "Module", es: "Módulo", fa: "ماژول" }, value: "2", tone: "green" },
    { label: { en: "Date", es: "Fecha", fa: "تاریخ" }, value: "May 19" },
    { label: { en: "Core", es: "Core", fa: "محور" }, value: "QC", tone: "green" },
    { label: { en: "Output", es: "Output", fa: "خروجی" }, value: "Report" }
  ]
};

const slideNotes = [
  { range: "1–6", title: { en: "Pipeline and raw import", es: "Pipeline e importación cruda", fa: "pipeline و import خام" }, body: { en: "The course starts the 450K bioinformatics pipeline with IDAT files: binary red/green channel intensities produced by the Illumina iScan. The professor stresses that GenomeStudio can read these data, but R/minfi is preferred because it is more flexible and offers more preprocessing choices.", es: "La clase abre el pipeline bioinformático 450K con archivos IDAT: intensidades crudas de los canales rojo/verde producidas por Illumina iScan. El profesor remarca que GenomeStudio puede leer estos datos, pero R/minfi es preferible por flexibilidad y por sus opciones de preprocesamiento.", fa: "درس pipeline بیوانفورماتیک 450K را با فایل‌های IDAT شروع می‌کند: شدت‌های خام کانال قرمز/سبز از Illumina iScan. استاد تأکید می‌کند GenomeStudio می‌تواند داده‌ها را بخواند، اما R/minfi انعطاف و گزینه‌های preprocessing بیشتری دارد." } },
  { range: "7–13", title: { en: "S4 objects and signal remapping", es: "Objetos S4 y remapeo de señales", fa: "objectهای S4 و بازآرایی سیگنال" }, body: { en: "These slides are the conceptual key: RGChannelSet is address-wise and stores red/green channels; MethylSet is locus-wise and stores methylated/unmethylated channels. Out-of-band signals exist in RGChannelSet but are not kept as methylation signals in MethylSet.", es: "Estas diapositivas son la clave conceptual: RGChannelSet está organizado por addresses y guarda canales red/green; MethylSet está organizado por locus y guarda canales methylated/unmethylated. Las señales out-of-band existen en RGChannelSet, pero no se conservan como señales de metilación en MethylSet.", fa: "این اسلایدها کلید مفهومی‌اند: RGChannelSet بر اساس address و کانال red/green است؛ MethylSet بر اساس locus و کانال methylated/unmethylated است. سیگنال‌های out-of-band در RGChannelSet وجود دارند اما در MethylSet به عنوان متیلاسیون نگه داشته نمی‌شوند." } },
  { range: "14–21", title: { en: "Quality controls", es: "Controles de calidad", fa: "کنترل‌های کیفیت" }, body: { en: "The QC plot is only a quick screen. Control probes help diagnose individual wet-lab and scanning steps: staining, extension, hybridization, target removal and bisulfite conversion. Negative controls are especially important because they define background/noise expectations.", es: "El QC plot es solo un chequeo rápido. Las control probes ayudan a diagnosticar pasos concretos de wet-lab y escaneo: staining, extension, hybridization, target removal y bisulfite conversion. Los negative controls son especialmente importantes porque definen expectativas de background/ruido.", fa: "QC plot فقط یک بررسی سریع است. control probeها مراحل wet-lab و scan مثل staining، extension، hybridization، target removal و bisulfite conversion را تشخیص می‌دهند. negative controlها مهم‌اند چون انتظار background/noise را مشخص می‌کنند." } },
  { range: "22–32", title: { en: "Detection p-values and SNP-related filtering", es: "Detection p-values y filtrado relacionado con SNPs", fa: "detection p-value و فیلتر مرتبط با SNP" }, body: { en: "Detection p-values ask whether each probe signal is distinguishable from background. SNPs are another unwanted-variation source because they can alter the target CpG, the flanking base or probe binding efficiency.", es: "Los detection p-values preguntan si la señal de cada probe se distingue del background. Los SNPs son otra fuente de variación no deseada porque pueden alterar el CpG objetivo, la base flanqueante o la eficiencia de unión de la probe.", fa: "detection p-value می‌پرسد آیا سیگنال هر probe از background قابل تشخیص است. SNP نیز منبع variation ناخواسته است چون می‌تواند CpG هدف، باز کنار آن یا binding probe را تغییر دهد." } }
];

const reportWatches = [
  {
    title: { en: "Possible report question: describe the first part of the 450K analysis pipeline.", es: "Posible pregunta de report: describe la primera parte del pipeline 450K.", fa: "سؤال احتمالی گزارش: بخش اول pipeline 450K را توضیح دهید." },
    include: {
      en: ["Start from IDAT files, not beta values.", "State that IDATs contain raw red and green fluorescence intensities from iScan.", "Name the first minfi object: RGChannelSet.", "Explain that QC/filtering must precede normalization and differential methylation."],
      es: ["Empieza por archivos IDAT, no por beta values.", "Indica que los IDAT contienen intensidades crudas rojo/verde del iScan.", "Nombra el primer objeto minfi: RGChannelSet.", "Explica que QC/filtrado debe preceder normalización y differential methylation."],
      fa: ["از فایل‌های IDAT شروع کنید، نه beta value.", "بگویید IDAT شدت خام red/green از iScan دارد.", "اولین object در minfi را نام ببرید: RGChannelSet.", "توضیح دهید QC/filtering باید قبل از normalization و differential methylation باشد."]
    },
    trap: { en: "Do not say the first input is an already normalized beta matrix.", es: "No digas que la entrada inicial ya es una matriz beta normalizada.", fa: "نگویید ورودی اولیه یک ماتریس beta نرمال‌شده است." },
    model: { en: "The analysis starts from raw IDAT files, which store red and green fluorescence intensities for each array position. In minfi, these files are imported as an RGChannelSet; only after QC and preprocessing are the signals converted into methylation-oriented objects and eventually beta or M values.", es: "El análisis empieza con archivos IDAT crudos, que guardan intensidades fluorescentes rojas y verdes para cada posición del array. En minfi, estos archivos se importan como RGChannelSet; solo después de QC y preprocesamiento se convierten en objetos orientados a metilación y, finalmente, en beta o M values.", fa: "تحلیل از فایل‌های خام IDAT شروع می‌شود که شدت fluorescence red/green هر موقعیت array را ذخیره می‌کنند. در minfi این فایل‌ها به RGChannelSet import می‌شوند؛ فقط بعد از QC و preprocessing سیگنال‌ها به objectهای متیلاسیون و سپس beta/M value تبدیل می‌شوند." }
  },
  {
    title: { en: "Professor emphasis: RGChannelSet versus MethylSet.", es: "Énfasis del profesor: RGChannelSet versus MethylSet.", fa: "تأکید استاد: RGChannelSet در برابر MethylSet." },
    include: {
      en: ["RGChannelSet: red/green channels, address-wise rows.", "MethylSet: Meth/Unmeth channels, IlmnID/CpG-locus rows.", "Use accessors like getRed(), getGreen(), getMeth(), getUnmeth(); avoid direct slot access.", "Out-of-band background signals are present in RGChannelSet and are lost in MethylSet."],
      es: ["RGChannelSet: canales red/green, filas por address.", "MethylSet: canales Meth/Unmeth, filas por IlmnID/locus CpG.", "Usa accessors como getRed(), getGreen(), getMeth(), getUnmeth(); evita acceder directo a slots.", "Las señales out-of-band/background están en RGChannelSet y se pierden en MethylSet."],
      fa: ["RGChannelSet: کانال red/green و ردیف‌ها بر اساس address.", "MethylSet: کانال Meth/Unmeth و ردیف‌ها بر اساس IlmnID/CpG locus.", "از accessor مثل getRed/getGreen/getMeth/getUnmeth استفاده کنید؛ نه slot مستقیم.", "سیگنال out-of-band در RGChannelSet است و در MethylSet از دست می‌رود."]
    },
    trap: { en: "Do not confuse probe address with cg/IlmnID. The address is technical; the cg ID identifies the CpG locus.", es: "No confundas probe address con cg/IlmnID. El address es técnico; el cg ID identifica el locus CpG.", fa: "probe address را با cg/IlmnID اشتباه نگیرید. address فنی است؛ cg ID locus را مشخص می‌کند." },
    model: { en: "preprocessRaw reorganizes the data: Type I/II raw red-green intensities stored by address are converted into methylated and unmethylated signals stored by CpG probe ID. This explains why the row identifiers and channel names change.", es: "preprocessRaw reorganiza los datos: las intensidades crudas red-green Type I/II guardadas por address se convierten en señales methylated y unmethylated guardadas por ID de probe CpG. Por eso cambian los identificadores de fila y los nombres de canales.", fa: "preprocessRaw داده را بازآرایی می‌کند: شدت‌های خام red-green بر اساس address به سیگنال‌های methylated/unmethylated بر اساس CpG probe ID تبدیل می‌شوند. به همین دلیل نام کانال‌ها و row IDها عوض می‌شوند." }
  },
  {
    title: { en: "Professor emphasis: QC plot is useful but not decisive alone.", es: "Énfasis del profesor: el QC plot sirve, pero no decide solo.", fa: "تأکید استاد: QC plot مفید است اما به‌تنهایی کافی نیست." },
    include: {
      en: ["QC plot uses log2 median Meth and Unmeth intensity.", "Samples clustered above the threshold are reassuring.", "Low total intensity may reflect less DNA loaded, not necessarily failed biology.", "Confirm with control probes and detection p-values before excluding samples."],
      es: ["El QC plot usa la mediana log2 de intensidades Meth y Unmeth.", "Muestras agrupadas por encima del umbral son tranquilizadoras.", "Baja intensidad total puede reflejar menos DNA cargado, no necesariamente mala calidad biológica.", "Confirma con control probes y detection p-values antes de excluir muestras."],
      fa: ["QC plot از median log2 شدت Meth و Unmeth استفاده می‌کند.", "قرار گرفتن sampleها کنار هم و بالای threshold نشانه خوب است.", "شدت کم می‌تواند ناشی از DNA کمتر باشد، نه لزوماً خرابی sample.", "قبل از حذف sample با control probe و detection p-value تأیید کنید."]
    },
    trap: { en: "Do not delete a sample only because the QC plot looks slightly shifted.", es: "No elimines una muestra solo porque el QC plot se ve ligeramente desplazado.", fa: "فقط به خاطر کمی جابه‌جایی در QC plot یک sample را حذف نکنید." },
    model: { en: "The QC plot is a screening visualization, not a final exclusion rule. It should be combined with step-specific control probes and detection p-values to decide whether a sample should be retained.", es: "El QC plot es una visualización de screening, no una regla final de exclusión. Debe combinarse con control probes específicas de pasos y detection p-values para decidir si una muestra se retiene.", fa: "QC plot یک visualization غربالگری است، نه قانون نهایی حذف. باید با control probeهای مرحله‌خاص و detection p-value ترکیب شود تا درباره نگه‌داشتن sample تصمیم بگیریم." }
  },
  {
    title: { en: "Report rule: filter samples before probes.", es: "Regla de report: filtra muestras antes que probes.", fa: "قاعده گزارش: اول sample را فیلتر کنید، بعد probe." },
    include: {
      en: ["Define failed matrix as detP > threshold.", "Use colMeans(failed) to get the fraction of failed probes per sample.", "Remove samples exceeding the selected failed-probe fraction.", "Only then evaluate rowMeans(failed) to decide probes to remove later from beta/M tables."],
      es: ["Define la matriz failed como detP > threshold.", "Usa colMeans(failed) para obtener la fracción de probes fallidas por muestra.", "Elimina muestras que superan la fracción elegida.", "Solo después evalúa rowMeans(failed) para decidir probes que se eliminarán más tarde de tablas beta/M."],
      fa: ["failed را به صورت detP > threshold تعریف کنید.", "با colMeans(failed) fraction probeهای failed در هر sample را بگیرید.", "sampleهای بالاتر از threshold انتخابی را حذف کنید.", "فقط بعد rowMeans(failed) را برای probeهایی که بعداً از beta/M حذف می‌شوند بررسی کنید."]
    },
    trap: { en: "Do not filter probes first; then you lose the information needed to identify samples with many bad probes.", es: "No filtres probes primero; perderías la información necesaria para identificar muestras con muchas probes malas.", fa: "اول probeها را فیلتر نکنید؛ اطلاعات لازم برای تشخیص sampleهای پر از probe بد از بین می‌رود." },
    model: { en: "Detection p-values were first summarized by sample, because sample exclusion must happen before probe exclusion. Probe names failing the chosen threshold were then saved for removal after normalized methylation matrices are available.", es: "Los detection p-values se resumieron primero por muestra, porque la exclusión de muestras debe ocurrir antes de la exclusión de probes. Después se guardaron los nombres de las probes que fallaban el umbral elegido para eliminarlas cuando estén disponibles las matrices de metilación normalizadas.", fa: "detection p-value ابتدا بر اساس sample خلاصه شد، چون حذف sample باید قبل از حذف probe انجام شود. سپس نام probeهای failed ذخیره شد تا بعد از آماده شدن ماتریس‌های normalized حذف شوند." }
  }
];

const codeSteps = [
  { title: { en: "1 · start clean and load minfi", es: "1 · empezar limpio y cargar minfi", fa: "۱ · شروع تمیز و بارگذاری minfi" }, code: `rm(list=ls())
setwd("~/Dropbox/DRD_2026/3")
suppressMessages(library(minfi))`, interpretation: { en: "The script begins with a clean workspace and loads minfi quietly. The lesson notes that minfi can have version/dependency issues, so this is the first place to check your setup.", es: "El script empieza con un workspace limpio y carga minfi sin mensajes. La clase remarca que minfi puede tener problemas de versión/dependencias, así que este es el primer punto a revisar.", fa: "اسکریپت با workspace پاک شروع می‌شود و minfi را بی‌صدا load می‌کند. درس اشاره می‌کند minfi ممکن است مشکل version/dependency داشته باشد." }, report: { en: "Report the R/minfi version if reproducibility matters.", es: "Reporta la versión de R/minfi si la reproducibilidad importa.", fa: "اگر reproducibility مهم است، نسخه R/minfi را گزارش کنید." } },
  { title: { en: "2 · inspect the input folder", es: "2 · inspeccionar carpeta de entrada", fa: "۲ · بررسی پوشه ورودی" }, code: `list.files("~/Dropbox/DRD_2026/3/Input_Data")`, interpretation: { en: "The expected folder contains two IDAT files per sample, one red and one green, plus the SampleSheet.csv.", es: "La carpeta esperada contiene dos IDAT por muestra, uno red y uno green, además de SampleSheet.csv.", fa: "پوشه باید برای هر sample دو IDAT، یکی red و یکی green، و SampleSheet.csv داشته باشد." }, report: { en: "Mention that raw import depends on correct file organization, not only on R commands.", es: "Menciona que la importación cruda depende de la organización correcta de archivos, no solo de comandos R.", fa: "بگویید import خام به چیدمان درست فایل‌ها هم وابسته است." } },
  { title: { en: "3 · read and validate the sample sheet", es: "3 · leer y validar sample sheet", fa: "۳ · خواندن و اعتبارسنجی sample sheet" }, code: `SampleSheet <- read.csv("~/Dropbox/DRD_2026/3/Input_Data/SampleSheet.csv", header=TRUE)
SampleSheet`, interpretation: { en: "The mandatory columns are Sample_ID, Sample_Well, Array and Slide. The professor stresses that Array + Slide let minfi build the basename used to find the IDAT files.", es: "Las columnas obligatorias son Sample_ID, Sample_Well, Array y Slide. El profesor remarca que Array + Slide permiten a minfi construir el basename para encontrar los IDAT.", fa: "ستون‌های لازم Sample_ID، Sample_Well، Array و Slide هستند. استاد تأکید می‌کند Array + Slide basename لازم برای یافتن IDATها را می‌سازند." }, report: { en: "A malformed sample sheet prevents reliable import.", es: "Una sample sheet mal formada impide una importación fiable.", fa: "sample sheet نادرست import قابل اعتماد را مختل می‌کند." } },
  { title: { en: "4 · build targets with read.metharray.sheet", es: "4 · construir targets con read.metharray.sheet", fa: "۴ · ساخت targets با read.metharray.sheet" }, code: `baseDir <- "~/Dropbox/DRD_2026/3/Input_Data"
targets <- read.metharray.sheet(baseDir)
targets`, interpretation: { en: "read.metharray.sheet searches the directory, reads the sample sheet and adds the basename column used by read.metharray.exp.", es: "read.metharray.sheet busca en el directorio, lee la sample sheet y añade la columna basename que usará read.metharray.exp.", fa: "read.metharray.sheet پوشه را جست‌وجو می‌کند، sample sheet را می‌خواند و ستون basename را اضافه می‌کند." }, report: { en: "Always inspect targets before importing IDATs.", es: "Siempre inspecciona targets antes de importar IDATs.", fa: "قبل از import IDATها، targets را بررسی کنید." } },
  { title: { en: "5 · import IDATs as RGChannelSet", es: "5 · importar IDATs como RGChannelSet", fa: "۵ · import کردن IDAT به RGChannelSet" }, code: `RGset <- read.metharray.exp(targets = targets)
save(RGset, file="RGset.RData")
RGset`, interpretation: { en: "The imported object is an RGChannelSet. It stores red and green intensities address-wise, so it has more rows than the number of CpG loci because Type I probes have two addresses.", es: "El objeto importado es un RGChannelSet. Guarda intensidades red y green por address, por lo que tiene más filas que loci CpG porque las probes Type I tienen dos addresses.", fa: "object واردشده RGChannelSet است. شدت red/green را بر اساس address ذخیره می‌کند، پس تعداد ردیف‌ها از تعداد CpG locus بیشتر است چون Type I دو address دارد." }, report: { en: "This is raw signal data, not methylation percentages yet.", es: "Esto son señales crudas, aún no porcentajes de metilación.", fa: "این سیگنال خام است، هنوز درصد متیلاسیون نیست." } },
  { title: { en: "6 · inspect the S4 object", es: "6 · inspeccionar el objeto S4", fa: "۶ · بررسی object S4" }, code: `RGset
str(RGset)
?RGChannelSet`, interpretation: { en: "S4 objects have slots, but the professor recommends accessor functions rather than direct @ slot access.", es: "Los objetos S4 tienen slots, pero el profesor recomienda funciones accessor y no acceso directo con @.", fa: "objectهای S4 slot دارند اما استاد accessor function را به جای @ مستقیم توصیه می‌کند." }, report: { en: "State which channels, row IDs and sample columns the object contains.", es: "Indica qué canales, row IDs y columnas de muestras contiene el objeto.", fa: "کانال‌ها، row IDها و ستون‌های sample را ذکر کنید." } },
  { title: { en: "7 · extract red and green matrices", es: "7 · extraer matrices red y green", fa: "۷ · استخراج ماتریس red/green" }, code: `Red <- data.frame(getRed(RGset))
Green <- data.frame(getGreen(RGset))
dim(Red)
head(Red)`, interpretation: { en: "getRed() and getGreen() return intensity matrices. Converting to data.frame can modify column names unless check.names is controlled.", es: "getRed() y getGreen() devuelven matrices de intensidad. Convertir a data.frame puede modificar nombres de columnas si no controlas check.names.", fa: "getRed و getGreen ماتریس شدت می‌دهند. تبدیل به data.frame ممکن است نام ستون‌ها را عوض کند مگر check.names کنترل شود." }, report: { en: "Mention whether data are address-wise or locus-wise.", es: "Menciona si los datos están por address o por locus.", fa: "بگویید داده address-wise است یا locus-wise." } },
  { title: { en: "8 · use the manifest to decode addresses", es: "8 · usar el manifest para decodificar addresses", fa: "۸ · استفاده از manifest برای decode address" }, code: `load("../2/Illumina450Manifest_clean.RData")
Illumina450Manifest_clean[Illumina450Manifest_clean$AddressA_ID=="10600313",]
Illumina450Manifest_clean[Illumina450Manifest_clean$AddressB_ID=="10600313",]`, interpretation: { en: "The HTML walks from a numeric address back to the probe design, cg identifier and annotation. One report task will ask this kind of address decoding.", es: "El HTML va de un address numérico al diseño de probe, identificador cg y anotación. Una tarea de report puede pedir esta decodificación de addresses.", fa: "HTML از address عددی به طراحی probe، شناسه cg و annotation می‌رود. یکی از taskهای گزارش می‌تواند همین decoding باشد." }, report: { en: "Do not infer chemistry from intensity alone; confirm it with the manifest.", es: "No infieras química solo por intensidad; confírmala con el manifest.", fa: "شیمی را فقط از شدت حدس نزنید؛ با manifest تأیید کنید." } },
  { title: { en: "9 · identify out-of-band signals", es: "9 · identificar señales out-of-band", fa: "۹ · تشخیص سیگنال out-of-band" }, code: `Red[rownames(Red)=="31729416",]
Green[rownames(Green)=="31729416",]`, interpretation: { en: "For a Type I probe labeled in one channel, signal in the opposite channel is out-of-band background. The professor emphasizes that this is not useless: it supports background estimation.", es: "Para una probe Type I etiquetada en un canal, la señal del canal opuesto es out-of-band/background. El profesor remarca que no es inútil: sirve para estimar background.", fa: "برای Type I در یک کانال، سیگنال کانال مخالف out-of-band/background است. استاد تأکید می‌کند بی‌فایده نیست؛ برای background estimation مهم است." }, report: { en: "Out-of-band information is retained in RGChannelSet but not in MethylSet.", es: "La información out-of-band se conserva en RGChannelSet, pero no en MethylSet.", fa: "اطلاعات out-of-band در RGChannelSet می‌ماند اما در MethylSet نه." } },
  { title: { en: "10 · convert to MethylSet", es: "10 · convertir a MethylSet", fa: "۱۰ · تبدیل به MethylSet" }, code: `MSet.raw <- preprocessRaw(RGset)
save(MSet.raw, file="MSet_raw.RData")
MSet.raw`, interpretation: { en: "preprocessRaw reorganizes red/green address-level values into Meth/Unmeth CpG-locus values.", es: "preprocessRaw reorganiza valores red/green por address en valores Meth/Unmeth por locus CpG.", fa: "preprocessRaw مقادیر red/green در سطح address را به Meth/Unmeth در سطح CpG locus تبدیل می‌کند." }, report: { en: "This step changes both the row identifiers and the channel meaning.", es: "Este paso cambia tanto los identificadores de fila como el significado de los canales.", fa: "این گام هم row identifier و هم معنی کانال را تغییر می‌دهد." } },
  { title: { en: "11 · extract Meth and Unmeth", es: "11 · extraer Meth y Unmeth", fa: "۱۱ · استخراج Meth و Unmeth" }, code: `Meth <- getMeth(MSet.raw)
Unmeth <- getUnmeth(MSet.raw)
head(Meth)
head(Unmeth)`, interpretation: { en: "These accessors return methylated and unmethylated intensity tables. For Type II, red maps to Unmeth and green maps to Meth; for Type I, AddressA/AddressB determine Unmeth/Meth.", es: "Estos accessors devuelven tablas de intensidad methylated y unmethylated. Para Type II, red mapea a Unmeth y green a Meth; para Type I, AddressA/AddressB determinan Unmeth/Meth.", fa: "این accessorها جدول شدت methylated/unmethylated می‌دهند. در Type II قرمز به Unmeth و سبز به Meth می‌رود؛ در Type I، AddressA/B تعیین می‌کند." }, report: { en: "Explain how the same raw signal becomes biological channel information.", es: "Explica cómo la misma señal cruda se convierte en información de canal biológico.", fa: "توضیح دهید سیگنال خام چگونه به کانال زیستی تبدیل می‌شود." } },
  { title: { en: "12 · QC plot", es: "12 · QC plot", fa: "۱۲ · QC plot" }, code: `qc <- getQC(MSet.raw)
qc
plotQC(qc)`, interpretation: { en: "getQC calculates median Meth/Unmeth intensities, and plotQC visualizes them. Use it as a screen, not as the only exclusion criterion.", es: "getQC calcula medianas de intensidad Meth/Unmeth, y plotQC las visualiza. Úsalo como screening, no como único criterio de exclusión.", fa: "getQC median شدت Meth/Unmeth را حساب می‌کند و plotQC نشان می‌دهد. فقط برای screening استفاده کنید، نه تنها معیار حذف." }, report: { en: "A good-looking QC plot still needs confirmation with controls and detection p-values.", es: "Un QC plot bueno aún necesita confirmación con controles y detection p-values.", fa: "QC plot خوب همچنان نیاز به تأیید با control و detection p-value دارد." } },
  { title: { en: "13 · control probes", es: "13 · control probes", fa: "۱۳ · control probe" }, code: `df_TypeControl <- data.frame(getProbeInfo(RGset, type = "Control"))
table(df_TypeControl$Type)
controlStripPlot(RGset, controls="NEGATIVE")
controlStripPlot(RGset, controls="EXTENSION")`, interpretation: { en: "The control-probe table separates negative, extension, staining, bisulfite conversion and other controls. Negative controls are the most important for the later detection/background discussion.", es: "La tabla de control probes separa negative, extension, staining, bisulfite conversion y otros controles. Los negative controls son los más importantes para la discusión posterior de detección/background.", fa: "جدول control probe انواع negative، extension، staining، bisulfite conversion و غیره را جدا می‌کند. negative control برای بحث detection/background مهم‌تر است." }, report: { en: "Compare observed control profiles with the Illumina guide expected profiles.", es: "Compara perfiles observados con los perfiles esperados de la guía Illumina.", fa: "profile مشاهده‌شده را با profile مورد انتظار Illumina مقایسه کنید." } },
  { title: { en: "14 · detection p-values", es: "14 · detection p-values", fa: "۱۴ · detection p-value" }, code: `detP <- detectionP(RGset)
save(detP, file="detP.RData")
dim(detP)
head(detP)`, interpretation: { en: "detectionP compares total probe signal to a negative-control background model. Low p-values are good; high p-values mean the signal cannot be trusted.", es: "detectionP compara la señal total de la probe contra un modelo de background basado en negative controls. p-values bajos son buenos; p-values altos significan que la señal no es confiable.", fa: "detectionP سیگنال کل probe را با background مبتنی بر negative control مقایسه می‌کند. p-value پایین خوب است؛ p-value بالا یعنی سیگنال قابل اعتماد نیست." }, report: { en: "State the p-value threshold used and justify it.", es: "Indica el umbral de p-value usado y justifícalo.", fa: "threshold p-value را بگویید و توجیه کنید." } },
  { title: { en: "15 · sample filtering comes first", es: "15 · primero filtrar muestras", fa: "۱۵ · اول فیلتر sample" }, code: `failed <- detP > 0.05
colMeans(failed)
samples_to_be_retained <- colMeans(failed) < 0.05
RGset <- RGset[, samples_to_be_retained]`, interpretation: { en: "For a logical matrix, colMeans gives the fraction of TRUE values. Here TRUE means failed, so colMeans(failed) is the fraction of failed probes per sample.", es: "Para una matriz lógica, colMeans da la fracción de TRUE. Aquí TRUE significa failed, así que colMeans(failed) es la fracción de probes fallidas por muestra.", fa: "برای ماتریس logical، colMeans نسبت TRUE را می‌دهد. اینجا TRUE یعنی failed، پس colMeans(failed) نسبت probeهای failed در هر sample است." }, report: { en: "Filter samples before filtering probes.", es: "Filtra muestras antes de filtrar probes.", fa: "قبل از probe، sample را فیلتر کنید." } },
  { title: { en: "16 · save probe names for later filtering", es: "16 · guardar probes para filtrado posterior", fa: "۱۶ · ذخیره نام probe برای فیلتر بعدی" }, code: `probes_to_be_retained <- rowMeans(failed) < 0.01
probes_to_be_removed <- probes_to_be_retained[probes_to_be_retained == FALSE]
names_probes_to_be_removed <- names(probes_to_be_removed)
save(names_probes_to_be_removed, file="names_probes_to_be_removed.RData")`, interpretation: { en: "minfi does not conveniently remove individual probe rows at this raw RGSet stage. The practical solution is to save probe names and remove them later from normalized beta/M matrices.", es: "minfi no permite eliminar cómodamente filas de probes individuales en esta etapa cruda RGSet. La solución práctica es guardar nombres de probes y eliminarlas después de matrices beta/M normalizadas.", fa: "در مرحله خام RGSet، minfi حذف ردیف‌های probe را راحت نمی‌کند. راه عملی ذخیره نام probeها و حذف بعدی از ماتریس beta/M نرمال‌شده است." }, report: { en: "Record the exact rule: detP threshold and maximum failed-sample fraction.", es: "Registra la regla exacta: umbral detP y fracción máxima de muestras fallidas.", fa: "قاعده دقیق را ثبت کنید: آستانه detP و بیشینه fraction sampleهای failed." } }
];

function pick(value, lang) {
  if (typeof value === "string") return value;
  return value?.[lang] || value?.en || "";
}

function TopNav({ lang, isDone, toggle }) {
  const t = ui[lang] || ui.en;
  return <nav className="drd-nav"><a className="pill" href="#/lesson/m2-manifest">← {t.previous}: {t.previousTitle}</a><a className="pill center" href="#/">{t.current} · {t.dashboard}</a><button className="mark" onClick={toggle}>{isDone ? t.done : t.mark}</button><a className="pill next" href="#/lesson/m2-normalization-i">{t.next}: {t.nextTitle} →</a></nav>;
}

function ResourceButton({ href, children, variant = "light" }) {
  return <a className={`resource-btn ${variant}`} href={href} target="_blank" rel="noreferrer">{children} ↗</a>;
}

function Hero({ lang }) {
  const t = ui[lang] || ui.en;
  return <header className="hero-shell"><section className="hero-copy"><p className="eyebrow">{pick(copy.hero.eyebrow, lang)}</p><h1>{pick(copy.hero.title, lang)}</h1><p className="lead">{pick(copy.hero.subtitle, lang)}</p><div className="tags">{copy.hero.tags[lang].map((tag) => <span key={tag}>{tag}</span>)}</div></section><aside className="hero-panel"><div className="stat-grid">{copy.stats.map((s) => <div key={pick(s.label, lang)} className={`stat ${s.tone === "green" ? "green" : ""}`}><b>{pick(s.label, lang)}</b><strong>{s.value}</strong></div>)}</div><div className="big-idea"><b>Pipeline mindset</b><p>{pick(copy.hero.bigIdea, lang)}</p></div><div className="resources"><b>{t.resources}</b><div className="resource-row"><ResourceButton href={SLIDES_URL} variant="soft">{t.slides}</ResourceButton><ResourceButton href={CODE_URL}>{t.code}</ResourceButton><ResourceButton href={TRANSCRIPT_URL}>{t.transcript}</ResourceButton><ResourceButton href={RECORDING_URL} variant="dark">{t.recording}</ResourceButton></div></div></aside></header>;
}

function Section({ eyebrow, title, body, children }) {
  return <section className="section"><div className="section-head"><p>{eyebrow}</p><h2>{title}</h2>{body && <div className="section-body">{body}</div>}</div>{children}</section>;
}

function SlideGrid({ from, to, lang, onZoom }) {
  const t = ui[lang] || ui.en;
  const slides = [];
  for (let i = from; i <= to; i += 1) slides.push(i);
  return <div className="slide-grid">{slides.map((num, idx) => {
    const full = slides.length % 2 === 1 && idx === slides.length - 1;
    return <button className={`slide-card ${full ? "full" : ""}`} key={num} onClick={() => onZoom(num)}><span>{t.slide} {num}</span><img src={slideImages[num - 1]} alt={`${t.slide} ${num}`} /><small>{t.zoom}</small></button>;
  })}</div>;
}

function ReportWatch({ item, lang }) {
  const t = ui[lang] || ui.en;
  return <div className="report-watch"><p className="watch-label">{t.reportWatch}</p><h3>{pick(item.title, lang)}</h3><details open><summary>{t.openAnswer}</summary><div className="watch-grid"><div><b>{t.include}</b><ul>{item.include[lang].map((x) => <li key={x}>{x}</li>)}</ul></div><div className="trap"><b>{t.trap}</b><p>{pick(item.trap, lang)}</p></div><div className="model"><b>{t.model}</b><p>{pick(item.model, lang)}</p></div></div></details></div>;
}

function CodeStep({ step, lang, index }) {
  const t = ui[lang] || ui.en;
  return <article className="code-step"><div className="step-num">{String(index + 1).padStart(2, "0")}</div><div className="step-main"><h3>{pick(step.title, lang)}</h3><div className="code-label">{t.rcode}</div><pre><code>{step.code}</code></pre><div className="step-explain"><b>{t.interpretation}</b><p>{pick(step.interpretation, lang)}</p></div><div className="report-move"><b>{t.reportMove}</b><p>{pick(step.report, lang)}</p></div></div></article>;
}

function FlowLab({ lang }) {
  const t = ui[lang] || ui.en;
  const [selected, setSelected] = useState({});
  const items = [
    { q: { en: "stores raw red and green intensities by address", es: "guarda intensidades red/green por address", fa: "شدت red/green را بر اساس address ذخیره می‌کند" }, a: "RGChannelSet" },
    { q: { en: "stores Meth and Unmeth signals by CpG locus", es: "guarda señales Meth/Unmeth por locus CpG", fa: "سیگنال Meth/Unmeth را بر اساس CpG locus ذخیره می‌کند" }, a: "MethylSet" },
    { q: { en: "wrong-colour Type I signal useful for background", es: "señal Type I en color incorrecto útil para background", fa: "سیگنال Type I در رنگ اشتباه که برای background مفید است" }, a: "out-of-band" },
    { q: { en: "fraction of failed probes per sample", es: "fracción de probes fallidas por muestra", fa: "نسبت probeهای failed در هر sample" }, a: "colMeans(failed)" }
  ];
  return <div className="lab"><h3>{pick({en:"Object-flow checkpoint", es:"Checkpoint de flujo de objetos", fa:"checkpoint جریان object"}, lang)}</h3><p>{pick({en:"Choose the label that matches each statement.", es:"Elige la etiqueta que corresponde a cada frase.", fa:"برچسب مناسب هر جمله را انتخاب کنید."}, lang)}</p>{items.map((item, i) => <div className="choice-row" key={item.a}><b>{pick(item.q, lang)}</b><div>{["RGChannelSet", "MethylSet", "out-of-band", "colMeans(failed)"].map((option) => <button key={option} className={selected[i] === option ? (option === item.a ? "good" : "bad") : ""} onClick={() => setSelected({...selected, [i]: option})}>{option}</button>)}</div>{selected[i] && <small>{selected[i] === item.a ? t.correct : t.notQuite}</small>}</div>)}</div>;
}

function DetectionLab({ lang }) {
  const [threshold, setThreshold] = useState(0.05);
  const [sampleFail, setSampleFail] = useState(0.038);
  const [probeFail, setProbeFail] = useState(0.012);
  const sampleKeep = sampleFail < threshold;
  const probeKeep = probeFail < 0.01;
  return <div className="lab wide"><h3>{pick({en:"Detection p-value filtering lab", es:"Mini-lab de filtrado con detection p-value", fa:"مینی‌لب فیلتر با detection p-value"}, lang)}</h3><div className="mini-grid"><label>detP threshold<input type="number" step="0.01" value={threshold} onChange={(e)=>setThreshold(Number(e.target.value))}/></label><label>{pick({en:"sample failed fraction", es:"fracción fallida de muestra", fa:"fraction failed در sample"}, lang)}<input type="number" step="0.001" value={sampleFail} onChange={(e)=>setSampleFail(Number(e.target.value))}/></label><label>{pick({en:"probe failed fraction", es:"fracción fallida de probe", fa:"fraction failed در probe"}, lang)}<input type="number" step="0.001" value={probeFail} onChange={(e)=>setProbeFail(Number(e.target.value))}/></label></div><div className="decision-grid"><div className={sampleKeep ? "decision keep" : "decision remove"}><b>{pick({en:"Sample decision", es:"Decisión de muestra", fa:"تصمیم sample"}, lang)}</b><p>{sampleKeep ? pick({en:"Retain sample: failed fraction is below the selected sample threshold.", es:"Retener muestra: la fracción fallida está por debajo del umbral elegido.", fa:"sample را نگه دارید: fraction failed زیر threshold است."}, lang) : pick({en:"Remove sample: too many probes fail detection.", es:"Eliminar muestra: demasiadas probes fallan detección.", fa:"sample حذف شود: probeهای failed زیادند."}, lang)}</p></div><div className={probeKeep ? "decision keep" : "decision remove"}><b>{pick({en:"Probe-list decision", es:"Decisión para lista de probes", fa:"تصمیم لیست probe"}, lang)}</b><p>{probeKeep ? pick({en:"Keep probe under the professor's 1% example rule.", es:"Mantener probe bajo la regla ejemplo del 1% del profesor.", fa:"بر اساس قانون نمونه ۱٪ استاد، probe نگه داشته می‌شود."}, lang) : pick({en:"Save this probe name for removal after normalization.", es:"Guardar el nombre de esta probe para eliminarla tras normalización.", fa:"نام probe را برای حذف بعد از normalization ذخیره کنید."}, lang)}</p></div></div></div>;
}

function ReportTrainer({ lang }) {
  const t = ui[lang] || ui.en;
  const [text, setText] = useState("");
  const words = useMemo(() => text.trim() ? text.trim().split(/\s+/).length : 0, [text]);
  const model = pick({
    en: "Raw IDAT files were imported with minfi after validating the sample sheet and basename construction. The data were first represented as an RGChannelSet, where red and green intensities are stored by probe address, allowing out-of-band Type I signals to be inspected as background-related information. preprocessRaw converted the object into a MethylSet, reorganizing signals into methylated and unmethylated channels by CpG probe ID. Quality was assessed using QC plots, control-strip plots and detection p-values. Samples were filtered before probes using the fraction of failed probes, and probe IDs failing the selected detection threshold were saved for later removal from normalized methylation matrices.",
    es: "Los archivos IDAT crudos se importaron con minfi después de validar la sample sheet y la construcción del basename. Los datos se representaron primero como RGChannelSet, donde las intensidades red y green se guardan por probe address, permitiendo inspeccionar señales Type I out-of-band como información relacionada con background. preprocessRaw convirtió el objeto en MethylSet, reorganizando las señales en canales methylated y unmethylated por ID de probe CpG. La calidad se evaluó con QC plots, control-strip plots y detection p-values. Las muestras se filtraron antes que las probes usando la fracción de probes fallidas, y los IDs de probes que fallaban el umbral elegido se guardaron para eliminarlos después de las matrices de metilación normalizadas.",
    fa: "فایل‌های خام IDAT پس از بررسی sample sheet و basename با minfi وارد شدند. داده ابتدا به صورت RGChannelSet نمایش داده شد، جایی که شدت‌های red و green بر اساس probe address ذخیره می‌شوند و امکان بررسی سیگنال‌های Type I out-of-band به عنوان اطلاعات background وجود دارد. preprocessRaw object را به MethylSet تبدیل کرد و سیگنال‌ها را به کانال‌های methylated و unmethylated بر اساس CpG probe ID بازآرایی کرد. کیفیت با QC plot، control-strip plot و detection p-value بررسی شد. sampleها قبل از probeها بر اساس fraction probeهای failed فیلتر شدند و ID probeهایی که threshold را رد نکردند برای حذف بعدی از ماتریس‌های نرمال‌شده ذخیره شدند."
  }, lang);
  return <section className="trainer"><h2>{t.trainer}</h2><p>{pick({en:"Practice the paragraph you could use in the Module 2 report.", es:"Practica el párrafo que podrías usar en el report del Módulo 2.", fa:"پاراگرافی را تمرین کنید که می‌توانید در گزارش ماژول ۲ استفاده کنید."}, lang)}</p><textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder={t.placeholder}/><div className="word-count">{words} {t.words}</div><details><summary>{t.openAnswer}</summary><div className="model-answer">{model}</div></details></section>;
}

function ZoomModal({ slide, lang, onClose }) {
  if (!slide) return null;
  const t = ui[lang] || ui.en;
  return <div className="zoom-backdrop" onClick={onClose}><div className="zoom-card" onClick={(e)=>e.stopPropagation()}><button onClick={onClose}>{t.close}</button><img src={slideImages[slide - 1]} alt={`${t.slide} ${slide}`} /></div></div>;
}

export default function DRDLesson09({ lang = "en", isDone = false, toggle = () => {} }) {
  const rtl = lang === "fa";
  const [zoom, setZoom] = useState(null);
  const t = ui[lang] || ui.en;
  return <main className="drd-m2 m23" dir={rtl ? "rtl" : "ltr"}>
    <style>{styles}</style>
    <TopNav lang={lang} isDone={isDone} toggle={toggle} />
    <Hero lang={lang} />

    <Section eyebrow="01 · PDF slides" title={pick({en:"Real source slides, in lesson order", es:"Diapositivas fuente reales, en orden de clase", fa:"اسلایدهای واقعی منبع، به ترتیب درس"}, lang)} body={pick({en:"The slide cards below are extracted directly from the PDF and placed in the same conceptual sequence used in class.", es:"Las tarjetas siguientes están extraídas directamente del PDF y colocadas en la misma secuencia conceptual de la clase.", fa:"کارت‌های زیر مستقیماً از PDF استخراج شده‌اند و طبق همان توالی مفهومی کلاس قرار گرفته‌اند."}, lang)}>
      {slideNotes.map((note, idx) => <div className="flow-block" key={note.range}><div className="flow-copy"><p className="range">{note.range}</p><h3>{pick(note.title, lang)}</h3><p>{pick(note.body, lang)}</p></div><SlideGrid from={idx === 0 ? 1 : idx === 1 ? 7 : idx === 2 ? 14 : 22} to={idx === 0 ? 6 : idx === 1 ? 13 : idx === 2 ? 21 : 32} lang={lang} onZoom={setZoom}/></div>)}
    </Section>

    <Section eyebrow="02 · report emphasis" title={pick({en:"Professor emphasis converted into report-ready checks", es:"Énfasis del profesor convertido en checks listos para report", fa:"تأکید استاد به شکل check آماده گزارش"}, lang)}>
      <div className="watch-stack">{reportWatches.map((item) => <ReportWatch key={pick(item.title, 'en')} item={item} lang={lang} />)}</div>
    </Section>

    <Section eyebrow="03 · mini-labs" title={pick({en:"Interactive checkpoints", es:"Checkpoints interactivos", fa:"checkpointهای تعاملی"}, lang)}>
      <div className="two-col"><FlowLab lang={lang}/><DetectionLab lang={lang}/></div>
    </Section>

    <Section eyebrow="04 · HTML walkthrough" title={pick({en:"Expanded R code walkthrough", es:"Walkthrough expandido del código R", fa:"walkthrough گسترده کد R"}, lang)} body={pick({en:"This is intentionally not hidden in one cell. Every HTML chunk is unfolded into a vertical step: what the code does, why it matters, and how to phrase it in the report.", es:"Esto está intencionalmente desplegado, no escondido en una celda. Cada chunk del HTML queda como paso vertical: qué hace el código, por qué importa y cómo llevarlo al report.", fa:"این بخش عمداً در یک سلول پنهان نشده است. هر chunk HTML به صورت گام عمودی باز شده: کد چه می‌کند، چرا مهم است و چگونه در گزارش بیان شود."}, lang)}>
      <div className="code-stack">{codeSteps.map((step, i) => <CodeStep key={pick(step.title, 'en')} step={step} lang={lang} index={i}/>)}</div>
    </Section>

    <ReportTrainer lang={lang}/>
    <TopNav lang={lang} isDone={isDone} toggle={toggle} />
    <ZoomModal slide={zoom} lang={lang} onClose={() => setZoom(null)} />
  </main>;
}

const styles = `
.drd-m2{--green:#0d9f6e;--green-soft:#ecfff6;--paper:#f6efe4;--ink:#070707;--muted:#555;--line:#e2ded6;--card:#fff;background:var(--paper);color:var(--ink);min-height:100vh;padding:28px 36px 56px;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.drd-nav{max-width:1180px;margin:0 auto 24px;background:white;border:1px solid var(--line);border-radius:28px;padding:12px;display:grid;grid-template-columns:1.3fr 1fr auto 1.3fr;gap:10px;align-items:center;box-shadow:0 8px 24px rgba(0,0,0,.06)}.pill,.mark{border:1px solid var(--line);border-radius:999px;padding:10px 16px;text-decoration:none;color:#333;background:#fff;font-weight:800;white-space:nowrap}.pill.center{text-align:center;letter-spacing:.18em;text-transform:uppercase;color:#777}.pill.next{text-align:right;background:#070707;color:#fff}.mark{background:#070707;color:#fff;cursor:pointer}.hero-shell{max-width:1180px;margin:0 auto 34px;border:1px solid var(--line);border-radius:36px;overflow:hidden;background:#fff;display:grid;grid-template-columns:1.08fr .92fr;box-shadow:0 14px 36px rgba(0,0,0,.06)}.hero-copy{background:var(--green-soft);padding:48px}.eyebrow{display:inline-flex;border:1px solid #75e0b7;border-radius:999px;padding:8px 14px;color:#007b54;font-weight:900;letter-spacing:.16em;text-transform:uppercase;font-size:12px}.hero-copy h1{font-size:clamp(48px,7vw,76px);line-height:.95;margin:24px 0 24px;letter-spacing:-.07em}.lead{font-size:19px;line-height:1.65;color:#444;max-width:720px}.tags{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.tags span{background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 12px;font-size:12px;text-transform:uppercase;font-weight:900;letter-spacing:.12em}.hero-panel{padding:36px 30px;background:#fff}.stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.stat{border:1px solid var(--line);border-radius:16px;padding:16px}.stat.green{background:#ecfff6;border-color:#86e7c0}.stat b{display:block;text-transform:uppercase;letter-spacing:.14em;color:#777;font-size:12px}.stat strong{display:block;font-size:26px;margin-top:8px}.big-idea{margin-top:18px;background:#070707;color:#fff;border-radius:22px;padding:22px}.big-idea b{color:#a7f6d3;text-transform:uppercase;letter-spacing:.16em;font-size:12px}.big-idea p{font-size:19px;line-height:1.45;font-weight:900}.resources{margin-top:18px;border:1px solid var(--line);border-radius:22px;padding:16px}.resources>b{text-transform:uppercase;letter-spacing:.16em;color:#777;font-size:12px}.resource-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px}.resource-btn{text-align:center;border:1px solid var(--line);border-radius:16px;padding:12px 10px;text-decoration:none;color:#111;font-weight:900;background:white}.resource-btn.soft{background:#eafff5;color:#00885d;border-color:#82e4bc}.resource-btn.dark{background:#070707;color:#fff}.section,.trainer{max-width:1180px;margin:0 auto 28px;background:rgba(255,255,255,.74);border:1px solid var(--line);border-radius:28px;padding:30px}.section-head>p{letter-spacing:.18em;text-transform:uppercase;font-size:12px;color:#00885d;font-weight:900}.section h2,.trainer h2{font-size:36px;letter-spacing:-.04em;margin:0 0 12px}.section-body{font-size:18px;line-height:1.65;color:#444;max-width:900px}.flow-block{border-top:1px solid var(--line);padding-top:26px;margin-top:24px}.flow-copy{max-width:900px;margin-bottom:18px}.flow-copy .range{display:inline-flex;background:#070707;color:#fff;border-radius:999px;padding:5px 12px;font-weight:900}.flow-copy h3{font-size:26px;margin:12px 0 8px}.flow-copy p{color:#444;line-height:1.6}.slide-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.slide-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:12px;cursor:zoom-in;text-align:left;box-shadow:0 8px 20px rgba(0,0,0,.04)}.slide-card.full{grid-column:1/-1}.slide-card span{display:inline-flex;border:1px solid #86e7c0;color:#00885d;border-radius:999px;padding:4px 8px;font-size:12px;font-weight:900;margin-bottom:10px}.slide-card img{width:100%;border-radius:14px;border:1px solid #eee;background:white}.slide-card small{display:block;color:#777;margin-top:8px}.watch-stack{display:grid;gap:18px}.report-watch{border:1px solid #b6ebd0;background:#f2fff8;border-radius:24px;padding:24px}.watch-label{margin:0 0 8px;text-transform:uppercase;color:#00885d;font-weight:900;letter-spacing:.16em;font-size:12px}.report-watch h3{font-size:22px;margin:0 0 16px}.report-watch summary{font-weight:900;cursor:pointer}.watch-grid{display:grid;grid-template-columns:1fr;gap:14px;margin-top:14px}.watch-grid ul{margin:8px 0 0;padding-left:22px}.watch-grid li{margin:8px 0;line-height:1.5}.trap,.model{background:white;border:1px solid var(--line);border-radius:18px;padding:16px}.trap{background:#fff9df;border-color:#f1d47a}.two-col{display:grid;grid-template-columns:1fr 1fr;gap:18px}.lab{background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px}.lab.wide{min-width:0}.lab h3{font-size:24px;margin:0 0 8px}.choice-row{border:1px solid var(--line);border-radius:18px;padding:14px;margin-top:12px}.choice-row b{display:block;margin-bottom:10px}.choice-row button{border:1px solid var(--line);background:white;border-radius:999px;padding:8px 10px;margin:4px;font-weight:800}.choice-row button.good{background:#eafff5;border-color:#0d9f6e;color:#007b54}.choice-row button.bad{background:#fff0f0;border-color:#ff9c9c;color:#b30000}.mini-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.mini-grid label{font-weight:900;color:#444}.mini-grid input{width:100%;margin-top:6px;border:1px solid var(--line);border-radius:14px;padding:10px}.decision-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}.decision{border-radius:18px;padding:16px;border:1px solid var(--line)}.decision.keep{background:#effff7;border-color:#8ee2bd}.decision.remove{background:#fff0f0;border-color:#f3aaaa}.code-stack{display:grid;gap:18px}.code-step{display:grid;grid-template-columns:70px 1fr;gap:18px;background:#fff;border:1px solid var(--line);border-radius:24px;padding:20px}.step-num{background:#070707;color:#fff;border-radius:18px;height:58px;display:grid;place-items:center;font-weight:900}.step-main h3{font-size:24px;margin:0 0 10px}.code-label{text-transform:uppercase;letter-spacing:.14em;font-size:12px;font-weight:900;color:#00885d;margin-bottom:6px}.code-step pre{background:#111;color:#f6f6f6;border-radius:18px;padding:16px;overflow:auto;line-height:1.5}.code-step code{font-family:"SFMono-Regular",Consolas,monospace;font-size:13px}.step-explain,.report-move{border:1px solid var(--line);border-radius:18px;padding:14px;margin-top:10px;background:#fbfbfb}.report-move{background:#f2fff8;border-color:#b6ebd0}.trainer textarea{width:100%;min-height:170px;border:1px solid var(--line);border-radius:20px;padding:18px;font-size:16px;line-height:1.5}.word-count{margin:10px 0;color:#777;font-weight:800}.model-answer{background:#fff;border:1px solid var(--line);border-radius:18px;padding:16px;margin-top:12px;line-height:1.65}.zoom-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.82);display:grid;place-items:center;z-index:50;padding:24px}.zoom-card{max-width:1100px;width:95vw;max-height:92vh;background:white;border-radius:24px;padding:16px;overflow:auto}.zoom-card button{float:right;border:0;background:#070707;color:#fff;border-radius:999px;padding:10px 14px;font-weight:900}.zoom-card img{width:100%;margin-top:14px;border-radius:14px}@media(max-width:900px){.drd-m2{padding:18px}.drd-nav,.hero-shell,.two-col{grid-template-columns:1fr}.hero-copy{padding:34px 26px}.resource-row,.stat-grid,.mini-grid,.decision-grid,.slide-grid{grid-template-columns:1fr}.slide-card.full{grid-column:auto}.code-step{grid-template-columns:1fr}.hero-copy h1{font-size:44px}.pill.next{text-align:left}}
`;
