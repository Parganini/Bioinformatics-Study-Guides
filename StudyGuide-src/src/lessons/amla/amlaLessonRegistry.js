import React from "react";

export const AMLA_LESSON_LOADERS = {
  "amla-2026-04-16-intro-advanced": () => import("./amla-2026-04-16-intro-advanced/index.jsx"),
  "amla-2026-04-17-hands-on-setup": () => import("./amla-2026-04-17-hands-on-setup/index.jsx"),
  "amla-2026-04-20-neural-networks": () => import("./amla-2026-04-20-neural-networks/index.jsx"),
  "amla-2026-04-23-deep-learning-frameworks": () => import("./amla-2026-04-23-deep-learning-frameworks/index.jsx"),
  "amla-2026-05-07-training-diagnostics": () => import("./amla-2026-05-07-training-diagnostics/index.jsx"),
  "amla-2026-05-08-model-regularization": () => import("./amla-2026-05-08-model-regularization/index.jsx"),
  "amla-2026-05-14-convolutional-networks": () => import("./amla-2026-05-14-convolutional-networks/index.jsx"),
  "amla-2026-05-15-cnn-practice": () => import("./amla-2026-05-15-cnn-practice/index.jsx"),
  "amla-2026-05-21-vision-mini-project": () => import("./amla-2026-05-21-vision-mini-project/index.jsx"),
  "amla-2026-05-22-segmentation-workflow": () => import("./amla-2026-05-22-segmentation-workflow/index.jsx"),
  "amla-2026-05-28-explainable-ai": () => import("./amla-2026-05-28-explainable-ai/index.jsx"),
  "amla-2026-05-29-project-xai-sequential": () => import("./amla-2026-05-29-project-xai-sequential/index.jsx"),
};

export const AMLA_LESSON_COMPONENTS = Object.fromEntries(
  Object.entries(AMLA_LESSON_LOADERS).map(([key, loader]) => [key, React.lazy(loader)])
);

export function getAMLALessonComponent(componentKey) {
  return AMLA_LESSON_COMPONENTS[componentKey] || null;
}
