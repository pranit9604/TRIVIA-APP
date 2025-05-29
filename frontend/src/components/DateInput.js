import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import "../styles/DateInput.css";

// Checks if the input is a valid date in MM-DD or YYYY-MM-DD format
function isValidDate(str) {
  if (/^\d{2}-\d{2}$/.test(str)) {
    const [month, day] = str.split("-").map(Number);
    return month >= 1 && month <= 12 && day >= 1 && day <= 31;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
    const [year, month, day] = str.split("-").map(Number);
    if (month < 1 || month > 12 || day < 1 || day > 31) return false;
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }
  return false;
}

function DateInput({ value, onChange }) {
  const [input, setInput] = useState(value || "");
  const [error, setError] = useState("");

  // Debounced validation for input
  const validateAndChange = useCallback(
    debounce((val) => {
      if (val === "") {
        setError("");
        onChange("");
        return;
      }
      if (!isValidDate(val)) {
        setError("Enter date as MM-DD or YYYY-MM-DD");
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
      <label className="input-label" htmlFor="date-input">
        Date (MM-DD or YYYY-MM-DD):
      </label>
      <input
        id="date-input"
        className="input-field"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. 12-25 or 2020-12-25"
      />
      {error && <div className="input-error">{error}</div>}
    </div>
  );
}

export default DateInput;