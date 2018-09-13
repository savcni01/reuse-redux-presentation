import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
Nathil me Redux basics

Atar shel Redux magdir sifriyat kmo:
Predictable State-Container le niul' State shel' aplikaciya

Anahnu roim Store, hu mahzik State shel' aplikacia, meafsher gisha le State,
meafsher le state lehitatken be amcaut dispatch shel' Actions

Al basis State meranderim View - UI shel' aplikacia

Kol' User Event mafil' Action le-Store

Store magiv le- Action

Ve-mevace Reduce shel State: 
klomar al basis shel' Action ve-State a-nohehi 
mahzir State a-hadash.

View merundar shuv, mevusas al-State a-hadash
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
