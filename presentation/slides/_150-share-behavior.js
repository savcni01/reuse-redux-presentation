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
* Lefamim anahanu tsrihim laasot Reuse lyo rak 
* Le Nirut (klomar UI) shel komponenta
* O le kontent shel komponenta
* Aval gam hitnagut (behaviour)
* Bo nagid a-gdola olehet le konservatarion, menagenet piano
* A ktana be ota shana olehet le Recud Salonim
* Ve be od shana, osim reuse... 
* Ve bli eoter me dai koah nosefet me a-orim:
* Shhnehen gam minagnim piano be konservatorion,
* Ve gam rokdim Rikudim Salonim.
* Be koding anahnu gam tsrihim reuse behaviour ve/o business logic.

_TODO:_
* change img to video
`;

const images = {
  nikaPiano: require("../../assets/nika-piano.png"),
  vikaPiano: require("../../assets/nika-dance.jpg"),
  nikaDance: require("../../assets/vika-piano.png"),
  vikaDance: require("../../assets/vika-dance.jpg")
};

export default (
  <Slide transition={["fade"]}>
    <Heading size={5}>Behavior Reuse</Heading>
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
