import React from "react";
import CodeSlide from "spectacle-code-slide";

export const notes = `
Import shel islandConnect, isolatereducer ve-makeReducer

Mevne shel State

Meshtamshim konstantot le-Actions, ve ActionCreators

Mevacim reducer im actionMap bemcom Swtirch-Case (meshtamshim makeReducer me React-Redux-Island)

Mevacim CombinedReducer im isolateReducer me React-Redux-Island
Notnim prefixes (isolateID) TOP ve-BOTTOM

Be CounterApp meshtamshim CounterContainera im isolateId ve funkciot Selector

Meshtamshim islandedConnect me React-Redux-Iland bemcom connect me React-Redux le ecirat Container

mapStateToProps kvar mekabelet slicedState bemcom state (toda le islandedConnect)

mapDispatchToProps kvar mekabelet isolatedDisptach bemcom dispatch
isolatedDispatch iodae leosif isolateId ke prefix le Action.type (toda le islandedConnect)

Le doresh shum shenuj nosaff me shum macom aher: le ba-reducer, le-baUI Component
`;

export default (
  <CodeSlide
    transition={["fade"]}
    lang="js"
    code={require("raw-loader!../code/counters")}
    ranges={[
      { loc: [5, 10], title: "Island Counters" },
      { loc: [50, 58] }, // state
      { loc: [60, 69] }, // actions
      { loc: [71, 82] }, // reducer
      { loc: [84, 92] }, // combined reducer
      { loc: [113, 124] }, // app
      { loc: [107, 111] }, // container
      { loc: [97, 100] }, // mapStateToProps
      { loc: [101, 105] } // mapDispatchToProps
    ]}
  />
);


