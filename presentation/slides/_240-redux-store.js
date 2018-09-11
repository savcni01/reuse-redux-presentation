import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
* Nahzor le shniya le Redux Store

* Ki ahsav anahnu crihim Integrate React app im Redux Store

* Oni maskir she Redux Store mikabel Action - teur shel event

* Ve al basis State nohahi ve Action - maric Reduce Function u-mahzir State hadash 
`;

// const img = require("../../assets/redux-flow-store.svg");
const img = require("../../assets/redux-store.png");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={5}>Redux Store</Heading>
    <Image
      bgColor={"white"}
      // width={"760px"}
      height={"560px"}
      src={img.replace("./", "")}
    />
  </Slide>
);


