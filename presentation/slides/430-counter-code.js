import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
Nistakel le code...

Mathilim mi mivne shel State. Esh rak parameter ehad: count

Kan meacrim Store, meshtamshim ba-funkcia createStore im reducer 
(she oto nire meuhar ioter)

Bou naavor le React Component: 
roim output shel Counter, 
shnej kaftorim [+] [-] im click handlers

Meshalvim React ve-Redux:
roim po CounterApp im Provider ve-Store.
Aplikacia meshtameshet ba-Container (lyo UI Component yashar)

Meacrim CounterContainer: mehabrim (im Connect) at-CounterComponent le-Store 
mekablim CounterContainer

Medkadmim le-mapping shel' State le-Props

Ve hine: mapping dispatch shel' Actions (increment ve decrement) le-Props

Ve kaha nira Reducer, she magiv le-shnej Actions: 
COUNTER_INCREMENT Reducer mosive 1 le-count
ve-COUNTER_DECREMENT Reducer morid 1 mi-count

Simu lev Reduser mahzir Object/State hadash ve lyo mishane (lyo Mutate) State a-codem
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
