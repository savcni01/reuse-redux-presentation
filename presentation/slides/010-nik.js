import React from "react";
import { Heading, Image, List, ListItem, Slide } from "spectacle";

export const notes = `
Korim li Nik Savchenko.
 
Front end developer, po, be-Nilsen.
 
Ba-shanim a-ahronot oni metasek be-ikar im React, Redux ve-JavaScript.

Sah a-kol' oni be thum yoter mi-esrim shana.

Ve kimat shalosh shanim ahronot be Nielsen.

Po anhnu ovdim be shiluv shel' tehnologiot Big Data ve-tehnologiot web maobilim be yoter.

Ve-kamuvan anahnu HIRING, atem yahloim lirot (po-sham) reshima shel mistrot.  

Ok... maspik alay- bou nidkadem le-nose...
`;

const img = require("../../assets/nielsen-logo.png");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <div style={{
      position: "absolute",
      padding: "2rem",
      background: "white",
      bottom: 0,
      right: 0
    }}><Image height={"100px"} src={img.replace("./", "")}/></div>
    <Heading size={5}>Nik Savchenko,</Heading>
    <Heading size={4}>Front End Developer at Nielsen</Heading>
    <List>
      <ListItem>React, Redux</ListItem>
      <ListItem>JavaScript, HTML/CSS</ListItem>
      <ListItem>Node.js</ListItem>
      <ListItem>20+ in Web development</ListItem>
      <ListItem>Married +2</ListItem>
    </List>
  </Slide>
);


