import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Beshvil lassot nose shel Reuse od yoter barur,
* Oni rotse laarot kama dugmaot me a-haim amiti (lyo koding).
* Ulay kama me kem samtem lev, 
* She be slide efo oni dibarti al atsmi,
* Aya shura: nasui plus shtaim (+2)
* Osafti ota le rak biglal she ze hamud ve mosive ishiyout.
* Aval gam biglal she be rega she esh lah shnei banot 10 ve 7:
* Ata mevin tov meod eih laasot Reuse, ma ze noten leha, eih ze ozer ve esh leha tonnot shel dugmaot.
`;

export const markdown = `

## Reuse in Real Life

`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


