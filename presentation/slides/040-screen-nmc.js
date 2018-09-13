import React from "react";
import { Slide } from "spectacle";

export const notes = `
Simu lev le eozorim mesumnim.

Le dugma le SearchBox, be cad Small or le-Toggle br-cad yamin.
`;

const bg = require("../../assets/nmc1-m.png");

export default (
  <Slide
    transition={["fade"]}
    bgImage={bg.replace("./", "")}
    bgSize="contain"
    bgRepeat="no-repeat"
  />
);


