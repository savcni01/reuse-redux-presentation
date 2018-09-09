import React from "react";
import { Slide, Heading } from "spectacle";
import { CounterApp } from "../live/counter";


export const notes = `
* famous Counter example
* mostly show this how cool create React Presentation on React
 
_TODO:_
* css for Counter
`;

export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Redux Counter Example</Heading>
    <CounterApp/>
  </Slide>
);
