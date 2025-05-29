import React, { useState } from "react";
import NumberInput from "./components/NumberInput";
import DateInput from "./components/DateInput";
import MathInput from "./components/MathInput";
import TriviaPanel from "./components/TriviaPanel";
import "./styles/App.css";

// Main App component
function App() {
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [math, setMath] = useState("");

  return (
    <div className="app-container">
      <h1>Trivia App</h1>
      <p className="app-subtitle">
        Enter a number, date, or math number to get fun trivia facts!
      </p>
      <div className="inputs">
        <NumberInput value={number} onChange={setNumber} />
        <DateInput value={date} onChange={setDate} />
        <MathInput value={math} onChange={setMath} />
      </div>
      <TriviaPanel number={number} date={date} math={math} />

      <footer className="app-footer">
        <small>
          Powered by{" "}
          <a
            href="http://numbersapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Numbers API
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;