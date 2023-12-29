import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const increaseVale = () => {
    if (counter <= 20) {
      setCounter(counter + 1);
    }
  };

  const decreaseVale = () => {
    if (counter >= 0) {
      setCounter(counter--);
    }
  };

  return (
    <>
      <h1> {counter}</h1>

      <button id="decrease" onClick={decreaseVale}>
        decrease -
      </button>
      <button id="increase" onClick={increaseVale}>
        Increase +
      </button>
    </>
  );
}

export default App;
