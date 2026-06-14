import { buildSections } from "../shared/buildContent.js";

const deck = "6-HMMER.pdf";
const deckFolder = "06-hmmer";
const title = "HMMER: profile-HMM workflows for homolog search";

export const lessonContent = {
  id: "lb1-06-hmmer",
  extractionStatus: "real slide screenshots extracted from all 40 slides of 6-HMMER.pdf",
  whyThisMatters:
    "HMMER is the practical bridge from profile-HMM theory to real bioinformatics work. This lecture teaches how to build a profile from an MSA, calibrate and read scores, search databases, interpret E-values, inspect alignments and scan domain libraries. The exam-relevant skill is not memorizing commands; it is explaining what evidence each command produces and how cautiously annotation should be transferred.",
  objectives: [
    "Explain what HMMER is used for: homolog search, sequence alignment and remote homolog detection.",
    "Describe the HMMER workflow from seed MSA to trained profile HMM to database search.",
    "Interpret likelihood, null model, log-odds bit score, E-value and P-value in HMMER context.",
    "Read Stockholm format annotations such as RF, SS_cons and MM at a conceptual level.",
    "Explain hmmbuild output: alignment length, model length, effective sequences and entropy per position.",
    "Recognize what the HMM file stores: metadata, statistical parameters, emissions, transitions and null model scores.",
    "Use Skylign/hmmlogo and hmmemit as model-inspection tools.",
    "Interpret hmmsearch output: full-sequence versus domain E-values, score, bias, coordinates, posterior probabilities and alignment lines.",
    "Explain hmmalign, hmmpress and hmmscan workflows.",
    "Design a cautious report for the kinase/fibronectin domain exercise.",
  ],
  coreConcepts: [
    {
      title: "HMMER workflow",
      body: "Start with a curated MSA, build a profile HMM with hmmbuild, search or align sequences with HMMER tools, then interpret scores, domains and alignments.",
      keywords: ["workflow", "hmmbuild", "hmmsearch"],
    },
    {
      title: "Remote homolog detection",
      body: "HMMER is sensitive because a profile HMM captures position-specific residue preferences and indel patterns across a family.",
      keywords: ["remote homolog", "profile HMM", "family"],
    },
    {
      title: "Domain model",
      body: "HMMER models domains locally inside longer sequences, allowing multiple hits and insertion/deletion events for each domain occurrence.",
      keywords: ["domain", "multi-domain", "local alignment"],
    },
    {
      title: "Null model and bit score",
      body: "HMMER scores compare the profile model against a null/background model. The log-odds score in bits asks whether the sequence is better explained by the family model than by background composition.",
      keywords: ["null model", "log odds", "bits"],
    },
    {
      title: "E-value and P-value",
      body: "The E-value is the expected number of random matches at least as good as the observed score in the search space; the P-value is the probability of seeing at least one such rare event.",
      keywords: ["E-value", "P-value", "Gumbel"],
    },
    {
      title: "Stockholm format",
      body: "Stockholm alignments can include sequence rows and annotation lines such as reference columns, consensus secondary structure and model masks that guide HMM training.",
      keywords: ["Stockholm", "RF", "MM"],
    },
    {
      title: "HMM output",
      body: "The HMM file records model metadata, statistical parameters for E-values, consensus information, emissions and transitions encoded as scores.",
      keywords: ["HMM file", "emissions", "transitions"],
    },
    {
      title: "hmmsearch output",
      body: "A search report separates full-sequence and best-domain statistics, reports domain coordinates, shows model-target alignment and gives posterior probability for aligned residues.",
      keywords: ["hmmsearch", "domain", "posterior probability"],
    },
    {
      title: "Bias warning",
      body: "A high bias value can indicate compositionally biased or repetitive sequence regions, so the hit should be inspected rather than accepted blindly.",
      keywords: ["bias", "composition", "repetitive"],
    },
    {
      title: "hmmscan",
      body: "hmmscan reverses the search logic: a protein sequence is scanned against a library of HMMs to identify matching domains.",
      keywords: ["hmmscan", "hmmpress", "domain library"],
    },
  ],
  routeSteps: [
    {
      title: "Curate the input MSA",
      body: "Check family boundaries, redundancy, conserved columns and annotations before building the profile.",
    },
    {
      title: "Build and inspect the model",
      body: "Use hmmbuild, then inspect model length, effective sequence number, entropy, emissions, transitions and logos.",
    },
    {
      title: "Search or align",
      body: "Use hmmsearch for model-to-sequence-database searches, hmmalign to align sequences to a model and hmmscan to search one sequence against an HMM library.",
    },
    {
      title: "Interpret statistically",
      body: "Use bit score, E-values, full-sequence/domain statistics, bias and posterior probabilities to decide whether evidence is strong.",
    },
    {
      title: "Interpret biologically",
      body: "Check domain coverage, conserved positions, repetitive regions and expected domain architecture before transferring annotation.",
    },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "HMMER is a source-aware workflow: input alignment, trained profile, statistical scoring, domain-level output and biological validation.",
    trap: "Do not equate a significant E-value with exact functional annotation; first check coverage, domains, bias, alignment confidence and biological plausibility.",
    prompt: "Which HMMER command, output field or interpretation rule is this slide teaching?",
    sections: [
      {
        start: 1,
        end: 4,
        title: "What HMMER is and why it detects remote homologs",
        intro:
          "The opening slides introduce HMMER, cite the profile-HMM work behind it, and define the tool as useful for database homolog search and sequence alignment. The general model emphasizes local domains inside larger proteins.",
        teaching:
          "Study interpretation: HMMER is powerful because it models domains as probabilistic family patterns, not because it magically knows function.",
        remember: "HMMER3 is designed for remote homolog detection and is fast enough to compete with BLAST-like workflows.",
        trap: "Do not treat an entire protein as one domain if the model covers only a local domain.",
        prompt: "What does the general model say about N-terminal, C-terminal and inter-domain regions?",
      },
      {
        start: 5,
        end: 8,
        title: "From MSA to score: hmmbuild, Bayes and null model",
        intro:
          "These slides connect HMMER to the probability logic from L03 and L04. hmmbuild estimates emissions, transitions and statistical parameters from an aligned family, then scoring compares the profile against a null model.",
        teaching:
          "Study interpretation: this is the theoretical checkpoint. HMMER reports useful scores because it compares P(s | M) to a background model and attaches significance statistics.",
        remember: "The log-odds bit score is log2 P(s | M) / P(s | N).",
        trap: "Do not read P(s | M) as P(M | s) without priors or model comparison.",
        prompt: "Why does HMMER need a null model before assigning significance?",
      },
      {
        start: 9,
        end: 11,
        title: "Extreme value statistics, E-value and P-value",
        intro:
          "The lecture explains how random sequences are scored, fitted with a Gumbel distribution and used to estimate the probability or expected number of random matches above a threshold.",
        teaching:
          "Study interpretation: E-values are search-space-aware. They tell you how surprising a score is under random/background expectations.",
        remember: "For rare events, P = 1 - exp(-E) connects E-value and P-value.",
        trap: "Do not say an E-value is the probability that the hit is false. It is an expected count of random hits at that score threshold.",
        prompt: "What is being fitted with the Gumbel distribution?",
      },
      {
        start: 12,
        end: 16,
        title: "Installation, Stockholm input and hmmbuild output",
        intro:
          "This practical block shows HMMER installation, a globin MSA in Stockholm format, annotation lines such as RF/MM/SS_cons, and hmmbuild output fields like alignment length, model length, effective sequence number and entropy.",
        teaching:
          "Study interpretation: the input format carries more than sequences. Annotation lines can guide which columns become match states or masked positions.",
        remember: "hmmbuild takes an MSA file and produces an HMM file; model length is the number of match states.",
        trap: "Do not assume alignment length and HMM model length must be identical; insert columns may not become match states.",
        prompt: "Why can the HMM length be shorter than the MSA alignment length?",
      },
      {
        start: 17,
        end: 23,
        title: "Reading the HMM file: null, emissions and transitions",
        intro:
          "These slides zoom into the HMM output. The file stores null/background scores, state emissions, transition scores and per-layer model information encoded as -ln(p) scores or '*' for zero probability.",
        teaching:
          "Study interpretation: the HMM file is not a black box. It contains the actual probabilistic architecture that later commands use.",
        remember: "Lower -ln(p) scores correspond to higher probabilities; '*' marks p = 0.",
        trap: "Do not read HMM output numbers as raw probabilities; the slides explicitly show score = -ln(p).",
        prompt: "What is the difference between emission rows and transition rows in the model output?",
      },
      {
        start: 24,
        end: 27,
        title: "Model inspection and generation: Skylign, hmmlogo and hmmemit",
        intro:
          "The deck introduces Skylign/hmmlogo for visualizing profile information and hmmemit for generating sample sequences from a profile HMM or null model.",
        teaching:
          "Study interpretation: visualization and generated samples help you inspect what the model has learned before trusting search results.",
        remember: "hmmlogo visualizes conserved/profile positions; hmmemit samples sequences from the trained HMM.",
        trap: "Do not treat emitted sample sequences as real homologs. They are generated examples from the model.",
        prompt: "What can a logo reveal about the profile before running a database search?",
      },
      {
        start: 28,
        end: 32,
        title: "hmmsearch: finding matching sequences and reading E-values",
        intro:
          "This section shows hmmsearch syntax and output. The report sorts hits by E-value and separates full-sequence statistics from best-domain statistics, with score, bias, expected domains and number of domains.",
        teaching:
          "Study interpretation: the output is evidence to triage. Full-sequence and domain-level E-values answer related but distinct questions.",
        remember: "If both full-sequence and domain E-values are much smaller than 1, homology is likely; still check bias and domain architecture.",
        trap: "Do not ignore bias when it is on the same order of magnitude as the score.",
        prompt: "What might it mean if full-sequence E-value is significant but the best-domain E-value is not?",
      },
      {
        start: 33,
        end: 35,
        title: "Alignment details, domain annotations and pipeline statistics",
        intro:
          "These slides explain the alignment section, model line, midline, posterior probability line, match/insert conventions, c-Evalue versus i-Evalue, envelope coordinates, accuracy and internal filters such as MSV, bias, Viterbi and Forward.",
        teaching:
          "Study interpretation: a good HMMER report reads beyond the hit table. It checks where the domain aligns and how confident the residue-level alignment is.",
        remember: "Posterior probability symbols tell which aligned residues are well determined; acc is mean per-residue posterior probability.",
        trap: "Do not report only the top E-value if the aligned region is partial, low-confidence or compositionally biased.",
        prompt: "How do c-Evalue and i-Evalue differ in the domain annotation table?",
      },
      {
        start: 36,
        end: 37,
        title: "hmmalign: aligning sequences to a trained model",
        intro:
          "hmmalign takes a trained HMM and a sequence set, then builds an MSA based on the model. The output uses match and insert column conventions plus posterior probability rows.",
        teaching:
          "Study interpretation: hmmalign is useful when you want a consistent family alignment guided by the same profile architecture.",
        remember: "Uppercase residues are match columns; lowercase residues are insert columns; dots can be padding.",
        trap: "Do not interpret insert columns as aligned to specific profile positions in the same way as match columns.",
        prompt: "Why is aligning through the model different from aligning sequences pairwise from scratch?",
      },
      {
        start: 38,
        end: 40,
        title: "hmmscan, hmmpress and the final domain exercise",
        intro:
          "The final slides reverse the search direction: scan one protein sequence against an HMM library. The exercise asks students to build kinase and fibronectin HMMs, press the library, scan 7LESS_DROME and report which domains are present and how many.",
        teaching:
          "Study interpretation: hmmscan is the domain-annotation workflow: query sequence against profile library, then count supported domain hits.",
        remember: "hmmpress prepares an HMM library for hmmscan.",
        trap: "Do not count domains only from model names; inspect E-values, number of domains, coordinates and alignment quality.",
        prompt: "What evidence would you use to decide how many Fn3 domains are present in 7LESS_DROME?",
      },
    ],
  }),
  miniLabs: [
    {
      title: "Command-purpose map",
      goal: "Explain the HMMER workflow without treating commands as magic.",
      steps: [
        "Write the input and output of hmmbuild.",
        "Write the input and output of hmmsearch.",
        "Write the input and output of hmmalign.",
        "Write the input and output of hmmscan.",
      ],
      output: "A four-row command map.",
      check: "Each row should include input, output and biological purpose.",
      trap: "Do not say all commands simply 'find function'.",
    },
    {
      title: "Stockholm annotation reader",
      goal: "Recognize that the MSA file can guide model construction.",
      steps: [
        "Identify the sequence rows and the end marker in Stockholm format.",
        "Explain what RF columns can indicate.",
        "Explain what MM masking changes in match-state emissions.",
      ],
      output: "A short note on how annotation affects training.",
      check: "Good answers mention match/consensus columns and masked positions.",
      trap: "Do not treat Stockholm as just FASTA with a different header.",
    },
    {
      title: "E-value interpretation drill",
      goal: "Avoid the classic E-value misconception.",
      steps: [
        "State what E = 0.001 means as an expected count.",
        "Explain how search-space size affects E-value.",
        "Write one cautious sentence about homology versus exact function.",
      ],
      output: "A three-sentence E-value interpretation.",
      check: "The answer should not say 'probability this hit is false'.",
      trap: "Do not forget that E-values are tied to the search space.",
    },
    {
      title: "HMM file sanity check",
      goal: "Read model output as probabilities encoded as scores.",
      steps: [
        "Find a score described as -ln(p).",
        "Say whether a lower score means higher or lower probability.",
        "Explain what '*' means for a probability.",
      ],
      output: "A short HMM-output reading rule.",
      check: "Lower -ln(p) means higher p; '*' means p = 0.",
      trap: "Do not read these fields as direct probabilities.",
    },
    {
      title: "hmmsearch hit triage",
      goal: "Decide whether a database hit deserves annotation transfer.",
      steps: [
        "Check full-sequence and best-domain E-values.",
        "Compare bias to score.",
        "Inspect domain coordinates and coverage.",
        "Use posterior probabilities to judge alignment confidence.",
        "Write the safest annotation level.",
      ],
      output: "A cautious hit interpretation.",
      check: "The safest answer may be domain/family membership rather than precise biochemical function.",
      trap: "Do not ignore partial or repetitive hits.",
    },
    {
      title: "7LESS_DROME domain-report sketch",
      goal: "Prepare the final exercise report.",
      steps: [
        "Build separate HMMs for Pkinase and fn3 alignments.",
        "Create and press a combined HMM library.",
        "Scan 7LESS_DROME against the library.",
        "Report significant models, domain counts, coordinates and supporting E-values.",
      ],
      output: "A reproducible domain-annotation report outline.",
      check: "The report should distinguish model-level hits from domain occurrences.",
      trap: "Do not stop at 'kinase/fn3 found' without saying how many and where.",
    },
  ],
  checkpoints: [
    {
      question: "What does HMMER do?",
      answer:
        "HMMER builds and searches profile Hidden Markov Models to detect homologous sequences, align sequences to models and identify domains, especially for remote homologs.",
    },
    {
      question: "What does hmmbuild do?",
      answer:
        "hmmbuild constructs a profile HMM from a multiple sequence alignment, estimating emission and transition parameters and statistical information needed for significance estimates.",
    },
    {
      question: "What is the HMMER null model?",
      answer:
        "It is a background model that generates sequences according to residue or letter abundances, used to compute log-odds scores against the profile model.",
    },
    {
      question: "What does an E-value mean?",
      answer:
        "It is the expected number of random matches with a score at least as good as the observed score in the searched database or search space.",
    },
    {
      question: "Why can model length differ from MSA length?",
      answer:
        "The MSA includes insert columns and gaps, while the model length counts match states representing consensus or modelled columns.",
    },
    {
      question: "What does bias warn about in hmmsearch output?",
      answer:
        "Bias warns about compositionally biased or repetitive sequence effects; if it is large relative to the score, the hit needs extra caution.",
    },
    {
      question: "What do c-Evalue and i-Evalue describe?",
      answer:
        "c-Evalue is the conditional significance of a domain given the sequence is a true homolog, while i-Evalue is the independent significance of the domain as a database hit.",
    },
    {
      question: "What does hmmalign do?",
      answer:
        "hmmalign aligns sequences to an existing profile HMM, producing an MSA guided by the model architecture.",
    },
    {
      question: "What does hmmscan do?",
      answer:
        "hmmscan scans a query sequence against an HMM library to identify matching domains or families.",
    },
  ],
  modelAnswer: {
    question: "Describe a complete HMMER workflow and how you would interpret the result.",
    answer:
      "A complete HMMER workflow starts with a curated multiple sequence alignment for a domain or protein family. hmmbuild converts that alignment into a profile HMM by estimating match-state emissions, insert/delete behavior, transitions and statistical parameters. The model can be inspected with a logo, sampled with hmmemit, used to search a sequence database with hmmsearch, used to align sequences with hmmalign, or placed in a pressed library for hmmscan. The output should be interpreted statistically and biologically: check bit score, full-sequence and domain E-values, bias, domain coordinates, coverage and posterior probability of the alignment. A significant hit supports homology or domain membership, but exact function should only be transferred after checking conserved positions, domain boundaries and biological plausibility.",
  },
  sourceNotes: [
    "Primary source: 6-HMMER.pdf in the Capriotti LB1 Drive folder.",
    "All 40 slide screenshots were extracted from the source PDF and are shown with slide/page labels.",
    "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations.",
  ],
};
