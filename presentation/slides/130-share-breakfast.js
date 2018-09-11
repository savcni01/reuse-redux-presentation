import React from "react";
import { Appear, Heading, Image, Slide } from "spectacle";

const images = {
  breakfast1: require("../../assets/breakfast-1.jpg"),
  breakfast2: require("../../assets/breakfast-2.jpg")
};

export const notes = `
* Od dugma... Kmo aba tov, tamid aiti ahrai al aruhat boker le-gdola.

* U kmo methanet (tov) ishtamshti be-Reuse ba-ahanat aruhat boker gam le-ktana.

* Simu lev she lefamim be-shemush hozer nitan lishanot style: ceva, godel, ve hulej

* Roim ze po, be dugma, ve be tehnut ze oved oto davar bidiuk.
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide
    transition={["fade"]}
    bgImage={images.breakfast1.replace("./", "")}
    bgDarken={0.3}
  >
    <Heading
      size={3}
      bgColor="background"
    >Reuse with changes</Heading>
    <Appear fid="1">
      <Image src={images.breakfast2.replace("./", "")}/>
    </Appear>
  </Slide>
);
