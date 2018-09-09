import React from "react";
import { Heading, Slide } from "spectacle";

export const notes = `
* wa are glad to present React Redux Island 
_TODO:_
* change image
`;

const bg = require("../../assets/redux-island.jpg");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide
    transition={["fade"]}
    bgImage={bg.replace("./", "")}
    bgDarken={0}
  >
    <Heading
      size={4}
      bgColor="primary"
      textColor="secondary"
    >React Redux Island</Heading>
  </Slide>
);
