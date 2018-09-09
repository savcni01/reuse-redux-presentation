import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersFixed } from "../live/counter";

export const notes = `

Lets see what we have at state

_TODO:_

* add correct app

`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Fixed Two Counters Example</Heading>
    <TwoCountersFixed/>
  </Slide>
);
