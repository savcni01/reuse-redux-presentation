import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
 * Korim li Nik Savchenko.
 
 * Front end developer, po, be-Nilsen
 
 * Ba-shanim a-ahronot oni metasek be-ikar im React, Redux, js ve-html/css
 
 * Be mekrim bodedim kaasher oni osse masheu be-BackEnd - Oni meshtamesh Node.js
 
 * Sah a-kol' oni be thum yoter mi-esrim shana
 
 * Ok, maspik alay - bou nidkadem le-nose...
`;

export const markdown = `
##### Nik Savchenko,
#### Front End Developer at Nielsen

----

* React, Redux
* JavaScript, HTML/CSS
* Node.js
* 20+ in Web development
* Married +2
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


