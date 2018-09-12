import React from "react";
import { Appear, Heading, Image, Slide } from "spectacle";

export const notes = `
* Itargenut shel a-boker shel bat a-gdolya.
Akol' oved kmo shaon shvecari.

* Ad le rega sha ahota a-ktana baa.
Vikuhim, rivim, ibud shel a-zman.

* Eih nitan liftor?.. Reuse - bahaya niftera.
`;

const images = {
  morning1: require("../../assets/morning-1.jpg"),
  morning2: require("../../assets/morning-2.jpg")
};

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide
    transition={["fade"]}
    bgImage={images.morning1.replace("./", "")}
    bgDarken={0.3}
  >
    <Heading
      size={3}
      bgColor="background"
    >Reuse makes life easier</Heading>
    <Appear fid="1">
      <Image
        src={images.morning2.replace("./", "")}
      />
    </Appear>
  </Slide>
);
