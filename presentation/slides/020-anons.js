import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
Kama milim be-ma nitmaked ayom

Nathil mi dugmaout, eihen nitan lirot mataj ve-eih mishtamshim ba-Code Reuse.

Aharej ze nedaber be-kcara al React-Redux Basics

Kidej leahvin eih meshtamshim be-Code Reuse be applikaciot React-Redux,
ele challenges olim, ve-eih nitan liftor otam.

Be-emsheh Ninase Naive Approach le-Code Reuse be-Redux

U-ahar kah ninease be-yahad limco at a-dereh tova ioter, gmisha u-kalya le-Code Reuse

Be sof nedaber al React-Redux-Island- sifria she pitahnu po, be-Nielsen

She be-ezraTa shimush hozer ba-kod, ofeh liout kalil be ioter
`;

export const markdown = `
## Agenda
#### What you gonna hear

* Reusability in Web applications
* React and Redux basics
* Reusability in React-Redux applications
* Try naive approach for Code Reuse 
* Try to find a better way
* React Redux Island
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
