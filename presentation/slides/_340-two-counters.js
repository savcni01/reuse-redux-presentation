import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersApp } from "../live/counter";

export const notes = `
* lets see what we have at state
 
_TODO:_
* add logger
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Two Counters Example</Heading>
    <TwoCountersApp/>
  </Slide>
);
