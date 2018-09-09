import React from "react";
import { Slide, Markdown } from "spectacle";

// React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
// It lets you compose complex UIs from small and isolated pieces of code called “components”.

const images = {
  reduxFlow: require("../../assets/react-todo-app.svg")
};

export const notes = `
* Kmo she amarnu Redux oved mitsuyan im React kmo view library
* Po anahnu roim diagram shel' applikacia React
* React noten livnot me helakim ktanim ve isolated (komponentim) complex UIs shel' app
* Kshe anahnu mistamshim React App bli any state managment container (kmo Redux, Mobx or aher)
* State shel aplikatsiya splited (mefutsal') bein komponentot.
* Ve im kama komponentim tsrihim to reflect le shinuim shel otam nitunim (share state)
* anahnu meshtamshim state hoising or state lifting 
* (clomar shomrim state meshutaf be-hOre a-meshutaf ve ahi karov le componentim a-elu)
* React noten efsharut laavor netunim ve calback funciot me a horim le yaladi as props
* Ve afuh Lifting shel' eventim me eladim le hOrim

_TODO:_
* change image
`;

export const markdown = `
###### React Todo App
![React TODO App](${images.reduxFlow.replace("./", "")})
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
