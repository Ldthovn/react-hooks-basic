import React from "react";
import useCLock from "../../hooks/useClock";
import "./BetterClock.scss";

function BetterCLock(props) {
  const { timeString } = useCLock();

  return (
    <div className="better-clock">
      <p className="better-clock__time">{timeString}</p>
    </div>
  );
}

export default BetterCLock;
