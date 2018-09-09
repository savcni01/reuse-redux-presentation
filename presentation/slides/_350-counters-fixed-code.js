import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Bo nenase liftor ze bug

* Meshanim kcat mivne shel State (ze lyo kriti, rak 6e ihie yoter noah)

* Osim Store, aval meshtamshim combinedReducer (nire youter meuhar ma ze)

* Presentational Component ze oto component, ein shum shenuim

* Aval at App Components meshtamshim 6nej Containers shonim
le-TOP ve le-BOTTOM counters 

* Ze Containers, ve efshar lirot she mapping funkciot gam sonim
le-TOP ve le-BOTTOM counters 

* Clomar be col shlav anahnu pashut meshahpelim code
game be mapStateToProps esh le Top ve le Bottom

* Oto davar le mapDispatchToProps

* Ve ahshav bo nestakel le combinedReducer,
roim she gam por anahnu crihim shnei reducereim, 
ehad le-top,
ve ehad le-bottom,
kaha hem nirim
`;

export default (
  <CodeSlide
    transition={["fade"]}
    lang="js"
    code={require("raw-loader!../code/counters-two-fixed")}
    ranges={[
      { loc: [8, 12], title: "Fixed Counters Example" },
      { loc: [56, 57] }, // create store
      { loc: [80, 89] }, // component
      { loc: [132, 139] }, // app,
      { loc: [121, 130] }, // containers
      { loc: [94, 101] }, // mapStateToProps
      { loc: [103, 110] }, // mapDispatchToPropsTop
      { loc: [112, 119] }, // mapDispatchToPropsBottom
      { loc: [50, 53] }, // reducer
      { loc: [14, 25] } // TOP reducer
    ]}
  />
);


