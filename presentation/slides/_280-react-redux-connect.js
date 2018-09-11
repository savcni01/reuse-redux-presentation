import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
* Helek sheni shel React-Redux ze connect
* Ve po anahnu yaholim lirot dugma eih connect oved
* Shnei argumentim reshonim shel' connect ze funktsiot: 
* mapStateToProps ve mapDispatchToProps 
* mapStateToProps mekabelet State kmo paramter rishon, ve ownProps ke parametr sheni
* Ve mahzir object im netunim me a-State, she ihie lemazeg (merged) le props shel TodoItem 
* mapDispatchToProps meafsher leavir dispatch action funktsiot kmo props le TodoItem
* ve be-toh TodoItem, be-toh event handlers shel TodoItem osim dispatch le Actions a-elu 
* Kmo she omarti kama paamim funktsiya connect mahzira komponenta hadasha she anahnu korim 

* ConnectedComponent or SmartComponent or ReduxContainer. 
`;

// const img = require("../../assets/react-redux-final-connect.svg");
const img = require("../../assets/react-redux-todo-app.png");

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
