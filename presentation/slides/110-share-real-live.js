import React from "react";
import { Slide, Markdown } from "spectacle";

// Ulay mishu sam lev be shkafim a-rishomin ciyanti nasui+2.

export const notes = `
Kdei lehavi nose shel' Reuse le-barur be-ioter, ismah laarot kama dugmaot me a-haim amitim (lyo koding).

Esh li shei banot... bnot 7 ve-10 - ve-ani lomadeti tov meod eih lehishtames ba-Reuse
`;

export const markdown = `
## Reusability in Real Life
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


