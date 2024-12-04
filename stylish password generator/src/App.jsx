import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-6">
      <div className="w-full max-w-lg bg-gray-900 rounded-lg shadow-2xl text-white p-6">
        <h1 className="text-3xl font-bold text-center mb-6 animate-pulse">
          🔐 Stylish Password Generator
        </h1>
        <div className="flex items-center bg-gray-800 rounded-md mb-6 shadow-lg">
          <input
            type="text"
            value={password}
            className="flex-1 bg-transparent text-lg p-3 rounded-l-md outline-none placeholder-gray-400"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold px-5 py-3 rounded-r-md transition-all"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label
            htmlFor="lengthRange"
            className="block text-sm font-medium mb-2"
          >
            Password Length: <span className="font-bold">{length}</span>
          </label>
          <input
            id="lengthRange"
            type="range"
            min={6}
            max={100}
            value={length}
            className="w-full cursor-pointer accent-purple-600"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="flex justify-between mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              className="form-checkbox text-purple-600"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <span className="text-sm font-medium">Include Numbers</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              className="form-checkbox text-purple-600"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <span className="text-sm font-medium">Include Special Characters</span>
          </label>
        </div>

        <button
          onClick={passwordGenerator}
          className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 text-lg font-bold py-3 rounded-md shadow-md transition-all transform hover:scale-105"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
