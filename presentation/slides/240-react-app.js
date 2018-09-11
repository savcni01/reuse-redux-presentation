import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
* Kmo she amarnu Redux oved mitsuyan im sifriat React kmo View Layer

* Po anahnu roim diagrama shel' applikacia React

* React noten livnot me helakim ktanim ve nifradim (isolates) UI murkav (complex) shel applikacia.

* Kshe anahnu mistamshim React App bli shum State Management container (kmo Redux, Mobx or aher).
State shel aplikacia mefutsal' (splited) bein Components.

* Ve im kama Components tsrihim leagiv le-otam shinuim shel' nitunim (State Share)
meshtamshim be-State hoisting or State lifting 
(clomar shomrim State meshutaf be-hOre a-meshutaf a-karov)
[dugma al diagram]

* React noten efsharut lehavir netunim ve-funciot-Callback me a a-horim le yaladim ke-Props

* U be-hazara laalot Eventim me eladim le hOrim
[dugma al diagram]
`;

// const img = require("../../assets/react-todo-app.svg");
const img = require("../../assets/todo-react-app.png");

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
