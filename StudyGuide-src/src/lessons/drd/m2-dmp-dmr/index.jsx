import React from "react";
import LegacyLesson from "../Lesson13.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M2DmpDmrLesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}
