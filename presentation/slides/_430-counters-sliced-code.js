import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Kodem kol' bou nenase incapsulate State le-Slices shonim

* Kmo be paamim a kodmot, mathilim mi mivne shel State
She a paam baniti meurkav youter, 
bemcom bottom: {count} shomrim bottom-counter State be-toh: my.custom.bottomCounter

* Meacrim Store im CombinedReducer

* Ve Reducer hu oto ahad le lyo shihpul (le top ve-le-bottom)

* Be CunterApp mosifim CounterContainer paamaim. 
Aval mosifim prop isolateId=top le Container rishon
ve-Prop isolateId=bottom le Container sheni. 

* Ve be-nosaf le-Container sheni mosifim od Prop ehad:
funkcia Slector, biglal she mevne shel' State
shel' Bottom Counter iouter meurkevet.

* Ein shimuim be ecirat Container (ze oto Conatiner)

* Aval be mapStateToProps mosifim kama dvarim hadasim:
Mahzerim lyo state.count kmo be dugmaot a-kodmot
Ah slice.count 

* Slice ze mashe anahnu mekabkim me funkcia selector.

* Im Selector le mugdar, bonim oto lefi konvencia state[isolateId]

* mapDispatchToProps ka rega bli shinuim
`;

export default (
  <CodeSlide
    transition={["fade"]}
    lang="js"
    code={require("raw-loader!../code/counters-sliced")}
    ranges={[
      { loc: [9, 16], title: "Sliced Counters Example" },
      { loc: [38, 49] }, // create store
      { loc: [19, 32] }, // reducer
      { loc: [114, 127] }, // react app
      { loc: [108, 112] }, // container
      { loc: [86, 95] }, // mapStateToProps
      { loc: [98, 106] } // mapDispatchToProps
    ]}
  />
);


