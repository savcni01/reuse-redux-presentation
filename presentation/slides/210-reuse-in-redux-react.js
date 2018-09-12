import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Sikum katan, ahary a-dugmaot...

* Kshe medubar al-aplikacia maspic gdola,
savir le aniah she nictareh Code Reuse.

* Le shohahim al-DRY (...) princip.

* She noten lyanu petuah ve tahzuka shel' alikacia kalim ioter. 

* Kaemet efshrut laasot reuse le-UI, Content Management, Behaviour,
Business logic shel' rahivim (Components).

* Be-Arhetektura shel' React-Redux kayamot mikbalot misuyamot 

* Kedei lehikanes le-toh a-inyanim - nidaber kama milim al React Redux Basics 

* Leaskir le mishe kolet ve-leasbir be ktana le mishe le makir
`;

export const markdown = `
## Why Reuse

* Big App needs to share/reuse code
* DRY: Don't Repeat Yourself
* UI, Content, Behaviour Reuse
* Reuse in Redux can be problematic
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
