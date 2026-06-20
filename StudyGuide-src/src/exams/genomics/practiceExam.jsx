import React, { useMemo, useState } from "react";

const QUESTIONS = [
  {
    id: "allele-definition",
    topic: "Foundational genetics",
    question: "What is an allele?",
    options: [
      { id: "a", text: "A complete set of chromosomes", explanation: "A complete set of chromosomes is closer to the idea of a genome or karyotype. An allele is a variant form of a gene or locus." },
      { id: "b", text: "An alternative form of a gene", explanation: "Correct. Alleles are alternative forms of the same gene or genomic locus, such as A and a at one locus.", correct: true },
      { id: "c", text: "A sequencing read aligned to a genome", explanation: "That describes an aligned read, usually stored in SAM/BAM format. It is not an allele." },
      { id: "d", text: "A type of mutation found only in coding regions", explanation: "Alleles can be produced by mutations, but they are not limited to coding regions and are not themselves only one mutation type." },
    ],
  },
  {
    id: "sanger",
    topic: "Sequencing technologies",
    question: "Sanger sequencing is mainly based on:",
    options: [
      { id: "a", text: "Sequencing by ligation", explanation: "Sequencing by ligation is associated with ABI SOLiD, not classic Sanger sequencing." },
      { id: "b", text: "Chain termination using dideoxynucleotides", explanation: "Correct. Sanger sequencing uses dideoxynucleotides that stop DNA synthesis when incorporated.", correct: true },
      { id: "c", text: "Detection of hydrogen ions", explanation: "Hydrogen ion detection is the principle of Ion Torrent sequencing." },
      { id: "d", text: "Real-time single-molecule sequencing", explanation: "Single-molecule real-time sequencing is associated with PacBio, not Sanger." },
    ],
  },
  {
    id: "ion-torrent-principle",
    topic: "NGS technologies",
    question: "What is the basic principle of Ion Torrent sequencing?",
    options: [
      { id: "a", text: "Detection of light produced by pyrophosphate release", explanation: "This describes pyrosequencing, such as Roche 454, where light is generated after PPi release." },
      { id: "b", text: "Detection of H+ ions released during nucleotide incorporation", explanation: "Correct. Ion Torrent detects pH changes caused by hydrogen ions released during DNA synthesis.", correct: true },
      { id: "c", text: "Detection of fluorescently labelled reversible terminators", explanation: "This is the typical sequencing-by-synthesis approach used by Illumina platforms." },
      { id: "d", text: "Detection of DNA methylation by bisulfite conversion", explanation: "Bisulfite sequencing is an epigenomic strategy, not the Ion Torrent principle." },
    ],
  },
  {
    id: "fastq",
    topic: "NGS file formats",
    question: "What information is stored in a FASTQ file?",
    options: [
      { id: "a", text: "Variant calls and genotype information", explanation: "Variant calls and genotypes are normally stored in VCF files." },
      { id: "b", text: "Raw sequencing reads and their quality scores", explanation: "Correct. FASTQ stores the read sequence plus per-base quality scores.", correct: true },
      { id: "c", text: "Genome annotation and gene coordinates", explanation: "Genome annotation is usually stored in GFF/GTF or related formats, not FASTQ." },
      { id: "d", text: "Population structure and MDS coordinates", explanation: "Population structure results are downstream analysis outputs, not raw sequencing files." },
    ],
  },
  {
    id: "sam",
    topic: "NGS file formats",
    question: "What is the purpose of a SAM file in NGS analysis?",
    options: [
      { id: "a", text: "To store raw reads and quality scores", explanation: "That is the role of FASTQ before alignment." },
      { id: "b", text: "To store sequence alignments to a reference genome", explanation: "Correct. SAM is a text format containing read alignments, mapping positions, CIGAR strings and related fields.", correct: true },
      { id: "c", text: "To store only SNP genotypes", explanation: "SNP genotypes are usually stored in VCF or PLINK-style genotype files, not SAM." },
      { id: "d", text: "To store functional annotation of genes", explanation: "Functional annotations are gene-feature outputs; SAM is for aligned reads." },
    ],
  },
  {
    id: "bam",
    topic: "NGS file formats",
    question: "What does BAM represent?",
    options: [
      { id: "a", text: "A binary compressed version of SAM", explanation: "Correct. BAM is the compressed binary form of SAM and is used for efficient storage and processing.", correct: true },
      { id: "b", text: "A database of annotated genes", explanation: "BAM is not an annotation database; it contains alignments." },
      { id: "c", text: "A file containing only raw sequencing reads", explanation: "Raw reads are stored in FASTQ; BAM stores reads after alignment or mapping." },
      { id: "d", text: "A method for estimating genome size", explanation: "Genome size can be estimated using C-value or k-mer methods, not BAM itself." },
    ],
  },
  {
    id: "bwa",
    topic: "NGS data analysis",
    question: "Which tool is commonly used for aligning short reads to a reference genome?",
    options: [
      { id: "a", text: "BUSCO", explanation: "BUSCO evaluates genome or transcriptome completeness using conserved single-copy orthologs." },
      { id: "b", text: "BWA", explanation: "Correct. BWA is a commonly used short-read aligner for mapping reads to a reference genome.", correct: true },
      { id: "c", text: "ORA", explanation: "ORA means Over-Representation Analysis and is usually used after candidate-gene or pathway analyses." },
      { id: "d", text: "FastQC", explanation: "FastQC performs quality control of raw reads, but it does not align them." },
    ],
  },
  {
    id: "cigar",
    topic: "NGS data analysis",
    question: "What does a CIGAR string describe?",
    options: [
      { id: "a", text: "The quality score of each base in a read", explanation: "Base quality scores are stored separately in FASTQ or alignment fields, not in the CIGAR string." },
      { id: "b", text: "The operations used to align a read to a reference genome", explanation: "Correct. CIGAR describes matches, insertions, deletions, clipping and other alignment operations.", correct: true },
      { id: "c", text: "The allele frequency of a SNP", explanation: "Allele frequency is calculated from genotypes or read counts; it is not encoded by CIGAR." },
      { id: "d", text: "The number of contigs in an assembly", explanation: "Contig counts are assembly statistics and are unrelated to the CIGAR field." },
    ],
  },
  {
    id: "phased-genotype",
    topic: "Variant formats",
    question: "What does the genotype notation 0|1 in a VCF file usually indicate?",
    options: [
      { id: "a", text: "A homozygous reference genotype", explanation: "A homozygous reference genotype is usually 0/0 or 0|0." },
      { id: "b", text: "A phased heterozygous genotype with one reference and one alternate allele", explanation: "Correct. 0 is the reference allele, 1 is the first alternate allele and the vertical bar indicates phasing.", correct: true },
      { id: "c", text: "A missing genotype", explanation: "Missing genotypes are usually represented with dots, such as ./., not 0|1." },
      { id: "d", text: "A structural variant", explanation: "The notation can be used for many variant types; by itself 0|1 indicates phased genotype state, not necessarily a structural variant." },
    ],
  },
  {
    id: "solid",
    topic: "NGS technologies",
    question: "ABI SOLiD sequencing is known for:",
    options: [
      { id: "a", text: "Two-base encoding and sequencing by ligation", explanation: "Correct. SOLiD uses sequencing by ligation and a two-base/color-space encoding system.", correct: true },
      { id: "b", text: "Long-read single-molecule sequencing", explanation: "This is more characteristic of PacBio or Nanopore technologies." },
      { id: "c", text: "H+ detection during nucleotide incorporation", explanation: "That is the defining principle of Ion Torrent." },
      { id: "d", text: "Bisulfite conversion of unmethylated cytosines", explanation: "Bisulfite conversion is used to study DNA methylation, not as the core SOLiD chemistry." },
    ],
  },
  {
    id: "long-reads",
    topic: "NGS technologies",
    question: "Which NGS technology is commonly associated with long reads useful for de novo genome assembly?",
    options: [
      { id: "a", text: "Illumina", explanation: "Illumina is accurate and high-throughput but usually short-read, often around 100-300 bp." },
      { id: "b", text: "Ion Torrent", explanation: "Ion Torrent detects pH changes and is not the standard long-read platform for de novo assemblies." },
      { id: "c", text: "PacBio", explanation: "Correct. PacBio produces long reads that help span repeats and improve assembly contiguity.", correct: true },
      { id: "d", text: "ABI SOLiD", explanation: "SOLiD is a ligation-based short-read platform, not a long-read assembly platform." },
    ],
  },
  {
    id: "illumina",
    topic: "NGS technologies",
    question: "Illumina sequencing is typically associated with:",
    options: [
      { id: "a", text: "Short reads and high throughput", explanation: "Correct. Illumina is widely used for high-throughput short-read sequencing.", correct: true },
      { id: "b", text: "Only ultra-long reads", explanation: "Ultra-long reads are associated with long-read platforms, especially Nanopore, not Illumina." },
      { id: "c", text: "Detection of hydrogen ions", explanation: "Hydrogen ion detection is Ion Torrent." },
      { id: "d", text: "Sequencing by ligation with two-base encoding", explanation: "That describes ABI SOLiD, not Illumina." },
    ],
  },
  {
    id: "paired-end",
    topic: "NGS library design",
    question: "What is paired-end sequencing?",
    options: [
      { id: "a", text: "Sequencing only one strand of a DNA molecule", explanation: "That is closer to single-end sequencing. Paired-end sequencing collects information from both ends of a fragment." },
      { id: "b", text: "Sequencing both ends of the same DNA fragment", explanation: "Correct. The two reads provide distance/orientation information useful for mapping, variant calling and assembly.", correct: true },
      { id: "c", text: "Sequencing two unrelated samples together", explanation: "Sequencing multiple samples together is multiplexing, not paired-end sequencing." },
      { id: "d", text: "Sequencing only methylated DNA", explanation: "Methylation-specific assays are separate experimental strategies." },
    ],
  },
  {
    id: "ld-definition",
    topic: "Population genomics",
    question: "What does linkage disequilibrium describe?",
    options: [
      { id: "a", text: "The similarity between two populations", explanation: "Population similarity or differentiation can be explored with MDS/PCA, admixture or FST, but it is not LD." },
      { id: "b", text: "The correlation between alleles of two SNPs within a population", explanation: "Correct. LD is the non-random association between alleles at different loci in a population.", correct: true },
      { id: "c", text: "The number of contigs linked during assembly", explanation: "This confuses genetic linkage with genome assembly scaffolding. LD is a population-genetics concept." },
      { id: "d", text: "The mutation rate of genetic markers", explanation: "Mutation rate describes the origin of new variants; LD describes how existing variants are associated." },
    ],
  },
  {
    id: "inbreeding-assembly",
    topic: "Genome assembly",
    question: "In a highly inbred individual, genome assembly may become easier because:",
    options: [
      { id: "a", text: "The genome becomes larger", explanation: "Inbreeding does not make the genome larger. Assembly difficulty is mostly affected by repeats, heterozygosity, coverage and read length." },
      { id: "b", text: "Heterozygosity increases", explanation: "Inbreeding usually decreases heterozygosity rather than increasing it." },
      { id: "c", text: "Homozygosity increases", explanation: "Correct. More homozygosity means fewer haplotypic differences that can split an assembly into alternative contigs/haplotigs.", correct: true },
      { id: "d", text: "Sequencing errors disappear", explanation: "Sequencing errors still occur. Inbreeding changes biological variation, not the machine error rate." },
    ],
  },
  {
    id: "roh",
    topic: "Population genomics",
    question: "What are Runs of Homozygosity, or ROH?",
    options: [
      { id: "a", text: "Regions with many heterozygous SNPs", explanation: "That is the opposite of ROH. ROH are homozygous stretches." },
      { id: "b", text: "Long genomic regions where an individual is homozygous", explanation: "Correct. ROH can indicate inbreeding, shared ancestry, bottlenecks or selection depending on their length and distribution.", correct: true },
      { id: "c", text: "Regions with no sequencing coverage", explanation: "No-coverage regions are data gaps, not runs of homozygosity." },
      { id: "d", text: "Regions containing only structural variants", explanation: "ROH are defined by genotype homozygosity, commonly from SNP data, not by structural variation alone." },
    ],
  },
  {
    id: "hwe-definition",
    topic: "Population genetics",
    question: "A population is in Hardy-Weinberg equilibrium when:",
    options: [
      { id: "a", text: "Genotype frequencies follow p², 2pq and q² under ideal assumptions", explanation: "Correct. HWE predicts genotype frequencies from allele frequencies when assumptions such as random mating and no selection are approximately met.", correct: true },
      { id: "b", text: "All individuals are homozygous", explanation: "HWE does not require all individuals to be homozygous; heterozygotes are expected at frequency 2pq." },
      { id: "c", text: "Allele frequencies change every generation", explanation: "HWE assumes allele and genotype frequencies remain stable from generation to generation under ideal conditions." },
      { id: "d", text: "Selection strongly favours one genotype", explanation: "Strong selection is a violation of HWE assumptions." },
    ],
  },
  {
    id: "debruijn",
    topic: "Genome assembly",
    question: "In de Bruijn graph-based genome assembly, the reconstruction problem is commonly related to finding:",
    options: [
      { id: "a", text: "A Hamiltonian cycle only", explanation: "Hamiltonian paths are more associated with overlap-layout-consensus formulations, not the classic de Bruijn graph approach." },
      { id: "b", text: "An Eulerian path or Eulerian cycle", explanation: "Correct. De Bruijn graphs model k-mer relationships and reconstruction is classically related to traversing edges in an Eulerian path/cycle.", correct: true },
      { id: "c", text: "A Manhattan distance", explanation: "Manhattan distance/plot terminology is unrelated to assembly graph traversal." },
      { id: "d", text: "A Hardy-Weinberg equilibrium", explanation: "HWE is a genotype-frequency model in population genetics, not an assembly algorithm." },
    ],
  },
  {
    id: "n50",
    topic: "Genome assembly",
    question: "What does N50 measure in genome assembly?",
    options: [
      { id: "a", text: "The number of genes in the genome", explanation: "Gene number is an annotation result, not the N50 statistic." },
      { id: "b", text: "The smallest contig length needed to cover 50% of the total assembly length when contigs are sorted from longest to shortest", explanation: "Correct. N50 is the contig/scaffold length at which the cumulative sum reaches at least half of the total assembly length.", correct: true },
      { id: "c", text: "The average sequencing depth", explanation: "Average depth is calculated as LN/G or sequenced bases divided by genome size." },
      { id: "d", text: "The number of missing BUSCO genes", explanation: "Missing BUSCO genes are part of completeness assessment, not N50." },
    ],
  },
  {
    id: "busco",
    topic: "Genome annotation and quality",
    question: "What is BUSCO used for?",
    options: [
      { id: "a", text: "Estimating allele frequency in pooled sequencing", explanation: "Pool-seq allele frequencies are estimated from read counts, not BUSCO." },
      { id: "b", text: "Assessing genome assembly completeness using conserved single-copy orthologs", explanation: "Correct. BUSCO classifies expected genes as complete, duplicated, fragmented or missing.", correct: true },
      { id: "c", text: "Detecting hydrogen ions during sequencing", explanation: "Hydrogen ion detection is Ion Torrent chemistry." },
      { id: "d", text: "Correcting GWAS p-values", explanation: "Multiple testing correction uses methods such as Bonferroni or FDR, not BUSCO." },
    ],
  },
  {
    id: "structural-annotation",
    topic: "Genome annotation",
    question: "Structural annotation refers mainly to:",
    options: [
      { id: "a", text: "Assigning biological functions to predicted genes", explanation: "That is functional annotation, not structural annotation." },
      { id: "b", text: "Identifying the position and structure of genes and genomic features", explanation: "Correct. Structural annotation locates genes, exons, introns, UTRs and other genomic features.", correct: true },
      { id: "c", text: "Estimating sequencing depth", explanation: "Sequencing depth is a coverage metric, not annotation." },
      { id: "d", text: "Calculating allele frequencies", explanation: "Allele frequencies are population or variant statistics, not structural annotation." },
    ],
  },
  {
    id: "functional-annotation",
    topic: "Genome annotation",
    question: "Functional annotation refers mainly to:",
    options: [
      { id: "a", text: "Assigning putative biological roles to genes or genomic features", explanation: "Correct. Functional annotation links predicted genes/features to functions, pathways, domains or homologs.", correct: true },
      { id: "b", text: "Aligning reads to a reference genome", explanation: "Read alignment is an NGS processing step, not functional annotation." },
      { id: "c", text: "Calling SNPs and indels", explanation: "Variant calling detects differences from a reference, but does not itself assign gene function." },
      { id: "d", text: "Calculating N50", explanation: "N50 is an assembly contiguity statistic, not functional annotation." },
    ],
  },
  {
    id: "acgh",
    topic: "CNV",
    question: "What is aCGH?",
    options: [
      { id: "a", text: "A chip-based genome resequencing technology", explanation: "aCGH uses arrays, but it measures relative copy number signal rather than resequencing bases." },
      { id: "b", text: "A microarray-based method to detect copy number variation", explanation: "Correct. Array comparative genomic hybridization detects genomic gains and losses from hybridization intensity differences.", correct: true },
      { id: "c", text: "A paired-end NGS strategy", explanation: "Paired-end NGS can help detect structural variants, but aCGH itself is microarray-based." },
      { id: "d", text: "A method to calculate linkage disequilibrium", explanation: "LD is calculated from genotype data; aCGH detects copy number changes." },
    ],
  },
  {
    id: "gwas-aim-mcq",
    topic: "GWAS",
    question: "What is the main aim of a GWAS?",
    options: [
      { id: "a", text: "To assemble a genome without a reference", explanation: "That is de novo genome assembly, not GWAS." },
      { id: "b", text: "To identify genetic variants associated with a phenotype", explanation: "Correct. GWAS tests variants across the genome for statistical association with a trait or disease status.", correct: true },
      { id: "c", text: "To trim low-quality reads", explanation: "Trimming is an NGS preprocessing step, not the aim of GWAS." },
      { id: "d", text: "To estimate DNA concentration", explanation: "DNA quantification is a laboratory QC step, not a genome-wide association study." },
    ],
  },
  {
    id: "manhattan-x-axis",
    topic: "GWAS",
    question: "In a Manhattan plot, the x-axis usually represents:",
    options: [
      { id: "a", text: "SNP position along chromosomes", explanation: "Correct. Points are ordered by chromosome and genomic position along the x-axis.", correct: true },
      { id: "b", text: "Sequencing read length", explanation: "Read length is a sequencing metric, not an axis of the classic Manhattan plot." },
      { id: "c", text: "BUSCO completeness", explanation: "BUSCO completeness is used for assembly quality, not GWAS plots." },
      { id: "d", text: "Sample quality score", explanation: "Sample quality is important QC information but is not the Manhattan plot x-axis." },
    ],
  },
  {
    id: "manhattan-y-axis",
    topic: "GWAS",
    question: "In a Manhattan plot, the y-axis usually represents:",
    options: [
      { id: "a", text: "Minor allele frequency", explanation: "MAF is important for SNP filtering and interpretation, but it is not the usual Manhattan y-axis." },
      { id: "b", text: "-log10(P-value) of the SNP association", explanation: "Correct. Higher points mean smaller p-values and stronger evidence for association.", correct: true },
      { id: "c", text: "Read depth", explanation: "Read depth is a sequencing coverage metric, not the y-axis of a Manhattan plot." },
      { id: "d", text: "Number of contigs", explanation: "Contig count is an assembly statistic, not part of a GWAS Manhattan plot." },
    ],
  },
  {
    id: "multiple-testing",
    topic: "GWAS",
    question: "Why is multiple testing correction important in GWAS?",
    options: [
      { id: "a", text: "Because thousands or millions of SNPs are tested independently or semi-independently", explanation: "Correct. Testing many markers increases the chance of false positives unless significance thresholds are adjusted.", correct: true },
      { id: "b", text: "Because sequencing reads are always paired-end", explanation: "Read layout is unrelated to the statistical multiple-testing problem in GWAS." },
      { id: "c", text: "Because all SNPs have the same effect size", explanation: "SNPs do not all have the same effect size; multiple testing correction is about many simultaneous tests." },
      { id: "d", text: "Because GWAS does not use p-values", explanation: "GWAS commonly uses p-values or related association statistics, which require correction/thresholding." },
    ],
  },
  {
    id: "bonferroni",
    topic: "GWAS",
    question: "Which correction is often considered simple but conservative in GWAS?",
    options: [
      { id: "a", text: "Bonferroni correction", explanation: "Correct. Bonferroni divides alpha by the number of tests and is simple but can be conservative, especially when SNPs are correlated by LD.", correct: true },
      { id: "b", text: "Sanger correction", explanation: "Sanger is a sequencing method, not a p-value correction." },
      { id: "c", text: "BUSCO correction", explanation: "BUSCO evaluates assembly completeness; it is not a GWAS correction." },
      { id: "d", text: "De Bruijn correction", explanation: "De Bruijn graphs are assembly structures, not p-value correction methods." },
    ],
  },
  {
    id: "mds",
    topic: "Population genomics",
    question: "What is MDS commonly used for in population genomic analysis?",
    options: [
      { id: "a", text: "Visualizing genetic relationships or population structure among individuals", explanation: "Correct. MDS reduces genetic distance patterns into a few dimensions to reveal clusters, outliers or stratification.", correct: true },
      { id: "b", text: "Calculating sequencing depth", explanation: "Sequencing depth is calculated from read length, read number and genome size, not MDS." },
      { id: "c", text: "Detecting methylated cytosines", explanation: "Methylated cytosines are studied with methylation assays such as bisulfite sequencing." },
      { id: "d", text: "Measuring DNA purity", explanation: "DNA purity is assessed with lab metrics such as 260/280 and 260/230 ratios." },
    ],
  },
  {
    id: "ora",
    topic: "Post-GWAS interpretation",
    question: "What is ORA in post-GWAS analysis?",
    options: [
      { id: "a", text: "Over-Representation Analysis to identify enriched biological categories among candidate genes", explanation: "Correct. ORA tests whether candidate genes are enriched for pathways, functions or gene ontology categories.", correct: true },
      { id: "b", text: "A method to align reads", explanation: "Read alignment is done with tools such as BWA, not ORA." },
      { id: "c", text: "A method to calculate genome size from C-value", explanation: "C-value can estimate genome size, but that is not ORA." },
      { id: "d", text: "A technology for long-read sequencing", explanation: "Long-read sequencing technologies include PacBio and Nanopore, not ORA." },
    ],
  },
];

const OPEN_QUESTIONS = [
  {
    id: "gwas-aim",
    topic: "GWAS",
    question: "What is the aim of a GWAS?",
    answer: "A GWAS, or genome-wide association study, tests genetic variants distributed across the genome to identify markers statistically associated with a phenotype. The phenotype can be binary, such as case versus control, or quantitative, such as body weight, milk yield or expression level. The final goal is not only to find significant SNPs, but to identify genomic regions, candidate genes and biological pathways that may explain part of the genetic basis of the trait. A good answer should also mention that association does not automatically prove causality, because the associated SNP may only be tagging the causal variant through linkage disequilibrium.",
  },
  {
    id: "gwas-design",
    topic: "GWAS",
    question: "Describe the main elements that should be considered when designing a GWAS.",
    answer: "A strong GWAS starts with a precise phenotype definition, because noisy or inconsistent phenotypes reduce power. The study also needs an adequate sample size, reliable genotyping or sequencing data, quality control for samples and markers, and knowledge of the linkage disequilibrium structure of the population. Population structure or stratification must be controlled, for example with PCA, MDS or mixed models, because ancestry differences can create false associations. Finally, the analysis must apply genome-wide significance thresholds or multiple-testing correction, and the best results should ideally be replicated or validated in an independent dataset or by functional evidence.",
  },
  {
    id: "manhattan-detail",
    topic: "GWAS",
    question: "Describe a Manhattan plot in detail.",
    answer: "A Manhattan plot is the standard visualization of GWAS results. Each point usually represents one SNP or marker; the x-axis shows the genomic position ordered by chromosome, and the y-axis shows the strength of association, commonly -log10(P-value). A very small P-value becomes a high point, so peaks indicate genomic regions with stronger evidence of association. Horizontal lines often mark suggestive and genome-wide significance thresholds. When interpreting the plot, you should mention that a peak may contain the causal variant, or it may contain markers in linkage disequilibrium with the causal variant, so follow-up annotation and prioritization are needed.",
  },
  {
    id: "ld-open",
    topic: "Population genomics",
    question: "What is linkage disequilibrium and why is it important for GWAS?",
    answer: "Linkage disequilibrium, or LD, is the non-random association between alleles at different loci in a population. In simple terms, it means that knowing the allele at one SNP gives information about the allele at another nearby SNP more often than expected by chance. LD is essential for GWAS because the SNPs genotyped on a chip are usually not all causal variants; instead, they can tag nearby causal variants through correlation. The extent of LD also affects marker density, mapping resolution and the interpretation of association peaks. High LD makes detection easier with fewer markers, but it can make it harder to identify the exact causal variant.",
  },
  {
    id: "chipseq",
    topic: "Functional genomics",
    question: "What is the primary purpose of ChIP-seq?",
    answer: "ChIP-seq is used to identify genomic regions bound by a protein of interest or marked by a specific chromatin modification. The basic strategy is to crosslink DNA-protein complexes, fragment chromatin, immunoprecipitate the target protein or histone mark with a specific antibody, sequence the enriched DNA fragments and map them back to the reference genome. Peaks in the final data indicate regions enriched for binding or chromatin marks. It is commonly used to study transcription factor binding, regulatory elements, promoters, enhancers and epigenomic regulation.",
  },
  {
    id: "rnaseq",
    topic: "Transcriptomics",
    question: "What is RNA-seq and what biological questions can it answer?",
    answer: "RNA-seq is a sequencing-based approach used to study the transcriptome. RNA is extracted, converted to cDNA, sequenced and analyzed to quantify gene or transcript expression. It can answer questions about which genes are expressed, which genes are differentially expressed between conditions, tissues or phenotypes, and whether alternative transcripts or splice isoforms are present. RNA-seq can also support genome annotation by providing evidence for expressed genes, exon boundaries and untranslated regions. A typical workflow includes RNA quality control, library preparation, sequencing, read QC, alignment or pseudoalignment, quantification and differential expression analysis.",
  },
  {
    id: "poolseq",
    topic: "Population genomics",
    question: "What is Pool-seq?",
    answer: "Pool-seq is whole-genome or targeted sequencing of DNA pools made by combining DNA from multiple individuals, usually in equal amounts. Instead of sequencing every individual separately, the pool is sequenced as one sample and allele frequencies are estimated from read counts at polymorphic sites. This is cost-effective for comparing populations, detecting selection signatures or estimating population allele frequencies. However, Pool-seq usually does not provide individual genotypes, so it is less suitable for analyses that require individual-level information such as ROH per individual, kinship or standard GWAS. Good pooling accuracy, sufficient coverage and careful bias control are essential.",
  },
  {
    id: "bisulfite",
    topic: "Epigenomics",
    question: "What is bisulfite sequencing? Briefly describe the strategy.",
    answer: "Bisulfite sequencing is a method used to study DNA methylation, especially cytosine methylation. Sodium bisulfite treatment converts unmethylated cytosines into uracil, which is read as thymine after PCR and sequencing. Methylated cytosines are protected from this conversion and remain as cytosine. After sequencing, treated reads are aligned to a converted reference and C-to-T patterns are used to infer methylation status at individual cytosines or regions. The key idea is that sequence differences after bisulfite treatment reflect methylation, not normal genetic variation, so controls and specialized aligners are needed.",
  },
  {
    id: "cvalue",
    topic: "Genome size",
    question: "How can genome size be estimated before sequencing using the C-value?",
    answer: "The C-value is the amount of DNA contained in a haploid genome. Before sequencing, genome size can be estimated by measuring nuclear DNA content with cytological techniques or flow cytometry and converting DNA mass into base pairs. A commonly used approximation is 1 pg of DNA is about 978 Mbp, although values are approximate. This estimate is important because sequencing depth depends on genome size: if the genome is larger than expected, the same number of reads will produce lower coverage. In a project plan, the C-value helps choose the amount of sequencing required and evaluate whether the expected data output is sufficient.",
  },
  {
    id: "kmer-genome-size",
    topic: "Genome size",
    question: "How can genome size be estimated using a k-mer approach? Describe the main regions of the k-mer frequency distribution.",
    answer: "In a k-mer approach, sequencing reads are decomposed into all possible subsequences of length k, and the frequency of each k-mer is counted. The genome size can be approximated as the total number of reliable k-mers divided by the depth of the main k-mer peak. The k-mer frequency plot usually has three important regions: low-frequency k-mers, which are often sequencing errors; the main peak, which represents true single-copy genomic k-mers and reflects sequencing depth; and high-frequency k-mers, which usually correspond to repetitive or duplicated regions. In heterozygous genomes, an additional peak at about half the main coverage can appear because heterozygous k-mers are present in only one haplotype.",
  },
  {
    id: "n50-exercise",
    topic: "Genome assembly",
    question: "Calculate N50 for contig lengths 100, 70, 60, 50, 50, 40 and 30 kb.",
    answer: "First, sort the contigs from longest to shortest; here they are already sorted. The total assembly length is 100 + 70 + 60 + 50 + 50 + 40 + 30 = 400 kb, so half of the total length is 200 kb. Then calculate the cumulative sum from the longest contig: 100 kb, then 100 + 70 = 170 kb, which is still below 200 kb. Adding the next contig gives 230 kb, which crosses the 50% threshold. The contig that crosses the threshold is 60 kb, therefore N50 = 60 kb. N50 is a contiguity statistic, not a measure of correctness or gene completeness.",
  },
  {
    id: "coverage-direct",
    topic: "Coverage",
    question: "Estimate the average sequencing depth for a 1 Gbp genome with 100 million reads of 100 bp.",
    answer: "Use the formula depth = (N × L) / G, where N is the number of reads, L is read length and G is haploid genome size. Here N = 100,000,000 reads and L = 100 bp, so the total number of sequenced bases is 10,000,000,000 bp, or 10 Gbp. The genome size is 1,000,000,000 bp, or 1 Gbp. Therefore depth = 10 Gbp / 1 Gbp = 10×. This is average depth; the actual depth at individual positions may vary across the genome.",
  },
  {
    id: "coverage-inverse",
    topic: "Coverage",
    question: "How many 150 bp reads are required to obtain 30× coverage of a 2.8 Gbp genome?",
    answer: "Use the inverse of the coverage formula: N = (coverage × genome size) / read length. The target is 30× and the genome size is 2.8 × 10^9 bp, so the required number of sequenced bases is 30 × 2.8 × 10^9 = 84 × 10^9 bp. If each read is 150 bp, N = 84 × 10^9 / 150 = 560,000,000 reads. Therefore, about 560 million reads of 150 bp are required. If the data are paired-end, be clear whether N refers to individual reads or read pairs, because one pair of PE150 produces 300 bp of sequence.",
  },
  {
    id: "hwe-exercise",
    topic: "Population genetics",
    question: "Estimate whether a population is in HWE with 500 AA, 200 Aa and 300 aa individuals.",
    answer: "There are 500 + 200 + 300 = 1000 individuals, so there are 2000 alleles. The number of A alleles is 2×500 from AA plus 200 from Aa, giving 1200 A alleles. Therefore p = 1200/2000 = 0.6 and q = 1 - p = 0.4. Under Hardy-Weinberg equilibrium, expected genotype frequencies are p² = 0.36, 2pq = 0.48 and q² = 0.16. Multiplying by 1000 individuals gives expected counts of 360 AA, 480 Aa and 160 aa. The observed counts, 500 AA, 200 Aa and 300 aa, differ strongly from expected counts, especially with a deficit of heterozygotes, so the population does not appear to be in HWE. In a formal test, you could use a chi-square or exact test.",
  },
  {
    id: "fastqc-boxplot",
    topic: "NGS quality control",
    question: "Describe the FastQC 'Per base sequence quality' module and when trimming should be applied.",
    answer: "The FastQC Per base sequence quality module shows the distribution of Phred quality scores at each position across all reads, usually as a boxplot. The central line represents the median quality, the box shows the interquartile range and the whiskers show the broader distribution. In many Illumina datasets, quality decreases toward the 3' end of reads. Trimming should be applied when adapters are present, when the last bases have consistently low quality, or when poor-quality positions could affect mapping or variant calling. However, trimming should not be excessive, because very short reads may map ambiguously or be discarded.",
  },
  {
    id: "fastq-to-vcf",
    topic: "NGS pipeline",
    question: "Describe a simple NGS variant discovery workflow from FASTQ to VCF.",
    answer: "A simple variant discovery workflow starts with raw FASTQ files and initial quality control using a tool such as FastQC. If adapters or low-quality tails are detected, reads are trimmed and QC is repeated. Clean reads are aligned to a reference genome with a mapper such as BWA, producing SAM/BAM files. The BAM files are then sorted, indexed and often duplicate-marked. After alignment QC, variants are called with a variant caller to detect SNPs and indels, producing a VCF file. Finally, variants are filtered by quality, depth, missingness or other criteria, and they can be annotated to interpret their genomic location and possible effects.",
  },
  {
    id: "busco-open",
    topic: "Genome assembly",
    question: "What is BUSCO and how is it used to evaluate a genome assembly?",
    answer: "BUSCO stands for Benchmarking Universal Single-Copy Orthologs. It evaluates genome or transcriptome completeness by searching for conserved genes that are expected to be present in single copy in a given evolutionary lineage. BUSCO classifies these genes as complete, duplicated, fragmented or missing. A high percentage of complete BUSCOs suggests that the assembly contains much of the expected gene space. Many duplicated BUSCOs can indicate biological duplication, but in genome assembly it may also suggest uncollapsed haplotypes or assembly redundancy. BUSCO complements statistics such as N50 because an assembly can be very contiguous but still missing important genes.",
  },
  {
    id: "annotation-open",
    topic: "Genome annotation",
    question: "Explain the difference between structural annotation and functional annotation.",
    answer: "Structural annotation identifies where genomic features are located and how they are organized. It includes predicting genes, exons, introns, UTRs, non-coding RNAs, repeats and other genomic elements, usually with evidence from ab initio prediction, RNA-seq, proteins and homology. Functional annotation comes after structural annotation and tries to assign biological meaning to those predicted features. It may include gene names, protein domains, GO terms, pathways, orthology, enzyme codes and putative functions based on database similarity. In short, structural annotation answers where the features are and what their structure is; functional annotation answers what they may do.",
  },
  {
    id: "ora-open",
    topic: "Post-GWAS interpretation",
    question: "What is the role of ORA after GWAS?",
    answer: "ORA, or Over-Representation Analysis, is used after GWAS to interpret a list of candidate genes, usually genes near significant SNPs or within associated regions. It tests whether some biological categories, pathways, Gene Ontology terms or functional classes appear more often in the candidate list than expected by chance compared with a background gene set. ORA helps move from a list of markers to biological interpretation, for example identifying enriched immune, metabolic or developmental pathways. Its result depends strongly on how candidate genes and the background set are defined, so it should be interpreted carefully.",
  },
  {
    id: "depth-breadth",
    topic: "Coverage",
    question: "What is the difference between depth of coverage and breadth of coverage?",
    answer: "Depth of coverage is the number of reads covering a base or region, often summarized as the average coverage across the genome. For example, 30× depth means that, on average, each base is covered by 30 reads. Breadth of coverage is the proportion of the genome or target region covered at least once or above a chosen threshold, such as at least 10×. These concepts are different: a dataset can have high average depth but poor breadth if reads are unevenly distributed, duplicated or concentrated in some regions. For variant calling, both sufficient depth and broad, uniform coverage are important.",
  },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getCorrectOption(question) {
  return question.options.find((option) => option.correct);
}

const TOPIC_FA = {
  "Foundational genetics": "ژنتیک پایه",
  "Sequencing technologies": "فناوری‌های توالی‌یابی",
  "NGS technologies": "فناوری‌های NGS",
  "NGS file formats": "فرمت‌های فایل NGS",
  "NGS data analysis": "تحلیل داده NGS",
  "Variant formats": "فرمت‌های variant",
  "NGS library design": "طراحی library در NGS",
  "Population genomics": "ژنومیکس جمعیتی",
  "Genome assembly": "مونتاژ ژنوم",
  "Population genetics": "ژنتیک جمعیت",
  "Genome annotation and quality": "حاشیه‌نویسی و کیفیت ژنوم",
  "Genome annotation": "حاشیه‌نویسی ژنوم",
  CNV: "CNV",
  GWAS: "GWAS",
  "Post-GWAS interpretation": "تفسیر پس از GWAS",
  "Functional genomics": "ژنومیکس عملکردی",
  Transcriptomics: "ترنسکریپتومیکس",
  Epigenomics: "اپی‌ژنومیکس",
  "Genome size": "اندازه ژنوم",
  Coverage: "Coverage",
  "NGS quality control": "کنترل کیفیت NGS",
  "NGS pipeline": "Pipeline NGS",
};

const MCQ_FA = {
  "allele-definition": {
    question: "Allele چیست؟",
    options: {
      a: "یک مجموعه کامل از کروموزوم‌ها",
      b: "یک شکل جایگزین از یک ژن",
      c: "یک read توالی‌یابی که به ژنوم align شده است",
      d: "نوعی mutation که فقط در نواحی coding دیده می‌شود",
    },
  },
  sanger: {
    question: "Sanger sequencing عمدتا بر چه اصلی استوار است؟",
    options: { a: "Sequencing by ligation", b: "Chain termination با dideoxynucleotideها", c: "تشخیص یون‌های H+", d: "Single-molecule sequencing در زمان واقعی" },
  },
  "ion-torrent-principle": {
    question: "اصل پایه Ion Torrent sequencing چیست؟",
    options: { a: "تشخیص نور ناشی از آزاد شدن pyrophosphate", b: "تشخیص H+ آزادشده هنگام اضافه شدن nucleotide", c: "تشخیص reversible terminatorهای فلورسنت", d: "تشخیص methylation با bisulfite conversion" },
  },
  fastq: {
    question: "فایل FASTQ چه اطلاعاتی را نگه می‌دارد؟",
    options: { a: "Variant callها و genotypeها", b: "Readهای خام و quality scoreهای آن‌ها", c: "حاشیه‌نویسی ژنوم و مختصات ژن‌ها", d: "ساختار جمعیتی و مختصات MDS" },
  },
  sam: {
    question: "کاربرد فایل SAM در تحلیل NGS چیست؟",
    options: { a: "ذخیره readهای خام و quality scoreها", b: "ذخیره alignment readها روی reference genome", c: "ذخیره فقط SNP genotypeها", d: "ذخیره functional annotation ژن‌ها" },
  },
  bam: {
    question: "BAM نشان‌دهنده چیست؟",
    options: { a: "نسخه binary و compressed از SAM", b: "پایگاه داده ژن‌های annotated", c: "فایل فقط شامل readهای خام", d: "روشی برای تخمین اندازه ژنوم" },
  },
  bwa: {
    question: "کدام ابزار معمولا برای align کردن short readها به reference genome استفاده می‌شود؟",
    options: { a: "BUSCO", b: "BWA", c: "ORA", d: "FastQC" },
  },
  cigar: {
    question: "CIGAR string چه چیزی را توصیف می‌کند؟",
    options: { a: "Quality score هر base در read", b: "عملیات alignment read نسبت به reference", c: "Allele frequency یک SNP", d: "تعداد contigها در assembly" },
  },
  "phased-genotype": {
    question: "Notation ژنوتیپی 0|1 در VCF معمولا چه معنایی دارد؟",
    options: { a: "Homozygous reference genotype", b: "Heterozygous phased genotype با یک allele reference و یک alternate", c: "Genotype missing", d: "Structural variant" },
  },
  solid: {
    question: "ABI SOLiD sequencing با چه چیزی شناخته می‌شود؟",
    options: { a: "Two-base encoding و sequencing by ligation", b: "Long-read single-molecule sequencing", c: "تشخیص H+ هنگام nucleotide incorporation", d: "Bisulfite conversion cytosineها" },
  },
  "long-reads": {
    question: "کدام فناوری NGS معمولا با long reads مفید برای de novo assembly مرتبط است؟",
    options: { a: "Illumina", b: "Ion Torrent", c: "PacBio", d: "ABI SOLiD" },
  },
  illumina: {
    question: "Illumina sequencing معمولا با چه چیزی مرتبط است؟",
    options: { a: "Short reads و throughput بالا", b: "فقط ultra-long reads", c: "تشخیص یون‌های H+", d: "Sequencing by ligation با two-base encoding" },
  },
  "paired-end": {
    question: "Paired-end sequencing چیست؟",
    options: { a: "توالی‌یابی فقط یک strand از DNA", b: "توالی‌یابی هر دو انتهای همان fragment DNA", c: "توالی‌یابی دو نمونه نامرتبط با هم", d: "توالی‌یابی فقط DNA methylated" },
  },
  "ld-definition": {
    question: "Linkage disequilibrium چه چیزی را توصیف می‌کند؟",
    options: { a: "شباهت بین دو population", b: "Correlation بین alleleهای دو SNP در یک population", c: "تعداد contigهای link شده در assembly", d: "Mutation rate markerهای ژنتیکی" },
  },
  "inbreeding-assembly": {
    question: "در فرد highly inbred، چرا genome assembly ممکن است آسان‌تر شود؟",
    options: { a: "ژنوم بزرگ‌تر می‌شود", b: "Heterozygosity زیاد می‌شود", c: "Homozygosity زیاد می‌شود", d: "Sequencing error حذف می‌شود" },
  },
  roh: {
    question: "Runs of Homozygosity یا ROH چیست؟",
    options: { a: "ناحیه‌هایی با SNPهای heterozygous زیاد", b: "ناحیه‌های طولانی ژنومی که فرد در آن‌ها homozygous است", c: "ناحیه‌هایی بدون sequencing coverage", d: "ناحیه‌هایی فقط شامل structural variantها" },
  },
  "hwe-definition": {
    question: "یک population چه زمانی در Hardy-Weinberg equilibrium است؟",
    options: { a: "وقتی genotype frequencyها تحت فرض‌های ایده‌آل p²، 2pq و q² باشند", b: "وقتی همه افراد homozygous باشند", c: "وقتی allele frequencyها هر نسل تغییر کنند", d: "وقتی selection شدیدا یک genotype را ترجیح دهد" },
  },
  debruijn: {
    question: "در assembly مبتنی بر de Bruijn graph، مسئله بازسازی معمولا به یافتن چه چیزی مرتبط است؟",
    options: { a: "فقط Hamiltonian cycle", b: "Eulerian path یا Eulerian cycle", c: "Manhattan distance", d: "Hardy-Weinberg equilibrium" },
  },
  n50: {
    question: "N50 در genome assembly چه چیزی را اندازه می‌گیرد؟",
    options: { a: "تعداد ژن‌ها در genome", b: "طول کوچک‌ترین contig لازم برای پوشش ۵۰٪ assembly هنگام مرتب‌سازی از بلندترین به کوتاه‌ترین", c: "Average sequencing depth", d: "تعداد BUSCOهای missing" },
  },
  busco: {
    question: "BUSCO برای چه استفاده می‌شود؟",
    options: { a: "تخمین allele frequency در Pool-seq", b: "ارزیابی completeness ژنوم با conserved single-copy orthologs", c: "تشخیص H+ هنگام sequencing", d: "اصلاح p-valueهای GWAS" },
  },
  "structural-annotation": {
    question: "Structural annotation عمدتا به چه معناست؟",
    options: { a: "اختصاص نقش زیستی به ژن‌های پیش‌بینی‌شده", b: "شناسایی موقعیت و ساختار ژن‌ها و featureهای ژنومی", c: "تخمین sequencing depth", d: "محاسبه allele frequency" },
  },
  "functional-annotation": {
    question: "Functional annotation عمدتا به چه معناست؟",
    options: { a: "اختصاص نقش زیستی احتمالی به ژن‌ها یا featureها", b: "Align کردن readها به reference genome", c: "Calling SNP و indel", d: "محاسبه N50" },
  },
  acgh: {
    question: "aCGH چیست؟",
    options: { a: "فناوری chip-based برای resequencing ژنوم", b: "روش microarray-based برای تشخیص copy number variation", c: "استراتژی paired-end NGS", d: "روشی برای محاسبه LD" },
  },
  "gwas-aim-mcq": {
    question: "هدف اصلی GWAS چیست؟",
    options: { a: "Assembly ژنوم بدون reference", b: "شناسایی variantهای ژنتیکی associated با phenotype", c: "Trim کردن readهای کم‌کیفیت", d: "تخمین غلظت DNA" },
  },
  "manhattan-x-axis": {
    question: "در Manhattan plot، محور x معمولا چه چیزی را نشان می‌دهد؟",
    options: { a: "موقعیت SNPها روی chromosomeها", b: "طول sequencing read", c: "BUSCO completeness", d: "Sample quality score" },
  },
  "manhattan-y-axis": {
    question: "در Manhattan plot، محور y معمولا چه چیزی را نشان می‌دهد؟",
    options: { a: "Minor allele frequency", b: "-log10(P-value) مربوط به association SNP", c: "Read depth", d: "تعداد contigها" },
  },
  "multiple-testing": {
    question: "چرا multiple testing correction در GWAS مهم است؟",
    options: { a: "چون هزاران یا میلیون‌ها SNP همزمان تست می‌شوند", b: "چون readها همیشه paired-end هستند", c: "چون همه SNPها effect size یکسان دارند", d: "چون GWAS از p-value استفاده نمی‌کند" },
  },
  bonferroni: {
    question: "کدام correction در GWAS ساده ولی محافظه‌کارانه محسوب می‌شود؟",
    options: { a: "Bonferroni correction", b: "Sanger correction", c: "BUSCO correction", d: "De Bruijn correction" },
  },
  mds: {
    question: "MDS معمولا در تحلیل ژنومیکس جمعیتی برای چه استفاده می‌شود؟",
    options: { a: "نمایش رابطه ژنتیکی یا ساختار جمعیتی افراد", b: "محاسبه sequencing depth", c: "تشخیص cytosineهای methylated", d: "اندازه‌گیری purity DNA" },
  },
  ora: {
    question: "ORA در تحلیل پس از GWAS چیست؟",
    options: { a: "Over-Representation Analysis برای یافتن categoryهای زیستی enriched در candidate geneها", b: "روشی برای align کردن readها", c: "روشی برای محاسبه genome size از C-value", d: "فناوری long-read sequencing" },
  },
};

const OPEN_FA = {
  "gwas-aim": {
    question: "هدف GWAS چیست؟",
    answer: "GWAS یا genome-wide association study، variantهای ژنتیکی در سراسر ژنوم را تست می‌کند تا markerهایی پیدا شوند که از نظر آماری با یک phenotype مرتبط‌اند. Phenotype می‌تواند binary مثل case/control یا quantitative مثل وزن و expression باشد. هدف فقط پیدا کردن SNP significant نیست؛ باید regionهای ژنومی، candidate geneها و pathwayهای احتمالی را هم تفسیر کرد. Association به‌تنهایی causality را ثابت نمی‌کند، چون SNP ممکن است فقط به‌واسطه LD، causal variant را tag کند.",
  },
  "gwas-design": {
    question: "عناصر اصلی طراحی GWAS را توضیح بده.",
    answer: "GWAS خوب با phenotype دقیق شروع می‌شود، چون phenotype noisy قدرت تحلیل را کم می‌کند. Sample size کافی، genotyping/sequencing قابل اعتماد، QC برای sample و marker، و شناخت LD structure لازم است. Population structure باید با PCA، MDS، covariate یا mixed model کنترل شود، چون ancestry می‌تواند false association بسازد. در پایان باید multiple testing correction و ترجیحا replication یا validation انجام شود.",
  },
  "manhattan-detail": {
    question: "Manhattan plot را با جزئیات توضیح بده.",
    answer: "Manhattan plot نمایش استاندارد نتایج GWAS است. هر نقطه معمولا یک SNP یا marker است؛ محور x موقعیت ژنومی مرتب‌شده بر اساس chromosome را نشان می‌دهد و محور y معمولا -log10(P-value) است. P-value کوچک‌تر نقطه بالاتری می‌سازد، بنابراین peakها regionهای دارای evidence قوی‌تر را نشان می‌دهند. خطوط افقی thresholdهای suggestive یا genome-wide significance هستند. Peak ممکن است causal variant یا marker در LD با causal variant باشد، پس annotation و prioritization لازم است.",
  },
  "ld-open": {
    question: "LD چیست و چرا برای GWAS مهم است؟",
    answer: "Linkage disequilibrium یا LD یعنی association غیرتصادفی بین alleleهای loci مختلف در یک population. اگر allele یک SNP اطلاعاتی درباره allele SNP دیگر بدهد، LD وجود دارد. در GWAS، SNPهای chip معمولا همه causal نیستند، اما می‌توانند variantهای causal نزدیک را tag کنند. میزان LD روی marker density، resolution و interpretation peakها اثر می‌گذارد: LD بالا detection را آسان‌تر ولی pinpoint کردن causal variant را سخت‌تر می‌کند.",
  },
  chipseq: {
    question: "هدف اصلی ChIP-seq چیست؟",
    answer: "ChIP-seq برای شناسایی regionهای ژنومی bound by a protein یا دارای chromatin mark خاص استفاده می‌شود. DNA-protein complexها crosslink می‌شوند، chromatin fragment می‌شود، target با antibody immunoprecipitate می‌شود، DNA enriched sequence و سپس به reference map می‌شود. Output اصلی peak/enriched region است، نه expression مستقیم. این روش برای transcription factor binding، promoter، enhancer و epigenomic regulation کاربرد دارد.",
  },
  rnaseq: {
    question: "RNA-seq چیست و به چه سؤال‌های زیستی پاسخ می‌دهد؟",
    answer: "RNA-seq روشی sequencing-based برای مطالعه transcriptome است. RNA استخراج، به cDNA تبدیل، sequence و سپس quantification می‌شود. با آن می‌توان فهمید کدام geneها expressed هستند، کدام geneها بین conditionها differential expression دارند و آیا transcript یا isoform جایگزین وجود دارد. RNA-seq همچنین با evidence برای exon boundary و expressed gene به genome annotation کمک می‌کند.",
  },
  poolseq: {
    question: "Pool-seq چیست؟",
    answer: "Pool-seq یعنی sequencing DNA pool ساخته‌شده از چند فرد، معمولا با مقدار برابر DNA. به جای sequencing تک‌تک افراد، pool به عنوان یک sample sequence می‌شود و allele frequency از read countها تخمین زده می‌شود. برای مقایسه populationها و selection signature کم‌هزینه است، اما individual genotype نمی‌دهد؛ بنابراین برای ROH فردی، kinship یا GWAS استاندارد مناسب نیست.",
  },
  bisulfite: {
    question: "Bisulfite sequencing چیست؟",
    answer: "Bisulfite sequencing برای مطالعه DNA methylation، مخصوصا cytosine methylation، استفاده می‌شود. Sodium bisulfite cytosineهای unmethylated را به uracil تبدیل می‌کند که بعد از PCR مثل thymine خوانده می‌شود؛ cytosineهای methylated محافظت می‌شوند و C باقی می‌مانند. بعد از sequencing، الگوی C-to-T برای inference methylation استفاده می‌شود. این تفاوت‌ها mutation معمولی نیستند و به aligner/control مناسب نیاز دارند.",
  },
  cvalue: {
    question: "چطور می‌توان genome size را قبل از sequencing با C-value تخمین زد؟",
    answer: "C-value مقدار DNA در haploid genome است. قبل از sequencing می‌توان nuclear DNA content را با روش‌هایی مثل flow cytometry اندازه گرفت و mass DNA را به base pair تبدیل کرد. تقریب رایج این است که 1 pg DNA حدود 978 Mbp است. این تخمین مهم است چون depth به genome size وابسته است؛ اگر genome بزرگ‌تر از انتظار باشد، همان تعداد read coverage پایین‌تری می‌دهد.",
  },
  "kmer-genome-size": {
    question: "چطور genome size با k-mer تخمین زده می‌شود؟",
    answer: "در روش k-mer، readها به تمام زیررشته‌های طول k شکسته و frequency هر k-mer شمرده می‌شود. Genome size تقریبا برابر total reliable k-mers تقسیم بر depth peak اصلی است. Low-frequency k-merها معمولا sequencing error هستند؛ peak اصلی true single-copy k-merها را نشان می‌دهد؛ high-frequency k-merها معمولا repeat یا duplication هستند. در genome heterozygous ممکن است peak اضافی نزدیک نصف coverage دیده شود.",
  },
  "n50-exercise": {
    question: "N50 را برای contigهای 100، 70، 60، 50، 50، 40 و 30 kb حساب کن.",
    answer: "Contigها از بلند به کوتاه مرتب‌اند. طول کل 400 kb است، پس نصف آن 200 kb است. Cumulative sum: ابتدا 100، سپس 170، هنوز کمتر از 200 است. با اضافه کردن contig بعدی به 230 می‌رسیم و از آستانه 50٪ عبور می‌کنیم. آن contig طول 60 kb دارد، پس N50 = 60 kb. N50 contiguity را می‌سنجد، نه correctness یا gene completeness.",
  },
  "coverage-direct": {
    question: "Depth متوسط را برای genome یک Gbp با 100 میلیون read صد bp تخمین بزن.",
    answer: "فرمول depth = (N x L) / G است. N = 100,000,000 و L = 100 bp، پس bases sequenced برابر 10,000,000,000 bp یا 10 Gbp است. Genome size برابر 1 Gbp است، پس depth = 10 Gbp / 1 Gbp = 10x. این depth متوسط است و depth موضعی ممکن است متفاوت باشد.",
  },
  "coverage-inverse": {
    question: "برای 30x coverage از genome 2.8 Gbp با readهای 150 bp چند read لازم است؟",
    answer: "از فرم معکوس استفاده کن: N = (coverage x genome size) / read length. هدف 30x و genome size برابر 2.8 x 10^9 bp است؛ bases لازم 84 x 10^9 bp می‌شود. اگر هر read برابر 150 bp باشد، N = 84 x 10^9 / 150 = 560,000,000 read. در paired-end باید روشن کنی N read است یا read pair.",
  },
  "hwe-exercise": {
    question: "بررسی کن population با 500 AA، 200 Aa و 300 aa در HWE هست یا نه.",
    answer: "کل افراد 1000 و کل alleleها 2000 است. تعداد A برابر 2x500 + 200 = 1200 است، پس p = 0.6 و q = 0.4. تحت HWE، expected frequencies برابر p² = 0.36، 2pq = 0.48 و q² = 0.16 هستند. برای 1000 فرد، expected counts برابر 360 AA، 480 Aa و 160 aa می‌شود. Observed counts بسیار فرق دارند، به‌خصوص heterozygote deficit، پس population ظاهرا در HWE نیست.",
  },
  "fastqc-boxplot": {
    question: "ماژول FastQC Per base sequence quality را توضیح بده و بگو trimming کی لازم است.",
    answer: "این ماژول distribution Phred quality score را در هر position از readها، معمولا به شکل boxplot، نشان می‌دهد. خط مرکزی median، box محدوده interquartile و whisker پراکندگی وسیع‌تر را نشان می‌دهد. در بسیاری از datasetهای Illumina کیفیت انتهای 3' پایین می‌آید. اگر adapter، primer یا tail کم‌کیفیت mapping/variant calling را خراب کند trimming لازم است، اما over-trimming readها را خیلی کوتاه و ambiguous می‌کند.",
  },
  "fastq-to-vcf": {
    question: "یک workflow ساده variant discovery از FASTQ تا VCF را توضیح بده.",
    answer: "Workflow از FASTQ خام شروع می‌شود و با FastQC کنترل کیفیت انجام می‌دهد. اگر adapter یا tail کم‌کیفیت وجود داشته باشد، trimming و سپس QC دوباره انجام می‌شود. Readهای تمیز با BWA یا mapper مشابه به reference align می‌شوند و SAM/BAM تولید می‌شود. BAM sort/index و گاهی duplicate-mark می‌شود. سپس variant caller SNP/indel را call می‌کند و VCF تولید می‌شود. در پایان variantها بر اساس quality، depth، missingness یا معیارهای دیگر filter و annotate می‌شوند.",
  },
  "busco-open": {
    question: "BUSCO چیست و چطور genome assembly را ارزیابی می‌کند؟",
    answer: "BUSCO مخفف Benchmarking Universal Single-Copy Orthologs است. Completeness genome یا transcriptome را با جستجوی geneهای conserved که انتظار می‌رود در یک lineage به صورت single copy باشند ارزیابی می‌کند. BUSCOها به complete، duplicated، fragmented یا missing طبقه‌بندی می‌شوند. Complete BUSCO بالا یعنی gene space زیادی حاضر است؛ duplicated BUSCO زیاد می‌تواند assembly redundancy یا uncollapsed haplotypes را نشان دهد.",
  },
  "annotation-open": {
    question: "تفاوت structural annotation و functional annotation را توضیح بده.",
    answer: "Structural annotation مشخص می‌کند featureهای ژنومی کجا هستند و چه ساختاری دارند: gene، exon، intron، UTR، non-coding RNA، repeat و غیره. Functional annotation بعد از آن می‌آید و برای این featureها معنی زیستی پیشنهاد می‌کند، مثل gene name، protein domain، GO term، pathway، orthology یا enzyme code. خلاصه: structural می‌پرسد feature کجاست و ساختارش چیست؛ functional می‌پرسد احتمالا چه کاری انجام می‌دهد.",
  },
  "ora-open": {
    question: "نقش ORA بعد از GWAS چیست؟",
    answer: "ORA یا Over-Representation Analysis برای تفسیر candidate gene list بعد از GWAS استفاده می‌شود. بررسی می‌کند آیا pathwayها، Gene Ontology termها یا categoryهای زیستی در candidate geneها بیشتر از انتظار دیده می‌شوند یا نه. این کار کمک می‌کند از marker list به تفسیر زیستی برسیم. نتیجه ORA به تعریف candidate gene و background gene set بسیار حساس است.",
  },
  "depth-breadth": {
    question: "تفاوت depth of coverage و breadth of coverage چیست؟",
    answer: "Depth of coverage تعداد readهایی است که یک base یا region را پوشش می‌دهند و اغلب به صورت average coverage گزارش می‌شود؛ مثلا 30x یعنی هر base به طور متوسط با 30 read پوشیده شده است. Breadth of coverage نسبت genome یا target region است که حداقل یک بار یا بالاتر از threshold مشخص پوشش گرفته است. Dataset می‌تواند average depth بالا ولی breadth ضعیف داشته باشد اگر readها uneven یا duplicated باشند.",
  },
};

function faExplanation(option) {
  if (option.correct) {
    return "درست. این گزینه تعریف یا کاربرد اصلی مفهوم را نشان می‌دهد و با wording امتحانی سازگار است.";
  }
  return "نادرست. این گزینه به مفهوم دیگری مربوط است یا یکی از distractorهای رایج امتحان است؛ تعریف دقیق و خروجی/کاربرد را دوباره چک کن.";
}

function localizeQuestions(items, lang) {
  if (lang !== "fa") return items;
  return items.map((question) => {
    const entry = MCQ_FA[question.id];
    if (!entry) return question;
    return {
      ...question,
      topic: TOPIC_FA[question.topic] || question.topic,
      question: entry.question,
      options: question.options.map((option) => ({
        ...option,
        text: entry.options?.[option.id] || option.text,
        explanation: faExplanation(option),
      })),
    };
  });
}

function localizeOpenQuestions(items, lang) {
  if (lang !== "fa") return items;
  return items.map((item) => ({
    ...item,
    topic: TOPIC_FA[item.topic] || item.topic,
    question: OPEN_FA[item.id]?.question || item.question,
    answer: OPEN_FA[item.id]?.answer || item.answer,
  }));
}

function resolveAgLang(lang) {
  const normalize = (value) => String(value || "").trim().toLowerCase().replace(/^["']|["']$/g, "");
  const propLang = normalize(lang);
  if (propLang === "fa") return "fa";
  const savedLang = typeof localStorage !== "undefined"
    ? normalize(localStorage.getItem("studyhub_lang") || localStorage.getItem("phylo_lang"))
    : "";
  return savedLang === "fa" ? "fa" : "en";
}

function examCopy(lang) {
  if (lang !== "fa") {
    return {
      back: "Back to Applied Genomics",
      eyebrow: "Practice exam",
      title: "Applied Genomics · Practice exam",
      intro:
        "Answer the 30 multiple-choice questions first. After selecting an option, the page shows whether you were correct and explains every option, including why the distractors are wrong. Then use the open-question section to draft short answers and reveal the model answer only after practicing.",
      progress: "Progress",
      mcAnswered: "MC answered",
      correct: "Correct",
      currentScore: "Current score",
      openPracticed: "Open practiced",
      reset: "Reset practice",
      multipleChoice: "Multiple choice",
      mcTitle: "30 exam-style questions",
      mcBody: "One and only one answer is correct. The feedback appears after you select an option.",
      incorrect: "Incorrect",
      correctPrefix: "correct",
      openQuestions: "Open questions",
      shortAnswerPractice: "Short-answer practice",
      openBody: "Draft your answer in the box first. Then open the model answer and compare whether you included the key concepts, calculations and interpretation.",
      open: "Open",
      yourAnswer: "Your practice answer",
      placeholder: "Write a short exam-style answer here before revealing the model answer...",
      showModel: "Show model answer",
    };
  }

  return {
    back: "بازگشت به ژنومیکس کاربردی",
    eyebrow: "آزمون تمرینی",
    title: "ژنومیکس کاربردی · آزمون تمرینی",
    intro:
      "اول سؤال‌های چندگزینه‌ای را پاسخ بده. بعد از انتخاب گزینه، صفحه درست یا غلط بودن پاسخ را نشان می‌دهد و توضیح می‌دهد چرا گزینه‌های دیگر رد می‌شوند. سپس در بخش سؤال‌های باز، پاسخ کوتاه بنویس و فقط بعد از تمرین پاسخ نمونه را باز کن.",
    progress: "پیشرفت",
    mcAnswered: "MC پاسخ‌داده‌شده",
    correct: "درست",
    currentScore: "امتیاز فعلی",
    openPracticed: "پاسخ باز تمرین‌شده",
    reset: "شروع دوباره تمرین",
    multipleChoice: "چندگزینه‌ای",
    mcTitle: "۳۰ سؤال به سبک امتحان",
    mcBody: "فقط یک پاسخ درست است. بازخورد بعد از انتخاب گزینه ظاهر می‌شود.",
    incorrect: "نادرست",
    correctPrefix: "پاسخ درست",
    openQuestions: "سؤال‌های باز",
    shortAnswerPractice: "تمرین پاسخ کوتاه",
    openBody: "اول پاسخ خودت را در کادر بنویس. سپس پاسخ نمونه را باز کن و بررسی کن آیا مفاهیم، محاسبات و تفسیرهای کلیدی را آورده‌ای یا نه.",
    open: "باز",
    yourAnswer: "پاسخ تمرینی تو",
    placeholder: "قبل از دیدن پاسخ نمونه، یک پاسخ کوتاه امتحانی بنویس...",
    showModel: "نمایش پاسخ نمونه",
  };
}

export default function GenomicsPracticeExamPage({ lang = "en" }) {
  const activeLang = resolveAgLang(lang);
  const copy = examCopy(activeLang);
  const backArrow = activeLang === "fa" ? "→" : "←";
  const [answers, setAnswers] = useState({});
  const [openAnswers, setOpenAnswers] = useState({});
  const questions = useMemo(() => localizeQuestions(QUESTIONS, activeLang), [activeLang]);
  const openQuestions = useMemo(() => localizeOpenQuestions(OPEN_QUESTIONS, activeLang), [activeLang]);
  const total = questions.length;
  const answered = Object.keys(answers).length;
  const openPracticed = Object.values(openAnswers).filter((value) => value.trim().length > 0).length;
  const score = useMemo(
    () => questions.filter((question) => answers[question.id] === getCorrectOption(question)?.id).length,
    [answers, questions],
  );
  const percent = answered ? Math.round((score / answered) * 100) : 0;

  const choose = (questionId, optionId) => {
    setAnswers((current) => ({ ...current, [questionId]: optionId }));
  };

  const reset = () => {
    setAnswers({});
    setOpenAnswers({});
  };

  return (
    <main className="mx-auto w-[min(1040px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/95 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <a href="#/" className="inline-flex items-center gap-1 text-sm font-black text-red-700">
              <span aria-hidden="true">{backArrow}</span>
              <span>{copy.back}</span>
            </a>
            <div className="mt-6 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">
              {copy.eyebrow}
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              {copy.intro}
            </p>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.progress}</div>
              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                <div className="rounded-2xl bg-stone-50 p-4 text-center">
                  <div className="text-3xl font-black text-stone-950">{answered}</div>
                  <div className="mt-1 text-xs font-bold text-stone-500">{copy.mcAnswered}</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 text-center">
                  <div className="text-3xl font-black text-stone-950">{score}</div>
                  <div className="mt-1 text-xs font-bold text-stone-500">{copy.correct}</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 text-center">
                  <div className="text-3xl font-black text-stone-950">{percent}%</div>
                  <div className="mt-1 text-xs font-bold text-stone-500">{copy.currentScore}</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 text-center">
                  <div className="text-3xl font-black text-stone-950">{openPracticed}</div>
                  <div className="mt-1 text-xs font-bold text-stone-500">{copy.openPracticed}</div>
                </div>
              </div>
              <div className="mt-5 h-3 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
                <div className="h-full rounded-full bg-red-700 transition-all" style={{ width: `${Math.round((answered / total) * 100)}%` }} />
              </div>
              <button onClick={reset} className="mt-5 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-black text-stone-800 transition hover:bg-stone-50">
                {copy.reset}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm md:p-7">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.multipleChoice}</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.mcTitle}</h2>
        <p className="mt-2 max-w-3xl leading-7 text-stone-600">
          {copy.mcBody}
        </p>
      </section>

      <section className="mt-5 grid gap-5">
        {questions.map((question, index) => {
          const selected = answers[question.id];
          const correct = getCorrectOption(question);
          const isAnswered = Boolean(selected);
          const isCorrect = selected === correct?.id;

          return (
            <article key={question.id} className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-stone-500">
                  {String(index + 1).padStart(2, "0")} · {question.topic}
                </div>
                {isAnswered && (
                  <div className={cx(
                    "rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.14em]",
                    isCorrect ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700",
                  )}>
                    {isCorrect ? copy.correct : `${copy.incorrect} · ${copy.correctPrefix}: ${correct?.id.toUpperCase()}`}
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-2xl font-black leading-tight text-stone-950">{question.question}</h3>

              <div className="mt-5 grid gap-3">
                {question.options.map((option) => {
                  const wasSelected = selected === option.id;
                  const shouldShowFeedback = isAnswered;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => choose(question.id, option.id)}
                      className={cx(
                        "rounded-2xl border p-4 text-start transition hover:-translate-y-0.5 hover:shadow-md",
                        !shouldShowFeedback && "border-stone-200 bg-white",
                        shouldShowFeedback && option.correct && "border-emerald-300 bg-emerald-50",
                        shouldShowFeedback && wasSelected && !option.correct && "border-red-300 bg-red-50",
                        shouldShowFeedback && !wasSelected && !option.correct && "border-stone-200 bg-stone-50",
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <span className={cx(
                          "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black",
                          shouldShowFeedback && option.correct ? "bg-emerald-600 text-white" : wasSelected ? "bg-red-700 text-white" : "bg-stone-200 text-stone-700",
                        )}>
                          {option.id.toUpperCase()}
                        </span>
                        <span>
                          <span className="block text-base font-black text-stone-900">{option.text}</span>
                          {shouldShowFeedback && (
                            <span className="mt-2 block text-sm font-semibold leading-6 text-stone-600">
                              {option.explanation}
                            </span>
                          )}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-10 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm md:p-7">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.openQuestions}</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.shortAnswerPractice}</h2>
        <p className="mt-2 max-w-3xl leading-7 text-stone-600">
          {copy.openBody}
        </p>
      </section>

      <section className="mt-5 grid gap-5">
        {openQuestions.map((item, index) => (
          <article key={item.id} className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm md:p-7">
            <div className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-stone-500">
              {copy.open} {String(index + 1).padStart(2, "0")} · {item.topic}
            </div>
            <h3 className="mt-4 text-2xl font-black leading-tight text-stone-950">{item.question}</h3>
            <label className="mt-5 block text-sm font-black uppercase tracking-[0.14em] text-stone-500" htmlFor={`open-${item.id}`}>
              {copy.yourAnswer}
            </label>
            <textarea
              id={`open-${item.id}`}
              value={openAnswers[item.id] || ""}
              onChange={(event) => setOpenAnswers((current) => ({ ...current, [item.id]: event.target.value }))}
              placeholder={copy.placeholder}
              className="mt-2 min-h-36 w-full rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-semibold leading-6 text-stone-800 outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
            />
            <details className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <summary className="cursor-pointer text-sm font-black uppercase tracking-[0.14em] text-emerald-800">{copy.showModel}</summary>
              <p className="mt-3 text-sm font-semibold leading-7 text-stone-700">{item.answer}</p>
            </details>
          </article>
        ))}
      </section>
    </main>
  );
}
