import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Akol' oved, ah pitraon le gamish ve optimali
im shihpulim rabim shel code.

* Ma im nictareh leosif odd Counter? Od shihpulim shel code

* Ve ma im nictareh leshanot Counter (le dugma leosif caftor Reset)?
Nedvakesh shimuj be-mispar mekomot

* Ve ma im nictareh laavod im Container aher, lo Counter?
Ka nire nictareh lihtov oto kod shuv ve-shuv.

* Barur she Ef6ar laasot refactoring, leoci helec me a code le funkciot nefradot, 
lihtove code pashut ioter.
Aval pitraon, adain le isapek gamishut ve-optimaliut
`;

export const markdown = `
## Issue solved! DRY? 

* Very custom solutions
* Boilerplate code
* Change Counter Component?
* Implement for one more Counter?
* Implement for another Component?
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


