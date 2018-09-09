import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Ahshav khse dibarnu kvar al React-Redux basics: Store, Actions, Reducers, Containers ve Presentational Components
* Anahnu yaholim laavor le Reuse be-React Redux Apps
* Epshar leagid she esh kama ramot shel code reuse
* Anahnu yaholim Reuse Presentational Components - ze day pashut ve straight forward
* Archetectura shel' React atsma notenet efsharut laasot at ze.
* Mi tsad sheni, esh od efsharut, im applikatsiya oved im separate sub-modules, 
* ve/or meshtameshet MicroFrontend arketectura, ve dei meurkevet
* Be derh klal esh efsharut reuse sub-models or eih she anahnu korim Widgetim as Blackbox
* ... bli mamsh youdea eih ze nivne befnim, pashut integrate otam dereh API she hem notnim.
* Po ani yahol lishloah kulam me she meonen otam nose shel Shared React Perceptional Components Library 
* or nose shel' Reusable Widgets le ahad me a tolkim a kodmim shel Big Bang Theory Meetapim
* ze talk shel Vlad Misteskiy al "Micro Fronten Architectured" (po atem yahol lirot link)
* Aval me emtsa bein shnei mekrim esh mikre she Presentional Component the le maspic
* ve Widget ze yoter me day le tsrahim shelanu.
* Ve anahnu Pahut rotsim laasot reuse
* le Redux Container (klomar Actions, Reducers, stateToProps ve dispatchTiProp mapping, mivne shel Store)
* at the middle
* переиспользование бизнес логики компонентов:
* i.e. ReduxContainer (ConnectedComponents) + reducers
* Redux reuse limits/issues
* "god" store
* container singleton, 
* boilerplate, 
* best for middle size apps

_TODO:_
* link to Vlad's module
* translate comments 
`;

export const markdown = `
### Reuse in Redux App 

* Presentational Components
* Sub modules (Widgets) (link to Vlad's talk)
* Redux Container: Behaviour and Business logic
* Limits and issues in Redux Container reuse
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
