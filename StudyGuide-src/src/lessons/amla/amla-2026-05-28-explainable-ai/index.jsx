import React from "react";
import { AMLALessonTemplate } from "../shared/template.jsx";
import { lessonContent } from "./content.js";
import { LessonInteractions } from "./interactions.jsx";
export { lessonContent } from "./content.js";
export default function AMLAPlannedL11(props) { return <AMLALessonTemplate {...props} content={lessonContent} interactions={LessonInteractions} />; }
