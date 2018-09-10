import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Beshvil integrate React ve Redux meshtamshim React-Redux binding lib
* Helek rishon shel React-Redux ze Provider.
* Provider osse she Redux Store zamin le connect to komponentim React
* Ve helek sheni shel' React-Redux ze funktsiya connect
* connect - mamash mahaberet React component le State
* connect - ze HOC, funktsia lyo osa shinuim be React Component, aval mahzira komponenta hadasha - Connected Component
`;

export const markdown = `
## React Redux Integration

* React-Redux lib is React binding for Redux
* Provider - make Redux Store available to connect to components
* connect - connects React Component to a Redux Store 
* connect - is HOC, return new Connected Component
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
