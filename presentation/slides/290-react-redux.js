import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
Kaha nitan laarot eih Provider metnaheg

Bli Provider ein efsharut levace connect, 
leavir netunim me Redux store yashar le-Component pnimi.
Le dugma le TodoItem Component.

Bli Provider ve-connect, anahnu crihim leavir netunim 
mi-App le-List,
m-List le-Item

U-betah im be-aplikaca amitit esh ramot rabot shel' hirarhia,
levace at ze mamash lyo noah

Ve-ze lyo noah le-tahzuka. 
Kol shinui katan doresh arbe shinum messaviv.
`;

// const img = require("../../assets/react-todo-app-with-provider.svg");
const img = require("../../assets/rr.003.png");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={5}>React-Redux Provider</Heading>
    <Image
      bgColor={"white"}
      // width={"760px"}
      height={"560px"}
      src={img.replace("./", "")}
    />
  </Slide>
);
