🔢 Trivia – Facts App


A responsive trivia web app built with React that provides fun facts about general numbers, dates, and math expressions using the Numbers API. It includes features like live trivia fetching, input validation, favorites management, and a modern UI/UX design.

🚀 Live Demo

📦 GitHub Repo: [NumVerse on GitHub](https://github.com/pranit9604/TRIVIA-APP)

📌 Features

✅ Core Requirements (As per Assignment)

🧮 Three input fields: General Number, Date (MM-DD or YYYY-MM-DD), Math Number

⚡ Instant trivia shown as user types

🔎 Input validation for number and date formats

📱 Fully responsive UI (mobile, tablet, desktop)

🧪 Thoroughly tested against various input cases

💨 Smooth API fetch handling with debounced input




****🔥 Additional Features Added****



⭐ Favorites System

Bookmark trivia facts

Persist across reloads using localStorage

Delete individual items

Badge icon shows count of saved trivia

🧩 Favorites Filtering

Filter saved facts by type: General, Math, or Date

🏷️ Icons & Labels

Each trivia fact visually labeled by its category

✨ Modern UI/UX

Glassmorphism cards

Shadows, transitions, and hover effects

Floating favorites button

🧼 Polished User Experience

Input clear buttons

Error and empty state handling

Clean layout with well-spaced elements





🛠️ Tech Stack
Frontend: React , JavaScript , Css , Html

Validation: Yup, date-fns

UX Utilities: lodash.debounce

Styling: CSS (Flexbox, Media Queries)

Icons: React-Icons

Storage: localStorage



🧪 Unit Testing


✅ Inputs tested for valid, invalid, and edge cases

✅ Responsive behavior on mobile, tablet, and desktop

✅ Supported scenarios: input modification, clear/reset, rapid typing

![still-empty-bookmark-no-saved-file-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector](https://github.com/user-attachments/assets/e5a85da5-1e8d-46f9-8f23-2ac5889bccc8)



📂 Folder Structure


Edit
src/
├── components/
│   ├── DateInput.js
│   ├── DateInput.test.js
│   ├── MathInput.js
│   ├── MathInput.test.js
│   ├── NumberInput.js
│   ├── NumberInput.test.js
│   ├── TriviaCard.js
│   ├── TriviaCard.test.js
│   └── TriviaPanel.js
│       └── TriviaPanel.test.js
├── styles/
│   ├── DateInput.css
│   ├── MathInput.css
│   ├── NumberInput.css
│   ├── TriviaCard.css
│   └── TriviaPanel.css
├── App.js
├── index.js
├── index.css
└── setup.tests.js
