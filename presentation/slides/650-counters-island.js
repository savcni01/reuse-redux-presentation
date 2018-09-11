import React from "react";
import { Slide, Heading } from "spectacle";
import { CounterApp } from "../live/counters";

export const notes = `
* bodkim she akol oved
`;

export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Island Counters Example</Heading>
    <CounterApp/>
  </Slide>
);
