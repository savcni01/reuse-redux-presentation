import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Kaha nira eitsirat Storebe toh code
* Maaverim le createStore main Reducer (klomar combinatsiya shel' reduce functciyot) ve IntitalState
* ...ve ke totsaa shel createSoter mekablim hazara Store
* createStore ze helec (method) shel Redux lib
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


