import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Shlom rav le kulyam.

* Ani mekave she nehenetem ad ahshav me a meetup shelyanu.

* U mekave she tehenu gam me a talk sheli.

* React Redux Island - a way to reuse Redux

__TODO__
* add logo of Nielsen
* add The Big Web Theory (Image, Slogan)
* other examples from web-core-containers
* change: - a way to reuse Redux
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


