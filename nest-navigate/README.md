# 🏠 Nest Navigate – Learning Module

A responsive, interactive React learning module for first-time homebuyers, built as part of a frontend engineer assignment. This project simulates a gamified educational experience for a product called **Nest Navigate**.

---

## 🚀 Live Demo

👉 [View on Vercel]()  
👉 [GitHub Repository](https://github.com/MarkProjs/Learning-Platform)

---

## 🎯 Features

- 📚 **Module Overview** – Clear intro with lesson count and coin rewards  
- ✅ **3 Interactive Lessons** – Includes quizzes, feedback, and progress tracking  
- 🪙 **Gamification** – Coin rewards and celebration screen on completion  
- 📊 **Progress Bar** – Tracks how many lessons you've completed  
- 💾 **Persistent Progress** – Saves coin count and completed lessons via `localStorage`  
- 📱 **Responsive Design** – Mobile-first, works well across all screen sizes  

---

## 📂 File Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── ProgressBar.jsx
├── context/
│   └── AppContext.jsx
├── pages/
│   ├── Overview.jsx
│   ├── Lesson.jsx
│   └── Completion.jsx
├── data/
│   └── lessons.js
├── styles/
│   ├── main.css
│   ├── Lesson.css
│   ├── Overview.css
│   ├── Completion.css
│   └── ProgressBar.css
```

---

## 🛠️ Tech Stack

- **Framework**: React (with [Vite](https://vitejs.dev/))  
- **State Management**: React Hooks + Context API  
- **Styling**: Vanilla CSS (mobile-first with media queries)  
- **Persistence**: `localStorage`  
- **Deployment**: Vercel  

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/MarkProjs/Learning-Platform.git

# Navigate to project
cd nest-navigate

# Install dependencies
npm install

# Run locally
npm run dev
```

---

## 📌 Design Decisions & Assumptions

- Used **Context API** to globally manage coins and lesson progress  
- Static lesson content from `data/lessons.js` for simplicity  
- Coins awarded **only once per completed lesson**  
- Basic quiz functionality using native radio inputs  
- No third-party UI library used to demonstrate clean vanilla CSS  
- Mobile-first design for accessibility and modern UX standards  

---

## 🧠 Lessons Learned

- How to structure React apps cleanly for multi-page educational flows  
- How to implement gamification mechanics with minimal dependencies  
- How to maintain responsiveness without Tailwind or Bootstrap  

---

## ⏱ Time Spent

> ~7 hours total:  
> 2 hrs structure/setup, 2 hrs features/logic, 2 hrs styling/responsiveness, 1 hr polish and deployment

---

## ✅ Author

Mark Agluba  
📧 aglubamark@yahoo.ca  

---

## 🎉 Thank You

This project was built for a frontend engineering assignment at Cher®.  
Thank you for reviewing my work!
