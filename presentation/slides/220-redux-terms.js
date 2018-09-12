import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Nathil me Redux basics

* Atar shel Redux magdir sifriyat Redux kmo:
Predictable State-Container le niul' State shel' aplikaciya

* Basis shel Redux ze Store...
* Store mahzik State, meafsher gisha le State,
meafsher le state lehitatken be amcaut dispatch shel' Actions

* Esh shlosha icronot shel' Redux: 
* Single source of truth: kol' a-nitunim shel' aplikacia shmurim(metuhzakim) be-State ehad (tree object)
* State is read only: ve-kol' a-shinuim mufalim al edei Actions 
* State metatken rak be amcaut Pure Functions (Reducers)

* Redux meafsher laavod im sifriyot UI/View shonot, 
ve kamuvan oved mitsuyan im React.

* View layer rak merander UI al basis State, kmo she omrim UI ze funkciya mi State.
`;

export const markdown = `
## Redux Basics
* Store: holds application State
* Action: object describing changes 
* Reducer: function that defines how to transform State
* View: renders UI based on State
* Store Middlewares: third-party extension point 
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
