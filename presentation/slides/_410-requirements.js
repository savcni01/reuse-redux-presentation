import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Ahrej she nissinu Naive Approach, 
bo nahsov le ma micapim me a pitaron le-Container Reuse

* Kama she pahot simuim be-taalih shel eycirat Container,
Im ze she esh lany arbe Containers muhanim. 
Le meuniyanim leshanot kol' ehad mi hem, ah rak lehishtamesh ba-ohem.

* Kama she evshar pahot shinuim, be ze - eih anahnu meshtamshim Reusable Container
Od paam anahnu le rocim she havayat shimush shel Reusable Container 
nihie shona le gamre me Container reagilim

* Le hashuv a-im anahnu meshtamshim Container pashut 
or Container she be-toho esh od Containers
Adain havayat shimush amura liot zehya.

* Ve gam ze ihie tov im ihie lanu API pashut ve gamish

* Adrisha a-ahrona: Technical Stack Independence.
Le meshane be-ele variaciot shel Redux anahnu meshtamshim:
Naniyah store yahol liot banui im immuteable.js or bli imuteble.
Store yahol lehishatamesh be-Thunk middleware, or Redux Saga, of mashehu aher. 
Pitaron shelanu amur laavod.
`;

export const markdown = `
## Solution Requirements

* No/minor changes at Reusable Container creation process
* No/minimal effort to use Reusable Containers
* Use with simple and complex Containers
* Simple, friendly API
* Redux stack independent  
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


