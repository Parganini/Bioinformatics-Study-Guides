import { LB1_STATUS } from "../lb1Manifest.js";

export function getLB1StatusMeta(status) {
  return LB1_STATUS[status] || LB1_STATUS.planned;
}

export function isLB1LessonAvailable(lesson) {
  return lesson?.status === "available";
}
