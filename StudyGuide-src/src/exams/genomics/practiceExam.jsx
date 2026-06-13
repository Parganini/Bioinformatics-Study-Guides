import React, { useMemo, useState } from "react";

const QUESTIONS = [
  {
    id: "ld-definition",
    topic: "Population genomics",
    question: "What does linkage disequilibrium describe?",
    options: [
      {
        id: "a",
        text: "The degree of similarity between two populations",
        explanation: "This describes genetic similarity or differentiation between populations, often explored with PCA/MDS, FST or admixture analyses. It is not linkage disequilibrium.",
      },
      {
        id: "b",
        text: "The correlation between alleles of two SNPs within a population",
        explanation: "Correct. Linkage disequilibrium is the non-random association, or correlation, between alleles at different loci in a population.",
        correct: true,
      },
      {
        id: "c",
        text: "The rate of linked contigs during genome assembly",
        explanation: "This mixes the word linkage with assembly. Contig/scaffold relationships are assembly concepts, not LD.",
      },
      {
        id: "d",
        text: "The mutation rate of genetic markers",
        explanation: "Mutation rate is the rate at which new variants arise. LD instead describes how existing alleles co-occur in a population.",
      },
    ],
  },
  {
    id: "long-reads",
    topic: "NGS technologies",
    question: "Which NGS technology is known for producing long reads, often useful in de novo genome assembly?",
    options: [
      {
        id: "a",
        text: "Illumina",
        explanation: "Illumina is high-throughput and accurate but typically produces short reads, commonly around 100–300 bp depending on the platform and run configuration.",
      },
      {
        id: "b",
        text: "Ion Torrent",
        explanation: "Ion Torrent detects pH changes from H+ release during nucleotide incorporation. It is not the classic long-read choice for de novo assembly.",
      },
      {
        id: "c",
        text: "PacBio",
        explanation: "Correct. PacBio single-molecule sequencing produces long reads that help span repeats and improve de novo genome assembly contiguity.",
        correct: true,
      },
      {
        id: "d",
        text: "Roche 454",
        explanation: "454 produced longer reads than early short-read platforms, but it is an older discontinued pyrosequencing technology and not the standard answer for modern long-read assembly.",
      },
    ],
  },
  {
    id: "manhattan-y-axis",
    topic: "GWAS",
    question: "In a Manhattan plot from a GWAS, what does the vertical axis typically represent?",
    options: [
      {
        id: "a",
        text: "The SNP position in base pairs along the chromosome",
        explanation: "SNP genomic position is usually shown on the x-axis, ordered by chromosome and physical position.",
      },
      {
        id: "b",
        text: "The minor allele frequency of each SNP",
        explanation: "MAF is important for quality control and interpretation, but it is not the usual y-axis in a Manhattan plot.",
      },
      {
        id: "c",
        text: "The significance level, usually −log10(P), of each SNP association",
        explanation: "Correct. Higher points correspond to smaller p-values and therefore stronger statistical evidence of association.",
        correct: true,
      },
      {
        id: "d",
        text: "The effect size beta of each SNP",
        explanation: "Effect size can be reported in GWAS results, but the classic Manhattan plot uses transformed p-values on the y-axis.",
      },
    ],
  },
  {
    id: "sam-purpose",
    topic: "NGS data analysis",
    question: "What is the purpose of a SAM file in NGS data analysis?",
    options: [
      {
        id: "a",
        text: "To store raw sequencing reads and quality scores",
        explanation: "That is the role of FASTQ files. FASTQ stores sequences and per-base quality scores before alignment.",
      },
      {
        id: "b",
        text: "To store sequence alignments to a reference genome",
        explanation: "Correct. SAM is a text format that stores how sequencing reads align to a reference genome, including mapping position and CIGAR information.",
        correct: true,
      },
      {
        id: "c",
        text: "To store variant calls and inferred genotypes",
        explanation: "Variant calls and genotypes are typically stored in VCF format, not SAM.",
      },
      {
        id: "d",
        text: "To store genome annotation information",
        explanation: "Genome annotations are commonly stored in formats such as GFF/GTF. SAM is for read alignments.",
      },
    ],
  },
  {
    id: "acgh",
    topic: "CNV",
    question: "What is aCGH?",
    options: [
      {
        id: "a",
        text: "A chip-based genome resequencing technology",
        explanation: "aCGH uses hybridization signals on an array, but it is not used to resequence bases across the genome.",
      },
      {
        id: "b",
        text: "A microarray-based method to identify copy number variants",
        explanation: "Correct. Array comparative genomic hybridization compares hybridization intensity between samples to detect gains and losses of genomic regions.",
        correct: true,
      },
      {
        id: "c",
        text: "An NGS paired-end sequencing approach",
        explanation: "Paired-end sequencing can help detect structural variants, but aCGH itself is a microarray hybridization method.",
      },
      {
        id: "d",
        text: "A method for advanced evaluation of chromosomal heterozygosity",
        explanation: "Heterozygosity and ROH are usually evaluated with SNP genotyping or sequencing. aCGH focuses on copy number changes.",
      },
    ],
  },
  {
    id: "ion-torrent",
    topic: "NGS technologies",
    question: "What is the general principle of Ion Torrent sequencing?",
    options: [
      {
        id: "a",
        text: "Detection of light generated after pyrophosphate release",
        explanation: "This describes pyrosequencing, such as Roche 454, not Ion Torrent.",
      },
      {
        id: "b",
        text: "Detection of H+ ions released when a nucleotide is incorporated",
        explanation: "Correct. Ion Torrent detects pH changes caused by hydrogen ion release during DNA synthesis.",
        correct: true,
      },
      {
        id: "c",
        text: "Sequencing by ligation using two-base encoding",
        explanation: "That is the characteristic principle of ABI SOLiD sequencing.",
      },
      {
        id: "d",
        text: "Direct detection of methylated cytosines after bisulfite conversion",
        explanation: "Bisulfite sequencing is an epigenomic method for DNA methylation, not the core principle of Ion Torrent.",
      },
    ],
  },
  {
    id: "solid",
    topic: "NGS technologies",
    question: "ABI SOLiD sequencing is best associated with which feature?",
    options: [
      {
        id: "a",
        text: "Two-base encoding and sequencing by ligation",
        explanation: "Correct. SOLiD uses ligation chemistry and a color-space/two-base encoding system.",
        correct: true,
      },
      {
        id: "b",
        text: "Single-molecule real-time long reads",
        explanation: "This is associated with PacBio, not ABI SOLiD.",
      },
      {
        id: "c",
        text: "Hydrogen ion detection during nucleotide incorporation",
        explanation: "This describes Ion Torrent.",
      },
      {
        id: "d",
        text: "Only methylated DNA is sequenced",
        explanation: "SOLiD is a sequencing platform, not a methylation-specific conversion method.",
      },
    ],
  },
  {
    id: "inbreeding-assembly",
    topic: "Genome assembly",
    question: "Why can genome assembly be easier in a highly inbred individual?",
    options: [
      {
        id: "a",
        text: "Because the genome becomes smaller",
        explanation: "Inbreeding does not generally make the genome physically smaller. The relevant effect is on heterozygosity.",
      },
      {
        id: "b",
        text: "Because homozygosity increases and fewer haplotypic differences complicate assembly",
        explanation: "Correct. High homozygosity reduces alternative alleles that can be misassembled as separate contigs or haplotigs.",
        correct: true,
      },
      {
        id: "c",
        text: "Because sequencing errors disappear",
        explanation: "Sequencing errors still occur. Inbreeding affects biological variation, not the error rate of the sequencing machine.",
      },
      {
        id: "d",
        text: "Because all repetitive regions are removed",
        explanation: "Repeats remain a major assembly challenge even in inbred samples.",
      },
    ],
  },
  {
    id: "busco",
    topic: "Genome annotation and quality",
    question: "What is BUSCO mainly used for?",
    options: [
      {
        id: "a",
        text: "Estimating allele frequencies in pooled sequencing",
        explanation: "Pool-seq estimates allele frequencies from read counts in pooled samples. BUSCO is not for that purpose.",
      },
      {
        id: "b",
        text: "Assessing genome assembly completeness using conserved single-copy orthologs",
        explanation: "Correct. BUSCO evaluates how many expected conserved single-copy genes are complete, duplicated, fragmented or missing.",
        correct: true,
      },
      {
        id: "c",
        text: "Correcting p-values in GWAS",
        explanation: "Multiple testing correction methods such as Bonferroni or FDR address GWAS p-values. BUSCO evaluates assemblies.",
      },
      {
        id: "d",
        text: "Aligning short reads to a reference genome",
        explanation: "Short-read aligners such as BWA are used for mapping. BUSCO is not an aligner for sequencing reads.",
      },
    ],
  },
  {
    id: "debruijn",
    topic: "Genome assembly",
    question: "In de Bruijn graph-based assembly, the reconstruction problem is commonly related to finding:",
    options: [
      {
        id: "a",
        text: "An Eulerian path through the graph",
        explanation: "Correct. De Bruijn approaches represent k-mers as graph elements and assembly is related to traversing edges, classically with an Eulerian path/cycle formulation.",
        correct: true,
      },
      {
        id: "b",
        text: "A Hardy–Weinberg equilibrium",
        explanation: "Hardy–Weinberg equilibrium is a population-genetics model for genotype frequencies, not an assembly graph algorithm.",
      },
      {
        id: "c",
        text: "A Manhattan plot peak",
        explanation: "Manhattan plots summarize GWAS association p-values; they are unrelated to de Bruijn graph traversal.",
      },
      {
        id: "d",
        text: "A CIGAR string",
        explanation: "A CIGAR string describes how one read aligns to a reference; it is not the graph traversal used in de Bruijn assembly.",
      },
    ],
  },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getCorrectOption(question) {
  return question.options.find((option) => option.correct);
}

export default function GenomicsPracticeExamPage() {
  const [answers, setAnswers] = useState({});
  const total = QUESTIONS.length;
  const answered = Object.keys(answers).length;
  const score = useMemo(
    () => QUESTIONS.filter((question) => answers[question.id] === getCorrectOption(question)?.id).length,
    [answers],
  );
  const percent = answered ? Math.round((score / answered) * 100) : 0;

  const choose = (questionId, optionId) => {
    setAnswers((current) => ({ ...current, [questionId]: optionId }));
  };

  const reset = () => setAnswers({});

  return (
    <main className="mx-auto w-[min(1040px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/95 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <a href="#/" className="text-sm font-black text-red-700">← Back to Applied Genomics</a>
            <div className="mt-6 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">
              Mini practice exam
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">
              Applied Genomics · Practice exam
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              Select an answer to see whether it is correct and to reveal an explanation for every option: what it means and why it is or is not correct.
            </p>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Progress</div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-stone-50 p-4 text-center">
                  <div className="text-3xl font-black text-stone-950">{answered}</div>
                  <div className="mt-1 text-xs font-bold text-stone-500">Answered</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 text-center">
                  <div className="text-3xl font-black text-stone-950">{score}</div>
                  <div className="mt-1 text-xs font-bold text-stone-500">Correct</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 text-center">
                  <div className="text-3xl font-black text-stone-950">{percent}%</div>
                  <div className="mt-1 text-xs font-bold text-stone-500">Current score</div>
                </div>
              </div>
              <div className="mt-5 h-3 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
                <div className="h-full rounded-full bg-red-700 transition-all" style={{ width: `${Math.round((answered / total) * 100)}%` }} />
              </div>
              <button onClick={reset} className="mt-5 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-black text-stone-800 transition hover:bg-stone-50">
                Reset answers
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5">
        {QUESTIONS.map((question, index) => {
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
                    {isCorrect ? "Correct" : `Incorrect · correct: ${correct?.id.toUpperCase()}`}
                  </div>
                )}
              </div>
              <h2 className="mt-4 text-2xl font-black leading-tight text-stone-950">{question.question}</h2>

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
                        "rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md",
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
    </main>
  );
}
