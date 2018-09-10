import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Kaha nira eicirat Store be-toh Code

* Maaverim le-createStore Main Reducer (klomar kombinatsia shel' Reduce funkciyot) ve InitialState
ve mekablim hazara Store

* createStore ze helek (method) shel' Redux
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <CodeSlide
    transition={["fade"]}
    lang="js"
    code={require("raw-loader!../code/react-redux")}
    ranges={[
      { loc: [60, 62], title: "Redux Store" }, // store
      { loc: [3, 4] } // import redux
    ]}
  />
);
