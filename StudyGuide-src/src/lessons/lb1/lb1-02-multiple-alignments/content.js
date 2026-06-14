import { buildSections } from "../shared/buildContent.js";

const deck = "2-Multiple-Alignments.pdf";
const deckFolder = "02-multiple-alignments";
const title = "Multiple alignments: conservation, variability and profiles";

export const lessonContent = {
  id: "lb1-02-multiple-alignments",
  extractionStatus: "real slide screenshots extracted from 2-Multiple-Alignments.pdf; full deck covered",
  whyThisMatters: "Multiple alignments are the bridge between pairwise similarity and family-level models. They let you see conserved positions, tolerated substitutions, gap patterns, functional sites and the column distributions that later become profiles and profile HMMs.",
  objectives: [
    "Explain why a multiple alignment contains more information than independent pairwise alignments.",
    "Identify conserved, variable and functionally constrained positions.",
    "Use residue distributions and sequence logos as family-profile summaries.",
    "Connect multiple alignment quality to downstream annotation and profile-HMM construction.",
  ],
  coreConcepts: [
    { title: "Conserved columns", body: "A conserved alignment column suggests structural or functional constraint, but it is meaningful only if the alignment and family definition are reliable.", keywords: ["conservation", "constraint", "family"] },
    { title: "Variable columns", body: "Variation can mark tolerant positions, loops, insertions, evolutionary divergence or simply uncertain alignment.", keywords: ["variability", "gaps", "uncertainty"] },
    { title: "Profiles", body: "Column-wise residue distributions summarize the family pattern and prepare the transition to profile HMMs.", keywords: ["logo", "profile", "distribution"] },
  ],
  routeSteps: [
    { title: "Read the columns", body: "For each region, ask whether it is conserved, variable, gap-rich or chemically constrained." },
    { title: "Mark functional signals", body: "Look for conserved residues, similar substitutions and positions that match known motifs or active sites." },
    { title: "Prepare the model", body: "Translate the MSA into the idea of match columns, insertion-prone regions and position-specific residue preferences." },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "An MSA is a family-level hypothesis about which positions correspond and which positions are constrained.",
    trap: "Do not treat every conserved column as a catalytic site, and do not build profiles from a visibly poor alignment.",
    prompt: "What does this slide add to the story of conservation, variation or profile construction?",
    sections: [
      { start: 1, end: 6, title: "Why multiple alignments matter", intro: "The opening slides motivate multiple alignment as a way to compare a family rather than only two sequences.", teaching: "Study interpretation: the professor is setting up MSA as evidence for homology, family constraints and later profile models." },
      { start: 7, end: 14, title: "Conserved and variable sites", intro: "This block develops the distinction between columns that are conserved, variable, gap-rich or chemically constrained.", teaching: "Study interpretation: conservation is a clue, but it must be tied to alignment quality and biological role." },
      { start: 15, end: 24, title: "Functional sites and similar substitutions", intro: "These slides connect aligned columns to functional interpretation and to substitutions that preserve chemical role.", teaching: "Study interpretation: exact identity is not the only signal; similar residues may preserve function." },
      { start: 25, end: 36, title: "Residue distributions, logos and profiles", intro: "The deck moves from visual inspection of columns to profile-like summaries of residue preferences.", teaching: "Study interpretation: this is the bridge from MSA to the probabilistic profile models used later." },
      { start: 37, end: 46, title: "Using MSAs as annotation evidence", intro: "The closing slides put alignment evidence back into annotation and model-building decisions.", teaching: "Study interpretation: the alignment is useful only when it supports a justified biological claim." },
    ],
  }),
  miniLabs: [
    { title: "Logo reader", goal: "Practice reading a sequence logo as a family-level summary.", steps: ["Pick one strongly conserved column and one variable column.", "Write what each column suggests biologically.", "State one uncertainty that would make the conclusion weaker."], output: "Two column interpretations plus one caveat.", check: "Good answers distinguish conservation from proof of function.", trap: "Do not call every tall letter catalytic." },
    { title: "Profile seed audit", goal: "Check whether an alignment is ready to become a profile.", steps: ["Inspect coverage and gap-rich regions.", "Mark columns that define the family core.", "List sequences that may be fragments or outliers."], output: "A seed-alignment quality checklist.", check: "Profiles inherit the quality of the alignment.", trap: "Do not build a profile from an unfiltered noisy MSA." },
  ],
  checkpoints: [
    { question: "What information does a multiple alignment reveal?", answer: "It reveals position-specific conservation, tolerated substitutions, insertions/deletions, family-level patterns and candidate functional sites." },
    { question: "Why are similar substitutions important?", answer: "They show that a position may preserve chemical role even when the exact amino acid changes." },
    { question: "How does an MSA prepare profile HMMs?", answer: "It defines conserved match-like columns, insertion-prone regions and position-specific residue distributions." },
  ],
  modelAnswer: {
    question: "What information can a multiple alignment reveal about a protein family?",
    answer: "A multiple alignment shows which positions are conserved across the family, which positions tolerate substitutions or gaps, and which residues may be functionally or structurally constrained. It also supports profiles and sequence logos, which summarize position-specific residue distributions. The main caveat is that conservation is meaningful only if the alignment is reliable and the compared sequences really belong to the relevant family or domain.",
  },
  sourceNotes: [
    "Primary source: 2-Multiple-Alignments.pdf in the Capriotti LB1 Drive folder.",
    "All slide ranges in the deck are represented with real extracted screenshots.",
    "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations.",
  ],
};
