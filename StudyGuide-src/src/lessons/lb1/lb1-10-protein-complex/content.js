import { buildSections } from "../shared/buildContent.js";

const deck = "10-ProteinComplex.pdf";
const deckFolder = "10-protein-complex";
const title = "Protein complexes and interaction surfaces";

export const lessonContent = {
  id: "lb1-10-protein-complex",
  extractionStatus: "real slide screenshots extracted from 10-ProteinComplex.pdf; full deck covered",
  whyThisMatters: "Protein complexes show that function often depends on surfaces, not only single residues. Interface area, complementarity, hot spots and docking all help reason about binding and specificity.",
  objectives: ["Define protein-protein interaction interfaces and interface area.", "Explain hot spots and alanine scanning logic.", "Distinguish networks, docking and interface prediction.", "Interpret complex predictions with structural and biological caution."],
  coreConcepts: [
    { title: "Interface surface", body: "Binding uses surface area, chemistry and complementarity.", keywords: ["interface", "surface", "ASA"] },
    { title: "Hot spots", body: "Some residues contribute disproportionately to binding free energy.", keywords: ["hot spots", "alanine scanning", "binding"] },
    { title: "Docking problem", body: "Predicting complex geometry is different from predicting whether proteins interact.", keywords: ["docking", "geometry", "complex"] },
  ],
  routeSteps: [
    { title: "Describe the interaction", body: "Identify the interface and what features make it plausible." },
    { title: "Find important residues", body: "Use hot spots and mutational logic to distinguish contacts from drivers." },
    { title: "Interpret predictions", body: "Separate network prediction, docking geometry and binding-site prediction." },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "Report exactly what the method predicts: partner, interface, geometry or important residues.",
    trap: "Do not call every interface residue a hot spot.",
    prompt: "Which PPI problem is this slide addressing: partners, interface, docking geometry or energetic contribution?",
    sections: [
      { start: 1, end: 7, title: "PPI surfaces and hot spots", intro: "The opening slides define interaction surfaces, interface area, hydrophobicity and hot spots.", teaching: "Study interpretation: not every contact residue contributes equally to binding." },
      { start: 8, end: 12, title: "Data and sequence-based prediction", intro: "This block reviews structural PPI data and sequence-based approaches such as co-evolution ideas.", teaching: "Study interpretation: sequence evidence can suggest partners but may not locate atomic contacts." },
      { start: 13, end: 20, title: "Docking and complex geometry", intro: "The deck distinguishes docking from broader PPI prediction and introduces bound/unbound scenarios.", teaching: "Study interpretation: docking answers a geometry question, not automatically an in vivo interaction question." },
      { start: 21, end: 28, title: "Scoring, shape and interface quality", intro: "The middle-late slides discuss how models are evaluated and why complementarity matters.", teaching: "Study interpretation: a plausible complex needs both geometry and biological context." },
      { start: 29, end: 34, title: "Prediction limits and reporting", intro: "The closing slides put interaction-surface reasoning into a cautious prediction workflow.", teaching: "Study interpretation: separate what is known experimentally from what is predicted." },
    ],
  }),
  miniLabs: [
    { title: "Hot-spot triage", goal: "Practice distinguishing contact from importance.", steps: ["List three interface residues.", "For each, ask what alanine scanning would test.", "Pick which residue might be a hot spot and why."], output: "A contact-versus-hot-spot table.", check: "Hot spots are energetic contributors, not all contacts.", trap: "Do not equate surface area with binding importance." },
    { title: "Docking question sorter", goal: "Sort common PPI tasks.", steps: ["Question A: do two proteins interact?", "Question B: what is the bound geometry?", "Question C: which residues are in the interface?", "Assign network prediction, docking or interface prediction."], output: "Three task-method matches.", check: "Different PPI problems need different methods.", trap: "Do not call every PPI prediction docking." },
  ],
  checkpoints: [
    { question: "What is a protein-protein interaction hot spot?", answer: "A hot spot is an interface residue or region that contributes disproportionately to binding free energy, often tested by alanine scanning." },
    { question: "What does docking predict?", answer: "Docking predicts the geometry of a complex between interacting molecules, especially the relative orientation and interface." },
    { question: "Why is interface area not enough?", answer: "Because binding depends on chemistry, complementarity, energetics, specificity and biological context, not just contact size." },
  ],
  modelAnswer: { question: "What is a protein-protein interaction hot spot?", answer: "A protein-protein interaction hot spot is an interface residue or region that contributes disproportionately to binding affinity or stability. It is often identified by mutational logic such as alanine scanning, where replacing a residue with alanine strongly weakens binding. The key trap is to remember that not every interface contact is a hot spot; surface area and contact count must be interpreted with energetics and context." },
  sourceNotes: ["Primary source: 10-ProteinComplex.pdf in the Capriotti LB1 Drive folder.", "All slide ranges in the deck are represented with real extracted screenshots.", "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations."],
};
