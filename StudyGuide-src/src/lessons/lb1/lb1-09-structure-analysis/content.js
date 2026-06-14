import { buildSections } from "../shared/buildContent.js";

const deck = "9-StructureAnalysis.pdf";
const deckFolder = "09-structure-analysis";
const title = "Protein structure analysis";

export const lessonContent = {
  id: "lb1-09-structure-analysis",
  extractionStatus: "real slide screenshots extracted from 9-StructureAnalysis.pdf; full deck covered",
  whyThisMatters: "Structure analysis translates molecular biology into features that can be compared, mapped and interpreted: residues, side chains, secondary structure, coordinates, descriptors and structural evidence for function.",
  objectives: ["Review protein structural levels and amino-acid chemistry.", "Connect sequence entries to structure entries.", "Identify structural descriptors useful for analysis.", "Use structure features to support functional annotation."],
  coreConcepts: [
    { title: "Protein chemistry", body: "Side-chain charge, polarity and hydrophobicity shape structure and function.", keywords: ["side chains", "charge", "hydrophobicity"] },
    { title: "Structural levels", body: "Secondary, tertiary and quaternary structure describe different levels of organization.", keywords: ["secondary", "tertiary", "quaternary"] },
    { title: "Descriptors", body: "Coordinates and derived features make structures computable.", keywords: ["PDB", "descriptors", "features"] },
  ],
  routeSteps: [
    { title: "Review the molecule", body: "Start from residues, backbone, side chains and structural levels." },
    { title: "Read the record", body: "Understand FASTA-like sequence data and PDB-like structural data." },
    { title: "Interpret features", body: "Use descriptors to support biological reasoning, not as decoration." },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "Structure features matter because they explain mechanism, constraints and evidence limits.",
    trap: "Do not assume a structure file is a perfect complete protein with every residue resolved.",
    prompt: "Which structural feature does this slide introduce, and how could it support annotation?",
    sections: [
      { start: 1, end: 5, title: "Protein basics for structure analysis", intro: "The opening slides review molecular features that later become computational descriptors.", teaching: "Study interpretation: side-chain chemistry is often the biological reason a structural position matters." },
      { start: 6, end: 12, title: "From sequence records to structures", intro: "This block connects sequence-style entries with structure-style entries and coordinates.", teaching: "Study interpretation: structure coverage and uncertainty matter for every downstream inference." },
      { start: 13, end: 19, title: "Structural descriptors and geometry", intro: "The middle slides introduce descriptors used to analyze or compare structures.", teaching: "Study interpretation: descriptors choose what aspect of the molecule the method can reason about." },
      { start: 20, end: 25, title: "Structure-to-function interpretation", intro: "The closing slides connect structure analysis to annotation and biological explanation.", teaching: "Study interpretation: use structure to explain mechanism, constraints and evidence limits." },
    ],
  }),
  miniLabs: [
    { title: "Side-chain role call", goal: "Practice reading chemistry from a site.", steps: ["Choose a charged, polar and hydrophobic residue.", "Write where each might matter in a protein structure.", "Connect one residue type to function or stability."], output: "Three residue-property interpretations.", check: "Chemistry gives meaning to structure positions.", trap: "Do not treat amino acids as just letters." },
    { title: "PDB coverage check", goal: "Practice skeptical structure reading.", steps: ["Ask whether the structure covers the full sequence.", "Look for missing regions or chain labels.", "State how missing data affects interpretation."], output: "A structure-quality caveat.", check: "Coverage matters for annotation transfer.", trap: "Do not assume the PDB model contains every residue." },
  ],
  checkpoints: [
    { question: "Which protein features are useful for structure analysis?", answer: "Backbone geometry, side-chain chemistry, secondary structure, domains, solvent exposure, contacts and quaternary organization can all be useful." },
    { question: "Why do side-chain properties matter?", answer: "They determine interactions, stability, binding, catalysis and compatibility with structural environments." },
    { question: "How does structure analysis support annotation?", answer: "It links sequence positions to folds, sites, interactions and mechanistic evidence." },
  ],
  modelAnswer: { question: "How does structure analysis support functional annotation?", answer: "Structure analysis supports functional annotation by connecting sequence positions to 3D context: fold, domains, active or binding sites, solvent exposure, contacts and side-chain chemistry. This can explain why a residue is conserved, why a variant may be damaging, or why a protein belongs to a family. The inference must still account for structure quality, coverage and whether the relevant region is present." },
  sourceNotes: ["Primary source: 9-StructureAnalysis.pdf in the Capriotti LB1 Drive folder.", "All slide ranges in the deck are represented with real extracted screenshots.", "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations."],
};
