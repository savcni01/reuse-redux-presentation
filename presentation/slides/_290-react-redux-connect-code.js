import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Shuv mestaklim eih ze nire be-code
* Connect ze helek shel react-redux kmo Provider
* Connect meatser TodoItemContainer al basis TodoItem Presentational Component
* mapStateToProps al basis State and ownProps mahzir object - props for TodoItem
* mapDispatchToProps maavir ke props le TodoItem funkcia destroyTodo (she ze dispatch Action: DESTROY_TODO)
* Be toh TodoLis meshtamshim TodoItemContainer bemkom TodoItem
* Ve leumat dugma kodemet, roim she le maaverim netunim shel todo ke props
* ... ki TodoItemContainer yodea lekable todo nitunim mi State levad (rainu ze be mapStateToProps)
* Ve Todo item ze oto Perceptional TodoItem - ein shinuim.
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


