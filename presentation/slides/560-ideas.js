import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
Bo nisakem 

Be mapStateToProps ovdim im Slice shel State, ve lyo kol' a-State. 
Osim Slice al basis isolateId or funkcia selector le mekrim meurkavim.

Be-mapDispatchToProps - osim isolation shel Action, mosifim prefix lefi oto isolateId

Be zman shel ecira combinedReducer, meshtamsim ba-HOF
isolateReducer im oto isolateId, beshvil leacer reducer 
hadash - isolatedReduser.

Ve isolatedReducer, iodea laavod ve lefalter isolated Actions

Anahnu od crihim incapsulate kol' workarounds shelanu,
bishvil lyo laasot at ze be col' Container.

Kvar buca!
`;

export const markdown = `
## What we did

* Specify subset/slice of store in Container
* Isolate Actions: use prefix from JSX
* Isolate Reducer: Use same prefix in combinedReducer
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


