import { buildSections } from "../shared/buildContent.js";

const deck = "7-ProjectIntro.pdf";
const deckFolder = "07-kunitz-project";
const title = "Kunitz profile-HMM project";

export const lessonContent = {
  id: "lb1-07-kunitz-project",
  extractionStatus: "real slide screenshots extracted from 7-ProjectIntro.pdf; full deck covered",
  whyThisMatters: "The Kunitz project turns the HMM route into a concrete workflow: define a domain family, build a profile HMM, search for homologs and justify what the hits mean biologically.",
  objectives: ["Explain the goal of building a Kunitz-domain profile HMM.", "Describe why BPTI/aprotinin and disulfide bonds are useful biological anchors.", "Connect seed selection, domain boundaries and conserved features to model quality.", "Use project notebooks as reproducible workflows, not black boxes."],
  coreConcepts: [
    { title: "Kunitz domain", body: "A protease-inhibitor domain with recognizable structural and sequence constraints.", keywords: ["domain", "protease inhibitor", "family"] },
    { title: "Disulfide pattern", body: "Conserved cysteines support the fold and are strong profile evidence.", keywords: ["cysteines", "disulfides", "fold"] },
    { title: "Project evidence", body: "A credible model needs curated positive examples and cautious hit interpretation.", keywords: ["seed", "profile", "hits"] },
  ],
  routeSteps: [
    { title: "Understand the biology", body: "Know what the Kunitz domain is and why its conserved features matter." },
    { title: "Build the profile", body: "Use a curated seed alignment to construct a family model." },
    { title: "Search and justify", body: "Evaluate hits with thresholds, coverage and conserved domain features." },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "The project is not finished when the command runs; it is finished when the hits are biologically interpreted.",
    trap: "Do not build a profile from whole multidomain proteins without checking domain boundaries.",
    prompt: "What project decision does this slide support: seed choice, model building, search or hit interpretation?",
    sections: [
      { start: 1, end: 5, title: "Project goal and domain context", intro: "The opening slides introduce the project and the Kunitz-type protease inhibitor domain.", teaching: "Study interpretation: the biological target is a domain family, not an arbitrary sequence list." },
      { start: 6, end: 12, title: "BPTI, aprotinin and conserved features", intro: "This block anchors the family in known proteins and structural constraints such as disulfide bonds.", teaching: "Study interpretation: conserved cysteines are not just letters; they support the domain fold." },
      { start: 13, end: 19, title: "Building the profile-HMM workflow", intro: "The middle slides connect positive examples, alignments and profile-HMM construction.", teaching: "Study interpretation: every model-building choice should be documented and justified." },
      { start: 20, end: 26, title: "Searching, interpreting and reporting hits", intro: "The closing slides support the project deliverable: search results plus biological reasoning.", teaching: "Study interpretation: report thresholds, coverage, conserved domain features and uncertainty." },
    ],
  }),
  miniLabs: [
    { title: "Seed-set defense", goal: "Practice defending your positive examples.", steps: ["Choose what makes a sequence a credible Kunitz example.", "List one sequence you would exclude and why.", "State how domain boundaries affect the profile."], output: "A seed-set justification paragraph.", check: "Good profiles start with good positives.", trap: "Do not include whole multidomain proteins without thinking about boundaries." },
    { title: "Kunitz hit checklist", goal: "Turn a hit into cautious evidence.", steps: ["Check E-value and coverage.", "Check conserved cysteine/disulfide pattern if available.", "Check whether the hit spans the domain rather than a fragment."], output: "A hit triage checklist.", check: "Conserved domain features matter as much as the score.", trap: "Do not annotate exact protease specificity from profile hit alone." },
  ],
  checkpoints: [
    { question: "What is the Kunitz project asking students to build?", answer: "A profile HMM for the Kunitz-type protease inhibitor domain, then use it to search and interpret potential homologs." },
    { question: "Why is a profile HMM appropriate?", answer: "Because the Kunitz domain is a family pattern with conserved and variable positions, including important structural constraints." },
    { question: "Why do disulfide bonds matter?", answer: "They support the conserved fold and help distinguish credible domain hits from weak sequence similarity." },
  ],
  modelAnswer: { question: "What is the Kunitz-domain project asking students to build?", answer: "The project asks students to build a profile HMM for the Kunitz-type protease inhibitor domain from reliable family examples, then search for related sequences and interpret the hits. A good answer mentions domain boundaries, conserved cysteine/disulfide patterns, BPTI/aprotinin as biological anchors, and cautious annotation based on significance, coverage and conserved features." },
  sourceNotes: ["Primary source: 7-ProjectIntro.pdf in the Capriotti LB1 Drive folder.", "All slide ranges in the deck are represented with real extracted screenshots.", "Project notebooks are linked from the lesson resource panel."],
};
