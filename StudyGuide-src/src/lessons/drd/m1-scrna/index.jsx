import React from "react";
import { DRDPlannedLesson } from "../shared/template.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M1ScrnaLesson(props) {
  return <DRDPlannedLesson {...props} />;
}
