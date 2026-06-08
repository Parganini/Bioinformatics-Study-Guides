import React from "react";
import LegacyLesson from "../Lesson02.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M1StanfordLesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}
