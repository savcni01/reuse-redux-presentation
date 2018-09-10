import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersIsolated } from "../live/counters-isolated";

export const notes = `
* Bo nivdok she akol oved kmo she racinu

* Bo nire am be debug log, roim she app ose dispach 
Prefixed (isolated) Actions
Ve isolatedReducers youdim leahavin im the action shelo
az unisolate Action ve leoric oto

* Girsa a zoti adain esh la lyo meat issues

* Aval thze meod karov le ma she racinu
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Two Isolated Counters Example</Heading>
    <TwoCountersIsolated/>
  </Slide>
);
