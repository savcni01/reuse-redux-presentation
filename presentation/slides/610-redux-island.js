import React from "react";
import { Heading, Slide } from "spectacle";

export const notes = `
Ani smah leacig sifriya React Redux Island

Katavnu ota po be Nilsen, 
Be yamim a elu anahnu mesaimim at-taalih shel Open Source.

React Redux Island kolel pitronot le kol' baaiot ve migbalor she elejnu a-yom.

Ishtamshnu be-raayonot mi-dugma ahrona, 
U-icarnu kol' Workarounds be cura arbe nakia, gamisha, yeila u-kalya le shimush
`;

// const bg = require("../../assets/redux-island.jpg");
const bg = require("../../assets/island-3.jpg");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide
    transition={["fade"]}
    bgImage={bg.replace("./", "")}
    bgDarken={0}
  >
    <Heading
      size={2}
      bgColor="background"
    >React Redux Island</Heading>
  </Slide>
);
