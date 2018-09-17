import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
Redux meafsher laavod im sifriyot UI/View shonot, 
ve kamuvan oved mitsuyan im React.

Po anahnu roim diagrama shel' applikacia React

React noten livnot me helakim ktanim ve nifradim UI murkav shel applikacia (Decomposition).

Kshe anahnu mistamshim React bli shum State Management container (kmo Redux, Mobx or aher).
State shel aplikacia mefutsal' bein Components.
`;

// Ve-im kama Components crihim leagiv le-otam shinuim shel' nitunim.
// Az shomrim State meshutaf be-hOre a-meshutaf a-karov [dugma al diagram]
//
// React noten efsharut lehavir netunim ve-funciot-Callback me a a-horim le-yaladim ke-Props
//
// U be-hazara laalot Eventim me eladim le hOrim [dugma al diagram]

const img = require("../../assets/rr.001.png");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={5}>React Todo App</Heading>
    <Image
      bgColor={"white"}
      // width={"760px"}
      height={"560px"}
      src={img.replace("./", "")}
    />
  </Slide>
);
