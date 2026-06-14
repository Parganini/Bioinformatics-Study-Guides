import React from "react";

export const LB1_LESSON_LOADERS = {
  "lb1-00-module-overview": () => import("./lb1-00-module-overview/index.jsx"),
  "lb1-01-structure-alignment": () => import("./lb1-01-structure-alignment/index.jsx"),
};

export const LB1_LESSON_COMPONENTS = Object.fromEntries(
  Object.entries(LB1_LESSON_LOADERS).map(([key, loader]) => [key, React.lazy(loader)])
);

export function getLB1LessonComponent(componentKey) {
  return LB1_LESSON_COMPONENTS[componentKey] || null;
}
