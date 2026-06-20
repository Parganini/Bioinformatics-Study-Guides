export const AG_SOURCE_FOLDER =
  "https://drive.google.com/drive/folders/1pVJWcKkzsFhUuYXKdrO0wPqNRW-5_zuY";

export const AG_TRANSCRIPT_FOLDER =
  "https://drive.google.com/drive/folders/1uHiEwDxCwRd7ntMcamNOLy6hF-swgcAQ";

export const AG_SOURCE_FILES = [
  { title: "Introduction to the course.pdf", driveId: "1X5TcBk-I5CbiLcVlkrCzZjUw_ya63tfy" },
  { title: "Lecture 1.pdf", driveId: "1GGqi8rrq0Z8ORBogw3fD3OLkyrkuX8UF" },
  { title: "lecture 2.pdf", driveId: "1x9tHG-Kqd4VjU6xeO8Qze67k6ZU4LDL3" },
  { title: "lecture 3.pdf", driveId: "1m65lSmHUiNJGnw1Q_3C_tPeRdC2PKEL4" },
  { title: "Lecture 4.pdf", driveId: "1bay_I_LbVKbVRXm2P8XVHx-iVRpgRiWL" },
  { title: "Lecture 6.pdf", driveId: "1HAkFM_QXEkiJKLB75un9pXbpA2YSYgzf" },
  { title: "Lecture 7.pdf", driveId: "15NDDFJWx7IrNTOvofUTrdoJg4djvYSHp" },
  { title: "Lecture 8.pdf", driveId: "1vg6217xrGBXeHiBpZDRUV5bRGZBmnlmr" },
  { title: "Lecture 9.pdf", driveId: "1LjHBqmL4HcCqa8kyJcDm3tSWttSlNe7u" },
  { title: "Lecture 10.pdf", driveId: "1sWhbrBeIUgxjLqOc8gkjy3CFZeGwZST5" },
  { title: "Lecture 11.pdf", driveId: "1uh1Jb5XDBNi0Nam1m3Mo0TTMciQTgcz5" },
  { title: "Lecture 12.pdf", driveId: "1WaMS62rtxK909jD2ic1It768b5bKFZ-b" },
  { title: "Lecture 13.pdf", driveId: "1BMhbocY8foIlMWgYpdWKpfjL0cIi7G9t" },
  { title: "Lecture 14.pdf", driveId: "18NVbdsGiseBo9vVX00VOAMGXJAX7xdfT" },
  { title: "PlanningGenomicProject.pdf", driveId: "1SN0AtCCsmILc1RAKJgo_wcEyq1IDvwPn" },
  { title: "Final_exam.pdf", driveId: "1CDomzIsd0k464D8yyEhYRswpg4cpRucT" },
  { title: "Applied Genomics - examples of questions.docx", driveId: "11rUA-WR9zhw6whNWzVoOJ92mUn-3N68f" },
];

export const AG_SLIDE_SELECTION = [
  { id: "final-exam-format", source: "Final_exam.pdf", page: 3, topic: "Written exam format", asset: "ag-slides/final-exam-format-p003.webp" },
  { id: "intro-course-program", source: "Introduction to the course.pdf", page: 10, topic: "Chronological course program", asset: "ag-slides/intro-course-program-p010.webp" },
  { id: "intro-assessment", source: "Introduction to the course.pdf", page: 11, topic: "Assessment and project components", asset: "ag-slides/intro-assessment-p011.webp" },
  { id: "lecture01-alleles", source: "Lecture 1.pdf", page: 11, topic: "Gene, allele, genotype and phenotype", asset: "ag-slides/lecture01-alleles-p011.webp" },
  { id: "lecture01-plink-fam", source: "Lecture 1.pdf", page: 13, topic: "Sample metadata in PLINK .fam", asset: "ag-slides/lecture01-plink-fam-p013.webp" },
  { id: "lecture01-popgen", source: "Lecture 1.pdf", page: 43, topic: "Population genetics frame", asset: "ag-slides/lecture01-popgen-p043.webp" },
  { id: "lecture01-allele-freq", source: "Lecture 1.pdf", page: 44, topic: "Allele and genotype frequencies", asset: "ag-slides/lecture01-allele-freq-p044.webp" },
  { id: "lecture01-hwe-formula", source: "Lecture 1.pdf", page: 45, topic: "Hardy-Weinberg formula", asset: "ag-slides/lecture01-hwe-formula-p045.webp" },
  { id: "lecture01-hwe-assumptions", source: "Lecture 1.pdf", page: 47, topic: "Hardy-Weinberg assumptions", asset: "ag-slides/lecture01-hwe-assumptions-p047.webp" },
  { id: "lecture02-sanger-ngs", source: "lecture 2.pdf", page: 6, topic: "Sanger sequencing vs NGS", asset: "ag-slides/lecture02-sanger-ngs-p006.webp" },
  { id: "lecture02-cost-capacity", source: "lecture 2.pdf", page: 12, topic: "Cost per genome and sequencing capacity", asset: "ag-slides/lecture02-cost-capacity-p012.webp" },
  { id: "lecture02-ion-torrent", source: "lecture 2.pdf", page: 17, topic: "Ion Torrent sequencing", asset: "ag-slides/lecture02-ion-torrent-p017.webp" },
  { id: "lecture02-ion-data-flow", source: "lecture 2.pdf", page: 57, topic: "Ion Torrent data flow and output files", asset: "ag-slides/lecture02-ion-data-flow-p057.webp" },
  { id: "lecture02-file-definitions", source: "lecture 2.pdf", page: 58, topic: "Common NGS file definitions", asset: "ag-slides/lecture02-file-definitions-p058.webp" },
  { id: "lecture03-454-pyro", source: "lecture 3.pdf", page: 5, topic: "Roche 454 pyrosequencing principle", asset: "ag-slides/lecture03-454-pyro-p005.webp" },
  { id: "lecture03-solid-overview", source: "lecture 3.pdf", page: 8, topic: "ABI SOLiD ligation chemistry", asset: "ag-slides/lecture03-solid-overview-p008.webp" },
  { id: "lecture03-illumina-bridge", source: "lecture 3.pdf", page: 33, topic: "Illumina bridge amplification", asset: "ag-slides/lecture03-illumina-bridge-p033.webp" },
  { id: "lecture03-flowcells", source: "lecture 3.pdf", page: 38, topic: "Random vs patterned Illumina flow cells", asset: "ag-slides/lecture03-flowcells-p038.webp" },
  { id: "lecture03-illumina-sbs", source: "lecture 3.pdf", page: 43, topic: "Illumina reversible terminator chemistry", asset: "ag-slides/lecture03-illumina-sbs-p043.webp" },
  { id: "lecture03-sbs-readout", source: "lecture 3.pdf", page: 44, topic: "Sequencing by synthesis readout", asset: "ag-slides/lecture03-sbs-readout-p044.webp" },
  { id: "lecture03-nanopore-principle", source: "lecture 3.pdf", page: 81, topic: "Nanopore direct real-time sequencing", asset: "ag-slides/lecture03-nanopore-principle-p081.webp" },
  { id: "lecture03-nanopore-signal", source: "lecture 3.pdf", page: 85, topic: "Nanopore current signal interpretation", asset: "ag-slides/lecture03-nanopore-signal-p085.webp" },
  { id: "lecture03-pacbio-smrt", source: "lecture 3.pdf", page: 93, topic: "PacBio SMRT sequencing", asset: "ag-slides/lecture03-pacbio-smrt-p093.webp" },
  { id: "lecture03-pacbio-ccs", source: "lecture 3.pdf", page: 97, topic: "PacBio circular consensus sequencing", asset: "ag-slides/lecture03-pacbio-ccs-p097.webp" },
  { id: "lecture03-pacbio-accuracy", source: "lecture 3.pdf", page: 100, topic: "Long-read accuracy comparison", asset: "ag-slides/lecture03-pacbio-accuracy-p100.webp" },
  { id: "lecture04-fastqc-quality", source: "Lecture 4.pdf", page: 39, topic: "FastQC per-base sequence quality", asset: "ag-slides/lecture04-fastqc-quality-p039.webp" },
  { id: "lecture04-sam-cigar", source: "Lecture 4.pdf", page: 60, topic: "SAM/BAM and CIGAR strings", asset: "ag-slides/lecture04-sam-cigar-p060.webp" },
  { id: "lecture06-dbg", source: "Lecture 6.pdf", page: 52, topic: "de Bruijn graph and Eulerian path", asset: "ag-slides/lecture06-dbg-p052.webp" },
  { id: "lecture06-n50", source: "Lecture 6.pdf", page: 67, topic: "N50 calculation", asset: "ag-slides/lecture06-n50-p067.webp" },
  { id: "lecture07-busco", source: "Lecture 7.pdf", page: 7, topic: "BUSCO completeness", asset: "ag-slides/lecture07-busco-p007.webp" },
  { id: "lecture07-gff", source: "Lecture 7.pdf", page: 54, topic: "GFF3 annotation fields", asset: "ag-slides/lecture07-gff-p054.webp" },
  { id: "lecture08-galaxy-workflow", source: "Lecture 8.pdf", page: 27, topic: "Galaxy variant-calling workflow", asset: "ag-slides/lecture08-galaxy-workflow-p027.webp" },
  { id: "lecture09-ngs-applications", source: "Lecture 9.pdf", page: 4, topic: "NGS application types", asset: "ag-slides/lecture09-ngs-applications-p004.webp" },
  { id: "lecture10-plink-files", source: "Lecture 10.pdf", page: 6, topic: "PLINK PED/MAP and BED/BIM/FAM", asset: "ag-slides/lecture10-plink-files-p006.webp" },
  { id: "lecture11-acgh", source: "Lecture 11.pdf", page: 40, topic: "aCGH and CNV detection", asset: "ag-slides/lecture11-acgh-p040.webp" },
  { id: "lecture12-roh", source: "Lecture 12.pdf", page: 68, topic: "Runs of homozygosity", asset: "ag-slides/lecture12-roh-p068.webp" },
  { id: "lecture13-gwas-design", source: "Lecture 13.pdf", page: 12, topic: "GWAS design issues", asset: "ag-slides/lecture13-gwas-design-p012.webp" },
  { id: "lecture13-manhattan", source: "Lecture 13.pdf", page: 17, topic: "Manhattan plot output", asset: "ag-slides/lecture13-manhattan-p017.webp" },
  { id: "lecture13-ora", source: "Lecture 13.pdf", page: 76, topic: "Over-representation analysis", asset: "ag-slides/lecture13-ora-p076.webp" },
  { id: "lecture14-plink-gwas", source: "Lecture 14.pdf", page: 70, topic: "GWAS with PLINK", asset: "ag-slides/lecture14-plink-gwas-p070.webp" },
  { id: "project-design", source: "PlanningGenomicProject.pdf", page: 4, topic: "Project plan structure", asset: "ag-slides/project-design-p004.webp" },
];

export function driveFileUrl(driveId) {
  return `https://drive.google.com/file/d/${driveId}/view`;
}
