import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
Bo nistakel al code shel' dugma

Meranderim TodoApp Component le-root Container on page

Be toh TodoApp roim shnej Components: TodoFilters ve-TodoList

Component TodoList mekabelet reshima shel Todos ke Prop

Be toh TodoList anahnu Iterate reshima shel Todos ve meranderim kol ahad me Todo Item
 
Kaha nira TodoItem: mekabel me hore (TodoList) nitunim shel Todo ve-merander name, delete button.
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


