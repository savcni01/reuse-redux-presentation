import React from "react";
import { Heading, Layout, Table, TableHeader, TableRow, TableHeaderItem, TableBody, TableItem, Slide } from "spectacle";

export const notes = `
Lefnej sh anahnu naavor le kod

Bo nire od paam ba omek evdel ben UI Component ve Redux Container
`;


// noinspection JSUnusedGlobalSymbols
export default (
  <Slide transition={["fade"]}>
    <Heading size={5}>UI Component vs Container</Heading>
    <Layout>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderItem />
            <TableHeaderItem>UI Components</TableHeaderItem>
            <TableHeaderItem>Container</TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableItem italic>Purpose</TableItem>
            <TableItem>How things look (markup, styles)</TableItem>
            <TableItem>How things work (data fetching, state updates)</TableItem>
          </TableRow>
          <TableRow>
            <TableItem italic>Aware of Redux</TableItem>
            <TableItem>No</TableItem>
            <TableItem>Yes</TableItem>
          </TableRow>
          <TableRow>
            <TableItem italic>To read data</TableItem>
            <TableItem>Read data from props</TableItem>
            <TableItem>Subscribe to Redux state</TableItem>
          </TableRow>
          <TableRow>
            <TableItem italic>To change data</TableItem>
            <TableItem>Invoke callbacks from props</TableItem>
            <TableItem>Dispatch Redux actions</TableItem>
          </TableRow>
          <TableRow>
            <TableItem italic>Are written</TableItem>
            <TableItem>By hand</TableItem>
            <TableItem>Usually generated by React Redux</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Layout>
  </Slide>
);
