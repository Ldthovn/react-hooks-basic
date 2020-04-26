import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function CLock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      // HH:mm:ss
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      // cleanup
      console.log("Clock cleanup");
      clearInterval(clockInterval);
    };
  }, []);

  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

CLock.propTypes = {};

export default CLock;