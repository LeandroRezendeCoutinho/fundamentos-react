import React, { useState } from "react";
import { generateNumbers } from "./mega";
import "./Mega.css";

export default props => {
  const [quantity, setQuantity] = useState(props.quantity || 6)
  const initialNumbers = Array(quantity).fill(0)
  const [numbers, setNumbers] = useState(initialNumbers)
  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numbers.join(' ')}</h3>
      <div>
        <label>quantity of numbers</label>
        <input
          min="6"
          max="12"
          type="number"
          value={quantity}
          onChange={e => {
            setQuantity(+e.target.value)
            setNumbers(generateNumbers(+e.target.value))
          }
          } />
      </div>
      <button onClick={_ => setNumbers(generateNumbers(quantity))}>
        Generate
      </button>
    </div>
  )
}
// parado em 7 minutos