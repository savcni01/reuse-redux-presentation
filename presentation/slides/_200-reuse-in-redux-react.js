import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Sikum katan, ahary dugmaot...
* Im esh lany aplikatsiya maspik gdola:
* Anahnu ka nire nitstareh code reuse.
* Anahnu rotsim lehishtamesh DRY princip.
* Beshvil laasot pituah and takzuka shel aplikaciya yoter pshuta.
* Esh efshrut laasot reuse le UI, Content Management, Behaviour, Business logic shel' komponentot.
* Be Arhetektura shel React Redux aplikatsiyot esh la kol miney limitim
* Ve beshvil lihikanes amok be reuse code chalangim
* Oni rotse leagid kama milim al React Redux Basics 
* Leaskir le mishe yodea or leasbir be ktana le mishe le makir otam
`;

export const markdown = `
### Redux Reuse

* Big App need share/reuse code
* DRY: Don't Repeat Yourself
* UI, Content, Behaviour Reuse
* Redux architecture have limits for code reuse
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
