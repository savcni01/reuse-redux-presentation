import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
* Po anahnu roim Basic Redux Flow diagram
* Anahnu roim Store she mahzik/shomer State
* Al basis State meranderim View, UI shel' app
* Kol' User Event mathil/kore/sholeah Action (omrim dispatch Action) to Store
* Store react on Action
* Ve osse reduce shel State: clomar al basis shel' action ve state a-nohehi hozer State a-hadash
* View merundar shuve' al basis state a-hadash
`;

const img = require("../../assets/redux-flow.gif");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={5}>Basic Redux Flow</Heading>
    <Image
      bgColor={"white"}
      height={"560px"}
      src={img.replace("./", "")}
    />
  </Slide>
);
