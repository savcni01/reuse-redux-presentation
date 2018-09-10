import React from "react";
import { Slide } from "spectacle";

export const notes = `
* Barur she nirce levace shimush hozer shel ezorim a-elyu.

* U-barur she le racui lefateah ve leatic otam rahivim (Components, Modules) kama paaim.

* Ve od eoter hashuv, anahnu le meunyanim letahzek (leshanot) otam rahivim be kama mekomot.

* Ereti NMC rak ke-dugma. Al kol aplikacia aheret efshar legalot otor davar, me bhinat a-Code Reuse.
`;

const bg = require("../../assets/nmc4.png");

export default (
  <Slide
    transition={["fade"]}
    bgImage={bg.replace("./", "")}
    bgSize="contain"
    bgRepeat="no-repeat"
  />
);


