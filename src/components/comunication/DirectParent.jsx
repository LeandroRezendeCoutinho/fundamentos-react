import React from "react";
import DirectChild from "./DirectChild";

export default () => {
  return (
    <div>
      <DirectChild name="Arthur" age={20} bool={true}></DirectChild>
    </div>
  )
}