import React from "react";

export default function WithParam(props) {
  const status = props.grade >= 7 ? 'Approved' : 'Recovering'

  return (
    <div>
      <h2>{props.title}</h2>
      <p>Student
        <strong> {props.student}</strong>  has grade
        <strong> {props.grade}</strong> and is
        <strong> {status}</strong>!</p>
    </div>
  )
}