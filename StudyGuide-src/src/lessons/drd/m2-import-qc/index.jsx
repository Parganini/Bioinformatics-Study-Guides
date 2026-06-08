import React from "react";
import LegacyLesson from "../Lesson09.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M2ImportQcLesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}
