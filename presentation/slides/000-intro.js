import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Shlom rav le kulyam.

* Ani mekave she nehenetem ad ahshav me a meetup shelyanu.

* U mekave she tehenu gam me a talk sheli.

* React Redux Island - a way to reuse Redux

_TODO_
* add logo of Nielsen
* add The Big Web Theory (Image, Slogan)
* other examples from web-core-containers
* change: - a way to reuse Redux
* React-Redux connect - Reducer1 three times - fix

_???_

a way to reuse Redux
Redux - Doing it right

What you gonna hear

Reuse makes life easier

Reuse and change

Content can be different

Behavior

Why, what, how? / Why Reuse
Redux architecture has limits for code reuse
Reuse in Redux can be problematic

connect - connects React Component to a Redux Store. 
connect - HOC, returns new Connected Component

Limits and issues in Redux Container reuse

Isolate Actions: use prefix from JSX

Improved/POC
`;

export const markdown = `
## React Redux Island
#### a way to reuse Redux
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


