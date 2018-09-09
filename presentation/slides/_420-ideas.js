import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* slice for mapStateToProps and mapDispatchToProps
* Actions -> ActionCreators
* way to this ideas 

_TODO:_
 * check and fix texts

`;

export const markdown = `
#### Our Ideas 

* Specify subset/slice of store at Container
* Use prefix (isolate identifier) for Actions
* Use same prefix/isolateId for Reducer isolation
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


