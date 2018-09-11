import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* React-Redux-Island mesapeck

* islandConnect - HOC nosaf, wrapper al Connect shel React-Redux
Mosif State Slicing ve-Action isolation

* isolateReducer - HOF mosifa isolation le funkciot Reduce 

* helper makeReducer - optional le shimush, efshrut laasot reducer al basis actionsMap function
bli SWITCH CASE

* ve kama Plugins for isolated middlewares (kmo isolateThank, isolateSage ve hulej
`;

export const markdown = `
## React Redux Island

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


