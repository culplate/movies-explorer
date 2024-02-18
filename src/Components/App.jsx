import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import HomePage from "../Pages/HomePage";
import MoviesPage from "../Pages/MoviesPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage";
import NotFound from "../Pages/NotFound";
import css from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className={css.container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
