import React from "react";
import { Slide } from "spectacle";

export const notes = `
* Bo nire kama screenshotim shel web applikacia shelanu:
* Nilsen Marketing Cloud.
* Simu lev le eozorim mesamnim.
 
_TODO:_
* blur critical data on pictures
* mark repeated places
* size of images
`;

const bg = require("../../assets/nmc1.png");

export default (
  <Slide
    transition={["fade"]}
    bgImage={bg.replace("./", "")}
    bgDarken={0}
  />
);


