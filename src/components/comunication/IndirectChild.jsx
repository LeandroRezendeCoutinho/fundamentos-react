import React from "react";

export default props => {
  const callback = props.whenClick
  const min = 50
  const max = 70
  const generateAge = () => parseInt(Math.random() * (max - min)) + min
  const generateNerd = () => Math.random() > 0.5
  return (
    <div>
      <div>
        Filho
      </div>
      <button onClick={_ => callback('Joan', generateAge(), generateNerd())}>
        Give information
      </button>
    </div>
  )
}