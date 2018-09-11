import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Beshvil lehaber(integrate) React ve-Redux 
meshtamshim ba-React-Redux binding library

* Helek rishon shel React-Redux hu Provider.
Provider meafsher le Redux-Store lihiot zamin le-Connect le-React Components

* A-helek a-sheni shel' React-Redux hu funkcia CONNECT
* connect - mahaber React component le-State
* connect - le maase hu H-O-C, 
* connect lyo mevace shinuim be React Component, 
ah mahzir at-Component a-hadash - she nikra Connected Component (or Redux Container)
`;

export const markdown = `
## React Redux Integration

* React-Redux lib is React binding for Redux
* Provider - make Redux Store available to connect to components
* connect - connects React Component to a Redux Store 
* connect - is HOC, returns new Connected Component
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
