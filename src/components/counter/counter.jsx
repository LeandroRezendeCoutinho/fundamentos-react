import React, { Component } from "react";
import "./Counter.css"
import Display from "./display";
import Buttons from "./buttons";
import StepForm from "./StepForm";

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
        <Display number={this.state.number}></Display>
        <StepForm quantity={this.state.quantity} setQuantity={this.setQuantity}></StepForm>
        <Buttons setInc={this.inc} setDec={this.dec}></Buttons>
      </div>
    )
  }
}

export default Counter