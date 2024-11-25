import { useState } from "react";
import "./App.css";

interface Dictionary {
  word: string;
  meaning: string;
}

function App() {
  const [input, setInput] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string>("");

  const data: Dictionary[] = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      setSuggestion("Word not found in the dictionary.");
      return;
    }
    const result = data.find((item) => item.word.toLowerCase() === input.toLowerCase());
    if (result) {
      setSuggestion(result.meaning);
    } else {
      setSuggestion("Word not found in the dictionary.");
    }
  };

  return (
    <>
      <h3>Dictionary App</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="input"
          id="input"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <strong>Definition:</strong>
        <span id="definition">{suggestion}</span>
      </div>
    </>
  );
}

export default App;
