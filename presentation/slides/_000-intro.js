import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Shalom le kulyam
* Oni mekave she nehenetem ad ahshav me a meetup shelyanu
* Ve nekave she nehenu gam me a talk sheli:
* React Redux Island - a way to reuse Redux

_KNOWN ISSUES:_
* change images (one style, one size)
* Presentational Component vs Container
`;

export const markdown = `
# React Redux Island
#### - a way to reuse Redux
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


