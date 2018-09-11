import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
* Lets do it

* Nnathil shuv mi mivne shel' State

* be gadol anahnu le crihim shhum shenuim be-CounterApp
akol' kvar muhan

* Ein gam shinuim be Container

* Ve be-mapStateToProps

* Ve po be mapDispatchToProps, anahnu ken, yaholim leosif isolation shel' Action.
Be mejda ve-kibalnu isolateId az meacrim funkcia Dispatch a-hadasha bemcom originalDispatch

* A funkcia hadasha mekabelet Action, u-mmevaca transformation (isolation) shel' Action.type
mosifa prefix(isolateId), ve rak as dispatch IsolatedAction

* Kaha potrim at-a-nose im oto Action le shnej reducers
Aval Reducer bentim lyo yodea laavod im prefixed/isolated actions.

* Be maalah etcirat combinedReducer, bou naase isolation gam le-Reducers

* isolateReducer ze HOF: hi mekabelet original reducer, ve-mahzira isolatedReducer

* isolatedReducer - yodea reduce State lefi prefixed (isolated) Action

isolatedReducer parse action.type le-prefix ve-unisolatedAction type
bodek she prefix matim le isoalteId shel reducer (kebalnu oto ke parameter)

Ve im hu lyo matim, pashut mahzerim state, ve le osim shum reducing

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
