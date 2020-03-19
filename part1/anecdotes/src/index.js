import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, updateVotes] = useState(Array(anecdotes.length).fill(0));

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
  }

  const increaseVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    updateVotes(newVotes);
  }

  const showMostVoted = () => {
    return props.anecdotes[votes.indexOf(Math.max(...votes))].toString();
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <button onClick={increaseVote}>vote</button>
      <button onClick={randomAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <div>
        {showMostVoted()}
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));