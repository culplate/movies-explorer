import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import HomePage from "../Pages/HomePage";
import MoviesPage from "../Pages/MoviesPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage";
import NotFound from "../Pages/NotFound";
import css from "./App.module.css";
import { Toaster } from "react-hot-toast";

function App() {
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
      <Toaster position="top-right" />
    </>
  );
}

export default App;
