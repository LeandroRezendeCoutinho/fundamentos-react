import React from "react";
import { useState } from "react";
import "./Input.css"

export default props => {
  const [value, setValue] = useState('initial')

  function onChange(event) {
    setValue(event.target.value)
  }

  return (
    <div className="Input">
      <div>
        <p>Controlled updatable component</p>
        <h2>{value}</h2>
        <input value={value} onChange={onChange} />
      </div>
      <div>
        <p>Controlled readOnly component</p>
        <input value={value} readOnly />
      </div>
      <div>
        <p>Uncontrolled component</p>
        <input value={undefined} />
      </div>
    </div>
  )
}