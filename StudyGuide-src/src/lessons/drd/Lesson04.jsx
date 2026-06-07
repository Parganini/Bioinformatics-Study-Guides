import React, { useState } from "react";
import { cx, DRDPill as Pill, DRDStatCard as StatCard, DRDSectionHeader, DRDResourceLinks } from "./shared.jsx";
import module2OverviewVisual from "../../assets/drd/lesson04/module2-overview.png";
import reportRequirementsVisual from "../../assets/drd/lesson04/report-requirements.png";
import reportDeadlineVisual from "../../assets/drd/lesson04/report-deadline.png";
import rVsPythonVisual from "../../assets/drd/lesson04/r-vs-python.png";
import whyRVisual from "../../assets/drd/lesson04/why-r.png";
import whyNotRVisual from "../../assets/drd/lesson04/why-not-r.png";
import functionsPackagesVisual from "../../assets/drd/lesson04/functions-packages.png";
import repositoriesVisual from "../../assets/drd/lesson04/repositories.png";
import rstudioInterfaceVisual from "../../assets/drd/lesson04/rstudio-interface.png";
import rbaseConsoleVisual from "../../assets/drd/lesson04/rbase-console.png";
import workspaceDirectoryVisual from "../../assets/drd/lesson04/workspace-directory.png";
import objectsDataTypesVisual from "../../assets/drd/lesson04/objects-data-types.png";
import dataTypesVisual from "../../assets/drd/lesson04/data-types.png";
import factorsLevelsVisual from "../../assets/drd/lesson04/factors-levels.png";
import operatorsSubsettingVisual from "../../assets/drd/lesson04/operators-subsetting.png";
import sampleSheetVisual from "../../assets/drd/lesson04/sample-sheet.png";
import accessorsVisual from "../../assets/drd/lesson04/accessors.png";
import exploratoryFunctionsVisual from "../../assets/drd/lesson04/exploratory-functions.png";
import orderingFunctionVisual from "../../assets/drd/lesson04/ordering-function.png";

const SLIDES_URL = "https://drive.google.com/file/d/1Qo2clrYIp2JO2cTf6VoSP-a3szJ_kgMa/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1I6CzjnJ7O4F6oJ_46aownNn4woG6ewL3p7xLDEQpgAI/edit?usp=drivesdk";
const CLASS_RECORDING_URL = "https://www.youtube.com/watch?v=XmowKzBBqx8&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=4";

const IMG = {
  module2Overview: { src: module2OverviewVisual, slide: 2 },
  reportRequirements: { src: reportRequirementsVisual, slide: 3 },
  reportDeadline: { src: reportDeadlineVisual, slide: 4 },
  rVsPython: { src: rVsPythonVisual, slide: 5 },
  whyR: { src: whyRVisual, slide: 6 },
  whyNotR: { src: whyNotRVisual, slide: 7 },
  functionsPackages: { src: functionsPackagesVisual, slide: 9 },
  repositories: { src: repositoriesVisual, slide: 10 },
  rbaseConsole: { src: rbaseConsoleVisual, slide: 11 },
  rstudioInterface: { src: rstudioInterfaceVisual, slide: 12 },
  workspaceDirectory: { src: workspaceDirectoryVisual, slide: 13 },
  objectsDataTypes: { src: objectsDataTypesVisual, slide: 14 },
  dataTypes: { src: dataTypesVisual, slide: 15 },
  factorsLevels: { src: factorsLevelsVisual, slide: 16 },
  operatorsSubsetting: { src: operatorsSubsettingVisual, slide: 17 },
  accessors: { src: accessorsVisual, slide: 18 },
  sampleSheet: { src: sampleSheetVisual, slide: 18 },
  exploratoryFunctions: { src: exploratoryFunctionsVisual, slide: 19 },
  orderingFunction: { src: orderingFunctionVisual, slide: 19 }
};

const COPY = {
  en: {
    mark: "Mark completed",
    done: "Completed",
    dashboard: "DRD dashboard",
    previous: "Previous",
    next: "Next",
    current: "M2.1",
    previousTitle: "M1.3 Affymetrix GeneChip",
    nextTitle: "M2.2 DNA methylation + BeadChip chemistry",
    heroEyebrow: "Module 2 · May 8 · R/Bioconductor introduction",
    heroTitle: "From R basics to SampleSheet thinking",
    heroSubtitle: "A practical bridge from biological metadata to reproducible methylation-array analysis in R.",
    flow: ["report rules", "why R", "packages", "workspace", "objects", "SampleSheet"],
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
    model: "Sample answer",
    check: "Checkpoint",
    selected: "Selected",
    tryAgain: "Not quite — use the lecture logic.",
    correct: "Correct — that is the key point.",
    quizTitle: "Quick checkpoint quiz",
    writtenTitle: "Report paragraph trainer",
    answerPlaceholder: "Write a 10–12 line answer or a report paragraph here...",
    words: "words",
    modelAnswer: "Model answer",
    functionLabTitle: "Function lab: match command to purpose",
    dataTypeTitle: "Data-type classifier",
    subsetTitle: "Subsetting mini-practice",
    quizIntro: "Use these as quick active-recall checks before moving to the practical scripts.",
    showAnswer: "Show answer",
    hideAnswer: "Hide answer",
    tapReveal: "Tap to reveal purpose",
    writtenPrompt: "Prompt: Explain why the first Module 2 lesson focuses on R objects, packages, SampleSheet metadata and exploratory functions before starting methylation-array analysis.",
    writtenModel: "The first Module 2 lesson builds the practical foundations needed for methylation-array analysis. R is used because it has many packages for omics data, including Bioconductor packages such as minfi, and it can generate reproducible analyses and publication-grade figures. Before running a pipeline, students must understand that data are stored as objects in a workspace, and that files are read from a working directory. They also need to distinguish vectors, matrices, data frames, lists and factors, because metadata and sample information are usually stored as data frames and categorical variables. The SampleSheet is essential because it links files to biological variables such as group, sex, diagnosis or age. Exploratory functions such as dim(), str(), summary() and table() allow students to check the structure and composition of the data before subsetting, modeling or plotting. This prevents common mistakes and makes the final report reproducible.",
    sections: [
      {
        eyebrow: "1 · Module 2 starts here",
        title: "This module is practical: you learn R to analyse methylation-array data",
        body: "Francesco introduces Module 2 as a practical course. The first part reviews the theoretical basics needed to understand the data; the second part applies R to genome-wide data, especially DNA methylation data generated with Illumina microarrays.",
        professor: "He explicitly frames the course as practical: you are not expected to derive every statistical function, but to apply an appropriate R/Bioconductor pipeline and explain it clearly.",
        exam: {
          title: "Possible report question: why methylation data and why R?",
          include: ["Mention that DNA methylation is the dataset used for Module 2 because it is the instructor’s field and fits Illumina microarray pipelines.", "Explain that similar logic/packages can often be adapted to expression data because array signal structures are comparable.", "Connect R/Bioconductor to reproducibility: code, comments, outputs and report must match."],
          trap: "Do not describe this as a pure programming course. The goal is not learning all of R; it is learning enough R to run and interpret an omics pipeline.",
          model: "Module 2 focuses on DNA methylation data because the practical report will analyze an Illumina methylation-array dataset. The instructor stresses that the goal is not to become a software developer, but to apply established R/Bioconductor tools to real genome-wide data. R is suitable because it has many community packages for omics analysis and plotting. The same general logic can also be useful for expression data because microarray signals and preprocessing concepts are comparable. For the report, the important skill is to run a reproducible pipeline and explain each step."
        },
        slides: [
          { key: "module2Overview", title: "Theory + tutorial + practice", body: "The lecture roadmap is practical: understand the workflow, then run R code, then apply it to the report." },
          { key: "reportRequirements", title: "Team report deliverable", body: "The assessment is a group report with data analysis, code, comments and a final PDF/HTML output." },
          { key: "reportDeadline", title: "Deadline rule", body: "The report is due one day before the exam date, so reproducibility and final export have to be planned in advance." }
        ]
      },
      {
        eyebrow: "2 · Why R and packages?",
        title: "R is used because omics workflows are package-driven",
        body: "The lecture presents R as a free environment for statistical computing and graphics. Its strength is not only base syntax, but the package ecosystem. For this course, CRAN and Bioconductor matter most; minfi is mentioned as an example package for methylation-array analysis.",
        professor: "He warns that having many packages is both a strength and a limitation: beginners must choose a pipeline deliberately instead of trying random poorly documented functions.",
        exam: {
          title: "How to explain packages in the report methods",
          include: ["State which package or function was used and why.", "Distinguish installing/downloading a package from loading it with library().", "Explain that Bioconductor is the key source for high-throughput genomic analysis packages."],
          trap: "Do not write only ‘we used R’. A reproducible report should specify packages, versions when possible, and the main functions used.",
          model: "In the report, R should be described as the analysis environment and the relevant packages should be named. A package is a collection of functions and data designed for a specific task. CRAN provides general R packages, while Bioconductor focuses on high-throughput genomic data. Downloading or installing a package is not enough: it must be loaded into the working environment with library(). For methylation arrays, packages such as minfi provide functions to import, preprocess and analyze Illumina methylation data."
        },
        slides: [
          { key: "rVsPython", title: "R vs Python is not the point", body: "The lecture uses the R/Python comparison to frame R as the practical language selected for this methylation-array pipeline." },
          { key: "whyR", title: "Why R?", body: "R is flexible for omics data, statistical analysis and publication-quality plots, but it requires careful pipeline choices." },
          { key: "whyNotR", title: "Why not R?", body: "The professor also stresses the limitations: R will not choose the correct package or pipeline for you." },
          { key: "functionsPackages", title: "Functions and packages", body: "Function syntax and package loading are basic vocabulary for every later pipeline step." },
          { key: "repositories", title: "Where packages come from", body: "CRAN and Bioconductor are the two repositories emphasized for this course." }
        ]
      },
      {
        eyebrow: "3 · RStudio, workspace and reproducible habits",
        title: "Before analysing data, control the environment you are working in",
        body: "RStudio separates script editor, console, environment/history and files/plots/packages tabs. The practical message is simple: write code in a script, run it in the console, inspect objects in the environment, and know where files are read from or saved to.",
        professor: "He stresses shortcuts and habits: run code from the editor with Command/Control + Enter, clean the workspace at the beginning of scripts, and set the working directory so file paths are predictable.",
        exam: {
          title: "Report reproducibility checkpoint",
          include: ["Begin scripts with a clean environment when appropriate: rm(list = ls()).", "Use getwd()/setwd() or project-relative paths to make file locations explicit.", "Use sessionInfo() to document the R version and loaded packages when reporting a pipeline."],
          trap: "Avoid relying only on what happens to be loaded in your current R session. The report code must run from a clean state.",
          model: "A reproducible R script should not depend on hidden objects already present in the workspace. The workspace contains objects created during the session, so old objects can accidentally affect the analysis. For this reason, scripts often start by cleaning objects with rm(list = ls()), loading the needed packages, and setting or documenting the working directory. sessionInfo() is useful because it records the R version, operating system and loaded packages. These steps make it easier for another person to reproduce the pipeline and verify that the code matches the report."
        },
        slides: [
          { key: "rbaseConsole", title: "Console plus script editor", body: "The course recommends writing code in a script/editor and running it into the console instead of working only interactively." },
          { key: "rstudioInterface", title: "RStudio panes", body: "Editor, console, environment and accessory tabs are the practical interface for the course." },
          { key: "workspaceDirectory", title: "Workspace + working directory", body: "Objects live in the workspace; files are read from and written to the working directory unless a full path is provided." }
        ]
      },
      {
        eyebrow: "4 · Objects and data types",
        title: "R analysis begins when values are stored as objects",
        body: "An R object stores data in the working environment. The lecture introduces simple types — numbers, characters, logicals, factors and NA — and aggregated types such as vectors, lists, matrices and data frames. This is essential because methylation data and metadata are large structured objects.",
        professor: "He repeatedly returns to the idea that different object types behave differently. Vectors hold one data type; data frames are two-dimensional and can contain different column types.",
        exam: {
          title: "Why data types matter in methylation analysis",
          include: ["Describe metadata as data frames: rows are samples, columns are variables.", "Explain that factors are needed for categorical variables such as group or diagnosis.", "Mention that wrong type conversion can silently change values, especially when numbers and characters are mixed."],
          trap: "Do not treat every table column as interchangeable. Age, sex, diagnosis, sample ID and group can require different R types.",
          model: "Data types matter because R functions behave differently depending on the object type. Metadata are usually stored as data frames, where each row is a sample and each column is a variable. Numeric variables such as age should remain numeric, while categorical variables such as diagnosis, treatment group or sex should often be factors. Vectors store one data type, so mixing characters and numbers can force numbers to become characters. If the type is wrong, subsetting, plotting and modeling can give misleading results."
        },
        slides: [
          { key: "objectsDataTypes", title: "R objects", body: "Object naming, assignment with <- and case sensitivity are the first source of many beginner errors." },
          { key: "dataTypes", title: "R data types", body: "This slide groups the vocabulary needed before manipulating any SampleSheet or methylation object." }
        ]
      },
      {
        eyebrow: "5 · Factors and levels",
        title: "Factors are annoying at first, but powerful for models and plots",
        body: "Factors represent categorical variables. They store categories as integer levels. Reordering the levels changes how R internally codes categories and how plots or models order groups, without changing the actual sample labels.",
        professor: "He calls factors the most complicated part of the day, but also emphasizes that they become essential when doing statistics, modeling and plotting.",
        exam: {
          title: "Useful report explanation: why convert metadata to factors?",
          include: ["Define factors as categorical variables with levels.", "Give examples: treatment group, sex, diagnosis, chromosome labels.", "Explain that level order affects plots and model contrasts."],
          trap: "Do not use as.numeric(factor) blindly. It returns the internal level codes, not the original category labels or meaningful numeric values.",
          model: "Factors are R objects used for categorical variables. In a methylation-array SampleSheet, variables such as group, diagnosis, sex or chromosome can be represented as factors. Each category is stored as an internal integer level, and the order of levels controls how groups appear in plots or how model contrasts are defined. Reordering factor levels does not change the labels of the samples, but changes the internal coding and display order. This is useful for making interpretable plots and statistical models, but converting factors directly to numeric can be dangerous because it returns level codes rather than original values."
        },
        slides: [
          { key: "factorsLevels", title: "Factor logic", body: "The key is to separate the visible label from the hidden integer level order." }
        ]
      },
      {
        eyebrow: "6 · Operators, subsetting and SampleSheet metadata",
        title: "Subsetting turns metadata into analysis-ready groups",
        body: "The lecture uses logical operators and square brackets to subset vectors and data frames. For data frames, [row, column] uses row coordinates before the comma and column coordinates after it. The $ operator extracts named columns. This is exactly how a SampleSheet becomes useful.",
        professor: "He emphasizes that the SampleSheet is a data frame: read it with read.table(), inspect it with exploratory functions, and use columns such as age, sex or diagnosis to subset or summarize samples.",
        exam: {
          title: "Report-ready SampleSheet paragraph",
          include: ["Say how the SampleSheet was imported: read.table(), separator, header.", "Say how it was inspected: dim(), str(), head(), summary(), table().", "Say how metadata columns were used to select groups or check balance."],
          trap: "Do not jump straight from importing the SampleSheet to analysis. Always inspect dimensions, column types, missing values and group counts first.",
          model: "The SampleSheet is the metadata table that links each sample to its biological and technical variables. It can be imported as a data frame using read.table(), specifying the separator and whether the file has a header. Before any analysis, it should be inspected with dim(), head(), str(), summary() and table() to confirm the number of samples, column names, variable types, missing values and group distribution. Then subsetting can use logical operators and metadata columns, for example to select samples older than a threshold or to compare diagnosis groups."
        },
        slides: [
          { key: "operatorsSubsetting", title: "Operators", body: "Logical operators produce TRUE/FALSE outputs that can be used to select rows or elements." },
          { key: "accessors", title: "Accessors and subsetting", body: "Square brackets, double brackets and the dollar sign are the syntax you need to extract data from vectors, lists and data frames." },
          { key: "exploratoryFunctions", title: "Explore first", body: "These commands are the first QC layer for metadata before any methylation pipeline step." }
        ]
      }
    ],
    functions: [
      ["library(minfi)", "Load a package into the working environment"],
      ["rm(list = ls())", "Remove current objects from the workspace"],
      ["getwd()", "Print the current working directory"],
      ["str(sampleSheet)", "Inspect column types in a data frame"],
      ["table(group)", "Count categories or co-occurrences"]
    ],
    typeItems: [
      ["sample ID", "character"], ["age", "numeric"], ["diagnosis", "factor"], ["TRUE/FALSE QC flag", "logical"], ["unknown value", "NA"], ["SampleSheet", "data frame"]
    ],
    subsetOptions: [
      { text: "sampleSheet[sampleSheet$Age > 50, ]", correct: true },
      { text: "sampleSheet$Age > 50", correct: false },
      { text: "sampleSheet[, sampleSheet$Age > 50]", correct: false }
    ],
    subsetExplanation: "The logical condition must select rows, so it goes before the comma. Leaving the column side empty keeps all columns.",
    quiz: [
      { q: "Why is library(minfi) not the same as installing minfi?", a: "Installing/downloading makes the package available on the computer; library(minfi) loads it into the current R session so its functions can be used." },
      { q: "What does a working directory control?", a: "It is the default folder from which R reads files and where it saves files when no full path is provided." },
      { q: "Why are factors useful for diagnosis or treatment groups?", a: "They encode categorical variables with levels, which helps R models and plots understand group structure and ordering." },
      { q: "What is the difference between == and %in%?", a: "== checks equality position by position; %in% checks whether values from the left object occur anywhere in the right object." },
      { q: "Why should you run str() or summary() after reading a SampleSheet?", a: "To check object structure, column types, distributions and possible missing values before analysis." }
    ]
  },
  es: {
    mark: "Marcar completada",
    done: "Completada",
    dashboard: "Dashboard DRD",
    previous: "Anterior",
    next: "Siguiente",
    current: "M2.1",
    previousTitle: "M1.3 Affymetrix GeneChip",
    nextTitle: "M2.2 Metilación de DNA + química BeadChip",
    heroEyebrow: "Module 2 · 8 de mayo · Introducción a R/Bioconductor",
    heroTitle: "De las bases de R al pensamiento SampleSheet",
    heroSubtitle: "Un puente práctico entre metadata biológica y análisis reproducible de methylation arrays en R.",
    flow: ["reglas del report", "por qué R", "paquetes", "workspace", "objetos", "SampleSheet"],
    resources: "Recursos de clase",
    slides: "Slides",
    transcript: "Transcripción",
    recording: "Grabación",
    open: "Abrir",
    zoom: "Click para ampliar",
    close: "Cerrar zoom",
    visualLabel: "Diapositiva fuente",
    professor: "Énfasis del profesor",
    exam: "Ojo para report",
    examMore: "Abrir respuesta desarrollada",
    include: "Qué incluir",
    trap: "Trampa común",
    model: "Respuesta modelo",
    check: "Checkpoint",
    selected: "Seleccionaste",
    tryAgain: "Casi — usa la lógica de la clase.",
    correct: "Correcto — ese es el punto clave.",
    quizTitle: "Quiz rápido de checkpoint",
    writtenTitle: "Entrenador de párrafo de report",
    answerPlaceholder: "Escribe aquí una respuesta de 10–12 líneas o un párrafo de report...",
    words: "palabras",
    modelAnswer: "Respuesta modelo",
    functionLabTitle: "Laboratorio de funciones: comando → propósito",
    dataTypeTitle: "Clasificador de tipos de datos",
    subsetTitle: "Mini-práctica de subsetting",
    quizIntro: "Úsalas como active recall antes de pasar a los scripts prácticos.",
    showAnswer: "Mostrar respuesta",
    hideAnswer: "Ocultar respuesta",
    tapReveal: "Toca para revelar el propósito",
    writtenPrompt: "Prompt: Explica por qué la primera lección del Module 2 se enfoca en objetos de R, paquetes, metadata SampleSheet y funciones exploratorias antes de iniciar el análisis de methylation arrays.",
    writtenModel: "La primera lección del Module 2 construye las bases prácticas necesarias para analizar methylation arrays. R se usa porque tiene muchos paquetes para datos ómicos, incluidos paquetes de Bioconductor como minfi, y permite análisis reproducibles y figuras de calidad. Antes de ejecutar una pipeline, hay que entender que los datos se guardan como objetos dentro de un workspace y que los archivos se leen desde un working directory. También hay que distinguir vectores, matrices, data frames, listas y factores, porque la metadata de las muestras suele estar en data frames y variables categóricas. La SampleSheet es esencial porque conecta los archivos con variables biológicas como grupo, sexo, diagnóstico o edad. Funciones exploratorias como dim(), str(), summary() y table() permiten revisar estructura y composición antes de hacer subsetting, modelos o plots. Esto evita errores comunes y hace que el report final sea reproducible.",
    sections: []
  },
  fa: {
    mark: "علامت‌گذاری کامل‌شده",
    done: "کامل‌شده",
    dashboard: "داشبورد DRD",
    previous: "قبلی",
    next: "بعدی",
    current: "M2.1",
    previousTitle: "M1.3 Affymetrix GeneChip",
    nextTitle: "M2.2 متیلاسیون DNA + شیمی BeadChip",
    heroEyebrow: "Module 2 · ۸ مه · معرفی R/Bioconductor",
    heroTitle: "از مبانی R تا منطق SampleSheet",
    heroSubtitle: "پلی عملی بین metadata زیستی و تحلیل reproducible برای methylation array در R.",
    flow: ["قواعد report", "چرا R", "packageها", "workspace", "objectها", "SampleSheet"],
    resources: "منابع کلاس",
    slides: "اسلایدها",
    transcript: "رونوشت",
    recording: "ضبط کلاس",
    open: "باز کردن",
    zoom: "برای بزرگ‌نمایی کلیک کن",
    close: "بستن بزرگ‌نمایی",
    visualLabel: "اسلاید منبع",
    professor: "تأکید استاد",
    exam: "نکتهٔ report",
    examMore: "باز کردن پاسخ کامل‌تر",
    include: "چه چیزهایی اضافه شود",
    trap: "دام رایج",
    model: "پاسخ نمونه",
    check: "Checkpoint",
    selected: "انتخاب‌شده",
    tryAgain: "نه کاملاً — از منطق درس استفاده کن.",
    correct: "درست — نکتهٔ اصلی همین است.",
    quizTitle: "آزمونک checkpoint",
    writtenTitle: "تمرین پاراگراف report",
    answerPlaceholder: "اینجا یک پاسخ ۱۰–۱۲ خطی یا پاراگراف report بنویس...",
    words: "کلمه",
    modelAnswer: "پاسخ نمونه",
    functionLabTitle: "آزمایشگاه function: دستور → هدف",
    dataTypeTitle: "طبقه‌بندی نوع داده",
    subsetTitle: "تمرین کوچک subsetting",
    quizIntro: "پیش از رفتن سراغ scriptهای عملی، از این‌ها برای active recall استفاده کن.",
    showAnswer: "نمایش پاسخ",
    hideAnswer: "پنهان کردن پاسخ",
    tapReveal: "برای دیدن هدف کلیک کن",
    writtenPrompt: "Prompt: توضیح بده چرا اولین درس Module 2 پیش از شروع تحلیل methylation array روی R objectها، packageها، SampleSheet metadata و exploratory functionها تمرکز می‌کند.",
    writtenModel: "اولین درس Module 2 پایه‌های عملی لازم برای تحلیل methylation array را می‌سازد. R استفاده می‌شود چون packageهای زیادی برای داده‌های omics دارد، از جمله Bioconductor packageهایی مثل minfi، و می‌تواند تحلیل reproducible و شکل‌های مناسب انتشار تولید کند. پیش از اجرای pipeline باید بدانیم داده‌ها در workspace به‌صورت object ذخیره می‌شوند و فایل‌ها از working directory خوانده می‌شوند. همچنین باید تفاوت vector، matrix، data frame، list و factor را فهمید، چون metadata نمونه‌ها معمولاً در data frame و متغیرهای categorical ذخیره می‌شود. SampleSheet مهم است چون فایل‌ها را به متغیرهای زیستی مثل گروه، جنس، diagnosis یا age وصل می‌کند. functionهایی مثل dim(), str(), summary() و table() برای بررسی ساختار و ترکیب داده پیش از subsetting، مدل‌سازی یا plot ضروری هستند. این کار خطاهای رایج را کم می‌کند و report نهایی را reproducible می‌سازد.",
    sections: []
  }
};

COPY.es.sections = COPY.en.sections.map((section, index) => ([
  {
    eyebrow: "1 · Aquí empieza Module 2",
    title: "Este módulo es práctico: aprendes R para analizar datos de methylation arrays",
    body: "Francesco introduce Module 2 como un curso práctico. Primero se repasan bases teóricas para entender los datos; después se aplica R a datos genome-wide, especialmente datos de metilación generados con microarrays Illumina.",
    professor: "Lo presenta explícitamente como un módulo práctico: no se espera que derives cada función estadística, sino que apliques una pipeline R/Bioconductor adecuada y sepas explicarla.",
    exam: {
      title: "Posible pregunta de report: ¿por qué datos de metilación y por qué R?",
      include: ["Menciona que DNA methylation es el dataset usado en Module 2 porque encaja con la experiencia del profesor y con pipelines Illumina.", "Explica que la lógica y algunos paquetes pueden adaptarse a expresión porque las señales de microarray son comparables.", "Conecta R/Bioconductor con reproducibilidad: código, comentarios, outputs y report deben coincidir."],
      trap: "No lo describas como un curso puro de programación. El objetivo es aprender suficiente R para ejecutar e interpretar una pipeline ómica.",
      model: "Module 2 se centra en datos de metilación porque el report práctico analizará un dataset de Illumina methylation array. El profesor recalca que el objetivo no es convertirse en programador, sino aplicar herramientas establecidas de R/Bioconductor a datos genome-wide reales. R es adecuado porque tiene muchos paquetes comunitarios para análisis ómico y visualización. La misma lógica general también puede ser útil para datos de expresión, porque los conceptos de señal y preprocesamiento de microarrays son comparables. Para el report, lo importante es ejecutar una pipeline reproducible y explicar cada paso."
    },
    slides: section.slides
  },
  {
    eyebrow: "2 · Por qué R y paquetes",
    title: "R se usa porque los workflows ómicos dependen de paquetes",
    body: "La clase presenta R como un entorno libre para computación estadística y gráficos. Su fuerza no es solo la sintaxis base, sino el ecosistema de paquetes. Para este curso, importan sobre todo CRAN y Bioconductor; minfi aparece como ejemplo para methylation arrays.",
    professor: "Advierte que tener muchos paquetes es una fortaleza y una limitación: hay que elegir una pipeline deliberadamente, no funciones al azar mal documentadas.",
    exam: {
      title: "Cómo explicar paquetes en métodos del report",
      include: ["Indica qué paquete o función usaste y por qué.", "Distingue instalar/descargar un paquete de cargarlo con library().", "Explica que Bioconductor es clave para análisis de datos genómicos high-throughput."],
      trap: "No escribas solo ‘usamos R’. Un report reproducible debe especificar paquetes, versiones si es posible y funciones principales.",
      model: "En el report, R debe describirse como el entorno de análisis y deben nombrarse los paquetes relevantes. Un paquete es una colección de funciones y datos diseñada para una tarea. CRAN ofrece paquetes generales de R, mientras que Bioconductor se enfoca en datos genómicos high-throughput. Descargar o instalar un paquete no basta: debe cargarse en el entorno con library(). Para methylation arrays, paquetes como minfi ofrecen funciones para importar, preprocesar y analizar datos de metilación Illumina."
    },
    slides: section.slides
  },
  {
    eyebrow: "3 · RStudio, workspace y hábitos reproducibles",
    title: "Antes de analizar datos, controla el entorno de trabajo",
    body: "RStudio separa editor de scripts, consola, environment/history y pestañas de files/plots/packages. El mensaje práctico es: escribe código en un script, ejecútalo en la consola, inspecciona objetos en el environment y sabe desde dónde se leen o guardan archivos.",
    professor: "Enfatiza atajos y hábitos: ejecutar con Command/Control + Enter, limpiar el workspace al inicio y definir el working directory para que las rutas sean predecibles.",
    exam: {
      title: "Checkpoint de reproducibilidad para el report",
      include: ["Inicia scripts con un entorno limpio cuando corresponda: rm(list = ls()).", "Usa getwd()/setwd() o rutas relativas de proyecto para hacer explícitas las ubicaciones.", "Usa sessionInfo() para documentar versión de R y paquetes cargados."],
      trap: "Evita depender de objetos que casualmente ya están cargados. El código del report debe poder correr desde cero.",
      model: "Un script reproducible no debe depender de objetos ocultos ya presentes en el workspace. El workspace contiene objetos creados durante la sesión, por lo que objetos viejos pueden afectar accidentalmente el análisis. Por eso, los scripts suelen empezar limpiando objetos con rm(list = ls()), cargando paquetes necesarios y definiendo o documentando el working directory. sessionInfo() ayuda porque registra la versión de R, el sistema operativo y los paquetes cargados. Estos pasos facilitan que otra persona reproduzca la pipeline y verifique que el código coincide con el report."
    },
    slides: section.slides
  },
  {
    eyebrow: "4 · Objetos y tipos de datos",
    title: "El análisis en R empieza cuando los valores se guardan como objetos",
    body: "Un objeto de R almacena datos en el working environment. La clase introduce tipos simples — números, caracteres, lógicos, factores y NA — y tipos agregados como vectores, listas, matrices y data frames. Esto es esencial porque los datos de metilación y la metadata son objetos grandes y estructurados.",
    professor: "Vuelve varias veces a la idea de que tipos distintos se comportan distinto. Los vectores tienen un solo tipo de dato; los data frames son bidimensionales y pueden tener columnas de tipos distintos.",
    exam: {
      title: "Por qué importan los tipos de datos en metilación",
      include: ["Describe la metadata como data frame: filas = muestras, columnas = variables.", "Explica que los factores son necesarios para variables categóricas como grupo o diagnóstico.", "Menciona que una conversión incorrecta puede cambiar valores silenciosamente, sobre todo al mezclar números y caracteres."],
      trap: "No trates todas las columnas de una tabla como equivalentes. Edad, sexo, diagnóstico, sample ID y grupo pueden necesitar tipos distintos.",
      model: "Los tipos de datos importan porque las funciones de R se comportan de forma diferente según el tipo de objeto. La metadata suele guardarse como data frame, donde cada fila es una muestra y cada columna una variable. Variables numéricas como la edad deben seguir siendo numéricas, mientras que variables categóricas como diagnóstico, grupo o sexo suelen representarse como factores. Los vectores almacenan un solo tipo, por lo que mezclar caracteres y números puede convertir los números en texto. Si el tipo es incorrecto, el subsetting, los plots y los modelos pueden ser engañosos."
    },
    slides: section.slides
  },
  {
    eyebrow: "5 · Factores y niveles",
    title: "Los factores molestan al inicio, pero son poderosos para modelos y plots",
    body: "Los factores representan variables categóricas. Guardan categorías como niveles enteros. Reordenar niveles cambia cómo R codifica internamente las categorías y cómo se ordenan grupos en plots o modelos, sin cambiar las etiquetas originales de las muestras.",
    professor: "Dice que los factores son la parte más complicada del día, pero recalca que son esenciales cuando empiezas a hacer estadística, modelos y visualizaciones.",
    exam: {
      title: "Explicación útil para report: por qué convertir metadata a factores",
      include: ["Define factores como variables categóricas con niveles.", "Da ejemplos: tratamiento, sexo, diagnóstico, cromosomas.", "Explica que el orden de niveles afecta plots y contrastes del modelo."],
      trap: "No uses as.numeric(factor) a ciegas. Devuelve códigos internos de niveles, no valores numéricos biológicamente significativos.",
      model: "Los factores son objetos de R usados para variables categóricas. En una SampleSheet de methylation array, variables como grupo, diagnóstico, sexo o cromosoma pueden representarse como factores. Cada categoría se almacena como un nivel entero interno, y el orden de niveles controla cómo aparecen los grupos en plots o cómo se definen contrastes en modelos. Reordenar niveles no cambia las etiquetas de las muestras, pero sí la codificación interna y el orden visual. Es útil para modelos y gráficos interpretables, pero convertir factores directamente a numéricos puede ser peligroso porque devuelve códigos de nivel."
    },
    slides: section.slides
  },
  {
    eyebrow: "6 · Operadores, subsetting y SampleSheet",
    title: "El subsetting convierte metadata en grupos listos para analizar",
    body: "La clase usa operadores lógicos y corchetes para subsetear vectores y data frames. En data frames, [fila, columna] usa coordenadas de fila antes de la coma y de columna después. El operador $ extrae columnas por nombre. Así es como una SampleSheet se vuelve útil.",
    professor: "Enfatiza que la SampleSheet es un data frame: se lee con read.table(), se inspecciona con funciones exploratorias y se usan columnas como edad, sexo o diagnóstico para subsetear o resumir muestras.",
    exam: {
      title: "Párrafo listo para report sobre SampleSheet",
      include: ["Di cómo se importó la SampleSheet: read.table(), separador, header.", "Di cómo se inspeccionó: dim(), str(), head(), summary(), table().", "Di cómo se usaron columnas de metadata para seleccionar grupos o revisar balance."],
      trap: "No saltes directamente de importar la SampleSheet al análisis. Primero revisa dimensiones, tipos de columnas, valores faltantes y conteos por grupo.",
      model: "La SampleSheet es la tabla de metadata que conecta cada muestra con sus variables biológicas y técnicas. Puede importarse como data frame con read.table(), indicando separador y si el archivo tiene encabezado. Antes de cualquier análisis, debe inspeccionarse con dim(), head(), str(), summary() y table() para confirmar número de muestras, nombres de columnas, tipos de variables, valores faltantes y distribución de grupos. Luego el subsetting puede usar operadores lógicos y columnas de metadata, por ejemplo para seleccionar muestras mayores a cierto umbral o comparar diagnósticos."
    },
    slides: section.slides
  }
][index]));

COPY.fa.sections = COPY.en.sections.map((section, index) => ([
  {
    eyebrow: "۱ · شروع Module 2",
    title: "این ماژول عملی است: R را برای تحلیل داده‌های methylation array یاد می‌گیری",
    body: "Francesco ماژول ۲ را به‌عنوان یک درس عملی معرفی می‌کند. ابتدا مبانی نظری لازم برای فهم داده مرور می‌شود؛ سپس R برای داده‌های genome-wide، به‌ویژه داده‌های methylation حاصل از microarrayهای Illumina، به‌کار می‌رود.",
    professor: "او صریحاً می‌گوید هدف درس عملی است: لازم نیست هر تابع آماری را از پایه استخراج کنید؛ باید بتوانید یک pipeline مناسب R/Bioconductor را اجرا و توضیح دهید.",
    exam: { title: "پرسش محتمل برای report: چرا methylation data و چرا R؟", include: ["بگو DNA methylation دادهٔ اصلی Module 2 است چون با تخصص مدرس و pipelineهای Illumina سازگار است.", "توضیح بده منطق و برخی packageها می‌توانند برای expression data هم مفید باشند چون ساختار سیگنال microarray مشابه است.", "R/Bioconductor را به reproducibility وصل کن: code، comment، output و report باید با هم بخوانند."], trap: "این را یک درس صرفاً برنامه‌نویسی معرفی نکن. هدف یادگیری مقدار کافی R برای اجرای و تفسیر یک pipeline اُمیکس است.", model: "Module 2 روی داده‌های متیلاسیون تمرکز دارد چون report عملی باید یک dataset از Illumina methylation array را تحلیل کند. استاد تأکید می‌کند هدف برنامه‌نویس شدن نیست، بلکه استفاده از ابزارهای آمادهٔ R/Bioconductor برای داده‌های genome-wide واقعی است. R مناسب است چون packageهای زیادی برای omics analysis و visualization دارد. همین منطق کلی می‌تواند برای expression data هم مفید باشد، چون مفاهیم signal و preprocessing در microarrayها قابل مقایسه‌اند. در report مهم‌ترین توانایی اجرای یک pipeline reproducible و توضیح هر مرحله است." },
    slides: section.slides
  },
  {
    eyebrow: "۲ · چرا R و packageها؟",
    title: "R استفاده می‌شود چون workflowهای اُمیکس package-driven هستند",
    body: "درس R را به‌عنوان محیطی آزاد برای محاسبات آماری و گرافیک معرفی می‌کند. قدرت آن فقط syntax پایه نیست، بلکه اکوسیستم packageهاست. در این درس CRAN و Bioconductor مهم‌ترند و minfi به‌عنوان نمونه‌ای برای methylation array مطرح می‌شود.",
    professor: "او هشدار می‌دهد تعداد زیاد packageها هم مزیت است و هم محدودیت: مبتدی‌ها باید pipeline را آگاهانه انتخاب کنند، نه اینکه تابع‌های تصادفی و بدتوصیف را امتحان کنند.",
    exam: { title: "چگونه packageها را در methods report توضیح دهیم", include: ["نام package یا function استفاده‌شده و دلیل استفاده را بنویس.", "نصب/دانلود package را از load کردن با library() جدا کن.", "توضیح بده Bioconductor منبع کلیدی برای داده‌های ژنومی high-throughput است."], trap: "فقط ننویس «از R استفاده کردیم». report قابل بازتولید باید packageها، در صورت امکان versionها، و functionهای اصلی را مشخص کند.", model: "در report، R باید به‌عنوان محیط تحلیل معرفی شود و packageهای مرتبط باید نام برده شوند. package مجموعه‌ای از functionها و داده‌ها برای یک کار مشخص است. CRAN packageهای عمومی R را فراهم می‌کند، درحالی‌که Bioconductor روی داده‌های ژنومی high-throughput تمرکز دارد. دانلود یا نصب package کافی نیست: باید با library() در محیط کاری load شود. برای methylation arrays، packageهایی مثل minfi functionهایی برای import، preprocessing و analysis داده‌های Illumina فراهم می‌کنند." },
    slides: section.slides
  },
  {
    eyebrow: "۳ · RStudio، workspace و عادت‌های reproducible",
    title: "پیش از تحلیل داده، محیط کار را کنترل کن",
    body: "RStudio editor، console، environment/history و files/plots/packages tabs را جدا می‌کند. پیام عملی ساده است: code را در script بنویس، در console اجرا کن، objectها را در environment ببین و بدان فایل‌ها از کجا خوانده یا ذخیره می‌شوند.",
    professor: "او روی shortcutها و عادت‌ها تأکید دارد: اجرای code با Command/Control + Enter، پاک کردن workspace در ابتدای script و تنظیم working directory برای pathهای قابل پیش‌بینی.",
    exam: { title: "نقطهٔ reproducibility برای report", include: ["در صورت مناسب، script را با محیط تمیز شروع کن: rm(list = ls()).", "از getwd()/setwd() یا pathهای نسبی پروژه استفاده کن تا مکان فایل‌ها روشن باشد.", "از sessionInfo() برای ثبت version R و packageهای loaded استفاده کن."], trap: "به objectهایی که تصادفاً در session فعلی هستند تکیه نکن. code گزارش باید از حالت تمیز اجرا شود.", model: "یک script قابل بازتولید نباید به objectهای پنهانی که از قبل در workspace هستند وابسته باشد. workspace objectهای ساخته‌شده در session را نگه می‌دارد، بنابراین objectهای قدیمی ممکن است تحلیل را تغییر دهند. برای همین scriptها معمولاً با rm(list = ls()) پاک‌سازی می‌شوند، سپس packageهای لازم load می‌شوند و working directory تنظیم یا مستند می‌شود. sessionInfo() مفید است چون version R، سیستم‌عامل و packageهای loaded را ثبت می‌کند. این کار بازتولید pipeline و تطبیق code با report را ساده‌تر می‌کند." },
    slides: section.slides
  },
  {
    eyebrow: "۴ · objectها و data typeها",
    title: "تحلیل در R وقتی شروع می‌شود که مقدارها به object تبدیل شوند",
    body: "یک R object داده را در working environment ذخیره می‌کند. درس typeهای ساده — number، character، logical، factor و NA — و typeهای تجمیعی مثل vector، list، matrix و data frame را معرفی می‌کند. این برای methylation data و metadata ضروری است.",
    professor: "او چند بار به این نکته برمی‌گردد که typeهای مختلف رفتار متفاوتی دارند. vector فقط یک data type نگه می‌دارد؛ data frame دو‌بعدی است و columnهای مختلف می‌توانند typeهای مختلف داشته باشند.",
    exam: { title: "چرا data type در تحلیل methylation مهم است", include: ["metadata را به‌عنوان data frame توضیح بده: سطرها نمونه‌ها و ستون‌ها متغیرها هستند.", "بگو factor برای متغیرهای categorical مثل group یا diagnosis لازم است.", "اشاره کن تبدیل اشتباه type می‌تواند بی‌صدا مقدارها را عوض کند، مخصوصاً هنگام ترکیب number و character."], trap: "همهٔ ستون‌های یک table را یکسان فرض نکن. age، sex، diagnosis، sample ID و group ممکن است typeهای مختلف لازم داشته باشند.", model: "data typeها مهم‌اند چون functionهای R بسته به نوع object متفاوت رفتار می‌کنند. metadata معمولاً به‌صورت data frame ذخیره می‌شود، جایی که هر سطر یک sample و هر ستون یک variable است. متغیرهای عددی مثل age باید numeric بمانند، درحالی‌که متغیرهای categorical مثل diagnosis، group یا sex اغلب factor هستند. vector فقط یک type نگه می‌دارد، پس ترکیب character و number می‌تواند numberها را به character تبدیل کند. اگر type اشتباه باشد، subsetting، plot و model می‌توانند گمراه‌کننده شوند." },
    slides: section.slides
  },
  {
    eyebrow: "۵ · factorها و levelها",
    title: "factorها ابتدا آزاردهنده‌اند، اما برای model و plot بسیار مهم‌اند",
    body: "factorها متغیرهای categorical را نشان می‌دهند. categoryها را به‌صورت integer level ذخیره می‌کنند. تغییر order levelها نحوهٔ coding داخلی R و order گروه‌ها در plot یا model را عوض می‌کند، بدون اینکه label اصلی sampleها عوض شود.",
    professor: "او می‌گوید factorها سخت‌ترین بخش امروز هستند، اما برای statistics، modeling و visualization ضروری می‌شوند.",
    exam: { title: "توضیح مناسب report: چرا metadata را به factor تبدیل کنیم؟", include: ["factor را به‌عنوان variable categorical با level تعریف کن.", "مثال بزن: treatment، sex، diagnosis، chromosome.", "توضیح بده order levelها plot و contrastهای model را تغییر می‌دهد."], trap: "از as.numeric(factor) کورکورانه استفاده نکن. خروجی آن کدهای داخلی level است، نه مقدار عددی معنی‌دار." , model: "factorها objectهای R برای متغیرهای categorical هستند. در SampleSheet یک methylation array، متغیرهایی مثل group، diagnosis، sex یا chromosome می‌توانند factor باشند. هر category به‌عنوان یک level عددی داخلی ذخیره می‌شود و order levelها کنترل می‌کند گروه‌ها در plot چگونه دیده شوند یا contrastهای model چگونه تعریف شوند. تغییر order levelها label sampleها را عوض نمی‌کند، اما coding داخلی و display order را تغییر می‌دهد. این برای plot و مدل قابل تفسیر مفید است، ولی تبدیل مستقیم factor به numeric خطرناک است چون کد level را برمی‌گرداند." },
    slides: section.slides
  },
  {
    eyebrow: "۶ · operatorها، subsetting و SampleSheet",
    title: "subsetting، metadata را به گروه‌های آمادهٔ تحلیل تبدیل می‌کند",
    body: "درس از logical operatorها و square bracketها برای subset کردن vector و data frame استفاده می‌کند. در data frame، [row, column] مختصات row را پیش از comma و column را پس از آن می‌گیرد. operator $ ستون‌های نام‌دار را استخراج می‌کند. همین‌طور SampleSheet مفید می‌شود.",
    professor: "او تأکید می‌کند SampleSheet یک data frame است: با read.table() خوانده می‌شود، با exploratory functionها بررسی می‌شود، و ستون‌هایی مثل age، sex یا diagnosis برای subset یا summary استفاده می‌شوند.",
    exam: { title: "پاراگراف آماده برای report دربارهٔ SampleSheet", include: ["بگو SampleSheet چگونه import شد: read.table(), separator, header.", "بگو چگونه بررسی شد: dim(), str(), head(), summary(), table().", "بگو metadata columns چگونه برای انتخاب گروه‌ها یا بررسی balance استفاده شدند."], trap: "مستقیماً از import SampleSheet به analysis نپر. ابتدا dimension، type ستون‌ها، missing value و group count را بررسی کن.", model: "SampleSheet جدول metadata است که هر sample را به variableهای زیستی و فنی وصل می‌کند. می‌توان آن را با read.table() به‌صورت data frame وارد کرد و separator و وجود header را مشخص کرد. پیش از هر تحلیل باید با dim(), head(), str(), summary() و table() بررسی شود تا تعداد sampleها، نام ستون‌ها، نوع variableها، missing value و توزیع groupها مشخص شود. سپس subsetting می‌تواند از logical operatorها و metadata columnها استفاده کند، مثلاً برای انتخاب sampleهای بالاتر از یک آستانهٔ age یا مقایسهٔ diagnosis groupها." },
    slides: section.slides
  }
][index]));

COPY.es.functions = COPY.en.functions;
COPY.fa.functions = COPY.en.functions;
COPY.es.typeItems = [["sample ID", "character"], ["edad", "numeric"], ["diagnóstico", "factor"], ["flag QC TRUE/FALSE", "logical"], ["valor desconocido", "NA"], ["SampleSheet", "data frame"]];
COPY.fa.typeItems = [["sample ID", "character"], ["age", "numeric"], ["diagnosis", "factor"], ["TRUE/FALSE QC flag", "logical"], ["unknown value", "NA"], ["SampleSheet", "data frame"]];
COPY.es.subsetOptions = COPY.en.subsetOptions;
COPY.fa.subsetOptions = COPY.en.subsetOptions;
COPY.es.subsetExplanation = "La condición lógica debe seleccionar filas, por eso va antes de la coma. Dejar vacía la parte de columnas conserva todas las columnas.";
COPY.fa.subsetExplanation = "شرط logical باید rowها را انتخاب کند، بنابراین قبل از comma می‌آید. خالی گذاشتن بخش column همهٔ ستون‌ها را نگه می‌دارد.";
COPY.es.quiz = [
  { q: "¿Por qué library(minfi) no es lo mismo que instalar minfi?", a: "Instalar/descargar deja el paquete disponible en la computadora; library(minfi) lo carga en la sesión actual para poder usar sus funciones." },
  { q: "¿Qué controla el working directory?", a: "Es la carpeta por defecto desde la cual R lee archivos y donde guarda archivos si no se da una ruta completa." },
  { q: "¿Por qué los factores son útiles para diagnóstico o tratamientos?", a: "Codifican variables categóricas con niveles, lo que ayuda a modelos y plots a entender estructura y orden de grupos." },
  { q: "¿Cuál es la diferencia entre == y %in%?", a: "== evalúa igualdad posición por posición; %in% evalúa si los valores del objeto izquierdo aparecen en cualquier lugar del objeto derecho." },
  { q: "¿Por qué correr str() o summary() tras leer una SampleSheet?", a: "Para revisar estructura, tipos de columnas, distribuciones y posibles valores faltantes antes del análisis." }
];
COPY.fa.quiz = [
  { q: "چرا library(minfi) با نصب minfi یکی نیست؟", a: "نصب package را روی سیستم در دسترس می‌کند؛ library(minfi) آن را در session فعلی load می‌کند تا functionهایش قابل استفاده باشند." },
  { q: "working directory چه چیزی را کنترل می‌کند؟", a: "پوشهٔ پیش‌فرضی است که R فایل‌ها را از آن می‌خواند یا اگر path کامل نداده باشی فایل‌ها را آنجا ذخیره می‌کند." },
  { q: "چرا factor برای diagnosis یا treatment مفید است؟", a: "چون متغیر categorical را با levelها encode می‌کند و به model و plot کمک می‌کند group structure و order را بفهمند." },
  { q: "تفاوت == و %in% چیست؟", a: "== برابری را position-wise بررسی می‌کند؛ %in% بررسی می‌کند مقدارهای شیء چپ در هر جایی از شیء راست وجود دارند یا نه." },
  { q: "چرا بعد از خواندن SampleSheet باید str() یا summary() اجرا کرد؟", a: "برای بررسی structure، type ستون‌ها، توزیع‌ها و missing valueهای احتمالی پیش از analysis." }
];

function LessonNav({ copy, isDone, toggle, position = "top" }) {
  return <nav className={`${position === "bottom" ? "mt-10" : "mb-6"} rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm`} aria-label="Lesson navigation"><div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"><a href="#/lesson/m1-affy" className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">← {copy.previous}: {copy.previousTitle}</a><div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center"><a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500 transition hover:bg-stone-50">{copy.current} · {copy.dashboard}</a><button onClick={toggle} className={`rounded-full px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5 ${isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white"}`}>{isDone ? copy.done : copy.mark}</button></div><a href="#/lesson/m2-manifest" className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md">{copy.next}: {copy.nextTitle} →</a></div></nav>;
}
function SectionHeader({ eyebrow, title, children }) {
  return <div className="mb-5"><DRDSectionHeader eyebrow={eyebrow} title={title}>{children}</DRDSectionHeader></div>;
}
function ResourceLinks({ copy }) {
  const links = [
    { label: copy.slides, href: SLIDES_URL, tone: "accent" },
    { label: copy.transcript, href: TRANSCRIPT_URL },
    { label: copy.recording, href: CLASS_RECORDING_URL, tone: "dark" }
  ];
  return <DRDResourceLinks title={copy.resources} links={links} columns={3} />;
}
function Hero({ copy }) {
  return <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#f3fff7]/95 shadow-xl shadow-stone-900/5"><div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"><div className="p-7 md:p-10 lg:p-12"><div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{copy.heroEyebrow}</div><h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.heroTitle}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{copy.heroSubtitle}</p><div className="mt-6 flex flex-wrap gap-2">{copy.flow.map(step => <Pill key={step} tone="stone">{step}</Pill>)}</div></div><div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0"><div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner"><div className="grid grid-cols-2 gap-3"><StatCard label="Module" value="2" tone="green"/><StatCard label="Date" value="May 8"/><StatCard label="Core" value="R" tone="green"/><StatCard label="Output" value="Report"/></div><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Pipeline mindset</div><p className="mt-2 text-lg font-bold leading-7">metadata → object type → inspect → subset → model/report</p></div><ResourceLinks copy={copy}/></div></div></div></section>;
}
function ExamWatchCard({ exam, copy }) {
  return <div className="mt-4 rounded-[2rem] border border-emerald-200 bg-emerald-50/60 p-4">
    <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.exam}</div>
    <p className="mt-2 text-sm font-black leading-6 text-emerald-950">{exam.title}</p>
    <details className="mt-4 rounded-[1.6rem] border border-emerald-200 bg-white p-4">
      <summary className="cursor-pointer text-sm font-black text-emerald-900">{copy.examMore}</summary>
      <div className="mt-5 space-y-3">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{copy.include}</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-semibold leading-6 text-stone-800 marker:text-emerald-600">{exam.include.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">{copy.trap}</div>
          <p className="mt-2 text-sm font-black leading-6 text-amber-950">{exam.trap}</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{copy.model}</div>
          <p className="mt-3 text-sm font-black leading-7 text-stone-950">{exam.model}</p>
        </div>
      </div>
    </details>
  </div>;
}
function ProfessorEmphasis({ copy, children }) {
  return <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4"><div className="text-xs font-black uppercase tracking-[0.16em] text-emerald-800">{copy.professor}</div><p className="mt-1 text-sm font-bold leading-6 text-emerald-950">{children}</p></div>;
}
function SlideCard({ slide, image, copy, onZoom, isFull, professor, exam }) {
  return <article className={cx("overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm", isFull && "lg:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr]")}><button type="button" onClick={() => onZoom({ ...slide, ...image })} className={cx("group relative block w-full cursor-zoom-in border-b border-stone-200 bg-white p-3 text-left", isFull && "lg:border-b-0 lg:border-r")}><div className={cx("aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white", isFull && "lg:aspect-auto lg:h-full")}><img src={image.src} alt={slide.title} loading="lazy" className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]" /></div><span className="pointer-events-none absolute bottom-6 right-6 rounded-full border border-stone-200 bg-white/95 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-stone-700 shadow-sm transition group-hover:-translate-y-0.5">{copy.zoom}</span></button><div className="p-5"><Pill tone="green">{copy.visualLabel} · Slide {image.slide}</Pill><h3 className="mt-3 text-xl font-black text-stone-950">{slide.title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{slide.body}</p><ProfessorEmphasis copy={copy}>{professor}</ProfessorEmphasis><ExamWatchCard exam={exam} copy={copy}/></div></article>;
}
function SlideGrid({ slides, copy, onZoom, professor, exam }) {
  return <div className="mt-6 grid gap-4 lg:grid-cols-2">{slides.map((slide, idx) => { const image = IMG[slide.key]; const isFull = slides.length % 2 === 1 && idx === slides.length - 1; return <SlideCard key={slide.key} slide={slide} image={image} copy={copy} onZoom={onZoom} isFull={isFull} professor={professor} exam={exam}/>; })}</div>;
}
function LessonSection({ section, copy, onZoom }) {
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={section.eyebrow} title={section.title}>{section.body}</SectionHeader><SlideGrid slides={section.slides} copy={copy} onZoom={onZoom} professor={section.professor} exam={section.exam}/></section>;
}
function FunctionLab({ copy }) {
  const [selected, setSelected] = useState({});
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="R commands" title={copy.functionLabTitle}>Match the command with the idea you should remember from the lesson.</SectionHeader><div className="grid gap-3 md:grid-cols-2">{copy.functions.map(([cmd, purpose]) => <button key={cmd} type="button" onClick={() => setSelected({...selected, [cmd]: !selected[cmd]})} className={`rounded-3xl border p-5 text-left transition hover:-translate-y-0.5 ${selected[cmd] ? "border-emerald-300 bg-emerald-50 shadow-sm" : "border-stone-200 bg-stone-50"}`}><code className="text-lg font-black text-stone-950">{cmd}</code><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{selected[cmd] ? purpose : copy.tapReveal}</p></button>)}</div></section>;
}
function DataTypeClassifier({ copy }) {
  const [revealed, setRevealed] = useState({});
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="Objects" title={copy.dataTypeTitle}>Reveal the most appropriate R type for each piece of metadata.</SectionHeader><div className="grid gap-3 md:grid-cols-3">{copy.typeItems.map(([label, kind]) => <button key={label} onClick={() => setRevealed({...revealed, [label]: !revealed[label]})} className={`rounded-3xl border p-5 text-left transition hover:-translate-y-0.5 ${revealed[label] ? "border-emerald-200 bg-emerald-50" : "border-stone-200 bg-stone-50"}`}><div className="text-lg font-black text-stone-950">{label}</div><div className="mt-3 rounded-2xl bg-white px-3 py-2 text-sm font-black text-emerald-700 shadow-sm">{revealed[label] ? kind : "?"}</div></button>)}</div></section>;
}
function SubsetPractice({ copy }) {
  const [choice, setChoice] = useState(null);
  const picked = choice !== null ? copy.subsetOptions[choice] : null;
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="SampleSheet" title={copy.subsetTitle}>Which command keeps all columns but selects only samples with Age &gt; 50?</SectionHeader><div className="grid gap-3">{copy.subsetOptions.map((item, idx) => <button key={item.text} onClick={() => setChoice(idx)} className={`rounded-3xl border p-5 text-left font-mono text-sm font-black transition hover:-translate-y-0.5 ${choice === idx ? (item.correct ? "border-emerald-300 bg-emerald-50 text-emerald-900" : "border-red-300 bg-red-50 text-red-900") : "border-stone-200 bg-stone-50 text-stone-800"}`}>{item.text}</button>)}</div>{picked && <div className={`mt-4 rounded-3xl p-5 text-sm font-bold leading-7 ${picked.correct ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"}`}><div className="font-black">{picked.correct ? copy.correct : copy.tryAgain}</div><p className="mt-2">{copy.subsetExplanation}</p></div>}</section>;
}
function Quiz({ copy }) {
  const [open, setOpen] = useState({});
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="Quiz" title={copy.quizTitle}>{copy.quizIntro}</SectionHeader><div className="grid gap-3">{copy.quiz.map((item, idx) => <article key={item.q} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="flex gap-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{idx + 1}</div><div className="min-w-0 flex-1"><p className="font-bold text-stone-900">{item.q}</p><button type="button" onClick={() => setOpen({...open, [idx]: !open[idx]})} className="mt-4 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100">{open[idx] ? copy.hideAnswer : copy.showAnswer}</button>{open[idx] && <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-semibold leading-6 text-stone-700">{item.a}</p>}</div></div></article>)}</div></section>;
}
function ZoomModal({ item, copy, onClose }) {
  if (!item) return null;
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/80 p-4" role="dialog" aria-modal="true" onClick={onClose}><div className="max-h-[94vh] w-[min(1100px,96vw)] overflow-auto rounded-[2rem] bg-white p-4 shadow-2xl" onClick={event => event.stopPropagation()}><div className="mb-3 flex items-center justify-between gap-3"><div><Pill tone="green">{copy.visualLabel} · Slide {item.slide}</Pill><h3 className="mt-2 text-xl font-black text-stone-950">{item.title}</h3></div><button onClick={onClose} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white hover:bg-emerald-700">{copy.close}</button></div><img src={item.src} alt={item.title} className="w-full rounded-[1.5rem] object-contain"/><p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{item.body}</p></div></div>;
}

export default function DRDLesson04({ lang = "es", isDone = false, toggle = () => {} }) {
  const copy = COPY[lang] || COPY.es;
  const [zoom, setZoom] = useState(null);
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><LessonNav copy={copy} isDone={isDone} toggle={toggle}/><Hero copy={copy}/>{copy.sections.map(section => <LessonSection key={section.eyebrow} section={section} copy={copy} onZoom={setZoom}/>) }<FunctionLab copy={copy}/><DataTypeClassifier copy={copy}/><SubsetPractice copy={copy}/><Quiz copy={copy}/><LessonNav copy={copy} isDone={isDone} toggle={toggle} position="bottom"/><ZoomModal item={zoom} copy={copy} onClose={() => setZoom(null)}/></main>;
}
