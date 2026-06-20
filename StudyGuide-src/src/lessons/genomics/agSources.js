export const AG_SOURCE_FOLDER =
  "https://drive.google.com/drive/folders/1pVJWcKkzsFhUuYXKdrO0wPqNRW-5_zuY";

// Transcript files were not included in the lightweight repo archive used for this patch.
// Keep this nullable so a verified folder can be wired later without changing the UI.
export const AG_TRANSCRIPT_FOLDER = null;

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
  { id: "lecture01-hwe", source: "Lecture 1.pdf", page: 48, topic: "Hardy-Weinberg equilibrium", asset: "ag-slides/lecture01-hwe-p048.webp" },
  { id: "lecture02-fastq-format", source: "lecture 2.pdf", page: 62, topic: "FASTQ record structure", asset: "ag-slides/lecture02-fastq-format-p062.webp" },
  { id: "lecture03-illumina-sbs", source: "lecture 3.pdf", page: 18, topic: "Illumina sequencing workflow", asset: "ag-slides/lecture03-illumina-workflow-p018.webp" },
  { id: "lecture03-long-reads", source: "lecture 3.pdf", page: 92, topic: "PacBio and long-read platforms", asset: "ag-slides/lecture03-long-reads-p092.webp" },
  { id: "lecture04-fastqc-quality", source: "Lecture 4.pdf", page: 58, topic: "FastQC per-base sequence quality", asset: "ag-slides/lecture04-fastqc-quality-p058.webp" },
  { id: "lecture04-sam-cigar", source: "Lecture 4.pdf", page: 76, topic: "CIGAR string example", asset: "ag-slides/lecture04-cigar-p076.webp" },
  { id: "lecture06-dbg", source: "Lecture 6.pdf", page: 52, topic: "de Bruijn graph and Eulerian path", asset: "ag-slides/lecture06-dbg-p052.webp" },
  { id: "lecture06-n50", source: "Lecture 6.pdf", page: 67, topic: "N50 calculation", asset: "ag-slides/lecture06-n50-p067.webp" },
  { id: "lecture07-busco", source: "Lecture 7.pdf", page: 7, topic: "BUSCO completeness", asset: "ag-slides/lecture07-busco-p007.webp" },
  { id: "lecture07-gff", source: "Lecture 7.pdf", page: 49, topic: "GFF3 annotation fields", asset: "ag-slides/lecture07-gff-p049.webp" },
  { id: "lecture08-galaxy-workflow", source: "Lecture 8.pdf", page: 27, topic: "Galaxy variant-calling workflow", asset: "ag-slides/lecture08-galaxy-workflow-p027.webp" },
  { id: "lecture09-poolseq", source: "Lecture 9.pdf", page: 3, topic: "Pool-seq concept", asset: "ag-slides/lecture09-poolseq-p003.webp" },
  { id: "lecture09-bisulfite", source: "Lecture 9.pdf", page: 36, topic: "Bisulfite sequencing", asset: "ag-slides/lecture09-bisulfite-p036.webp" },
  { id: "lecture09-chipseq", source: "Lecture 9.pdf", page: 40, topic: "ChIP-seq purpose", asset: "ag-slides/lecture09-chipseq-p040.webp" },
  { id: "lecture10-plink-files", source: "Lecture 10.pdf", page: 5, topic: "PLINK genotype files", asset: "ag-slides/lecture10-plink-files-p005.webp" },
  { id: "lecture10-mds", source: "Lecture 10.pdf", page: 28, topic: "MDS in PLINK", asset: "ag-slides/lecture10-mds-p028.webp" },
  { id: "lecture11-acgh", source: "Lecture 11.pdf", page: 40, topic: "aCGH and CNV detection", asset: "ag-slides/lecture11-acgh-p040.webp" },
  { id: "lecture12-roh", source: "Lecture 12.pdf", page: 78, topic: "Runs of homozygosity", asset: "ag-slides/lecture12-roh-p078.webp" },
  { id: "lecture13-gwas-design", source: "Lecture 13.pdf", page: 12, topic: "GWAS design issues", asset: "ag-slides/lecture13-gwas-design-p012.webp" },
  { id: "lecture13-manhattan", source: "Lecture 13.pdf", page: 16, topic: "Manhattan plot output", asset: "ag-slides/lecture13-manhattan-p016.webp" },
  { id: "lecture13-ora", source: "Lecture 13.pdf", page: 76, topic: "Over-representation analysis", asset: "ag-slides/lecture13-ora-p076.webp" },
  { id: "lecture14-plink-gwas", source: "Lecture 14.pdf", page: 58, topic: "GWAS with PLINK", asset: "ag-slides/lecture14-plink-gwas-p058.webp" },
  { id: "project-design", source: "PlanningGenomicProject.pdf", page: 4, topic: "Project plan structure", asset: "ag-slides/project-design-p004.webp" },
];

export function driveFileUrl(driveId) {
  return `https://drive.google.com/file/d/${driveId}/view`;
}
