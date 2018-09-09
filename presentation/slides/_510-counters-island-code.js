import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
_TODO:_
* change code
`;

export default (
  <CodeSlide
    transition={["fade"]}
    lang="js"
    code={require("raw-loader!../code/counters")}
    ranges={[
      { loc: [5, 10], title: "Island Counters" },
      { loc: [58, 65] }, // state
      { loc: [68, 79] }, // actions
      { loc: [79, 90] }, // reducer
      { loc: [92, 99] }, // combined reducer
      { loc: [14, 22] }, // todo item
      { loc: [60, 65] }, // mapStateToProps
      { loc: [67, 75] }, // mapDispatchToProps
      { loc: [84, 92] }, // use container
      { loc: [77, 81] } // container
    ]}
  />
);


