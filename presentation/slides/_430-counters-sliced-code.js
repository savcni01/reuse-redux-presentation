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
    code={require("raw-loader!../code/counter")}
    ranges={[
      { loc: [223, 230], title: "Sliced Counters Example" },
      { loc: [40, 44] }, // react app
      { loc: [48, 49] }, // create store
      { loc: [53, 57] }, // provider
      { loc: [77, 81] }, // container
      { loc: [14, 22] }, // todo item
      { loc: [60, 65] }, // mapStateToProps
      { loc: [67, 75] }, // mapDispatchToProps
      { loc: [84, 92] }, // use container
      { loc: [77, 81] } // container
    ]}
  />
);

