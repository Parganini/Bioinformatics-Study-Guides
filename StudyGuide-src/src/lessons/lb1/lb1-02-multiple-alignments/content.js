import { buildSections } from "../shared/buildContent.js";

const deck = "2-Multiple-Alignments.pdf";
const deckFolder = "02-multiple-alignments";
const title = "Multiple alignments: conservation, variability and profiles";

export const lessonContent = {
  id: "lb1-02-multiple-alignments",
  extractionStatus: "real slide screenshots extracted from all 46 slides of 2-Multiple-Alignments.pdf",
  whyThisMatters: "Multiple alignments are where LB1 moves from pairwise comparison to family-level evidence. A multiple alignment lets you see conserved and variable sites, estimate residue distributions, build sequence profiles, evaluate alignment strategies, and decide whether an annotation or profile-HMM model is justified.",
  objectives: [
    "Explain what equivalent residues mean in a multiple alignment and why columns are biological hypotheses.",
    "Interpret conserved sites, variable sites and residue distributions as family-specific information.",
    "Explain sequence profiles, sequence logos, entropy and information content at a conceptual level.",
    "Describe sum-of-pairs, entropy and profile-based scoring for MSAs.",
    "Contrast exact, progressive, iterative and consistency-based MSA strategies.",
    "Explain why early errors and gap choices propagate in progressive alignments.",
    "Describe how MUSCLE and T-Coffee improve on simple progressive alignment.",
    "Interpret benchmark ideas such as BAliBASE, SP score, Z-score and method-performance comparisons.",
  ],
  coreConcepts: [
    {
      title: "Equivalent residues",
      body: "An MSA is a representation where equivalent residues are aligned in columns. Equivalent can mean structurally corresponding, functionally related or evolutionarily homologous.",
      keywords: ["columns", "equivalence", "homology"],
    },
    {
      title: "Family-specific information",
      body: "Conserved and variable positions are not general amino-acid facts; they are specific to the protein family and alignment being studied.",
      keywords: ["family", "conserved sites", "variable sites"],
    },
    {
      title: "Sequence profiles and logos",
      body: "A profile stores residue frequencies per position. A sequence logo visualizes information content: tall letters mark informative, conserved positions.",
      keywords: ["profile", "logo", "entropy"],
    },
    {
      title: "MSA scoring",
      body: "Multiple alignments can be scored by summing induced pairwise scores, minimizing entropy or aligning sequence/profile and profile/profile vectors.",
      keywords: ["sum-of-pairs", "entropy", "profile-profile"],
    },
    {
      title: "Progressive alignment",
      body: "Progressive MSA aligns the closest sequences first using a guide tree, then builds profiles and aligns groups. Early mistakes can propagate.",
      keywords: ["guide tree", "profiles", "error propagation"],
    },
    {
      title: "Iterative and consistency methods",
      body: "MUSCLE iterates guide trees and alignments; T-Coffee uses consistency information from pairwise alignments to reduce incoherent column choices.",
      keywords: ["MUSCLE", "T-Coffee", "consistency"],
    },
    {
      title: "Benchmarking",
      body: "Alignment methods are evaluated against reference alignments such as BAliBASE using measures like SP score and Z-score, not by visual appeal alone.",
      keywords: ["BAliBASE", "SP score", "Z-score"],
    },
  ],
  routeSteps: [
    {
      title: "Read the alignment as a claim",
      body: "Every column claims that residues are equivalent. Ask whether that claim is structural, functional or evolutionary.",
    },
    {
      title: "Extract family information",
      body: "Use conserved columns, residue distributions and logos to identify family constraints and candidate functional sites.",
    },
    {
      title: "Understand the algorithmic choices",
      body: "Exact MSA is expensive, so practical tools use progressive, iterative or consistency-based approximations.",
    },
    {
      title: "Evaluate before using",
      body: "Check guide-tree coherence, gap behavior, benchmarks and conserved-site stability before building profiles or transferring annotation.",
    },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "An MSA is a family-level hypothesis about residue equivalence, conservation and position-specific constraints.",
    trap: "Do not treat the output of ClustalW, MUSCLE or T-Coffee as biological truth before checking gaps, conserved columns and method assumptions.",
    prompt: "What does this slide teach about equivalence, scoring, algorithm strategy or alignment evaluation?",
    sections: [
      {
        start: 1,
        end: 4,
        title: "What a multiple alignment represents",
        intro: "The opening slides define multiple structure/sequence alignment and show that columns are meant to align equivalent residues.",
        teaching: "Study interpretation: the professor is moving from pairwise comparison to family-level evidence. The important word is equivalent: residues share a structural, functional or evolutionary role.",
        remember: "A column is a biological claim, not just a formatting choice.",
        trap: "Do not call all aligned residues equivalent unless the alignment quality and family relationship support it.",
        prompt: "What does it mean for residues in one MSA column to be equivalent?",
      },
      {
        start: 5,
        end: 7,
        title: "Conservation, profiles and sequence logos",
        intro: "These slides introduce conserved residues, sequence profiles and sequence logos based on entropy/information content.",
        teaching: "Study interpretation: conservation becomes computable by estimating residue distributions at each position.",
        remember: "Profiles store per-position residue frequencies; logos visualize information content.",
        trap: "Do not say a tall logo letter automatically proves catalytic function. It proves conservation/information, then biology must explain why.",
        prompt: "How does entropy relate to how informative a column is?",
      },
      {
        start: 8,
        end: 11,
        title: "Scoring MSAs and profiles",
        intro: "The deck explains sum-of-pairs scoring, entropy minimization, profile-based alignment and sequence-to-profile scoring.",
        teaching: "Study interpretation: MSA scoring generalizes pairwise alignment by using induced pairwise alignments or position-specific profile vectors.",
        remember: "A profile vector turns a column into a 20-amino-acid probability/frequency summary.",
        trap: "Do not treat profile scoring as a simple one-letter substitution; the score is an average over the residue distribution.",
        prompt: "Why can a profile score represent family evidence better than one sequence letter?",
      },
      {
        start: 12,
        end: 20,
        title: "Alignment strategies: exact, progressive and gap problems",
        intro: "This block explains why exact multi-dimensional dynamic programming is impractical, then introduces progressive MSA, guide trees, profile-profile alignment and gap propagation.",
        teaching: "Study interpretation: practical MSA is approximate because exact algorithms become too slow as sequence number grows.",
        remember: "Progressive alignment is fast and useful, but early pairwise errors and gap placements can propagate.",
        trap: "Do not forget that initial gap choices can overweight early close sequences or distort later distant sequences.",
        prompt: "Why does progressive MSA depend so strongly on the first alignments and guide tree?",
      },
      {
        start: 21,
        end: 27,
        title: "Evaluating and improving progressive alignments",
        intro: "The cytochrome examples show alternative alignments, guide-tree versus phylogenetic-tree mismatch, iterative improvement and MUSCLE.",
        teaching: "Study interpretation: the deck is teaching that alignment quality must be inspected and iterated, not accepted blindly.",
        remember: "If the phylogenetic tree inferred from the MSA is incoherent with the guide-tree logic, the alignment may need refinement.",
        trap: "Do not assume the first guide tree is the final evolutionary explanation.",
        prompt: "How does MUSCLE improve the initial progressive alignment idea?",
      },
      {
        start: 28,
        end: 38,
        title: "Consistency and T-Coffee",
        intro: "This section develops consistency: if x aligns with z and z aligns with y, then x should align with y. T-Coffee uses pairwise-alignment libraries and weights to build more consistent MSAs.",
        teaching: "Study interpretation: consistency methods use pairwise evidence to avoid MSA columns that contradict the pairwise alignments supporting them.",
        remember: "T-Coffee = Tree-based Consistency Objective Function for alignment Evaluation.",
        trap: "Do not reduce T-Coffee to another progressive aligner; the consistency library is the key idea.",
        prompt: "What does transitivity mean in the context of aligned residues?",
      },
      {
        start: 39,
        end: 44,
        title: "Benchmarking alignment methods",
        intro: "The deck introduces BAliBASE, SP score, Z-score comparisons and conclusions about consistency-based programs, MAFFT, Probalign and Clustal Omega.",
        teaching: "Study interpretation: method performance should be evaluated on reference benchmarks, especially when sequences are remote or contain extensions.",
        remember: "An alignment method is judged by agreement with trusted reference alignments, not by looking tidy.",
        trap: "Do not claim one method is always best; performance depends on dataset type, sequence identity and extensions.",
        prompt: "What does SP score measure in an MSA benchmark?",
      },
      {
        start: 45,
        end: 46,
        title: "Practical exercises: cytochromes and SwissProt retrieval",
        intro: "The final slides turn the lecture into hands-on practice: download cytochrome sequences, align them, compute identity/conservation and retrieve homologs by BLAST.",
        teaching: "Study interpretation: the exercise connects the theory to the practical workflow: retrieve sequences, choose a tool, inspect conserved positions and compare with structural alignment.",
        remember: "The output to interpret is not only the alignment file; it is the conserved-position and identity evidence you extract from it.",
        trap: "Do not report a tool run without analyzing conserved sites, sequence identity and structural alignment agreement.",
        prompt: "What should your report include after aligning the cytochrome sequences?",
      },
    ],
  }),
  miniLabs: [
    {
      title: "Logo reader",
      goal: "Practice reading a sequence logo as a family-level summary.",
      steps: [
        "Pick one strongly conserved column and one variable column.",
        "Write what each column suggests biologically.",
        "State one uncertainty that would make the conclusion weaker.",
      ],
      output: "Two column interpretations plus one caveat.",
      check: "Good answers distinguish conservation from proof of function.",
      trap: "Do not call every tall letter catalytic.",
    },
    {
      title: "Profile scoring dry run",
      goal: "Understand why sequence-to-profile scoring is position-specific.",
      steps: [
        "Take a column where C is frequent but F, L and N also occur.",
        "Explain why the score for aligning residue C to that profile is weighted by all column frequencies.",
        "State how this differs from comparing C to a single residue in one sequence.",
      ],
      output: "A short explanation of profile-weighted scoring.",
      check: "You should mention residue distribution and substitution matrix contribution.",
      trap: "Do not describe profile scoring as if only the most common residue matters.",
    },
    {
      title: "Progressive-alignment failure audit",
      goal: "Identify where early errors enter a progressive MSA.",
      steps: [
        "Name the first pairwise alignments used to build the guide tree.",
        "Mark one gap introduced early.",
        "Explain how keeping or moving that gap affects later distant sequences.",
      ],
      output: "A guide-tree and gap-propagation note.",
      check: "Strong answers mention error propagation and gap placement.",
      trap: "Do not assume later profile-profile steps automatically fix early mistakes.",
    },
    {
      title: "T-Coffee consistency check",
      goal: "Practice the transitivity idea behind consistency-based alignment.",
      steps: [
        "Suppose x aligns with z and z aligns with y.",
        "Write what consistency expects for x and y.",
        "Explain how an extended pairwise library can support or penalize a proposed alignment.",
      ],
      output: "A three-sentence consistency explanation.",
      check: "The key word is transitivity.",
      trap: "Do not confuse guide-tree similarity with consistency evidence.",
    },
    {
      title: "Benchmark interpreter",
      goal: "Read method-performance slides like a careful evaluator.",
      steps: [
        "Define what a reference alignment is.",
        "Explain SP score in one sentence.",
        "State why performance can differ for low-identity sequences or sequences with terminal extensions.",
      ],
      output: "A benchmark interpretation paragraph.",
      check: "Good answers avoid claiming one universal best method.",
      trap: "Do not judge alignment tools only from one tidy example.",
    },
  ],
  checkpoints: [
    {
      question: "What information does a multiple alignment reveal?",
      answer: "It reveals position-specific conservation, tolerated substitutions, insertions/deletions, family-level patterns and candidate functional or structural sites.",
    },
    {
      question: "What is a sequence profile?",
      answer: "A sequence profile represents each MSA column as a residue-frequency vector, usually over the 20 amino-acid types.",
    },
    {
      question: "What does a sequence logo add?",
      answer: "A sequence logo visualizes column information content and residue frequencies, making conserved and variable positions easier to inspect.",
    },
    {
      question: "Why is exact MSA impractical for many sequences?",
      answer: "Exact multi-dimensional dynamic programming has time and memory requirements that grow too quickly with sequence number and length.",
    },
    {
      question: "What is the main weakness of progressive MSA?",
      answer: "It depends heavily on the initial pairwise alignments and guide tree, so early errors and gap choices can propagate through the final alignment.",
    },
    {
      question: "What is the key idea of T-Coffee?",
      answer: "T-Coffee uses consistency information from pairwise alignments, including extended library evidence, to guide the final multiple alignment.",
    },
  ],
  modelAnswer: {
    question: "What information can a multiple alignment reveal about a protein family?",
    answer: "A multiple alignment shows which positions are equivalent across a family, which columns are conserved, which positions tolerate substitutions or gaps, and which residues may be functionally or structurally constrained. From the alignment we can estimate residue distributions, build sequence profiles and visualize information content with sequence logos. The main caveat is that the alignment is itself a hypothesis: progressive methods can propagate early errors, gaps can be misplaced, and the result should be evaluated with consistency checks, benchmarks or structural evidence before using it for annotation or profile-HMM construction.",
  },
  sourceNotes: [
    "Primary source: 2-Multiple-Alignments.pdf in the Capriotti LB1 Drive folder.",
    "All 46 slide screenshots were extracted from the source PDF and are shown with slide/page labels.",
    "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations.",
  ],
};
