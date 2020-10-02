import React from "react";
import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudentsList from "./components/repetition/StudentsList";
import ProductTable from "./components/repetition/ProductTable";
import OddEven from "./components/conditional/OddEven";
import UserInfo from "./components/conditional/UserInfo";

import "./App.css";

export default () =>
  <div className="App">
    <h1>React fundamentals</h1>

    <div className="Cards">
      <Card title="Conditional render" color="#804db3">
        <OddEven value={Math.floor(Math.random(10) * 10)}></OddEven>
        <UserInfo user={{ name: 'Israel' }}></UserInfo>
      </Card>

      <Card title="Children component filled by array" color="#C77E54">
        <ProductTable></ProductTable>
      </Card>

      <Card title="Children component filled by array" color="#C7B254">
        <StudentsList></StudentsList>
      </Card>

      <Card title="Children component" color="#5499C7">
        <Family lastName="Stevens">
          <FamilyMember firstName="Pedro" ></FamilyMember>
          <FamilyMember firstName="Ana" ></FamilyMember>
          <FamilyMember firstName="Joan" ></FamilyMember>
        </Family>
      </Card>

      <Card title="Random example" color="#DAF7A6">
        <Random min={10} max={20} />
      </Card>

      <Card title="Fragment example" color="#FFC300">
        <Fragment />
      </Card>

      <Card title="Second example" color="#FF5733">
        <WithParam
          title="Second component"
          student="Xavier"
          grade={9.4}>
        </WithParam>
      </Card>

      <Card title="First example" color="#C70039">
        <First></First>
      </Card>

    </div>
  </div>

