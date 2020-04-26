import { useState, useEffect, useRef } from "react";

function randomColor(currentColor) {
  const COLOR_LIST = ["red", "green", "yellow"];
  // random 0 --> 2
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;

  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }
  console.log(COLOR_LIST[newIndex]);

  return COLOR_LIST[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    const colorInterval = setInterval(() => {
      //   console.log("Change color: ", colorRef.current);

      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
