import "./App.css";
import Counter from "./components/Counter";
import { useContext } from "react";
import { CounterContext } from "./context/Counter";

function App() {
  const counterState = useContext(CounterContext);

  console.log("Context", counterState);
  return (
    <div className="App">
      <h1>Context API</h1>
      <h2>count is {counterState.count}</h2>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
