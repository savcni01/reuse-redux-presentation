import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Po anahnu roim Basic Redux Flow diagram
* Anahnu roim Store she mahzik/shomer State
* Al basis State meranderim View, UI shel' app
* Kol' User Event mathil/kore/sholeah Action (omrim dispatch Action) to Store
* Store react on Action
* Ve osse reduce shel State: clomar al basis shel' action ve state a-nohehi hozer State a-hadash
* View merundar shuve' al basis state a-hadash

_TODO:_
* change image
`;

const img = require("../../assets/redux-flow.gif");

export const markdown = `
#### Basic Redux Flow
![Redux Flow](${img.replace("./", "")})
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);
