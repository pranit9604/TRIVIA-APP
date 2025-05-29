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

## 🖼️ Screenshots

You can add screenshots here to showcase your app UI. For example:

| Home View | Favorites Panel |
|----------|----------------|
| ![Home Screenshot](./screenshots/home.png) | ![Favorites Screenshot](./screenshots/favorites.png) |

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

