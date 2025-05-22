# Anime CRUD App (React + Jikan API + Context + React Router)

This is a multi-page React application that allows users to **Create**, **Read**, **Update**, and **Delete** anime entries using the public [Jikan API](https://docs.api.jikan.moe/#tag/anime) (read-only), with local memory simulating full CRUD functionality.

---

## 🚀 Features

- Fetches anime data from the Jikan API
- Simulates `Create`, `Update`, and `Delete` using local state
- Multi-page navigation using `react-router-dom`
- Form handling with `useState`
- Global state management with React Context API
- Console logs and comments added for clarity

---

## 📁 Project Structure
# Anime CRUD App (React + Jikan API + Context + React Router)

This is a multi-page React application that allows users to **Create**, **Read**, **Update**, and **Delete** anime entries using the public [Jikan API](https://docs.api.jikan.moe/#tag/anime) (read-only), with local memory simulating full CRUD functionality.

---

## 🚀 Features

- Fetches anime data from the Jikan API
- Simulates `Create`, `Update`, and `Delete` using local state
- Multi-page navigation using `react-router-dom`
- Form handling with `useState`
- Global state management with React Context API
- Console logs and comments added for clarity

---

## 📁 Project Structure
- src/
- ├── App.jsx # Main router and layout
- ├── api.js # Axios-based API helper
- ├── context/
- │ └── AnimeContext.jsx # Local store using React Context
- ├── pages/
- │ ├── Home.jsx # Home page
- │ ├── AnimeList.jsx # Page to list all anime
- │ ├── AnimeDetail.jsx # Page to view details of an anime
- │ └── AnimeForm.jsx # Form to create or edit anime
- └── main.jsx # Entry point, wraps App with AnimeProvider

## 🔧 Technologies Used

- **React**: Component-based UI
- **React Router DOM**: Page navigation
- **Axios**: API requests
- **Jikan API**: Anime data source (read-only)
- **React Context API**: Local state management for simulated CRUD

---

## 📌 Component Breakdown

### 1. `App.jsx`
- Sets up routes for:
  - Home page
  - Anime list
  - Anime detail
  - New/edit form
- Includes simple nav bar using `<Link />`

---

### 2. `api.js`
- Axios instance set up for:
  - `GET /anime` — fetches anime list
  - `GET /anime/:id` — fetches anime details
- Simulated `create`, `update`, `delete` with `Promise.resolve()` (for mock backend)

---

### 3. `AnimeContext.jsx`
- Stores local anime list created by the user
- Provides:
  - `getAllAnime()` — combines fetched + local anime
  - `createAnime()` — simulates new anime creation
  - `updateAnime()` — simulates edit
  - `deleteAnime()` — simulates removal
  - `findAnimeById(id)` — locate anime by ID

---

### 4. `AnimeList.jsx`
- Displays all anime entries (API + user-created)
- Each item links to detail view
- Includes "Add New" button

---

### 5. `AnimeDetail.jsx`
- Shows full details for one anime
- Includes Edit and Delete buttons
- Calls `deleteAnime()` from context

---

### 6. `AnimeForm.jsx`
- Reusable for both creating and editing anime
- Controlled form using `useState`
- Uses `createAnime()` or `updateAnime()` based on route param

