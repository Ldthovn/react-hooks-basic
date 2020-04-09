import React, { useState } from "react";
// import PropTypes from "prop-types";
import "./ColorBox.scss";

function getRamdomColor() {
  const colorList = ["deeppink", "green", "yellow", "black", "blue"];
  const ramdomIndex = Math.trunc(Math.random() * 5);
  return colorList[ramdomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    console.log("initColor :", initColor);
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRamdomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

ColorBox.propTypes = {};

export default ColorBox;
