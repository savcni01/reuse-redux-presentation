import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `

`;

export default (
  <CodeSlide
    transition={["fade"]}
    lang="js"
    code={require("raw-loader!../code/counters")}
    ranges={[
      { loc: [5, 10], title: "Island Counters" },
      { loc: [50, 58] }, // state
      { loc: [60, 69] }, // actions
      { loc: [71, 82] }, // reducer
      { loc: [84, 92] }, // combined reducer
      { loc: [113, 124] }, // app
      { loc: [107, 111] }, // container
      { loc: [97, 100] }, // mapStateToProps
      { loc: [101, 105] } // mapDispatchToProps
    ]}
  />
);


