import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Bo nistakel al code shel' react app.
* Lakahti ehad me a dugmaot mufersaot: applikatsiya TODO
* Mathilim mi rendur shel komponenta TodoApp
* Be toh TodoApp  esh komponentim Filters ve List
* Komponenta List mekabelet netunim prop - list of Todos she anahnu shomrim be TodoApp Internal State
* Be toh komponenta List anahnu iterate list ve meranderi kol me Todos Items 
* Ve ze eih Todo Item nire (od paam hu mekabel me hOre (klomar TodoList), ke props netunim shel Todo.
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <CodeSlide
    transition={["fade"]}
    // bgColor="secondary"
    lang="js"
    code={require("raw-loader!../code/react-redux")}
    ranges={[
      { loc: [52, 56], title: "React Example App" }, // render
      { loc: [40, 49] }, // app
      { loc: [21, 28] }, // list
      { loc: [7, 15] } // item
    ]}
  />
);


