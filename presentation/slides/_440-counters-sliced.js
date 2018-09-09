import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersSliced } from "../live/counter";


export const notes = `
* sliced version (not working because of action-reducers)
* check the logs ->
* explain why it happen ->
* the same action catch by both of reducers
 
_TODO:_
* check/change
`;

export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Two Sliced Counters Example</Heading>
    <TwoCountersSliced/>
  </Slide>
);
