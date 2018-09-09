import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Ahshav bo nenase leosif od CounterContainer le applikacia.
Nenase naive (straight forward) approach

* Mathilim mi mivne shel State. Mosifim oneMoreCount.

* Meacrim Store

* Ve pa6ut mosifim le CounterApp one more Counter

* k6e-ze oto CounterContainer she rainu codem, bli shum shenuim.
`;

export default (
  <CodeSlide
    transition={["fade"]}
    lang="js"
    code={require("raw-loader!../code/counters-two")}
    ranges={[
      { loc: [7, 12], title: "Two Counters Example" },
      { loc: [33, 34] }, // create store
      // { loc: [54, 63] }, // component
      { loc: [92, 99] }, // app
      { loc: [86, 90] }, // container
      { loc: [71, 73] }, // mapStateToProps
      { loc: [76, 82] }, // mapDispatchToProps
      { loc: [15, 26] } // reducer
    ]}
  />
);
