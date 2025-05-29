import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // <-- Add this import for custom matchers
import TriviaCard from "./TriviaCard";

describe("TriviaCard", () => {
  it("renders number type with correct title and trivia", () => {
    render(
      <TriviaCard
        type="number"
        trivia="This is number trivia."
        isBookmarked={false}
        onBookmark={jest.fn()}
      />
    );
    expect(screen.getByTestId("trivia-card-number")).toBeInTheDocument();
    expect(screen.getByTestId("trivia-card-title-number")).toHaveTextContent(
      "General Number Trivia"
    );
    expect(screen.getByText("This is number trivia.")).toBeInTheDocument();
  });

  it("renders date type with correct icon and title", () => {
    render(
      <TriviaCard
        type="date"
        trivia="This is date trivia."
        isBookmarked={false}
        onBookmark={jest.fn()}
      />
    );
    expect(screen.getByTestId("trivia-card-date")).toBeInTheDocument();
    expect(screen.getByTestId("trivia-card-title-date")).toHaveTextContent(
      "Date Trivia"
    );
    expect(screen.getByText("This is date trivia.")).toBeInTheDocument();
  });

  it("renders math type with correct icon and title", () => {
    render(
      <TriviaCard
        type="math"
        trivia="This is math trivia."
        isBookmarked={false}
        onBookmark={jest.fn()}
      />
    );
    expect(screen.getByTestId("trivia-card-math")).toBeInTheDocument();
    expect(screen.getByTestId("trivia-card-title-math")).toHaveTextContent(
      "Math Trivia"
    );
    expect(screen.getByText("This is math trivia.")).toBeInTheDocument();
  });

  it("renders trivia type with correct icon and title", () => {
    render(
      <TriviaCard
        type="trivia"
        trivia="This is general trivia."
        isBookmarked={false}
        onBookmark={jest.fn()}
      />
    );
    expect(screen.getByTestId("trivia-card-trivia")).toBeInTheDocument();
    expect(screen.getByTestId("trivia-card-title-trivia")).toHaveTextContent(
      "Trivia Trivia"
    );
    expect(screen.getByText("This is general trivia.")).toBeInTheDocument();
  });

  it("shows filled bookmark icon when isBookmarked is true", () => {
    render(
      <TriviaCard
        type="number"
        trivia="Bookmarked trivia."
        isBookmarked={true}
        onBookmark={jest.fn()}
      />
    );
    expect(screen.getByTitle("Remove from favorites")).toBeInTheDocument();
    expect(screen.getByTestId("trivia-card-title-number").querySelector("svg")).toBeTruthy();
  });

  it("shows outlined bookmark icon when isBookmarked is false", () => {
    render(
      <TriviaCard
        type="number"
        trivia="Not bookmarked trivia."
        isBookmarked={false}
        onBookmark={jest.fn()}
      />
    );
    expect(screen.getByTitle("Add to favorites")).toBeInTheDocument();
    expect(screen.getByTestId("trivia-card-title-number").querySelector("svg")).toBeTruthy();
  });

  it("calls onBookmark when bookmark icon is clicked", () => {
    const onBookmark = jest.fn();
    render(
      <TriviaCard
        type="number"
        trivia="Click to bookmark."
        isBookmarked={false}
        onBookmark={onBookmark}
      />
    );
    fireEvent.click(screen.getByTitle("Add to favorites"));
    expect(onBookmark).toHaveBeenCalled();
  });
});