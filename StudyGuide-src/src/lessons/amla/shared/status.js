import { AMLA_STATUS } from "../amlaManifest.js";

export function getAMLAStatusMeta(status) {
  return AMLA_STATUS[status] || AMLA_STATUS.todo;
}

export function isAMLALessonAvailable(lesson) {
  return lesson?.status === "available";
}
