# 🎲 Trivia Fun Facts App

A responsive and interactive trivia application built with **React + TypeScript**, powered by **numbersapi.com**. Instantly fetch trivia based on numbers, dates, or math inputs — with a modern UI and personalized experience.

---

## ✅ Assignment Requirements Coverage

1. **Three Inputs**
   - General Number, Date, and Math Number inputs.
   - Components: `NumberInput`, `DateInput`, `MathInput`.

2. **Show Trivia Instantly**
   - Real-time trivia display using `TriviaPanel`.

3. **Input Validations**
   - Proper validation for all inputs with user-friendly error messages.

4. **Responsive UI**
   - Designed to adapt across mobile, tablet, and desktop using CSS in `App.css`.

5. **Test Cases**
   - ✅ Unit tests for all core components (see `*.test.js` files in `frontend/src/components/`).

---

## 🔥 Additional Features

### ⭐ Favorites System
- Bookmark trivia facts with one click.
- Stored in `localStorage` to persist across sessions.
- Remove individual items easily.
- 🔔 Badge icon shows total favorite count.

### 🔍 Favorites Filtering
- Filter your saved facts by category:
  - General
  - Math
  - Date

### 🏷️ Icons & Labels
- Each fact is visually tagged with an icon and label for easy recognition.

### ✨ Modern UI/UX
- Glassmorphism-styled cards
- Smooth transitions, hover effects
- Floating favorites button

### 🎯 Polished User Experience
- Graceful error and empty state handling
- Clean layout, intuitive interaction

---

## 📸 Screenshots

### 🧩 Initial Input Screen
Clean, minimal, and beautifully spaced layout prompting the user to enter number-based trivia types.
![Input Screen](./screenshots/2025-05-29%20(1).png)

---

### ⚡ Live Trivia Response
Upon entering values, trivia cards dynamically appear with vibrant category icons and sleek animations.
![Live Trivia Response](./screenshots/2025-05-29%20(2).png)

---

### 🎯 Focused Trivia Highlight
Each trivia fact is presented in a glowing card with a clear icon and label, enhancing readability.
![Focused Trivia](./screenshots/2025-05-29%20(3).png)

---

### 🔄 Scrollable Trivia Feed
Multiple facts load below inputs, separated cleanly in a scroll-friendly layout for seamless exploration.
![Scrollable Feed](./screenshots/2025-05-29%20(4).png)

---

### 💡 Floating Favorites Button
Floating button with badge appears for saved trivia, gently guiding users to revisit their collected gems.
![Favorites Button](./screenshots/2025-05-29%20(5).png)

---

### 📂 Favorites Panel (Modal)
Opens a graceful overlay to view all saved facts, organized by type with delightful icons and delete options.
![Favorites Panel](./screenshots/2025-05-29%20(6).png)

---

### 🧮 Filtered View – Math Trivia
Filtered list showing only math-based trivia, styled in a soft gold palette for better focus.
![Math Filter](./screenshots/2025-05-29%20(7).png)

---

### 🗂️ Filtered View – Empty State
When no favorites exist in a category, a subtle and friendly "No favorites yet" message appears with an icon.
![Empty Favorites](./screenshots/2025-05-29%20(9).png)

---

### ❌ Input Validation with Error Feedback
Gracefully animated error messages appear with red highlights when invalid inputs are detected.
![Validation Errors](./screenshots/2025-05-29%20(10).png)

To add your own:

1. Create a folder named `screenshots` in your project root.
2. Save your image files (e.g., `home.png`, `favorites.png`) inside it.
3. Push the folder to your GitHub repo.
4. Use relative paths like `./screenshots/home.png` in the README.

---

## 🚀 Tech Stack

- **Frontend**: React (TypeScript)
- **Validation**: `yup`
- **Date Handling**: `date-fns`
- **UI Enhancements**: `framer-motion`, `@mui/icons-material`
- **Utility**: `lodash.debounce`

---

## 📂 Project Structure Highlights

