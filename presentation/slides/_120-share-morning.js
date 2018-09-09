import React from "react";
import { Appear, Heading, Image, Slide } from "spectacle";

export const notes = `
* Nagid ata melamed ha bat a-rishona eih laasot itargenut boker.
* Ve akol oved mitsuan ad she bat a ktanta gam mathila laasot at ze.
* Ve hen tsrihot laasot ze be oto zman, hen mathilim ledaber, lesak
* Hen mathilim letonot mi olehet rishona... ve hulei.
* Ve ze le pashut, ze mamsh issue.
* Az Ata ose Reuse... ve op: issue solved! 
`;

const images = {
  morning1: require("../../assets/morning-1.jpg"),
  morning2: require("../../assets/morning-2.jpg")
};

export default (
  <Slide
    transition={["fade"]}
    bgImage={images.morning1.replace("./", "")}
    bgDarken={0.5}
  >
    <Heading
      size={4}
      bgColor="primary"
      textColor="secondary"
    >Reuse help solve issues</Heading>
    <Appear fid="1">
      <Image src={images.morning2.replace("./", "")}/>
    </Appear>
  </Slide>
);
