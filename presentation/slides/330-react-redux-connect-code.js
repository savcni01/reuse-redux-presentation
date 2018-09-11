import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Hozrim le Connect, mestaklim eih ze nira be-code

* Connect hu helek shel React-Redux kmo Provider

* Connect meacer TodoItemContainer al basis TodoItem UI Component

* mapStateToProps mekabel at-State ve-ownProps, 
mahzir at-object - she hu be acmo Props le-TodoItem

* be mapDispatchToProps maavirim funkcia destroyTodo ke-Props le-TodoItem. 
destroyTodo mevace dispatch Action: DESTROY_TODO

* Be toh TodoList meshtamshim ba-TodoItemContainer bemkom TodoItem

* Leumat dugma kodemet, roim she lyo maaverim netunim shel Todo ke props
ki TodoItemContainer jodea lekabel nitunim mi State levad 
(rainu ze be mapStateToProps)

* Ve TodoTtem Component ze oto UI Component le lyo shinuj.
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <CodeSlide
    transition={["fade"]}
    // bgColor="secondary"
    lang="js"
    code={require("raw-loader!../code/react-redux")}
    ranges={[
      { loc: [4, 5], title: "React Redux Connect" }, // react-redux
      { loc: [89, 94] }, // container
      { loc: [72, 77] }, // mapStateToProps
      { loc: [79, 87] }, // mapDispatchToProps
      { loc: [96, 105] }, // list
      { loc: [7, 15] } // item
    ]}
  />
);


