import React from "react";

const StatisticLine = ({ text, value }) => {
  if (text === "positive")
    return (
      <td>
        {text} {value} %
      </td>
    );
  else
    return (
      <td>
        {text} {value}
      </td>
    );
};

export default StatisticLine;
