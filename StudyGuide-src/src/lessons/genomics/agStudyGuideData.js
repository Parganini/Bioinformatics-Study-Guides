import { AG_SLIDE_SELECTION } from "./agSources.js";

const slideById = Object.fromEntries(AG_SLIDE_SELECTION.map((slide) => [slide.id, slide]));

export const AG_PROGRESS_KEY = "ag_progress_v1";

export const AG_GUIDE_SECTIONS = [
  {
    id: "exam-orientation",
    number: 0,
    title: "Exam orientation",
    sources: ["Final_exam.pdf", "Introduction to the course.pdf", "Applied Genomics - examples of questions.docx"],
    slides: ["final-exam-format"],
    bullets: [
      "Written exam: 30 questions in 60 minutes, with 25 close-answer multiple-choice questions and 5 short written-answer questions.",
      "The written-test pass condition is at least 22 correct answers out of 30 and submission of the genomic project.",
      "The final evaluation is split between the written test and the interview/project discussion.",
      "Multiple-choice prep should focus on distinguishing file formats, technologies, plots and analysis outputs.",
      "Short-answer prep should focus on explaining a workflow, defining why a method is used, and doing small calculations quickly.",
    ],
    remember: "For the next 2 days, spend most time on terms that can be confused and exercises that can be graded objectively: coverage, N50, HWE, Manhattan plots, PLINK files and CNV/aCGH.",
    traps: [
      "Do not prepare only for MCQs. The 5 written answers reward compact explanations, not memorized slide text.",
      "Do not ignore the project. The exam file ties written-test eligibility to project submission and the interview/project part affects the final score.",
    ],
    checklist: ["Open the practice exam once before reviewing.", "Mark all formulas for a same-day redo.", "Prepare a 60-second explanation of your project aim and method choice."],
  },
  {
    id: "foundations",
    number: 1,
    title: "Foundations of genetics and genomics",
    sources: ["Introduction to the course.pdf", "Lecture 1.pdf"],
    slides: ["lecture01-hwe"],
    bullets: [
      "Gene: DNA unit with a biological function; allele: variant form of a locus; genotype: allele combination; phenotype: observable trait.",
      "Population genetics connects allele/genotype frequencies to evolutionary forces and is the bridge into population genomics.",
      "Hardy-Weinberg equilibrium uses p + q = 1 and p^2 + 2pq + q^2 = 1 under assumptions such as random mating, no selection, no migration and large population size.",
      "HWE matters in genomics because deviations can signal biology, population structure, genotyping problems or selection.",
      "GWAS and population genomics depend on comparing genetic variation across many individuals, not just one genome sequence.",
    ],
    remember: "Know the definitions cold, then practice converting genotype counts into allele frequencies and expected HWE counts.",
    formulas: [
      {
        title: "Hardy-Weinberg equilibrium",
        expression: "p + q = 1; expected genotypes = p^2, 2pq, q^2",
        variables: ["p = frequency of allele A", "q = frequency of allele a", "N = number of diploid individuals"],
        example: "If p = 0.6 and q = 0.4 in 1000 individuals, expected AA = 360, Aa = 480, aa = 160.",
      },
    ],
    exercises: [
      {
        prompt: "Sample-question drill: 500 AA, 200 Aa, 300 aa. Calculate p and q.",
        answer: "Total alleles = 2000. A alleles = 2*500 + 200 = 1200, so p = 0.60. a alleles = 800, so q = 0.40.",
      },
    ],
  },
  {
    id: "ngs-tech-i",
    number: 2,
    title: "NGS technologies I",
    sources: ["lecture 2.pdf", "lecture 3.pdf", "Transcript AG - 25-11-12 Mod_1"],
    slides: ["lecture03-illumina-sbs"],
    bullets: [
      "Sanger sequencing uses chain termination and is lower throughput; NGS parallelizes sequencing to generate many reads at once.",
      "Illumina sequencing by synthesis uses library preparation, cluster generation, reversible terminators, imaging and base calling.",
      "Illumina short reads are high throughput and generally accurate, but read length is limited and errors rise toward later cycles.",
      "Sequencing workflow vocabulary: sample/DNA quality, library, flow cell, reads, quality scores, alignment, variant calling.",
      "Instrument choice affects cost, throughput, read length, error profile, maintenance and downstream analysis.",
    ],
    remember: "For exam answers, compare platforms by read length, throughput, error type and the downstream question they support.",
    professorNote: {
      source: "Transcript AG - 25-11-12 Mod_1",
      text: "The professor emphasized that sequencing is not just buying an instrument: maintenance, technical support and service-provider planning are part of real applied genomics.",
    },
    traps: [
      "Illumina does not read one isolated molecule directly; clusters amplify the signal.",
      "Do not describe all NGS platforms as having the same error profile.",
    ],
  },
  {
    id: "ngs-tech-ii",
    number: 3,
    title: "NGS technologies II",
    sources: ["lecture 3.pdf", "Transcript AG - 25-11-12 Mod_1"],
    slides: ["lecture03-long-reads"],
    bullets: [
      "Roche 454 uses pyrosequencing; Ion Torrent detects H+ release and is classically vulnerable around homopolymers.",
      "ABI SOLiD uses ligation and two-base encoding; know it as a historical short-read platform rather than a current default choice.",
      "PacBio SMRT sequencing reads single molecules in zero-mode waveguides; circular consensus sequencing/HiFi improves accuracy by repeated passes.",
      "Oxford Nanopore reads current changes as DNA or RNA passes through pores; it is portable and can produce very long reads.",
      "Long reads are useful for de novo assembly because they span repeats and provide larger pieces of the genome puzzle.",
    ],
    remember: "If the question says de novo assembly of a complex genome, long reads are usually the high-yield answer.",
    professorNote: {
      source: "Transcript AG - 25-11-12 Mod_1",
      text: "Long reads were framed as larger puzzle pieces: rougher at first, but extremely useful for placing repetitive regions, then polishable with accurate short reads.",
    },
    traps: [
      "PacBio and Nanopore are both long-read technologies, but their signal generation is different.",
      "Nanopore portability is a practical project-design point, not just a technical curiosity.",
    ],
  },
  {
    id: "ngs-data-primers",
    number: 4,
    title: "NGS data analysis primers",
    sources: ["Lecture 4.pdf", "Lecture 8.pdf", "Applied Genomics - examples of questions.docx"],
    slides: ["lecture02-fastq-format", "lecture04-fastqc-quality", "lecture04-sam-cigar"],
    bullets: [
      "Start with DNA purity, integrity and enough material; poor input limits library choice and data quality.",
      "FASTQ stores read identifier, sequence, separator and encoded quality line; Phred Q = -10 log10(Perror).",
      "FastQC per-base sequence quality helps decide whether 3-prime trimming is needed; overrepresented sequences can indicate primers/adapters.",
      "BWA/Bowtie map reads to a reference; SAM/BAM store alignments; CIGAR summarizes match, insertion, deletion and clipping patterns.",
      "VCF stores variant calls; genotype notation such as 0|1 means phased heterozygous alleles relative to REF/ALT.",
      "Depth asks how many reads cover a base; breadth asks what fraction of the genome is covered.",
    ],
    remember: "A common exam pattern is 'which file contains what?' FASTQ = reads/qualities, SAM/BAM = alignments, VCF = variants, BED/GFF = genomic features.",
    formulas: [
      {
        title: "Sequencing coverage",
        expression: "coverage = (N x L) / G",
        variables: ["N = number of reads", "L = read length", "G = genome size"],
        example: "100,000,000 reads x 100 bp / 1,000,000,000 bp = 10x coverage.",
      },
    ],
    exercises: [
      {
        prompt: "A sample has 35,358 deduplicated reads averaging about 212 bp for a 16,679 bp mitochondrial genome. Estimate depth.",
        answer: "Depth is roughly (35,358 x 212) / 16,679 = about 449x. Using the deck's rounded data gives about 500x.",
      },
    ],
    traps: ["Do not confuse a SAM alignment file with a VCF variant file; the sample questions explicitly test this."],
  },
  {
    id: "genome-assembly",
    number: 5,
    title: "Genome assembly",
    sources: ["Lecture 6.pdf", "Applied Genomics - examples of questions.docx"],
    slides: ["lecture06-dbg", "lecture06-n50"],
    bullets: [
      "Mapping aligns reads to an existing reference; de novo assembly reconstructs a genome without relying on a close reference.",
      "Shotgun sequencing fragments DNA, sequences many pieces and assembles them by overlap or graph logic.",
      "Contigs are contiguous assembled sequences; scaffolds order/orient contigs and may contain gaps represented by Ns.",
      "Paired-end and mate-pair information can bridge repeats because both read ends come from the same physical fragment.",
      "de Bruijn graphs split reads into k-mers; assembly becomes finding an Eulerian path through edges.",
      "Inbreeding/homozygosity can simplify assembly because highly heterozygous regions may assemble separately and fragment the assembly.",
    ],
    remember: "N50 measures contiguity, not correctness. A high N50 from a misassembled genome can still be bad.",
    formulas: [
      {
        title: "N50",
        expression: "Sort contigs longest to shortest; add lengths until reaching at least 50% of total assembly length.",
        variables: ["Total assembly length = sum of contigs", "N50 = length of the contig that crosses the halfway point"],
        example: "Contigs 100, 70, 60, 50, 50, 40, 30 kb sum to 400 kb; halfway is 200 kb; 100 + 70 + 60 crosses 200, so N50 = 60 kb.",
      },
    ],
    professorNote: {
      source: "Transcript AG - 25-11-12 Mod_1",
      text: "Paired-end reads were emphasized as physically linked: even if the middle is not sequenced, the two ends still help place fragments.",
    },
  },
  {
    id: "annotation-databases",
    number: 6,
    title: "Genome annotation and databases",
    sources: ["Lecture 7.pdf"],
    slides: ["lecture07-busco", "lecture07-gff"],
    bullets: [
      "Annotation assigns roles to genome sequence: repeats, genes, transcripts, regulatory features and functional meaning.",
      "Repeat annotation and masking come first because unmasked repeats can create false gene-prediction evidence.",
      "Structural annotation asks where genes/transcripts are and what their exon-intron structures look like.",
      "Functional annotation assigns meaning using similarity, domains, GO terms and databases such as UniProt or HMM resources.",
      "BUSCO estimates completeness using expected single-copy orthologs and reports complete, duplicated, fragmented and missing genes.",
      "Genome coverage and gene coverage differ because repeats are often hard to assemble while gene-rich regions can be more complete.",
    ],
    remember: "BUSCO is about completeness; GFF/GTF/BED are annotation feature formats, not raw reads.",
    traps: ["Do not use N50 alone to judge annotation readiness; gene coverage and BUSCO can tell a different story."],
  },
  {
    id: "ngs-applications",
    number: 7,
    title: "NGS applications and case studies",
    sources: ["Lecture 8.pdf", "Lecture 9.pdf", "Applied Genomics - examples of questions.docx"],
    slides: ["lecture08-galaxy-workflow", "lecture09-ngs-applications"],
    bullets: [
      "Galaxy is a web platform for accessible, reproducible and transparent analyses; the case study workflow goes FASTQ QC, trimming, BWA mapping, duplicate removal, variant calling and VEP annotation.",
      "Pool-seq sequences pooled individuals and estimates allele-frequency differences cost-effectively.",
      "Targeted sequencing and WES focus sequencing effort on selected regions, genes or exons.",
      "Bisulfite sequencing studies methylation, but C-to-T conversion must be interpreted carefully with SNPs.",
      "ChIP-seq identifies DNA regions bound by a protein or carrying a histone mark; RNA-seq measures transcript abundance and transcript structure.",
    ],
    remember: "For each application, answer: input material, biological question, main output and one analysis caveat.",
    traps: [
      "ChIP-seq is not an expression assay; it maps protein-DNA interactions or chromatin marks.",
      "RNA-seq reads usually need alignment/counting/normalization before expression interpretation.",
    ],
  },
  {
    id: "genotyping-cnvs",
    number: 8,
    title: "High-throughput genotyping, SNP arrays and CNVs",
    sources: ["Lecture 11.pdf", "Lecture 12.pdf", "Lecture 14.pdf", "Applied Genomics - examples of questions.docx"],
    slides: ["lecture11-acgh"],
    bullets: [
      "High-throughput genotyping determines genotypes at many polymorphic loci and powers GWAS, genomic selection, MAS/MAB, parentage and population genomics.",
      "Microarrays are used for large-scale genotyping because per-sample cost is low, throughput is scalable and data quality is standardized.",
      "Illumina/Affymetrix-style SNP chips call genotypes from probe signal intensity and clustering.",
      "aCGH compares labeled test and reference DNA on an array to detect copy-number gains and losses.",
      "CNVs can also be detected from sequencing using read-pair, split-read, read-depth or assembly-based approaches.",
      "Array-based genotyping assays known sites; sequencing-based approaches can discover new variants but are typically more data-intensive.",
    ],
    remember: "aCGH is a microarray-based CNV method. CNV does not automatically mean sequencing.",
    traps: ["The sample questions explicitly test that aCGH is used to detect CNVs using microarray technology."],
  },
  {
    id: "population-genomics",
    number: 9,
    title: "Population genomics",
    sources: ["Lecture 10.pdf", "Lecture 11.pdf", "Lecture 12.pdf", "Lecture 14.pdf"],
    slides: ["lecture10-plink-files", "lecture12-roh"],
    bullets: [
      "PLINK text input uses PED for individuals/genotypes/phenotypes and MAP for marker positions; binary input uses BED/BIM/FAM.",
      "QC filters include missing samples (`--mind`), missing SNPs (`--geno`), minor allele frequency (`--maf`) and HWE p-value (`--hwe`).",
      "Allele/genotype frequencies and HWE output are first-pass checks before downstream population analyses.",
      "MDS/PCA-like dimension reduction compresses many SNPs into axes that reveal population structure.",
      "ROH are uninterrupted homozygous chromosome stretches; FROH = total ROH length / autosomal genome length.",
      "FST measures population differentiation; LD measures non-random allele association at loci.",
    ],
    remember: "Population structure is both a biological result and a confounder for GWAS.",
    formulas: [
      {
        title: "Genomic inbreeding from ROH",
        expression: "FROH = SROH / LGEN",
        variables: ["SROH = summed ROH length for an individual", "LGEN = autosomal genome length considered"],
        example: "If ROH sum to 420 Mb and autosomal length is 2800 Mb, FROH = 0.15.",
      },
    ],
  },
  {
    id: "gwas",
    number: 10,
    title: "GWAS",
    sources: ["Lecture 11.pdf", "Lecture 12.pdf", "Lecture 13.pdf", "Lecture 14.pdf", "Applied Genomics - examples of questions.docx"],
    slides: ["lecture13-gwas-design", "lecture13-manhattan", "lecture13-ora", "lecture14-plink-gwas"],
    bullets: [
      "GWAS tests genetic variants across many individuals to find genotype-phenotype associations.",
      "Design starts with phenotype definition: case/control for binary traits or quantitative models for continuous traits.",
      "LD lets tag SNPs represent nearby causal variants, but it also means association is not automatically causation.",
      "Sample size, allele frequency, effect size, LD with the tested marker and multiple testing drive statistical power.",
      "Population stratification can create false associations; inspect MDS/PCA and QQ plots and use appropriate covariates/models.",
      "Manhattan plots show genomic position vs -log10(P); QQ plots diagnose inflation; Bonferroni uses alpha/N.",
      "Post-GWAS work prioritizes nearby/candidate genes, uses databases and can run ORA to test over-represented functions.",
    ],
    remember: "A good GWAS answer includes phenotype, genotype platform, QC, association model, population-structure correction, multiple testing and post-GWAS interpretation.",
    formulas: [
      {
        title: "Bonferroni correction",
        expression: "threshold = alpha / N",
        variables: ["alpha = desired experiment-wise error rate", "N = number of tests"],
        example: "For alpha = 0.05 and 20 SNPs, threshold = 0.0025.",
      },
    ],
    traps: [
      "The y-axis of a Manhattan plot is -log10(P), not raw genomic position or effect size.",
      "A significant tag SNP may be a proxy in LD with the causal variant.",
    ],
  },
  {
    id: "project-preparation",
    number: 11,
    title: "Genomic project preparation",
    sources: ["PlanningGenomicProject.pdf", "Final_exam.pdf", "Introduction to the course.pdf", "Transcript AG - 25-11-12 Mod_1"],
    slides: ["project-design"],
    bullets: [
      "The project should include introduction/problem, aim, materials and methods, expected results/impact and a cost table.",
      "The budget should cover sampling, DNA extraction, sequencing/high-throughput genotyping outsourcing and computational costs when relevant.",
      "Aim, budget, methods and expected results must fit each other; a too-large aim with a small budget is a design failure.",
      "For complex genomes, justify sample choice, DNA/RNA quality, sequencing platform, coverage, assembly/annotation or variant workflow and computing resources.",
      "For GWAS, justify phenotype definition, sample size, heritability, stratification control, genotyping/sequencing choice and post-GWAS analysis.",
      "The oral/interview can use the project as a starting point, so every method choice should have a one-sentence reason.",
    ],
    remember: "The project is not a shopping list. It is an argument that the design can answer the biological question within budget.",
    professorNote: {
      source: "Transcript AG - 25-11-12 Mod_1",
      text: "Applied genomics was framed as practical work: permissions, sample movement, field constraints and budget can decide which technology is realistic.",
    },
    traps: ["Do not plan a complex reference genome without considering DNA quality, long reads, coverage, repeats, heterozygosity and compute resources."],
  },
  {
    id: "cram-checklist",
    number: 12,
    title: "Final 2-day cram checklist",
    sources: ["Final_exam.pdf", "Applied Genomics - examples of questions.docx", "All lecture PDFs"],
    slides: [],
    bullets: [
      "Day 1: read sections 0-7 and immediately redo coverage, HWE and N50 without looking.",
      "Day 1 evening: practice explaining FASTQ, SAM/BAM, VCF, CIGAR, FastQC and BWA in one sentence each.",
      "Day 2 morning: read sections 8-11 and drill PLINK files, ROH/FROH, aCGH/CNV, GWAS design and plot interpretation.",
      "Day 2 afternoon: take the practice exam, then review wrong options as distractor training.",
      "Final hour: rehearse project aim, method choice, budget logic and expected result.",
    ],
    remember: "If time is tight, prioritize terms that appear in the sample questions and concepts that connect multiple lectures.",
    checklist: [
      "Definitions: gene, allele, genotype, phenotype, SNP, CNV, LD, ROH, FST, BUSCO.",
      "Formats: FASTQ, SAM/BAM, VCF, GFF/BED, PED/MAP, BED/BIM/FAM.",
      "Formulas: coverage, HWE, N50, Bonferroni, FROH.",
      "Plots: FastQC per-base quality, Manhattan plot, QQ plot, MDS/PCA scatter, aCGH log2 ratio.",
      "Methods: Sanger, Illumina, Ion Torrent, SOLiD, PacBio, Nanopore, Pool-seq, RNA-seq, ChIP-seq, bisulfite-seq, WES.",
    ],
    traps: [
      "Long reads are high-yield for de novo assembly because they span repeats.",
      "Multiple testing is not optional in GWAS.",
      "Genome coverage and gene coverage are related but not identical.",
    ],
  },
];

export const AG_EXAM_STATS = [
  { label: "Written questions", value: "30" },
  { label: "MCQ + short", value: "25 + 5" },
  { label: "Pass mark", value: "22/30" },
  { label: "Time", value: "60 min" },
];

export function getSlidesForSection(section) {
  return (section.slides || []).map((id) => slideById[id]).filter(Boolean);
}
