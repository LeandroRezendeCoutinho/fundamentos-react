import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

export default () => {
  const [name, setName] = useState('?')
  const [age, setAge] = useState(0)
  const [nerd, setNerd] = useState(false)

  function giveInformation(name, age, nerd) {
    setName(name)
    setAge(age)
    setNerd(nerd)
  }

  return (
    <div>
      <div>
        <span>{name}</span>
        <span>{age}</span>
        <span>{nerd ? 'true' : 'false'}</span>
      </div>
      <IndirectChild whenClick={giveInformation}></IndirectChild>
    </div>
  )
}