import React from "react";
import { Appear, Heading, Image, Slide } from "spectacle";

export const notes = `
* Od dugma.. Meshanim le rak style, ceva or godel...

* Ah gam tohen shel Reusing Components. 

* Ve shuv ze oved oto davar be tihnut (coding).
`;

const images = {
  school1: require("../../assets/school-1.jpg"),
  school2: require("../../assets/school-2.jpg")
};

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide
    transition={["fade"]}
    bgImage={images.school1.replace("./", "")}
    bgDarken={0.2}
    height={"100% !important"}
  >
    <Heading
      size={3}
      bgColor="background"
    >Content can be different</Heading>
    <Appear fid="1">
      <Image src={images.school2.replace("./", "")}/>
    </Appear>
  </Slide>
);
