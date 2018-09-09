import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Be kode ze nire kaha
* Provider, kmo she amarnu, ze helek me sifriya react-redux
* Provider mekabel store ke props ve mosiv Store be kontext shel TodoApp
* Ve, kmo she amarnu osse Store zamin le connect to komponentim React.
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <CodeSlide
    transition={["fade"]}
    // bgColor="secondary"
    lang="js"
    code={require("raw-loader!../code/react-redux")}
    ranges={[
      { loc: [4, 5], title: "React-Redux Provider" }, // react-redux
      { loc: [64, 70] } // render: app + provider
    ]}
  />
);


