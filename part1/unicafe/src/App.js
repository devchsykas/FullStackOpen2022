import { useState } from "react";
import React from "react";
import Statistics from "./Statistics";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    // console.log("clicked the good button");
    setGood(good + 1);
    setAll(all + 1);
  };

  const handleNeutralClick = () => {
    // console.log("clicked the neutral button");
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleBadClick = () => {
    // console.log("clicked the bad button");
    setBad(bad + 1);
    setAll(all + 1);
  };

  const averageClicks = () => {
    const avg = all ? (good - bad) / all : all;
    return avg;
  };

  const positiveClicks = () => {
    const positive = good ? (good * 100) / all : good;
    return positive;
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <h1>statistics</h1>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={all} />
      <Statistics text="average" value={averageClicks()} />
      <Statistics text="percentage" value={positiveClicks()} />
    </div>
  );
};

export default App;
