import React from "react";
import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/layout/Card";

export default () =>
  <div id="app">
    <h1>React fundamentals</h1>

    <Card title="Card example"></Card>

    <Random min={10} max={20} />
    <Fragment />
    <WithParam
      title="Second component"
      student="Xavier"
      grade={9.4}>
    </WithParam>
    <First></First>
  </div>

