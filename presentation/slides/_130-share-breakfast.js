import React from "react";
import { Appear, Heading, Image, Slide } from "spectacle";

const images = {
  breakfast1: require("../../assets/breakfast-1.jpg"),
  breakfast2: require("../../assets/breakfast-2.jpg")
};

export const notes = `
* Od dugma...
* Oni, kmo aba tov, me rega she gdola olha le gan, mahin aruhat boker beshvila.
* Ve be rega she gam ktana olha le gan...
* Oni betah osse Reuse... 
* Ma she ovad le ahad, laavod gam le shneihen.
* Simu leve she lefamim anahnu tsrihim laasot adaptatsiot (parametrize) Reuse.
* Leshanot tsevam, godel, ulay comositsiya shel sub elementim.
* Anahnu roim ze po, be dugma, ve anahnu tsrihim otam dvarim be coding.
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide
    transition={["fade"]}
    bgImage={images.breakfast1.replace("/", "")}
    bgDarken={0.5}
  >
    <Heading
      size={4}
      bgColor="primary"
      textColor="secondary"
    >Reuse with changes</Heading>
    <Appear fid="1">
      <Image src={images.breakfast2.replace("/", "")}/>
    </Appear>
  </Slide>
);
