import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    {/* <Total parts={course.parts} /> */}
  </div>
)

export default Course;
