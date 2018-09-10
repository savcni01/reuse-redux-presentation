import React from "react";
import { Slide } from "spectacle";

export const notes = `
* Eih she atem roim,
* Esh arbe eizorim she hem nirim oto davar or dome meod be-dapim shonim.
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


