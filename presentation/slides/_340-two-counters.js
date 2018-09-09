import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersApp } from "../live/counters-two";

export const notes = `
* Bo nire eih ze oved.
* Ma she roim esh po baya, 6nej Counters ovdim be yahad 
* Ve eih ef6ar lirot mi debug:
6nej Containers ovdim im oto State
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Two Counters Example</Heading>
    <TwoCountersApp/>
  </Slide>
);
