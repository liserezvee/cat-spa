# 🐱 Cat Facts React App
🔗 Live Demo (Vercel): https://cat-spa.vercel.app/

A simple React application that displays a list of cat facts with images. Each item can be clicked to view a detail screen. Facts are fetched from the public [`https://catfact.ninja`](https://catfact.ninja/facts) API, and each item is visually enhanced with a random cat image.

---

## ✨ Features

- 🔄 Fetches 30 cat facts from the `/facts` endpoint of [catfact.ninja](https://catfact.ninja/facts)
- 🐱 Each item displays:
  - A **square cat image** from [placekittens.com](https://loremflickr.com/300/200/kitten)
  - A **single-line title** with ellipsi
  - The **fact length**
- 🔎 **Details page** for each item shows:
  - A full-size image
  - The full fact (no truncation)
- 📄 **Pagination**: Displays 5 items per page (handled manually since API pagination is optional)
- ✅ Fully responsive and styled with Tailwind CSS 

---

## 📦 Technologies Used

- React (with hooks)
- React Router (`react-router-dom`)
- Axios (for API requests)
- Tailwind CSS (optional, depending on your setup)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/cat-facts-app.git
cd cat-facts-app
