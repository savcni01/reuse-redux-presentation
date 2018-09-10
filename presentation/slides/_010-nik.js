import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
 * Oni Nik Savchenko
 * Front end developer, po, be Nilsen
 * Be shanim ahronim oni metasek be rov im React, Redux, js, html/css
 * Be mekrim bodedim she oni tsarih lassot masheu be BackEnd
 * Oni meshtamens Node.js (oni fully JS gay, kmo she atem roim)
 * Sah a-kol oni be thum yoter me Esrim Shanim
 * She tavitem - Atarim rishonim baniti im PHP-3 ve HTML-3
 * CSS Level 2 ve ECMA Script 3 od le ahyu relieased
 * Aval ze le ka ze ehapt li be oto zman, ki oni pashut od le hishatamshti le CSS ve le JS
 * Ok, maspik elay
 * Bo nidaber al ha nose...
_TODO:__ 
 * check other’s presentations
`;

export const markdown = `
##### Nik Savchenko,
#### Front End Developer at Nielsen

----

* React, Redux
* JavaScript, HTML/CSS
* Node.js
* 20+ in Web development
* married +2
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


