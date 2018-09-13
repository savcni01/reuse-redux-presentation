import React from "react";
import { Heading, Slide } from "spectacle";
import Terminal from "spectacle-terminal";

export const notes = `
Ninase levace otam dvarim mi dugma ahrona be ezrat React Redux Island
npm install - dei pashut
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={5}>React-Redux-Island in use</Heading>
    <div style={{color: "black"}}>
      <Terminal title="1. npm /reuse-redux" color="black" output={[
        "npm install --save react-redux-island",
        <div key={12} style={{ color: "#33B969" }}>
          <div>+ react-redux-island@0.26.0</div>
          <div>install 1 package in 8.207s</div>
        </div>]}
      />
    </div>
  </Slide>
);
