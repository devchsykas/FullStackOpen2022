import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    // console.log("clicked the good button");
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    // console.log("clicked the neutral button");
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    // console.log("clicked the bad button");
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <h1>statistics</h1>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
    </div>
  );
};

export default App;
