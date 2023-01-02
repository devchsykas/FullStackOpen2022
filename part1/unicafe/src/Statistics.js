import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({
  goodClick,
  neutralClick,
  badClick,
  allClicks,
  averageClicks,
  positiveClicks,
}) => {
  return (
    <tbody>
      <tr>
        <StatisticLine text="Good" value={goodClick} />
      </tr>
      <tr>
        <StatisticLine text="Neutral" value={neutralClick} />
      </tr>
      <tr>
        <StatisticLine text="Bad" value={badClick} />
      </tr>
      <tr>
        <StatisticLine text="All" value={allClicks} />
      </tr>
      <tr>
        <StatisticLine text="Average" value={averageClicks} />
      </tr>
      <tr>
        <StatisticLine text="Positive" value={positiveClicks} />
      </tr>
    </tbody>
  );
};

export default Statistics;
