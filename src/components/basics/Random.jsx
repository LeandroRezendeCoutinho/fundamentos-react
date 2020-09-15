import React from "react";

export default props => {
  const { min, max } = props
  const num = Math.floor((Math.random() * (max - min)) + min)
  return (
    < div >
      <p>Number: {num}</p>
    </div >
  )
}