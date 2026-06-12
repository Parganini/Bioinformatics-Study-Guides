import React from "react";
import { AMLALessonTemplate } from "../shared/template.jsx";
import { lessonContent } from "./content.js";
import { LessonInteractions } from "./interactions.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function AMLAHandsOnSetupLesson(props) {
  return <AMLALessonTemplate {...props} content={lessonContent} interactions={LessonInteractions} />;
}
