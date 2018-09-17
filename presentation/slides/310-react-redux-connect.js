import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
Helek sheni shel React-Redux hu Connect

Amarnu she Connect ze funkcia 
ve-sheni argumentim reshonim shel' Connect 
ze gam funkciot:

funkcia mapStateToProps mekabelet at-State
Ve mahzira at-a-Object im netunim me a-State
she IUYVRU le-TodoItem ke Props

funkcia mapDispatchToProps meafsheret leavir 
at-dispatch-Action funkciot ke Props le-TodoItem
ve be-toh Event Handlers, TodoItem yahol levace dispatch le-Action

Ve kah funkcia Connect mahzira at-Compmponent hadash:
ConnectedComponent or SmartComponent or ReduxContainer

Leumat a Component pashut - she anahnu korim Presentional Compoentn ot UI Component or DumbComponent)
`;

// const img = require("../../assets/react-redux-final-connect.svg");
const img = require("../../assets/rr.004.png");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={5}>React-Redux Connect</Heading>
    <Image
      bgColor={"white"}
      height={"560px"}
      src={img.replace("./", "")}
    />
  </Slide>
);
