import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Ahsav kshe nissinu naive approach, bo nenanse lahsov ma anahnu rocim me a pitaron shelanu le Container Reuse

* Kama she pahot 6imuim be process 6el eycirat Container,
ki esh lany arbe Containers muhanot ve anahnu pashut rocim reuse otam, 
ve lyo levazbes zman be shinuim shel kol' ehad mi Containers 

* Kama she evshar pahot 6inuim, be ze - eih anahnu meshtamshim Reusable Container
Od paam anahnu le rocim she havayat shimush shel Reusable Container ihie 6one le gamre me Container reagil

* Le hashub a-im anahnu meshtamshim Container pashut or Container she be-toho esh od Containers
Adain havayat shimush amur liot oto davar.

* Ve gam ze ihie tov im ihie lanu API pashut ve gamish

* Requirement aharon ze Tech. staeck independence. Le hasuv iezo variaciot shel Redux anahnu meshtamshim:
Nagid store yahol liot nivna im immuteable.js or bli imputeble.
Store yahol lehishatames Thunk middleware, or Redux Saga, of ma6ehu aher. 
Pitaron shelanu amur laavod.
`;

export const markdown = `
#### Solution Requirements

* No/minor changes at Reusable Container creation process
* No/minimal effort for use Reusable Containers
* Use with simple and complex Containers
* Simple, friendly API
* Redux stack independent  
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


