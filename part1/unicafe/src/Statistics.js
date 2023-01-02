import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ text, value }) => {
  return (
    <div>
      <StatisticLine text={text} value={value} />
    </div>
  );
};

export default Statistics;
