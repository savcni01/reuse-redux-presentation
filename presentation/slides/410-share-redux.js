import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Aharej she dibarnu al React-Redux basics: 
Store, Actions, Reducers, Containers ve UI Components

* Ovrim le nose Code Reuse be-React-Redux

* Esh kama ramot shel Code Reuse

* Rashit nitan Reuse UI Compoents. Ze pashut, ze ugdar otomati be-React

* Mi cad sheni, be mejda ve-applikacia dei gdol'a im Modulim nifradim or Mircrofrontend arhetectura,
kaemet efsharut le-Reuse Modulim (or eih she anahnu korim le ze Widgetim) be tor BlackBox.
Le lyo coreh laddat eih Widgetim bnuim befnim, anu meshalvim otam be amcaut API she hem osrim.

* Le kol' mi-she mitan'en benosim:
Shared UI Components or Shared Reusable Widgets
Ani esamh leamlic al-ahad me a Tolkim a kodmim shel Big Web Theory Meetaps.

* Ze talk shel Vlad Misteskiy al "MicroFrontends" 
(ba sof shel' a-maceget iten at-a-link le video).

* Lefamim reuse shel' UI Components ze le maspik le-tsrahim shelanu.
Ve shimush ba-Widgetim ze le yail.

* Ma she anahnu crihim ze Reuse shel Redux Container 
Reuse code shel: Actions, Reducers, 
stateToProps ve-dispatchToProps mapping, mivne shel' Store)

* Kmo she neyemar codem be Reuse Redux Container kayamot mikbalot:
biglal she Store be Redux hu "GOD" object, 
ve kol' Container ze sug shel Singleton,
ve biglal boilerplate shel Redux.
`;

export const markdown = `
## Levels of reusing

* Presentational Components
* Sub Modules (Widgets)
* Redux Container: Behaviour and Business logic
* Limits and issues in Redux Container reuse
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
