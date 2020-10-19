import React from "react";

class Counter extends React.Component {

  state = {
    number: 0
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>Initial value: {this.props.initialValue}</p>
      </div>
    )
  }
}

export default Counter