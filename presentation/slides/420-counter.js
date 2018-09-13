import React from "react";
import { Slide, Heading } from "spectacle";
import { CounterApp } from "../live/counter-single";

export const notes = `
Bo nire eizo migbalot ve-Challenges mehakim lanu.

Nikah od dugma klasit shel' React-Redux app: Counter.

Lamrot she dugma mamash pshuta, anahnu yaholim leavin kivun eih mevacim shimush hozer

Esh lyanu counter ve shnei kaftorim:
Plus - increment counter, minus - Decrement
`;

export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Redux Counter Example</Heading>
    <CounterApp/>
  </Slide>
);
