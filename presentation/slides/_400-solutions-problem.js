import React from "react";
import { Slide, Markdown } from "spectacle";

export const notes = `
* Barur 6e kcat examti im 6ehpul' 6el' code

* Ef6ar laasot refactoring, 
leoci helec me a code le funkciot nefradot, 
laasot code yoter pashut

* Aval ma le naase, adain ihie arbe shel Boilerplate Code

* Ve pitaron ihie le gamish, nagid im anahnie crihim leosif od Counter
or leshanot counter (le dugma increment to 6time, or leosif reset button)

* Gam le kol' kah ef6ar lehistame6 ma 6e katavnu be6vil reuse component aher. 
Crihim lehtov kod dome shuv ve shuv.
`;

export const markdown = `
#### Issue solved! DRY? 

* Very custom solutions
* Boilerplate code
* Change Counter Component?
* Implement for one more Counter?
* Implement for another Component?
`;

export default (
  <Slide transition={["fade"]}>
    <Markdown>{markdown}</Markdown>
  </Slide>
);


