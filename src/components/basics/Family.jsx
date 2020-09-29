import React, { cloneElement } from "react";

export default props => {
  return (
    <div>
      {
        React.Children.map(props.children, (element) => {
          return cloneElement(element, props)
        })
      }
    </div>
  )
}