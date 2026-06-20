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
  { id: "final-exam-format", source: "Final_exam.pdf", page: 2, topic: "Written exam format", asset: "ag-slides/final-exam-format-p002.webp" },
  { id: "lecture01-hwe", source: "Lecture 1.pdf", page: 26, topic: "Hardy-Weinberg equilibrium", asset: "ag-slides/lecture01-hwe-p026.webp" },
  { id: "lecture02-fastq-format", source: "lecture 2.pdf", page: 39, topic: "FASTQ record structure", asset: "ag-slides/lecture02-fastq-format-p039.webp" },
  { id: "lecture03-illumina-sbs", source: "lecture 3.pdf", page: 36, topic: "Illumina sequencing by synthesis", asset: "ag-slides/lecture03-illumina-sbs-p036.webp" },
  { id: "lecture03-long-reads", source: "lecture 3.pdf", page: 83, topic: "PacBio and Nanopore long reads", asset: "ag-slides/lecture03-long-reads-p083.webp" },
  { id: "lecture04-fastqc-quality", source: "Lecture 4.pdf", page: 39, topic: "FastQC per-base sequence quality", asset: "ag-slides/lecture04-fastqc-quality-p039.webp" },
  { id: "lecture04-sam-cigar", source: "Lecture 4.pdf", page: 60, topic: "SAM/BAM and CIGAR strings", asset: "ag-slides/lecture04-sam-cigar-p060.webp" },
  { id: "lecture06-dbg", source: "Lecture 6.pdf", page: 52, topic: "de Bruijn graph and Eulerian path", asset: "ag-slides/lecture06-dbg-p052.webp" },
  { id: "lecture06-n50", source: "Lecture 6.pdf", page: 74, topic: "N50 calculation", asset: "ag-slides/lecture06-n50-p074.webp" },
  { id: "lecture07-busco", source: "Lecture 7.pdf", page: 7, topic: "BUSCO completeness", asset: "ag-slides/lecture07-busco-p007.webp" },
  { id: "lecture07-gff", source: "Lecture 7.pdf", page: 54, topic: "GFF3 annotation fields", asset: "ag-slides/lecture07-gff-p054.webp" },
  { id: "lecture08-galaxy-workflow", source: "Lecture 8.pdf", page: 27, topic: "Galaxy variant-calling workflow", asset: "ag-slides/lecture08-galaxy-workflow-p027.webp" },
  { id: "lecture09-ngs-applications", source: "Lecture 9.pdf", page: 4, topic: "NGS application types", asset: "ag-slides/lecture09-ngs-applications-p004.webp" },
  { id: "lecture10-plink-files", source: "Lecture 10.pdf", page: 6, topic: "PLINK PED/MAP and BED/BIM/FAM", asset: "ag-slides/lecture10-plink-files-p006.webp" },
  { id: "lecture11-acgh", source: "Lecture 11.pdf", page: 40, topic: "aCGH and CNV detection", asset: "ag-slides/lecture11-acgh-p040.webp" },
  { id: "lecture12-roh", source: "Lecture 12.pdf", page: 68, topic: "Runs of homozygosity", asset: "ag-slides/lecture12-roh-p068.webp" },
  { id: "lecture13-gwas-design", source: "Lecture 13.pdf", page: 12, topic: "GWAS design issues", asset: "ag-slides/lecture13-gwas-design-p012.webp" },
  { id: "lecture13-manhattan", source: "Lecture 13.pdf", page: 17, topic: "Manhattan plot output", asset: "ag-slides/lecture13-manhattan-p017.webp" },
  { id: "lecture13-ora", source: "Lecture 13.pdf", page: 84, topic: "Over-representation analysis", asset: "ag-slides/lecture13-ora-p084.webp" },
  { id: "lecture14-plink-gwas", source: "Lecture 14.pdf", page: 70, topic: "GWAS with PLINK", asset: "ag-slides/lecture14-plink-gwas-p070.webp" },
  { id: "project-design", source: "PlanningGenomicProject.pdf", page: 4, topic: "Project plan structure", asset: "ag-slides/project-design-p004.webp" },
];

export function driveFileUrl(driveId) {
  return `https://drive.google.com/file/d/${driveId}/view`;
}
