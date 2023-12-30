import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  const Mycolors = [
    { id: 1, color: "red" },
    { id: 2, color: "blue" },
    { id: 3, color: "green" },
    { id: 4, color: "yellow" },
    { id: 5, color: "olive" },
    { id: 6, color: "orange" },
    { id: 7, color: "purple" },
    { id: 8, color: "LightGray" },
    { id: 9, color: "teal" },
    { id: 10, color: "brown" },
    { id: 11, color: "pink" },
    { id: 12, color: " black" },
  ];

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div style={{ backgroundColor: "white" }}>
        {Mycolors.map(({ id, color }) => (
          <button
            key={id}
            onClick={() => setColor(color)}
            style={{ backgroundColor: color }}
            className="text-white m-4 px-8 py-4 rounded-full shadow-lg">
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
