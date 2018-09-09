import React from "react";
import { Appear, Heading, Image, Slide } from "spectacle";

const images = {
  school1: require("../../assets/school-1.jpg"),
  school2: require("../../assets/school-2.jpg")
};

export const notes = `
* Od dugma..
* Lefamim anahnu tsrihim leshanot le rak style...
* Aval gam Content shel reusing komponentot. 
* Hine a dugma shel Reuse ka ze:
* Osim reuse ve shininu le rak tseva, aval gam kontent.
* Ve otam dvarim anahnu tsrihim gam be koding.
`;

export default (
  <Slide
    transition={["fade"]}
    bgImage={images.school1.replace("./", "")}
    bgDarken={0.5}
  >
    <Heading
      size={4}
      bgColor="primary"
      textColor="secondary"
    >Content can be different</Heading>
    <Appear fid="1">
      <Image src={images.school2.replace("./", "")}/>
    </Appear>
  </Slide>
);
