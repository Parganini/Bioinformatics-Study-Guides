import React from "react";
import LegacyLesson from "../Lesson03.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M1AffyLesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}
