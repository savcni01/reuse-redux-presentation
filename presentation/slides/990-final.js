import React from "react";
import { Slide, Heading, Image } from "spectacle";

export const notes = `
Toda raba.

Link le page katan im reshimat linkim:

Le React-Redux-Island Repository

Le a-maceget

Le Talk shel Vlad al Microfrontends she dibarti

Ve le vdeo aharim shel The Big Web Theory

Sheelot?
`;

const img = require("../../assets/qr.png");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={2}>Thank you</Heading>
    <Heading size={4}>
      All links at:&nbsp;&nbsp;
      <a
        href={"https://savcni01.github.io/"}
        style={{
          color: "white"
        }}
      >
        https://savcni01.github.io/
      </a>
    </Heading>
    <Image
      bgColor={"white"}
      // width={"760px"}
      height={"280px"}
      src={img.replace("./", "")}
    />
    <Heading size={4} margin={"2em auto 0"}>Questions?</Heading>
  </Slide>
);


