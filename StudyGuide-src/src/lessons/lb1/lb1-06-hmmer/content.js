import { buildSections } from "../shared/buildContent.js";

const deck = "6-HMMER.pdf";
const deckFolder = "06-hmmer";
const title = "HMMER: profile-HMM workflows for homolog search";

export const lessonContent = {
  id: "lb1-06-hmmer",
  extractionStatus: "real slide screenshots extracted from 6-HMMER.pdf; full deck covered",
  whyThisMatters: "HMMER is where profile-HMM theory becomes a practical database-search workflow. The important skill is to connect commands, statistical scores and biological interpretation instead of treating hits as automatic annotation.",
  objectives: ["Describe the HMMER workflow from alignment to profile to database search.", "Explain hmmbuild and hmmsearch conceptually.", "Interpret E-values and significance.", "Explain why profile-HMM searches help detect remote homologs.", "Check hits before transferring annotation."],
  coreConcepts: [
    { title: "hmmbuild", body: "Builds a profile HMM from a multiple alignment.", keywords: ["build", "profile", "MSA"] },
    { title: "hmmsearch", body: "Searches sequence databases with a profile HMM.", keywords: ["search", "database", "hits"] },
    { title: "E-value", body: "Estimates expected false positives at a score threshold under a search space.", keywords: ["significance", "false positives", "score"] },
  ],
  routeSteps: [
    { title: "Prepare the seed alignment", body: "Check that the family alignment is representative and domain-bounded." },
    { title: "Build and search", body: "Use the profile to search databases for homologous sequences." },
    { title: "Interpret hits", body: "Use E-value, coverage, domain architecture and conserved residues before annotation transfer." },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "HMMER is a workflow: seed alignment, profile model, database search, statistical interpretation and biological validation.",
    trap: "Do not call every low E-value hit a confirmed function.",
    prompt: "Which step of the HMMER workflow is this slide about, and what evidence does it produce?",
    sections: [
      { start: 1, end: 6, title: "HMMER as profile-HMM practice", intro: "The opening slides frame HMMER as a tool for profile-based family search.", teaching: "Study interpretation: the tool is powerful because the model represents a family pattern." },
      { start: 7, end: 14, title: "Building models and searching databases", intro: "This block maps the workflow from MSA to profile model to sequence hits.", teaching: "Study interpretation: building a model and searching with it are different operations." },
      { start: 15, end: 24, title: "Scores, E-values and significance", intro: "The middle slides explain how to decide whether hits are statistically meaningful.", teaching: "Study interpretation: statistical significance supports homology but does not prove exact function." },
      { start: 25, end: 32, title: "Remote homolog detection", intro: "The deck connects profile HMMs to remote relationships that pairwise searches may miss.", teaching: "Study interpretation: remote hits need stronger checks: coverage, conserved positions and domain boundaries." },
      { start: 33, end: 40, title: "Workflow interpretation and reporting", intro: "The closing slides support a reproducible checklist for reporting HMMER results.", teaching: "Study interpretation: a good report explains seed, model, search space, thresholds and biological conclusion." },
    ],
  }),
  miniLabs: [
    { title: "HMMER workflow checklist", goal: "Practice explaining the pipeline without commands becoming magic.", steps: ["Name the input to hmmbuild.", "Name the output of hmmbuild.", "Name what hmmsearch compares and what you inspect in the output."], output: "A three-step HMMER workflow.", check: "Each step should have input, output and purpose.", trap: "Do not say HMMER simply tells you the function." },
    { title: "Hit triage", goal: "Decide whether a hit deserves annotation transfer.", steps: ["Check E-value and score.", "Check coverage over the expected domain.", "Check conserved residues or motifs.", "Write the safest annotation level."], output: "A cautious hit interpretation.", check: "The safest answer may be family/domain membership, not exact function.", trap: "Do not ignore partial hits." },
  ],
  checkpoints: [
    { question: "What does HMMER do?", answer: "HMMER builds and searches profile HMMs to detect homologous sequences, especially remote homologs represented by family-level patterns." },
    { question: "What do hmmbuild and hmmsearch do?", answer: "hmmbuild creates a profile HMM from a multiple alignment; hmmsearch uses that model to search a sequence database." },
    { question: "How should E-values be interpreted?", answer: "They estimate how many hits with a similar score would be expected by chance in the search space; they support significance but do not prove exact function." },
  ],
  modelAnswer: { question: "What does HMMER do, and why is it useful for remote homologs?", answer: "HMMER uses profile Hidden Markov Models to represent a protein family from a multiple alignment and search sequence databases. Because the profile is position-specific, it captures conserved residues, tolerated substitutions and indel patterns better than a single query sequence. This makes it useful for remote homolog detection, but hits must still be checked for E-value, coverage, domain boundaries and biological plausibility before transferring annotation." },
  sourceNotes: ["Primary source: 6-HMMER.pdf in the Capriotti LB1 Drive folder.", "All slide ranges in the deck are represented with real extracted screenshots.", "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations."],
};
