import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersSliced } from "../live/counters-sliced";


export const notes = `
* Kan efshar lirot she Counters meshtamshim ba-nitunim sjonim (1 ve-5)
lamrot she le shihpalnu at-mapStateToProps ve-mapDispatchToProps

* Im anahnu meashanim ehad mi Counters, meshtane gam at a-sheni

* Bou niftah debug, ve-nire she oto Action tofes paamaim,
Ve combinedReducer maric Action le shhnej slicim

* She omer she hayavim Incapsulate gam Action ve-Reducer
`;

export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Two Sliced Counters Example</Heading>
    <TwoCountersSliced/>
  </Slide>
);
