import React from "react";
import useCLock from "../../hooks/useClock";

// function formatDate(date) {
//   const hours = `0${date.getHours()}`.slice(-2);
//   const minutes = `0${date.getMinutes()}`.slice(-2);
//   const seconds = `0${date.getSeconds()}`.slice(-2);
//   return `${hours}:${minutes}:${seconds}`;
// }

function CLock(props) {
  const { timeString } = useCLock();

  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

export default CLock;
