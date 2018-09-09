import React from "react";
import { Slide, Markdown } from "spectacle";

const images = {
  reduxFlow: require("../../assets/redux-flow-store.svg")
};

export const notes = `
* Nahzor le shniya le Redux store
* Ki ahsav anahnu tsrihim integrate React app im Redux Store
* Oni maskir she Redux Store mikabel Action (klomar teur shel event)
* Ve al basis State nohahi ve Action - maric reduce function ve mahzir state hadash 

_TODO:_
* change image
`;

export const markdown = `
#### Redux Store

----

![Redux Store Flow](${images.reduxFlow.replace("./", "")})
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


