import React from "react";
import { Heading, Slide } from "spectacle";

export const notes = `
* Ani smah leacig sifriya React Redux Island

* Katavnu ota po be Nilsen, 
Be yamim a elu anahnu mesaimim at-taalih shel Open Source, 
ve be carov sifriya tihie zmina le culyam.

* React Redux Island kolel pitronot le kol' baaiot ve migbalor she elejnu a-yom.

* Ishtamshnu be-raayonot mi-dugma ahrona, 
U-icarnu kol' Workarounds be cura arbe nakia, gamisha, yeila u-kalya le shimush
`;

// Baharnu shem Island ke symbol le mashehu she
// hu day isolated me a dvarim messaviv
// Ke alegoria le Reusable Container be yam shel React Redux
// Ve gam biglal she shemot kmo react-redux-isolate, react-redux-reuse
// kvar le yha zminim (stam, ani pashut cohek)
// A emet anahnu maamenim she React-Redux-Island arbe ioter yafe ve mashmai

const bg = require("../../assets/redux-island.jpg");

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
