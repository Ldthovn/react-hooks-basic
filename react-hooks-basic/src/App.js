import React, { useState } from "react";

import "./App.scss";

import Hero from "./components/Hero";
function App(props) {
  const [count, setCount] = useState(0);

  function handleHeroClick() {}
  return (
    <div className="App">
      <h1>React hooks - Clock</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="Easy Frontend" onClick={handleHeroClick} />
    </div>
  );
}

export default App;
