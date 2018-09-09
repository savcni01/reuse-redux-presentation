import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Nathil me Redux basics
* Redux Docs site magdir Redux kmo: 
* Predictable (tsafui) state container beshvli lenahel state shel' aplikaciya
* Emtsa shel redux ze Store...
* Store mahzik state, meafsher gisha le state, meafsher le state lehitatken be amcaut dispatch shel action
* Esh shlosha core principles shel' Redux: 
* Single source of trues: cal nitunim shel' app mahzikim/shomrim be-State (tree object) ehad
* State is read only: ve cal shinuim mufilot al edei Actions 
* State lehitatken rak be amcaut Pure Functions (Reducers)
* Redux meafsher laavod im View librarim shonim, ve comuvan oved mitsuyan im React.
* View layer rak merander UI al basis State, kmo she omrim UI ze funkciya mi state.
`;

export const markdown = `
### Redux Basics
* Store: holds application State
* Actions: object, describe changes to State 
* Reducers: function defined how to transform State
* View: render UI on base of State
* Store Middlewares: place for side effects of App
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
