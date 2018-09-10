import React from "react";
import {
  Appear,
  Fill,
  Heading,
  Layout,
  Image,
  Slide
} from "spectacle";

export const notes = `
* Nahon u-kidai lehishtamesh be-Reuse lyo rak nirut or content (klomar UI)
ah gam le hitnaagut (behaviour).

* A-shana a-rishona a-gdola menagenet ba-psanter
A-ktana rokedet Ricudim Salonim

* Be shana a-baa 

* Ve be od shana, osim reuse... 
* Ve bli eoter me dai koah nosefet me a-orim:
* Shhnehen gam minagnim piano be konservatorion,
* Ve gam rokdim Rikudim Salonim.
* Be koding anahnu gam tsrihim reuse behaviour ve/o business logic.
`;

const images = {
  nikaPiano: require("../../assets/nika-piano.png"),
  vikaPiano: require("../../assets/nika-dance.jpg"),
  nikaDance: require("../../assets/vika-piano.png"),
  vikaDance: require("../../assets/vika-dance.jpg")
};

export default (
  <Slide transition={["fade"]} height={"100%"}>
    <Heading size={2}>Behavior Reuse</Heading>
    <Layout>
      <Fill>
        <Appear fid="1">
          <Image src={images.nikaPiano.replace("./", "")}/>
        </Appear>
      </Fill>
      <Fill>
        <Appear fid="2">
          <Image src={images.vikaDance.replace("./", "")}/>
        </Appear>
      </Fill>
      <Fill>
        <Appear fid="3">
          <Image src={images.nikaDance.replace("./", "")}/>
        </Appear>
      </Fill>
      <Fill>
        <Appear fid="4">
          <Image src={images.vikaPiano.replace("./", "")}/>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);
