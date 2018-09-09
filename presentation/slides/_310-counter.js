import React from "react";
import { Slide, Heading } from "spectacle";
import { CounterApp } from "../live/counter";


export const notes = `
* Bo nire eizo limits ve-challenges mehakim lanu.

* Nikah od dugma klasit shel' pa6ut React-Redux app: Counter.

* Lamrot she dugma mamash p6uta, anahnu yaholim leavin kivun eih laasot Reuse

* Esh lyanu counter ve shnei kaftorim Plus - increment counter, minus - Decrement

 
_TODO:_
* css for Counter
`;

export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Redux Counter Example</Heading>
    <CounterApp/>
  </Slide>
);
