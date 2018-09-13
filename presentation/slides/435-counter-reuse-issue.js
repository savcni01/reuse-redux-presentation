import React from "react";
import { Heading, Image, Slide } from "spectacle";

export const notes = `
Kama paimim dibarti al migbalot shel Redux. Bo nire al a-dugma shel Counter.

Nagid esh lanu shnej aplicaciot A ve-B.
Ve esh coreh lehistamesh CounterContainer ba-shenhem
Ve be-aplikakacia A afliu paamaim.

Mivne shel a Store shone bein app le app. counter, myCounter, ve oneMoreCounter

Le yaholim locahat oto Container im ota funkcia mapStateToProps, biglal she befnim meshtamshm state.container

She matim le shimus rishon be-Store A, aval le matim le-shimush sheni, ve-lyo matim le-store B.

Im medabrim al-Action, az afuh, oto Action,  maric Reducer gam le-Counter gam le-OneMoreCounter 
`;

const img = require("../../assets/rr.005.png");

// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={5}>Container Reuse Issues</Heading>
    <Image
      bgColor={"white"}
      // width={"760px"}
      height={"560px"}
      src={img.replace("./", "")}
    />
  </Slide>
);
