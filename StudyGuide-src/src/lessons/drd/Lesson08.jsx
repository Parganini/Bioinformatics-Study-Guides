import React, { useState } from "react";
import dnaMethylation from "../../assets/drd/lesson08/01-dna-methylation.png";
import cpgContext from "../../assets/drd/lesson08/02-cpg-context.png";
import arrayFamily from "../../assets/drd/lesson08/03-array-family.png";
import bisulfiteLogic from "../../assets/drd/lesson08/04-bisulfite.png";
import infiniumChemistry from "../../assets/drd/lesson08/05-infinium-i-ii.png";
import manifestVisual from "../../assets/drd/lesson08/06-manifest.png";
import rImportVisual from "../../assets/drd/lesson08/07-r-import.png";
import filterPlotVisual from "../../assets/drd/lesson08/08-filter-plot.png";

const SLIDES_URL = "https://drive.google.com/file/d/1sN2mGi86239wfQ8w8K-PYtKeF4pWQXAR/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1StKS_UrrCBaIIvwsyz-vhmfrFQoxWy5HiAo8JFN3kHs/edit?usp=drivesdk";
const CLASS_RECORDING_URL = "https://www.youtube.com/watch?v=prqxPH0DZ_s&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=6";

const IMG = {
  dnaMethylation: { src: dnaMethylation, slide: 1 },
  cpgContext: { src: cpgContext, slide: 2 },
  arrayFamily: { src: arrayFamily, slide: 5 },
  bisulfiteLogic: { src: bisulfiteLogic, slide: 8 },
  infiniumChemistry: { src: infiniumChemistry, slide: 9 },
  manifestVisual: { src: manifestVisual, slide: 17 },
  rImportVisual: { src: rImportVisual, slide: "R HTML" },
  filterPlotVisual: { src: filterPlotVisual, slide: "R HTML" }
};

const COPY = {
  en: {
    mark: "Mark completed",
    done: "Completed",
    dashboard: "DRD dashboard",
    previous: "Previous",
    next: "Next",
    current: "M2.2",
    previousTitle: "M2.1 R/Bioconductor intro",
    nextTitle: "M2.3 Data import + QC",
    heroEyebrow: "Module 2 · May 13/14 · DNA methylation + manifest practice",
    heroTitle: "From methylation chemistry to manifest-file thinking",
    heroSubtitle: "A practical Module 2 lesson connecting Infinium chemistry, probe annotation and R exploration of the Illumina 450K manifest.",
    flow: ["beta values", "CpG context", "bisulfite", "Infinium I/II", "manifest", "R code"],
    resources: "Class resources",
    slides: "Slides",
    transcript: "Transcript",
    recording: "Recording",
    open: "Open",
    zoom: "Click to zoom",
    close: "Close zoom",
    visualLabel: "Source slide",
    professor: "Professor emphasis",
    exam: "Report watch",
    examMore: "Open expanded answer",
    include: "What to include",
    trap: "Common trap",
    model: "Sample report phrasing",
    check: "Checkpoint",
    selected: "Selected",
    tryAgain: "Not quite — use the lecture logic.",
    correct: "Correct — that is the key point.",
    quizTitle: "Quick checkpoint quiz",
    writtenTitle: "Report paragraph trainer",
    answerPlaceholder: "Write a report-style explanation here...",
    words: "words",
    modelAnswer: "Model answer",
    showAnswer: "Show answer",
    hideAnswer: "Hide answer",
    tapReveal: "Tap to reveal",
    code: "R code",
    result: "Expected interpretation",
    importLabTitle: "Manifest import walkthrough",
    importLabIntro: "Follow the same debugging sequence used in the R HTML: first import a small piece, inspect the failure, then use skip=7 and load the real rectangular table.",
    cleaningTitle: "Cleaning and probe-type sorter",
    contextTitle: "CpG context explorer",
    chemistryTitle: "Infinium I/II chemistry sorter",
    probeTitle: "Probe inspector",
    barplotTitle: "Barplot and factor-order lab",
    quizIntro: "Use these as quick active-recall checks before moving to pipeline 1.",
    writtenPrompt: "Prompt: Explain how the theoretical chemistry of Infinium arrays connects to the practical R manifest exploration.",
    writtenModel: "The lesson connects methylation biology to computational annotation. At the molecular level, cytosine methylation is read indirectly: after bisulfite conversion, unmethylated cytosines become U/T while methylated cytosines remain C. Illumina Infinium arrays use probe chemistry to interrogate known CpG loci. Infinium I uses two bead types and two probes for methylated and unmethylated versions, while Infinium II uses one bead type and a two-colour single-base extension readout. In R, the manifest translates that chemistry into columns such as IlmnID, AddressA_ID, AddressB_ID, Infinium_Design_Type, CHR, MAPINFO, UCSC_RefGene_Name and Relation_to_UCSC_CpG_Island. The practical code imports the manifest carefully, skips non-table header lines, removes probes without chromosome mapping, drops unused factor levels, summarizes CpG contexts and compares Infinium I/II distributions. This makes the downstream methylation report biologically interpretable and computationally reproducible.",
    sections: [
      {
        eyebrow: "1 · What is the measured variable?",
        title: "Methylation is binary per molecule, but continuous in a sample",
        body: "The PDF starts from the chemistry of cytosine methylation and the idea of fully methylated or hemimethylated CpG DNA. The important data-analysis translation is that a single DNA molecule can be methylated or unmethylated, but an extracted tissue sample contains a population of DNA molecules. Therefore a reported methylation value is an average fraction.",
        professor: "The practical point is scale: do not interpret an intermediate beta value as a half-methylated molecule. It reflects a mixed population of molecules, alleles and cells.",
        exam: {
          title: "Report question: what does beta mean biologically?",
          include: ["Define beta as an aggregate methylation fraction at a CpG locus.", "Explain that 0%, 25%, 50% and 100% represent different proportions of methylated molecules in the sample.", "Mention that biological heterogeneity, cell mixture and allele-specific methylation can all contribute to intermediate values."],
          trap: "Do not describe beta as a direct single-molecule genotype. It is a signal summarized from many DNA molecules.",
          model: "A beta value represents the fraction of DNA molecules methylated at a CpG locus in the analyzed sample. At single-molecule level, a CpG is methylated or unmethylated. In bulk tissue, however, the DNA extract is a mixture of cells and alleles, so intermediate beta values reflect the population average of methylated molecules."
        },
        slides: [
          { key: "dnaMethylation", title: "5-methylcytosine and hemimethylated DNA", body: "Methyltransferases add CH3 to cytosine. The slide also reminds you that methylation can be present on both strands or only one strand after replication." },
          { key: "cpgContext", title: "CpG island vocabulary", body: "Islands, shores, shelves and open sea become manifest annotations later. The analysis is not only CpG-by-CpG: genomic context matters." }
        ]
      },
      {
        eyebrow: "2 · Array family and bisulfite logic",
        title: "The assay turns methylation into a C-versus-T readout",
        body: "27K, 450K, EPIC and EPIC v2 are generations of the HumanMethylation family with increasing CpG coverage. The chemical trick is bisulfite conversion: unmethylated C becomes U and then T after PCR, while methylated C remains C. The array does not simply ‘see’ a methyl group; it reads the sequence consequence of bisulfite treatment.",
        professor: "450K is still useful pedagogically because the manifest is manageable, the platform is well documented and many public data sets use it. EPIC and EPIC v2 extend the same logic to broader regulatory content.",
        exam: {
          title: "Report watch: platform and bisulfite conversion",
          include: ["Compare 27K, 450K, EPIC and EPIC v2 by probe coverage.", "State that 450K interrogates more than 485,000 methylation sites per sample.", "Explain that bisulfite conversion preserves methylation information as a C/T difference."],
          trap: "Do not say methylation information survives PCR as a visible methyl group. The methyl group itself is not directly read after PCR; the C/T sequence consequence is read.",
          model: "Illumina methylation arrays measure methylation indirectly. Sodium bisulfite converts unmethylated cytosines into uracil, later read as thymine, whereas methylated cytosines remain cytosine. The platform then interrogates known loci using probes designed around this C/T difference. The 450K array is a useful training platform because it covers more than 485,000 loci while remaining interpretable through its manifest file."
        },
        slides: [
          { key: "arrayFamily", title: "27K → 450K → EPIC → EPIC v2", body: "The slide gives the release years and probe counts: the family expands from 27,578 probes to 937,691 probes in EPIC v2." },
          { key: "bisulfiteLogic", title: "Sample preparation and single-base extension", body: "Bisulfite conversion, amplification, fragmentation, hybridization and single-base extension connect wet-lab chemistry to red/green signals." }
        ]
      },
      {
        eyebrow: "3 · Infinium chemistry",
        title: "Infinium I and Infinium II differ in bead design, probe logic and colour meaning",
        body: "Infinium I uses two bead types and two probes for the same CpG locus: one for the unmethylated version and one for the methylated version. Infinium II uses one bead type and one probe; methylated and unmethylated states are distinguished by two-colour single-base extension. This is why the manifest has columns such as AddressA_ID, AddressB_ID, Next_Base, Color_Channel and Infinium_Design_Type.",
        professor: "A key confusion to avoid: the 450K chip contains both Infinium I and Infinium II probes. The whole array is not only type I or only type II; each probe row has its own design type.",
        exam: {
          title: "Report watch: compare Infinium I and II",
          include: ["Infinium I: 1 IlmnID, 2 bead types, 2 probes, one colour channel logic.", "Infinium II: 1 IlmnID, 1 bead type, 1 probe, two-colour readout.", "Mention that Type I assumes regional correlation within the 50 bp probe span, while Type II uses degenerate R-bases to handle underlying CpGs."],
          trap: "Do not equate red/green meaning across all probe types. In Type I the methylated and unmethylated signals come from different bead addresses; in Type II they are read from one bead type through different colours.",
          model: "Infinium I and Infinium II are two probe chemistries present on the same methylation array. Infinium I uses two bead types and two probes for a CpG: one targets the methylated sequence and the other the unmethylated sequence. Infinium II uses a single bead type and one probe, then distinguishes methylation status by the colour of the incorporated base during single-base extension. Therefore the manifest must be interpreted at probe level, not only at array level."
        },
        slides: [
          { key: "infiniumChemistry", title: "Type I versus Type II in one slide", body: "This is the central design comparison: two bead types/one-colour logic versus one bead type/two-colour logic." }
        ]
      },
      {
        eyebrow: "4 · Probe examples and annotation",
        title: "The manifest turns chemistry into rows and columns",
        body: "The PDF shows sequence examples for an Infinium I probe and an Infinium II probe. For Type I, cg00050873 has AddressA against unmethylated DNA and AddressB against methylated DNA. For Type II, cg00063477 has one address and a probe that is independent of the methylation status until the single-base extension step. Then the lesson moves to annotation: probe sequence is fixed for a design, but genomic annotation can change between sources and genome builds.",
        professor: "He stresses that meaningful genomic analysis depends on annotation. The same probe sequence can be interpreted differently if annotation sources or genome builds change, so a report must state the manifest/annotation used.",
        exam: {
          title: "Report watch: design versus annotation",
          include: ["Distinguish fixed probe design from annotation that can change.", "Name useful manifest columns: IlmnID, CHR, MAPINFO, Infinium_Design_Type, UCSC_RefGene_Name and Relation_to_UCSC_CpG_Island.", "Mention that control, SNP and CpG probes should not all be interpreted in the same way."],
          trap: "Do not assume every row is a CpG methylation probe. The manifest also includes SNP and control rows.",
          model: "The manifest is the bridge between array chemistry and biological interpretation. Probe design information defines how a locus is measured, whereas annotation links the probe to chromosome, coordinate, gene context and CpG island context. Because annotation can change between sources or genome builds, the report should state which manifest or annotation package was used."
        },
        slides: [
          { key: "manifestVisual", title: "Manifest logic", body: "The PDF states that the 450K manifest has 486,428 rows and 33 columns, including CpG probes, SNP probes, control probes and a [Controls] line." }
        ]
      },
      {
        eyebrow: "5 · R HTML practical",
        title: "The R code teaches defensive manifest import and exploration",
        body: "The HTML begins by trying to read only the first 20 rows. The first attempt fails because the file has non-rectangular heading lines. The fix is to inspect with readLines(), then import with skip=7. After loading the full manifest, the script uses dim(), head(), str(), table(), subsetting and droplevels() to understand and clean the object.",
        professor: "The workflow matters more than memorizing every number: import carefully, inspect structure, identify non-genomic/control rows, clean factors, then summarize biology-relevant columns.",
        exam: {
          title: "Report watch: explain the code, not only the output",
          include: ["Explain why nrows=20 is used before loading the whole file.", "Explain why skip=7 fixes the import error.", "Explain why CHR == '' identifies rows not mapped to chromosomes and why droplevels() is needed after filtering."],
          trap: "Do not paste R code without interpretation. The report should state what each step checks or changes in the data object.",
          model: "The manifest is first imported in a small test using nrows=20 to avoid loading a large file before confirming its structure. The initial read.table call fails because the first seven lines are metadata rather than the table itself, so readLines() is used to inspect the file and skip=7 is added. After import, dim(), head() and str() verify dimensions and column types. Rows with empty CHR are separated because they include SNP and control probes that should not be interpreted as mapped genomic CpGs. After filtering, droplevels() removes unused factor levels so later tables and plots describe only the cleaned data."
        },
        slides: [
          { key: "rImportVisual", title: "Import, debug, then import correctly", body: "The HTML demonstrates a useful habit: fail on a small subset, inspect the file, then correct the import options." },
          { key: "filterPlotVisual", title: "Clean, tabulate and plot", body: "The practical flow ends with CpG-context tables, Infinium-design tables, chromosome barplots and factor-level reordering." }
        ]
      }
    ],
    importSteps: [
      { id: "fail", label: "1 · controlled failure", code: "Illumina450Manifest <- read.table('HumanMethylation450_15017482_v1-2.csv', sep=',', header=TRUE, nrows=20)", result: "The file does not import cleanly because the first lines are heading/metadata lines rather than the rectangular table." },
      { id: "peek", label: "2 · inspect file", code: "readLines('HumanMethylation450_15017482_v1-2.csv', n=20)", result: "readLines() reveals that the actual spreadsheet starts after the first seven lines." },
      { id: "skip", label: "3 · skip header", code: "Illumina450Manifest <- read.csv('HumanMethylation450_15017482_v1-2.csv', header=TRUE, skip=7, stringsAsFactors=TRUE)\ndim(Illumina450Manifest)", result: "skip=7 makes R read the real 33-column manifest table instead of the descriptive header." },
      { id: "save", label: "4 · save/load", code: "save(Illumina450Manifest, file='Illumina450Manifest.RData')\nload('Illumina450Manifest.RData')\nls()", result: "save() stores the object with its current name; load() restores that same object name in the workspace." }
    ],
    cleaningItems: [
      { q: "CHR == ''", a: "unmapped/control/SNP rows", why: "Rows without chromosome coordinates should not be treated as mapped CpG probes." },
      { q: "IlmnID starts with rs", a: "SNP tracking probes", why: "The HTML notes 65 rs probes used for sample tracking / mix-up checks, not methylation measurement." },
      { q: "numeric probe name", a: "control probe", why: "Control probes monitor technical assay behaviour and are handled separately." },
      { q: "After subsetting a factor", a: "droplevels()", why: "R keeps unused factor levels unless they are explicitly dropped." }
    ],
    cleaningOptions: ["unmapped/control/SNP rows", "SNP tracking probes", "control probe", "droplevels()"],
    contexts: [
      ["Open sea / blank field", "176,047", "Outside island, shore and shelf annotation in the cleaned 450K manifest."],
      ["Island", "150,254", "CpG-rich island probes."],
      ["North shore", "62,870", "0–2 kb upstream/north of a CpG island."],
      ["South shore", "49,197", "0–2 kb downstream/south of a CpG island."],
      ["North shelf", "24,844", "2–4 kb upstream/north of a CpG island."],
      ["South shelf", "22,300", "2–4 kb downstream/south of a CpG island."]
    ],
    chemistryItems: [
      { q: "1 IlmnID, 2 bead types, AddressA + AddressB", a: "Infinium I", why: "Two bead addresses correspond to methylated and unmethylated probe versions." },
      { q: "1 IlmnID, 1 bead type, two-colour readout", a: "Infinium II", why: "The methylation state is resolved by single-base extension colour." },
      { q: "350,036 probes in the cleaned 450K manifest", a: "Infinium II", why: "The HTML table reports 350,036 Type II probes." },
      { q: "135,476 probes in the cleaned 450K manifest", a: "Infinium I", why: "The HTML table reports 135,476 Type I probes." }
    ],
    chemistryOptions: ["Infinium I", "Infinium II"],
    probeExamples: {
      typeI: { title: "Infinium I example: cg00050873", code: "IlmnID cg00050873\nAddressA_ID 32735311 → unmethylated probe\nAddressB_ID 31717405 → methylated probe\nInfinium_Design_Type = I\nSingle-base extension: A/T/C/G", result: "Two addresses and two probe sequences mean the methylated and unmethylated signals are measured on different bead types." },
      typeII: { title: "Infinium II example: cg00063477", code: "IlmnID cg00063477\nAddress 16712347\nOne probe independent of methylation status\nDegenerate R-base handles underlying CpG positions\nSingle-base extension distinguishes C versus T", result: "One address and one probe mean the locus is read by colour after extension, not by two separate bead types." }
    },
    barplotSteps: [
      { id: "chr", label: "chromosome counts", code: "counts <- table(Illumina450Manifest_clean$CHR)\nbarplot(counts)", result: "First check how probes are distributed across chromosomes." },
      { id: "order", label: "fix chromosome order", code: "Illumina450Manifest_clean$CHR <- factor(Illumina450Manifest_clean$CHR,\n  levels=c(as.character(1:22),'X','Y'))\nbarplot(table(Illumina450Manifest_clean$CHR))", result: "R orders factors alphabetically by default; explicit levels restore biological chromosome order." },
      { id: "type", label: "type by chromosome", code: "barplot(table(Illumina450Manifest_clean$Infinium_Design_Type,\n              Illumina450Manifest_clean$CHR), beside=TRUE, legend=levels(Illumina450Manifest_clean$Infinium_Design_Type))", result: "beside=TRUE compares Type I and Type II counts side-by-side for each chromosome." },
      { id: "ratio", label: "I/II ratio", code: "df_table <- data.frame(table(Illumina450Manifest_clean$Infinium_Design_Type, Illumina450Manifest_clean$CHR))\nratio_I_II <- df_table_I$Freq / df_table_II$Freq\nnames(ratio_I_II) <- levels(df_table_I$Var2)\nbarplot(ratio_I_II)", result: "The supplementary code asks whether the Type I/II ratio is constant across chromosomes. It is not exactly constant." }
    ],
    quiz: [
      { q: "Why did the first read.table() call fail?", a: "Because the file begins with seven non-table header lines, so line 7 did not match the expected number of table columns." },
      { q: "What does CHR == '' identify in the manifest?", a: "Rows that do not map to a chromosome, including SNP tracking probes and control probes." },
      { q: "Why does droplevels() appear repeatedly?", a: "After subsetting a factor, R keeps unused levels. droplevels() removes levels that are no longer present in the filtered data frame." },
      { q: "Why is Relation_to_UCSC_CpG_Island useful?", a: "It links each probe to CpG island, shore, shelf or open-sea context, which affects biological interpretation." },
      { q: "What is the key difference between design and annotation?", a: "Design describes the fixed probe/array chemistry; annotation links probes to genomic features and can change with source or genome build." }
    ]
  },
  es: {
    mark: "Marcar completada",
    done: "Completada",
    dashboard: "DRD dashboard",
    previous: "Anterior",
    next: "Siguiente",
    current: "M2.2",
    previousTitle: "M2.1 Intro R/Bioconductor",
    nextTitle: "M2.3 Importación + QC",
    heroEyebrow: "Módulo 2 · 13/14 mayo · Metilación + práctica de manifest",
    heroTitle: "De la química de metilación al razonamiento con manifest files",
    heroSubtitle: "Una lección práctica del Módulo 2 que conecta química Infinium, anotación de probes y exploración en R del manifest Illumina 450K.",
    flow: ["beta values", "contexto CpG", "bisulfito", "Infinium I/II", "manifest", "código R"],
    resources: "Recursos de clase",
    slides: "Slides",
    transcript: "Transcripción",
    recording: "Recording",
    open: "Abrir",
    zoom: "Click para ampliar",
    close: "Cerrar zoom",
    visualLabel: "Diapositiva fuente",
    professor: "Énfasis del profesor",
    exam: "Ojo para report",
    examMore: "Abrir respuesta desarrollada",
    include: "Qué incluir",
    trap: "Trampa común",
    model: "Frase modelo para el report",
    check: "Checkpoint",
    selected: "Seleccionaste",
    tryAgain: "Casi — usa la lógica de la clase.",
    correct: "Correcto — ese es el punto clave.",
    quizTitle: "Quiz rápido de checkpoint",
    writtenTitle: "Entrenador de párrafo de report",
    answerPlaceholder: "Escribe aquí una explicación estilo report...",
    words: "palabras",
    modelAnswer: "Respuesta modelo",
    showAnswer: "Mostrar respuesta",
    hideAnswer: "Ocultar respuesta",
    tapReveal: "Click para revelar",
    code: "Código R",
    result: "Interpretación esperada",
    importLabTitle: "Walkthrough de importación del manifest",
    importLabIntro: "Sigue la misma secuencia de depuración del HTML de R: primero importa una parte pequeña, mira el error, usa readLines() y luego skip=7 para leer la tabla real.",
    cleaningTitle: "Sorter de limpieza y tipos de probe",
    contextTitle: "Explorador de contexto CpG",
    chemistryTitle: "Sorter de química Infinium I/II",
    probeTitle: "Inspector de probes",
    barplotTitle: "Lab de barplot y orden de factores",
    quizIntro: "Úsalo como active recall antes de pasar a pipeline 1.",
    writtenPrompt: "Prompt: Explica cómo la química teórica de Infinium se conecta con la exploración práctica del manifest en R.",
    writtenModel: "La lección conecta la biología de metilación con la anotación computacional. A nivel molecular, la metilación se lee indirectamente: después de conversión con bisulfito, las citosinas no metiladas pasan a U/T, mientras que las metiladas permanecen como C. Los arrays Illumina Infinium usan probes para interrogar loci CpG conocidos. Infinium I usa dos tipos de bead y dos probes para versiones metiladas y no metiladas, mientras que Infinium II usa un tipo de bead y una lectura de single-base extension en dos colores. En R, el manifest traduce esa química a columnas como IlmnID, AddressA_ID, AddressB_ID, Infinium_Design_Type, CHR, MAPINFO, UCSC_RefGene_Name y Relation_to_UCSC_CpG_Island. El código práctico importa el manifest con cuidado, salta líneas no tabulares, elimina probes sin mapeo cromosómico, limpia niveles de factores, resume contextos CpG y compara la distribución de Infinium I/II. Esto hace que el report de metilación sea biológicamente interpretable y computacionalmente reproducible.",
    sections: []
  },
  fa: {
    mark: "علامت کامل‌شده",
    done: "کامل شد",
    dashboard: "داشبورد DRD",
    previous: "قبلی",
    next: "بعدی",
    current: "M2.2",
    previousTitle: "M2.1 معرفی R/Bioconductor",
    nextTitle: "M2.3 ورود داده + QC",
    heroEyebrow: "ماژول ۲ · ۱۳/۱۴ مه · متیلاسیون + تمرین manifest",
    heroTitle: "از شیمی متیلاسیون تا منطق manifest file",
    heroSubtitle: "یک درس عملی دربارهٔ اتصال شیمی Infinium، annotation پروب‌ها و بررسی manifest 450K در R.",
    flow: ["beta value", "CpG context", "bisulfite", "Infinium I/II", "manifest", "کد R"],
    resources: "منابع کلاس",
    slides: "اسلایدها",
    transcript: "رونوشت",
    recording: "Recording",
    open: "باز کردن",
    zoom: "برای بزرگ‌نمایی کلیک کن",
    close: "بستن بزرگ‌نمایی",
    visualLabel: "اسلاید منبع",
    professor: "تأکید استاد",
    exam: "نکته برای گزارش",
    examMore: "باز کردن پاسخ کامل",
    include: "چه چیزهایی باید بیاید",
    trap: "دام رایج",
    model: "عبارت نمونه برای گزارش",
    check: "Checkpoint",
    selected: "انتخاب‌شده",
    tryAgain: "نه کاملاً — منطق درس را دوباره بررسی کن.",
    correct: "درست — همین نکتهٔ کلیدی است.",
    quizTitle: "کوئیز سریع",
    writtenTitle: "تمرین پاراگراف گزارش",
    answerPlaceholder: "توضیح خود را به سبک گزارش اینجا بنویسید...",
    words: "کلمه",
    modelAnswer: "پاسخ نمونه",
    showAnswer: "نمایش پاسخ",
    hideAnswer: "پنهان کردن پاسخ",
    tapReveal: "برای نمایش کلیک کن",
    code: "کد R",
    result: "تفسیر مورد انتظار",
    importLabTitle: "walkthrough ورود manifest",
    importLabIntro: "همان منطق HTML کد R را دنبال کن: اول بخش کوچک را بخوان، خطا را بفهم، سپس با skip=7 جدول واقعی را وارد کن.",
    cleaningTitle: "مرتب‌سازی cleaning و نوع probe",
    contextTitle: "کاوشگر CpG context",
    chemistryTitle: "مرتب‌سازی شیمی Infinium I/II",
    probeTitle: "بازرسی probe",
    barplotTitle: "آزمایش barplot و ترتیب factor",
    quizIntro: "قبل از رفتن به pipeline 1 برای active recall استفاده کن.",
    writtenPrompt: "Prompt: توضیح بده شیمی Infinium چگونه به بررسی عملی manifest در R وصل می‌شود.",
    writtenModel: "این درس زیست‌شناسی متیلاسیون را به annotation محاسباتی وصل می‌کند. پس از bisulfite conversion، Cهای unmethylated به U/T تبدیل می‌شوند و Cهای methylated به صورت C باقی می‌مانند. Infinium I برای هر CpG دو bead type و دو probe دارد، اما Infinium II یک bead type و یک probe دارد و وضعیت methylation را با single-base extension دو رنگی می‌خواند. در R، manifest این شیمی را به ستون‌هایی مثل IlmnID، AddressA_ID، AddressB_ID، Infinium_Design_Type، CHR، MAPINFO، UCSC_RefGene_Name و Relation_to_UCSC_CpG_Island تبدیل می‌کند. کد عملی فایل را با skip=7 درست وارد می‌کند، probeهای بدون chromosome را حذف می‌کند، unused factor levels را با droplevels() پاک می‌کند و توزیع CpG context و Infinium I/II را خلاصه می‌کند.",
    sections: []
  }
};

COPY.es.sections = COPY.en.sections.map((section, index) => {
  const translated = [
    {
      eyebrow: "1 · ¿Qué variable estás midiendo?",
      title: "La metilación es binaria por molécula, pero continua en una muestra",
      body: "El PDF empieza con la química de la citosina metilada y la idea de DNA CpG completamente metilado o hemimetilado. La traducción para análisis de datos es clave: una molécula individual puede estar metilada o no, pero una muestra de tejido contiene una población de moléculas. Por eso el valor observado es una fracción promedio.",
      professor: "El punto práctico es la escala: no interpretes un beta intermedio como una molécula medio metilada. Refleja una población mixta de moléculas, alelos y células.",
      exam: { title: "Pregunta de report: ¿qué significa beta biológicamente?", include: ["Define beta como fracción agregada de metilación en un locus CpG.", "Explica que 0%, 25%, 50% y 100% representan proporciones distintas de moléculas metiladas.", "Menciona que heterogeneidad biológica, mezcla celular y metilación alelo-específica pueden contribuir a valores intermedios."], trap: "No describas beta como un genotipo directo de una sola molécula. Es una señal resumida de muchas moléculas de DNA.", model: "Un beta value representa la fracción de moléculas de DNA metiladas en un locus CpG de la muestra analizada. A nivel de una molécula, el CpG está metilado o no metilado. En tejido bulk, el DNA extraído mezcla células y alelos, así que valores beta intermedios reflejan un promedio poblacional de moléculas metiladas." }
    },
    {
      eyebrow: "2 · Familia de arrays y lógica del bisulfito",
      title: "El ensayo convierte metilación en una lectura C-versus-T",
      body: "27K, 450K, EPIC y EPIC v2 son generaciones de la familia HumanMethylation con cobertura creciente de CpGs. El truco químico es la conversión con bisulfito: C no metilada pasa a U y luego T tras PCR, mientras que C metilada permanece C. El array no ‘ve’ simplemente un grupo metilo; lee la consecuencia de secuencia creada por el bisulfito.",
      professor: "450K sigue siendo útil para aprender porque el manifest es manejable, la plataforma está muy documentada y hay muchos datasets públicos. EPIC y EPIC v2 extienden la misma lógica a más contenido regulador.",
      exam: { title: "Ojo para report: plataforma y bisulfito", include: ["Compara 27K, 450K, EPIC y EPIC v2 por cobertura de probes.", "Indica que 450K interroga más de 485,000 sitios por muestra.", "Explica que el bisulfito preserva la información de metilación como diferencia C/T."], trap: "No digas que la información de metilación sobrevive a PCR como un grupo metilo visible. Lo que se lee es la consecuencia C/T.", model: "Los arrays Illumina miden metilación de forma indirecta. El bisulfito convierte citosinas no metiladas en uracilo, luego timina, mientras que citosinas metiladas permanecen como citosina. Después, la plataforma interroga loci conocidos con probes diseñados alrededor de esa diferencia C/T." }
    },
    {
      eyebrow: "3 · Química Infinium",
      title: "Infinium I y II difieren en diseño de bead, lógica de probe y significado del color",
      body: "Infinium I usa dos tipos de bead y dos probes para el mismo CpG: una versión no metilada y una metilada. Infinium II usa un tipo de bead y una probe; los estados se distinguen por single-base extension en dos colores. Por eso el manifest tiene columnas como AddressA_ID, AddressB_ID, Next_Base, Color_Channel e Infinium_Design_Type.",
      professor: "Evita una confusión común: el chip 450K contiene probes Infinium I e Infinium II. No es que todo el array sea tipo I o tipo II; cada fila/probe tiene su diseño.",
      exam: { title: "Ojo para report: comparar Infinium I y II", include: ["Infinium I: 1 IlmnID, 2 bead types, 2 probes, lógica de un canal de color.", "Infinium II: 1 IlmnID, 1 bead type, 1 probe, lectura en dos colores.", "Menciona que Type I asume correlación regional en 50 bp, mientras Type II usa bases R degeneradas para CpGs subyacentes."], trap: "No igualar el significado rojo/verde para todos los tipos. En Type I las señales vienen de direcciones de bead diferentes; en Type II se leen por color desde un bead type.", model: "Infinium I e Infinium II son dos químicas de probe presentes en el mismo methylation array. Infinium I usa dos bead types y dos probes para un CpG: una para la secuencia metilada y otra para la no metilada. Infinium II usa un solo bead type y una probe, y distingue el estado por el color incorporado en single-base extension." }
    },
    {
      eyebrow: "4 · Ejemplos de probes y anotación",
      title: "El manifest convierte química en filas y columnas",
      body: "El PDF muestra ejemplos de secuencia para una probe Infinium I y una Infinium II. En Type I, cg00050873 tiene AddressA contra DNA no metilado y AddressB contra DNA metilado. En Type II, cg00063477 tiene una sola dirección y una probe independiente del estado de metilación hasta single-base extension. Luego la clase pasa a annotation: la secuencia de probe es fija para un diseño, pero la anotación genómica puede cambiar.",
      professor: "Recalca que el análisis genómico significativo depende de la anotación. La misma probe puede interpretarse distinto si cambian fuente de annotation o genome build.",
      exam: { title: "Ojo para report: diseño versus anotación", include: ["Distingue diseño de probe fijo de annotation cambiante.", "Nombra columnas útiles: IlmnID, CHR, MAPINFO, Infinium_Design_Type, UCSC_RefGene_Name y Relation_to_UCSC_CpG_Island.", "Menciona que control, SNP y CpG probes no se interpretan igual."], trap: "No asumas que cada fila es una CpG methylation probe. El manifest también incluye SNPs y controles.", model: "El manifest es el puente entre química del array e interpretación biológica. La información de diseño define cómo se mide un locus, mientras que annotation conecta la probe con cromosoma, coordenada, gen y contexto CpG. Como annotation puede cambiar entre fuentes o genome builds, el report debe indicar qué manifest o paquete se usó." }
    },
    {
      eyebrow: "5 · Práctica HTML de R",
      title: "El código enseña una importación defensiva y exploratoria del manifest",
      body: "El HTML intenta primero leer solo 20 filas. La primera importación falla porque el archivo tiene líneas iniciales que no forman una tabla rectangular. La solución es inspeccionar con readLines() y luego importar con skip=7. Después se usan dim(), head(), str(), table(), subsetting y droplevels() para entender y limpiar el objeto.",
      professor: "Importa más el workflow que memorizar números: importar con cuidado, inspeccionar estructura, identificar filas no genómicas/control, limpiar factores y resumir columnas biológicamente relevantes.",
      exam: { title: "Ojo para report: explica el código, no solo el output", include: ["Explica por qué se usa nrows=20 antes de cargar todo.", "Explica por qué skip=7 arregla el error.", "Explica por qué CHR == '' identifica filas no mapeadas y por qué droplevels() es necesario."], trap: "No pegues código R sin interpretación. El report debe decir qué revisa o cambia cada paso.", model: "Primero se importa una parte pequeña del manifest con nrows=20 para evitar cargar un archivo grande sin revisar su estructura. El primer read.table falla porque las primeras siete líneas son metadata, no la tabla. readLines() permite comprobarlo y skip=7 corrige la importación. Después, dim(), head() y str() verifican dimensiones y tipos de columnas. Las filas con CHR vacío se separan porque incluyen SNPs y controles. Luego droplevels() elimina niveles de factor no usados." }
    }
  ][index];
  return { ...translated, slides: section.slides };
});
COPY.fa.sections = COPY.en.sections.map((section, index) => ({
  ...section,
  eyebrow: ["1 · متغیر اندازه‌گیری‌شده", "2 · bisulfite و خانوادهٔ array", "3 · شیمی Infinium", "4 · probe و annotation", "5 · تمرین R HTML"][index],
  title: ["متیلاسیون در سطح مولکول binary است، اما در نمونه bulk پیوسته دیده می‌شود", "آزمایش متیلاسیون را به خوانش C در برابر T تبدیل می‌کند", "Infinium I و II در طراحی bead، probe و رنگ متفاوت‌اند", "manifest شیمی را به سطر و ستون تبدیل می‌کند", "کد R ورود و بررسی manifest را مرحله‌به‌مرحله آموزش می‌دهد"][index],
  body: ["در یک مولکول، CpG یا methylated است یا unmethylated؛ اما نمونهٔ بافتی مجموعه‌ای از DNAهای بسیار زیاد است. پس beta value میانگین جمعیتی وضعیت متیلاسیون است.", "bisulfite conversion باعث می‌شود Cهای unmethylated به U/T تبدیل شوند و Cهای methylated به صورت C باقی بمانند. بنابراین array نتیجهٔ C/T را می‌خواند، نه خود methyl group را.", "Infinium I دو bead type و دو probe دارد؛ Infinium II یک bead type و یک probe دارد و وضعیت را با رنگ single-base extension می‌خواند. همین تفاوت در ستون‌های manifest دیده می‌شود.", "نمونه‌های probe در PDF نشان می‌دهند Type I دو address دارد ولی Type II یک address دارد. Annotation ستون‌هایی مثل CHR، MAPINFO، gene name و CpG context را به probe وصل می‌کند.", "در HTML، ابتدا nrows=20 برای آزمایش import استفاده می‌شود. خطا با readLines() بررسی می‌شود و سپس skip=7 برای خواندن جدول واقعی به کار می‌رود. بعد با dim، head، str، table، subsetting و droplevels داده بررسی و تمیز می‌شود."][index]
}));
COPY.fa.importSteps = COPY.en.importSteps;
COPY.fa.cleaningItems = COPY.en.cleaningItems;
COPY.fa.cleaningOptions = COPY.en.cleaningOptions;
COPY.fa.contexts = COPY.en.contexts;
COPY.fa.chemistryItems = COPY.en.chemistryItems;
COPY.fa.chemistryOptions = COPY.en.chemistryOptions;
COPY.fa.probeExamples = COPY.en.probeExamples;
COPY.fa.barplotSteps = COPY.en.barplotSteps;
COPY.fa.quiz = COPY.en.quiz;
COPY.es.importSteps = COPY.en.importSteps.map(step => ({ ...step }));
COPY.es.cleaningItems = COPY.en.cleaningItems.map(item => ({ ...item }));
COPY.es.cleaningOptions = COPY.en.cleaningOptions;
COPY.es.contexts = COPY.en.contexts.map(item => [...item]);
COPY.es.chemistryItems = COPY.en.chemistryItems.map(item => ({ ...item }));
COPY.es.chemistryOptions = COPY.en.chemistryOptions;
COPY.es.probeExamples = COPY.en.probeExamples;
COPY.es.barplotSteps = COPY.en.barplotSteps.map(step => ({ ...step }));
COPY.es.quiz = [
  { q: "¿Por qué falló el primer read.table()?", a: "Porque el archivo empieza con siete líneas de header/metadata que no tienen el mismo número de columnas que la tabla real." },
  { q: "¿Qué identifica CHR == '' en el manifest?", a: "Filas que no mapean a cromosoma, incluyendo probes SNP de seguimiento y probes de control." },
  { q: "¿Por qué aparece droplevels() muchas veces?", a: "Después de filtrar un factor, R conserva niveles no usados. droplevels() los elimina." },
  { q: "¿Por qué Relation_to_UCSC_CpG_Island es útil?", a: "Relaciona cada probe con island, shore, shelf u open sea, lo cual cambia la interpretación biológica." },
  { q: "¿Cuál es la diferencia entre diseño y annotation?", a: "Diseño describe la química/probe fija; annotation conecta probes con features genómicas y puede cambiar con fuente o genome build." }
];

function cx(...classes) { return classes.filter(Boolean).join(" "); }
function Pill({ children, tone = "green" }) { return <span className={cx("inline-flex items-center rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.18em]", tone === "green" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-stone-200 bg-white text-stone-600")}>{children}</span>; }
function SectionHeader({ eyebrow, title, children }) { return <div><Pill>{eyebrow}</Pill><h2 className="mt-4 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>{children && <p className="mt-3 max-w-4xl text-base font-semibold leading-8 text-stone-600">{children}</p>}</div>; }
function ResourceLinks({ copy }) { const links = [{ label: copy.slides, href: SLIDES_URL, tone: "light" }, { label: copy.transcript, href: TRANSCRIPT_URL, tone: "light" }, { label: copy.recording, href: CLASS_RECORDING_URL, tone: "dark" }]; return <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-4"><div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-stone-500">{copy.resources}</div><div className="grid gap-2 sm:grid-cols-3">{links.map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={cx("rounded-2xl border px-4 py-3 text-center text-sm font-black transition hover:-translate-y-0.5", link.tone === "dark" ? "border-stone-950 bg-stone-950 text-white" : "border-stone-200 bg-white text-stone-900 hover:border-emerald-200 hover:bg-emerald-50")}>{link.label} ↗</a>)}</div></div>; }
function LessonNav({ copy, isDone, toggle, position = "top" }) { return <nav className={cx("z-20 mb-8 rounded-[2rem] border border-stone-200 bg-white/90 p-3 shadow-sm backdrop-blur", position === "top" && "sticky top-3")}><div className="flex flex-wrap items-center justify-between gap-3"><a href="#/lesson/m2-r" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-800 transition hover:-translate-y-0.5 hover:shadow-sm">← {copy.previous}: {copy.previousTitle}</a><div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-stone-500">{copy.current}</div><div className="flex flex-wrap gap-2"><button type="button" onClick={toggle} className={cx("rounded-full px-4 py-2 text-sm font-black transition hover:-translate-y-0.5", isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white")}>{isDone ? copy.done : copy.mark}</button><a href="#/lesson/m2-import-qc" className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-700">{copy.next}: {copy.nextTitle} →</a></div></div></nav>; }
function Hero({ copy }) { return <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white shadow-sm"><div className="grid lg:grid-cols-[1.1fr_0.9fr]"><div className="bg-[#f8f0df] p-8 md:p-12"><Pill>{copy.heroEyebrow}</Pill><h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-stone-950 md:text-7xl">{copy.heroTitle}</h1><p className="mt-6 max-w-2xl text-xl font-semibold leading-9 text-stone-700">{copy.heroSubtitle}</p><div className="mt-8 flex flex-wrap gap-2">{copy.flow.map(tag => <span key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-stone-700">{tag}</span>)}</div></div><div className="border-t border-stone-200 bg-white p-6 lg:border-l lg:border-t-0"><div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-sm"><div className="grid grid-cols-2 gap-3"><div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Module</div><div className="mt-2 text-3xl font-black text-stone-950">2</div></div><div className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Report</div><div className="mt-2 text-3xl font-black text-stone-950">10+</div></div><div className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Core</div><div className="mt-2 text-3xl font-black text-stone-950">450K</div></div><div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Skill</div><div className="mt-2 text-3xl font-black text-stone-950">R</div></div></div><div className="mt-4 rounded-[2rem] bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Big idea</div><p className="mt-2 text-lg font-bold leading-7">chemistry → probe design → manifest columns → filtering → biological annotation</p></div><div className="mt-4"><ResourceLinks copy={copy}/></div></div></div></div></section>; }
function ReportWatch({ exam, copy }) { return <div className="mt-4 rounded-[2rem] border border-emerald-200 bg-emerald-50/60 p-4"><div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.exam}</div><p className="mt-2 text-sm font-black leading-6 text-emerald-950">{exam.title}</p><details className="mt-4 rounded-[1.6rem] border border-emerald-200 bg-white p-4"><summary className="cursor-pointer text-sm font-black text-emerald-900">{copy.examMore}</summary><div className="mt-5 space-y-3"><div><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{copy.include}</div><ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-semibold leading-6 text-stone-800 marker:text-emerald-600">{exam.include.map(item => <li key={item}>{item}</li>)}</ul></div><div className="rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">{copy.trap}</div><p className="mt-2 text-sm font-black leading-6 text-amber-950">{exam.trap}</p></div><div className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{copy.model}</div><p className="mt-3 text-sm font-black leading-7 text-stone-950">{exam.model}</p></div></div></details></div>; }
function ProfessorEmphasis({ copy, children }) { return <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4"><div className="text-xs font-black uppercase tracking-[0.16em] text-emerald-800">{copy.professor}</div><p className="mt-1 text-sm font-bold leading-6 text-emerald-950">{children}</p></div>; }
function SlideCard({ slide, image, copy, onZoom, isFull, professor, exam }) { return <article className={cx("overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm", isFull && "lg:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr]")}><button type="button" onClick={() => onZoom({ ...slide, ...image })} className={cx("group relative block w-full cursor-zoom-in border-b border-stone-200 bg-white p-3 text-left", isFull && "lg:border-b-0 lg:border-r")}><div className={cx("aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white", isFull && "lg:aspect-auto lg:h-full")}><img src={image.src} alt={slide.title} loading="lazy" className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]" /></div><span className="pointer-events-none absolute bottom-6 right-6 rounded-full border border-stone-200 bg-white/95 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-stone-700 shadow-sm transition group-hover:-translate-y-0.5">{copy.zoom}</span></button><div className="p-5"><Pill>{copy.visualLabel} · Slide {image.slide}</Pill><h3 className="mt-3 text-xl font-black text-stone-950">{slide.title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{slide.body}</p><ProfessorEmphasis copy={copy}>{professor}</ProfessorEmphasis><ReportWatch exam={exam} copy={copy}/></div></article>; }
function SlideGrid({ slides, copy, onZoom, professor, exam }) { return <div className="mt-6 grid gap-4 lg:grid-cols-2">{slides.map((slide, idx) => { const image = IMG[slide.key]; const isFull = slides.length % 2 === 1 && idx === slides.length - 1; return <SlideCard key={slide.key} slide={slide} image={image} copy={copy} onZoom={onZoom} isFull={isFull} professor={professor} exam={exam}/>; })}</div>; }
function LessonSection({ section, copy, onZoom }) { return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={section.eyebrow} title={section.title}>{section.body}</SectionHeader><SlideGrid slides={section.slides} copy={copy} onZoom={onZoom} professor={section.professor} exam={section.exam}/></section>; }
function ImportWalkthrough({ copy }) { const [active, setActive] = useState(copy.importSteps[0].id); const step = copy.importSteps.find(item => item.id === active) || copy.importSteps[0]; return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="R HTML" title={copy.importLabTitle}>{copy.importLabIntro}</SectionHeader><div className="mt-5 flex flex-wrap gap-2">{copy.importSteps.map(item => <button key={item.id} type="button" onClick={() => setActive(item.id)} className={cx("rounded-full border px-4 py-2 text-sm font-black", active === item.id ? "border-emerald-300 bg-emerald-100 text-emerald-900" : "border-stone-200 bg-white text-stone-700")}>{item.label}</button>)}</div><CodeResult code={step.code} result={step.result} copy={copy}/></section>; }
function CodeResult({ code, result, copy }) { return <div className="mt-6 grid gap-4 lg:grid-cols-2"><div className="rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">{copy.code}</div><pre className="mt-3 whitespace-pre-wrap text-sm font-bold leading-7"><code>{code}</code></pre></div><div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{copy.result}</div><p className="mt-3 text-base font-bold leading-8 text-stone-800">{result}</p></div></div>; }
function ChoiceSorter({ copy, title, items, options }) { const [selected, setSelected] = useState({}); return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.check} title={title}> </SectionHeader><div className="mt-6 grid gap-4 md:grid-cols-2">{items.map((item, idx) => <article key={item.q} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="font-black text-stone-950">{item.q}</div><div className="mt-4 flex flex-wrap gap-2">{options.map(option => <button key={option} type="button" onClick={() => setSelected({ ...selected, [idx]: option })} className={cx("rounded-full border px-3 py-2 text-xs font-black", selected[idx] === option ? (option === item.a ? "border-emerald-300 bg-emerald-100 text-emerald-900" : "border-red-300 bg-red-100 text-red-900") : "border-stone-200 bg-white text-stone-700")}>{option}</button>)}</div>{selected[idx] && <p className="mt-3 text-sm font-bold leading-6 text-stone-700"><span className="font-black">{selected[idx] === item.a ? copy.correct : copy.tryAgain}</span> {item.why}</p>}</article>)}</div></section>; }
function ContextExplorer({ copy }) { const [open, setOpen] = useState(null); return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="Annotation" title={copy.contextTitle}>The HTML uses table(Relation_to_UCSC_CpG_Island). Remember that the blank category corresponds to open-sea probes after cleaning.</SectionHeader><div className="mt-6 grid gap-3 md:grid-cols-3">{copy.contexts.map(([label, count, note], idx) => <button key={label} type="button" onClick={() => setOpen(open === idx ? null : idx)} className={cx("rounded-3xl border p-5 text-left transition hover:-translate-y-0.5", open === idx ? "border-emerald-300 bg-emerald-50 shadow-sm" : "border-stone-200 bg-stone-50")}><div className="text-sm font-black uppercase tracking-[0.14em] text-stone-500">{label}</div><div className="mt-2 text-3xl font-black text-stone-950">{count}</div>{open === idx && <p className="mt-3 text-sm font-bold leading-6 text-stone-700">{note}</p>}</button>)}</div></section>; }
function ProbeInspector({ copy }) { const [mode, setMode] = useState("typeI"); const item = copy.probeExamples[mode]; return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="Probe design" title={copy.probeTitle}>Use the examples from the PDF to connect sequence logic with manifest columns.</SectionHeader><div className="mt-5 flex flex-wrap gap-2"><button onClick={() => setMode("typeI")} className={cx("rounded-full border px-4 py-2 text-sm font-black", mode === "typeI" ? "border-emerald-300 bg-emerald-100 text-emerald-900" : "border-stone-200 bg-white text-stone-700")}>Infinium I</button><button onClick={() => setMode("typeII")} className={cx("rounded-full border px-4 py-2 text-sm font-black", mode === "typeII" ? "border-emerald-300 bg-emerald-100 text-emerald-900" : "border-stone-200 bg-white text-stone-700")}>Infinium II</button></div><h3 className="mt-6 text-2xl font-black text-stone-950">{item.title}</h3><CodeResult code={item.code} result={item.result} copy={copy}/></section>; }
function BarplotLab({ copy }) { const [active, setActive] = useState(copy.barplotSteps[0].id); const step = copy.barplotSteps.find(item => item.id === active) || copy.barplotSteps[0]; return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="Visualization" title={copy.barplotTitle}>The code builds from a simple count table to chromosome ordering, stacked/side-by-side barplots and the supplementary I/II ratio check.</SectionHeader><div className="mt-5 flex flex-wrap gap-2">{copy.barplotSteps.map(item => <button key={item.id} onClick={() => setActive(item.id)} className={cx("rounded-full border px-4 py-2 text-sm font-black", active === item.id ? "border-emerald-300 bg-emerald-100 text-emerald-900" : "border-stone-200 bg-white text-stone-700")}>{item.label}</button>)}</div><CodeResult code={step.code} result={step.result} copy={copy}/></section>; }
function Quiz({ copy }) { const [open, setOpen] = useState({}); return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="Quiz" title={copy.quizTitle}>{copy.quizIntro}</SectionHeader><div className="grid gap-3">{copy.quiz.map((item, idx) => <article key={item.q} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="flex gap-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{idx + 1}</div><div className="min-w-0 flex-1"><p className="font-bold text-stone-900">{item.q}</p><button type="button" onClick={() => setOpen({ ...open, [idx]: !open[idx] })} className="mt-4 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100">{open[idx] ? copy.hideAnswer : copy.showAnswer}</button>{open[idx] && <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-semibold leading-6 text-stone-700">{item.a}</p>}</div></div></article>)}</div></section>; }
function Trainer({ copy }) { const [text, setText] = useState(""); const [show, setShow] = useState(false); const words = text.trim() ? text.trim().split(/\s+/).length : 0; return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="Report" title={copy.writtenTitle}>{copy.writtenPrompt}</SectionHeader><textarea value={text} onChange={event => setText(event.target.value)} className="mt-5 min-h-44 w-full rounded-3xl border border-stone-200 bg-white p-4 text-sm font-semibold leading-7 outline-none focus:border-emerald-300" placeholder={copy.answerPlaceholder}/><div className="mt-3 flex flex-wrap items-center justify-between gap-3"><span className="text-sm font-bold text-stone-500">{words} {copy.words}</span><button type="button" onClick={() => setShow(!show)} className="rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-700">{show ? copy.hideAnswer : copy.showAnswer}</button></div>{show && <div className="mt-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{copy.modelAnswer}</div><p className="mt-3 text-sm font-bold leading-7 text-emerald-950">{copy.writtenModel}</p></div>}</section>; }
function ZoomModal({ item, copy, onClose }) { if (!item) return null; return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/80 p-4" role="dialog" aria-modal="true" onClick={onClose}><div className="max-h-[94vh] w-[min(1100px,96vw)] overflow-auto rounded-[2rem] bg-white p-4 shadow-2xl" onClick={event => event.stopPropagation()}><div className="mb-3 flex items-center justify-between gap-3"><div><Pill>{copy.visualLabel} · Slide {item.slide}</Pill><h3 className="mt-2 text-xl font-black text-stone-950">{item.title}</h3></div><button onClick={onClose} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white hover:bg-emerald-700">{copy.close}</button></div><img src={item.src} alt={item.title} className="w-full rounded-[1.5rem] object-contain"/><p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{item.body}</p></div></div>; }

export default function DRDLesson08({ lang = "es", isDone = false, toggle = () => {} }) {
  const copy = COPY[lang] || COPY.es;
  const [zoom, setZoom] = useState(null);
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><LessonNav copy={copy} isDone={isDone} toggle={toggle}/><Hero copy={copy}/>{copy.sections.map(section => <LessonSection key={section.eyebrow} section={section} copy={copy} onZoom={setZoom}/>) }<ImportWalkthrough copy={copy}/><ChoiceSorter copy={copy} title={copy.cleaningTitle} items={copy.cleaningItems} options={copy.cleaningOptions}/><ContextExplorer copy={copy}/><ChoiceSorter copy={copy} title={copy.chemistryTitle} items={copy.chemistryItems} options={copy.chemistryOptions}/><ProbeInspector copy={copy}/><BarplotLab copy={copy}/><Quiz copy={copy}/><Trainer copy={copy}/><LessonNav copy={copy} isDone={isDone} toggle={toggle} position="bottom"/><ZoomModal item={zoom} copy={copy} onClose={() => setZoom(null)}/></main>;
}
