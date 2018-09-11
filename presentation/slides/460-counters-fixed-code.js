import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Bo nenase liftor bug

* Meshanim kcat mivne shel State (pahot hashuv, rak le nohut)

* Osim Store, aval meshtamshim combinedReducer (ma ze combinedReducer nadun meyuhar iouter)

* UI Component ze oto Component (le lyo shimuj)

* Aval be-toh CounterApp meshtamshim be-shnej Containers shonim
le-TOP ve le-BOTTOM Counters 

* Ele a-Containers, ve nitan lirot she mapping funkciot shonot gam ken
le-TOP ve le-BOTTOM Counters 

* She omer be kol' shlav anahnu meshahpelim code
gam be-mapStateToProps ve-gam be-mapDispatchToProps

* Ahshav bo nestakel le combinedReducer,
gam po nictareh leosif od Reducer, 
ehad le-top, ve-ehad le-bottom

* Ve ele a-Reducers acmam
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


