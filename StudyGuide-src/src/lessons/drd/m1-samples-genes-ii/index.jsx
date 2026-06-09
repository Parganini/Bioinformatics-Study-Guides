import React from "react";
import LegacyLesson from "../LegacyM1SamplesGenesII.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M1SamplesGenesIILesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}
