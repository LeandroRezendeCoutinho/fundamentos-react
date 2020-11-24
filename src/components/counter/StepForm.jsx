import React from "react";

export default props => {
  return (
    <div>
      <label htmlFor=""></label>
      <input
        id="quantityInput"
        type="number"
        value={props.quantity}
        onChange={props.setQuantity}
      />
    </div>)
}