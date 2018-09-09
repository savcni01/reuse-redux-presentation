import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `

* very custom
* not reusable solution

_TODO:_
* change code

`;

export default (
  <CodeSlide
    transition={["fade"]}
    lang="js"
    code={require("raw-loader!../code/counter")}
    ranges={[
      { loc: [153, 157], title: "Fixed Counters Example" },
      { loc: [49, 50] }, // create store
      { loc: [114, 119] }, // app
      { loc: [111, 112] }, // container
      { loc: [96, 103] }, // mapStateToProps mapDispatchToProps
      { loc: [76, 91] }, // component
      { loc: [32, 41] } // reducer
    ]}
  />
);


