import React from 'react';

const Total = ({ parts }) => {
  let sum = 0;
  parts.map(part => {
    sum += part.exercises;
  })

  return (
    <h4>
      total of {sum} exercises
    </h4>
  )
}

export default Total;