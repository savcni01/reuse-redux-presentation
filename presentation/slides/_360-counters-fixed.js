import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersFixed } from "../live/counters-two-fixed";

export const notes = `
* Roim she ahsav akol' oved kmo she metuhnan

* Kol ehad me Counter be nifrad

* Gam kshe bodkim be debug, 
roim she akol oved kmo she carih, TOP, BOTTOM
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Fixed Two Counters Example</Heading>
    <TwoCountersFixed/>
  </Slide>
);
