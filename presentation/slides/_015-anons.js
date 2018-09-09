import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Shimush hozer shel code
* Kama milim al ma anuahnu nidaber ayom
* Nathil mi dugmaout she mahishot lama ve eih anahnu osim Code Reuse
* Eih anahnu yaholim laasot ze be applikatsiot react-redux, eizo chalanges anahnu tsrihim laavor??? 
* Beshvil leahvin at ze... kcat nedaber al React Redux basics
* Ninase naive (straight forward) approach le code reuse 
* Ve ahar kah ninease be yahad limtso dereh yoter tova ve gmisha le code reuse
* Be sof nedaber al React Redux Island
* Library she anahnu katavnu po, be Nilsen
* Ve she yaholya laazor liftor code reuse chanlengim ve limitim shel React Redux arkitectura

_TODO:_
* check this slide wih team
`;

export const markdown = `
### Code reuse and sharing

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
