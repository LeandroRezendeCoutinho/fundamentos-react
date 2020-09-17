import React from "react";
import FamilyMember from "./FamilyMember";

export default props => {
  const { lastName } = props
  return (
    <div>
      <FamilyMember firstName="Pedro" lastName={lastName}></FamilyMember>
      <FamilyMember firstName="Ana" lastName={lastName}></FamilyMember>
      <FamilyMember firstName="Joan" lastName={lastName}></FamilyMember>
    </div>
  )
}