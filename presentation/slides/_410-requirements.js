import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `

* reusable - shared
* same approach for:
* simple - one level Container and 
* complex - have SubContainers inside
* API: convention over configuration 
* Redux Stack: Thunks/Saga/Logic, Immutable.js, etc.

_TODO:_
 *  check/change text
 
`;

export const markdown = `

#### Solution Requirements

* No/minor changes at Reusable Container creation process
* No/minimal effort for use Reusable Containers
* Use with simple and complex Containers
* Simple, friendly API
* Redux stack independent  
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


