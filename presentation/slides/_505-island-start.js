import React from "react";
import { Heading, Slide } from "spectacle";
import Terminal from "spectacle-terminal";

export const notes = `
* Bo nire eih anahnu yaholim laasot otam dvarim she osinu
be dugma ahrona Isolate Counters im React Redux Island 
`;

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>React Redux Island in use</Heading>
    <Terminal title="1. npm /reuse-redux" output={[
      "npm install --save react-redux-island",
      <div style={{ color: "#33B969"}}>
        <div>+ react-redux-island@0.26.0</div>
        <div>install 1 package in 8.207s</div>
      </div>]}
    />
  </Slide>
);
