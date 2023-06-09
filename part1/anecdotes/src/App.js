import React from "react";
import { useState } from "react";
import Button from "./Button";
import Header from "./Header";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);

  const points = Array(anecdotes.length).fill(0);

  const [votes, setVotes] = useState([...points]);

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteAnecdote = () => {
    votes[selected] = votes[selected] + 1;
    setVotes([...votes]);
  };

  const maxVotesAnecdote = () => Math.max(...votes);

  const indexOfMaxVotesAnecdotes = () => votes.indexOf(maxVotesAnecdote());

  return (
    <div>
      <Header name="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button text="vote" onClick={voteAnecdote} />
      <Button text="next anecdote" onClick={randomAnecdote} />
      <Header name="Anecdote with most votes" />
      <p>{anecdotes[indexOfMaxVotesAnecdotes()]}</p>
      <p>has {maxVotesAnecdote()} votes</p>
    </div>
  );
};

export default App;
