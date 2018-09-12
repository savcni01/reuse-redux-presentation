import React from "react";
import { Slide, Heading } from "spectacle";
import { CategoriesApp } from "../live/segmentCategories";

export const notes = `
* bodkim she akol oved
`;

export default (
  <Slide transition={["fade"]}>
    <Heading size={4}>Another examplse</Heading>
    <CategoriesApp/>
  </Slide>
);
