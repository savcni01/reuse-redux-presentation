import React from "react";
import { Slide } from "spectacle";

export const notes = `
* Bou nire mispar screenshots shel' web applikacia shelanu.

* Nilsen Marketing Cloud.
`;

const bg = require("../../assets/nmc1.png");

export default (
  <Slide
    transition={["fade"]}
    bgImage={bg.replace("./", "")}
    bgSize="contain"
    bgRepeat="no-repeat"
  />
);


