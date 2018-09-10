import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* test design
`;

export const markdown = `
# Redux Island
## React Redux Island
### React Island
#### Island React Redux
##### React Island Redux
###### Island Redux
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


