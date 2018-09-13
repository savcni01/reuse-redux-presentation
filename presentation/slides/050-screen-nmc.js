import React from "react";
import { Slide } from "spectacle";

export const notes = `
Od daf... Eih she atem roim be-dapim shonim...

Esh arbe eizorim she zehim or baalej dimyon.

Le dugma oto SearchBox mi-small, ve-oto Toggle (all-enable-disable) be-emca 
`;

const bg = require("../../assets/nmc2.png");

export default (
  <Slide
    transition={["fade"]}
    bgImage={bg.replace("./", "")}
    bgSize="contain"
    bgRepeat="no-repeat"
  />
);


