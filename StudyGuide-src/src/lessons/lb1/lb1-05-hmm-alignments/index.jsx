import React from "react";
import { LB1LessonTemplate } from "../shared/template.jsx";
import { lessonContent } from "./content.js";

export { lessonContent } from "./content.js";

export default function LB1HMMAlignmentsLesson(props) {
  return <LB1LessonTemplate {...props} content={lessonContent} />;
}
