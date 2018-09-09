import React from "react";
import { Slide, Markdown } from "spectacle";

const images = {
  reduxFlow: require("../../assets/react-todo-app-with-provider.svg")
};

export const notes = `
* Kaha efshar laarot eih Provider oved al diagram
* Bli Provider ein efsharut laasot connect, klomar leavir netunim me Redux store yashar to komponenta pnimit.
* Le dugma le komponenta TodoItem.
* Bli Provider ve connect, anahnu tsrihim leavir netunim ma App le List, me List le Item
* Ve barur im esh be aplikaciot ammitiyot yoter ramot shel hierarhiya, ze yahol liot mamash le noah
* Ze lyo noah le-etsirat app (arbe bolireplate code)
* Ve ahi hasuv ze lyo noah le-tahzuka. 
* Kol shinui katan doresh arbe shinum messaviv.

_TODO:_
* change image
`;

export const markdown = `
#### React-Redux Provider
![Redux Store Flow](${images.reduxFlow.replace("/", "")})
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
