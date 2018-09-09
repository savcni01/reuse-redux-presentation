import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* try naive approach 

_TODO:_
* change code
`;

export default (
  <CodeSlide
    transition={["fade"]}
    lang="js"
    code={require("raw-loader!../code/counter")}
    ranges={[
      { loc: [123, 128], title: "Two Counters Example" },
      { loc: [141, 148] } // app
      // { loc: [131, 136] } // reducer
    ]}
  />
);
