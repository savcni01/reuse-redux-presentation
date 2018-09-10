import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Shimush hozer shel code

* Kama milim al ma anuahnu nidaber ayom

* Nathil mi dugmaout she mahishot lama ve eih anahnu osim Code Reuse

* Eih anahnu yaholim laasot ze be applikaciot React-Redux, eizo challenges anahnu crihim liftor 

* Beshvil leahvin ze... kcat nedaber al React-Redux Basics

* Ninase Naive (Straight Forward) Approach le-Code Reuse 

* Ve ahar kah ninease be yahad limtso dereh yoter tova, gmisha ve kalya le-Code Reuse

* Be sof nedaber al React Redux Island - sifriya she anahnu katavnu po, be-Nielsen

* Ve she ozeret liftor code reuse chanlengim ve limitim shel React-Redux arkitectura
`;

export const markdown = `
## Agenda
#### What you gonna hear

* Reuse at Web applications
* Reuse at React-Redux applications
* React and Redux basics
* Try naive approach for code reuse 
* Try to find better way
* React Redux Island
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
