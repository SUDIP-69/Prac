import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const generatePassword = useCallback(() => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const special = "!@#$%^&*()_+[]{}|;:,.<>?";
    let str = lower + upper;
    if (number) {
      str += num;
    }
    if (char) {
      str += special;
    }
    let pass = "";
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, number, char, generatePassword]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
        <h1 className="bg-amber-300 p-4 text-4xl text-center rounded-md font-semibold">
          Password Generator
        </h1>
        <input
          type="text"
          value={password}
          ref={passwordRef}
          readOnly
          className="w-1/2 p-2 border border-gray-300 rounded mt-4 mb-2 bg-amber-100 text-gray-800 text-center"
        />
        <div className="flex flex-col items-center text-white">
          <label className="mb-2">Password Length: {length}</label>
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-1/2 mb-4 bg-white rounded-lg cursor-pointer accent-amber-500"
          />
          <div className="flex items-center mb-2 text-white">
            <input
              type="checkbox"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
              className="mr-2 cursor-pointer accent-amber-500"
            />
            <label>Include Numbers</label>
          </div>
          <div className="flex items-center mb-4 text-white">
            <input
              type="checkbox"
              checked={char}
              onChange={(e) => setChar(e.target.checked)}
              className="mr-2 cursor-pointer accent-amber-500"
            />
            <label>Include Special Characters</label>
          </div>
          <button
            onClick={() => {
              passwordRef.current?.select();
              window.navigator.clipboard.writeText(password);
            }}
            className="bg-amber-500 text-white font-semibold text-xl px-4 py-2 rounded hover:bg-amber-600 cursor-pointer transition-colors duration-300"
          >
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
