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
    languageNote: "نسخه فارسی برای مرور امتحان آماده شده است؛ بعضی اصطلاحات فنی مثل FASTQ، GWAS، VCF و BUSCO عمدا به انگلیسی نگه داشته شده‌اند.",
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
    bullets: [
      "Gene واحد وراثتی است؛ allele شکل جایگزین یک ژن یا locus است.",
      "Genotype ترکیب alleleهای فرد است؛ phenotype صفت مشاهده‌شده است.",
      "در جمعیت دیپلوئید، فراوانی allele از شمارش دو allele برای هر فرد به دست می‌آید.",
      "در HWE، فراوانی genotypeها با p²، 2pq و q² پیش‌بینی می‌شود.",
      "انحراف از HWE می‌تواند ناشی از ساختار جمعیتی، انتخاب، inbreeding یا خطای ژنوتایپینگ باشد.",
      "این مفاهیم پایه GWAS هستند: genotypeها با phenotypeها مقایسه می‌شوند.",
    ],
    remember:
      "تعریف‌ها را دقیق بلد باش، سپس تبدیل genotype count به allele frequency و expected HWE count را تمرین کن.",
  },
  "ngs-tech-i": {
    title: "فناوری‌های NGS I",
    bullets: [
      "Sanger sequencing بر chain termination با dideoxynucleotideها متکی است.",
      "Illumina یک روش short-read و high-throughput با reversible terminatorهاست.",
      "Workflow عمومی: آماده‌سازی نمونه -> library -> sequencing -> raw reads -> QC -> تحلیل.",
      "Read length، throughput و error profile تعیین می‌کنند کدام فناوری مناسب سؤال پژوهشی است.",
      "Short reads برای mapping، variant calling و بسیاری از تحلیل‌های جمعیتی عالی‌اند.",
      "برای de novo assembly پیچیده، short reads به‌تنهایی معمولا برای repeatهای بلند کافی نیستند.",
    ],
    remember:
      "در امتحان، پلتفرم‌ها را با read length، throughput، نوع خطا و کاربرد downstream مقایسه کن.",
    traps: [
      "Sanger را با sequencing by ligation اشتباه نگیر؛ ligation بیشتر با SOLiD مرتبط است.",
      "Illumina یعنی short reads پرظرفیت، نه ultra-long reads.",
    ],
  },
  "ngs-tech-ii": {
    title: "فناوری‌های NGS II",
    bullets: [
      "Roche 454 از pyrosequencing و تشخیص نور ناشی از PPi استفاده می‌کند.",
      "Ion Torrent تغییر pH ناشی از آزاد شدن H+ هنگام incorporation را تشخیص می‌دهد.",
      "ABI SOLiD با sequencing by ligation و two-base encoding شناخته می‌شود.",
      "PacBio و Oxford Nanopore long reads تولید می‌کنند.",
      "Long reads برای عبور از repeatها و بهبود de novo assembly مهم‌اند.",
      "انتخاب فناوری باید با سؤال، بودجه، genome complexity و هدف تحلیل هماهنگ باشد.",
    ],
    remember:
      "اگر سؤال درباره de novo assembly ژنوم پیچیده باشد، long reads معمولا پاسخ high-yield هستند؛ در MCQ نمونه، PacBio گزینه درست است.",
    traps: [
      "Ion Torrent را با pyrosequencing یکی ندان؛ Ion Torrent H+ را می‌سنجد، 454 نور/PPi را.",
      "SOLiD long-read نیست؛ ویژگی اصلی آن ligation و two-base/color-space است.",
    ],
  },
  "ngs-data-primers": {
    title: "مبانی تحلیل داده NGS",
    bullets: [
      "کیفیت DNA/RNA ورودی روی تمام مراحل downstream اثر می‌گذارد.",
      "FASTQ شامل read sequence و per-base quality score است.",
      "Phred score احتمال خطای base call را به مقیاس لگاریتمی تبدیل می‌کند.",
      "FastQC کیفیت readها را بررسی می‌کند؛ per-base sequence quality از مهم‌ترین ماژول‌هاست.",
      "Trimming وقتی لازم است که adapter، primer یا tail کم‌کیفیت تحلیل را خراب کند.",
      "BWA برای mapping short reads به reference genome استفاده می‌شود.",
      "SAM/BAM alignmentها را نگه می‌دارند؛ CIGAR operations alignment را خلاصه می‌کند.",
      "VCF variant و genotype را نگه می‌دارد؛ 0|1 یعنی heterozygous phased genotype.",
      "Coverage = (N x L) / G؛ depth را از breadth جدا کن.",
    ],
    remember:
      "برای Lecture 4، موفقیت امتحان یعنی شناخت دقیق file formatها، coverage، FastQC، trimming، BWA/SAM/BAM/CIGAR و VCF.",
    traps: [
      "FASTQ را با VCF اشتباه نگیر: FASTQ raw reads دارد، VCF variant calls.",
      "FastQC alignment انجام نمی‌دهد؛ فقط QC می‌کند.",
      "BAM نسخه binary/compressed از SAM است، نه فایل raw read.",
      "CIGAR کیفیت base نیست؛ عملیات alignment را توصیف می‌کند.",
      "Depth متوسط بالا تضمین نمی‌کند breadth هم خوب باشد.",
    ],
  },
  "genome-assembly": {
    title: "مونتاژ ژنوم",
    bullets: [
      "Mapping یعنی قرار دادن readها روی reference؛ de novo assembly یعنی ساختن genome بدون reference.",
      "Shotgun sequencing ژنوم را به fragmentهای زیاد می‌شکند و بعد computationally بازسازی می‌کند.",
      "Contig توالی پیوسته است؛ scaffold contigهایی است که با اطلاعات فاصله/جهت وصل شده‌اند.",
      "Paired-end و mate-pair اطلاعات linkage می‌دهند و به عبور از repeatها کمک می‌کنند.",
      "de Bruijn graph readها را به k-merها می‌شکند؛ بازسازی با Eulerian path/cycle مرتبط است.",
      "N50 طول contig/scaffoldای است که cumulative length را از ۵۰٪ کل assembly عبور می‌دهد.",
      "Homozygosity/inbreeding می‌تواند assembly را ساده‌تر کند چون heterozygous haplotig کمتر می‌شود.",
      "Repeat، heterozygosity، coverage ناکافی و genome complexity دام‌های اصلی assembly هستند.",
    ],
    remember:
      "Mapping با reference کار می‌کند؛ de novo از readها ژنوم را می‌سازد. Repeat، heterozygosity، read length، paired-end/mate-pair و N50 دام‌های اصلی‌اند.",
    traps: [
      "N50 کیفیت زیستی یا completeness را ثابت نمی‌کند؛ فقط contiguity را خلاصه می‌کند.",
      "Long contig همیشه یعنی assembly درست نیست.",
      "Short reads coverage زیاد می‌دهند اما repeatهای بلند را خوب bridge نمی‌کنند.",
      "Inbreeding sequencing error را حذف نمی‌کند؛ فقط heterozygosity زیستی را کم می‌کند.",
      "Assembly با annotation یکی نیست؛ annotation بعد از assembly می‌آید.",
      "de Bruijn graph را با Manhattan plot یا HWE قاطی نکن.",
    ],
  },
  "annotation-databases": {
    title: "حاشیه‌نویسی ژنوم و پایگاه‌های داده",
    bullets: [
      "Repeat annotation و masking جلوی gene prediction غلط در repeatها را می‌گیرد.",
      "Structural annotation جای ژن‌ها، exonها، intronها، UTRها و featureها را مشخص می‌کند.",
      "Functional annotation به featureهای پیش‌بینی‌شده نقش زیستی، domain، pathway یا GO term نسبت می‌دهد.",
      "BUSCO completeness را با conserved single-copy orthologs می‌سنجد.",
      "BUSCO خروجی‌هایی مثل complete، duplicated، fragmented و missing می‌دهد.",
      "Genome coverage با gene coverage یکی نیست.",
      "Assembly contiguous می‌تواند هنوز gene space ناقص داشته باشد.",
      "Annotation خوب به evidence از RNA-seq، protein homology و databaseها وابسته است.",
    ],
    remember:
      "برای Lecture 7، BUSCO و تفاوت structural vs functional annotation را کامل بلد باش؛ این‌ها مستقیم به کیفیت assembly و تفسیر زیستی وصل‌اند.",
    traps: [
      "BUSCO تعداد geneهای کل genome را نمی‌دهد؛ completeness را با orthologهای conserved می‌سنجد.",
      "Functional annotation جای ژن را پیدا نمی‌کند؛ نقش احتمالی آن را تفسیر می‌کند.",
      "Structural annotation به معنی structural variant نیست.",
      "Repeat masking optional تزئینی نیست؛ برای genomeهای پیچیده حیاتی است.",
      "N50 بالا جای BUSCO خوب را نمی‌گیرد.",
    ],
  },
  "ngs-applications": {
    title: "کاربردهای NGS و case studyها",
    bullets: [
      "Galaxy یک platform برای اجرای workflowهای bioinformatics بدون مدیریت مستقیم command line است.",
      "Pool-seq allele frequency را از read countهای گروهی تخمین می‌زند.",
      "RNA-seq expression و transcriptome را اندازه می‌گیرد.",
      "ChIP-seq binding site یا chromatin mark enriched region را پیدا می‌کند.",
      "Bisulfite sequencing methylation را با conversion cytosineهای unmethylated می‌خواند.",
      "Targeted sequencing فقط regionهای انتخاب‌شده را عمیق‌تر sequence می‌کند.",
      "هر روش را با input، سؤال زیستی، output و caveat حفظ کن.",
      "Outputها را قاطی نکن: RNA-seq count matrix، ChIP-seq peak، variant calling VCF.",
      "QC قبل و بعد از trimming یا processing باید تکرار شود.",
      "روش خوب بدون design درست و controls مناسب قابل تفسیر نیست.",
    ],
    remember:
      "برای هر application چهار چیز را حفظ کن: input material، biological question، main output و یک caveat.",
    traps: [
      "ChIP-seq expression را مستقیم اندازه نمی‌گیرد؛ enrichment/binding را نشان می‌دهد.",
      "RNA-seq SNP chip نیست؛ داده read/count تولید می‌کند.",
      "Pool-seq genotype individual نمی‌دهد مگر design مخصوص داشته باشی.",
      "Bisulfite C-to-T را به methylation ربط می‌دهد، نه mutation معمولی.",
      "Galaxy روش آماری نیست؛ platform/workflow environment است.",
    ],
    checklist: [
      "برای هر روش input را بگو.",
      "برای هر روش output را بگو.",
      "RNA-seq و ChIP-seq را قاطی نکن.",
      "Bisulfite را با methylation وصل کن.",
      "Pool-seq را با allele frequency گروهی وصل کن.",
      "Targeted sequencing را با region/depth وصل کن.",
      "بعد از QC دوباره نتیجه trimming را بررسی کن.",
    ],
  },
  "genotyping-cnvs": {
    title: "ژنوتایپینگ پرظرفیت، SNP array و CNV",
    bullets: [
      "SNP panel/chip مجموعه‌ای از markerهای از پیش تعریف‌شده را genotype می‌کند.",
      "Microarray برای genotyping تعداد زیاد sample ارزان‌تر و سریع‌تر از WGS کامل است.",
      "Illumina و Affymetrix نمونه‌های مهم platformهای array هستند.",
      "aCGH برای تشخیص copy number gain/loss از hybridization intensity استفاده می‌کند.",
      "CNV یعنی variation در تعداد کپی یک region ژنومی.",
      "Array-based approach markerهای predefined را می‌بیند؛ sequencing-based approach read-level discovery می‌دهد.",
      "Marker density و LD تعیین می‌کنند chip چقدر trait/variant را tag می‌کند.",
    ],
    remember:
      "تمایز را تمیز نگه دار: SNP chip = markerهای از پیش تعریف‌شده؛ WGS = discovery بر پایه read؛ aCGH = تشخیص CNV با microarray.",
    traps: [
      "SNP chip کل genome را base-by-base sequence نمی‌کند.",
      "aCGH برای resequencing نیست؛ copy number را از intensity می‌سنجد.",
      "CNV همان SNP نیست؛ structural/copy-number variation است.",
      "Marker زیادتر همیشه بهتر نیست؛ هزینه و multiple testing هم بالا می‌رود.",
    ],
    checklist: [
      "SNP chip را با predefined marker توضیح بده.",
      "aCGH را با copy number وصل کن.",
      "CNV را از SNP جدا کن.",
      "Array و sequencing را از نظر discovery مقایسه کن.",
      "به sample size و هزینه فکر کن.",
    ],
  },
  "population-genomics": {
    title: "ژنومیکس جمعیتی، LD، ROH و PLINK",
    bullets: [
      "PLINK PED/MAP و BED/BIM/FAM برای داده‌های genotype و metadata استفاده می‌شوند.",
      "Allele/genotype frequency پایه QC، HWE و population comparison است.",
      "PCA/MDS ساختار جمعیتی و clusterهای ancestry را نشان می‌دهد.",
      "ROH regionهای طولانی homozygosity هستند و می‌توانند inbreeding یا shared ancestry را نشان دهند.",
      "Inbreeding معمولا heterozygosity را کم و homozygosity را زیاد می‌کند.",
      "FST differentiation بین populationها را خلاصه می‌کند.",
      "LD association غیرتصادفی بین alleleهای loci مختلف در یک جمعیت است.",
      "QC marker/sample برای جلوگیری از cluster یا association غلط ضروری است.",
      "Population structure می‌تواند GWAS false positive بسازد.",
    ],
    remember:
      "Population genomics درباره ساختار و تاریخ ژنتیکی است؛ GWAS درباره association genotype-phenotype. LD، MDS و ROH پل بین این دو هستند.",
    traps: [
      "LD همان linkage خانوادگی نیست؛ LD correlation در سطح جمعیت است.",
      "PCA/MDS علت زیستی را ثابت نمی‌کند؛ structure را نشان می‌دهد.",
      "ROH یعنی homozygous stretch، نه region بدون coverage.",
      "FST differentiation است، نه p-value association.",
      "HWE failure همیشه biology نیست؛ genotyping error هم ممکن است.",
    ],
    checklist: [
      "PED/MAP و BED/BIM/FAM را بشناس.",
      "Allele frequency را از genotype count حساب کن.",
      "PCA/MDS را با structure وصل کن.",
      "ROH را با homozygosity/inbreeding وصل کن.",
      "LD را با allele correlation تعریف کن.",
      "FST را با differentiation تعریف کن.",
      "QC را قبل از interpretation توضیح بده.",
      "Population structure را به GWAS false positive وصل کن.",
    ],
  },
  gwas: {
    title: "GWAS: طراحی، نمودارها و تحلیل پس از GWAS",
    bullets: [
      "هدف GWAS پیدا کردن genetic variantهای associated با phenotype است.",
      "Design می‌تواند case/control یا quantitative trait باشد.",
      "Phenotype دقیق و consistent برای power و interpretation حیاتی است.",
      "LD باعث می‌شود marker نزدیک causal variant association نشان دهد.",
      "Sample size کم power را پایین می‌آورد و نتایج ناپایدار می‌دهد.",
      "Population stratification می‌تواند false association بسازد.",
      "Multiple testing correction ضروری است؛ Bonferroni = alpha / number of tests.",
      "Manhattan plot signalهای genome-wide را نشان می‌دهد؛ QQ plot inflation/stratification را بررسی می‌کند.",
    ],
    remember:
      "برای هر پاسخ GWAS این pipeline را بنویس: phenotype -> genotype -> QC -> correction for structure -> association model -> multiple testing -> Manhattan/QQ -> candidate genes/ORA -> replication.",
    traps: [
      "Significant SNP لزوما causal variant نیست؛ ممکن است به خاطر LD marker باشد.",
      "بدون multiple testing، false positive زیاد می‌شود.",
      "Population structure حتی با genotype خوب هم association غلط می‌سازد.",
      "Manhattan plot gene function را ثابت نمی‌کند.",
      "ORA به candidate gene list و background انتخاب‌شده حساس است.",
    ],
    checklist: [
      "هدف GWAS را یک جمله‌ای بگو.",
      "Phenotype definition را ذکر کن.",
      "QC sample/marker را ذکر کن.",
      "Population structure را با PCA/MDS/covariate کنترل کن.",
      "Bonferroni threshold را بلد باش.",
      "Manhattan و QQ plot را تفسیر کن.",
      "Candidate gene prioritization را بعد از association بگذار.",
      "Replication/validation را فراموش نکن.",
    ],
  },
  "project-preparation": {
    title: "آماده‌سازی پروژه ژنومیک و منطق دفاع شفاهی",
    bullets: [
      "Project باید question/aim روشن داشته باشد.",
      "Sample design باید با biology، budget و statistical power سازگار باشد.",
      "Method choice باید با expected output و سؤال پژوهشی جور باشد.",
      "Materials and methods باید واقع‌گرایانه و قابل اجرا باشد.",
      "Expected results فقط wishful thinking نیست؛ باید نشان دهد چه چیزی قابل تفسیر خواهد بود.",
      "Cost table باید platform، sequencing/genotyping، analysis و محدودیت بودجه را در نظر بگیرد.",
      "در oral/interview باید بتوانی چرا این design را انتخاب کردی توضیح بدهی.",
    ],
    remember:
      "پروژه خوب یک زنجیره است: question -> design -> samples -> technology -> analysis -> expected result -> budget. اگر یک حلقه مبهم باشد، در oral آسیب‌پذیر می‌شود.",
    traps: [
      "روش گران را بدون justification انتخاب نکن.",
      "Aim کلی مثل 'study genome' کافی نیست.",
      "Expected result را با result قطعی اشتباه نگیر.",
      "Budget را از design جدا ننویس؛ بودجه باید انتخاب روش را توضیح دهد.",
    ],
    checklist: [
      "Aim را در یک جمله بگو.",
      "Organism/sample را مشخص کن.",
      "Technology را با دلیل انتخاب کن.",
      "Analysis workflow را مرحله‌ای بنویس.",
      "Budget و expected output را هماهنگ کن.",
    ],
  },
  "cram-checklist": {
    title: "چک‌لیست فشرده دو روز آخر",
    bullets: [
      "تعریف‌های must-know: allele، FASTQ، SAM/BAM، VCF، CIGAR، BUSCO، LD، ROH، GWAS، ORA.",
      "فرمول‌های must-know: coverage، N50، HWE و Bonferroni.",
      "تمرین‌های must-practice: N50، coverage، HWE و تفسیر FastQC.",
      "Workflowها را به ترتیب حفظ کن: FASTQ-to-VCF، assembly-to-annotation، GWAS-to-ORA.",
      "دام‌های استاد را مرور کن: distractorهای مشابه technology/file/plot.",
    ],
    remember:
      "تعریف‌ها، فرمول‌ها و تمرین‌ها را فعال بازیابی کن: N50، coverage و HWE را با عدد حل کن، فقط نخوان.",
    traps: [
      "کل slide deck را مثل textbook نخوان؛ تمرین retrieval مهم‌تر است.",
      "فرمول را حفظ نکن بدون حل عددی.",
      "File formatها را با outputهای analysis قاطی نکن.",
      "Plot interpretation را فقط با اسم plot جواب نده.",
      "Project را برای oral جدا از written exam آماده نکن.",
    ],
    checklist: [
      "یک بار همه sectionها را سریع مرور کن.",
      "Coverage را با یک مثال عددی حل کن.",
      "N50 را با contig list حل کن.",
      "HWE را با genotype count حل کن.",
      "۱۰ MCQ تمرینی بزن و غلط‌ها را به section برگردان.",
      "یک پاسخ کوتاه برای BUSCO/GWAS/FASTQ-to-VCF بنویس.",
      "Project aim و method choice را بلند توضیح بده.",
    ],
  },
};

export function localizeAgSection(section, lang) {
  if (lang !== "fa") return section;
  const override = SECTION_FA[section.id];
  const localized = override ? { ...section, ...override } : section;
  return {
    ...localized,
    studyBlocks: localizeStudyBlocks(localized, section.studyBlocks || []),
    formulas: localizeFormulas(localized, section.formulas || []),
    exercises: localizeExercises(localized, section.exercises || []),
  };
}

export function localizeAgSections(sections, lang) {
  return sections.map((section) => localizeAgSection(section, lang));
}

function localizeStudyBlocks(section, blocks) {
  if (!blocks.length) return blocks;
  return blocks.map((block, index) => ({
    ...block,
    title: faBlockTitle(section, block, index),
    what: faBlockWhat(section, block),
    why: faBlockWhy(section, block),
    examFocus: faBlockExamFocus(section, block),
    answerTemplate: faBlockAnswer(section, block),
    traps: block.traps?.length ? block.traps.map((trap) => faTrapText(section, trap)) : block.traps,
    exercise: block.exercise ? faExercise(section, block.exercise) : block.exercise,
  }));
}

function localizeFormulas(section, formulas) {
  return formulas.map((formula) => ({
    ...formula,
    title: faFormulaTitle(formula.title),
    variables: (formula.variables || []).map((variable) => faFormulaVariable(variable)),
    example: faFormulaExample(section, formula),
  }));
}

function localizeExercises(section, exercises) {
  return exercises.map((exercise) => faExercise(section, exercise));
}

function faBlockTitle(section, block, index) {
  const label = block.slide ? `اسلاید ${index + 1}` : `تمرین ${index + 1}`;
  return `${label}: ${section.title}`;
}

function faBlockWhat(section, block) {
  const keyword = faKeyword(block.title || section.title);
  return `این بلوک نکته‌ی اصلی «${keyword}» را برای ${section.title} خلاصه می‌کند. هنگام مرور، اول تصویر اسلاید اصلی و source badge را نگاه کن، بعد این نکته را به تعریف، فایل، فناوری، نمودار یا فرمول مربوط وصل کن.`;
}

function faBlockWhy(section, block) {
  if (!block.why && !block.examFocus) return null;
  return `اهمیت امتحانی آن این است که استاد معمولا بین مفاهیم نزدیک دام می‌گذارد. برای پاسخ کوتاه، فقط اسم اصطلاح را ننویس؛ ورودی، خروجی، دلیل استفاده و یک محدودیت یا caveat را هم اضافه کن.`;
}

function faBlockExamFocus(section, block) {
  if (!block.examFocus) return null;
  return `تمرکز امتحانی: بتوانی این نکته را در یک یا دو جمله توضیح بدهی و آن را از distractorهای مشابه جدا کنی. اگر سؤال محاسباتی است، فرمول و واحدها را مرحله‌ای بنویس.`;
}

function faBlockAnswer(section, block) {
  if (!block.answerTemplate) return null;
  return `قالب پاسخ: تعریف کوتاه بده، سپس بگو داده‌ی ورودی چیست، خروجی چیست و چرا برای مسئله‌ی applied genomics مهم است. در پایان یک هشدار کوتاه مثل خطا، bias، coverage، population structure یا محدودیت platform اضافه کن.`;
}

function faTrapText(section, trap) {
  return `دام امتحانی مرتبط با ${section.title}: مفاهیم مشابه را با هم عوض نکن و همیشه تعریف دقیق، فایل/خروجی یا کاربرد را چک کن.`;
}

function faExercise(section, exercise) {
  const prompt = exercise.prompt || exercise.question || "";
  if (/N50/i.test(prompt)) {
    return {
      ...exercise,
      prompt: "N50 را برای contigها حساب کن و نشان بده کدام contig از آستانه ۵۰٪ عبور می‌کند.",
      answer: "روش حل: contigها را از بلندترین به کوتاه‌ترین مرتب کن، طول کل assembly را جمع بزن، نصف آن را پیدا کن و cumulative sum را جلو ببر. طول contigای که cumulative sum را از نصف کل عبور می‌دهد N50 است. N50 فقط contiguity را می‌سنجد، نه correctness یا completeness.",
    };
  }
  if (/coverage|depth/i.test(prompt)) {
    return {
      ...exercise,
      prompt: "Coverage/depth را با فرمول coverage = (N x L) / G حساب کن.",
      answer: "روش حل: تعداد readها را در طول read ضرب کن تا bases sequenced به دست آید، سپس بر اندازه haploid genome تقسیم کن. نتیجه average depth است؛ breadth of coverage چیز دیگری است و نشان می‌دهد چه نسبتی از genome واقعا پوشش گرفته است.",
    };
  }
  if (/Hardy|HWE|p and q|allele/i.test(prompt)) {
    return {
      ...exercise,
      prompt: "Allele frequency و Hardy-Weinberg expected genotype count را محاسبه کن.",
      answer: "روش حل: در diploidها total alleles = 2N است. Homozygote دو copy از همان allele می‌دهد و heterozygote یک copy از هر allele. بعد p و q را حساب کن و expected genotype frequencies را با p²، 2pq و q² به دست آور. برای expected counts، هر frequency را در تعداد افراد ضرب کن.",
    };
  }
  if (/Bonferroni|threshold/i.test(prompt)) {
    return {
      ...exercise,
      prompt: "آستانه Bonferroni را برای تعداد markerهای داده‌شده حساب کن.",
      answer: "روش حل: alpha را بر تعداد testها تقسیم کن. این روش ساده و محافظه‌کارانه است، چون در GWAS بسیاری از SNPها به خاطر LD کاملا مستقل نیستند.",
    };
  }
  return {
    ...exercise,
    prompt: `تمرین کوتاه برای ${section.title}: مفهوم را بدون نگاه کردن در دو جمله توضیح بده.`,
    answer: `پاسخ خوب باید تعریف دقیق، ورودی/خروجی، کاربرد در applied genomics و یک caveat امتحانی را شامل شود. اصطلاحات فنی مثل FASTQ، VCF، GWAS، BUSCO یا N50 را اگر لازم است به انگلیسی نگه دار.`,
  };
}

function faFormulaTitle(title = "") {
  if (/coverage|depth/i.test(title)) return "فرمول coverage / depth";
  if (/Hardy|HWE/i.test(title)) return "فرمول Hardy-Weinberg";
  if (/N50/i.test(title)) return "فرمول/روش N50";
  if (/Bonferroni/i.test(title)) return "فرمول Bonferroni";
  if (/FST|F_ST/i.test(title)) return "فرمول FST";
  return "فرمول امتحانی";
}

function faFormulaVariable(variable = "") {
  if (/N/i.test(variable) && /read/i.test(variable)) return "N = تعداد readها";
  if (/L/i.test(variable) && /length/i.test(variable)) return "L = طول read";
  if (/G/i.test(variable) && /genome/i.test(variable)) return "G = اندازه genome";
  if (/p/i.test(variable) && /q/i.test(variable)) return "p و q = فراوانی alleleها";
  return variable
    .replace("where", "که در آن")
    .replace("coverage", "coverage")
    .replace("genome size", "اندازه genome")
    .replace("read length", "طول read")
    .replace("number of reads", "تعداد readها");
}

function faFormulaExample(section, formula) {
  if (/coverage|depth/i.test(formula.title || formula.expression || "")) {
    return "مثال امتحانی: اگر ۱۰۰ میلیون read با طول ۱۰۰ bp برای genome یک Gbp داشته باشی، bases sequenced برابر ۱۰ Gbp است و depth متوسط 10x می‌شود.";
  }
  if (/Hardy|HWE/i.test(formula.title || formula.expression || "")) {
    return "مثال امتحانی: بعد از محاسبه p و q، expected genotypeها را با p²، 2pq و q² حساب کن و با observed count مقایسه کن.";
  }
  if (/Bonferroni/i.test(formula.title || formula.expression || "")) {
    return "مثال امتحانی: اگر alpha = 0.05 و یک میلیون marker تست شود، threshold برابر 5e-8 است.";
  }
  return `این فرمول را در زمینه‌ی ${section.title} با واحدها و تفسیر کوتاه بنویس.`;
}

function faKeyword(text = "") {
  return text
    .replace(/Gene, allele, genotype and phenotype/i, "gene، allele، genotype و phenotype")
    .replace(/Hardy-Weinberg equilibrium/i, "Hardy-Weinberg equilibrium")
    .replace(/Sanger/i, "Sanger sequencing")
    .replace(/Illumina/i, "Illumina sequencing")
    .replace(/Ion Torrent/i, "Ion Torrent")
    .replace(/FASTQ/i, "FASTQ")
    .replace(/FastQC/i, "FastQC")
    .replace(/BWA/i, "BWA")
    .replace(/SAM\/BAM/i, "SAM/BAM")
    .replace(/VCF/i, "VCF")
    .replace(/N50/i, "N50")
    .replace(/BUSCO/i, "BUSCO")
    .replace(/GWAS/i, "GWAS")
    .replace(/Manhattan/i, "Manhattan plot")
    .replace(/Population structure/i, "population structure");
}
