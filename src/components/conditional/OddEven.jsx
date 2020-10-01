import React from "react";

export default props => {
  const isOdd = props.value % 2 === 0

  return (
    <div>
      {
        isOdd ?
          <span>Odd</span> :
          <span>Even</span>
      }
    </div>
  )
}