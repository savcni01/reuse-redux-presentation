import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersIsolated } from "../live/counter";

export const notes = `
* lets check how it works 
* isolated version, still have a lot of issues
* but very close to what we need
* generally we just need to incapsulate our workarounds
* at custom connect HOF of reducer
 
_TODO:_
* check/change
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Two Isolated Counters Example</Heading>
    <TwoCountersIsolated/>
  </Slide>
);
