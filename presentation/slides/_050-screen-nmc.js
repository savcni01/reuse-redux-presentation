import React from "react";
import { Slide } from "spectacle";

export const notes = `
* Ve kanire anahnu nirtse lassot shimush hozer shel ezorim a-elyu.
* Anahnu le rotsim laasot otam komponentot ve modulim kama paaim.
* Ve od eoter hashuv anahnu le rotsim lehitakzek (leshanot) otam komponentot kama paamim.
* Barur she lakahati NMC rak ke dugma.
* Ve kimat al kol aplikacia aheret efshar leagid otam dvarim me bhinat a code reuse.
`;

const bg = require("../../assets/nmc4.png");

export default (
  <Slide
    transition={["fade"]}
    bgImage={bg.replace("/", "")}
    bgDarken={0}
  />
);


