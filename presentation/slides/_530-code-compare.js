import React from "react";
import { Heading, Layout, Fill, Image, Slide } from "spectacle";

export const notes = `
* Po efshar lirot code listing shel shlosha petronot: 

* Rishon - naive copy-past approach

* Sheni - girsat isolate, custom hand made solution

* Shlishi - girsa im sefriya React-Redux-Island

* Kmo she atem roim girsa im Island ahi kcara.
`;

const img1 = require("../../assets/counters-naive.png");
const img2 = require("../../assets/counters-isolated-1.png");
const img3 = require("../../assets/counters-isolated-2.png");
const img4 = require("../../assets/counters-island.png");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={5}>Code diff</Heading>
    <Layout>
      <Fill>
        <Image
          width={"150px"}
          src={img1.replace("./", "")}
        />
      </Fill>
      <Fill>
        <Image
          width={"140px"}
          // height={"560px"}
          src={img2.replace("./", "")}
        />
      </Fill>
      <Fill>
        <Image
          width={"150px"}
          // height={"560px"}
          src={img4.replace("./", "")}
        />
      </Fill>
    </Layout>
  </Slide>
);
