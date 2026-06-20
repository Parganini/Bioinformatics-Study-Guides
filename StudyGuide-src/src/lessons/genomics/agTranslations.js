export function agUiCopy(lang) {
  if (lang !== "fa") {
    return {
      languageNote: null,
      appliedGenomics: "Applied Genomics",
      guideTitle: "Exam-focused study guide",
      guideIntro:
        "Chronological review from course orientation through NGS technologies, data analysis, assembly, annotation, population genomics, GWAS and project preparation.",
      continueGuide: "Continue guide",
      practiceExam: "Practice exam",
      mainHub: "Main hub",
      guideProgress: "Guide progress",
      sections: "sections",
      originalSources: "Original sources",
      sourceIntro:
        "Slides and transcript notes are linked from the Drive folders. Professor comments are included only when they are supported by the available transcript material.",
      driveFolder: "Drive folder",
      transcripts: "Transcripts",
      transcriptsMissing: "Transcripts not bundled",
      pages: "Pages",
      chronologicalRoute: "Chronological route",
      section: "Section",
      done: "Done",
      open: "Open",
      allPages: "All pages",
      previous: "Previous",
      next: "Next",
      finalDrill: "Final drill",
      retrievalTitle: "Move from review into retrieval",
      retrievalBody: "Use the practice exam after this guide, then come back to the sections behind every missed answer.",
      openPracticeExam: "Open practice exam",
      completed: "Completed",
      markComplete: "Mark complete",
      condensedChecklist: "Condensed checklist",
      rememberForExam: "Remember for the exam",
      professorComment: "Professor comment",
      supportedBy: "Supported by",
      examTrap: "Exam trap",
      formula: "Formula",
      miniExercise: "Mini exercise",
      hideAnswer: "Hide answer",
      showAnswer: "Show answer",
      checklist: "Checklist",
      slideGuidedStudy: "Slide-guided study",
      whatSlideSays: "What this slide is saying",
      whyItMatters: "Why it matters",
      examFocus: "Exam focus",
      howToSayIt: "How to say it",
      textOnlyBlock: "Text-only block",
      textOnlyBody: "No slide image is needed for this particular exam drill.",
      noExtraSlide: "No extra slide image selected",
      noExtraSlideBody: "The main slide assets for this section are embedded in the study blocks above.",
      slidePending: "Original slide asset pending",
      extractionMapping: "Mapping is preserved for extraction",
      close: "Close",
    };
  }

  return {
    languageNote: "نسخه فارسی آزمایشی است: چارچوب، مسیر مطالعه و نکته‌های اصلی ترجمه شده‌اند؛ برخی توضیحات تخصصی بلند فعلا به انگلیسی مانده‌اند.",
    appliedGenomics: "ژنومیکس کاربردی",
    guideTitle: "راهنمای مطالعه متمرکز بر امتحان",
    guideIntro:
      "مرور زمانی درس از معرفی دوره تا فناوری‌های NGS، تحلیل داده، مونتاژ، حاشیه‌نویسی، ژنومیکس جمعیتی، GWAS و آماده‌سازی پروژه.",
    continueGuide: "ادامه راهنما",
    practiceExam: "آزمون تمرینی",
    mainHub: "صفحه اصلی",
    guideProgress: "پیشرفت راهنما",
    sections: "بخش",
    originalSources: "منابع اصلی",
    sourceIntro:
      "اسلایدها و یادداشت‌های transcript از پوشه‌های Drive لینک شده‌اند. نظرهای استاد فقط وقتی آمده‌اند که با transcript موجود پشتیبانی شوند.",
    driveFolder: "پوشه Drive",
    transcripts: "Transcriptها",
    transcriptsMissing: "Transcript در بسته موجود نیست",
    pages: "صفحه‌ها",
    chronologicalRoute: "مسیر زمانی مطالعه",
    section: "بخش",
    done: "انجام شد",
    open: "باز",
    allPages: "همه صفحه‌ها",
    previous: "قبلی",
    next: "بعدی",
    finalDrill: "تمرین نهایی",
    retrievalTitle: "از مرور به بازیابی فعال برو",
    retrievalBody: "بعد از این راهنما آزمون تمرینی را بزن؛ سپس برای هر پاسخ غلط به بخش مربوط برگرد.",
    openPracticeExam: "باز کردن آزمون تمرینی",
    completed: "کامل شد",
    markComplete: "علامت کامل‌شده",
    condensedChecklist: "چک‌لیست فشرده",
    rememberForExam: "برای امتحان به خاطر بسپار",
    professorComment: "نظر استاد",
    supportedBy: "پشتیبانی‌شده توسط",
    examTrap: "دام امتحانی",
    formula: "فرمول",
    miniExercise: "تمرین کوتاه",
    hideAnswer: "پنهان کردن پاسخ",
    showAnswer: "نمایش پاسخ",
    checklist: "چک‌لیست",
    slideGuidedStudy: "مطالعه با راهنمای اسلاید",
    whatSlideSays: "این اسلاید چه می‌گوید",
    whyItMatters: "چرا مهم است",
    examFocus: "تمرکز امتحانی",
    howToSayIt: "چطور در پاسخ بنویسی",
    textOnlyBlock: "بلوک بدون اسلاید",
    textOnlyBody: "برای این تمرین امتحانی به تصویر اسلاید جداگانه نیاز نیست.",
    noExtraSlide: "اسلاید اضافه انتخاب نشده",
    noExtraSlideBody: "اسلایدهای اصلی این بخش در بلوک‌های مطالعه بالا قرار گرفته‌اند.",
    slidePending: "تصویر اسلاید اصلی هنوز آماده نیست",
    extractionMapping: "نگاشت استخراج حفظ شده است",
    close: "بستن",
  };
}

const SECTION_FA = {
  "exam-orientation": {
    title: "جهت‌گیری امتحان",
    bullets: [
      "امتحان کتبی: ۳۰ سؤال در ۶۰ دقیقه، شامل ۲۵ سؤال چندگزینه‌ای و ۵ پاسخ کوتاه.",
      "شرط قبولی: حداقل ۲۲ پاسخ درست از ۳۰ و تحویل پروژه ژنومیک.",
      "برای چندگزینه‌ای، تفاوت فناوری‌ها، فایل‌ها، نمودارها و مفاهیم مشابه را دقیق تمرین کن.",
      "برای پاسخ کوتاه، روش را تعریف کن، ورودی/خروجی را بگو و دلیل استفاده را توضیح بده.",
      "چرخه سریع مطالعه: بلوک راهنما -> اسلاید اصلی -> سؤال کوتاه -> آزمون تمرینی.",
    ],
    remember:
      "در دو روز آخر روی هدف‌های عینی تمرکز کن: coverage، N50، HWE، Manhattan plot، LD، BUSCO، FASTQ/SAM/VCF، فایل‌های PLINK، CNV/aCGH و طراحی GWAS.",
    traps: [
      "فقط برای MCQ آماده نشو؛ ۵ پاسخ کتبی توضیح فشرده می‌خواهند.",
      "پروژه را نادیده نگیر؛ فایل امتحان، تحویل پروژه و بخش مصاحبه/بحث پروژه را به نمره نهایی وصل می‌کند.",
    ],
    checklist: ["یک بار قبل از مرور آزمون تمرینی را باز کن.", "همه فرمول‌ها را برای تمرین همان روز علامت بزن.", "یک توضیح ۶۰ ثانیه‌ای از هدف و روش پروژه آماده کن."],
  },
  foundations: {
    title: "پایه‌های ژنتیک و ژنومیکس",
    remember:
      "Allele شکل جایگزین یک ژن/لocus است؛ HWE از p و q برای انتظار genotypeها استفاده می‌کند؛ این منطق پایه GWAS و ژنومیکس جمعیتی است.",
  },
  "ngs-technologies-i": { title: "فناوری‌های NGS I" },
  "ngs-technologies-ii": { title: "فناوری‌های NGS II" },
  "ngs-data-analysis": {
    title: "مبانی تحلیل داده NGS",
    remember:
      "مسیر کلیدی را بلد باش: FASTQ -> QC/trim -> BWA mapping -> SAM/BAM -> variant calling -> VCF. Phred، CIGAR، depth و breadth را جدا کن.",
  },
  assembly: {
    title: "مونتاژ ژنوم",
    remember:
      "Mapping با reference کار می‌کند؛ de novo از readها ژنوم را می‌سازد. Repeat، heterozygosity، read length، paired-end/mate-pair و N50 دام‌های اصلی‌اند.",
  },
  annotation: { title: "حاشیه‌نویسی ژنوم و پایگاه‌های داده" },
  applications: { title: "کاربردهای NGS و case studyها" },
  genotyping: { title: "ژنوتایپینگ پرظرفیت، SNP array و CNV" },
  "population-genomics": {
    title: "ژنومیکس جمعیتی",
    remember:
      "PLINK، allele/genotype frequency، PCA/MDS، ROH، inbreeding، FST و LD را به عنوان ابزارهای خواندن ساختار جمعیتی ببین.",
  },
  gwas: {
    title: "GWAS",
    remember:
      "GWAS یعنی آزمون ارتباط marker-trait در کل ژنوم. phenotype دقیق، sample size، population stratification و multiple testing تعیین‌کننده‌اند.",
  },
  "project-preparation": { title: "آماده‌سازی پروژه ژنومیک" },
  "final-cram": {
    title: "چک‌لیست فشرده دو روز آخر",
    remember:
      "تعریف‌ها، فرمول‌ها و تمرین‌ها را فعال بازیابی کن: N50، coverage و HWE را با عدد حل کن، فقط نخوان.",
  },
};

export function localizeAgSection(section, lang) {
  if (lang !== "fa") return section;
  const override = SECTION_FA[section.id];
  if (!override) return section;
  return { ...section, ...override };
}

export function localizeAgSections(sections, lang) {
  return sections.map((section) => localizeAgSection(section, lang));
}
