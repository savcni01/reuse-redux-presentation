import React from "react";
import { Slide, Heading } from "spectacle";
import { CounterApp } from "../live/counters";


export const notes = `
* lets see what we have at state
 
_TODO:_
* add second counter
* add logger
`;

export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Island Counters Example</Heading>
    <CounterApp/>
  </Slide>
);
