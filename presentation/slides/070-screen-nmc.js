import React from "react";
import { Slide } from "spectacle";

export const notes = `
Barur she nirce -- levace shimush hozer shel ezorim a-elyu.

U-le racui lefateah ve-leatic otam rahivim kama paaim.

Ve-od ioter hashuv, anahnu le-meunyanim letahzek/leshanot otam rahivim be kama mekomot.

Ereti NMC (app shelyanu) rak ke-dugma.

Al kol aplikacia aheret efshar LEGALOT otam dvarim, me bhinat a-Code Reuse.
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


