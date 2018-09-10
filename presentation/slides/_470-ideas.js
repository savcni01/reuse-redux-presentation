import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Bo naase sikum shel pitronot

* Be mapStateToProps ovdim im Slice shel State,
ve le state clali. Osim slice al basis isolateId 
or funkcia selector le mekrim meurlavim

* Be-mapDispatchToProps - osim isolation shel Action,
clomar mosifim prefix lefi oto isolateId

* Be zman shel ecira combined reducer, meshtamsim HOF
isolateReducer im oto isolateId, beshvil leacer reducer 
hadash - isolatedReduser. Ve isolatedReducer, iodea laavod 
ve lefarter isolated Actions

* Anahnu od crihim incapsulate kol' workarounds shelanu,
bishvil lyo laaso at ze be col' Container.

* Ve osinu at ze!
`;

export const markdown = `
#### Our Ideas 

* Specify subset/slice of store at Container
* Isolate Actions: use prefix from JSX
* Isolate Reducer: Use same prefix at combinedReducer
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


