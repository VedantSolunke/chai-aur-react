import "./App.css";
import Cart from "./components/Cart";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Item name="Laptop" price={1000} />

      <Item name="Pendrive" price={20} />
      <Item name="CD" price={10} />
      <Cart />
    </div>
  );
}

export default App;
