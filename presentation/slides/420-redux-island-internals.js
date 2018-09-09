import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
*
 _TODO:_
 * fix list of items
`;

export const markdown = `

#### Redux Island Internals

* islandConnect HOC
* custom mapStateToProps
* custom mapDispatchToProps
* isolate/unisolate Action
* isolate/unisolate Reducer
* thank with isolatedDispatch
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


