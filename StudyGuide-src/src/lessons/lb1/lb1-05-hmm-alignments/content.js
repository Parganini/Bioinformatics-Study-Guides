import { buildSections } from "../shared/buildContent.js";

const deck = "5-HMMAlignments.pdf";
const deckFolder = "05-hmm-alignments";
const title = "HMMs for sequence alignment and profile HMMs";

export const lessonContent = {
  id: "lb1-05-hmm-alignments",
  extractionStatus: "real slide screenshots extracted from 5-HMMAlignments.pdf; full deck covered",
  whyThisMatters: "Profile HMMs turn a multiple alignment into a probabilistic family model. They explain why match, insert and delete behavior can be position-specific instead of handled by one generic substitution matrix.",
  objectives: ["Explain how HMMs represent sequence alignments.", "Map match, insert and delete states to profile columns.", "Explain position-specific scoring and indel behavior.", "Contrast profile HMMs with simple substitution-matrix alignment."],
  coreConcepts: [
    { title: "Match states", body: "Match states represent core family positions derived from alignment columns.", keywords: ["match", "core", "columns"] },
    { title: "Insert/delete states", body: "Insertions and deletions are modeled explicitly as position-specific events.", keywords: ["insert", "delete", "indels"] },
    { title: "Family profile", body: "The model represents a family, not one query sequence.", keywords: ["profile", "family", "MSA"] },
  ],
  routeSteps: [
    { title: "Start from the MSA", body: "Identify core columns and insertion-prone regions." },
    { title: "Map columns to states", body: "Translate alignment structure into match, insert and delete states." },
    { title: "Interpret scores probabilistically", body: "Think in terms of position-specific probabilities rather than one uniform matrix." },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "A profile HMM models a family position by position, including residue preferences and indel behavior.",
    trap: "Do not describe profile HMMs as just a substitution matrix with nicer graphics.",
    prompt: "How does this slide connect an alignment column to match, insert or delete behavior?",
    sections: [
      { start: 1, end: 5, title: "Why HMMs help alignments", intro: "The opening slides connect sequence alignment to probabilistic state models.", teaching: "Study interpretation: the key upgrade is position-specific modeling." },
      { start: 6, end: 11, title: "Match, insert and delete states", intro: "This block defines how profile architectures represent aligned columns and gaps.", teaching: "Study interpretation: gaps are modeled events, not only penalties." },
      { start: 12, end: 17, title: "Building a profile from an alignment", intro: "The deck shows how family columns become a model with position-specific residue tendencies.", teaching: "Study interpretation: profile quality depends on alignment quality and representative training sequences." },
      { start: 18, end: 23, title: "Using profile HMMs for family detection", intro: "The closing slides connect profile models to sensitive homolog search.", teaching: "Study interpretation: biological claims still need significance, coverage and domain checks." },
    ],
  }),
  miniLabs: [
    { title: "State architecture sketch", goal: "Turn an MSA into a profile-HMM sketch.", steps: ["Mark three conserved columns as match states.", "Mark one insertion-rich region as an insert state.", "Explain where a delete state would be useful."], output: "A simple M/I/D architecture description.", check: "The model should follow the alignment pattern.", trap: "Do not turn every gap into the same generic event." },
    { title: "Profile vs matrix answer", goal: "Practice the exam contrast.", steps: ["Define a substitution matrix in one sentence.", "Define a profile HMM in one sentence.", "State why the profile is better for a family."], output: "A three-sentence contrast.", check: "Position-specific information is the heart of the answer.", trap: "Do not describe profile HMMs as only faster BLAST." },
  ],
  checkpoints: [
    { question: "What do match, insert and delete states represent?", answer: "Match states represent core aligned positions, insert states represent extra symbols between core positions, and delete states represent skipped core positions." },
    { question: "Why are profile HMMs position-specific?", answer: "Because each alignment position can have its own residue distribution and indel behavior." },
    { question: "Why can profile HMMs outperform a simple substitution matrix?", answer: "They capture family-specific conservation and gap patterns rather than using one generic score for all positions." },
  ],
  modelAnswer: { question: "Why are profile HMMs useful for protein families?", answer: "Profile HMMs are useful because they model a protein family position by position. Conserved alignment columns become match states with residue-specific probabilities, while insertions and deletions are represented explicitly. This makes the model more sensitive to remote homologs than a single query sequence or a generic substitution matrix, provided the seed alignment is reliable." },
  sourceNotes: ["Primary source: 5-HMMAlignments.pdf in the Capriotti LB1 Drive folder.", "All slide ranges in the deck are represented with real extracted screenshots.", "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations."],
};
