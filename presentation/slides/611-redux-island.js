import React from "react";
import { Heading, Slide } from "spectacle";

export const notes = `
Oops... one mor React-Redux-Isdlan, pahut hayu asorot shel' variaciot

Baharnu shnaim, ve lyo yandanu ezo me hem ioter tov, atem eholim livhor
`;

// const bg = require("../../assets/redux-island.jpg");
const bg = require("../../assets/island-1.jpg");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide
    transition={["fade"]}
    bgImage={bg.replace("./", "")}
    bgDarken={0}
  >
    <Heading
      size={2}
      style={{
        color: "#fff",
        "text-shadow": "3px 2px #000",
        transform: "translate3d(0px, 0px, 0px)  scale(1) rotate(-17deg)"
      }}
    >React Redux Island</Heading>
  </Slide>
);
