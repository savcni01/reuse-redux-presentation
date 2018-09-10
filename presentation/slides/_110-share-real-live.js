import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Kdei lehavi nose shel' Reuse le-barur be-ioter, ismah laarot kama dugmaot me a-haim amitim (lyo koding).

* Ulay mishu sam lev be shkafim a-rishomin ciyanti nasui+2.

* Be rega she esh lahem stej banot bnot 7 ve-10 - mathilim leavin tov meod eaih lehishtames ba-Reuse
ma ze noten leha, be ma ze ozer, ve esh leha tonnot shel dugmaot
`;

export const markdown = `
## Reuse in Real Life
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


