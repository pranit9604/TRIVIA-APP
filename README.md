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

### Test Cases
   - ✅ Unit tests for all core components (see `*.test.js` files in `frontend/src/components/`).

---

## 🚀 Live Demo

🌐 **Frontend (Netlify):** scintillating-tanuki-5165f7.netlify.app 
📦 **GitHub Repo:** [https://github.com/pranit9604/TRIVIA-APP]






## 📸 Screenshots

### 🧩 Initial Input Screen
Clean, minimal, and beautifully spaced layout prompting the user to enter number-based trivia types.
![2025-05-29 (1)](https://github.com/user-attachments/assets/b54da340-95c0-4013-a1b1-b1900c459417)


---

### ⚡ Live Trivia Response
Upon entering values, trivia cards dynamically appear with vibrant category icons and sleek animations.
![2025-05-29 (2)](https://github.com/user-attachments/assets/0077513f-c23d-4dda-b305-9c01b5a33e02)


---

### 🎯 Focused Trivia Highlight
Each trivia fact is presented in a glowing card with a clear icon and label, enhancing readability.
![2025-05-29 (3)](https://github.com/user-attachments/assets/ccf6ac63-6166-431f-a5b3-f8fa0b989928)


---

### 🔄 Scrollable Trivia Feed
Multiple facts load below inputs, separated cleanly in a scroll-friendly layout for seamless exploration.
![2025-05-29 (4)](https://github.com/user-attachments/assets/f2002eeb-56c9-4871-9d4a-af2739f00a87)


---

### 💡 Floating Favorites Button
Floating button with badge appears for saved trivia, gently guiding users to revisit their collected gems.
![2025-05-29 (5)](https://github.com/user-attachments/assets/b46a5356-6787-4cc9-a836-a7886a075d65)


---

### 📂 Favorites Panel (Modal)
Opens a graceful overlay to view all saved facts, organized by type with delightful icons and delete options.
![2025-05-29 (6)](https://github.com/user-attachments/assets/c947d38e-07f2-4727-bca8-4c673c25d803)


---

### 🧮 Filtered View – Math Trivia
Filtered list showing only math-based trivia, styled in a soft gold palette for better focus.
![2025-05-29 (7)](https://github.com/user-attachments/assets/90e4c530-3df6-4211-b6b2-9cd5d22952f2)


---

### 🗂️ Filtered View – Empty State
When no favorites exist in a category, a subtle and friendly "No favorites yet" message appears with an icon.
![2025-05-29 (9)](https://github.com/user-attachments/assets/6fedffd1-f9a5-4e4e-95b7-5c9408bcfe30)


---

### ❌ Input Validation with Error Feedback
Gracefully animated error messages appear with red highlights when invalid inputs are detected.
![2025-05-29 (10)](https://github.com/user-attachments/assets/8eb7a2ec-7bb6-44c5-8588-7dc12a4526db)




---

## 🚀 Tech Stack

**Frontend Framework:  React (JavaScript)
Styling:  CSS (with responsive design)
API: Numbers API (for trivia facts)
State Management: React useState, useEffect hooks
Utilities: lodash.debounce (for input debouncing)
Icons: react-icons
Persistence: localStorage (for saving favorites)
Testing: Jest and React Testing Library (for unit tests)
Build Tool: Create React App (CRA)**
---

## 📂 Project Structure Highlights

TRIVIA-APP/
└── frontend/
    ├── build/
    ├── node_modules/
    ├── public/
    └── src/
        ├── components/
        │   ├── DateInput.js
        │   ├── DateInput.test.js
        │   ├── MathInput.js
        │   ├── MathInput.test.js
        │   ├── NumberInput.js
        │   ├── NumberInput.test.js
        │   ├── TriviaCard.js
        │   ├── TriviaCard.test.js
        │   ├── TriviaPanel.js
        │   └── TriviaPanel.test.js
        ├── styles/
        │   ├── image/
        │   ├── App.css
        │   ├── DateInput.css
        │   ├── MathInput.css
        │   ├── NumberInput.css
        │   ├── TriviaCard.css
        │   └── TriviaPanel.css
        ├── App.js
        ├── index.css
        ├── index.js
        └── setup.tests.js
    ├── .gitignore
    └── package-lock.json

