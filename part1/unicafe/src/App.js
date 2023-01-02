import { useState } from "react";
import React from "react";
import Statistics from "./Statistics";
import Header from "./Header";

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
      <Header name="Given Feedback" />
      <Button text="Good" onClick={handleGoodClick} />
      <Button text="Neutral" onClick={handleNeutralClick} />
      <Button text="Bad" onClick={handleBadClick} />
      <Header name="Statistics" />
      {all === 0 ? (
        "No feedback given"
      ) : (
        <div>
          <Statistics text="Good:" value={good} />
          <Statistics text="Neutral:" value={neutral} />
          <Statistics text="Bad:" value={bad} />
          <Statistics text="All:" value={all} />
          <Statistics text="Average:" value={averageClicks()} />
          <Statistics text="Percentage:" value={positiveClicks()} />
        </div>
      )}
    </div>
  );
};

export default App;
