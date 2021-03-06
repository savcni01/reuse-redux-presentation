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
Nahon u-kidai lehishtamesh ba-Reuse lyo rak le-nirut 
ah gam le-hitnAAgut.

A-shana a-rishona a-gdola menagenet ba-psanter,
A-ktana rokedet Ricudim Salonim

Be shana a-baa... Reuse... SHTEIEN gam minagnot u-gam-rokdot 

Ma she neejmar codem: The same for code.
`;

const nikaPiano = require("../../assets/nika-piano.mp4");
const nikaDance = require("../../assets/nika-dance.mp4");
const vikaPiano = require("../../assets/vika-piano.mp4");
const vikaDance = require("../../assets/vika-dance.mp4");

export default (
  <Slide transition={["fade"]} height={"100%"}>
    <Heading size={5}>Behavior</Heading>
    <Layout>
      <Fill>
        <Appear fid="1">
          <video height="250px" autoPlay loop muted>
            <source src={nikaPiano} type="video/mp4" />
          </video>
        </Appear>
      </Fill>
      <Fill>
        <Appear fid="2">
          <video height="250px" autoPlay loop muted>
            <source src={vikaDance} type="video/mp4" />
          </video>
        </Appear>
      </Fill>
    </Layout>
    <Layout>
      <Fill>
        <Appear fid="3">
          <video height="250px" autoPlay loop muted>
            <source src={nikaDance} type="video/mp4" />
          </video>
        </Appear>
      </Fill>
      <Fill>
        <Appear fid="4">
          <video height="250px" autoPlay loop muted>
            <source src={vikaPiano} type="video/mp4" />
          </video>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);
