import React from "react";
import LegacyLesson from "../Lesson11.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M1SamplesGenesILesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}
