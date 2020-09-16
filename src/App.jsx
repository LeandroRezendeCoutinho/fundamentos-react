import React from "react";
import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/layout/Card";
import "./App.css";

export default () =>
  <div className="App">
    <h1>React fundamentals</h1>

    <div className="Cards">
      <Card title="Random example">
        <Random min={10} max={20} />
      </Card>

      <Card title="Fragment example">
        <Fragment />
      </Card>

      <Card title="Second example">
        <WithParam
          title="Second component"
          student="Xavier"
          grade={9.4}>
        </WithParam>
      </Card>

      <Card title="First example">
        <First></First>
      </Card>

    </div>
  </div>

