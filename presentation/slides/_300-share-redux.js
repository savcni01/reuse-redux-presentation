import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Ahshav khse dibarnu kvar al React-Redux basics: Store, Actions, Reducers, Containers ve Presentational Components
* Anahnu yaholim laavor le Reuse be-React Redux Apps
* Epshar leagid she esh kama ramot shel code reuse
* Anahnu yaholim Reuse Presentational Components - ze day pashut ve straight forward
* Archetectura shel' React atsma notenet efsharut laasot at ze.
* Mi cad sheni, esh od efsharut... im applikacia dei gdol'a im separated Sub-Modules, 
or le dugma im aplikacia meshtameshet MicroFrontends arketectura. 
* Esh efsharut reuse Sub-Modules or eih she anahnu korim Widgets as Blackbox, 
bli mamsh youdea eih ze nivne befnim, pashut integrate otam dereh API she hem notnim.
* Po ani jahol' lishloah kulam mi she meonen otam nose shel':
Shared React Perceptional Components Library or nose shel' Reusable Widgets 
le ahad me a tolkim a kodmim shel Big Web Theory Meetaps.
* Ze talk shel Vlad Misteskiy al "MicroFrontends" (ba sof shel' presenatcia ani iten link).
* Lefamim reuse shel' Presentational Component ze le maspik
* Ve reuse dereh Widget ze yoter mi day le-tsrahim shelanu.

* Anahnu pa6ut rocim laasot reuse le-Redux Container 
(klomar Actions, Reducers, stateToProps ve-dispatchToProps mapping, mivne 6el' Store)
* Ve po mehakim lanu ma she nikra: limits ve-challenges: 
biglal she Store be Redux ze "god" object, 
ve kol Container ze sug shel singleton,
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
