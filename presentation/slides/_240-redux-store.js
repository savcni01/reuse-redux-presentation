import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
* Nahzor le shniya le Redux store

* Ki ahsav anahnu tsrihim integrate React app im Redux Store

* Oni maskir she Redux Store mikabel Action (klomar teur shel event)

* Ve al basis State nohahi ve Action - maric reduce function ve mahzir state hadash 
`;

const img = require("../../assets/redux-flow-store.svg");

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


