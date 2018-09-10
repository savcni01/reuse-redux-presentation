import React from "react";
import { Heading, Slide } from "spectacle";

export const notes = `
* Ani smah leaceg sifriya React Redux Island

* Katavnu ota po be Nilsen, 
Be yanim a elu anahnu mesaimim Open Source process, 
ve be carov sifriya ihie zmina le culyam.

* React Redux Island kolel pitronot le kol' limits ve issues she alinu ayom.

* Be gadol meshtamshim mahsavot shel dugma ahrona sheli, 
aval ossinu kol' workarounds be cura arbe ioter nakia, 
gamisha, ve kal' le shimush

* Baharnu shem Island ke symbol le mashehu she 
hu day isolated me a dvarim messaviv
Ke alegoria le Reusable Container be yam shel React Redux
Ve gam biglal she shemot kmo react-redux-isolate, react-redux-reuse
kvar le yha zminim (stam, ani pashut cohek)
A emet anahnu maamenim she React-Redux-Island arbe ioter yafe ve mashmai 

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
      size={2}
      bgColor="background"
    >React Redux Island</Heading>
  </Slide>
);
