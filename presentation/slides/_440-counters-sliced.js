import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersSliced } from "../live/counters-sliced";


export const notes = `
* Roim po 6e 6nej Conters meshtamshim Statim shonim
lamrot she meshtamsim otam mapStateToProps, mapDispatchToProps

* Aval im anahnu nenase leahsnot ehad mi Counters,
Nire 6e esh shimuim gam be TOP ve gam be-Bottom

* Bo nistakel log, ve nire 6e oto Action catch paamaim,
lamrot 6e anahnu osinu slise le State
ze kore biglal 6e combined reducer maric Action le 6hnej slicim

* So anahnu crihim incapsulate gam Action-Reducer
`;

export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Two Sliced Counters Example</Heading>
    <TwoCountersSliced/>
  </Slide>
);
