import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
* Kmo she amarnu Redux oved mitsuyan im React kmo view library

* Po anahnu roim diagrama shel' applikacia React

* React noten livnot me helakim ktanim ve isolated (Component) complex UIs shel' app

* Kshe anahnu mistamshim React App bli shum Statet= Management container (kmo Redux, Mobx or aher)

* State shel aplikacia splited (mefutsal') bein Components.

* Ve im kama komponentim tsrihim to reflect le shinuim shel otam nitunim (share state)
anahnu meshtamshim state hoising or state lifting 
(clomar shomrim state meshutaf be-hOre a-meshutaf ve ahi karov le componentim a-elu)

* React noten efsharut laavor netunim ve calback funciot me a horim le yaladi as props

* Ve afuh Lifting shel' eventim me eladim le hOrim
`;

const img = require("../../assets/react-todo-app.svg");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={5}>React Todo App</Heading>
    <Image
      bgColor={"white"}
      // width={"760px"}
      height={"580px"}
      src={img.replace("./", "")}
    />
  </Slide>
);
