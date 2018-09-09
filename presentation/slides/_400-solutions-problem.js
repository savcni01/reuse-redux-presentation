import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `

* of course we can perform some refactoring
* make things more reusable 
* use some function
* still we'll have very custom solution
* an/or a lot of boilerplate
* change Counter component (add reset button)

_TODO:_
 * think about text and li
 
`;

export const markdown = `

#### Issue solved! DRY? 

* Very custom solutions
* Boilerplate code
* Implement for one more Counter?
* Change Counter Component?
* Implement for another Component?

`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


