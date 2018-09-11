import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersIsolated } from "../live/counters-isolated";

export const notes = `
* Bdika she akol oved kmow she tehnanu

* Niftah gam debug, roim she aplikacia dispach Prefixed (isolated) Actions

* Ve isolatedReducers mesugal leahavin a-im Action shayan elav.
Ve az unisolate Action ve learic oto

* Be-Girsa a zot adain colelet kama migbalot, aval kvar mitkarevet le ma she racinu
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Two Isolated Counters Example</Heading>
    <TwoCountersIsolated/>
  </Slide>
);
