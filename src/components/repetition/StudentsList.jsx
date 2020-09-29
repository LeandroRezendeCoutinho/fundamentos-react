import React from "react";
import students from "../data/students";

export default props => {
  const students_list = students.map(student => {
    return (
      <li key={student.id}>
        {student.id}) {student.name} -> {student.grade}
      </li>
    )
  })

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {students_list}
      </ul>
    </div >
  )
}