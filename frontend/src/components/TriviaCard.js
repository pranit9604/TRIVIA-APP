import React from "react";
import {
  FaCalendarAlt,
  FaCalculator,
  FaLightbulb,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import "../styles/TriviaCard.css";

// Maps type to the correct icon
const iconMap = {
  date: <FaCalendarAlt size={32} color="#4e91fc" />,
  math: <FaCalculator size={32} color="#fca14e" />,
  trivia: <FaLightbulb size={32} color="#ffd700" />,
  number: <FaLightbulb size={32} color="#ffd700" />,
};

// Capitalizes the first letter of a string
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const TriviaCard = ({ type, trivia, isBookmarked, onBookmark }) => (
  <div className="trivia-card" data-testid={`trivia-card-${type}`}>
    <div className="trivia-card-icon">
      {iconMap[type] || <FaLightbulb size={32} />}
    </div>
    <div>
      <div
        className="trivia-card-title"
        data-testid={`trivia-card-title-${type}`}
      >
        {type === "number"
          ? "General Number Trivia"
          : `${capitalize(type)} Trivia`}
        <span
          className="bookmark-icon"
          title={isBookmarked ? "Remove from favorites" : "Add to favorites"}
          onClick={onBookmark}
        >
          {isBookmarked ? (
            <FaBookmark color="#ffb300" />
          ) : (
            <FaRegBookmark color="#bbb" />
          )}
        </span>
      </div>
      <div className="trivia-card-text">{trivia}</div>
    </div>
  </div>
);

export default TriviaCard;