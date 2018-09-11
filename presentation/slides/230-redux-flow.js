import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
* Basic Redux Flow diagram

* Anahnu roim Store she mahzik at a-State

* Al basis State meranderim View - UI shel' aplikacia

* Kol' User Event mafil' Action le-Store

* Store magiv le- Action

* Ve-mevace Reduce shel State: klomar al basis shel' Action ve-Sstate a-nohehi mahzir State a-hadash

* View merundar shuv kavr al a-basis a-State a-hadash
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
