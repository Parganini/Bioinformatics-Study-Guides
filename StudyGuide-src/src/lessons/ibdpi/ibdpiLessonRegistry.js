import React from "react";

export const IBDPI_LESSON_LOADERS = {
  "ibdpi-2026-04-22-course-intro-big-data": React.lazy(() => import("./ibdpi-2026-04-22-course-intro-big-data/index.jsx")),
  "ibdpi-2026-04-24-big-data-applications-aws-setup": React.lazy(() => import("./ibdpi-2026-04-24-big-data-applications-aws-setup/index.jsx")),
  "ibdpi-2026-04-27-aws-vm-volumes-checksums": React.lazy(() => import("./ibdpi-2026-04-27-aws-vm-volumes-checksums/index.jsx")),
  "ibdpi-2026-04-29-datacenter-building-blocks": React.lazy(() => import("./ibdpi-2026-04-29-datacenter-building-blocks/index.jsx")),
  "ibdpi-2026-04-30-networking-storage-datacenter": React.lazy(() => import("./ibdpi-2026-04-30-networking-storage-datacenter/index.jsx")),
  "ibdpi-2026-04-30-cloud-intro-iaas": React.lazy(() => import("./ibdpi-2026-04-30-cloud-intro-iaas/index.jsx")),
  "ibdpi-2026-05-14-containers-htc-hpc-computing-models": React.lazy(() => import("./ibdpi-2026-05-14-containers-htc-hpc-computing-models/index.jsx")),
  "ibdpi-2026-05-15-module2-cloud-storage": React.lazy(() => import("./ibdpi-2026-05-15-module2-cloud-storage/index.jsx")),
  "ibdpi-2026-05-28-advanced-containers-part1": React.lazy(() => import("./ibdpi-2026-05-28-advanced-containers-part1/index.jsx")),
  "ibdpi-2026-05-29-advanced-containers-part2": React.lazy(() => import("./ibdpi-2026-05-29-advanced-containers-part2/index.jsx")),
  "ibdpi-2026-06-03-authentication-authorization": React.lazy(() => import("./ibdpi-2026-06-03-authentication-authorization/index.jsx")),
  "ibdpi-2026-06-05-cloud-automation-part1": React.lazy(() => import("./ibdpi-2026-06-05-cloud-automation-part1/index.jsx")),
  "ibdpi-2026-06-08-cloud-automation-part2": React.lazy(() => import("./ibdpi-2026-06-08-cloud-automation-part2/index.jsx")),
  "ibdpi-2026-06-10-kubernetes-faas-wrapup": React.lazy(() => import("./ibdpi-2026-06-10-kubernetes-faas-wrapup/index.jsx")),
};

export function getIBDPILessonComponent(componentKey) {
  return IBDPI_LESSON_LOADERS[componentKey] || null;
}
