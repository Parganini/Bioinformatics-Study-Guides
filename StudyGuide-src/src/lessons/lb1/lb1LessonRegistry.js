import React from "react";

export const LB1_LESSON_LOADERS = {
  "lb1-00-module-overview": () => import("./lb1-00-module-overview/index.jsx"),
  "lb1-01-structure-alignment": () => import("./lb1-01-structure-alignment/index.jsx"),
  "lb1-02-multiple-alignments": () => import("./lb1-02-multiple-alignments/index.jsx"),
  "lb1-03-mm-theory": () => import("./lb1-03-mm-theory/index.jsx"),
  "lb1-04-hidden-markov-models": () => import("./lb1-04-hidden-markov-models/index.jsx"),
  "lb1-05-hmm-alignments": () => import("./lb1-05-hmm-alignments/index.jsx"),
  "lb1-06-hmmer": () => import("./lb1-06-hmmer/index.jsx"),
  "lb1-07-kunitz-project": () => import("./lb1-07-kunitz-project/index.jsx"),
  "lb1-08-mapping-problems": () => import("./lb1-08-mapping-problems/index.jsx"),
  "lb1-09-structure-analysis": () => import("./lb1-09-structure-analysis/index.jsx"),
  "lb1-10-protein-complex": () => import("./lb1-10-protein-complex/index.jsx"),
  "lb1-11-protein-variants": () => import("./lb1-11-protein-variants/index.jsx"),
};

export const LB1_LESSON_COMPONENTS = Object.fromEntries(
  Object.entries(LB1_LESSON_LOADERS).map(([key, loader]) => [key, React.lazy(loader)])
);

export function getLB1LessonComponent(componentKey) {
  return LB1_LESSON_COMPONENTS[componentKey] || null;
}
