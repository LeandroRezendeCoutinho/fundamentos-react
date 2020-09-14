import React from "react";
import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";
import Fragment from "./components/basics/Fragment";

export default () =>
  <div id="app">
    <Fragment />
    <WithParam
      title="Second component"
      student="Xavier"
      grade={9.4}>
    </WithParam>
    <First></First>
  </div>
