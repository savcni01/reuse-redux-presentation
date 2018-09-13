import React from "react";
import { Slide, Heading } from "spectacle";
import { TwoCountersSliced } from "../live/counters-sliced";

export const notes = `
Kan efshar lirot she Counters meshtamshim ba-nitunim sjonim
lamrot she le shihpalnu at-mapStateToProps ve-mapDispatchToProps

Im anahnu meashanim ehad mi Counters, meshtane gam at a-sheni

Bou niftah debug, ve-nire she oto Action tofes paamaim,
Ve combinedReducer maric Action le shnej slicim

She omer she hayavim Incapsulate gam Action
`;

export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Two Sliced Counters Example</Heading>
    <TwoCountersSliced/>
  </Slide>
);
