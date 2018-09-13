import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
Nistakel be-kod: Provider, kmo she amarnu, ze helek me sifriat React-Redux

Provider mekabel Store ke-Props ve-mosif Store be-Kontekst shel TodoApp

U-Store mathil lihot zamin le-Connect le-React-Components shel TodoApp.
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


