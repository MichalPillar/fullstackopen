import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundementals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      }
    ]
  };


  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
