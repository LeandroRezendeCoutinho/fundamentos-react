import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";

ReactDOM.render(
  <div id="app">
    <First></First>
    <WithParam
      title="Second component"
      subtitle="Very cool">
    </WithParam>
  </div>,
  document.getElementById('root')
)