import React from "react";
import LegacyLesson from "../Lesson06.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M1DegILesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}
