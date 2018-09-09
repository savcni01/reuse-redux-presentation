import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Shalom le kulyam
* Oni mekave she nehenetem ad ahshav me a meetup shelyanu
* Ve nekave she nehenu gam me a talk sheli:
* React Redux Island
* - a way to reuse Redux

_KNOWN ISSUES:_
* style: fonts, color, transitions
* change images (one style, one size)
* setup code examples
`;

export const markdown = `
## React Redux Island
#### - a way to reuse Redux
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


