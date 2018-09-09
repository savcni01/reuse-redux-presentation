import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
*
 
_TODO:_
* 
`;

export const markdown = `
## Redux Containers Reuse Summary

* Create with islandedConnect
* Provide isolateId in JSX
* Provide isolateId during reduce combination
* Use enhanced middleware for Redux thunk/saga/epics/logic etc.
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


