import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `

QA

`;

export const markdown = `
## Thank you
#### Questions...
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


