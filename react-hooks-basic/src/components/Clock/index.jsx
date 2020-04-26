import React from "react";
import useCLock from "../../hooks/useClock";

function CLock(props) {
  const { timeString } = useCLock();

  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

export default CLock;
