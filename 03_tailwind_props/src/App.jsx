import "./App.css";
import Cards from "./components/Cards";

function App() {
  const databases = [
    { id: 1, userName: "Username1", button: "Visit Profile" },
    { id: 2, userName: "Username2", button: "See Profile" },
    { id: 3, userName: "Username3", button: "See Profile" },
  ];

  return (
    <>
      <h1 className="bg-green-400 rounded-lg p-4 text-black mb-4">
        Tailwind And Props
      </h1>

      {databases.map(({ id, userName, button }) => (
        <Cards key={id} userName={userName} button={button} />
      ))}
    </>
  );
}

export default App;
