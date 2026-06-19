import React from "react";
import { IBDPILessonTemplate } from "../shared/template.jsx";
import { lessonContent } from "./content.js";
import { LessonInteractions } from "./interactions.jsx";

export default function IBDPILesson(props) {
  return <IBDPILessonTemplate {...props} content={lessonContent} interactions={LessonInteractions} />;
}
