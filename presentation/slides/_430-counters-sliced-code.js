import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Kodem kol' bo nenase incapsulate State le Slices shonim

* Kmo tamid mathilim mi mivne shel State
Osinu state afilu kcat yoter meurkav, bemcom bottom: {count}
Bo nagid she Bottom Counter state be toh my.custom.bottomCounter

* Meacrim Store im Combined reducer

* Ve Reducer ze oto Reducer bli shum shihpul

* Be CunterApp mosifim CounterContainer paamaim, 
aval mosifim props isolateId=top le Container rishon
ve isolateId=bottom le Container sheni, 
be nosaf le-Container sheni mosifim of prop ehad
funkcia Slector, biglal 6e mevne 6el' State
6el' Bottom Counter youter meurkevet

* Ein shimuim ve ecirat Container

* Aval be mapStateToProps mosifim kama dvarim hadasim:
Mahzerim lyo state.count kmo be dugmaot a-kodmot
Mahzerim slice.count ve slice ze mashe 
anahnu mekabkim me funkcia selector.
Im Selector le magdir, pahut bonim oto lefi konvenciua
state[isolateId]

* mapDispatchToProps ca rega bli 6inuim

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


