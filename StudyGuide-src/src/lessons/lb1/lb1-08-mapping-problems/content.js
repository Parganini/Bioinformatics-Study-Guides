import { buildSections } from "../shared/buildContent.js";

const deck = "8-MappingProblems.pdf";
const deckFolder = "08-mapping-problems";
const title = "Mapping problems: annotations, residues and databases";

export const lessonContent = {
  id: "lb1-08-mapping-problems",
  extractionStatus: "real slide screenshots extracted from 8-MappingProblems.pdf; full deck covered",
  whyThisMatters: "Mapping is where many correct-looking analyses fail. Identifiers, isoforms, PDB chains, missing residues and numbering schemes can all break annotation transfer if you do not check what is actually being mapped.",
  objectives: ["Explain why annotation mapping is not just sequence search.", "Identify common UniProt/PDB/residue-numbering problems.", "Distinguish identifier mapping from residue-level mapping.", "Check mapped annotations before biological interpretation."],
  coreConcepts: [
    { title: "Identifier mapping", body: "Names and accessions can refer to proteins, isoforms, chains or database records.", keywords: ["ids", "accessions", "databases"] },
    { title: "Residue mapping", body: "Residue numbers can change across isoforms, processed chains and structures.", keywords: ["residue numbers", "PDB", "UniProt"] },
    { title: "Evidence transfer", body: "A mapped annotation is useful only if it maps to the relevant region.", keywords: ["annotation", "region", "evidence"] },
  ],
  routeSteps: [
    { title: "Identify the objects", body: "Know whether you are mapping proteins, chains, isoforms, domains or residues." },
    { title: "Align the coordinates", body: "Check sequence positions, structure numbering and missing residues." },
    { title: "Transfer cautiously", body: "Move only the annotation supported by the mapped region." },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "A mapped feature must land on the correct biological object and residue region before it supports annotation.",
    trap: "Do not assume residue 50 in one database is residue 50 everywhere.",
    prompt: "What object is being mapped here: identifier, sequence, chain, domain or residue?",
    sections: [
      { start: 1, end: 6, title: "Why mapping is a real problem", intro: "The opening slides motivate mapping as a practical source of annotation errors.", teaching: "Study interpretation: the hard part is knowing what a database entry actually refers to." },
      { start: 7, end: 14, title: "Databases, identifiers and records", intro: "This block works through database objects and why identifiers are not always interchangeable.", teaching: "Study interpretation: identifier equivalence is not residue-level equivalence." },
      { start: 15, end: 22, title: "Residue numbering and sequence-structure mapping", intro: "The middle slides focus on mismatches between sequence coordinates and structural coordinates.", teaching: "Study interpretation: always ask which chain, isoform and numbering scheme is being used." },
      { start: 23, end: 30, title: "Annotation transfer through mapped regions", intro: "The closing slides return to biological interpretation and evidence transfer.", teaching: "Study interpretation: transfer only what is supported by the mapped region." },
    ],
  }),
  miniLabs: [
    { title: "Residue-number audit", goal: "Practice catching the classic numbering mistake.", steps: ["Pick a residue annotation in UniProt-like coordinates.", "Ask whether the PDB chain has missing residues or different numbering.", "Write what you must align before transferring the site."], output: "A residue-mapping checklist.", check: "Coordinates are database-specific.", trap: "Do not assume residue 50 is residue 50 everywhere." },
    { title: "Identifier triage", goal: "Separate database record matching from biological mapping.", steps: ["List the accession or chain identifier.", "State what biological object it refers to.", "Write one check before using its annotation."], output: "An identifier interpretation note.", check: "The object must be clear before mapping can be trusted.", trap: "Do not map an isoform annotation blindly to another isoform." },
  ],
  checkpoints: [
    { question: "Why can residue numbering create annotation errors?", answer: "Different databases and structures can use different residue coordinates because of isoforms, signal peptides, missing residues, chain labels or processing." },
    { question: "What is the difference between identifier and residue mapping?", answer: "Identifier mapping connects records; residue mapping connects specific positions or regions between sequence and structure objects." },
    { question: "How should a mapped functional site be checked?", answer: "Check sequence alignment, chain, residue numbering, missing residues and whether the functional region is actually present." },
  ],
  modelAnswer: { question: "Why is annotation mapping not just sequence search?", answer: "Annotation mapping is not just sequence search because the biological claim often depends on exact identifiers, isoforms, chains, domains or residue positions. A sequence hit may point to a related record, but functional sites and structural annotations must be mapped through the correct coordinate system. Good mapping checks identifiers, alignment, residue numbering, missing regions and evidence scope before transferring annotation." },
  sourceNotes: ["Primary source: 8-MappingProblems.pdf in the Capriotti LB1 Drive folder.", "All slide ranges in the deck are represented with real extracted screenshots.", "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations."],
};
