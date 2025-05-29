import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import "../styles/NumberInput.css"; // Use the shared card style

function NumberInput({ value, onChange }) {
  const [input, setInput] = useState(value || "");
  const [error, setError] = useState("");

  const validateAndChange = useCallback(
    debounce((val) => {
      if (val === "") {
        setError("");
        onChange("");
        return;
      }
      if (!/^\d+$/.test(val)) {
        setError("Please enter a valid number");
        onChange("");
      } else {
        setError("");
        onChange(val);
      }
    }, 400),
    [onChange]
  );

  useEffect(() => {
    validateAndChange(input);
    return () => validateAndChange.cancel();
  }, [input, validateAndChange]);

  useEffect(() => {
    setInput(value || "");
  }, [value]);

  return (
    <div className="input-card">
      <label className="input-label" htmlFor="number-input">
        General Number:
      </label>
      <input
        id="number-input"
        className="input-field"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. 42"
        inputMode="numeric"
      />
      {error && <div className="input-error">{error}</div>}
    </div>
  );
}

export default NumberInput;
