import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Bo nenase laasot et ze

* nathil shuv mi mivne shel' State

* be gadol anahnu le crihim shhum shenuim be-CounterApp
akol' kvar muhan

* ein gam shinuim be Container

* ve be-mapStateToProps

* ve po be mapSiaptchToProps, anahnu ken, yaholim leosif
isolation shel' Action.
Im esh isolateId, as bemcom originalDiapatch, 
meacrim funkcia Dispatch hadasha
she mekabelet action, ose transformation/isolation shel' Action.type
mosifa prefix (clomar isolateId), ve rak as diaptch IsolatedAction

* Kaha anahnu potrim issue im oto Action le shnej reducers
Aval reducer ka rega lyo yodea laavod im prefixed actions

* Az be zman she ossim combinedReducer, anahnu osim 
isolation gam le-Reducers

* isolateReducer ze HOF: mekabelet reducer -> mahzira isolatedReducer
she reduce state al' basis prefixed (isolated) Action
isolatedReducer parse action.type le prefix ve unisolatedAction
bodek she prefix matim le isoalteId she mekablim kmo parameter shel 
isolateReducer funckcia
Ve im hu le matim, pashut mahzerim state, ve le osim shum reducing
Aval im isolateId ve prefix domim, az maricim originalReducer im unisolateAction
`;

export default (
  <CodeSlide
    transition={["fade"]}
    lang="js"
    code={require("raw-loader!../code/counters-isolated")}
    ranges={[
      { loc: [8, 15], title: "Isolated Counters Example" },
      { loc: [142, 155] }, // react app
      { loc: [136, 140] }, // container
      { loc: [101, 111] }, // mapStateToProps
      { loc: [113, 130] }, // mapDispatchToProps
      { loc: [18, 34] }, // reducer
      { loc: [53, 60] }, // combinedReducer
      { loc: [37, 49] } // isolateReducer
    ]}
  />
);
