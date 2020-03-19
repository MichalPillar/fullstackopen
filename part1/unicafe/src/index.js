import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => (
  // Exercise 1.8 - Statistics already had its own component
  all === 0 ? (
    <div>No feedback given</div>
  ) : (
      <div>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {all}</div>
        <div>average {average}</div>
        <div>positive {positive ? positive : 0} %</div>
      </div>
    )
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={all / 3} positive={good / all * 100} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
