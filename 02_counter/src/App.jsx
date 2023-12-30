import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const increaseVale = () => {
    if (counter <= 20) {
      // setCounter(counter + 1);

      setCounter((prevCounter) => {
        prevCounter + 1;
      });

      /*
        The code also includes comments explaining why multiple consecutive setCounter calls using the counter + 1
        approach would not work as expected. React batches state updates to improve performance, and using the
        functional update form ensures that each update is based on the latest state.
        */

      // Incorrect usage with multiple consecutive calls:
      /*
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);

        Executing the above will NOT increase the value by 4 because React (useState) sends the data in batches.

        Correct usage with functional update in multiple consecutive calls:
        setCounter((prevCounter) => prevCounter + 1);
        setCounter((prevCounter) => prevCounter + 1);
        setCounter((prevCounter) => prevCounter + 1);
        setCounter((prevCounter) => prevCounter + 1);

        Executing the above WILL increase the value by 4.
        */
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
