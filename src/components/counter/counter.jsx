import React, { Component } from "react";
import "./Counter.css"

class Counter extends Component {
  state = {
    number: this.props.initialValue || 0,
    quantity: this.props.quantity || 5,
  }

  inc = () => {
    this.setState({
      number: this.state.number + this.state.quantity
    })
  }

  dec = () => {
    this.setState({
      number: this.state.number - this.state.quantity
    })
  }

  // pass as event and convert value to number
  setQuantity = (event) => {
    this.setState({
      quantity: +event.target.value,
    })
  }

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <h3>{this.state.number}</h3>
        <div>
          <label htmlFor=""></label>
          <input
            id="quantityInput"
            type="number"
            value={this.state.quantity}
            onChange={this.setQuantity}
          />
        </div>
        <button onClick={this.dec}> - </button>
        <button onClick={this.inc}> + </button>
      </div>
    )
  }
}

export default Counter