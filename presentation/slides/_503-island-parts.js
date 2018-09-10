import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Bo naase sikum shel pitronot
`;

export const markdown = `
#### React Redux Island

* islandedConnect: State slice + Isolate Action
* isolateReducer: Isolate Reducers + Unisolate Action
* Helper: makeReducer
* Plugins: isolatedThunk, isolatedSaga, etc.
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


