import React from "react";

export const DRD_LESSON_LOADERS = {
  "m1-foundations": () => import("./m1-foundations/index.jsx"),
  "m1-stanford": () => import("./m1-stanford/index.jsx"),
  "m1-affy": () => import("./m1-affy/index.jsx"),
  "m1-illumina": () => import("./m1-illumina/index.jsx"),
  "m1-deg-i": () => import("./m1-deg-i/index.jsx"),
  "m1-deg-ii": () => import("./m1-deg-ii/index.jsx"),
  "m1-samples-genes-i": () => import("./m1-samples-genes-i/index.jsx"),
  "m1-samples-genes-ii": () => import("./m1-samples-genes-ii/index.jsx"),
  "m1-scrna": () => import("./m1-scrna/index.jsx"),
  "m2-r": () => import("./m2-r/index.jsx"),
  "m2-manifest": () => import("./m2-manifest/index.jsx"),
  "m2-import-qc": () => import("./m2-import-qc/index.jsx"),
  "m2-normalization-1": () => import("./m2-normalization-1/index.jsx"),
  "m2-normalization-2": () => import("./m2-normalization-2/index.jsx"),
  "m2-dmp-dmr": () => import("./m2-dmp-dmr/index.jsx"),
  "m2-batch-clustering": () => import("./m2-batch-clustering/index.jsx"),
};

export const DRD_LESSON_COMPONENTS = Object.fromEntries(
  Object.entries(DRD_LESSON_LOADERS).map(([key, loader]) => [key, React.lazy(loader)])
);

export function getDRDLessonComponent(componentKey) {
  return DRD_LESSON_COMPONENTS[componentKey] || null;
}
