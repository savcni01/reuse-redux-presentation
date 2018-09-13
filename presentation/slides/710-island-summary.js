import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
Nesakem shimush ba-React-Redux-Island

meacrim Container be ezrat islandedConnect

Mosifim isolateId le-JSX

Mosifim isolateId ve meshtamshim funkcia isolatReduce be Reducer Combination

Meshtamshim Enhanced Middlewares

Zeu!
`;

export const markdown = `
## Redux Containers Reuse Summary

* Create with isolatedConnect
* Provide isolateId in JSX
* Provide isolateId during reduce combination
* Use enhanced middleware for Redux thunk/saga/epics/logic etc.
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


