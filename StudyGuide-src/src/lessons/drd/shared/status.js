import { DRD_STATUS } from "../drdManifest.js";

export function getDRDStatusMeta(status) {
  return DRD_STATUS[status] || DRD_STATUS.upcoming;
}

export function isDRDLessonAvailable(lesson) {
  return lesson?.status === "available";
}
