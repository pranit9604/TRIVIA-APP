import React, { useEffect, useState } from "react";
import TriviaCard from "./TriviaCard";
import {
  FaBookmark,
  FaTrash,
  FaCalendarAlt,
  FaCalculator,
  FaLightbulb,
} from "react-icons/fa";
import "../styles/TriviaPanel.css";

function useTrivia(url, enabled) {
  const [trivia, setTrivia] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setTrivia("");
      return;
    }
    setLoading(true);
    fetch(url)
      .then((res) => res.text())
      .then((data) => setTrivia(data))
      .catch(() => setTrivia("Could not fetch trivia."))
      .finally(() => setLoading(false));
  }, [url, enabled]);

  return { trivia, loading };
}

function Spinner({ colorClass }) {
  return (
    <span className={`trivia-spinner ${colorClass || "spinner-general"}`} />
  );
}

function TriviaPanel({ number, date, math }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("trivia-favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    localStorage.setItem("trivia-favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Auto-exit favorites view if favorites become empty
  useEffect(() => {
    if (showFavorites && favorites.length === 0) {
      setShowFavorites(false);
    }
  }, [favorites, showFavorites]);

  const handleBookmark = (fact, type) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.fact === fact)) {
        return prev.filter((f) => f.fact !== fact);
      }
      return [...prev, { fact, type }];
    });
  };

  const handleDeleteFavorite = (fact) => {
    setFavorites((prev) => prev.filter((f) => f.fact !== fact));
  };

  // date input can be MM-DD or YYYY-MM-DD
  let dateUrl = "";
  let dateEnabled = false;

  if (/^\d{2}-\d{2}$/.test(date)) {
    const [month, day] = date.split("-");
    dateUrl = `http://numbersapi.com/${month}/${day}/date`;
    dateEnabled = true;
  } else if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [, month, day] = date.split("-");
    dateUrl = `http://numbersapi.com/${month}/${day}/date`;
    dateEnabled = true;
  }

  const { trivia: numberTrivia, loading: loadingNumber } = useTrivia(
    number ? `http://numbersapi.com/${number}` : "",
    !!number
  );
  const { trivia: dateTrivia, loading: loadingDate } = useTrivia(
    dateUrl,
    dateEnabled
  );
  const { trivia: mathTrivia, loading: loadingMath } = useTrivia(
    math ? `http://numbersapi.com/${math}/math` : "",
    !!math
  );

  // Helper for icon and label
  const getTypeIcon = (type) => {
    if (type === "number")
      return <FaLightbulb color="#ffd700" title="General Number" />;
    if (type === "math")
      return <FaCalculator color="#fca14e" title="Math Number" />;
    if (type === "date") return <FaCalendarAlt color="#4e91fc" title="Date" />;
    return null;
  };
  const getTypeLabel = (type) => {
    if (type === "number") return "General Number";
    if (type === "math") return "Math Number";
    if (type === "date") return "Date";
    return "";
  };

  // Filter favorites
  const filteredFavorites =
    filterType === "all"
      ? favorites
      : favorites.filter((f) => f.type === filterType);

  return (
    <div className="trivia-panel-container">
      {/* Top-right favorites button */}
      <button
        className="favorites-toggle-btn"
        onClick={() => setShowFavorites((prev) => !prev)}
        title={showFavorites ? "Show Trivia" : "Show Favorites"}
        aria-pressed={showFavorites}
      >
        <FaBookmark size={28} color={showFavorites ? "#ffb300" : "#bbb"} />
        {favorites.length > 0 && (
          <span className="favorites-badge">{favorites.length}</span>
        )}
      </button>

      {showFavorites ? (
        <div className="favorites-section">
          <h3>Your Favorites</h3>
          {/* Filter Bar */}
          <div className="favorites-filter-bar">
            <button
              className={filterType === "all" ? "active" : ""}
              onClick={() => setFilterType("all")}
            >
              All
            </button>
            <button
              className={filterType === "number" ? "active" : ""}
              onClick={() => setFilterType("number")}
            >
              <FaLightbulb color="#ffd700" /> General Number
            </button>
            <button
              className={filterType === "math" ? "active" : ""}
              onClick={() => setFilterType("math")}
            >
              <FaCalculator color="#fca14e" /> Math Number
            </button>
            <button
              className={filterType === "date" ? "active" : ""}
              onClick={() => setFilterType("date")}
            >
              <FaCalendarAlt color="#4e91fc" /> Date
            </button>
          </div>
          {filteredFavorites.length === 0 ? (
            <div className="favorite-fact">No favorites yet.</div>
          ) : (
            filteredFavorites.map((item, idx) => (
              <div key={idx} className="favorite-fact">
                <span className="favorite-type-icon">
                  {getTypeIcon(item.type)}
                </span>
                <span className="favorite-type-label">
                  {getTypeLabel(item.type)}
                </span>
                <span className="favorite-fact-text">{item.fact}</span>
                <button
                  className="delete-favorite-btn"
                  title="Remove from favorites"
                  onClick={() => handleDeleteFavorite(item.fact)}
                >
                  <FaTrash size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      ) : (
        <>
          {number && (
            <div className="trivia-panel-section glass-card trivia-panel-motion">
              {loadingNumber ? (
                <div className="trivia-panel-loading">
                  <Spinner colorClass="spinner-general" />
                  <span>Fetching trivia…</span>
                </div>
              ) : (
                <TriviaCard
                  type="number"
                  trivia={numberTrivia}
                  isBookmarked={favorites.some((f) => f.fact === numberTrivia)}
                  onBookmark={() => handleBookmark(numberTrivia, "number")}
                />
              )}
            </div>
          )}
          {dateEnabled && (
            <div className="trivia-panel-section glass-card trivia-panel-motion">
              {loadingDate ? (
                <div className="trivia-panel-loading">
                  <Spinner colorClass="spinner-date" />
                  <span>Fetching trivia…</span>
                </div>
              ) : (
                <TriviaCard
                  type="date"
                  trivia={dateTrivia}
                  isBookmarked={favorites.some((f) => f.fact === dateTrivia)}
                  onBookmark={() => handleBookmark(dateTrivia, "date")}
                />
              )}
            </div>
          )}
          {math && (
            <div className="trivia-panel-section glass-card trivia-panel-motion">
              {loadingMath ? (
                <div className="trivia-panel-loading">
                  <Spinner colorClass="spinner-math" />
                  <span>Fetching trivia…</span>
                </div>
              ) : (
                <TriviaCard
                  type="math"
                  trivia={mathTrivia}
                  isBookmarked={favorites.some((f) => f.fact === mathTrivia)}
                  onBookmark={() => handleBookmark(mathTrivia, "math")}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default TriviaPanel;
