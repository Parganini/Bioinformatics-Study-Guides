import React from "react";
import LegacyLesson from "../Lesson08.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M2ManifestLesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}
