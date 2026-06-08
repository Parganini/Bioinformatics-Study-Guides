import React from "react";
import { DRDLessonTemplate } from "../shared/template.jsx";
import { lessonContent } from "./content.js";
import { LessonInteractions } from "./interactions.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M1AffyLesson(props) {
  return <DRDLessonTemplate {...props} content={lessonContent} interactions={LessonInteractions} />;
}
