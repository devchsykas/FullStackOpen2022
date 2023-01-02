import { useState } from "react";
import React from "react";
import Statistics from "./Statistics";
import Header from "./Header";
import Button from "./Button";
import StatisticLine from "./StatisticLine";

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
        <table>
          <Statistics
            goodClick={good}
            neutralClick={neutral}
            badClick={bad}
            allClicks={all}
            averageClicks={averageClicks()}
            positiveClicks={positiveClicks()}
          />
        </table>
      )}
    </div>
  );
};

export default App;
