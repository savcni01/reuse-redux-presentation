import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Kama milim be-ma nitmaked ayom

* Nathil mi dugmaout, eihen nitan lirot mataj ve-eih mishtamshim ba-Code Reuse.

* Le-ahar mi-kah negale eih meshtamshim be-Code Reuse be applikaciot React-Redux,
ele challenges olim, ve-eih nitan liftor otam.

* Kidej leahvin at-ze... nedaber be-kcara al React-Redux Basics

* Be-emsheh Ninase Naive Approach (klomar dereh pshuta) le-Code Reuse be-Redux

* U-ahar kah ninease be-yahad limco at a-dereh tova ioter, gmisha u-kalya le-Code Reuse

* Be sof nedaber al React-Redux-Island - sifria she anahnu pitahnu po, be-Nielsen

* She be ezrata shimush hozer ba-kod, be-platforma-React-Redux, ofeh liout kalil be ioter
`;

export const markdown = `
## Agenda
#### What you gonna hear

* Reusability in Web applications
* Reusability in React-Redux applications
* React and Redux basics
* Try naive approach for code reuse 
* Try to find a better way
* React Redux Island
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
