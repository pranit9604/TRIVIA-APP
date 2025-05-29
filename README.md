🔢 Trivia – Facts App




A responsive trivia app that fetches fun facts about numbers, dates, and math expressions using the Numbers API. Built with React and enhanced with modern UI, input validation, and a favorites system using localStorage.

📌 Features


✅ Core Requirements (As per Assignment)

🧮 Three input fields

General Number

Date (supports MM-DD or YYYY-MM-DD formats)

Math Number



⚡ Instant Trivia Fetching

Trivia is shown immediately as you type (with debounce handling)



🔎 Input Validation

Numbers must be numeric

Dates must follow valid formats

Prevents API calls for invalid or empty input



📱 Fully Responsive UI

Works seamlessly on mobile, tablet, and desktop



🧪 Test Case Coverage

All described input scenarios tested (valid/invalid/edge cases)



💨 Smooth Experience

Clean fetch handling with minimal delay



🔥 Additional Features Added

⭐ Favorites System
Bookmark trivia facts you love

Stored in localStorage and persists across reloads

Delete individual favorites

Floating badge icon shows saved trivia count



🧩 Favorites Filtering
Filter favorites by type: General, Math, or Date



🏷️ Icons & Labels

Trivia entries are visually tagged by their category



✨ Modern UI/UX
Glassmorphism cards and smooth hover effects

Floating favorites button for easy access

Stylish layout with subtle shadows and transitions



🧼 Polished User Experience

Input clear buttons 

Handles empty/error states cleanly

Balanced spacing and clean typography



🛠️ Tech Stack

Frontend	React (CRA), JavaScrit , Ext-Css
Validation	Yup , date-fns
UX Utils,	lodash.debounce,
Styling	CSS (Flexbox, Media Queries),
React-Icons	,
Storage	localStorage.



🧪 Unit Testing

✅ Inputs tested for valid, invalid, and edge cases

✅ UI responsiveness verified across screen sizes

✅ Supported interactions: typing, clearing, filtering, bookmarking




📂 Folder Structure

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

