import React from "react";
import { Slide } from "spectacle";

export const notes = `
Lamrot she dapim nirim mamash shone.
 
Adain esh arbe eizorim zheim ve-domim.
`;

const bg = require("../../assets/nmc3.png");

export default (
  <Slide
    transition={["fade"]}
    bgImage={bg.replace("./", "")}
    bgSize="contain"
    bgRepeat="no-repeat"
  />
);


