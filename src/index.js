import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";
import Fragment from "./components/basics/Fragment";

ReactDOM.render(
  <div id="app">
    <First></First>
    <WithParam
      title="Second component"
      student="Xavier"
      grade={9.4}>
    </WithParam>
    <Fragment />
  </div>,
  document.getElementById('root')
)