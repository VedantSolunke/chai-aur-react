import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    let pass = " ";
    for (let i = 1; i < length; i++) {
      let position = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(position);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPassToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, characterAllowed, numberAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-3 my-8 text-orange-500 bg-gray-700 ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className=" outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  hover:bg-blue-500 ">
            copy
          </button>
        </div>

        <div className=" flex text-sm gap-x-2 ">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Length:({length})</label>
          </div>

          <div className=" flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>

          <div className=" flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterAllowed"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="Character">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
