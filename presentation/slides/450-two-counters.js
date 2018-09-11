import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersApp } from "../live/counters-two";

export const notes = `
* Bo nire eih ze oved.

* Megalim at a-baya, she shnej Counters ovdim be yahad 

* Ve eih efshar lirot mi debug:
shnej Containers ovdim im oto State 
(ein shinuim be-oneMoreCounter)
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Two Counters Example</Heading>
    <TwoCountersApp/>
  </Slide>
);
