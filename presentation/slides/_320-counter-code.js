import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Nistakel le code shel Redux Counter App

* Mathilim mi mivne shel State. Esh rakparameter ehad: count

* Po meacrim Store, meshtamshim funkcia createStore im reducer 
(nire oto yoter meuhar)

* Ahashav bo nire React part 
(bidiuk kmo osinu kshe dibarnu al React-Redux Basics)
Roim po React Component meod pshut: 
output shel counter, 
shnej kaftorim [+] [-] im click handlers

* Mathilim React-Redux integracia 
roim po CounterApp im Provider ve Store
Kmo she atem roim Aplikacia meshtameshet Container 
(lyo Presentational Component)

* Ve po anahnu meacrim oto (CounterContainer): 
osim connect shel' Counter Component le Store mekablim CounterContainer

* Po roim mapping shel state le-props shel' Presentational Counter Component

* Ve po mapping dispatch shel' Actions (increment ve decrement) 
le-props shel' oto Counter Component

* Ve kaha nire Reducer meod pa6ut 6elanu, hu yahol react le shnej Actions: 
she rainu be mapsDispatchToProps
COUNTER_INCREMENT Reducer mosive 1 le-count
ve-COUNTER_DECREMENT Reducer morid 1 mi-count
Simu lev Reduser mahzir Object/State hadash ve lyo mutate State a-codem

`;

// noinspection JSUnusedGlobalSymbols
export default (
  <CodeSlide
    transition={["fade"]}
    lang="js"
    code={require("raw-loader!../code/counter-single")}
    ranges={[
      { loc: [7, 10], title: "Redux Counter App Example" },
      { loc: [30, 31] }, // create store
      { loc: [54, 63] }, // component
      { loc: [89, 93] }, // app,
      { loc: [83, 87] }, // container
      { loc: [68, 70] }, // mapStateToProps
      { loc: [73, 79] }, // mapDispatchToProps
      { loc: [12, 23] } // reducer
    ]}
  />
);
